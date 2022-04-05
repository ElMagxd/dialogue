import { useEffect, useState } from "react";
import { getTheme, setTheme } from './helpers/theme'
import { AppContext } from './context'
import Header from "./components/Header";
import Dialog from "./components/Dialog";
import Sender from "./components/Sender";
import { GlobalStyle, Container } from './styled'


function App() {
  const [message, addMessage] = useState(null);
  const [theme, toggleTheme] = useState(getTheme());

  useEffect(() => {
    setTheme(theme);
  }, [theme])

  return (
    <AppContext.Provider value={{ theme, toggleTheme }}>
      <GlobalStyle/>
      <Container>
        <Header/>
        <Dialog newMessage={message}/>
        <Sender onAddMessage={addMessage}/>
      </Container>
    </AppContext.Provider>
  );
}

export default App
