/* eslint-disable no-unused-vars */
import { useState } from "react";
import axios from "axios";

function CreateArticle() {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);
  const [content, setContent] = useState("");

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImage(file);
  };

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("image_path", image);
    formData.append("content", content);

    try {
      const response = await axios.post(
        "http://localhost:9292/articles",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("Article submitted successfully:", response.data);

      // Reset form fields
      setTitle("");
      setImage(null);
      setContent("");
    } catch (error) {
      console.log("Error submitting article:", error);
    }
  };

  return (
    <div className="h-screen">
      <h2 className="text-2xl font-bold mb-4">Create Your Own Article</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block font-bold mb-1">
            Title:
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={handleTitleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="image" className="block font-bold mb-1">
            Image:
          </label>
          <input
            type="file"
            id="image"
            onChange={handleImageChange}
            className="w-full focus:outline-none"
            accept="image/*"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="content" className="block font-bold mb-1">
            Content:
          </label>
          <textarea
            id="content"
            value={content}
            onChange={handleContentChange}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            rows={8}
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Submit Article
        </button>
      </form>
    </div>
  );
}

export default CreateArticle;
