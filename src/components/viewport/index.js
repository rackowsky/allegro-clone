import styled from "styled-components";

const ViewportWrapper = styled.div`
  background: rgb(232, 215, 255);
  background: linear-gradient(
    322deg,
    rgba(232, 215, 255, 1) 0%,
    rgba(227, 205, 255, 1) 100%
  );
  height: 852px;
  width: 393px;
  overflow: hidden;
  position: relative;
  border-radius: 15px;
  border: 2px solid rgba(255, 255, 255, 0.5);
`;
const CircleDeco = styled.div`
  background-color: #a974ff;
  height: 499px;
  width: 499px;
  border-radius: 100%;
  filter: blur(125px);
  position: absolute;
  left: -178px;
  top: -162px;
`;
const BottomCircleDeco = styled.div`
  position: relative;
  width: 275px;
  height: 275px;
  left: 60px;
  bottom: 150px;
  background: #9b4dff;
  opacity: 0.75;
  filter: blur(20px);
  border-radius: 100%;

  ::before {
    content: "";
    position: absolute;
    width: 268px;
    height: 268px;
    left: -150px;
    top: -50px;
    background: #a772ff;
    opacity: 0.75;
    border-radius: 100%;
  }
  ::after {
    content: "";
    position: absolute;
    width: 549px;
    height: 549px;
    left: 100px;
    top: -100px;
    background: #ca96ff;
    opacity: 0.55;
    filter: blur(0);
    border-radius: 100%;
  }
`;

const Viewport = (props) => {
  return (
    <ViewportWrapper>
      <CircleDeco />
      <div style={{ position: "relative", zIndex: 250 }}>{props.children}</div>
      <BottomCircleDeco />
    </ViewportWrapper>
  );
};

export default Viewport;
