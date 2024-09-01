import React from "react";
import Product from "./Product";
import Container from "../../../Container/Container";

const productData = [
  {
    id: 1,
    image:
      "https://cdn2.arogga.com/eyJidWNrZXQiOiJhcm9nZ2EiLCJrZXkiOiJQcm9kdWN0LXBfaW1hZ2VzXC8xNzMzNVwvMTczMzUtU2VyZ2VsLWRwMmR1Ni5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMDAsImhlaWdodCI6MzAwLCJmaXQiOiJvdXRzaWRlIn19fQ==",
    title: "B Natural Mixed Fruit Juice",
    points: 15,
    originalPrice: "₹250.00",
    discountedPrice: "₹200.00",
    discountPercentage: "50% OFF",
  },
  {
    id: 1,
    image:
      "https://cdn2.arogga.com/eyJidWNrZXQiOiJhcm9nZ2EiLCJrZXkiOiJQcm9kdWN0LXBfaW1hZ2VzXC8yODQwMVwvMjg0MDEtQ2Vldml0LWppZDl0Yi5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMDAsImhlaWdodCI6MzAwLCJmaXQiOiJvdXRzaWRlIn19fQ==",
    title: "B Natural Mixed Fruit Juice",
    points: 15,
    originalPrice: "₹250.00",
    discountedPrice: "₹200.00",
    discountPercentage: "50% OFF",
  },
  {
    id: 1,
    image:
      "https://cdn2.arogga.com/eyJidWNrZXQiOiJhcm9nZ2EiLCJrZXkiOiJQcm9kdWN0LXBfaW1hZ2VzXC8xMjAxNFwvMTIwMTQtTW9uYXMtMTAtZjhiaXplLmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMwMCwiaGVpZ2h0IjozMDAsImZpdCI6Im91dHNpZGUifX19",
    title: "B Natural Mixed Fruit Juice",
    points: 15,
    originalPrice: "₹250.00",
    discountedPrice: "₹200.00",
    discountPercentage: "50% OFF",
  },
  {
    id: 1,
    image:
      "https://cdn2.arogga.com/eyJidWNrZXQiOiJhcm9nZ2EiLCJrZXkiOiJQcm9kdWN0LXBfaW1hZ2VzXC8xNzMzNVwvMTczMzUtU2VyZ2VsLWRwMmR1Ni5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMDAsImhlaWdodCI6MzAwLCJmaXQiOiJvdXRzaWRlIn19fQ==",
    title: "B Natural Mixed Fruit Juice",
    points: 15,
    originalPrice: "₹250.00",
    discountedPrice: "₹200.00",
    discountPercentage: "50% OFF",
  },
  {
    id: 1,
    image:
      "https://cdn2.arogga.com/eyJidWNrZXQiOiJhcm9nZ2EiLCJrZXkiOiJQcm9kdWN0LXBfaW1hZ2VzXC8xNzMzNVwvMTczMzUtU2VyZ2VsLWRwMmR1Ni5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMDAsImhlaWdodCI6MzAwLCJmaXQiOiJvdXRzaWRlIn19fQ==",
    title: "B Natural Mixed Fruit Juice",
    points: 15,
    originalPrice: "₹250.00",
    discountedPrice: "₹200.00",
    discountPercentage: "50% OFF",
  },
];

const Products = () => {
  return (
    <div className="p-4">
      <Container>
        <h3 className="text-3xl my-8">Products</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {productData.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Products;
