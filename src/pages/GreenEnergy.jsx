import React, { useState } from "react";
import "../styles/GreenEnergy.css"; // Assuming you've moved styles to a separate CSS file

function GreenEnergy() {
  const [solarPanelCost, setSolarPanelCost] = useState("");
  const [annualSavings, setAnnualSavings] = useState("");
  const [paybackPeriod, setPaybackPeriod] = useState("");

  // Function to calculate the savings and payback period
  const calculateGreenEnergy = (cost, savings) => {
    if (!cost || !savings || cost <= 0 || savings <= 0) {
      alert("Please enter valid positive numbers for both fields.");
      return;
    }
    const years = (cost / savings).toFixed(2);
    setPaybackPeriod(years);
    setAnnualSavings(savings);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      calculateGreenEnergy(solarPanelCost, annualSavings);
    }
  };

  const clearFields = () => {
    setSolarPanelCost('');
    setAnnualSavings('');
    setPaybackPeriod('');
  };

  return (
    <div className="green-energy-container">
      <h1>Green Energy</h1>
      <p>Learn about renewable energy sources and how you can make the switch to a greener, more sustainable future.</p>

      {/* Introduction to Green Energy */}
      <section className="section bg-light">
        <h2>What is Green Energy?</h2>
        <p>Green energy refers to energy that is produced from renewable, environmentally friendly sources. This includes energy derived from natural resources like the sun, wind, and water. Unlike fossil fuels, green energy is sustainable, produces little to no pollution, and helps combat climate change.</p>
        
        <h3>Types of Green Energy Sources:</h3>
        <ul>
          <li><strong>Solar Power</strong>: Harnesses energy from the sun using solar panels.</li>
          <li><strong>Wind Power</strong>: Uses turbines to capture energy from the wind.</li>
          <li><strong>Hydropower</strong>: Generates electricity through the movement of water, typically via dams or rivers.</li>
          <li><strong>Geothermal Energy</strong>: Captures heat from beneath the Earth's surface to generate power.</li>
          <li><strong>Biomass Energy</strong>: Uses organic materials such as plant and animal waste to produce energy.</li>
        </ul>
      </section>

      {/* Benefits of Green Energy */}
      <section className="section bg-medium">
        <h2>Benefits of Green Energy</h2>
        <p>Switching to green energy has a wide range of benefits for both the environment and your wallet:</p>
        <ul>
          <li><strong>Reduces Carbon Footprint</strong>: By using renewable energy, you help reduce greenhouse gas emissions that contribute to climate change.</li>
          <li><strong>Lower Energy Costs</strong>: Although initial setup costs can be higher, renewable energy systems like solar panels can reduce your electricity bills over time.</li>
          <li><strong>Energy Independence</strong>: By producing your own energy, you become less reliant on fossil fuels and external energy sources.</li>
          <li><strong>Job Creation</strong>: The green energy industry has been growing rapidly, creating new jobs in manufacturing, installation, and maintenance.</li>
        </ul>
      </section>

      {/* Green Energy Transition Calculator */}
      <section className="section bg-dark">
        <h2>Green Energy Transition Calculator</h2>
        <p>Use the calculator below to estimate the potential savings and payback period if you decide to switch to solar energy.</p>
        
        <div className="input-group">
          <label htmlFor="solar-cost">Cost of Solar Panel System (Rs.): </label>
          <input
            type="number"
            id="solar-cost"
            value={solarPanelCost}
            onChange={(e) => setSolarPanelCost(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Enter the cost of the solar panel system"
          />
        </div>
        
        <div className="input-group">
          <label htmlFor="annual-savings">Annual Savings (Rs.): </label>
          <input
            type="number"
            id="annual-savings"
            value={annualSavings}
            onChange={(e) => setAnnualSavings(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Enter your estimated annual savings"
          />
        </div>
        
        <button onClick={() => calculateGreenEnergy(solarPanelCost, annualSavings)}>Calculate</button>
        <button onClick={clearFields} className="clear-button">Clear</button>

        {paybackPeriod && (
          <div className="result">
            <h4>Results:</h4>
            <p>Estimated Payback Period: {paybackPeriod} years</p>
            <p>Estimated Annual Savings: Rs.{annualSavings}</p>
          </div>
        )}
      </section>

      {/* How to Get Started with Green Energy */}
      <section className="section bg-light">
        <h2>How to Get Started</h2>
        <p>Here’s how you can make the transition to green energy and reduce your environmental impact:</p>
        <ul>
          <li><strong>Research Renewable Energy Options</strong>: Start by learning about different renewable energy options available in your area, such as solar or wind power.</li>
          <li><strong>Get a Solar or Wind Energy Quote</strong>: Contact a reputable energy provider or installer to get a quote for installing solar panels or wind turbines at your home or business.</li>
          <li><strong>Switch to Green Energy Providers</strong>: If you’re not ready to install your own renewable energy system, you can often switch to a green energy provider in your area that sources energy from renewable sources.</li>
          <li><strong>Apply for Incentives and Rebates</strong>: Many governments and utilities offer financial incentives or rebates to make the transition to renewable energy more affordable.</li>
        </ul>
      </section>

      {/* Success Stories */}
      <section className="section bg-medium">
        <h2>Success Stories</h2>
        <p>Be inspired by people and organizations that have made the switch to green energy:</p>
        <ul>
          <li><strong>The Johnson Family</strong>: Reduced their electricity bills by 40% after installing solar panels on their roof. They now save $1,200 annually on energy costs!</li>
          <li><strong>GreenTech Innovations</strong>: A tech company that transitioned to 100% renewable energy. Their carbon footprint was reduced by 50% in just 3 years!</li>
          <li><strong>EcoCity Project</strong>: A local urban development project that integrates green roofs, solar panels, and wind turbines, creating a self-sustaining neighborhood.</li>
        </ul>
      </section>
    </div>
  );
}

export default GreenEnergy;
