import { useEffect, useRef, useState } from "react"
import HeaderModeToogle from "@/components/header-mode-toogle"
import PagesNavigation from "@/components/pages-navigation"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Camera, ClipboardPlus, FileImage, FolderOpen, Loader2Icon, X } from "lucide-react"
import { toast } from "sonner"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"

import * as tf from "@tensorflow/tfjs"

function MakePrediction() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [selectedModel, setSelectedModel] = useState("cnn")
  const [imagePreview, setImagePreview] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [isResultDialogOpen, setIsResultDialogOpen] = useState(false)
  const [predictionResult, setPredictionResult] = useState<string | null>(null)

  const fileInputRef = useRef<HTMLInputElement>(null)
  const cameraInputRef = useRef<HTMLInputElement>(null)

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      setSelectedFile(file)
      const previewUrl = URL.createObjectURL(file)
      setImagePreview(previewUrl)
    }
  }

  const handleRemoveFile = () => {
    setSelectedFile(null)
    if (imagePreview) {
      URL.revokeObjectURL(imagePreview)
      setImagePreview(null)
    }
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
    if (cameraInputRef.current) {
      cameraInputRef.current.value = ""
    }
  }

  const handleReset = () => {
    handleRemoveFile()
    setSelectedModel("cnn")
    setIsResultDialogOpen(false)
    setPredictionResult(null)
  }

  async function handleMakePrediction() {
    if (!selectedFile) {
      toast.error("Por favor, faça o upload de uma imagem de raio-x.")
      return
    }

    if (!selectedModel) {
      toast.error("Por favor, selecione um modelo de IA.")
      return
    }

    setIsLoading(true)
    try {
      toast.info("Fazendo previsão, aguarde...")

      // 1. Carregar o modelo
      let model
      if (selectedModel === "cnn") {
        model = await tf.loadLayersModel("/models/cnn/model.json")
      } else {
        model = await tf.loadLayersModel("/models/transfer/model.json")
      }

      // 2. Criar elemento HTMLImage para carregar a imagem
      const img = new Image()
      img.src = imagePreview as string

      await new Promise((resolve) => {
        img.onload = resolve
      })

      // 3. Pré-processar a imagem
      const tensor = tf.browser.fromPixels(img)
        .resizeBilinear([224, 224])
        .toFloat()
        .div(tf.scalar(255.0))
        .expandDims(0) // [1, 224, 224, 3]

      // 4. Fazer previsão
      const prediction = model.predict(tensor) as tf.Tensor
      const predictionData = await prediction.data()
      const pred = predictionData[0] // valor entre 0 e 1

      // 5. Determinar classe
      const classe = pred > 0.5 ? "PNEUMONIA" : "NORMAL"

      // 6. Probabilidade associada
      const prob = pred > 0.5 ? pred : 1 - pred
      const probPct = prob * 100

      // 7. Nível de certeza
      let nivel: string
      if (probPct >= 80) {
        nivel = "Alta probabilidade"
      } else if (probPct >= 60) {
        nivel = "Média probabilidade"
      } else {
        nivel = "Baixa probabilidade"
      }

      // 8. Texto final
      const result = `Classe ${classe} detectada com ${probPct.toFixed(2)}% de certeza (${nivel})`

      setPredictionResult(result)
      setIsResultDialogOpen(true)

    } catch (error) {
      toast.error("Ocorreu um erro ao fazer a previsão: " + String(error))
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    return () => {
      if (imagePreview) {
        URL.revokeObjectURL(imagePreview)
      }
    }
  }, [imagePreview])

  return (
    <>
      <div className="pb-20">
        <HeaderModeToogle />
        <div className="min-h-screen container mx-auto px-4 md:px-6 py-12 pt-24">
          <div className="flex flex-col max-w-3xl mx-auto md:flex-row items-center justify-center gap-8 md:gap-12 mb-16 text-center md:text-left">
            <img
              src="/AVANTI.svg"
              alt="Logo da Avanti Intelligence"
              className="w-52 h-52 rounded-full object-cover shadow-lg bg-white"
            />
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter">
                Avanti Intelligence
              </h1>
              <h2 className="text-xl md:text-2xl text-muted-foreground">
                <span className="font-semibold">O Futuro do Diagnóstico</span>:{" "}
                <span className="font-semibold">IA na Luta Contra a Pneumonia</span>
              </h2>
            </div>
          </div>

          <div className="max-w-3xl mx-auto space-y-8">
            {/* Upload */}
            <div className="p-6 rounded-lg shadow-sm border dark:border-slate-800 space-y-4">
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">
                  1. Upload do Raio-X <span className="text-red-400">*</span>
                </h3>
                <p className="text-foreground/80">
                  Primeiro, faça o upload da imagem do raio-x do tórax. Escolha uma das opções abaixo:
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="outline" onClick={() => fileInputRef.current?.click()}>
                  <FolderOpen className="mr-2 h-4 w-4" />
                  Escolher Arquivo
                </Button>
                <Button variant="outline" onClick={() => cameraInputRef.current?.click()}>
                  <Camera className="mr-2 h-4 w-4" />
                  Tirar Foto
                </Button>
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  className="hidden"
                  accept="image/*"
                />
                <input
                  type="file"
                  ref={cameraInputRef}
                  onChange={handleFileChange}
                  className="hidden"
                  accept="image/*"
                  capture="environment"
                />
              </div>

              {selectedFile && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 rounded-md bg-muted/50 border dark:border-slate-700">
                    <div className="flex items-center gap-3">
                      <FileImage className="h-5 w-5 text-primary" />
                      <span className="text-sm font-medium">{selectedFile.name}</span>
                    </div>
                    <Button variant="ghost" size="icon" onClick={handleRemoveFile}>
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                  {imagePreview && (
                    <div className="flex justify-center p-4 border rounded-lg dark:border-slate-700">
                      <img
                        src={imagePreview}
                        alt="Pré-visualização da imagem selecionada"
                        className="max-w-full h-auto max-h-80 rounded-md"
                      />
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Escolha do modelo */}
            <div className="p-6 rounded-lg shadow-sm border dark:border-slate-800 space-y-4">
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">
                  2. Escolha do Modelo <span className="text-red-400">*</span>
                </h3>
                <p className="text-foreground/80">
                  Selecione qual modelo de Inteligência Artificial você deseja utilizar para a análise.
                </p>
              </div>
              <RadioGroup
                value={selectedModel}
                onValueChange={setSelectedModel}
                className="space-y-2"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="cnn" id="cnn" />
                  <Label htmlFor="cnn">Rede Neural Convolucional (CNN)</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="transfer" id="transfer" />
                  <Label htmlFor="transfer">Transfer Learning (MobileNetV2)</Label>
                </div>
              </RadioGroup>
            </div>

            {/* Botão de previsão */}
            <div className="flex flex-col items-center gap-4">
              {isLoading ? (
                <Button size="lg" disabled className="w-48">
                  <Loader2Icon className="mr-2 h-4 w-4 animate-spin" />
                  Fazendo previsão...
                </Button>
              ) : (
                <Button
                  size="lg"
                  className="bg-green-600 hover:bg-green-700 dark:bg-green-600 dark:hover:bg-green-700 text-white"
                  onClick={handleMakePrediction}
                >
                  <ClipboardPlus className="mr-2 h-5 w-5 text-white" />
                  Fazer Previsão
                </Button>
              )}
            </div>
          </div>
        </div>
        <PagesNavigation activePage="make-prediction" />
      </div>

      {/* Resultado */}
      <AlertDialog open={isResultDialogOpen} onOpenChange={setIsResultDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Resultado da Previsão</AlertDialogTitle>
            <AlertDialogDescription>
              {predictionResult}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <div className="flex justify-center p-4 border rounded-lg dark:border-slate-700">
            {imagePreview ? (
              <img
                src={imagePreview}
                alt="Imagem analisada"
                className="max-w-full h-auto max-h-80 rounded-md"
              />
            ) : (
              <div className="text-foreground/80">Nenhuma imagem disponível</div>
            )}
          </div>
          <AlertDialogFooter className="sm:justify-center">
            <AlertDialogAction
              onClick={handleReset}
              className="bg-green-600 hover:bg-green-700 dark:bg-green-600 dark:hover:bg-green-700 text-white"
            >
              OK
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  )
}

export default MakePrediction
