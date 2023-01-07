import "./App.css";
import { Routes, Route } from "react-router-dom";
import routes from "./pages/router";
import { ThirdwebProvider, ChainId} from "@thirdweb-dev/react";
import { useState } from "react";
//import { ChainId } from "@thirdweb-dev/sdk";
import ChainContext from "../src/context/Chain";

function App() {

  const [selectedChain, setSelectedChain] = useState(ChainId.Mainnet);

  //const activeChainId = ChainId.Polygon;
  return (
    <ChainContext.Provider value={{ selectedChain, setSelectedChain }}>
      <ThirdwebProvider desiredChainId={selectedChain}>
        <Routes>
          {routes.map((data, index) => (
            <Route
              exact={true}
              path={data.path}
              element={data.component}
              key={index}
            />
          ))}
        </Routes>
      </ThirdwebProvider>
      </ChainContext.Provider>
  );
}

export default App;
