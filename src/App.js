import logo from "./logo.svg";
import "./App.css";
import ColTree from "./ColTree";
import Chart2 from "./chart2";
import Chart3 from "./Chart3";
import NewC from "./NewC";
import Companies from "./Companies";

import Typography from "@material-ui/core/Typography";
import Typed from "react-typed";

function App() {
  return (
    <div className="App">
      <Companies />
      {/*  <Typography
        style={{
          textTransform: "upperCase",
          textShadow: "pink 1px 1px",
          float: "left",
        }}
        variant="body1"
        color="secondary"
      >
        <Typed
          strings={[
            "Tree Map powered by D3JS, React and Json",
            "   Click the red dot to expand and shrink",
          ]}
          typeSpeed={20}
          backSpeed={40}
          loop
        />
      </Typography>

      <ColTree /> */}
    </div>
  );
}

export default App;
