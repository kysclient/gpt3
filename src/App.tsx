import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {ChakraProvider, extendTheme, useColorMode} from "@chakra-ui/react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainPage from "./pages/MainPage";

const config = {
    initialColorMode: 'dark',
    useSystemColorMode: false,
};

const theme = extendTheme({config});

function App() {

  return (
      <ChakraProvider resetCSS theme={theme}>
          {/*basename={process.env.PUBLIC_URL}*/}
          <BrowserRouter>
              <Routes>
                  <Route index element={ <MainPage/> }/>
                  {/*<Route path="/todo" element={<TodoPage/>}/>*/}

              </Routes>
          </BrowserRouter>
      </ChakraProvider>
  )
}

export default App
