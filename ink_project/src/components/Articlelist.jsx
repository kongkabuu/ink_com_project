function Articlelist() {
  return (
    <div className="flex flex-wrap justify-center">
      <div className="max-w-sm rounded overflow-hidden shadow-lg mx-4 my-8">
        <img
          src="article-image1.jpg"
          alt="Article"
          className="w-full h-48 object-cover"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Article Title 1</div>
          <p className="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            volutpat sagittis dolor, vitae feugiat sapien imperdiet sit amet.
            Nullam vitae risus et dui congue efficitur.
          </p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4 rounded">
            Read More
          </button>
        </div>
      </div>
      <div className="max-w-sm rounded overflow-hidden shadow-lg mx-4 my-8">
        <img
          src="article-image2.jpg"
          alt="Article"
          className="w-full h-48 object-cover"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Article Title 2</div>
          <p className="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            volutpat sagittis dolor, vitae feugiat sapien imperdiet sit amet.
            Nullam vitae risus et dui congue efficitur.
          </p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4 rounded">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
}

export default Articlelist;
