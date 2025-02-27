

import React from "react";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import Name from "./components/Name";

export default function Home() {
 return(
   <>
   <Navbar/>
   <Card name='Areeba' roll={222} day="monday" />
   <Card name='ccc' roll={223} day="abc" />
   <Card name='Aaa' roll={224} day="acy" />
   <Name/>
   </>
 )
}
