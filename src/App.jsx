import { ThemeProvider } from "styled-components";
import reactLogo from "./assets/react.svg";
import Tutorial from "./components/Tutorial";
import { GlobalStyle } from "./components/styles/Global.styles";
import viteLogo from "/vite.svg";
import { useState } from "react";

function App() {
  const [cardtheme, setCardTheme] = useState({
    bg: "#f9f8f8",
    color: "black",
    currentTheme: "dark",
  });
  const setCurrentTheme = () => {
    // console.log("consoling");

    // setCardTheme({
    //   ...cardtheme,
    //   bg: "#262626",
    //   color: "#056252",
    //   currentTheme: "light",
    // });
    // console.log(cardtheme.currentTheme);

    if (cardtheme.currentTheme == "dark") {
      console.log("confirmed");
      setCardTheme({
        ...cardtheme,
        bg: "#262626",
        color: "#056252",
        currentTheme: "light",
      });
    } else if (cardtheme.currentTheme == "light") {
      console.log("not confirmed");
      setCardTheme({
        ...cardtheme,
        bg: "#f9f8f8",
        color: "black",
        currentTheme: "dark",
      });
    }
  };
  return (
    <>
      <GlobalStyle></GlobalStyle>
      <ThemeProvider theme={{ cardtheme, setCurrentTheme }}>
        <Tutorial></Tutorial>
      </ThemeProvider>
    </>
  );
}

export default App;
