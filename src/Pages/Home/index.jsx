import { useContext } from "react";
import Layout from "../../Components/Layout";
import Card from "../../Components/Card";
import ProductDetail from "../../Components/ProductDetail";
import { ShoppingCartContext } from "../../Context";

function Home() {
  const context = useContext(ShoppingCartContext);

  return (
    <Layout>
      <div className="flex flex-col justify-center w-80 text-center items-center gap-6  mb-4">
        <h2 className="font-medium text-xl mt-2">Find Products</h2>
        <input
          type="text"
          placeholder="Search your product"
          className="rounded-lg border border-violet-500 p-2 mb-6 focus:outline-violet-800"
          onChange={(event) => context.setSearchByTitle(event.target.value)}
        />
      </div>

      <div
        className="gap-2 sm:gap-4 grid grid-cols-1 sm:grid-cols-4 sm:w-full 
      sm:max-w-screen-lg"
      >
        {context.products?.map((item) => (
          <Card key={item.id} data={item} />
        ))}
      </div>
      <ProductDetail />
    </Layout>
  );
}

export default Home;
