
import React from "react";
import Technology from "../Routes/Technology_page";
import All from "../Routes/All";
import IT from "../Routes/IT";
import Technology_page from "../Routes/Technology_page";
import Manuandproduction from "../Routes/Manuandprodu";
import BSFI from "../Routes/BFSI";
import style from './Sponcered.module.css'
import {Text,TabPanel,Tab,Tabs,TabList,TabPanels } from "@chakra-ui/react";
const Sponsoredcompanies = () => {
  return (
    <div style={{margin:"auto",width:"80%",}}>
      <Text fontSize="30px" color="black">
        Sponsored companies
      </Text>
      
      <Tabs>
  <TabList className={style.TabList}   >
    <Tab  className={style.hovering_data} >All</Tab>
    <Tab className={style.hovering_data}>IT Services</Tab>
    <Tab className={style.hovering_data}>Technology</Tab>
    <Tab className={style.hovering_data}>Manufacturing & Production</Tab>
    <Tab className={style.hovering_data}>BFSI</Tab>
    <Tab className={style.hovering_data}>Healthcare & Life Sciences</Tab>
    <Tab className={style.hovering_data}>+3 more</Tab>
  </TabList>

  <TabPanels>
    <TabPanel>
     <All/>
    </TabPanel>
    <TabPanel>
      <IT/>
    </TabPanel>
    <TabPanel>
      <Technology_page/>
    </TabPanel>
    <TabPanel>
      <Manuandproduction/>
    </TabPanel>
    <TabPanel>
      <BSFI/>
    </TabPanel>
    <TabPanel>
      <BSFI/>
    </TabPanel>
  </TabPanels>
</Tabs>
     
    </div>
  );
};

export default Sponsoredcompanies;
