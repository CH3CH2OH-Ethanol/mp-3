import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Root from "./components/Root.tsx";
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";
import {createGlobalStyle} from "styled-components";

const router = createBrowserRouter([{
  path: "*",
  Component: Root
}])

const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
        margin: 0;
    }

    body{
        width: 90%;
        max-width: 1400px;

        margin: 0 auto;

        background-color: rgb(38 40 44);

        font-family: Arial, Helvetica, sans-serif;
        color: rgb(223 225 229);
    }

    h1{
        font-size: calc(25px + 1vw);
        margin: 10px 0;
    }

    h2{
        font-size: calc(19px + .8vw);
        color: rgb(195 102 56);
    }

    h3{
        font-size: calc(17px + .6vw);
        color: rgb(173 118 204);
    }

    h4{
        font-size: calc(15px + .5vw);
        color: rgb(66 110 200);
    }

    p, li, a, input, label, span{
        font-size: calc(13px + .3vw);
        line-height: 1.5;
    }
`;

function App() {

  return (
      <>
          <GlobalStyle />
          <Header />
          <RouterProvider router={router} />
          <Footer />
      </>

  )
}

export default App
