import { useContext, useState, createContext } from "react";

const UserContex = createContext();

function UserName() {
  const { language, setLanguage } = useContext(UserContex);

  return (
    <>
      <h1>
        {language === "Spanish" ? "Hola" : "Hello"}</h1>

      <button onClick={() => setLanguage(language === "Spanish" ? "English" : "Spanish")} className="bg-amber-200 rounded-2xl p-4">
        Switch language
      </button>
    </>
  );
}

function App() {
  const [language, setLanguage] = useState("English");

  return (
    <UserContex.Provider value={{ language, setLanguage }}>
      <UserName />
    </UserContex.Provider>
  );
}

export default App;