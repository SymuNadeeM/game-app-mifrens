import CharacterSelectionTemplate from "@/app/components/screen/CharacterSelection/CharacterSelectionTemplate";
import { bscCharacters } from "@/app/data/bscAllData";

const BscPage = () => {
  return (
    <CharacterSelectionTemplate
      characters={bscCharacters}
      initialSelectedCharacter={bscCharacters[0]?.id}
      nextRoute="./homebsc"
    />
  );
};

export default BscPage;
