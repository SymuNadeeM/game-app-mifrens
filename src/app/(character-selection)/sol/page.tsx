import CharacterSelectionTemplate from "@/app/components/screen/CharacterSelection/CharacterSelectionTemplate";
import { solCharacters } from "@/app/data/solAllData";

const SolPage = () => {
  return (
    <CharacterSelectionTemplate
      characters={solCharacters}
      initialSelectedCharacter={solCharacters[2]?.id}
      nextRoute="./homesol"
    />
  );
};

export default SolPage;
