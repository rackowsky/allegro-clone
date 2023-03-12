import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";

import logo from "../../images/logo.png";
import searchIcon from "../../images/search.png";
import closeIcon from "../../images/close.png";
import showResultsIcon from "../../images/showResults.png";

const NavbarWrapper = styled.div`
  position: relative;
  box-sizing: border-box;
  padding: 0 25px;
  margin: 14px 16px 5px 16px;
  width: auto;
  height: 80px;
  background: linear-gradient(
    91.95deg,
    rgba(255, 255, 255, 0.34) 5.53%,
    rgba(255, 255, 255, 0.35) 94.18%
  );
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 550;
`;
const Logo = styled(Link)`
  width: 30px;
  height: 36px;
  background-image: url(${logo});
  background-size: 145%;
  background-repeat: no-repeat;
  background-position: -7px -4px;
  mix-blend-mode: normal;
  filter: drop-shadow(0px 5px 20px rgba(0, 0, 0, 0.06));

  :hover {
    transform: scale(1.1);
    cursor: pointer;
    filter: brightness(0.95);
  }
`;
const Search = styled.div`
  width: 38px;
  height: 38px;
  background-position: center;
  mix-blend-mode: normal;
  filter: drop-shadow(0px 5px 20px rgba(0, 0, 0, 0.06));

  :hover {
    transform: scale(1.1);
    cursor: pointer;
    filter: brightness(0.95);
  }
`;
const BlurObject = styled.div`
  position: absolute;
  background-color: transparent;
  backdrop-filter: blur(10px);
  height: calc(100% + 35px);
  width: 100%;
  left: 0;
  top: -15px;
  z-index: 500;
`;
const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  padding: 1px 15px 0 25px;
  margin: 14px 16px 5px 16px;
  width: auto;
  z-index: 550;
  position: relative;
  border-radius: 15px;
  transform: translate(0, 0);
  background: linear-gradient(
    91.95deg,
    rgba(255, 255, 255, 0.305) 5.53%,
    rgba(255, 255, 255, 0.4) 94.18%
  );
  border: 2px solid rgba(255, 255, 255, 0.25);
  position: absolute;
`;
const SearchInput = styled.input`
  height: 100%;
  width: 100%;
  background-color: transparent;
  font-style: italic;
  font-weight: 700;
  font-size: 28px;
  color: #ffffff;
  border: none;
  outline: none;

  ::placeholder {
    color: white;
  }
`;
const ShowResultsIcon = styled.div`
  background-image: url(${showResultsIcon});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 78%;
  height: 100%;
  width: 75px;

  :hover {
    transform: scale(1.1);
    cursor: pointer;
    filter: brightness(0.95);
  }
`;

function Navbar() {
  const areaRef = useRef();

  const inputAreaRef = useRef();
  const inputRef = useRef();
  const symbolRef = useRef();

  const [searchSymbolSwitcher, setSearchSymbolSwitcher] = useState(false);

  useEffect(() => {
    window.onclick = (event) => {
      if (event.target === areaRef.current) {
        setSearchSymbolSwitcher((current) => !current);
      } else if (
        event.target === inputAreaRef.current ||
        event.target === inputRef.current ||
        event.target === symbolRef.current
      ) {
        setSearchSymbolSwitcher(true);
      } else {
        setSearchSymbolSwitcher(false);
      }
    };
  }, []);

  function SymbolSwitcher() {
    if (searchSymbolSwitcher === false) {
      return `url(${searchIcon})`;
    } else if (searchSymbolSwitcher === true) {
      return `url(${closeIcon})`;
    }
  }
  function SizeSwitcher() {
    if (searchSymbolSwitcher === false) {
      return 100;
    } else if (searchSymbolSwitcher === true) {
      return 130;
    }
  }

  return (
    <>
      <NavbarWrapper>
        <Logo to="/" />
        <Search
          style={{
            backgroundImage: `${SymbolSwitcher()}`,
            backgroundSize: `${SizeSwitcher() + "%"}`,
          }}
          ref={areaRef}
        />
      </NavbarWrapper>
      <AnimatePresence>
        {searchSymbolSwitcher ? (
          <motion.div
            exit={{ opacity: 0, y: 50 }}
            initial={{ y: 50, opacity: 1 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              exit={{ opacity: 0 }}
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
            >
              <BlurObject />
            </motion.div>
            <SearchWrapper ref={inputAreaRef}>
              <SearchInput
                placeholder="Czego szukasz?"
                type="text"
                id="search"
                name="name"
                ref={inputRef}
              />
              <ShowResultsIcon ref={symbolRef} />
            </SearchWrapper>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
