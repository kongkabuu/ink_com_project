/* eslint-disable react/prop-types */
import { useState } from "react";

function ArticleCard({ title, content, image }) {
  const [showFullCard, setShowFullCard] = useState(false);

  const handleButtonClick = () => {
    setShowFullCard(true);
  };

  return (
    <>
      {!showFullCard && (
        <div className="max-w-sm rounded overflow-hidden shadow-lg mx-4 my-8">
          <img src={image} alt="Article" className="w-full h-48 object-cover" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{title}</div>
            <p className="text-gray-700 text-base">{content}</p>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4 rounded"
              onClick={handleButtonClick}
            >
              Read More
            </button>
          </div>
        </div>
      )}

      {showFullCard && (
        <div className="fixed top-0 left-0 h-screen w-screen bg-white flex items-center justify-center">
          <div className="max-w-3xl mx-auto p-8">
            <h2 className="text-3xl font-bold mb-4">{title}</h2>
            <img
              src={image}
              alt="Article"
              className="w-full h-96 object-cover mb-4"
            />
            <p className="text-gray-700 text-base">{content}</p>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4 rounded"
              onClick={() => setShowFullCard(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default ArticleCard;
