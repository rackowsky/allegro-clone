import styled from "styled-components";

import Navbar from "../components/navbar";
import CreateAuction from "../components/createAuction";

const ScrollingWrapper = styled.div`
  height: 852px;
  width: 390px;
  overflow-y: auto;
`;

const createAuction = () => {
  return (
    <ScrollingWrapper>
      <Navbar />
      <CreateAuction />
    </ScrollingWrapper>
  );
};

export default createAuction;
