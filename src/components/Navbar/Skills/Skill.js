import React from 'react'
import './Skill.css'
import htmllogo from '../../../image/html-removebg-preview.png'
import reactlogo from '../../../image/react-removebg-preview.png'

import nodelogo from '../../../image/node-removebg-preview.png'
import expresslogo from '../../../image/[removal.ai]_8601c20f-bf67-44bd-b01c-deae45f4cbd3-express.png'
import mongodblogo from '../../../image/lastdatabase.png'
import reduxlogo from '../../../image/reduxlogo.png'


const Skill = () => {
  return (
    <section id="skill">
<span className="skillTitle">What I do</span>
<span className="skillDesc">As a proficient MERN stack developer, I specialize in crafting dynamic web applications using MongoDB, Express.js, React, and Node.js. 🌐✨ I create responsive and interactive UIs with React, build scalable server-side applications with Node.js and Express, and manage robust NoSQL databases with MongoDB. 💻🔧 I excel in full-stack development, API integration, and deploying applications on cloud platforms like AWS and Heroku. 🚀🔍 Whether it's a single-page app or a complex web portal, I deliver high-quality, scalable solutions from concept to deployment. 🌟🔗</span>
<div className="skillBars">
    <div className="skillBar">
        <img src={htmllogo} alt="" className="skillBarImg" />
        <div className="skillBarText">
            <h2>HTML,CSS,JS</h2>
            <p className='ellipsis'>Proficient in HTML5, CSS3 (Flexbox, Grid, animations, preprocessors, frameworks), and modern JavaScript (ES6+) with expertise in DOM manipulation, event handling, and building interactive web applications</p>
        </div>
    </div>

    <div className="skillBar">
        <img src={reactlogo} alt="" className="skillBarImg" />
        <div className="skillBarText">
            <h2>REACT</h2>
            <p className='ellipsis'>
Highly proficient in React.js, adept at crafting responsive UIs with ES6+, managing state with Redux, utilizing hooks, optimizing performance, integrating RESTful APIs/GraphQL, employing React Router, and leveraging Webpack/Babel for efficient bundling.</p>
        </div>
    </div>

    <div className="skillBar">
        <img src={nodelogo} alt="" className="skillBarImg" />
        <div className="skillBarText">
            <h2>NODE.JS</h2>
            <p className='ellipsis'>In Node.js, I specialize in building scalable server-side applications, leveraging its asynchronous architecture, designing RESTful APIs with Express.js, managing middleware, and integrating with databases such as MongoDB and SQL for efficient data handling.</p>
        </div>
    </div>

    <div className="skillBar">
        <img src={expresslogo} alt="" className="skillBarImg" />
        <div className="skillBarText">
            <h2>EXPRESS</h2>
            <p className='ellipsis'>In Express.js, I craft efficient server-side applications, utilizing middleware for request handling, integrating with databases like MongoDB, implementing authentication, authorization mechanisms, and deploying on cloud platforms.</p>
        </div>
    </div>

    <div className="skillBar">
        <img src={mongodblogo} alt="" className="skillBarImg" />
        <div className="skillBarText">
            <h2>MONGODB</h2>
            <p className='ellipsis'>In MongoDB, I specialize in designing, managing NoSQL databases, ensuring data integrity, optimizing performance, and implementing complex queries/aggregations, with expertise in schema design, indexing, and utilizing features like transactions for scalability.</p>
        </div>
    </div>

    <div className="skillBar">
        <img src={reduxlogo} alt="" className="skillBarImg" />
        <div className="skillBarText">
            <h2>REDUX TOOLKIT</h2>
            <p className='ellipsis'>
In Redux and Redux Toolkit, I specialize in managing state in React projects, optimizing performance, and maintaining scalable codebases.</p>
        </div>
    </div>

    
</div>
    </section>
  )
}

export default Skill
