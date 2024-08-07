import React from "react";
import Card from "./Components/1_Card";           import Song from "./Components/2_Song";
import Demo1 from "./Components/3_Demo";          import Demo2 from "./Components/4_Demo";
import Demo3 from "./Components/5_Demo";          import Demo4 from "./Components/6_Demo";
import Images from "./Components/7_Images";       import Props1 from "./Components/8_Props";

function App  () {
  return (
    <>                             {/*<></>  is called fragments and can be used instead of div to wrap the components into a single component for return*/}
        
        <Card></Card>
        <Song></Song>
        <Demo1></Demo1>
        <Demo2></Demo2>
        <Demo3></Demo3>
        <Demo4></Demo4>
        <Images></Images>
        <Props1 text='Play Online' color='bg-teal-600'></Props1>
        <Props1 text='Download' color='bg-cyan-700'></Props1>

    </>
  )
}

export default App