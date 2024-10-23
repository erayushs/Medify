import { Box, Typography } from "@mui/material";
import React from "react";

function Headline() {
  return (
    <Box
      sx={{
        padding: "9.5px",
        backgroundColor: "primary.main",
        width: "100%",
        color: "#ffffff",
        textAlign: "center",
      }}
    >
      <Typography sx={{ fontSize: "14px" }}>
        The health and well-being of our patients and their health care team
        will always be our priority, so we follow the best practices for
        cleanliness.
      </Typography>
    </Box>
  );
}

export default Headline;
