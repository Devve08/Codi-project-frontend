import React from "react";

export default function ShopHeader(props) {
  return (
    <div>
      <header className="shopmen_header">
        Home  <i class="fal fa-long-arrow-right"></i>  <span> {props.title} </span>
      </header>
    </div>
  );
}
