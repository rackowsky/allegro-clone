import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Flickity from "react-flickity-component";

import AuctionForm from "../auctionForm";

const SingleAuctionWrapper = styled.div`
  box-sizing: border-box;
  margin: 14px 16px 5px 16px;
  height: auto;
  width: auto;
  background: rgba(255, 255, 255, 0.35);
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 15px;
  position: relative;
  overflow: hidden;
  padding: 0 15px 15px 15px;

  ::before {
    content: "";
    pointer-events: none;
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background: linear-gradient(
      180deg,
      rgba(157, 80, 255, 0) 0%,
      #c08fff 41.44%,
      #b880ff 71.47%
    );
    border: 2px solid rgba(255, 255, 255, 0.4);
    z-index: 50;
  }
`;
const GalleryWrapper = styled.div`
  position: relative;

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
    padding: 15px;
    display: flex;
    justify-content: center;
    gap: 10px;
    list-style-type: none;
    cursor: pointer;
    margin-top: -60px;
    z-index: 100;
    position: relative;
    opacity: 0.75;
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
const Gallery = styled.div`
  height: calc(215px + 50px);
  width: 110%;
  background-image: url("https://picsum.photos/317/338");
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
  margin-right: 2.5px;
  z-index: 40;
`;
const ContentWrapper = styled.div`
  z-index: 100;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 15px;

  > h1 {
    font-style: italic;
    font-weight: 600;
    font-size: 30px;
    line-height: 35px;
    color: #ffffff;
    text-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
  }
  > div > p {
    font-style: italic;
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
    color: #ffffff;
    text-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
  }
  > p {
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 15px;
    color: #ffffff;
    text-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
  }
  > div > h2 {
    font-style: italic;
    font-weight: 700;
    font-size: 15px;
    line-height: 18px;
    color: #ffffff;
    text-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
  }
  > div > h3 {
    font-style: italic;
    font-weight: 700;
    font-size: 30px;
    line-height: 35px;
    color: #ffffff;
    text-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
  }
`;
const BulletSpace = styled.div`
  height: 7px;
  width: 7px;
  background-color: white;
  border-radius: 100%;
`;

const tempData = {
  title: "Przykładowa nazwa aukcji",
  user: "jan_kowalski239",
  category: "elektronika",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac molestie massa, pretium vestibulum risus. Cras non nunc viverra, euismod metus ac, feugiat turpis. Nullam pharetra consectetur ante sed suscipit. Vestibulum ultrices felis ut tristique cursus.",
  price: "476,25",
};

const SingleAuction = () => {
  const flickityOptions = {
    initialIndex: 0,
    prevNextButtons: false,
  };

  return (
    <SingleAuctionWrapper>
      <GalleryWrapper>
        <Flickity
          className={"carousel"} // default ''
          elementType={"div"} // default 'div'
          options={flickityOptions} // takes flickity options {}
          disableImagesLoaded={false} // default false
          reloadOnUpdate // default false
          static // default false
        >
          {Array.apply(0, Array(5)).map(function (x, i) {
            return <Gallery key={i} />;
          })}
        </Flickity>
      </GalleryWrapper>
      <ContentWrapper>
        <h1>{tempData.title}</h1>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <p>{tempData.user}</p>
          <BulletSpace />
          <p>{tempData.category}</p>
        </div>
        <p>{tempData.description}</p>
        <div>
          <h2>Aktualna cena</h2>
          <h3>{tempData.price} zł</h3>
        </div>
        <AuctionForm />
      </ContentWrapper>
    </SingleAuctionWrapper>
  );
};

export default SingleAuction;
