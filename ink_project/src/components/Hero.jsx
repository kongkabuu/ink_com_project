import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="bg-blue-500 py-16">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl text-white font-bold mb-4">
          Welcome to Our Site
        </h1>
        <p className="text-white text-lg mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec justo
          vitae orci tincidunt dignissim. In hac habitasse platea dictumst.
          Aenean aliquet libero sit amet urna sollicitudin commodo. Nam at augue
          eu leo rutrum volutpat. Nullam elementum efficitur dui, eget porta mi
          bibendum non.
        </p>
        <Link
          to={"/Articles"}
          className="bg-white text-blue-500 hover:bg-blue-700 text-lg font-bold py-2 px-4 rounded"
        >
          Learn More
        </Link>
      </div>
    </section>
  );
}

export default Hero;
