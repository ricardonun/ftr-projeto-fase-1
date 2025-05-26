interface IconButtonProps {
  icon: React.ReactNode;
}
export function IconButton({ icon }: IconButtonProps) {
  return (
    <button className="hover:border-blue-base flex h-8 w-8 items-center justify-center rounded-sm bg-gray-200 text-gray-500 hover:border-1">
      {icon}
    </button>
  );
}
