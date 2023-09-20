import * as Styled from './button.styles';

type CustomButtonProps = {
  label: string;
};

export type ButtonProps = CustomButtonProps & React.HTMLProps<HTMLButtonElement>;

export const Button = ({ label }: ButtonProps) => <Styled.Button>{label}</Styled.Button>;
