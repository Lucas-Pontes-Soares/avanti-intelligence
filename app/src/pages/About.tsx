import HeaderModeToogle from "@/components/header-mode-toogle"
import PagesNavigation from "@/components/pages-navigation"

function About() {

  return (
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
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter">Avanti Intelligence</h1>
              <h2 className="text-xl md:text-2xl text-muted-foreground">
                <span className="font-semibold">O Futuro do Diagnóstico</span>: <span className="font-semibold">IA na Luta Contra a Pneumonia</span>
                </h2>
            </div>
          </div>

          <div className="max-w-3xl mx-auto space-y-8">
            <div className="p-6 rounded-lg shadow-sm border dark:border-slate-800">
              <h3 className="text-2xl font-semibold mb-4">A Missão: Identificando um Desafio Crítico</h3>
              <p className="text-lg text-foreground/80 mb-4">Este projeto de Inteligência Artificial nasceu para atacar um problema de saúde pública: o <strong className="font-semibold text-green-600 dark:text-green-400">diagnóstico da pneumonia</strong>.</p>
              <p className="text-lg text-foreground/80 mb-4">O diagnóstico tradicional é feito por especialistas que analisam radiografias do tórax. Contudo, esse processo é frequentemente lento, suscetível a erros humanos e dependente da disponibilidade de médicos qualificados. Em regiões com poucos recursos, esse desafio é ainda maior.</p>
              <p className="text-lg text-foreground/80">Nosso objetivo foi aplicar técnicas de aprendizado de máquina para analisar automaticamente imagens de raio-X e <strong className="font-semibold text-green-600 dark:text-green-400">identificar a presença de pneumonia</strong>, agilizando e dando suporte a esse diagnóstico.</p>
            </div>

            <div className="p-6 rounded-lg shadow-sm border dark:border-slate-800">
              <h3 className="text-2xl font-semibold mb-4">O Impacto: Benefícios para a Saúde Pública</h3>
              <p className="text-lg text-foreground/80 mb-4">Este trabalho tem uma importância vital porque a solução baseada em IA contribui diretamente para a saúde pública:</p>
              <ul className="list-disc list-inside space-y-3 text-lg text-foreground/80">
                <li><strong className="font-semibold">Agilidade no Atendimento:</strong> O diagnóstico é acelerado, transformando o sistema em uma ferramenta de <strong className="font-semibold text-green-600 dark:text-green-400">apoio rápido para triagem médica</strong>.</li>
                <li><strong className="font-semibold">Aumento de Precisão:</strong> A análise algorítmica <strong className="font-semibold text-green-600 dark:text-green-400">aumenta a precisão</strong> na identificação da doença e ajuda a reduzir a margem de erros humanos.</li>
                <li><strong className="font-semibold">Suporte a Locais Carentes:</strong> Leva tecnologia para auxiliar o atendimento em <strong className="font-semibold text-green-600 dark:text-green-400">regiões com poucos especialistas</strong> ou recursos.</li>
              </ul>
            </div>

            <div className="p-6 rounded-lg shadow-sm border dark:border-slate-800">
              <h3 className="text-2xl font-semibold mb-4">O Processo de Desenvolvimento: Visão Geral</h3>
              <p className="text-lg text-foreground/80 mb-4">O projeto é uma aplicação de <strong className="font-semibold text-green-600 dark:text-green-400">Inteligência Artificial (IA)</strong> desenvolvida em <strong className="font-semibold text-green-600 dark:text-green-400">Python</strong> no ambiente <strong className="font-semibold text-green-600 dark:text-green-400">Google Colab</strong>, utilizando as bibliotecas <strong className="font-semibold text-green-600 dark:text-green-400">TensorFlow e Keras</strong>.</p>
              <p className="text-lg text-foreground/80">A ferramenta serve como um <strong className="font-semibold text-green-600 dark:text-green-400">apoio rápido na triagem</strong>, contribuindo para a saúde pública.</p>
            </div>

            <div className="p-6 rounded-lg shadow-sm border dark:border-slate-800">
              <h3 className="text-2xl font-semibold mb-4">A Tecnologia: Como o Modelo Funciona</h3>
              <p className="text-lg text-foreground/80 mb-4">Para isso, utilizamos o poder das <strong className="font-semibold text-green-600 dark:text-green-400">Redes Neurais Convolucionais (CNN)</strong>. O projeto envolveu duas abordagens principais:</p>
              <ol className="list-decimal list-inside space-y-3 text-lg text-foreground/80">
                <li>Uma <strong className="font-semibold">CNN customizada (Baseline)</strong>, construída para o problema.</li>
                <li>A técnica de <strong className="font-semibold text-green-600 dark:text-green-400">Transfer Learning</strong> utilizando a arquitetura <strong className="font-semibold text-green-600 dark:text-green-400">MobileNetV2</strong>, aproveitando o conhecimento prévio de uma rede já treinada em milhões de imagens.</li>
              </ol>
              <p className="text-lg text-foreground/80 mt-4">O <strong className="font-semibold text-green-600 dark:text-green-400">conjunto de dados real de radiografias</strong> foi a base de conhecimento.</p>
            </div>

            <div className="p-6 rounded-lg shadow-sm border dark:border-slate-800">
              <h3 className="text-2xl font-semibold mb-4">Nossos Resultados (Desempenho e Avaliação)</h3>
              <p className="text-lg text-foreground/80 mb-6">Para garantir a confiabilidade, avaliamos rigorosamente o desempenho dos nossos modelos. Os resultados de <strong className="font-semibold text-green-600 dark:text-green-400">Acurácia e Loss</strong> (Perda) de ambas as arquiteturas (CNN Baseline e MobileNetV2) foram registrados.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col items-center">
                  <img src="/matriz_confusao_cnn.png" alt="Matriz de Confusão CNN" className="w-full max-w-sm h-auto rounded-lg shadow-md mb-2" />
                  <p className="text-sm text-muted-foreground">Matriz de Confusão - CNN Baseline</p>
                </div>
                <div className="flex flex-col items-center">
                  <img src="/matriz_confusao_transfer.png" alt="Matriz de Confusão Transfer Learning" className="w-full max-w-sm h-auto rounded-lg shadow-md mb-2" />
                  <p className="text-sm text-muted-foreground">Matriz de Confusão - MobileNetV2</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <PagesNavigation activePage="about" />
    </div>
  )
}

export default About
