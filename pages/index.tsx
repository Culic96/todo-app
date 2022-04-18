import type { NextPage } from "next";
import SignInUp from "../components/SignInUp";
import styled from "styled-components";
import Todos from "../components/Todos";
export const Container = styled.div({
  height: "100%",
  width: "100vw",
});

const Home: NextPage = () => {
  return (
    <div>
      <Container>
        <SignInUp />
        <Todos />
      </Container>
    </div>
  );
};

export default Home;
