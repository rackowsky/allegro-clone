import React, { Suspense, lazy, useState } from "react";
import { Helmet } from "react-helmet";
import { Route, Routes, useLocation } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import Icon from "../src/images/favicon.ico";

import Viewport from "./components/viewport";
import Loader from "./components/loader";

//prod
const Login = lazy(() => import("./routes/login"));
const Main = lazy(() => import("./routes/main"));
const Auctions = lazy(() => import("./routes/auctions"));
const CreateAuction = lazy(() => import("./routes/createAuction"));
const SingleAuction = lazy(() => import("./routes/singleAuction"));
const NotFound = lazy(() => import("./routes/notFound"));
//prod

//for dev
// import Login from './routes/login'
// import Main from './routes/main'
// import Auctions from './routes/auctions'
// import CreateAuction from './routes/createAuction'
// import SingleAuction from './routes/singleAuction'
// import NotFound from './routes/notFound'
//for dev

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Roboto';
    user-select: none;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    transition: 0.2s
  }

  body {
    display: flex;
    justify-content: center;
    /* prod */
    align-items: center;
    height: 100vh;
    width: 100vw;
    position: relative;
  }

  ::selection {
    background-color: #C649E8;
  }

  .page, .page-enter, .page-enter-active, .page-exit, .page-exit-active {
    opacity: 0;
    transform: scale(1);
    transition: 1ms !important;
  }

  ::-webkit-scrollbar {
    width: 0;
  }
`;

const App = () => {
  const [isLogged, setIsLogged] = useState(true);
  const location = useLocation();

  function LocationSwitcher() {
    if (isLogged === true) {
      return null;
    } else if (
      isLogged === false &&
      window.location.pathname !== "/logowanie" &&
      window.location.pathname !== "/rejestracja"
    ) {
      return window.location.replace("/logowanie");
    } else {
      return null;
    }
  }
  function LoginDetectorComponentSwitcher(e) {
    if (isLogged === true) {
      return e;
    } else if (isLogged === false) {
      return <Login />;
    }
  }
  function DisableLoginComponent() {
    if (isLogged === true && window.location.pathname === "/logowanie") {
      return window.location.replace("/");
    } else if (
      isLogged === true &&
      window.location.pathname === "/rejestracja"
    ) {
      return window.location.replace("/");
    }
  }

  return (
    <>
      {LocationSwitcher()}
      {DisableLoginComponent()}
      <GlobalStyle />
      <Helmet>
        <meta charSet="utf-8" />
        <title>Allegro Clone</title>
        <link rel="shortcut icon" type="image/png" href={Icon} />
      </Helmet>
      <TransitionGroup>
        <CSSTransition key={location.pathname} classNames="page" timeout={150}>
          <Viewport>
            {/* PROD */}
            <Suspense fallback={<Loader />}>
              <Routes>
                <Route
                  path="/"
                  element={LoginDetectorComponentSwitcher(<Main />)}
                />
                <Route path="/logowanie" element={<Login />} />
                <Route path="/rejestracja" element={<Login />} />
                <Route
                  path="/aukcje"
                  element={LoginDetectorComponentSwitcher(<Auctions />)}
                />
                <Route
                  path="/dodaj_aukcje"
                  element={LoginDetectorComponentSwitcher(<CreateAuction />)}
                />
                <Route
                  path="/aukcje/1"
                  element={LoginDetectorComponentSwitcher(<SingleAuction />)}
                />
                <Route
                  path="*"
                  element={LoginDetectorComponentSwitcher(<NotFound />)}
                />
              </Routes>
              {/* PROD */}
            </Suspense>
          </Viewport>
        </CSSTransition>
      </TransitionGroup>
    </>
  );
};

export default App;
