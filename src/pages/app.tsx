import * as React from "react";
import "./app.less";
import Image from "@/assets/images/首页logo.png";
const App: React.FC = () => {
  return (
    <>
      <div className="test font-bold">卧槽 测试</div>
      <img src={Image} alt="" />
    </>
  );
};

export default App;
