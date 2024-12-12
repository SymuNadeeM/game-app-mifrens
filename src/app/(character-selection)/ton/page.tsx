import CharacterSelectionTemplate from "@/app/components/screen/CharacterSelection/CharacterSelectionTemplate";
import { tonCharacters } from "@/app/data/TonAllData";

const TonPage = () => {
  return (
    <CharacterSelectionTemplate
      characters={tonCharacters}
      initialSelectedCharacter={tonCharacters[0]?.id}
      nextRoute="./home"
    />
  );
};

export default TonPage;
