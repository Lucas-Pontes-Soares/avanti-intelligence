import { Link } from "react-router";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
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
      <h1 className="text-6xl font-bold text-red-500">404</h1>
      <p className="text-xl mt-4">Página Não Encontrada</p>

      <br />
      <Link to="/about" className="text-blue-500 hover:underline">Voltar para a Página Inicial</Link>
    </div>
  );
}
