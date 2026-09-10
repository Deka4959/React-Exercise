import Header from "./AddContactTailwind";
import AddContact from "./AddContact";
import EditContact from "./EditContact";
import  DeleteContact from "./DeleteContact";
import ContactProvider from "./Contactcontext";

function App() {
  return (
    <ContactProvider>
      <Header />
      <AddContact />
      <EditContact />
       <DeleteContact />
    </ContactProvider>
  );
}

export default App;