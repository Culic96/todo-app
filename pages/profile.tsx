import type { NextPage } from "next";
import SignInUp from "../components/SignInUp";
import styled from "styled-components";
import { useAuth } from "../Hooks/useAuth";
import { useEffect } from "react";

export const Container = styled.div({
  height: "92vh",
  width: "100vw",
});

const Profile: NextPage = () => {
  const { auth } = useAuth();
  useEffect(() => {}, [auth]);
  return (
    <div>
      <Container>Profile Page</Container>
    </div>
  );
};

export default Profile;
