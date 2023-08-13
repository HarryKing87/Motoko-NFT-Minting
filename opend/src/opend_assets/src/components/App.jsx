import React from "react";
import Header from "./Header";
import Item from "./Item";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import homeImage from "../../assets/home-img.png";

function App() {
  const NFTId = "ryjl3-tyaaa-aaaaa-aaaba-cai";
  return (
    <div className="App">
      <Header />
      <Item id={NFTId}/>
      {/*<img className="bottom-space" src={homeImage} />*/}
      <Footer />
    </div>
  );
}

export default App;
