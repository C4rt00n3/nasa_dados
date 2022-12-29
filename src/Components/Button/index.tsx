import { StyledButton } from "./styled";
interface IButton {
  children: React.ReactNode;
  className: string;
  type?: "button" | "submit" | "reset" | undefined;
  id?: string;
  callBack?: () => void;
}
export function Button({ children, className, type, id, callBack }: IButton) {
  return (
    <StyledButton
      onClick={() => callBack}
      className={className}
      type={type}
      id={id}
    >
      {children}
    </StyledButton>
  );
}
