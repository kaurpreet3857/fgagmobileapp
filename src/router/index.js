import React from "react";

import { createDrawerNavigator, createAppContainer } from "react-navigation";

//side bar
import SideBar from "../components/Sidebar";
//screens
import PrayerRequest from "../screens/PrayerRequest";
import Videos from "../screens/Videos";
import Pictures from "../screens/Pictures";
import ContactUs from "../screens/ContactUs";
import About from "../screens/About";
import Directory from "../screens/Directory";

const AppNavigator = createDrawerNavigator(
    {
        "Prayer Request": { screen: PrayerRequest },
        "Videos": { screen: Videos },
        "Pictures": { screen: Pictures },
        "Contact Us": { screen: ContactUs },
        "About Us": { screen: About },
        "Directory": { screen: Directory },
    },
    {
        contentComponent: props => <SideBar {...props} />
    }
);

export default createAppContainer(AppNavigator);