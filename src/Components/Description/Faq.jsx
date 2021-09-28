import React from "react";

const Faq = (props) => {
  return (
    <div>
      {props.title && <h3 className="About-dogs">{props.title}</h3>}
      <p className="detail">{props.children}</p>
    </div>
  );
};

export default Faq;
