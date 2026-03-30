type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  onClick?: () => void;
};

const Button = ({ children, variant = "primary", onClick }: ButtonProps) => {
  const baseStyles = "px-6 py-3 rounded-lg font-medium";

  const variants = {
    primary: "bg-black text-white",
    secondary: "border  border-gray-300 text-black",
  };

  return (
    <button className={`${baseStyles} ${variants[variant]}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
