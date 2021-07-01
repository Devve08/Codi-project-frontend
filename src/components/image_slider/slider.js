import React from "react";
import Logo from "../../images/image.jpg";

function slider() {
  return (
    <>
      {/* Image slider section */}
      <div class="main__image-slider">
        <img src={Logo} alt="" class="main__image-slider--image" />
        <div class="image-slider__pagination">
          <input type="checkbox" />
          <input type="checkbox" />
          <input type="checkbox" />
          <input type="checkbox" />
        </div>
      </div>
    </>
  );
}

export default slider;
