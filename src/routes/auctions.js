import styled from "styled-components";

import Navbar from "../components/navbar";
import Category from "../components/category";
import WholeAuctions from "../components/wholeAuctions";

const ScrollingWrapper = styled.div`
  height: 852px;
  width: 390px;
  overflow-y: auto;
`;

const Auctions = () => {
  return (
    <ScrollingWrapper>
      <Navbar />
      <Category />
      <WholeAuctions />
    </ScrollingWrapper>
  );
};

export default Auctions;
