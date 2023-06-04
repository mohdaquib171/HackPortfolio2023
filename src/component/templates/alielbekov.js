import React from 'react';
import { Helmet } from 'react-helmet'; // Used for managing all changes to the document head.

const AliElbekov = () => {
  const navBarToggle = (location) => {
    // Implement your navBarToggle functionality here.
  };

  // Call navBarToggle function after component did mount using React useEffect hook
  
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>AliElbekov</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" />
        <link href="//netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css" rel="stylesheet" />
        <link rel="icon" href="/images/profilepic.jpg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=PT+Mono&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://www.alielbekov.dev/styles/main.css" />
        <meta name="viewport" content="width=device-width initial-scale=1.0" />
      </Helmet>
      <>
  <div className="header">
    <nav
      className="navbar navbar-dark navbar-expand-lg bg-black"
      style={{ backgroundColor: "black" }}
    >
      <div className="container-fluid d-flex justify-content-center">
        <ul className="navbar-nav me-auto mb-2 mb-lg-1 justify-content-center">
          <li className="nav-item">
            <a
              id="navbar-landing"
              className="nav-link active text-white btn btn-lg mx-2 px-3"
              aria-current="page"
              href="/"
            >
              <i className="fas fa-home" /> Home{" "}
            </a>
          </li>
          <li className="nav-item">
            <a
              id="navbar-skills"
              className="nav-link active  text-white btn btn-lg mx-2 px-3"
              aria-current="page"
              href="/skills"
            >
              <i className="fa fa-lightbulb" />
              Skills
            </a>
          </li>
          <li className="nav-item">
            <a
              id="navbar-education"
              className="nav-link active text-white btn btn-lg mx-2 px-3"
              aria-current="page"
              href="/education"
            >
              <i className="fas fa-graduation-cap" /> Education
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
  <div className="landing">
    <div className="myshadow">
      <div className="me">
        <img
          className="profile profile-pic"
          src="images/profilepic.jpg"
          alt="profile-pic.jpg"
        />
        <p style={{ marginTop: 10, fontSize: 20 }}>
          Ali, Computer Science student at the University of Arizona.
        </p>
        <p style={{ marginTop: 10, fontSize: 25, color: "white" }}>
          I love coding, creating, and building applications.
        </p>
      </div>
      <div className="projects-box">
        <h2 style={{ color: "white" }}>My public projects:</h2>
        <div className="row">
          <div className="project-item col">
            <img
              className="project-icon"
              src="https://raw.githubusercontent.com/hackharvard/hackharvard.github.io/master/public/HH22_logo.png"
              alt=""
            />
            <a href="https://devpost.com/software/ctrl-c-and-ctrl-v?ref_content=user-portfolio&ref_feature=in_progress">
              Ctrl+C; Ctrl+V
            </a>
            <br />
            <div style={{ height: 200, overflow: "hidden", marginBottom: 20 }}>
              <a href="">
                <img
                  className="project-img"
                  src="/images/crtl.png"
                  alt="project.jpg"
                />
              </a>
            </div>
            <div className="project-info">
              A web-app that uses Discord bot and Social Media platforms' APIs
              to save posts from those platforms.
            </div>
            <div className="project-tools project-info">
              Tools: discord.js, nodejs, graphAPI
            </div>
          </div>
          <div className="project-item col">
            <img
              className="project-icon"
              src="https://ix.hackutd.co/_next/image?url=%2Fassets%2FHackUTD-IX-Logo.png&w=3840&q=75"
              alt=""
            />
            <a href="https://devpost.com/software/insure-it-ce2mvr">
              Review IT
            </a>
            <br />
            <div style={{ height: 200, overflow: "hidden", marginBottom: 20 }}>
              <a href="https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/295/309/datas/original.png">
                <img
                  className="project-img"
                  src="https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/295/309/datas/original.png"
                  alt="project.jpg"
                />
              </a>
            </div>
            <div className="project-info">
              A hackathon react-app thatt provides CBRE with actionable insights
              sourced from customer reviews. The app reads customer reviews and
              determines what improvements can be made to user experience with
              CBRE.
            </div>
            <br />
            <br />
            <div className="project-tools project-info">
              Tools: React, Flask, Chart.js, WebScraping, Google's machine
              learning library
            </div>
          </div>
        </div>
        <div className="row">
          <div className="project-item col">
            <a href="https://github.com/Eldorbek2001/Travelling-Salesman">
              Travelling Salesperson
            </a>
            <br />
            <div style={{ height: 200, overflow: "hidden", marginBottom: 20 }}>
              <a href="/images/Algorithm.png">
                <img
                  className="project-img"
                  src="/images/Algorithm.png"
                  alt="project.jpg"
                />
              </a>
            </div>
            <div className="project-info">
              This program uses heuristic and recursive approach to solve
              Travelling Salesman Problem. It helps the Salesman find the best
              way to travel across 10 cities.
            </div>
            <br />
            <br />
            <div className="project-tools project-info">
              Tools: Java, heuristic algorithm, lazy algorithm, graph data
              structures
            </div>
          </div>
          <div className="project-item col">
            <a href="https://github.com/Eldorbek2001/AlumniAssociation">
              Alumni Assiciation
            </a>
            <br />
            <div style={{ height: 200, overflow: "hidden", marginBottom: 20 }}>
              <a href="/images/Alumni.png">
                <img
                  className="project-img"
                  src="/images/Alumni.png"
                  alt="project.jpg"
                />
              </a>
            </div>
            <div className="project-info">
              It is a platform that I am building for the Alumni of a Language
              Teaching center.
            </div>
            <div className="project-tools project-info">
              Tools: MongoDB, TelegramBOT API, EJS, WebAuth
            </div>
          </div>
        </div>
        <div className="row">
          <div className="project-item col">
            <a href="https://github.com/AliElbekov/Practical">
              StackOverflow SQL db practice
            </a>
            <br />
            <div style={{ height: 200, overflow: "hidden", marginBottom: 20 }}>
              <a href="/images/Stack.png">
                <img
                  className="project-img"
                  src="/images/Stack.png"
                  alt="project.jpg"
                />
              </a>
            </div>
            &gt;
            <div className="project-info">
              An ASP.NET application that replicates StackOverflow by using its
              SQL database from 2010.
            </div>
            <br />
            <br />
            <div className="project-tools project-info">
              Tools: SQL DB, LINQ, StackOverflow db 2010, ASP.NET Core
            </div>
          </div>
          <div className="project-item col">
            <a href="https://github.com/AliElbekov/team-project-agra-wordle">
              Wordle JavaFX
            </a>
            <br />
            <div style={{ height: 200, overflow: "hidden", marginBottom: 20 }}>
              <a href="/images/Wordle.png">
                <img
                  className="project-img"
                  src="/images/Wordle.png"
                  alt="project.jpg"
                />
              </a>
            </div>
            <div className="project-info">
              A JavaFX worlde application built together with{" "}
              <span>
                <a href="https://github.com/sobitxanovr">Rustam,</a>
              </span>
              <span>
                <a href="">Alisha,</a>
              </span>{" "}
              <span>
                and <a href="https://github.com/kevingrad">Grady</a>
              </span>
            </div>
            <br />
            <div className="project-tools project-info">
              Tools: MongoDB, NodeJS API server, JavaFX library, Taiga.io,
              Teamwork
            </div>
          </div>
        </div>
      </div>
      {/* <img style="border: solid 0px white;" class="skill-gif" src="/gifs/landing_final.gif" alt="gif should be here"> */}
    </div>
    <div className="home-info" id="message">
      <div className="experience-box">
        <h2 style={{ color: "white" }}>My most recent experience:</h2>
        <div className="experience-item glow">
          <p>
            me.apply("internship", (res)=&gt;{"{"} <br />
            res.position, <br />
            res.department, <br />
            res.company <br />
            {"}"})
          </p>
        </div>
        <div className="experience-item">
          <h4>Web-Programmer,</h4>
          <p>
            {" "}
            Facilities Management, <br /> The University of Arizona
          </p>
        </div>
        <div className="experience-item">
          <h4>Teaching Assistant, </h4>
          <p>
            Computer Science Dept., <br />
            The University of Arizona
          </p>
        </div>
        <div className="experience-item">
          <h4>English Tutor,</h4>
          <p>
            LangApex, <br />
            Time Trusted Quality
          </p>
        </div>
      </div>
    </div>
  </div>
  <div className="container col-12">
    <footer className="py-3 my-4">
      <div
        className="footer container-fluid"
        style={{ marginLeft: "auto", marginRight: "auto" }}
      >
        <div className="row" style={{ textAlign: "center" }}>
          <div className="col-lg-auto col-md-3 footer-icon-div">
            <a
              className="footer-icon"
              href="https://github.com/Eldorbek2001/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github <i className="fab fa-light fa-github fa-lg footer-icon" />
            </a>
          </div>
          <div className="col-lg-auto col-md-3 footer-icon-div">
            <a
              className="footer-icon"
              href="https://www.linkedin.com/in/%F0%9F%91%A8%E2%80%8D%F0%9F%8E%93-ali-elbekov-b0077a203/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn{" "}
              <i className="fab fa-light fa-linkedin fa-lg footer-icon" />
            </a>
          </div>
          <div className="col-lg-auto col-md-3 footer-icon-div">
            <a
              className="footer-icon"
              href="https://t.me/alielbekov"
              target="_blank"
              rel="noopener noreferrer"
            >
              Telegram{" "}
              <i className="fab fa-light fa-telegram fa-lg footer-icon" />
            </a>
          </div>
          <div className="col-lg-auto col-md-3 footer-icon-div">
            <a
              className="footer-icon"
              href="https://www.instagram.com/aliyelbekov/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram{" "}
              <i className="fab fa-light fa-instagram fa-lg footer-icon" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</>

      
    </>
  );
};

export default AliElbekov;
