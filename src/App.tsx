// App.tsx
import React, { useState } from "react";
import { Attributes } from "./types";
import CharacterAttributes from "./components/CharacterAttributes/CharacterAttributes";
import CharacterSkills from "./components/CharacterSkills/CharacterSkills";
import ClassDisplay from "./components/classDisplay/classDisplay";

const App: React.FC = () => {
  const [attributes, setAttributes] = useState<Attributes>({
    Strength: 10,
    Dexterity: 10,
    Constitution: 10,
    Intelligence: 10,
    Wisdom: 10,
    Charisma: 10,
  });

  return (
    <div>
      <h1>Character</h1>
      <CharacterAttributes
        attributes={attributes}
        setAttributes={setAttributes}
      />
      <CharacterSkills attributes={attributes} />
      <ClassDisplay attributes={attributes} /> {}
    </div>
  );
};

export default App;
