import ArticleCardFull from "./ArticleCardFull";
import ArticleCardThumbnail from "./ArticleCardThumbnail";
import { useState, useEffect } from "react";
import axios from "axios";

function ArticleList() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    // Fetch the articles from your API
    axios
      .get("http://localhost:9292/articles")
      .then((response) => {
        setArticles(
          response.data.map((article) => ({
            ...article,
            showFullCard: false,
          }))
        );
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching articles:", error);
      });
  }, []);

  const handleButtonClick = (articleId) => {
    setArticles((prevArticles) =>
      prevArticles.map((article) =>
        article.id === articleId
          ? { ...article, showFullCard: !article.showFullCard }
          : article
      )
    );
  };

  const handleDeleteClick = (id) => {
    axios
      .delete(`http://localhost:9292/articles/${id}`)
      .then(() => {
        console.log("Article deleted successfully");
        setArticles((prevArticles) =>
          prevArticles.filter((article) => article.id !== id)
        );
      })
      .catch((error) => {
        console.error("Error deleting article:", error);
      });
  };

  return (
    <div className="h-screen">
      {articles.map((article) => (
        <div key={article.id}>
          {!article.showFullCard && (
            <ArticleCardThumbnail
              id={article.id}
              title={article.title}
              image={article.image_path}
              handleButtonClick={() => handleButtonClick(article.id)}
            />
          )}

          {article.showFullCard && (
            <ArticleCardFull
              id={article.id}
              title={article.title}
              content={article.content}
              image={article.image_path}
              handleButtonClick={() => handleButtonClick(article.id)}
              handleDeleteClick={() => handleDeleteClick(article.id)}
            />
          )}
        </div>
      ))}
    </div>
  );
}

export default ArticleList;
