interface RedirectProps {
  link?: string;
}

export function Redirect({ link }: RedirectProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-6">
      <img src="/Logo_Icon.svg" alt="Logo" className="m-8 h-6 w-24" />
      <span className="text-2xl font-bold text-gray-800">
        Redirecionando...
      </span>
      <div className="flex flex-col items-center">
        <span className="text-sm font-semibold text-gray-500">
          O link será aberto automaticamente em alguns instantes.{" "}
        </span>
        <span className="text-sm font-semibold text-gray-500">
          Não foi redirecionado?{" "}
          <a className="text-blue-base" href={link}>
            Acesse aqui
          </a>
        </span>
      </div>
    </div>
  );
}
