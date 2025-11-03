import { cn } from "../utils/cn";

interface InputType extends React.InputHTMLAttributes<HTMLInputElement> {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  className?: string;
  variant?: "default";
  error?: string;
}

const Input = ({
  value,
  onChange,
  label,
  type = "text",
  className,
  variant = "default",
  placeholder,
  error,
  ...props
}: InputType) => {
  const styles = {
    default:
      "bg-white/5 border-2 border-white/10 text-white placeholder:text-white/30 focus:border-purple-500/50 focus:ring-purple-500/20 transition-all",
  };

  return (
    <div className="flex flex-col items-start">
      <label htmlFor="" className="text-[14px]">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        name=""
        value={value}
        onChange={onChange}
        className={cn(
          "w-full py-2 px-3 rounded-lg outline-none",
          styles[variant],
          className
        )}
        {...props}
      />
      {error && <p className="text-red-400 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default Input;
