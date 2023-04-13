import Box from "@mui/material/Box";
import * as React from "react";

export default function BoxSx(prop) {
  return (
    <Box
      sx={{
        mx: 1,
        my: 2,
        width: "7rem",
        height: "7rem",
        border: 4,
        borderColor: "black",
        borderRadius: "16px",
        textAlign: "center",
        backgroundColor: prop.isHeld ? "#59E391" : "#ffffe0",
        py: 1,
        boxShadow: "5px 10px #888888",
        cursor: "pointer",
      }}
      onClick={prop.handleClick}
    >
      <h1 sx={{ textAlign: "center" }}>{prop.value}</h1>
    </Box>
  );
}
