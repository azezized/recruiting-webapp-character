import React, { useState } from "react";
import { Attributes } from "./types";
import CharacterAttributes from "./components/CharacterAttributes/CharacterAttributes";
import CharacterSkills from "./components/CharacterSkills/CharacterSkills";
import { saveCharacter } from "./api";

const App: React.FC = () => {
  const [attributes, setAttributes] = useState<Attributes>({
    Strength: 10,
    Dexterity: 10,
    Constitution: 10,
    Intelligence: 10,
    Wisdom: 10,
    Charisma: 10,
  });

  const [error, setError] = useState<string | null>(null);

  const handleSave = async () => {
    try {
      await saveCharacter({ attributes });
      alert("Character saved successfully!");
    } catch (err) {
      setError("Error saving character.");
    }
  };

  return (
    <div>
      <h1>Character</h1>
      <CharacterAttributes
        attributes={attributes}
        setAttributes={setAttributes}
      />
      <CharacterSkills attributes={attributes} />
      <button onClick={handleSave}>Save Character</button>
      {error && <div>{error}</div>}
    </div>
  );
};

export default App;
