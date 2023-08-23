import Home from "./components/Home";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import WorkExperience from "./components/WorkExperience";


function App() {
  return (
    <div className=" font-Poppins flex flex-col">
      <Home/>
      <WorkExperience/>
      <Projects/>
      <Skills/>
    </div>
  );
}

export default App;
