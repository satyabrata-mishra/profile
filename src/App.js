import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Intropage from './Components/Intropage';
import Education from './Components/Education'
import Launguage from './Components/Launguage'
import Project from './Components/Projects'
import Blogs from './Components/Blogs';
import Certification from './Components/Certification';
import Contact from './Components/Contact';
import About from './Components/About'
function App() {
  document.title = "Satyabrata Mishra";
  return (
    <div className="app">
      <BrowserRouter>
        <Intropage />
        <Routes>
          <Route path="education" element={<Education />} />
          <Route path="launguage" element={<Launguage />} />
          <Route path="projects" element={<Project />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="certifications" element={<Certification />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
