interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: () => void;
  className?: string;
  children?: React.ReactNode;
  title?: string;
  size?: string;
}

const Button = ({
  onClick,
  className,
  children,
  size = "sm",
  title,
  ...props
}: ButtonProps) => {
  return (
    <>
      <button onClick={onClick} className={className} {...props}>
        {title}
        {children}
      </button>
    </>
  );
};

export default Button;
