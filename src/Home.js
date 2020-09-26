import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg"
        alt=""
      />
      <div className="home__row">
        <Product
          id={1}
          title='Lenovo IdeaPad 3 14" Laptop, 14.0" FHD (1920 x 1080) Display, AMD Ryzen 5 3500U Processor, 8GB DDR4 RAM, 256GB SSD, AMD Radeon Vega 8 Graphics, Narrow Bezel, Windows 10, 81W0003QUS, Abyss Blue'
          price={534.0}
          rating={4}
          image="https://m.media-amazon.com/images/I/71qWXG8fdiL._AC_UL480_QL65_.jpg"
        />
        <Product
          id={2}
          title="ASUS TUF Gaming A15 Gaming Laptop, 15.6” 144Hz FHD IPS-Type, AMD Ryzen 5 4600H, GeForce GTX 1650, 8GB DDR4, 512GB PCIe SSD, Gigabit Wi-Fi 5, Windows 10 Home, FA506IH-AS53"
          price={749.0}
          rating={5}
          image="https://m.media-amazon.com/images/I/A1A2yQlAXCL._AC_UL480_QL65_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id={3}
          title="Apple MacBook Air (13-inch, 8GB RAM, 256GB SSD Storage) - Space Gray (Latest Model)"
          price={899.0}
          rating={5}
          image="https://m.media-amazon.com/images/I/71k3fJh5EwL._AC_UY327_QL65_.jpg"
        />
        <Product
          id={4}
          title="New Apple MacBook Pro (13-inch, 16GB RAM, 512GB SSD Storage, Magic Keyboard) - Space Gray"
          price={1649.0}
          rating={5}
          image="https://m.media-amazon.com/images/I/71bElkQQ7LL._AC_UY327_QL65_.jpg"
        />
        <Product
          id={5}
          title="New Apple MacBook Pro (16-inch, 16GB RAM, 512GB Storage, 2.6GHz Intel Core i7) - Silver"
          price={2149.0}
          rating={5}
          image="https://m.media-amazon.com/images/I/71UItVa0VmL._AC_UY327_QL65_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id={6}
          title="Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED Computer Monitor, 3840 x 1080p Resolution, 1ms Response, FreeSync 2 with HDR"
          price={899.99}
          rating={5}
          image="https://m.media-amazon.com/images/I/81Zt42ioCgL._AC_UY327_QL65_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
