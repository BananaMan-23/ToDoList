import * as React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

export default function DeleteCompled(props) {
  return (
    <Stack direction="row" spacing={2}>
      <Button
        onClick={props.removeCompled}
        style={{ backgroundColor: "red", color: "#fff", fontSize: "12px" }}
        variant="contained"
        href="#contained-buttons"
      >
        delete completed
      </Button>
    </Stack>
  );
}
