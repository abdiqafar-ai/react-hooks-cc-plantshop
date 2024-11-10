import React, { useState } from "react";

function PlantCard({ plant, onUpdatePrice, onDeletePlant }) {
  const [isInStock, setIsInStock] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [newPrice, setNewPrice] = useState(plant.price);

  const handleClick = () => {
    setIsInStock((prevStatus) => !prevStatus);
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handlePriceChange = (e) => {
    setNewPrice(e.target.value);
  };

  const handleSaveClick = () => {
    if (newPrice <= 0 || isNaN(newPrice)) {
      alert("Please enter a valid price.");
      return;
    }
    onUpdatePrice(plant.id, newPrice);
    setIsEditing(false);
  };

  const handleDeleteClick = () => {
    onDeletePlant(plant.id);
  };

  return (
    <li className="card" data-testid="plant-item">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>
        Price: $
        {isEditing ? (
          <input type="number" value={newPrice} onChange={handlePriceChange} />
        ) : (
          newPrice
        )}
      </p>

      <button
        className={isInStock ? "primary" : "out-of-stock"}
        onClick={handleClick}
      >
        {isInStock ? "In Stock" : "Out of Stock"}
      </button>

      {isEditing ? (
        <button onClick={handleSaveClick}>Save</button>
      ) : (
        <button onClick={handleEditClick}>Edit Price</button>
      )}

      <button onClick={handleDeleteClick} className="delete-button">
        Delete
      </button>
    </li>
  );
}

export default PlantCard;
