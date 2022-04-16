import { FC, useEffect, useState } from "react";
import { getTheme, setTheme } from './helpers/theme'
import { AppContext, IContext } from './context'
import Header from "./components/Header";
import Dialog from "./components/Dialog";
import Sender from "./components/Sender";
import { GlobalStyle, Container } from './styled'
import { IServerMessage } from "./types";


const App: FC = () => {
  const [message, addMessage] = useState<IServerMessage | null>(null);
  const [theme, toggleTheme] = useState<IContext['theme']>(getTheme());

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
