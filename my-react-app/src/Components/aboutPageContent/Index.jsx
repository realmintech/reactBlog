import React from "react";
import "./Index.css";
import Desert from "../../assets/image5.png";

export default function Index() {
  return (
    <>
      <div className="bgImg mb-4"></div>
      <div className="container ">
        <em className="text-secondary">
          GOOD DESIGN IS MAKING SOMETHING INTELLIGIBLE AND MEMORABLE. GREAT
          DESIGN IS MAKING SOMETHING MEMORABLE AND MEANINGFUL.
        </em>
        <p className="my-4">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic maxime,
          aut dolor voluptate placeat rem architecto, suscipit officiis delectus
          nulla, error sapiente. Nostrum, amet ducimus ab at animi eaque
          similique! Est minus quo explicabo, ipsam distinctio delectus
          accusantium eos, consectetur soluta voluptatem nihil nemo. At
          consectetur accusamus voluptates nobis beatae, quisquam, quae
          reprehenderit molestias sint ex laborum repellendus? Amet, porro! In
          dicta, veritatis cumque eius, optio odit distinctio deserunt facere
          corrupti laborum maiores quo! Totam vero iusto vel labore obcaecati
          dolor earum? Totam culpa nesciunt deleniti, excepturi quod rerum
          voluptates!
        </p>
        <img src={Desert} alt="river" className="riverImg" />
        <figcaption className="text-center">City river area</figcaption>
      </div>
      <div className="container">
        <div className="row my-4">
          <div className="col-sm-6 col-md-6 col-lg-6">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias,
            ipsam saepe! Magni eius distinctio deleniti veritatis temporibus
            possimus quos tempore, quibusdam modi soluta vero aut quaerat, unde,
            dignissimos incidunt nesciunt? Tenetur, repudiandae? Ducimus
            incidunt, totam distinctio accusamus doloribus, repellendus maiores
            at tempore, reiciendis non molestias eum harum nobis minima
            perspiciatis nostrum veritatis sint dolorum voluptatibus vel! Quia
            harum natus modi. Iste consequatur alias, doloremque tempora
            reiciendis eius ab quisquam optio ex quia libero sequi, atque
            architecto, harum sunt! Repellendus exercitationem expedita nobis
            quos suscipit facilis saepe minus repellat consectetur possimus.
          </div>
          <div className="col-sm-6 col-md-6 col-lg-6">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias,
            ipsam saepe! Magni eius distinctio deleniti veritatis temporibus
            possimus quos tempore, quibusdam modi soluta vero aut quaerat, unde,
            dignissimos incidunt nesciunt? Tenetur, repudiandae? Ducimus
            incidunt, totam distinctio accusamus doloribus, repellendus maiores
            at tempore, reiciendis non molestias eum harum nobis minima
            perspiciatis nostrum veritatis sint dolorum voluptatibus vel! Quia
            harum natus modi. Iste consequatur alias, doloremque tempora
            reiciendis eius ab quisquam optio ex quia libero sequi, atque
            architecto, harum sunt! Repellendus exercitationem expedita nobis
            quos suscipit facilis saepe minus repellat consectetur possimus.
          </div>
        </div>
      </div>
    </>
  );
}
