import React from "react";
import { Attributes } from "../../types";
import { ATTRIBUTE_LIST } from "../../consts";

interface CharacterAttributesProps {
  attributes: Attributes;
  setAttributes: React.Dispatch<React.SetStateAction<Attributes>>;
}

const CharacterAttributes: React.FC<CharacterAttributesProps> = ({
  attributes,
  setAttributes,
}) => {
  const handleChange = (attr: keyof Attributes, value: number) => {
    if (value > 70) {
      alert("Attribute cannot exceed 70");
      return;
    }
    if (value < 0) {
      alert("Attribute cannot be negative");
      return;
    }
    setAttributes({
      ...attributes,
      [attr]: value,
    });
  };

  return (
    <div>
      {ATTRIBUTE_LIST.map((attr) => (
        <div key={attr}>
          <p>
            {attr}: {attributes[attr]}
          </p>
          <button onClick={() => handleChange(attr, attributes[attr] + 1)}>
            +
          </button>
          <button onClick={() => handleChange(attr, attributes[attr] - 1)}>
            -
          </button>
        </div>
      ))}
    </div>
  );
};

export default CharacterAttributes;
