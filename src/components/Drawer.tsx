import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Stack, Button, useMediaQuery } from "@mui/material";
import reslinkLogo from "../assets/reslink.svg";
import { bottomOptions, sidebarOptions } from "./config";
import Avatar from "../assets/Avatar.png";
import logout from "../assets/icons/logout.svg";
import Box from "@mui/material/Box";

export default function DrawerComponent({
  drawerToggle: drawerToggle,
  drawer: drawer,
}: {
  drawerToggle: (open: boolean) => void;
  drawer: boolean;
}) {
  const drawerWidth = 240;
  return (
    <SwipeableDrawer
      sx={{
        width: drawerWidth,
        position:"sticky",
        top:0,
        flexShrink: 0,
        height: "100%",
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          border: "1px solid rgba(255, 255, 255, 0.08)",
          background: "rgba(255, 255, 255, 0.02)",
          backdropFilter: "blur(4.8px)",
        },
      }}
      className="drawer"
      
      anchor="left"
      open={drawer}
      variant={useMediaQuery("(max-width: 600px)") ? "temporary" : "permanent"}
      onClose={() => {
        {
          drawerToggle(false);
        }
      }}
      onOpen={() => {
        {
          drawerToggle(true);
        }
      }}
    >
      <Stack
        direction={"column"}
        spacing={2}
        justifyContent={"space-between"}
        height={"100%"}
      >
        <Box>
          <Box
            py={4}
            sx={{ width: "100%", display: "flex", justifyContent: "center" }}
          >
            <img src={reslinkLogo} alt="Reslink Logo" />
          </Box>

          <List>
            {sidebarOptions.map((item) => (
              <ListItem key={item.name}>
                <ListItemButton
                  sx={{
                    borderRadius: "6px",
                    ":hover": {
                      bgcolor: "#10121580",
                    },
                  }}
                  selected={item?.active}
                >
                  <ListItemIcon>
                    <img src={item.icon} alt={item.name + " icon"} />
                  </ListItemIcon>
                  <ListItemText primary={item.name} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>

        <Box>
          <List>
            {bottomOptions.map((item) => (
              <ListItem key={item.name}>
                <ListItemButton
                  sx={{
                    borderRadius: "6px",
                    ":hover": {
                      bgcolor: "#10121580",
                    },
                  }}
                  selected={item?.active}
                >
                  <ListItemIcon>
                    <img src={item.icon} alt={item.name + " icon"} />
                  </ListItemIcon>
                  <ListItemText primary={item.name} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider variant="middle" orientation="horizontal"></Divider>
          <Stack
            direction={"row"}
            m={1}
            spacing={1}
            alignItems={"center"}
            justifyContent={"space-evenly"}
          >
            <img src={Avatar} alt="avatar" width={30} height={30} />
            <Box>
              <Typography variant="subtitle2">Olivia Rhye</Typography>
              <Typography variant="caption">olivia@untitledui.com </Typography>
            </Box>
            <Button
              sx={{
                margin: "0",
                padding: "0",
                ":hover": {
                  bgcolor: "#10121580",
                },
                width: "30px",
              }}
              variant="text"
            >
              <img
                src={logout}
                alt="logout icon"
                style={{ padding: "4px" }}
                width={25}
                height={25}
              />
            </Button>
          </Stack>
        </Box>
      </Stack>
    </SwipeableDrawer>
  );
}
