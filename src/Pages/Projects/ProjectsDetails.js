import { Container } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useParams } from "react-router";

import SingleProjectDetails from "./SingleProjectDetails";

const ProjectsDetails = () => {
  const { projectId } = useParams();
  /* const [projects, setProjects] = useState([]);

  //load projects
  useEffect(() => {
    fetch("./projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []); */
  console.log(projectId);

  const project = projects.filter((project) => project.id == projectId);
  console.log(project);
  //screen size
  const windowWidth = window.screen.width;
  const overflow = windowWidth > 1023 ? "scroll" : "hidden";
  const height = windowWidth > 1023 ? "38rem" : "auto";
  return (
    <Box
      sx={{
        bgcolor: "#31313A",
        borderRadius: "2%",
        height: height,
        overflowY: overflow,
        my: 2,
      }}
    >
      <Container>
        {" "}
        <SingleProjectDetails project={project} />
      </Container>
    </Box>
  );
};

export default ProjectsDetails;

export const projects = [
  {
    id: 1,
    title: "Super-bike",
    duration: "November, 2021",
    technologies: [
      "React",
      "React Router",
      "Firebase",
      " Material UI",
      "Node.JS",
      "MongoDB",
      "Express",
      "Sweet Alert2",
    ],
    img: "  https://i.ibb.co/YZsXbq3/super-bike1.jpg",
    img1: "https://i.ibb.co/4RRRVLf/super-bike2.jpg",
    img2: "https://i.ibb.co/SvtT48f/super-bike3.jpg",
    preview: "https://superbike-bd.web.app/",
    clientSide: "https://github.com/ImtiazMahmod/super-bike",
    serverSide: "https://github.com/ImtiazMahmod/super-bike-server",
    description1:
      "A big collection of world famous bikes. MERN Stack app with admin management. Authentication system implemented. User and Admin Dashboard implemented.",
    description2:
      "Reasonable price we take.    Well-designed of all bikes.Various collection of model. Interested to all customer.",
  },
  {
    id: 2,
    title: "TourA",
    duration: "November, 2021",
    technologies: [
      "React",
      "React Router",
      "Firebase",
      "Node.JS",
      "MongoDB",
      "Express",
      " React-Bootstrap",
    ],
    img: " https://i.ibb.co/fxdDHxP/toura.jpg",
    img1: "https://i.ibb.co/Nynf8Jd/toura1.jpg",
    img2: "https://i.ibb.co/92cNj2Z/toura2.jpg",
    preview: "https://tourabd10.web.app/",
    clientSide: "https://github.com/ImtiazMahmod/TourA-client",
    serverSide: "https://github.com/ImtiazMahmod/TourA-server",
    description1:
      " A big solution of Happy Travelling. MERN Stack app for traveler. User Dashboard and CRUD operation implemented.",
    description2:
      "React Router implemented.All type of tour spot covers. Incredible travelling Feel.Awesome Booking system. Friendly travel guide solution.",
  },
  {
    id: 3,
    title: "Doctero",
    duration: "October, 2021",
    technologies: [
      "React",
      "React Router",
      "Firebase",
      " Font Awesome",
      "React-Bootstrap",
    ],
    img: "https://i.ibb.co/Zc8vdBQ/doctero1.jpg",
    img1: "https://i.ibb.co/tqPLwD0/doctero2.jpg",
    img2: "https://i.ibb.co/3WHsX7G/doctero3.jpg",
    preview: "https://doctero-bd.web.app/",
    clientSide: "https://github.com/ImtiazMahmod/Doctero",
    description1:
      "Specialized Doctor & Experts. MERN Stack app for getting treatment. Authentication system implemented.  Context API, React Hook Form implemented.",
    description2:
      "Mind Blowing Support & Mentoring. World Famous Doctor service 24/7. Huge department for treatment. 24/7 emergency Support.",
  },
  {
    id: 4,
    title: "Autolane",
    duration: "September,2021",
    technologies: [
      "React",
      "React Router",
      "Firebase",
      "Axios",
      " Font Awesome",
      "React-Bootstrap",
      "React-Router-Hashlink",
    ],

    img: " https://i.ibb.co/44yKwfC/autolane.jpg",
    img1: " https://i.ibb.co/TLJxKTr/autolane1.jpg",
    img2: "https://i.ibb.co/r2kzFQ2/autolane2.jpg",
    preview: " https://autolane-bd.web.app",
    clientSide: "https://github.com/ImtiazMahmod/autolane-client",
    description1:
      " Expertize for Mechanics & Service.  Front End React app for getting mechanic service. Authentication system implemented.",
    description2:
      " Google Sign in implemented. 24/7 emergency Service. Friendly Mechanics.",
  },
  {
    id: 5,
    title: "NSTU",
    duration: "September,2021",
    technologies: ["React Router", "React-Bootstrap", "React", " Font Awesome"],

    img: "  https://i.ibb.co/x1rRWyT/nstu.jpg",
    img1: " https://i.ibb.co/Vwg3Kn8/nstu1.jpg",
    img2: "  https://i.ibb.co/gmS6bpm/nstu2.jpg",
    preview: " https://nstu.netlify.app/",
    clientSide: "https://github.com/ImtiazMahmod/NSTU",
    description1:
      "Represent official Noakhali Science & Technical University Site demo. Academic Details. Front End React app for university. Administrative Details. About Details.",
    description2: " React-Router implemented. React Bootstrap implemented.",
  },
];
