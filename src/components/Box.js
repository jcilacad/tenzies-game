import Box from "@mui/material/Box";
import * as React from "react";
import Grid from "./Grid";

export default function BoxSx() {
  return (
    <Box
      sx={{
        borderColor: "#0B2434",
        p: 3,
        backgroundColor: "#ffffe0",
        borderRadius: 10,
      }}
    >
      <Grid />
    </Box>
  );
}
