/* eslint-disable react/prop-types */
function ArticleCardThumbnail({ title, image, handleButtonClick }) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg mx-4 my-8">
      <img src={image} alt="Article" className="w-full h-48 object-cover" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4 rounded"
          onClick={handleButtonClick}
        >
          Read More
        </button>
      </div>
    </div>
  );
}

export default ArticleCardThumbnail;
