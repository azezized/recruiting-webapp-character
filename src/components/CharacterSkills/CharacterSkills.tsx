// components/CharacterSkills/CharacterSkills.tsx
import React, { useState } from "react";
import { Attributes } from "../../types";
import { SKILL_LIST } from "../../consts";

interface CharacterSkillsProps {
  attributes: Attributes;
}

const CharacterSkills: React.FC<CharacterSkillsProps> = ({ attributes }) => {
  const [skillPoints, setSkillPoints] = useState<Record<string, number>>(
    Object.fromEntries(SKILL_LIST.map((skill) => [skill.name, 0]))
  );

  const calculateAvailablePoints = (): number => {
    const intelligenceModifier = Math.floor((attributes.Intelligence - 10) / 2);
    return 10 + 4 * intelligenceModifier;
  };

  const availablePoints = calculateAvailablePoints();

  const handleAddPoint = (skill: string) => {
    if (skillPoints[skill] < availablePoints) {
      setSkillPoints((prev) => ({
        ...prev,
        [skill]: prev[skill] + 1,
      }));
    }
  };

  const handleRemovePoint = (skill: string) => {
    if (skillPoints[skill] > 0) {
      setSkillPoints((prev) => ({
        ...prev,
        [skill]: prev[skill] - 1,
      }));
    }
  };

  const calculateModifier = (attributeValue: number): number => {
    return Math.floor((attributeValue - 10) / 2);
  };

  return (
    <div>
      <h2>Skills</h2>
      {SKILL_LIST.map((skill) => {
        const modifier = calculateModifier(attributes[skill.attributeModifier]);
        const totalValue = skillPoints[skill.name] + modifier;

        return (
          <div key={skill.name}>
            <p>
              {skill.name} - points: {skillPoints[skill.name]}{" "}
              <button onClick={() => handleAddPoint(skill.name)}>+</button>{" "}
              <button onClick={() => handleRemovePoint(skill.name)}>-</button>{" "}
              modifier ({skill.attributeModifier}): {modifier} total:{" "}
              {totalValue}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default CharacterSkills;
