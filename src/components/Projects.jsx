function Project(){

  const projects=[

    {
      title:"Todo App",
      description:"Task management application",
      technology:"React + Vite"
    },

    {
      title:"Portfolio Website",
      description:"Personal portfolio website",
      technology:"React.js"
    },

    {
      title:"Registration Form",
      description:"Responsive form design",
      technology:"HTML + CSS"
    }

  ];


  return(

    <section id="projects">

      <h2 className="title">
        Projects
      </h2>


      <div className="cards">

      {
        projects.map((project,index)=>(

          <div className="card" key={index}>

            <h3>
              {project.title}
            </h3>

            <p>
              {project.description}
            </p>

            <p>
              <b>Technology:</b> {project.technology}
            </p>

          </div>

        ))
      }

      </div>


    </section>

  );
}

export default Project;