import type { NextPage } from "next";
import SignInUp from "../components/SignInUp";
import styled from "styled-components";
import Todos from "../components/Todos";
import SignUpModal from "../components/SignUpModal";
import LoginModal from "../components/LoginModal";
import React, { useEffect, useState } from "react";
import { useAuth } from "../Hooks/useAuth";
import Header from "../components/Header";
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

  useEffect(() => {
    console.log("Page HOME did mount");

  }, []);

  return (
    <PageWrapper>
      <Header />
      
      {!auth && (
        <>
          <SignInUp
            onSignInClick={() => setLoginModalOpen(true)}
            onSignUpClick={() => setSignUpModalOpen(true)}
          />
        </>
      )}
      {auth && (
        <Container>
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
