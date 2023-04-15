import { Link } from "react-router-dom";
import styled from "styled-components";

const WholeAuctionsWrapper = styled.div`
  background: linear-gradient(
    151.35deg,
    rgba(220, 192, 255, 0.4425) 4.77%,
    rgba(217, 187, 255, 0.285) 96.02%
  );
  border: 2px solid rgba(255, 255, 255, 0.5);
  border-radius: 15px;
  margin: 14px 16px 15px 16px;
  height: auto;
  width: auto;
  position: relative;
  overflow: hidden;
  padding: 15px 15px;
`;
const Header = styled.h1`
  font-style: italic;
  font-weight: 700;
  font-size: 30px;
  line-height: 35px;
  color: #ffffff;
  text-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
`;
const AuctionWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;

  margin-top: 20px;
  gap: 12px 17px;
`;
const AuctionItem = styled(Link)`
  width: 152px;
  height: 152px;
  background: linear-gradient(
    138.17deg,
    rgba(190, 107, 255, 0.75) 8.43%,
    rgba(159, 63, 255, 0.2625) 93.84%
  );
  border: 2px solid rgba(255, 255, 255, 0.25);
  box-shadow: 0px 4px 100px rgba(255, 255, 255, 0.5);
  border-radius: 15px;
  position: relative;
  text-decoration: none;

  :hover {
    transform: scale(1.01);
    cursor: pointer;
    filter: brightness(0.95);
  }
`;
const AuctionThumbnail = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background: url("https://picsum.photos/150/150");
  background-size: 105%;
  background-position: center;
  opacity: 0.75;
  filter: blur(0.75px) brightness(0.5)
    drop-shadow(0px 4px 100px rgba(255, 255, 255, 0.5));
  border-radius: 15px;

  ::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background: linear-gradient(
      180deg,
      rgba(143, 74, 255, 0) 0%,
      rgba(120, 37, 255, 0.477707) 39.58%,
      #8439ff 96.35%
    );
    border-radius: 15px;
  }
`;
const AutcionItemBody = styled.div`
  position: relative;
  z-index: 50;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 11px 9px;

  > p {
    font-style: italic;
    font-weight: 600;
    font-size: 9px;
    line-height: 7px;
    color: rgba(255, 255, 255, 0.75);
    text-shadow: 0px 4px 20px 100px rgba(0, 0, 0, 0.5);
  }
  > div > h1 {
    font-style: italic;
    font-weight: 700;
    font-size: 16px;
    line-height: 18px;
    color: rgba(255, 255, 255, 0.75);
    text-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
    margin-bottom: 5px;
  }
  > div > span {
  }
  > div > span > p {
    font-style: italic;
    font-weight: 700;
    font-size: 8px;
    line-height: 6px;
    color: rgba(255, 255, 255, 0.75);
    text-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
  }
  > div > h2 {
    font-style: italic;
    font-weight: 700;
    font-size: 10px;
    line-height: 6px;
    color: rgba(255, 255, 255, 0.75);
    text-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
  }
  > div > h3 {
    font-style: italic;
    font-weight: 900;
    font-size: 15px;
    line-height: 14px;
    color: rgba(255, 255, 255, 0.75);
    text-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
    margin-top: 5px;
  }
`;
const BreakBullet = styled.div`
  background-color: white;
  height: 4px;
  width: 4px;
  border-radius: 100%;
`;

const tempData = [
  {
    id: 1,
    expiresIn: "2:34:13",
    title: "Przykładowa nazwa aukcji",
    user: "jan_kowalski239",
    category: "elektronika",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac molestie massa, pretium vestibulum risus. Cras non nunc viverra, euismod metus ac, feugiat turpis. Nullam pharetra consectetur ante sed suscipit. Vestibulum ultrices felis ut tristique cursus.",
    price: 476.25,
  },
  {
    id: 2,
    expiresIn: "2:34:13",
    title: "Przykładowa nazwa aukcji",
    user: "jan_kowalski239",
    category: "elektronika",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac molestie massa, pretium vestibulum risus. Cras non nunc viverra, euismod metus ac, feugiat turpis. Nullam pharetra consectetur ante sed suscipit. Vestibulum ultrices felis ut tristique cursus.",
    price: 476.25,
  },
  {
    id: 3,
    expiresIn: "2:34:13",
    title: "Przykładowa nazwa aukcji",
    user: "jan_kowalski239",
    category: "elektronika",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac molestie massa, pretium vestibulum risus. Cras non nunc viverra, euismod metus ac, feugiat turpis. Nullam pharetra consectetur ante sed suscipit. Vestibulum ultrices felis ut tristique cursus.",
    price: 476.25,
  },
  {
    id: 4,
    expiresIn: "2:34:13",
    title: "Przykładowa nazwa aukcji",
    user: "jan_kowalski239",
    category: "elektronika",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac molestie massa, pretium vestibulum risus. Cras non nunc viverra, euismod metus ac, feugiat turpis. Nullam pharetra consectetur ante sed suscipit. Vestibulum ultrices felis ut tristique cursus.",
    price: 476.25,
  },
  {
    id: 5,
    expiresIn: "2:34:13",
    title: "Przykładowa nazwa aukcji",
    user: "jan_kowalski239",
    category: "elektronika",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac molestie massa, pretium vestibulum risus. Cras non nunc viverra, euismod metus ac, feugiat turpis. Nullam pharetra consectetur ante sed suscipit. Vestibulum ultrices felis ut tristique cursus.",
    price: 476.25,
  },
  {
    id: 6,
    expiresIn: "2:34:13",
    title: "Przykładowa nazwa aukcji",
    user: "jan_kowalski239",
    category: "elektronika",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac molestie massa, pretium vestibulum risus. Cras non nunc viverra, euismod metus ac, feugiat turpis. Nullam pharetra consectetur ante sed suscipit. Vestibulum ultrices felis ut tristique cursus.",
    price: 476.25,
  },
  {
    id: 7,
    expiresIn: "2:34:13",
    title: "Przykładowa nazwa aukcji",
    user: "jan_kowalski239",
    category: "elektronika",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac molestie massa, pretium vestibulum risus. Cras non nunc viverra, euismod metus ac, feugiat turpis. Nullam pharetra consectetur ante sed suscipit. Vestibulum ultrices felis ut tristique cursus.",
    price: 476.25,
  },
  {
    id: 8,
    expiresIn: "2:34:13",
    title: "Przykładowa nazwa aukcji",
    user: "jan_kowalski239",
    category: "elektronika",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac molestie massa, pretium vestibulum risus. Cras non nunc viverra, euismod metus ac, feugiat turpis. Nullam pharetra consectetur ante sed suscipit. Vestibulum ultrices felis ut tristique cursus.",
    price: 476.25,
  },
  {
    id: 9,
    expiresIn: "2:34:13",
    title: "Przyżśźćżkładowa nazwa aukcji",
    user: "jan_kowalski239",
    category: "elektronika",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac molestie massa, pretium vestibulum risus. Cras non nunc viverra, euismod metus ac, feugiat turpis. Nullam pharetra consectetur ante sed suscipit. Vestibulum ultrices felis ut tristique cursus.",
    price: 476.25,
  },
];

const WholeAuctions = () => {
  return (
    <WholeAuctionsWrapper>
      <Header>Wszystkie aukcje</Header>
      <AuctionWrapper>
        {tempData.map((item) => {
          return (
            <AuctionItem to={item.id.toString()}>
              <AuctionThumbnail />
              <AutcionItemBody>
                <p>Wygasa za: {item.expiresIn}</p>
                <div>
                  <h1>{item.title}</h1>
                  <span
                    style={{
                      display: "flex",
                      gap: "5px",
                      alignItems: "center",
                    }}
                  >
                    <p>{item.user}</p>
                    <BreakBullet />
                    <p>{item.category}</p>
                  </span>
                </div>
                <div>
                  <h2>Aktualna cena</h2>
                  <h3>{item.price}</h3>
                </div>
              </AutcionItemBody>
            </AuctionItem>
          );
        })}
      </AuctionWrapper>
    </WholeAuctionsWrapper>
  );
};

export default WholeAuctions;
