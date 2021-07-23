import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import HeaderComponent from './Components/Header/HeaderComponent';
import HomeScreen from './Screens/HomeScreen';
import { ChakraProvider } from "@chakra-ui/react"
import { extendTheme } from "@chakra-ui/react"
import BarChartScreen from './Screens/BarChartScreen';

const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
}
const theme = extendTheme({ colors })


function App() {
  return (
    <>
    <ChakraProvider theme={theme}>
    <BrowserRouter>

    <HeaderComponent/>
    <Route path="/" component={HomeScreen} exact></Route>
    <Route path="/BarChart" component={BarChartScreen} exact></Route>


    </BrowserRouter>
    </ChakraProvider>
    </>
  );
}

export default App;
