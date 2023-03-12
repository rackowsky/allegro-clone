import styled from "styled-components";

const CreateAuctionWrapper = styled.div`
  box-sizing: border-box;
  margin: 14px 16px 5px 16px;
  height: auto;
  width: auto;
  background: rgba(255, 255, 255, 0.35);
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 15px;
  position: relative;
  overflow: hidden;
  padding: 15px 15px;
`;
const HeaderCategory = styled.h1`
  font-style: italic;
  font-weight: 600;
  font-size: 30px;
  color: #ffffff;
  text-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
`;

const CreateAuction = () => {
  return (
    <CreateAuctionWrapper>
      <HeaderCategory>Dodawanie aukcji</HeaderCategory>
      zdjecia, tytul aukcji, cena poczatkowa, kategoria, opis
    </CreateAuctionWrapper>
  );
};

export default CreateAuction;
