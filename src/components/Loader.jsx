import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import {Box} from '@mui/material'
export default function Loader() {
  return (
    <Box sx={{ display: "grid",width:"100%",height:"80vh",placeItems:"center" }}>
      <CircularProgress />
    </Box>
  );
}
