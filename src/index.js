import React from "react";
import { render } from "react-dom";
import {
  Header,
  HeaderName
} from "carbon-components-react/lib/components/UIShell";

import "./style.css";

const App = () => (
  <div className="container">
    <Header aria-label="IBM Platform Name">
      <HeaderName href="#" prefix="IBM">
        [Platform]
      </HeaderName>
    </Header>
  </div>
);

render(<App />, document.getElementById("root"));
