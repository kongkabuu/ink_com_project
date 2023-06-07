import ArticleCard from "./Article";

function Articlelist() {
  return (
    <div className="flex flex-wrap justify-center">
      <ArticleCard
        title="Article Title 1"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec volutpat sagittis dolor, vitae feugiat sapien imperdiet sit amet. Nullam vitae risus et dui congue efficitur."
        image="article-image1.jpg"
      />
      <ArticleCard
        title="Article Title 2"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec volutpat sagittis dolor, vitae feugiat sapien imperdiet sit amet. Nullam vitae risus et dui congue efficitur."
        image="article-image2.jpg"
      />
      {/* Add more ArticleCard components for additional articles */}
    </div>
  );
}

export default Articlelist;
