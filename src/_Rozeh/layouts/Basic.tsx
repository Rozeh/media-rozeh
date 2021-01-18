import React from "react";
import styled from "styled-components";
import Header from "../components/header/Header";
import Middle from "../components/middle/Middle";

const BasicLayout = styled.div`
  display: grid;
  grid-template-columns: 5% auto 5%;
  grid-template-areas:
    'header header header'
    'nav    main   main'
    '.      .      .'
    'footer footer footer';
  width: 100%;
  align-items: center;
  @media all and (max-width: 767px) {
    grid-template-columns: 1fr;
  }
  .footer {grid-area: footer; }
`;

const Basic = () => {
  return (
    <BasicLayout>
        <div></div>
        <Header />
        <div></div>
        <div></div>
        <Middle />
        <div></div>
        <div className="footer">fort</div>
        <div className="footer"></div>
        <div className="footer"></div>
    </BasicLayout>
    );
};

export default Basic;
