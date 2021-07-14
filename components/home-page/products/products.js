import ProductItem from "./product-item";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/scrollbar/scrollbar.min.css";

import classes from "./products.module.css";

// import Swiper core and required modules
import SwiperCore, { Scrollbar } from "swiper/core";

// install Swiper modules
SwiperCore.use([Scrollbar]);

const products = [
  {
    linkPath: "/",
    name: "Converse-7x",
    price: "$80",
    src: "/images/converseM6.jpg",
    alt: "New Arrival",
    key: Math.random(),
    gender: "Women's",
  },
  {
    linkPath: "/",
    name: "Converse-Z",
    price: "$80",
    src: "/images/converseM5.jpg",
    alt: "New Arrival",
    key: Math.random(),
    gender: "Men's",
  },
  {
    linkPath: "/",
    name: "Converse-M7",
    price: "$80",
    src: "/images/converseM7.jpg",
    alt: "New Arrival",
    key: Math.random(),
    gender: "Men's",
  },
  {
    linkPath: "/",
    name: "Converse-3",
    price: "$90",
    src: "https://res.cloudinary.com/pg84/image/upload/v1625000997/converseM4.jpg",
    alt: "New Arrival",
    key: Math.random(),
    gender: "Women's",
  },
  {
    linkPath: "/",
    name: "Converse-4",
    price: "$100",
    src: "https://res.cloudinary.com/pg84/image/upload/v1625001037/converseW4.jpg",
    alt: "New Arrival",
    key: Math.random(),
    gender: "Men's",
  },
  {
    linkPath: "/",
    name: "Converse",
    price: "$70",
    src: "https://res.cloudinary.com/pg84/image/upload/v1625000975/converseM2.jpg",
    alt: "New Arrival",
    key: Math.random(),
    gender: "Women's",
  },
  {
    linkPath: "/",
    name: "Converse-2",
    price: "$80",
    src: "https://res.cloudinary.com/pg84/image/upload/v1625000987/converseM3.jpg",
    alt: "New Arrival",
    key: Math.random(),
    gender: "Men's",
  },
];

function Products(props) {
  return (
    <div className={classes.products}>
      <h2>{props.title}</h2>
      <Swiper
        scrollbar={{
          hide: true,
        }}
        className={classes.mySwiper}
        slidesPerView={1.1}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2.4,
          },
          1024: {
            slidesPerView: 3.2,
          },
          1408: { slidesPerView: 4.5 },
        }}
      >
        <ul>
          {products.map((product) => (
            <SwiperSlide key={product.key}>
              <ProductItem
                name={product.name}
                linkPath={product.linkPath}
                alt={product.alt}
                src={product.src}
                price={product.price}
                gender={product.gender}
              />
            </SwiperSlide>
          ))}
        </ul>
      </Swiper>
    </div>
  );
}

export default Products;
