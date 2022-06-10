import Edit from "./pages/edit/edit";
import Add from "./pages/add/add";
import { Route,Routes } from "react-router-dom";
import "./app/assets/sass/main.scss"
import "./app.scss"
import MainHeader from "./pages/main/main__header";
import Feedback from "./pages/feedback/feedback";


function App() {
  return (
    <>
    <Routes>
      <Route path="/" element ={<MainHeader />} />
      <Route path="/add" element={<Add />} />
      <Route path="/edit" element={<Edit />} />
      
      <Route path="/feedback/:id" element={<Feedback />} />
    </Routes>
    
  </>
  );
}

export default App;
