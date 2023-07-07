import React from "react";
import CreateBlog from "./create";
import Homepage from "./pages/Homepage";
import BlogsView from "./show";
import BlogEdit from "./edit";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Signin from "./signup";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Homepage/>}/>
          <Route path="/signin/" element={<Signin/>}/>
          <Route path="/Create/" element={<CreateBlog/>}/>
          <Route path="/show/:id" element={<BlogsView/>}/>
          <Route path="/editblog/:id" element={<BlogEdit/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
