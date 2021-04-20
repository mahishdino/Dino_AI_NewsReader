import React, { useState, useEffect } from "react";
import "./App.css";
import alanBtn from "@alan-ai/alan-sdk-web";
import NewsCards from "./components/NewsCards/NewsCards";

const alanKey =
  "2ad143a29fdd82ee7d95f519830cbecf2e956eca572e1d8b807a3e2338fdd0dc/stage";
function App() {
  const [newsArticles, setNewsArticles] = useState([]);

  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command, articles }) => {
        if (command === "newHeadlines") {
          setNewsArticles(articles);
        }
      },
    });
  }, []);
  return (
    <div className="App">
      <h1 className="sd">Dino AI Application</h1>
      <div className="df">
        <img src={require("./dino.png").default} />
      </div>
      <NewsCards articles={newsArticles} />
    </div>
  );
}

export default App;
