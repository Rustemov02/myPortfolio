import type { ToastContentProps } from "react-toastify";
import { X, CheckCircle2, AlertTriangle, Info } from "lucide-react";

type Variant = "success" | "error" | "info" | "warning";

interface Props {
  title?: string;
  message?: string;
  variant?: Variant;
  onUndo?: () => void;
  closeToast?: () => void;
}

const iconByVariant = (variant: Variant) => {
  switch (variant) {
    case "success":
      return <CheckCircle2 className="w-5 h-5 text-green-500" />;
    case "error":
      return <AlertTriangle className="w-5 h-5 text-red-500" />;
    case "warning":
      return <AlertTriangle className="w-5 h-5 text-yellow-500" />;
    default:
      return <Info className="w-5 h-5 text-sky-500" />;
  }
};

export default function CustomToast({
  closeToast,
  title,
  message,
  variant = "info",
  onUndo,
}: Props) {
  return (
    <div className="flex items-start gap-3 w-full max-w-md">
      <div className="mt-1">{iconByVariant(variant)}</div>

      <div className="flex-1 text-sm">
        {title && <p className="font-semibold">{title}</p>}
        {message && <p className="text-gray-700 mt-1">{message}</p>}

        {onUndo && (
          <button
            onClick={() => {
              onUndo();
              closeToast?.();
            }}
            className="mt-2 text-xs border border-gray-300 px-2 py-1 rounded hover:bg-gray-100"
          >
            Undo
          </button>
        )}
      </div>

      {/* <button
        onClick={closeToast}
        className="ml-2 p-1 rounded hover:bg-gray-100"
        aria-label="Close toast"
      >
        <X className="w-4 h-4 text-gray-500" />
      </button> */}
    </div>
  );
}
