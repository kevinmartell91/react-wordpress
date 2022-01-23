import React from "react";
import "../App.css";

function LazyComponent() {
  return (
    <div className="lazy-style">
      <span> Lazy component loaded</span>
      <br></br>
      <br></br>
      <img
        src="https://icon-library.com/images/react-icon/react-icon-29.jpg"
        className="App-logo"
        alt="logo"
      />
    </div>
  );
}
export default LazyComponent;

// Sources
// https://www.digitalocean.com/community/tutorials/how-to-handle-async-data-loading-lazy-loading-and-code-splitting-with-react
// https://www.digitalocean.com/community/tutorials/react-components-viewport-react-visibility-sensor
// https://blog.bitsrc.io/lazy-loading-react-components-with-react-lazy-and-suspense-f05c4cfde10c
// https://www.000webhost.com/cpanel-login?from=panel
// https://hanabitours-test.000webhostapp.com/wp-admin
