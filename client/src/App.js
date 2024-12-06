import React, { useState } from "react";
import "./app.css";

const App = () => {
  const [restaurantName, setRestaurantName] = useState("");
  const [recommendations, setRecommendations] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [selectedRestaurant, setSelectedRestaurant] = useState(""); 

  const handleInputChange = (e) => {
    setRestaurantName(e.target.value);
  };

  const handleSelectChange = (e) => {
    setSelectedRestaurant(e.target.value);
    setRestaurantName(e.target.value); 
  };

  const fetchRecommendations = async () => {
    setErrorMessage(""); 
    setRecommendations([]); 

    const nameToUse = restaurantName.trim() || selectedRestaurant; 

    if (!nameToUse) {
      setErrorMessage("Please enter or select a restaurant name.");
      return;
    }

    try {
      const response = await fetch("https://glowing-trout-pjrvr9gxr5qj26jgj-5000.app.github.dev/recommend", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ restaurantName: nameToUse }),
      });

      const data = await response.json();

      if (!response.ok) {
        setErrorMessage(data.error || "Failed to fetch recommendations.");
        return;
      }

      if (data.recommendations && data.recommendations.length > 0) {
        setRecommendations(data.recommendations);
      } else {
        setErrorMessage("No recommendations found.");
      }
    } catch (error) {
      setErrorMessage("An error occurred while fetching recommendations.");
    }
  };

  const clearInput = () => {
    setRestaurantName(""); 
    setSelectedRestaurant(""); 
    setRecommendations([]); 
    setErrorMessage(""); 
  };

  return (
    <div className="recommendation-container">
      <h1>Restaurant Recommendation System</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter a restaurant name"
          value={restaurantName}
          onChange={handleInputChange}
        />
        <button onClick={fetchRecommendations}>Get Recommendations</button>
        <button onClick={clearInput} className="clear-button">Clear</button>
      </div>

      <div className="select-container">
        <label htmlFor="restaurant-select">Or select a restaurant:</label>
        <select
          id="restaurant-select"
          value={selectedRestaurant}
          onChange={handleSelectChange}
        >
          <option value="">-- Select a Restaurant --</option>
          <option value="10 Downing Street">10 Downing Street</option>
          <option value="13 Dhaba">13 Dhaba</option>
          <option value="AB's - Absolute Barbecues">AB's - Absolute Barbecues</option>
          <option value="Absolute Sizzlers">Absolute Sizzlers</option>
          <option value="Urban Asia - Kitchen & Bar">Urban Asia - Kitchen & Bar</option>
          <option value="Yum Yum Tree - The Arabian Food Court">Yum Yum Tree - The Arabian Food Court</option>
          <option value="Zega - Sheraton Hyderabad Hotel">Zega - Sheraton Hyderabad Hotel</option>
          <option value="Zing's Northeast Kitchen">Zing's Northeast Kitchen</option>
          <option value="eat.fit">eat.fit</option>
        </select>
      </div>

      {errorMessage && <div className="error-message">{errorMessage}</div>}
      <div className="results-container">
        {recommendations.length > 0 && (
          <ul>
            {recommendations.map((restaurant, index) => (
              <li key={index}>{restaurant}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default App;
