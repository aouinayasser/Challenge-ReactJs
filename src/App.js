import './App.css';

function App() {
  return (
    <div>
      <body>
    <header className="header">
      <h1 className="h">John Doe</h1>
      <ul className="navmenu">
        <li><a href="#" className="a">About</a></li>
        <li><a href="#" className="a">Projects</a></li>
        <li><a href="#" className="a">Contact</a></li>
      </ul>
    </header>
    <section id="about-me">
      <h1 className="h">
        Hello, my name is
        <span className="rotate text-important">John doe</span>,<br />
        and i make horrible websites.
      </h1>
      <img className="avatar" src="./images/John-Doe.jpg" alt="jhon-doe" />
    </section>
    <section id="projects">
      <h2 className="text-important h">Projects</h2>
      <div className="projects-container">
        
        <div className="project-card">
          <img src="./images/proj1.jpg" alt="project" />
          <h3 className="h">Project 1</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus ex natus quis beatae perspiciatis repellat laudantium
            aliquam.
          </p>
          <p><a href="#">Github Link</a></p>
        </div>
       
        <div className="project-card">
          <img src="./images/proj2.jpg" alt="project" />
          <h3 className="h">Project 2</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus ex natus quis beatae perspiciatis repellat laudantium
            aliquam.
          </p>
          <p><a href="#">Github Link</a></p>
        </div>
        
        <div className="project-card">
          <img src="./images/proj3.jpg" alt="project" />
          <h3 className="h">Project 3</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus ex natus quis beatae perspiciatis repellat laudantium
            aliquam.
          </p>
          <p><a href="#">Github Link</a></p>
        </div>
        
        <div className="project-card">
          <img src="./images/proj4.jpg" alt="project" />
          <h3 className="h">Project 4</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus ex natus quis beatae perspiciatis repellat laudantium
            aliquam.
          </p>
          <p><a href="#">Github Link</a></p>
        </div>
      </div>
    </section>
    <section id="contact">
      <h2 className="text-important h">contact me</h2>
      <form>
        <label>Full Name</label>
        <input type="text" placeholder="Email" />
        <label>Email</label>
        <input type="email" placeholder="Email" />
        <label>Message</label>
        <textarea rows="5" cols="40"></textarea>
        <button className="button">Send</button>
      </form>
    </section>
    <footer className="footer">
      <p>Copyritghts &copy; GOMYCODE 2020</p>
    </footer>
  </body>
    </div>
  );
}

export default App;
