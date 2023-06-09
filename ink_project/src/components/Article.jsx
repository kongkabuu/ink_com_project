/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaHeart, FaTrash } from "react-icons/fa";

function ArticleCardFull({ title, content, image, handleButtonClick }) {
  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState([]);
  const [showComments, setShowComments] = useState(false);

  const handleLikeClick = () => {
    setLikes((prevLikes) => prevLikes + 1);
  };

  const handleDeleteClick = () => {
    // Add logic to delete the article
    // You can use an API call or update the state as per your requirement
  };

  const handleAddComment = (e) => {
    if (e.key === "Enter" && e.target.value.trim() !== "") {
      setComments((prevComments) => [...prevComments, e.target.value.trim()]);
      e.target.value = "";
    }
  };

  const handleShowComments = () => {
    setShowComments(!showComments);
  };

  return (
    <div className="max-w-3xl mx-auto p-8 h-screen">
      <h2 className="text-3xl font-bold mb-4">{title}</h2>
      <img
        src={image}
        alt="Article"
        className="w-full h-96 object-cover mb-4"
      />
      <p className="text-gray-700 text-base">{content}</p>
      <div className="flex justify-between items-center mt-4">
        <div>
          <button className="mr-2" onClick={handleLikeClick}>
            <FaHeart className="text-red-500" />
          </button>
          <span>{likes}</span>
        </div>
        <button className="ml-2" onClick={handleDeleteClick}>
          <FaTrash className="text-gray-500" />
        </button>
      </div>
      {comments.length === 0 ? (
        <p className="mt-4">No comments yet.</p>
      ) : (
        <>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4 rounded"
            onClick={handleShowComments}
          >
            {showComments ? "Hide Comments" : "Show Comments"}
          </button>
          {showComments && (
            <div className="mt-4">
              <h3 className="text-xl font-bold mb-2">Comments:</h3>
              <ul>
                {comments.map((comment, index) => (
                  <li key={index}>{comment}</li>
                ))}
              </ul>
            </div>
          )}
        </>
      )}

      <input
        type="text"
        placeholder="Add a comment"
        className="w-full px-4 py-2 border border-gray-300 rounded mt-2"
        onKeyDown={handleAddComment}
      />
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4 rounded"
        onClick={handleButtonClick}
      >
        Close
      </button>
    </div>
  );
}

export default ArticleCardFull;
