import { Stack, Box, useMediaQuery, Button, Typography } from "@mui/material";
import Search from "./Search";

import MenuIcon from "@mui/icons-material/Menu";
import notifications from "../assets/icons/notifications.svg";
import AddIcon from "@mui/icons-material/AddRounded";

const MainNav = ({
  setDrawerOpen: setDrawerOpen,
}: {
  setDrawerOpen: (open: boolean) => void;
}) => {
  return (
    <>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
        mb={4}
        width={"100%"}
      >
        <Box
          hidden={useMediaQuery("(max-width: 600px)") ? false : true}
          sx={{ position: "relative", left: "-30px" }}
        >
          <Button
            onClick={() => {
              setDrawerOpen(true);
            }}
          >
            <MenuIcon />
          </Button>
        </Box>
        <Stack
          direction={"row"}
          display={useMediaQuery("(max-width: 600px)") ? "flex" : "none"}
          alignItems={"center"}
          spacing={2}
        >
          <img
            src={notifications}
            width={25}
            height={25}
            alt="notification icons"
          />
          <Button
            variant="contained"
            sx={{
              bgcolor: "#3FA268",
              border: "1px solid #3FA268",
              borderRadius: "25px",
              textTransform: "capitalize",
            }}
            size="medium"
          >
            <AddIcon />
            <Typography variant="caption" color="white" fontWeight={600} pl={1}>
              Create New Project
            </Typography>
          </Button>
        </Stack>
      </Stack>
      <Stack direction={"row"} justifyContent={"space-between"} mb={4}>
        <Search />
        <Stack
          direction={"row"}
          display={useMediaQuery("(max-width: 600px)") ? "none" : "flex"}
          alignItems={"center"}
          spacing={2}
        >
          <img
            src={notifications}
            width={25}
            height={25}
            alt="notification icons"
          />
          <Button
            variant="contained"
            sx={{
              bgcolor: "#3FA268",
              border: "1px solid #3FA268",
              borderRadius: "25px",
              textTransform: "capitalize",
            }}
            size="medium"
          >
            <AddIcon />
            <Typography variant="caption" color="white" fontWeight={600} pl={1}>
              Create New Project
            </Typography>
          </Button>
        </Stack>
      </Stack>
    </>
  );
};

export default MainNav;
