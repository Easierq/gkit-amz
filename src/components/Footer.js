import React from "react";

const Footer = () => {
  return (
    <div className="grid grid-cols-1 items-center object-center justify-center text-center md:grid-cols-4 gap-y-10 px-32 py-24 bg-amazon_blue-light w-full">
      <div className="space-y-4 text-xs text-white">
        <h5 className="font-extrabold text-sm">Get to know us</h5>
        <p>Careers</p>
        <p>Blog</p>
        <p>About Amazon</p>
        <p>Amazon Devices</p>
        <p>Amazon Science</p>
      </div>
      <div className="space-y-4 text-xs text-white">
        <h5 className="font-extrabold text-sm">Make Money with Us</h5>
        <p>Sell Products on Amazon</p>
        <p>Sell on Amazon businesses</p>
        <p>Sell Apps on Amazon</p>
        <p>Become an Affliate</p>
        <p>Advertise your product</p>
      </div>
      <div className="space-y-4 text-xs text-white">
        <h5 className="font-extrabold text-sm">Amazon Payments</h5>
        <p>Amazon Business Card</p>
        <p>Shop with points</p>
        <p>Reload your balance</p>
        <p>Amazon currency converter</p>
        <p>Amazon currency converter</p>
      </div>
      <div className="space-y-4 text-xs text-white">
        <h5 className="font-extrabold text-sm">Let us Help You</h5>
        <p>Amazon and COVID-19</p>
        <p>Your Account</p>
        <p>Your orders</p>
        <p>Shoppin rates</p>
        <p>Returns</p>
      </div>
    </div>
  );
};

export default Footer;
