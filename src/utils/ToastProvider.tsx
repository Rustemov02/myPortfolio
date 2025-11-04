import { ToastContainer } from "react-toastify";

export default function ToastProvider() {
  return (
    <ToastContainer
      position="top-right"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop
      closeOnClick
      draggable
      pauseOnHover
      theme="light"
      toastClassName="shadow-lg bg-white border border-gray-200 rounded-lg p-2"
    />
  );
}
