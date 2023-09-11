type CustomButtonProps = {
  label: string;
};

export type ButtonProps = CustomButtonProps & React.HTMLProps<HTMLButtonElement>;

export const Button = ({ label }: ButtonProps) => {
  return <button style={{ backgroundColor: 'yellow', padding: '10px 20px', borderRadius: '4px' }}>{label}</button>;
};
