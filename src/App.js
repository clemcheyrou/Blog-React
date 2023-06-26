import React from "react";
import CreateBlog from "./create";
import Blogslist from "./blogslist";
import BlogsView from "./show";
import BlogEdit from "./edit";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Blogslist/>}/>
          <Route path="/Create" element={<CreateBlog/>}/>
          <Route path="/show/:id" element={<BlogsView/>}/>
          <Route path="/editblog/:id" element={<BlogEdit/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
