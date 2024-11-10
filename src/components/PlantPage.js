import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({
  plants,
  onSearch,
  onAddPlant,
  onUpdatePrice,
  onDeletePlant,
}) {
  return (
    <main>
      <NewPlantForm onAddPlant={onAddPlant} />
      <Search onSearch={onSearch} />
      <PlantList
        plants={plants}
        onUpdatePrice={onUpdatePrice}
        onDeletePlant={onDeletePlant}
      />
    </main>
  );
}

export default PlantPage;
