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
      kind === 'default' ? 'rounded-xl px-4 py-1' : 'h-8 w-8 rounded-full'
    }   border border-sky-700 bg-white text-sky-700 font-normal transition duration-300 ease-in-out hover:bg-sky-50`}>
    {children}
  </button>
);
