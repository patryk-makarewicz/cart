type CustomButtonProps = {
  children: React.ReactNode;
};

export type ButtonProps = CustomButtonProps & React.HTMLProps<HTMLButtonElement>;

export const Button = ({ children, ...props }: ButtonProps) => (
  <button
    {...props}
    type="button"
    className="rounded-xl border border-sky-700 bg-white px-4 py-1 text-sky-700 transition duration-300 ease-in-out hover:bg-sky-50">
    {children}
  </button>
);
