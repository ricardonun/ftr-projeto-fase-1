interface ButtonProps {
  children: React.ReactNode;
  icon?: React.ReactNode;
}
export function ButtonSecondary({ children, icon }: ButtonProps) {
  return (
    <button className="hover:border-blue-base h-8 w-32 rounded-sm bg-gray-200 px-2 text-gray-500 hover:border-1 disabled:opacity-50">
      <div className="flex items-center justify-between gap-0.5">
        {icon && <span className="text-sm text-gray-500">{icon}</span>}
        {children}
      </div>
    </button>
  );
}
