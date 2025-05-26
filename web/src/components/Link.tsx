import { CopyIcon, TrashIcon } from "@phosphor-icons/react";
import { IconButton } from "./IconButton";

interface LinkProps {
  linkBrev: string;
  linkDefault: string;
  countAcess: number;
}
export function Link({ countAcess, linkBrev, linkDefault }: LinkProps) {
  return (
    <div className="flex justify-between gap-4">
      <div className="flex flex-col justify-center">
        <span className="text-blue-base flex-nowrap text-sm">{linkBrev}</span>
        <span className="text-xs text-gray-500">{linkDefault}</span>
      </div>
      <span className="p-8 text-xs text-gray-500">{`${countAcess} acessos`}</span>
      <div className="flex items-center justify-center gap-1">
        <IconButton icon={<CopyIcon className="h-4 w-4" />}></IconButton>
        <IconButton icon={<TrashIcon className="h-4 w-4" />}></IconButton>
      </div>
    </div>
  );
}
