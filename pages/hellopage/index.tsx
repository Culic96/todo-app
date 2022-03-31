import { NextPage } from "next";
import Hello from "../../components/Hello";

const HelloPage: NextPage = () => {
  return (
    <>
      <h1>Welcome to Hello Page!</h1>
      <Hello />
    </>
  );
};

export default HelloPage;
