import React, { useRef, useEffect } from "react";
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
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current.scrollLeft -= 300; 
  };

  const scrollRight = () => {
    sliderRef.current.scrollLeft += 300;
  };

  useEffect(() => {
    const slider = sliderRef.current;
    const slideWidth = slider.offsetWidth; 
    console.log(slideWidth,'iam offset width');
    const scrollStep = 316; 

    const autoSlide = setInterval(() => {
      if (slider.scrollLeft + slideWidth >= slider.scrollWidth) {

        slider.scrollLeft = 0;
      } else {
        slider.scrollLeft += scrollStep;
      }
    }, 2000);

   
    return () => {
      clearInterval(autoSlide);
    };
  }, []);

  return (
    <div className="p-4">
      <Container>
        <h3 className="text-3xl my-8">Products</h3>
        <div className="relative">
          {/* Scroll buttons */}
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-2 py-1 rounded"
          >
            {"<"}
          </button>
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-2 py-1 rounded"
          >
            {">"}
          </button>

          {/* Slider Container */}
          <div
            ref={sliderRef}
            className="flex overflow-x-scroll scrollbar-hide space-x-4"
            style={{ scrollBehavior: "smooth" }}
          >
            {productData.map((product, index) => (
              <div key={index} className="min-w-[300px]">
                <Product product={product} />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Products;
