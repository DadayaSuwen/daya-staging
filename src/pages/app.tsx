import * as React from "react";
import "./app.less";
import Image from "@/assets/images/服务.png";

const App: React.FC = () => {
  return (
    <>
      <div className="test font-bold text-[100px]">哒哒ya</div>
      <img src={Image} alt="" />
    </>
  );
};

export default App;
