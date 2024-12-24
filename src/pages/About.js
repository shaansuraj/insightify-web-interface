import React from 'react';
import './styles/About.css'; // Importing the About.css for styling

function About() {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <div className="about-content">
        <p>
          Welcome to <strong>Insightify</strong>, your go-to platform for staying informed with concise and meaningful news content. Our mission is to revolutionize the way news is consumed by offering a seamless and efficient experience for our users.
        </p>
        <p>
          This is the frontend application of <strong>Insightify</strong>, developed using <strong>React</strong>. It enables users to browse and interact with news articles, sorted by categories, and fetches real-time data from the <strong>Insightify Springboot Backend API</strong>. Designed with a focus on user-friendly features, our app makes staying informed easy and intuitive.
        </p>
        <h2>Meet the Team</h2>
        <ul className="team-list">
          <li><strong>Suraj Kumar Sahu</strong>: Lead Developer & Architect</li>
          <li><strong>Anurupam Sinha</strong>: Frontend Specialist</li>
          <li><strong>Bishnupada Sahu</strong>: Backend & API Expert</li>
          <li><strong>Shiv Shankar Malla</strong>: Quality Assurance & Deployment</li>
        </ul>
        <p>
          Together, we’ve combined our expertise to create a reliable and engaging platform to enhance your news consumption experience.
        </p>
      </div>
    </div>
  );
}

export default About;
