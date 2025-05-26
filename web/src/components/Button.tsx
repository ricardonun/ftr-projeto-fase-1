interface ButtonProps {
  children: React.ReactNode;
}
export function Button({ children }: ButtonProps) {
  return (
    <button className="bg-blue-base hover:bg-blue-dark h-12 w-80 rounded-lg text-white disabled:opacity-50">
      <div className="div flex flex-col justify-center">{children}</div>
    </button>
  );
}
