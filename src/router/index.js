import React from "react";

import { createDrawerNavigator, createAppContainer } from "react-navigation";

//side bar
import SideBar from "../components/Sidebar";
//screens
import About from "../screens/About";
import Abc from "../screens/Abc";

const AppNavigator = createDrawerNavigator(
    {
        About: { screen: About },
        Abc: { screen: Abc }
    },
    {
        contentComponent: props => <SideBar {...props} />
    }
);

export default createAppContainer(AppNavigator);