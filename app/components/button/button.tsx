type CustomButtonProps = {
  children: React.ReactNode;
  kind?: 'default' | 'addOrRemove';
};

export type ButtonProps = CustomButtonProps & React.HTMLProps<HTMLButtonElement>;

export const Button = ({ children, kind = 'default', ...props }: ButtonProps) => (
  <button
    {...props}
    type="button"
    className={`${
      kind === 'default' ? 'rounded-xl px-4 py-1' : 'h-7 w-7 rounded-full'
    }   border border-appBlue bg-white text-appPrimary font-normal transition duration-300 ease-in-out hover:bg-sky-50`}>
    {children}
  </button>
);
