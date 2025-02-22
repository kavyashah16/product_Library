import { Route, Routes } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import Create from "./pages/Create";
import { useColorModeValue } from "./components/ui/color-mode";

function App() {
  return (
    <Box minH={"100vh"} bg={useColorModeValue("#e8f9fd", "")}>
      <NavBar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/create' element={<Create/>}/>
        </Routes>
    </Box>
  );
}

export default App;
