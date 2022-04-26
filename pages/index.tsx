import type { NextPage } from "next";
import SignInUp from "../components/SignInUp";
import styled from "styled-components";
import Todos from "../components/Todos";
import SignUpModal from "../components/SignUpModal";
import LoginModal from "../components/LoginModal";
import React, { useContext, useEffect, useState } from "react";
import { useAuth } from "../Hooks/useAuth";
import Header from "../components/Header";
import Loader from "../components/Loader";
import { ThemeContext } from "./_app";
import { AppTheme } from "../Theme/AppTheme";
export const Container = styled.div({
  display: "flex",
  height: "100vh",
  width: "100vw",
  flexDirection: "row",
  gap: "2rem",
  margin: 0,
  padding: 0,
});

export const PageWrapper = styled.div({
  display: "flex",
  flexDirection: "column",
  height: "92vh",
  width: "100vw",
  boxSizing: "border-box",
});

const Home: NextPage = () => {
  const [signUpModalOpen, setSignUpModalOpen] = useState(false);
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const { auth } = useAuth();
  const [loading, setLoading] = useState(true);
  const { theme } = useContext(ThemeContext);

  const pageStyle: AppTheme = {
    dark: { backgroundColor: '#333', color: "#f2f2f2" },
    light: { backgroundColor: '#f2f2f2', color: '#333' },
    common: { transition: 'all 1s ease' }
  }

  const themeStyle = {
    ...pageStyle.common,
    ...(theme === 'light' ? pageStyle.light : pageStyle.dark)
  }


  useEffect(() => {
    console.log("Page HOME did mount");
    setLoading(false);
  }, [auth]);

  return (
    <PageWrapper style={themeStyle}>
      <Header />
      {loading &&
        <Loader />
      }
      {!auth && (
        <>
          <SignInUp
            onSignInClick={() => setLoginModalOpen(true)}
            onSignUpClick={() => setSignUpModalOpen(true)}
          />
        </>
      )}
      {auth && (
        <Container style={themeStyle}>
          <Todos />
        </Container>
      )}
      <SignUpModal
        isModalOpen={signUpModalOpen}
        onClose={() => setSignUpModalOpen(false)}
      />
      <LoginModal
        isModalOpen={loginModalOpen}
        onClose={() => setLoginModalOpen(false)}
      />
    </PageWrapper>
  );
};

export default Home;
