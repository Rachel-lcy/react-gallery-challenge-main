// TODO: Remove boilerplate code and set up to show your content
import "./App.css";
import Gallery from "./Gallery";
import imageData from "../public/assets/data";

function App() {

  return (
    <>
     <h1>Animals Showcase</h1>
     <div>
      <Gallery images = {imageData} />
     </div>
    </>
  );
}

export default App;
