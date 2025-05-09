import { createContext, useContext, useState } from "react";
import { Snackbar, Alert, type AlertColor } from "@mui/material";

type ToastStateType = {
  open: boolean;
  message: string;
  severity: AlertColor;
};

type ToastContextType = {
  showToast: (message: string, severity?: AlertColor) => void;
};

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const ToastProvider = ({ children }: { children: React.ReactNode }) => {
  const [toast, setToast] = useState<ToastStateType>({
    open: false,
    message: "",
    severity: "info",
  });

  const showToast = (message: string, severity: AlertColor = "info") => {
    setToast({ open: true, message, severity });
  };

  const handleClose = () => {
    setToast((prev) => ({ ...prev, open: false }));
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <Snackbar
        open={toast.open}
        autoHideDuration={5000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert onClose={handleClose} severity={toast.severity} variant="filled">
          {toast.message}
        </Alert>
      </Snackbar>
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used inside ToastProvider");
  }
  return context;
};
