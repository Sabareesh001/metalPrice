import React from "react";
import "./About.css"; // Import CSS for styling if needed

const About = () => {
  return (
    <div className="about-container">
      <h1>About Metal Price</h1>
      <p>
        Welcome to <strong>Metal Price</strong>, your go-to platform for
        tracking real-time prices of precious and industrial metals. Whether
        you're an investor, manufacturer, or simply someone interested in market
        trends, Metal Price offers you accurate and up-to-date metal pricing
        information to help you stay informed.
      </p>

      <h2>Our Mission</h2>
      <p>
        At Metal Price, we aim to make the complex world of metal trading and
        pricing accessible to everyone. Our goal is to provide a reliable source
        of metal pricing data that empowers our users to make informed
        decisions, whether it's in trading, manufacturing, or investments.
      </p>

      <h2>Why Metal Price?</h2>
      <ul>
        <li>Real-time metal price updates</li>
        <li>Detailed historical data for market analysis</li>
        <li>Wide range of metals including gold, silver, copper, and more</li>
        <li>Easy-to-use interface with dynamic charts</li>
      </ul>
    </div>
  );
};

export default About;
