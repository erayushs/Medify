import { Alert } from "@mui/material";
import Snackbar from "@mui/material/Snackbar";

const SuccessSnackbar = ({ open, setOpen, message }) => {
  const handleClose = (reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <Snackbar
      open={open}
      autoHideDuration={5000}
      onClose={handleClose}
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      sx={{
        "& .MuiSnackbarContent-root": {
          minWidth: "300px",
          justifyContent: "center",
        },
      }}
    >
      <Alert
        onClose={handleClose}
        icon={false}
        sx={{
          bgcolor: "success.main",
          color: "#fff",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          borderRadius: "8px",
          padding: "12px 16px",
          fontSize: "16px",
          fontWeight: 500,
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
};

export default SuccessSnackbar;
