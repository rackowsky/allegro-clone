import styled from "styled-components";

import Navbar from "../components/navbar";
import SingleAuction from "../components/singleAuction";
import AuctionsWidget from "../components/auctionsWidget";

const ScrollingWrapper = styled.div`
  height: 852px;
  width: 390px;
  overflow-y: auto;
  padding-bottom: 20px;
`;

const singleAuction = () => {
  return (
    <ScrollingWrapper>
      <Navbar />
      <SingleAuction />
      <AuctionsWidget name="Pozostałe aukcje" />
    </ScrollingWrapper>
  );
};

export default singleAuction;
