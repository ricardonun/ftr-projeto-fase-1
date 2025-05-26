export function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <img src="/404.svg" alt="Logo" className="m-8 h-12 w-48" />
      <span className="text-2xl font-bold text-gray-800">
        Link não encontrado
      </span>
      <div className="flex w-80 flex-col">
        <span className="text-sm font-semibold text-gray-500">
          O link que você está tentando acessar não existe, foi removido ou é
          uma URL inválida.
        </span>
        <span className="w-text-sm font-semibold text-gray-500">
          Saiba mais em{" "}
          <a className="text-blue-base" href="brev.ly">
            brev.ly
          </a>
        </span>
      </div>
    </div>
  );
}
