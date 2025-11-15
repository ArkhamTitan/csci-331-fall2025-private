import Counter from "Counter";
import AboutProject from "AboutProject";
import ProductSearch from "ProductSearch";

const Home = () => {
  return (
    <div style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
      <h1>Next.js Assignment</h1>
      <h2>Counter Components</h2>
      <Counter incrementValue={1} buttonColor="blue" />
      <Counter incrementValue={2} buttonColor="green" />

      <h2>About the Project</h2>
      <AboutProject />

      <h2>Product Search</h2>
      <ProductSearch />
    </div>
  );
};

export default Home;
