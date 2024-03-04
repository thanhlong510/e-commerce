import React from "react";

const Footer = () => {
  return (
    <div className=" bg-[#f9f9f9] ">
      <div className="grid grid-cols-12">
        <div className="col-span-4 text-sm-left mb-5 mr-auto text-center">
          <div className="footer-widget">
           
            <p className="lead">
              Iste dolores iure quis excepturi, deserunt praesentium.
            </p>
            <p className="mb-0">
              <strong>Location : </strong>Dhaka, Bangladedsh
            </p>
            <p>
              <strong>Support Email : </strong>demo@email.com
            </p>
          </div>
        </div>
        <div className="col-start-7 col-span-2 text-sm-left mb-5 text-center">
          <div className="footer-widget">
            <h4 className="mb-4">Category</h4>
            <ul className="list-unstyled mb-0 pl-0">
              <li>
                <a href="/adrian/site/categories/bag/">Bag</a>
              </li>
              <li>
                <a href="/adrian/site/categories/shirt/">Shirt</a>
              </li>
              <li>
                <a href="/adrian/site/categories/shoe/">Shoe</a>
              </li>
              <li>
                <a href="/adrian/site/categories/tops/">Tops</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-start-9 col-span-2 text-sm-left mb-5 text-center">
          <div className="footer-widget">
            <h4 className="mb-4">Useful Link</h4>
            <ul className="list-unstyled mb-0 pl-0">
              <li>
                <a href="/adrian/site/shop/">Shop</a>
              </li>
              <li>
                <a href="/adrian/site/about/">About</a>
              </li>
              <li>
                <a href="/adrian/site/faq/">Faq</a>
              </li>
              <li>
                <a href="/adrian/site/contact/">Contact</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-start-11 col-span-2  text-sm-left text-center">
          <div className="footer-widget">
            <h4 className="mb-4">Opening Hours</h4>
            <ul className="list-unstyled mb-5 pl-0">
              <li className="d-lg-flex justify-content-between">
                Monday-Friday <span>8.00-20.00</span>
              </li>
              <li className="d-lg-flex justify-content-between">
                Saturday <span>10.00-20.00</span>
              </li>
              <li className="d-lg-flex justify-content-between">
                Sunday <span>12.00-20.00</span>
              </li>
            </ul>
            <h5>Call Now : 0124857985320</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
