import HeaderModeToogle from "@/components/header-mode-toogle"
import PagesNavigation from "@/components/pages-navigation"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const authors = [
  { name: "Lucas Pontes Soares", fallback: "LS" },
  { name: "Nycolly Fernanda Trombini Gotardo", fallback: "NG" },
  { name: "Yasmin de Oliveira", fallback: "YO" },
]

const teacher = { name: "Vinicius Godoy Marques", fallback: "VM" }

function Authors() {
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
        <div className="max-w-3xl mx-auto space-y-10 text-center">
          <div className="p-6 rounded-lg shadow-sm border dark:border-slate-800">
            <h3 className="text-2xl font-semibold mb-3">Faculdade</h3>
            <p className="text-lg text-foreground/80">FATEC Ourinhos</p>
            <p className="text-lg text-foreground/80">2° Análise e Desenvolvimento de Sistemas (AMS)</p>
          </div>

          <div className="p-6 rounded-lg shadow-sm border dark:border-slate-800">
            <h3 className="text-2xl font-semibold mb-6">Alunos</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {authors.map((author) => (
                <div key={author.name} className="flex flex-col items-center gap-3">
                  <Avatar className="w-32 h-32">
                    <AvatarImage src={`/${author.name}.png`} alt={author.name} />
                    <AvatarFallback className="text-3xl">{author.fallback}</AvatarFallback>
                  </Avatar>
                  <p className="text-lg font-medium">{author.name}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="p-6 rounded-lg shadow-sm border dark:border-slate-800">
            <h3 className="text-2xl font-semibold mb-6">Professor Orientador</h3>
            <div className="flex flex-col items-center gap-3">
              <Avatar className="w-32 h-32">
                <AvatarImage src="/path/to/bonato.png" alt={teacher.name} />
                <AvatarFallback className="text-3xl">{teacher.fallback}</AvatarFallback>
              </Avatar>
              <p className="text-lg font-medium">{teacher.name}</p>
            </div>
          </div>
        </div>
      </div>
      <PagesNavigation activePage="authors" />
    </div>
  )
}

export default Authors
