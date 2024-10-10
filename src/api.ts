import axios from "axios";

const BASE_URL = `https://recruiting.verylongdomaintotestwith.ca/api/{{github_username}}/character`;

export const saveCharacter = async (characterData: any): Promise<void> => {
  try {
    await axios.post(BASE_URL, characterData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log("Character saved successfully");
  } catch (error) {
    console.error("Error saving character:", error);
    throw error;
  }
};
