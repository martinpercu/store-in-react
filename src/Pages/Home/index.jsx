import { useState, useEffect } from "react";
import Layout from "../../Components/Layout";
import Card from "../../Components/Card";

function Home() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((response) => response.json())
      .then(
        (data) => setProducts(data)
        // .then(data => console.log(data))
      );
  }, []);

  return (
    <Layout>
      HOME
      <div className="gap-2 sm:gap-4 grid grid-cols-1 sm:grid-cols-4 sm:w-full 
      sm:max-w-screen-lg">
        {products?.map((item) => (
          <Card key={item.id} data={item} />
        ))}
      </div>
    </Layout>
  );
}

export default Home;
