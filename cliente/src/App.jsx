//import './App.css';
import {Routes, Route, BrowserRouter} from "react-router-dom";
import Header from "./UI/Header/Header";
import Home from "./pages/Home";
import SearchPage from "./UI/SearchPage";
// import Home from './pages/Home';
// import Header from "./UI/Header";
// import SearchPage from "./UI/SearchPage";


function App() {


  return (
    <BrowserRouter>
    <Header/>
        <Routes>  
          <Route path='/' element={<Home />} />                    
          <Route path='/search' element={<SearchPage />} />
                             
        </Routes>
      </BrowserRouter>
  )
}

export default App
