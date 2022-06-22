import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "../src/components/App/App";

const container = document.getElementById("root");

const root = createRoot(container);

root.render(
  <StrictMode>
    {/* <BrowserRouter> */}
      <App />
      {/* <Routes>
              <Route exact path='/' component={Home} />
              <Route path='/contact' component={ProductDetail } />
              <Route path='/about' component={Sidebar} />
        </Routes> */}
    {/* </BrowserRouter> */}
  </StrictMode>
);