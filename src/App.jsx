import ContactProvider from "./Contactcontext";
import AddContact from "./AddContact";
import EditContact from "./EditContact";
import DeleteContact from "./DeleteContact";
import ToggleFavorite from "./ToggleFavorite";

function App() {
  return (
    <ContactProvider>
      <h1>Contact App</h1>

      <AddContact />
      <EditContact />
      <DeleteContact />
      <ToggleFavorite />
    </ContactProvider>
  );
}

export default App;