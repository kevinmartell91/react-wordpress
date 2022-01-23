import React, { lazy, Suspense, useState } from "react";
import VisibilitySensor from "react-visibility-sensor";
import "./App.css";

const LazyComponent = lazy(() => import("./components/lazyComponent"));
const loading_component_message = <div>Loading component</div>;
const loadComponent = (
  <Suspense fallback={loading_component_message}>{<LazyComponent />}</Suspense>
);
function App() {
  const [isLazyLoaded, setIsLazyLoaded] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <h1>React application. </h1>
        <p>
          <code>
            When the logo-component area is visible, the component is lazy
            loaded.
          </code>
        </p>
        <h2>Instructions:</h2>
        <code>
          <br></br>
          <strong>1)</strong>Open Chrome DevTools
          <br></br>
          <br></br>
          <strong>2)</strong>Go to Network tab and change the Network throttling
          to Slow 3G.
          <br></br>(this will allow you to the see the loading message)
          <br></br>
          <br></br>
          <strong>3)</strong>Scroll down until the logo-component is loaded.
        </code>

        <br></br>
        <br></br>
      </header>
      <body>
        <VisibilitySensor>
          {({ isVisible }) => {
            if (isVisible) setIsLazyLoaded(true);
            return (
              <div>
                <h3>
                  {isVisible
                    ? "Lazy loading area - Visible"
                    : "Lazy loading area - No Visible"}
                </h3>
              </div>
            );
          }}
        </VisibilitySensor>
        <div>{isLazyLoaded && loadComponent}</div>
      </body>
    </div>
  );
}

export default App;
