import React, { useState } from "react";
import { Attributes } from "../../types";
import { CLASS_REQUIREMENTS } from "../../consts";

interface ClassDisplayProps {
  attributes: Attributes;
}

const ClassDisplay: React.FC<ClassDisplayProps> = ({ attributes }) => {
  const [selectedClass, setSelectedClass] = useState<string | null>(null);

  const handleClassClick = (className: string) => {
    setSelectedClass(className);
  };

  return (
    <div>
      <h2>Available Classes</h2>
      {Object.entries(CLASS_REQUIREMENTS).map(([className, requirements]) => {
        const meetsRequirements = Object.entries(requirements).every(
          ([attr, minValue]) =>
            attributes[attr as keyof Attributes] >= (minValue as number)
        );

        return (
          <div
            key={className}
            onClick={() => handleClassClick(className)}
            style={{ cursor: "pointer" }}
          >
            <p>
              {className}:{" "}
              <span style={{ color: meetsRequirements ? "green" : "red" }}>
                {meetsRequirements
                  ? "Meets Requirements"
                  : "Does Not Meet Requirements"}
              </span>
            </p>
          </div>
        );
      })}

      {selectedClass && (
        <div>
          <h3>{selectedClass} Requirements</h3>
          <ul>
            {Object.entries(CLASS_REQUIREMENTS[selectedClass]).map(
              ([attr, minValue]) => (
                <li key={attr}>
                  {attr}: {minValue as number} {}
                </li>
              )
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ClassDisplay;
