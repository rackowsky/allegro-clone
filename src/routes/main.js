import Navbar from "../components/navbar";
import ModeMenu from "../components/modeMenu";
import AuctionsWidget from "../components/auctionsWidget";

const main = () => {
  return (
    <>
      <Navbar />
      <ModeMenu />
      <AuctionsWidget name="Najnowsze aukcje" />
    </>
  );
};

export default main;
