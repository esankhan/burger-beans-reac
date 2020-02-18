import React, { useState } from "react";
import Auxilliary from "../../Hoc/Auxilliary";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

import "./Layout.css";

const layout = props => {
  const [SideDrawerState, setSideDrawerstate] = useState({
    showSideDrawer: false
  });

  const SideDrawerClosedHandler = () => {
    setSideDrawerstate({
      showSideDrawer: false
    });
  };

  const SideDrawerToggleHandler = () => {
    setSideDrawerstate({
      showSideDrawer: !SideDrawerState.showSideDrawer
    });
  };

  return (
    <Auxilliary>
      <Toolbar drawerToggledClicked={SideDrawerToggleHandler} />
      <SideDrawer
        closed={SideDrawerClosedHandler}
        open={SideDrawerState.showSideDrawer}
      />
      <main className='content'>{props.children}</main>
    </Auxilliary>
  );
};

export default layout;
