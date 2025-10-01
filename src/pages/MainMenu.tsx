import Book from "../../public/icons/Book";
import Characters from "../../public/icons/Characters";
import House from "../../public/icons/House";
import Spell from "../../public/icons/Spell";
import ButtonsOrder from "../components/UI/ButtonsOrder";
import MainTitle from "../components/UI/MainTitle";

const MENU_BUTTONS = [
  {
    icon: <Characters />,
    title: "Characters",
    url: "/characters-quiz",
  },
  {
    icon: <Spell />,
    title: "Spells",
    url: "/spells-quiz",
  },
  {
    icon: <Book />,
    title: "Books",
    url: "/books-quiz",
  },
  {
    icon: <House />,
    title: "Houses",
    url: "/houses-quiz",
  },
];

export default function MainMenu() {
  return (
    <>
      <MainTitle />
      <ButtonsOrder buttonsList={MENU_BUTTONS} />
    </>
  );
}
