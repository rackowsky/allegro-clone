import styled from "styled-components";
import Flickity from "react-flickity-component";
import { Link } from "react-router-dom";

import wszystko_ from "../../images/categories/wszystko.png";
import elektronika_ from "../../images/categories/elektronika.png";
import meble_ from "../../images/categories/meble.png";
import zwierzeta_ from "../../images/categories/zwierzeta.png";

const ModeMenuWrapper = styled.div`
  box-sizing: border-box;
  margin: 14px 16px 5px 16px;
  height: 250px;
  width: auto;
  background: rgba(255, 255, 255, 0.35);
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 15px;
  position: relative;
  overflow: hidden;
  padding: 15px 15px;

  ::before {
    content: "";
    position: absolute;
    width: 218px;
    height: 203px;
    left: -50px;
    top: -50px;
    border-radius: 100%;
    background: #a074ff;
    filter: blur(125px);
  }
`;
const HeaderCategory = styled.h1`
  font-style: italic;
  font-weight: 600;
  font-size: 30px;

  color: #ffffff;

  text-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
`;
const ModeMenuSlider = styled.div`
  padding-top: 22px;

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
`;
const MenuItem = styled(Link)`
  width: 138px;
  height: 138px;
  margin-right: 10px;
  border-radius: 15px;
  background: linear-gradient(
    138.17deg,
    rgba(175, 95, 255, 0.35) 8.43%,
    rgba(185, 115, 255, 0.1875) 93.84%
  );
  border: 2px solid rgba(255, 255, 255, 0.35);
  box-shadow: 0px 4px 100px rgba(255, 255, 255, 0.4);
  display: flex;
  flex-direction: column;
  gap: 4px;
  justify-content: center;
  align-items: center;
  text-decoration: none !important;

  :hover {
    filter: brightness(0.75);
  }

  > p {
    font-style: italic;
    font-weight: 600;
    font-size: 15px;
    text-align: center;
    color: rgba(255, 255, 255, 0.8);
    mix-blend-mode: normal;
    opacity: 0.75;
    text-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
    text-decoration: none !important;
  }
`;
const Icon = styled.div`
  height: 50px;
  width: 50px;
  background-image: url(${(props) => props.background});
  background-repeat: no-repeat;
  background-position: center;
`;

const list = [
  {
    id: 1,
    name: "Wszystko",
    icon: wszystko_,
    link: "/aukcje/wszystko",
  },
  {
    id: 2,
    name: "Elektronika",
    icon: elektronika_,
    link: "/aukcje/elektronika",
  },
  {
    id: 3,
    name: "Meble",
    icon: meble_,
    link: "/aukcje/meble",
  },
  {
    id: 4,
    name: "Zwierzęta",
    icon: zwierzeta_,
    link: "/aukcje/zwierzeta",
  },
];

const Category = () => {
  const flickityOptions = {
    initialIndex: 0,
    prevNextButtons: false,
    pageDots: false,
    contain: true,
  };

  return (
    <ModeMenuWrapper>
      <div style={{ position: "relative", zIndex: 250 }}>
        <HeaderCategory>Kategorie</HeaderCategory>
        <ModeMenuSlider>
          <Flickity
            className={"carousel"} // default ''
            elementType={"div"} // default 'div'
            options={flickityOptions} // takes flickity options {}
            disableImagesLoaded={false} // default false
            reloadOnUpdate // default false
            static // default false
          >
            {list.map((item) => {
              return (
                <MenuItem to={item.link} key={item.id.toString()}>
                  <Icon background={item.icon} />
                  <p>{item.name}</p>
                </MenuItem>
              );
            })}
          </Flickity>
        </ModeMenuSlider>
      </div>
    </ModeMenuWrapper>
  );
};

export default Category;
