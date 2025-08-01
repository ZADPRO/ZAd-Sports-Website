import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import Glide from "@glidejs/glide";
import { Tooltip } from "primereact/tooltip";
import decrypt from "../../helper";
import sunset from "../../assets/images/sunset.webp";
import "./Product.css"
// import decrypt from ".";

interface Product {
  refProductsName: string;
  refProductDescription: string;
  refProductLink: string;
  refProductLogo: string;
  signedImageUrl?: string;
}

const Product: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [_hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const glideRef = useRef<Glide | null>(null);

  const fetchProducts = () => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/UserRoutes/ourProducts`, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response: any) => {
        const data = decrypt(
          response.data[1],
          response.data[0],
          import.meta.env.VITE_ENCRYPTION_KEY
        );

        if (data.success) {
          const productList = [...data.productImage, ...data.productImage];
          setProducts(productList);
        }
      })
      .catch((error) => {
        console.error("Failed to fetch products:", error);
      });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    if (products.length === 0) return;

    const instance = new Glide(".glide-09", {
      type: "carousel",
      autoplay: 1000,
      animationDuration: 4000,
      animationTimingFunc: "linear",
      perView: 3,
      gap: 20,
      breakpoints: {
        1024: { perView: 2 },
        640: { perView: 1 },
      },
    });

    instance.mount();
    glideRef.current = instance;

    return () => {
      instance.destroy();
    };
  }, [products]);

  const handleMouseEnter = (index: number) => {
    if (!glideRef.current) return;
    const glide = glideRef.current;

    // Pause glide and freeze animation (as shared earlier)
    glide.pause();
    const track = document.querySelector(
      '.glide-09 [data-glide-el="track"]'
    ) as HTMLElement;
    if (track) {
      const style = window.getComputedStyle(track);
      track.style.transform = style.transform;
      track.style.transition = "none";
    }

    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    if (!glideRef.current) return;
    const glide = glideRef.current;
    const track = document.querySelector(
      '.glide-09 [data-glide-el="track"]'
    ) as HTMLElement;
    if (track) {
      track.style.transition = "";
    }
    glide.play();
    setHoveredIndex(null);
  };

  return (
    <div>
    <div className="w-full md:w-10/12 mx-auto py-10">
  <p className="text-center text-[25px] uppercase font-bold text-[#0478df] mb-2">Our Products</p>

  <div className="glide-09 relative w-full overflow-hidden py-6">
    <div data-glide-el="track">
      <ul className="flex relative w-full overflow-hidden p-0">
        {products.map((product, index) => (
          <li
            key={index}
            id={`product-tooltip-${index}`} // unique id for tooltip target
            className="px-4 relative cursor-pointer"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            onClick={() => window.open(product.refProductLink, "_blank")}
          >
            <img
              src={product.signedImageUrl || sunset}
              alt={product.refProductsName}
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = sunset;
              }}
  className="m-auto h-24 w-24 md:h-32 md:w-32 object-contain rounded-md"
            />
            <div className="text-center mt-2 font-semibold">{product.refProductsName}</div>
          </li>
        ))}
      </ul>
    </div>
  </div>

  {/* PrimeReact Tooltip bound to each product by id */}
  {products.map((product, index) => (
    <div className="w-[10%]">
      <Tooltip
      key={`tooltip-${index}`}
      target={`#product-tooltip-${index}`}
      content={product.refProductDescription}
      mouseTrack
      mouseTrackLeft={10}
      showDelay={100}
      hideDelay={100}
      position="bottom"
    />
    </div>
    
  ))}

</div>

    </div>
  );
};

export default Product;
