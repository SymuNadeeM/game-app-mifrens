import CharacterSelectionTemplate from "@/app/components/screen/CharacterSelection/CharacterSelectionTemplate";
import { ethCharacters } from "@/app/data/ethAllData";

const EthPage = () => {
  return (
    <CharacterSelectionTemplate
      characters={ethCharacters}
      initialSelectedCharacter={ethCharacters[0]?.id}
      nextRoute="./homeeth"
    />
  );
};

export default EthPage;
