import React, { useEffect, useState } from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {
  const [plants, setPlants] = useState([]);
  const [filteredPlants, setFilteredPlants] = useState([]);

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((response) => response.json())
      .then((data) => {
        setPlants(data);
        setFilteredPlants(data);
      })
      .catch((error) => console.error("Error fetching plants:", error));
  }, []);

  const handleSearch = (query) => {
    const filtered = plants.filter((plant) =>
      plant.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredPlants(filtered);
  };

  const handleAddPlant = (newPlant) => {
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPlant),
    })
      .then((response) => response.json())
      .then((addedPlant) => {
        setPlants((prevPlants) => [...prevPlants, addedPlant]);
        setFilteredPlants((prevPlants) => [...prevPlants, addedPlant]);
      })
      .catch((error) => console.error("Error adding plant:", error));
  };

  const handleUpdatePrice = (id, newPrice) => {
    fetch(`http://localhost:6001/plants/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ price: newPrice }),
    })
      .then((response) => response.json())
      .then((updatedPlant) => {
        setPlants((prevPlants) =>
          prevPlants.map((plant) =>
            plant.id === id ? { ...plant, price: updatedPlant.price } : plant
          )
        );
        setFilteredPlants((prevPlants) =>
          prevPlants.map((plant) =>
            plant.id === id ? { ...plant, price: updatedPlant.price } : plant
          )
        );
      })
      .catch((error) => console.error("Error updating price:", error));
  };

  const handleDeletePlant = (id) => {
    fetch(`http://localhost:6001/plants/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        setPlants((prevPlants) =>
          prevPlants.filter((plant) => plant.id !== id)
        );
        setFilteredPlants((prevPlants) =>
          prevPlants.filter((plant) => plant.id !== id)
        );
      })
      .catch((error) => console.error("Error deleting plant:", error));
  };

  return (
    <div className="app">
      <Header />
      <PlantPage
        plants={filteredPlants}
        onSearch={handleSearch}
        onAddPlant={handleAddPlant}
        onUpdatePrice={handleUpdatePrice}
        onDeletePlant={handleDeletePlant}
      />
    </div>
  );
}

export default App;

