import { Stack, Box, Typography, Divider, useMediaQuery } from "@mui/material";
import { colorCodes, project } from "./config";

const Projects = () => {
  return (
    <Stack
      direction={"column"}
      sx={{
        borderRadius: "8px",
        border: "1px solid rgba(255, 255, 255, 0.13)",
        bgcolor: "rgba(255, 255, 255, 0.04)",
        backdropFilter: "blur(10.399999618530273px)",
      }}
      width={useMediaQuery("(min-width:600px)") ? "45%" : "100%"}
      maxWidth={"80vw"}
      margin={"auto"}
    >
      <Stack p={2} justifyContent={"space-between"} direction={"row"}>
        <Typography variant="h5" color="white" fontWeight={500}>
          Posted Projects
        </Typography>

        <a href="#">See All</a>
      </Stack>
      <Divider variant="fullWidth" sx={{ bgcolor: "white" }} />
      <Stack p={2} direction={"column"}>
        {project.map((item, index) => (
          <Stack direction={"row"} key={index} mb={2}  spacing={4} bgcolor={"rgba(33, 40, 44, 0.50);"} p={1} borderRadius={"4px"}>
            <Typography
              variant="h6"
              color="white"
              fontWeight={500}
              noWrap
              maxWidth={"320px"}
            >
              {item.title}
            </Typography>
            <Stack direction={"row"} alignItems={"center"} spacing={2}>
              <Box
              //@ts-expect-error
                sx={{ width: "20px", height:"20px", bgcolor: colorCodes[item.status],borderRadius:"50%" }}
              ></Box>
              <Typography variant="h6" color="white" fontWeight={300}>
                {item.statusText}
              </Typography>
            </Stack>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default Projects;
