/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { FaHeart, FaTrash } from "react-icons/fa";
import axios from "axios";

function ArticleCardFull({
  title,
  content,
  image_path,
  id,
  handleButtonClick,
  handleDeleteClick,
}) {
  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState([]);
  const [showComments, setShowComments] = useState(false);

  useEffect(() => {
    // Fetch initial likes count
    axios
      .get(`http://localhost:9292/articles/${id}/likes`)
      .then((response) => {
        setLikes(response.data.likes_count);
      })
      .catch((error) => {
        console.error("Error fetching likes:", error);
      });
  }, []);

  const handleLikeClick = () => {
    // Increase the likes count
    setLikes((prevLikes) => prevLikes + 1);

    // Send a POST request to create a like for the article
    axios
      .post(`http://localhost:9292/articles/${id}/likes`)
      .then((response) => {
        console.log("Like created:", response.data);
      })
      .catch((error) => {
        console.error("Error creating like:", error);
      });
  };

  // const handleDeleteClick = () => {
  //   // Send a DELETE request to delete the article
  //   axios
  //     .delete(`http://localhost:9292/articles/${id}`)
  //     .then(() => {
  //       console.log("Article deleted successfully");
  //       handleButtonClick(); // Close the article card
  //     })
  //     .catch((error) => {
  //       console.error("Error deleting article:", error);
  //     });
  // };

  const handleAddComment = (e) => {
    if (e.key === "Enter" && e.target.value.trim() !== "") {
      const newComment = e.target.value.trim();

      // Send a POST request to create a comment for the article
      axios
        .post(`http://localhost:9292/articles/${id}/comments`, {
          content: newComment,
        })
        .then((response) => {
          console.log("Comment created:", response.data);
          setComments((prevComments) => [...prevComments, newComment]);
          e.target.value = "";
        })
        .catch((error) => {
          console.error("Error creating comment:", error);
        });
    }
  };

  const handleShowComments = () => {
    setShowComments(!showComments);
  };

  return (
    <div className="max-w-3xl mx-auto p-8 h-screen">
      <h2 className="text-3xl font-bold mb-4">{title}</h2>
      <img
        src={image_path}
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
