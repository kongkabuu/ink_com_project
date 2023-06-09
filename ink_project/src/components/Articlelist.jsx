import ArticleCardFull from "./Article";
import ArticleCardThumbnail from "./ArticleCardThumbnail";

import { useState, useEffect } from "react";
import axios from "axios";

function ArticleList() {
  const [articles, setArticles] = useState([]);
  const [showFullCard, setShowFullCard] = useState(false);

  useEffect(() => {
    // Fetch the articles from your API
    axios
      .get("/articles")
      .then((response) => {
        setArticles(response.data);
      })
      .catch((error) => {
        console.error("Error fetching articles:", error);
      });
  }, []);

  const handleButtonClick = () => {
    setShowFullCard(!showFullCard);
  };

  return (
    <div className="h-screen">
      {articles.map((article) => (
        <div key={article.id}>
          {!showFullCard && (
            <ArticleCardThumbnail
              title={article.title}
              image={article.image_path}
              handleButtonClick={handleButtonClick}
            />
          )}

          {showFullCard && (
            <ArticleCardFull
              title={article.title}
              content={article.content}
              image={article.image_path}
              handleButtonClick={handleButtonClick}
            />
          )}
        </div>
      ))}
    </div>
  );
}

export default ArticleList;
