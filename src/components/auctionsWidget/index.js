import styled from "styled-components";
import Flickity from "react-flickity-component";

const LatestAuctionsWrapper = styled.div`
  background: linear-gradient(
    151.35deg,
    rgba(220, 192, 255, 0.4425) 4.77%,
    rgba(217, 187, 255, 0.285) 96.02%
  );
  border: 2px solid rgba(255, 255, 255, 0.5);
  border-radius: 15px;
  margin: 14px 16px 5px 16px;
  height: 459px;
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
const LatestAuctionsSlider = styled.div`
  padding-top: 19px;
  .carousel:focus {
    border: none;
    outline: none;
  }
  :hover {
    cursor: grab;
  }
  :active {
    cursor: grabbing;
  }
  .flickity-page-dots {
    padding: 5px;
    display: flex;
    justify-content: center;
    gap: 10px;
    list-style-type: none;
    cursor: pointer;
    margin-top: 15px;
  }
  /* white circles */
  .flickity-page-dots .dot {
    width: 6px;
    height: 6px;
    opacity: 0.5;
    background: white;
    border-radius: 100%;
    box-shadow: 1px 1px 80px 8px black;
  }
  /* fill-in selected dot */
  .flickity-page-dots .dot.is-selected {
    background: white;
    opacity: 1;
  }
`;
const AuctionWrapper = styled.div`
  width: 317px;
  height: 338px;
  background: linear-gradient(
    138.17deg,
    rgba(188, 156, 255, 0.75) 8.43%,
    rgba(140, 100, 255, 0.2625) 93.84%
  );
  border: 2px solid rgba(255, 255, 255, 0.25);
  box-shadow: 0px 4px 100px rgba(255, 255, 255, 0.5);
  border-radius: 15px;
  margin-right: 15px;
  margin-left: 15px;
  background-image: url("https://picsum.photos/317/338");

  :hover {
    cursor: pointer;
    filter: brightness(0.95);
    scale: 1.008;
  }
`;
const AuctionFilter = styled.div`
  box-sizing: border-box;
  position: absolute;
  width: 320px;
  height: 342px;
  left: -4px;
  top: -4px;
  background: linear-gradient(
    138.17deg,
    rgba(188, 156, 255, 0.75) 8.43%,
    rgba(140, 100, 255, 0.2625) 93.84%
  );
  border: 2px solid rgba(255, 255, 255, 0.25);
  box-shadow: 0px 4px 100px rgba(255, 255, 255, 0.5);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: end;
  gap: 8px;
  padding: 10px;

  ::after {
    content: "";
    position: absolute;
    width: 317px;
    height: 339px;
    left: 1px;
    top: -1px;
    background: linear-gradient(
      180deg,
      rgba(141, 27, 255, 0) 9.9%,
      #a041ff 100%
    );
    border-radius: 10px;
  }

  > p {
    font-style: italic;
    font-weight: 600;
    font-size: 10px;
    line-height: 12px;
    color: rgba(255, 255, 255, 0.6);
    text-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
    z-index: 10;
  }
  > h1 {
    font-style: italic;
    font-weight: 700;
    font-size: 22px;
    line-height: 23px;
    color: rgba(255, 255, 255, 0.75);
    text-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
    z-index: 10;
  }
  > div > h2 {
    font-style: italic;
    font-weight: 700;
    font-size: 11px;
    line-height: 12px;
    color: rgba(255, 255, 255, 0.75);
    text-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
    z-index: 10;
  }
  > span {
    width: 75%;
    height: 1px;
    background-color: white;
    border: 1px solid rgba(255, 255, 255, 0.25);
    z-index: 10;
    margin-left: 50%;
    transform: translateX(-50%);
    opacity: 0.25;
  }
  > h3 {
    font-style: italic;
    font-weight: 700;
    font-size: 15px;
    color: rgba(255, 255, 255, 0.75);
    text-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
    z-index: 10;
  }
  > h4 {
    font-style: italic;
    font-weight: 900;
    font-size: 20px;
    line-height: 19px;
    color: rgba(255, 255, 255, 0.75);
    text-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
    z-index: 10;
  }
`;
const Desc = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 9px;
  color: rgba(255, 255, 255, 0.75);
  text-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
  z-index: 10;
`;
const BreakBullet = styled.div`
  background-color: white;
  height: 5px;
  width: 5px;
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
];

const LatestAuctions = (props) => {
  const flickityOptions = {
    initialIndex: 0,
    prevNextButtons: false,
  };

  return (
    <LatestAuctionsWrapper>
      <Header>{props.name}</Header>
      <LatestAuctionsSlider>
        <Flickity
          className={"carousel"} // default ''
          elementType={"div"} // default 'div'
          options={flickityOptions} // takes flickity options {}
          disableImagesLoaded={false} // default false
          reloadOnUpdate // default false
          static // default false
        >
          {tempData.map((item) => {
            return (
              <AuctionWrapper key={item.id.toString()}>
                <AuctionFilter>
                  <p>Wygasa za: 2:17:31</p>
                  <h1>Przykładowa nazwa aukcji</h1>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <h2>jan_kowalski239</h2>
                    <BreakBullet />
                    <h2>elektronika</h2>
                  </div>
                  <span></span>
                  <Desc>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vivamus ac molestie massa, pretium vestibulum risus. Cras
                    non nunc viverra, euismod metus ac, feugiat turpis. Nullam
                    pharetra consectetur ante sed suscipit. Vestibulum ultrices
                    felis ut tristique cursus.
                  </Desc>
                  <h3>Aktualna cena</h3>
                  <h4>476,25 zł</h4>
                </AuctionFilter>
              </AuctionWrapper>
            );
          })}
        </Flickity>
      </LatestAuctionsSlider>
    </LatestAuctionsWrapper>
  );
};

export default LatestAuctions;
