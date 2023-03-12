import styled from "styled-components";

import Navbar from "../components/navbar";
import PrimaryBtn from "../components/primaryBtn";

const NotFoundWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  width: 100%;
  height: 790px;
`;
const InformationWrapper = styled.div`
  height: 200px;
  width: 100%;
  margin-bottom: 50px;
  display: flex;
  gap: 5px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 40px;

  > div > h1 {
    font-style: italic;
    font-weight: 900;
    font-size: 19px;
    line-height: 21px;
    color: #ffffff;
  }
  > h2 {
    font-style: italic;
    font-weight: 600;
    font-size: 15px;
    line-height: 18px;
    color: #ffffff;
    padding: 0 30px;
  }
`;
const Symbol = styled.div`
  width: 64px;
  height: 64px;
  background: rgba(255, 255, 255, 0.25);
  border-radius: 10px;
  position: relative;

  ::before {
    content: "404";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-style: italic;
    font-weight: 900;
    font-size: 22px;
    color: #ffffff;
  }
`;

const NotFound = () => {
  return (
    <NotFoundWrapper>
      <Navbar />
      <InformationWrapper>
        <div
          style={{
            display: "flex",
            gap: "10px",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Symbol />
          <h1>
            Aukcja wygasła <br />
            lub została usunięta.
          </h1>
        </div>
        <h2>
          Szukana przez Ciebie aukcja prawodpodobnie wygasła lub została
          usunięta.
        </h2>
      </InformationWrapper>
      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <PrimaryBtn to="/aukcje/wszystko" name="Wróc do wszystkich aukcji" />
      </div>
    </NotFoundWrapper>
  );
};

export default NotFound;
