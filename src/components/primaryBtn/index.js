import { Link } from "react-router-dom";
import styled from "styled-components";

const PrimaryBtnWrapper = styled(Link)`
  width: 334px;
  height: 55px;
  background: #c7adff;
  border: 2px solid rgba(255, 255, 255, 0.5);
  border-radius: 15px;
  font-style: italic;
  font-weight: 700;
  font-size: 23px;
  line-height: 27px;
  text-align: center;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none !important;

  :hover {
    transform: scale(1.01);
    cursor: pointer;
    filter: brightness(0.95);
  }
`;

const PrimaryBtn = (props) => {
  return <PrimaryBtnWrapper to={props.to}>{props.name}</PrimaryBtnWrapper>;
};

export default PrimaryBtn;
