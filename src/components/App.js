import React from "react";
import useLocalStorage from "./Hooks/useLocalStorage";
import Login from "./Login";
import Dashboard from "./Dashboard";
import { ContactsProvider } from "./contexts/ContactsProvider";
import { ConversationsProvider } from "./contexts/ConversationsProvider";
import { SocketProvider } from "./contexts/SocketProvider";
import "./css/app.css";

function App() {
  const [id, setId] = useLocalStorage("id");
  const dashboard = (
    <SocketProvider id={id}>
      <ContactsProvider>
        <ConversationsProvider id={id}>
          <Dashboard id={id} />
        </ConversationsProvider>
      </ContactsProvider>
    </SocketProvider>
  );
  return (
    <>
      <button onClick={goToMyWebsite} className="app--website-button">
        Go To My Website
      </button>
      {id ? dashboard : <Login onIdSubmit={setId} />}
    </>
  );
}

function goToMyWebsite() {
  window.open("https://www.marcelobrasil.ca");
}

export default App;
