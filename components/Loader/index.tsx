import { FC } from "react";
import { LoaderBody, LoaderContainer } from "./style";

const Loader: FC<{isOpen: boolean}> = ({isOpen}) => {
  return (
    <>
      <LoaderContainer>
        <LoaderBody>
          <h1>Loading</h1>
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
        </LoaderBody>
      </LoaderContainer>
    </>
  );
};

export default Loader;
