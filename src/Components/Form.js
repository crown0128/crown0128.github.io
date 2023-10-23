import React from "react";
import { NavContact } from "../Components/sidebar/Nav";
// import { ReactComponent as Wave } from "../Wave.svg";

const Form = () => {
  return (
    <div>
      {/* <Wave top='-500vh'/> */}
      <NavContact/>
      <iframe
        title="Contact"
        src="https://docs.google.com/forms/d/e/1FAIpQLScst5APT9pRyp0yFbbGxsOwuyrqdwGBSIjAv8-3Jdg7IrFmiw/viewform?embedded=true"
        width="640vw"
        height="900vh"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
      >
        Loading…
      </iframe>
    </div>
  );
};

export default Form;
