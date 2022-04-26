import type { AppProps } from "next/app";
import React, { useContext } from "react";
import { useState } from "react";
import { createGlobalStyle } from "styled-components";
import { AuthProvider } from "../Hooks/useAuth";
import { AppTheme } from "../Theme/AppTheme";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Exo+2:wght@200;300;400;600&family=Roboto:wght@400;700&display=swap');

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    overflow: hidden;
    font-family: 'Roboto', sans-serif;
  }
`;
interface IThemeContext {
  theme: string;
  setTheme: any;
}
export const ThemeContext = React.createContext({} as IThemeContext);




function MyApp({ Component, pageProps }: AppProps) {
  const AnyComponent = Component as any;
  const [theme, setTheme] = useState('light');



  return (
    <>
      <GlobalStyle />
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <AuthProvider>
          <AnyComponent {...pageProps} />
        </AuthProvider>
      </ThemeContext.Provider>
    </>
  );
}

export default MyApp;
