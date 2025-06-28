import React from "react";

const BannerImage = ({ src, alt, height = "auto", padding = "py-8" }) => {
  return (
    <div className={`w-full flex justify-center items-center bg-white ${padding}`}>
      <img
        src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/seo/App_download_banner.png"}
        alt={"alt image"}
        className={`object-contain h-${height} max-w-full`}
        style={{ paddingTop: "2rem", paddingBottom: "2rem" }} // Equal vertical padding
      />
    </div>
  );
};

export default BannerImage;