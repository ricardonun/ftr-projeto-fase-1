import { DownloadSimpleIcon, LinkIcon } from "@phosphor-icons/react";
import { Button } from "../components/Button";
import { ButtonSecondary } from "../components/ButtonSecondary";
import { Input } from "../components/Input";
import { Link } from "../components/Link";

export function Home() {
  return (
    <div className="md:px-24 md:py-8">
      <img src="/Logo.svg" alt="Logo" className="m-8 h-6 w-24" />

      <div className="flex flex-col gap-4 md:flex-row">
        <div className="flex h-80 w-96 flex-col gap-5 rounded-lg bg-gray-100 p-6 md:h-96">
          <span className="text-lg font-bold">Novo Link</span>
          <Input placeHolder="www.exemplo.com.br" title="LINK ORIGINAL"></Input>
          <Input placeHolder="brev.ly/" title="LINK ENCURTADO"></Input>
          <Button children="Salvar link"></Button>
        </div>

        <div className="flex h-80 w-full flex-col gap-5 rounded-lg bg-gray-100 p-6">
          <div className="flex justify-between">
            <span className="text-lg font-bold">Meus links</span>
            <ButtonSecondary
              icon={<DownloadSimpleIcon className="h-4 w-4" />}
              children="Baixar CSV"
            ></ButtonSecondary>
          </div>
          <div
            className="mx-2 h-[0.0625rem] w-78 bg-gray-300 md:w-full"
            aria-hidden="true"
          />
          <div className="flex flex-col items-center justify-center gap-3 pt-10">
            <LinkIcon className="h-8 w-8 text-gray-400" />
            <span className="text-xxs text-gray-500">
              AINDA NÃO EXISTEM LINKS CADASTRADOS
            </span>
          </div>
          <div>
            <Link
              countAcess={50}
              linkBrev="brev.ly/teste"
              linkDefault="wwww.google.com.br"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
