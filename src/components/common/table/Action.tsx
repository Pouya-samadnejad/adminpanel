import React from "react";

interface ActionProps {}

const Action: React.FC<ActionProps> = () => {
  return (
    <div className="flex items-center justify-center gap-6 text-xl">
      <i className="fal fa-edit cursor-pointer"></i>
      <i className="fal fa-key cursor-pointer"></i>
      <i className="fal fa-shield-alt cursor-pointer"></i>
      <i className="fal fa-trash cursor-pointer text-red-600"></i>
    </div>
  );
};

export default Action;
