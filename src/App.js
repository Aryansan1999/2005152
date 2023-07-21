import Sidebar from "./components/Sidebar"
//import Feed from "./components/Feed"
import RegisterUer from "./components/RegisterUser"
import { Box, Stack } from "@mui/material";
 import NavBar from "./components/NavBar";
import FetchApi from "./components/FetchApi"
 //import { StyleSheet } from 'react-native';
 
function App() {

  return (
    <Box>
    
      <NavBar justifyContent={"center"}/>
      <RegisterUer />
      <Stack direction="row" spacing={2} justifyContent={"space-between"}>
      <Sidebar/>
     
     
      </Stack>
    </Box>
  );
}

export default App;
