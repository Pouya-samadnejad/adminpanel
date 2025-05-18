import React from "react";

interface ActionProps {
  ActionBar: React.ReactNode[];
}

const Action: React.FC<ActionProps> = () => {
  return (
    <div className="flex items-center justify-center gap-6 text-xl">
      <i className="fal fa-edit cursor-pointer" key="edit" />
      <i className="fal fa-key cursor-pointer" key="key" />
      <i className="fal fa-shield-alt cursor-pointer" key="shield" />
      <i className="fal fa-trash cursor-pointer text-red-600" key="trash" />
    </div>
  );
};

export default Action;
