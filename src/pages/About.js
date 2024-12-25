import React from 'react';
import './styles/About.css'; // Importing the About.css for styling

function About() {
  return (
    <div className="about-container">
      <h1>About Insightify</h1>
      <div className="about-content">
        <p>
          Welcome to <strong>Insightify</strong>, your one-stop platform for staying up-to-date with concise, relevant, and meaningful news. Our goal is to change the way news is consumed by offering a user-centric, efficient, and highly engaging experience.
        </p>
        <p>
          <strong>Insightify</strong> is designed with both a website and a mobile application to provide seamless access to news anytime, anywhere. Built with cutting-edge technologies, Insightify allows users to easily browse, filter, and engage with news articles across various categories, while offering personalized recommendations based on their reading preferences.
        </p>
        
        <h2>Insightify Platform Overview</h2>
        <h3>Website</h3>
        <p>
          The <strong>Insightify Website</strong> is designed for easy access to the latest news and articles. It offers real-time updates, dynamic news sorting, and an intuitive user interface to enhance the news consumption experience.
        </p>

        <h3>Mobile Application</h3>
        <p>
          The <strong>Insightify Mobile App</strong> allows users to read news on-the-go. It comes with advanced features like article summarization using NLP and real-time push notifications for breaking news.
        </p>

        <h2>Tech Stack</h2>
        <h3>Website</h3>
        <ul>
          <li><strong>Frontend</strong>: React, HTML5, CSS3, JavaScript</li>
          <li><strong>Backend</strong>: Spring Boot, MySQL, JWT Authentication</li>
          <li><strong>APIs</strong>: NewsAPI, Firebase</li>
          <li><strong>Hosting</strong>: AWS EC2, S3, RDS</li>
          <li><strong>Version Control</strong>: Git, GitHub</li>
        </ul>

        <h3>Mobile Application</h3>
        <ul>
          <li><strong>Frontend</strong>: React Native, JavaScript</li>
          <li><strong>Backend</strong>: Spring Boot, MySQL, Firebase</li>
          <li><strong>Push Notifications</strong>: Firebase Cloud Messaging</li>
          <li><strong>Authentication</strong>: Firebase Authentication, JWT</li>
          <li><strong>Version Control</strong>: Git, GitHub</li>
        </ul>

        <h2>Current Features</h2>
        <ul>
          <li><strong>Personalized News Feed</strong>: Tailored news recommendations based on user interests and preferences.</li>
          <li><strong>Article Summarization</strong>: NLP-powered summaries to make news consumption faster and more efficient.</li>
          <li><strong>Category-based News</strong>: Users can explore news by categories such as Sports, Politics, Technology, Health, etc.</li>
          <li><strong>Favorites</strong>: Bookmark and save articles for later reading on both the website and mobile app.</li>
          <li><strong>Real-time Push Notifications</strong>: Get notified instantly about breaking news and important updates.</li>
        </ul>

        <h2>Future Features</h2>
        <ul>
          <li><strong>Multilingual Support</strong>: Expanding to support multiple languages for a global audience.</li>
          <li><strong>Voice Interaction</strong>: Enabling users to interact with news using voice commands and voice summarization.</li>
          <li><strong>Advanced NLP Summarization</strong>: Integrating AI models for even more accurate and context-aware article summaries.</li>
          <li><strong>Personalized Alerts</strong>: Advanced notifications and alerts tailored to specific user interests.</li>
          <li><strong>Integration with Social Media</strong>: Share news articles directly to social platforms from within the app.</li>
        </ul>

        <h2>Meet the Team</h2>
        <p>Our team is a group of passionate professionals with expertise in various domains of technology, design, and development. Together, we've created <strong>Insightify</strong> to provide a modern news experience that is personalized and easy to use.</p>

        <div className="team-section">
          <div className="team-member">
            <h3>Suraj Kumar Sahu</h3>
            <p><strong>Lead Developer & Architect</strong><br />Suraj brings expertise in full-stack development, backend architecture, and cloud computing. His vision for Insightify ensures that users have an exceptional and scalable experience.</p>
          </div>
          <div className="team-member">
            <h3>Anurupam Sinha</h3>
            <p><strong>Frontend Specialist</strong><br />Anurupam is responsible for crafting the user interface of Insightify. He is passionate about creating intuitive and visually appealing designs that offer smooth interactions for users.</p>
          </div>
          <div className="team-member">
            <h3>Bishnupada Sahu</h3>
            <p><strong>Backend & API Expert</strong><br />Bishnupada focuses on the backend infrastructure of Insightify, ensuring that the platform remains fast, secure, and efficient, handling thousands of requests seamlessly.</p>
          </div>
          <div className="team-member">
            <h3>Shiv Shankar Malla</h3>
            <p><strong>Quality Assurance & Deployment</strong><br />Shiv ensures that the application is rigorously tested and deployed in a reliable, scalable environment. His work is essential for the platform’s stability and user satisfaction.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
