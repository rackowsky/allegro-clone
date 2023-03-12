import styled from "styled-components";

const LoaderWrapper = styled.div`
  height: 825px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const LoaderCircle = styled.div`
  border: 2px solid transparent;
  border-top: 5px solid #ce51ff;
  height: 45px;
  width: 45px;
  -webkit-animation: spin 0.7s linear infinite;
  animation: spin 0.5s linear infinite;
  border-radius: 100%;
  opacity: 0.5;

  @-webkit-keyframes spin {
    0% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Loader = () => {
  return (
    <LoaderWrapper>
      <LoaderCircle />
    </LoaderWrapper>
  );
};

export default Loader;
