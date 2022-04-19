import type { AppProps } from "next/app";
import { createGlobalStyle } from "styled-components";
import { AuthProvider } from "../Hooks/useAuth";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Exo+2:wght@200;300;400;600&family=Roboto:wght@400;700&display=swap');

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    overflow-x: hidden;
    font-family: 'Roboto', sans-serif;
  }
`;

function MyApp({ Component, pageProps }: AppProps) {
  const AnyComponent = Component as any;
  return (
    <>
      <GlobalStyle />
      <AuthProvider>
        <AnyComponent {...pageProps} />
      </AuthProvider>
    </>
  );
}

export default MyApp;
