import type { AppProps } from "next/app";
import { createGlobalStyle } from "styled-components";
import { AuthProvider } from "../Hooks/useAuth";
const GlobalStyle = createGlobalStyle({
  body: {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
    overflowX: "hidden",
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <AuthProvider>
        <GlobalStyle />
        <Component {...pageProps} />
      </AuthProvider>
    </>
  );
}

export default MyApp;
