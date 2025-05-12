import React from "react";
import { Spin } from "antd";

const App: React.FC = () => (
  <div className="h-screen w-full flex items-center justify-between">
    <div className="mx-auto">
      <Spin />
    </div>
  </div>
);

export default App;
