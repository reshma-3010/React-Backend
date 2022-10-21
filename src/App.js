import { BrowserRouter, Route, Routes } from "react-router-dom";

import Nav from "./Component/Nav";
import Home from "./Component/Home";
import Tourism from "./Component/Tourism";
import Bollywood from "./Component/Bollywood";
import Technology from "./Component/Technology";
import Fitness from "./Component/Fitness";
import Food from "./Component/Food";
import SingleBlogPage from "./Component/SingleBlogPage";
import "./Component/Style.css";
import './App.css';


function App() {
  return (
    <div className="App">
      <apidata>
        <div className="heading-top">
          <div className="the">The</div>
          <div className="siren">Siren</div>
        </div>
        <BrowserRouter>
          <Nav />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/bollywood" element={<Bollywood />} />
            <Route path="/tourism" element={<Tourism />} />
            <Route path="/technology" element={<Technology />} />
            <Route path="/fitness" element={<Fitness />} />
            <Route path="/food" element={<Food />} />
            <Route path=":category/:articleid" element={<SingleBlogPage />} />
          </Routes>
        
        </BrowserRouter>
      </apidata>
    </div>
  );
}

export default App;