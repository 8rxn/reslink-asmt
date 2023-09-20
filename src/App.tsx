import { Box } from "@mui/material";
import "./App.css";
// import Dashboard from "./components/Dashboard";
import Dashboard from "./components/Dashboardv2";
function App() {
  return (
    <>
      <Box className="container-box" sx={{ display: "flex" }}>
        <Dashboard/>
      </Box>
    </>
  );
}

export default App;
