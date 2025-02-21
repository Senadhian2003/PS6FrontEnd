import React from "react";
import FooterLogo from "../../assets/images/FooterLogo.svg";
import FooterList from "./FooterList";
import { footerItems } from "../../data/footerData";
import Geography from "../../assets/images/Geography.svg";

function Footer() {
  return (
    <div className="p-12 my-4">
      <div className="flex pb-4 border-b">
        <img src={FooterLogo} alt="Footer Logo" />
        <p className="title">PLAYSTATION</p>
      </div>

      <div className="flex flex-wrap justify-between gap-6 pb-12 border-b">
        {/* <FooterList footerList={data[0]} />
<FooterList footerList={data[1]} /> */}

        {footerItems.map((footerList, index) => {
          return (
            <FooterList
              key={index}
              footerList={footerList}
              displaySocialMedia={index == footerItems.length - 1}
            />
          );
        })}
      </div>

      <div className="pb-12 border-b my-6">
        <h1 className="heading">SONY interactive entertainment</h1>

        <p className="text-sm font-normal">
          © 2025 Sony Interactive Entertainment Europe Limited (SIEE) <br />
          All content, games titles, trade names and/or trade dress, trademarks,
          artwork and associated imagery are trademarks copyright material of
          their respective owners. All rights reserved.
        </p>
      </div>

      <div className="flex flex-wrap  justify-between items-center">
        <div className="flex space-x-2 items-center">
          <img src={Geography} alt="Geography image" />
          <p className="text-sm font-normal">India</p>
        </div>

        <div className="flex space-x-2">
        <p className="text-sm font-normal">
               Legal | Privacy policy | Website terms of use | Site Map | Cookies Policy | Software Usage Terms
              </p>
          {/* {footerPolicies.map((item, index) => {
            return (
              <p className="text-sm font-normal">
               Legal | Privacy policy | Website terms of use | Site Map | Cookies Policy | Software Usage Terms
              </p>
            );
          })} */}
        </div>
      </div>
    </div>
  );
}

export default Footer;
