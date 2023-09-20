import Box from "@mui/material/Box";

import CssBaseline from "@mui/material/CssBaseline";

import Typography from "@mui/material/Typography";

import { Divider, Stack, useMediaQuery } from "@mui/material";

import DrawerComponent from "./Drawer";
import { useState } from "react";
import MainNav from "./MainNav";
import Stats from "./Stats";
import Projects from "./Projects";
import Activities from "./Activities";

export default function Dashboard() {
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

  return (
    <>
      <CssBaseline />
      <DrawerComponent  drawerToggle={setDrawerOpen} drawer={drawerOpen}  />
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "transparent" }}
        py={2}
        px={4}
        overflow={"auto"}
        height={"fit-content"}
      >
        <MainNav setDrawerOpen={setDrawerOpen} />

        <Stack direction={"column"}>
          <Box>
            <Typography
              variant={useMediaQuery("(max-width: 600px)") ? "h5" : "h4"}
            >
              Welcome Back, Olivia
            </Typography>
            <Typography
              variant={useMediaQuery("(max-width: 600px)") ? "h6" : "h5"}
            >
              Track, manage researchers and submissions.
            </Typography>
          </Box>
          <Stats />
          <Stack
            direction={useMediaQuery("(min-width:600px)") ? "row" : "column"}
            spacing={2}
            flexWrap={"wrap"} 
            justifyContent={"space-between"}
          >
            <Projects />
            <Activities />
          </Stack>
        </Stack>
        <Box pt={4}>
          <Divider />
          <Typography variant="caption" color="gray">
            Copyright © 2023. Reslink. All rights reserved.
          </Typography>
        </Box>
      </Box>
    </>
  );
}
