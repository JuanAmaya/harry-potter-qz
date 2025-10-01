import { Route, Routes } from "react-router-dom";
import MainMenu from "./pages/MainMenu";
import QuizPage from "./pages/QuizPage";

const CHARACTERS_QUESTIONS = [
  { question: "Who is this character?", type: "nickname" },
  { question: "What is this character's birthday?", type: "birthdate" },
];

const SPELLS_QUESTIONS = [{ question: "Spell That...", type: "use" }];

const BOOKS_QUESTIONS = [
  { question: "Release date", type: "releaseDate" },
  { question: "# of pages", type: "pages" },
  { question: "Book number", type: "number" },
];

const HOUSES_QUESTIONS = [
  { question: "Founder", type: "founder" },
  { question: "Animal", type: "animal" },
  { question: "Colors", type: "colors" },
];

function App() {
  return (
    <Routes>
      <Route path="/harry-potter-qz/" element={<MainMenu />} />
      <Route
        path="/characters-quiz"
        element={
          <QuizPage
            QUESTIONS={CHARACTERS_QUESTIONS}
            DATA_URL="https://potterapi-fedeperin.vercel.app/en/characters"
            type="characters"
          />
        }
      />
      <Route
        path="/spells-quiz"
        element={
          <QuizPage
            QUESTIONS={SPELLS_QUESTIONS}
            DATA_URL="https://potterapi-fedeperin.vercel.app/en/spells"
            type="spells"
          />
        }
      />
      <Route
        path="/books-quiz"
        element={
          <QuizPage
            QUESTIONS={BOOKS_QUESTIONS}
            DATA_URL="https://potterapi-fedeperin.vercel.app/en/books"
            type="books"
          />
        }
      />
      <Route
        path="/houses-quiz"
        element={
          <QuizPage
            QUESTIONS={HOUSES_QUESTIONS}
            DATA_URL="https://potterapi-fedeperin.vercel.app/en/houses"
            type="houses"
          />
        }
      />
    </Routes>
  );
}

export default App;
