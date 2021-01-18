import React from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "./router";
import { ApolloProvider } from "@apollo/client";
import { client } from "./../apollo/client"

const App = () => {
  return (
    <>
      <ApolloProvider client={ client }>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </ApolloProvider>
    </>
  );
};

export default App;
