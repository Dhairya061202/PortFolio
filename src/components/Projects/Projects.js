import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import photoSecond from "../../image/2_photo.png";
import photoFirst from "../../image/5photo.png";
import '../Projects/Projects.css'
import ecommerce from '../../image/01.png'

const Projects = () => {
  return (
    <section id="cards">
      <h2 className="projectTitle">My Projects</h2>
      <div
        style={{
          display: "flex",
          flexWrap:"wrap",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
        }}
      >


<Card className="card"
          style={{
            width: "18rem",
            background: "rgb(50, 50, 50)",
            color: "white",
            marginRight: "1.5rem",
            height:"100%"
          }}
        >
          <Card.Img variant="top" src={ecommerce} />
          <Card.Body>
            <Card.Title>CLOTHIFY | online shopping</Card.Title>
            <Card.Text style={{fontSize:"0.8rem",textOverflow: "ellipsis"}}>
            I'm thrilled to introduce Clothify, a new e-commerce platform that offers a wide range of fashion clothing for men, women, and kids. Built using the MERN stack (MongoDB, Express.js, React, and Node.js), Clothify aims to provide a seamless and enjoyable shopping experience for fashion enthusiasts.This website will be fully responsive and functional
            </Card.Text>
            <div
              className="btn-flex"
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <a href="https://clothify-commerce.netlify.app/" target="_blank" rel="noreferrer">
                <Button style={{ color: "black", width: "7rem" }}>Demo</Button>
              </a>
              <a href="https://github.com/Dhairya061202/MERN_Ecommerce" target="_blank" rel="noreferrer">
                <Button style={{ color: "black", width: "7rem" }}>Code</Button>
              </a>
            </div>
          </Card.Body>
        </Card>


        <Card className="card"
          style={{
            width: "18rem",
            background: "rgb(50, 50, 50)",
            color: "white",
            marginRight: "1rem",
          }}
        >
          <Card.Img variant="top" src={photoFirst} />
          <Card.Body>
            <Card.Title>Mobile-Dekho | online mobile shop</Card.Title>
            <Card.Text style={{fontSize:"0.8rem",textOverflow: "ellipsis"}}>
            📱 Welcome to our website, your one-stop shop for mobile phones and electronics! 🖥️ Explore TVs, laptops, audio devices, and more on our dynamic platform. 🛒 Built with HTML, CSS, JavaScript, and React.js, we ensure a seamless and responsive shopping experience across all devices. 💼 Dive in and discover your next electronic companion today!
            </Card.Text>
            <div
              className="btn-flex"
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <a href="https://mobile-dekho.netlify.app/" target="_blank" rel="noreferrer">
                <Button style={{ color: "black", width: "7rem" }}>Demo</Button>
              </a>
              <a href="https://github.com/Dhairya061202/MObile-Dekho" target="_blank" rel="noreferrer">
                <Button style={{ color: "black", width: "7rem" }}>Code</Button>
              </a>
            </div>
          </Card.Body>
        </Card>

        <Card className="card3"
          style={{
            width: "18rem",
            background: "rgb(50, 50, 50)",
            color: "white",
            marginLeft: "1rem",
          }}
        >
          <Card.Img variant="top" src={photoSecond} />
          <Card.Body>
            <Card.Title>Cinemo | online movies imdb ratings</Card.Title>
            <Card.Text style={{fontSize:"0.8rem",textOverflow: "ellipsis"}}>
            🎬 Welcome to our online movie IMDb rating website! Explore IMDb ratings for the latest movies on our seamless platform. 🌟 Built with HTML, CSS, JavaScript, and React.js, we provide an efficient and interactive experience. 🎥 Discover the ratings of your favorite movies, all in one place! 🎉 Join us now and stay updated with the newest releases!
            </Card.Text>
            <div
              className="btn-flex"
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <a href="https://cinemomovies.netlify.app/" target="_blank" rel="noreferrer">
                <Button style={{ color: "black", width: "7rem" }}>Demo</Button>
              </a>
              <a href="https://github.com/Dhairya061202/Online-Movies-Ratings-" target="_blank" rel="noreferrer">
                <Button style={{ color: "black", width: "7rem" }}>Code</Button>
              </a>
            </div>
          </Card.Body>
        </Card>
      </div>

      
    </section>
  );
};

export default Projects;
