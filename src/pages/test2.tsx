"use client"
import React, { useEffect } from "react";
import { api } from "~/utils/api";
import { useCartContext } from "./components/CartContext";
import CreateProduct from "./components/CreateProduct";
/// Show product
const NewTest = () => {


  useEffect(() => {
    const onresize =()=>{
      const element = document.getElementById("header");
      if (element) {
        element.style.backgroundSize =160 - +window.pageYOffset/12 + '%';
        element.style.opacity =1 - +window.pageYOffset/1200 + '';
    
      }
    }
    
    window.addEventListener('scroll',onresize)
  }, []);; // [] đảm bảo useEffect chỉ chạy một lần khi component được render


  return (
    <div>
       
      <div className="w-full h-[400px] object-cover bg-no-repeat "  id="header"   style={{ backgroundImage: `url(feedback-bg.jpg)` }} >  
    </div>
       <p className="text-xl">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo doloribus corporis maxime consequuntur laudantium, sunt deserunt vel? In autem ex itaque quae distinctio id saepe perferendis mollitia. Voluptas, temporibus magnam?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex nostrum assumenda fuga et exercitationem quos inventore reiciendis nobis blanditiis labore, repudiandae, tenetur deserunt nesciunt eaque aliquid vero officiis ipsam corporis.
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo doloribus corporis maxime consequuntur laudantium, sunt deserunt vel? In autem ex itaque quae distinctio id saepe perferendis mollitia. Voluptas, temporibus magnam?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex nostrum assumenda fuga et exercitationem quos inventore reiciendis nobis blanditiis labore, repudiandae, tenetur deserunt nesciunt eaque aliquid vero officiis ipsam corporis.
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo doloribus corporis maxime consequuntur laudantium, sunt deserunt vel? In autem ex itaque quae distinctio id saepe perferendis mollitia. Voluptas, temporibus magnam?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex nostrum assumenda fuga et exercitationem quos inventore reiciendis nobis blanditiis labore, repudiandae, tenetur deserunt nesciunt eaque aliquid vero officiis ipsam corporis.
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo doloribus corporis maxime consequuntur laudantium, sunt deserunt vel? In autem ex itaque quae distinctio id saepe perferendis mollitia. Voluptas, temporibus magnam?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex nostrum assumenda fuga et exercitationem quos inventore reiciendis nobis blanditiis labore, repudiandae, tenetur deserunt nesciunt eaque aliquid vero officiis ipsam corporis.
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo doloribus corporis maxime consequuntur laudantium, sunt deserunt vel? In autem ex itaque quae distinctio id saepe perferendis mollitia. Voluptas, temporibus magnam?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex nostrum assumenda fuga et exercitationem quos inventore reiciendis nobis blanditiis labore, repudiandae, tenetur deserunt nesciunt eaque aliquid vero officiis ipsam corporis.
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo doloribus corporis maxime consequuntur laudantium, sunt deserunt vel? In autem ex itaque quae distinctio id saepe perferendis mollitia. Voluptas, temporibus magnam?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex nostrum assumenda fuga et exercitationem quos inventore reiciendis nobis blanditiis labore, repudiandae, tenetur deserunt nesciunt eaque aliquid vero officiis ipsam corporis. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo doloribus corporis maxime consequuntur laudantium, sunt deserunt vel? In autem ex itaque quae distinctio id saepe perferendis mollitia. Voluptas, temporibus magnam?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex nostrum assumenda fuga et exercitationem quos inventore reiciendis nobis blanditiis labore, repudiandae, tenetur deserunt nesciunt eaque aliquid vero officiis ipsam corporis. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo doloribus corporis maxime consequuntur laudantium, sunt deserunt vel? In autem ex itaque quae distinctio id saepe perferendis mollitia. Voluptas, temporibus magnam?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex nostrum assumenda fuga et exercitationem quos inventore reiciendis nobis blanditiis labore, repudiandae, tenetur deserunt nesciunt eaque aliquid vero officiis ipsam corporis.
    </p>
    </div>
    
  );
};

export default NewTest;
