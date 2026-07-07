import HTML from "../assets/images/html.png";
import CSS from "../assets/images/css.png";
import Javascript from "../assets/images/js.png";
import Reactjs from "../assets/images/React.png";
import Nodejs from "../assets/images/Nodejs.png";
import Git from "../assets/images/git'.png";
import Github from "../assets/images/github.png";


function Skill(){

  const skills=[
    {
      name:"HTML",
      image:HTML
    },
    {
      name:"CSS",
      image:CSS
    },
    {
      name:"JavaScript",
      image:Javascript
    },
    {
      name:"React",
      image:Reactjs
    },
    {
      name:"Node.js",
      image:Nodejs
    },
    {
      name:"Git",
      image:Git
    },
    {
      name:"GitHub",
      image:Github
    }
  ];



   return (
  <section id="skills">
    <h2 style={{textAlign:"center",width:"100%",marginBottom:"20px"}}>Skills</h2>

    {/* 1. This new parent div forces everything inside it onto a horizontal row */}
    <div className="skills-row">
      
      {/* Example of how your individual items should sit inside the row */}
      <div className="skill-item">
        <img src={HTML} className="skill-logo" style={{width:"80px",height:"80px",objectFit:"contain"}} alt="HTML" />
        <p>HTML</p>
      </div>

      <div className="skill-item">
        <img src={CSS} className="skill-logo" style={{width:"80px",height:"80px",objectFit:"contain"}} alt="CSS" />
        <p>CSS</p>
      </div>

      <div className="skill-item">
        <img src={Javascript} className="skill-logo" style={{width:"80px",height:"80px",objectFit:"contain"}} alt="JavaScript" />

        <p>JavaScript</p>
      </div>

      <div className="skill-item">
        <img src={Reactjs} className="skill-logo" style={{width:"80px",height:"80px",objectFit:"contain"}} alt="Reactjs" />
        <p>React js</p>
      </div>

      <div className="skill-item">
        <img src={Nodejs} className="skill-logo" style={{width:"80px",height:"80px",objectFit:"contain"}} alt="Nodejs" />
        <p>Node.js</p>
      </div>

      <div className="skill-item">
        <img src={Git} className="skill-logo"style={{width:"80px",height:"80px",objectFit:"contain"}} alt="Git" />
        <p>Git</p>
      </div>

      <div className="skill-item">
        <img src={Github} className="skill-logo"style={{width:"80px",height:"80px",objectFit:"contain"}} alt="Github"/>
        <p>Github</p>
      </div>



    </div>
  </section>
);

  
}

export default Skill;