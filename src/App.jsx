import React from "react";

import styles from "./App.module.css";

import ContactProvider from "./Contactcontext";
import AddContact from "./AddContact";
import EditContact from "./EditContact";
import DeleteContact from "./DeleteContact";

function App() {
  return (
    <ContactProvider>
      <h1 className={styles.ContactApp}>ContactApp</h1>

      <AddContact  />
      <DeleteContact />

      <EditContact />
    </ContactProvider>
  );
}

export default App;