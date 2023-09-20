import { Box, Stack, useMediaQuery, Typography } from "@mui/material";
import { stats } from "./config";

const Stats = () => {
  return (
    <Stack
      direction={useMediaQuery("(max-width: 600px)") ? "column" : "row"}
      justifyContent={"space-between"}
      alignItems={"center"}
      spacing={2}
      width={"100%"}
      my={4}
    >
      {stats.map((item) => (
        <Stack
          direction={"row"}
          alignItems={"center"}
          spacing={2}
          p={2} 
          width={"250px"}
          justifyContent={"space-between"}
          sx={{
            borderRadius: "8px",
            border: "1px solid rgba(255, 255, 255, 0.13)",
            bgcolor: "rgba(255, 255, 255, 0.04)",
            backdropFilter: "blur(10.399999618530273px)",
          }}
        >
          <Box>
            <Typography variant="h3" color="white" fontWeight={500}>
              {item.value}
            </Typography>
            <Typography variant="h6" color="white" fontWeight={600} sx={{textTransform:"capitalize"}}>
              {item.title}
            </Typography>
          </Box>
          <Box
            sx={{
              borderRadius: "50%",
              bgcolor: "#3FA268;",
              width: "50px",
              height: "50px",
            }}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <img
              src={item.icon}
              alt={item.title + " icon"}
              width={30}
              height={30}
            />
          </Box>
        </Stack>
      ))}
    </Stack>
  );
};

export default Stats;
