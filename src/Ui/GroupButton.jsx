import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";

export default function GroupButton(props) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        "& > *": {
          m: 1,
        },
      }}
    >
      <ButtonGroup variant="text" aria-label="Basic button group">
        <Button
          style={{ color: "black", fontSize: "14px" }}
          onClick={() => props.setTaskFilter("All")}
        >
          All
        </Button>
        <Button
          style={{ color: "black", fontSize: "14px" }}
          onClick={() => props.setTaskFilter("Active")}
        >
          Active
        </Button>
        <Button
          style={{ color: "black", fontSize: "14px" }}
          onClick={() => props.setTaskFilter("Completed")}
        >
          Completed
        </Button>
      </ButtonGroup>
    </Box>
  );
}
