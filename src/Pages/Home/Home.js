import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";

import NavigationMedium from "../Shared/NavigationMedium";
import NavigationSmall from "../Shared/NavigationSmall";

import HomeProjects from "./HomeProjects/HomeProjects";
import Me from "../Shared/Me";
import Contact from "../Contact/Contact";
import About from "../About/About";
import Blog from "../Blog/Blog";
import Navigation from "../Shared/Navigation";
import { Route, Routes } from "react-router";
import ProjectsDetails from "../Projects/ProjectsDetails";

export default function Home() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      {" "}
      <Container sx={{ position: "relative" }}>
        <Grid
          container
          sx={{
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          {" "}
          <Grid
            item
            lg={1}
            sm={2}
            md={1}
            sx={{
              display: {
                xs: "none",
                lg: "block",
              },
            }}
          >
            <Navigation />
          </Grid>
          <Grid
            item
            lg={1}
            sm={2}
            md={2}
            sx={{
              display: {
                xs: "none",
                sm: "block",
                lg: "none",
                position: "fixed",
                top: "25vh",
                left: "1rem",
              },
            }}
          >
            <NavigationMedium />
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              display: { xs: "block", sm: "none" },

              width: 1,
            }}
          >
            {" "}
            <NavigationSmall />
          </Grid>
          <Grid xs={12} sm={8} md={8} lg={5} item>
            <Me />
            <Grid
              sm={12}
              sx={{ display: { xs: "block", lg: "none", my: 2 } }}
              item
            >
              <About />
            </Grid>
            <Grid
              sm={12}
              sx={{ display: { xs: "block", lg: "none", my: 2 } }}
              item
            >
              <HomeProjects />{" "}
            </Grid>
            <Grid
              sm={12}
              sx={{ display: { xs: "block", lg: "none", my: 2 } }}
              item
            >
              <Blog />
            </Grid>
            <Grid
              sm={12}
              sx={{ display: { xs: "block", lg: "none", my: 2 } }}
              item
            >
              <Contact />
            </Grid>
          </Grid>
          <Grid lg={5} sx={{ display: { xs: "none", lg: "block" } }} item>
            <Routes>
              <Route exact path="/" element={<About />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/projects" element={<HomeProjects />} />
              <Route path="/blog" element={<Blog />} />
              <Route
                path={`/projects/:projectId`}
                element={<ProjectsDetails />}
              />
            </Routes>{" "}
            {/* <Box
              id="about"
              sx={{
                bgcolor: "#31313A",
                borderRadius: "2%",
                height: height,
                overflowY: overflow,
                my: 2,
              }}
            >
              <About />
              <HomeProjects />

              <Blog />
              <Contact />
            </Box> */}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
/*  <Box>
              <Typography
                variant="h3"
                sx={{
                  fontFamily: "poppins",
                  fontWeight: "700",
                  color: "#72B626",
                }}
              >
                {" "}
                I'M IMTIAZ MAHMOD
              </Typography>
              <Typography
                variant="h3"
                sx={{
                  fontFamily: "poppins",
                  fontWeight: "700",
                  color: "#666666",
                }}
              >
                WEB DEVELOPER{" "}
              </Typography>
            </Box>
            <Typography
              variant="body"
              sx={{
                lineHeight: 2.5,
              }}
            >
              Full Stack Developer in JavaScript, Node JS, React JS, MongoDB,
              Express JS, REST API, HTML and CSS. Seeking to leverage broad
              development experience and hands-on technical expertise in a
              challenging role as a Full-Stack Developer.
            </Typography> */
