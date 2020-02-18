import React from "react";
import Logo from "../../Logo/Logo";
import NavigationItems from "../../Navigation/NavigationItems/NavigationItems";
import "./SideDrawer.css";
import Backdrop from "../../UI/Backdrop/Backdrop";
import Auxilliary from "../../../Hoc/Auxilliary";

const sidedrawer = props => {
  let attachedClass = ["SideDrawer", "Close"];
  if (props.open) {
    attachedClass = ["SideDrawer", "Open"];
  }
  return (
    <Auxilliary>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={attachedClass.join(" ")}>
        <div style={{ height: "11%" }}>
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Auxilliary>
  );
};

export default sidedrawer;
