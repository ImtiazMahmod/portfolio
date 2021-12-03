import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import ProjectsDetails from "./ProjectsDetails";
import { useNavigate } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "75%",
  height: "100vh",
  color: "#e0e0e1",
  px: 2,
  borderRadius: "2%",
  boxShadow: 24,
  overflowY: "scroll",
};

export default function ProjectModal({ open, setOpen }) {
  const navigate = useNavigate();
  const handleClose = () => {
    setOpen(false);
    navigate("/");
  };

  return (
    <Box>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <ProjectsDetails />
        </Box>
      </Modal>
    </Box>
  );
}
