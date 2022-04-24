import React from "react";
import "office-ui-fabric-react/dist/css/fabric.css";
import "./styles/globals.css";
import { FormProcesso } from "./components/FormProcesso";

export function App() {
  return (
    <div className="wrapper">
      <FormProcesso />
    </div>
  );
}
