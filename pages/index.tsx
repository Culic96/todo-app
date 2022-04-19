import type { NextPage } from "next";
import SignInUp from "../components/SignInUp";
import styled from "styled-components";
import Todos from "../components/Todos";
import SignUpModal from "../components/SignUpModal";
import LoginModal from "../components/LoginModal";
import { useEffect, useState } from "react";
import { useAuth } from "../Hooks/useAuth";
import Header from "../components/Header";
export const Container = styled.div({
  height: "100%",
  width: "100vw",
  margin: 0,
  padding: 0,
});

const Home: NextPage = () => {
  const [signUpModalOpen, setSignUpModalOpen] = useState(false);
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const { auth } = useAuth();

  useEffect(() => {
    console.log("Page HOME did mount");
  }, []);

  return (
    <div>
      <Header />
      <Container>
        {!auth && (
          <SignInUp
            onSignInClick={() => setLoginModalOpen(true)}
            onSignUpClick={() => setSignUpModalOpen(true)}
          />
        )}
        <Todos />
      </Container>
      <SignUpModal
        isModalOpen={signUpModalOpen}
        onClose={() => setSignUpModalOpen(false)}
      />
      <LoginModal
        isModalOpen={loginModalOpen}
        onClose={() => setLoginModalOpen(false)}
      />
    </div>
  );
};

export default Home;
