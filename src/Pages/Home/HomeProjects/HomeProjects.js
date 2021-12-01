import { Divider, Grid, Typography, Button } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { Link, Routes, Route } from "react-router-dom";
import ProjectModal from "../../Projects/ProjectModal";
import SingleProjects from "../../Projects/SingleProjects";

const HomeProjects = () => {
  const [projects, setProjects] = useState([]);

  //load projects
  useEffect(() => {
    fetch("./Projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);
  console.log(projects);
  ///screen size
  const windowWidth = window.screen.width;
  const overflow = windowWidth > 1024 ? "scroll" : "hidden";
  const height = windowWidth > 1024 && "38rem";
  console.log(overflow);
  //modal
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  return (
    <Box
      id="projects"
      sx={{
        bgcolor: "#31313A",
        borderRadius: "2%",
        height: height,
        overflowY: overflow,
        my: 2,
      }}
    >
      <Box sx={{ p: 3 }}>
        {" "}
        <Typography sx={{ fontWeight: "bold", pb: 3 }} variant="h5">
          Projects
        </Typography>
        <Divider />
      </Box>
      <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12, lg: 12 }}>
        {projects.slice(0, 6).map((project) => (
          <Grid item key={project.id} xs={4} sm={4} md={4} lg={6}>
            <SingleProjects project={project} handleOpen={handleOpen} />
          </Grid>
        ))}
      </Grid>
      <Box sx={{ textAlign: "center", my: 5 }}>
        {" "}
        <Link style={{ textDecoration: "none" }} to={`/projects`}>
          {" "}
          <Button size="small" variant="contained" color="warning">
            Explore More
          </Button>
        </Link>
      </Box>
      <Routes>
        <Route
          path={`/projects/:projectId`}
          element={<ProjectModal open={open} setOpen={setOpen} />}
        />
      </Routes>{" "}
    </Box>
  );
};

export default HomeProjects;
