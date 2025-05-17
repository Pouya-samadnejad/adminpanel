import React from "react";
import { Modal } from "antd";

const FilterSection: React.FC = () => {
  const [open, setOpen] = React.useState<boolean>(false);
  const [loading, setLoading] = React.useState<boolean>(true);

  const showLoading = () => {
    setOpen(true);
    setLoading(true);

    // Simple loading mock. You should add cleanup logic in real world.
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <>
      <button
        onClick={showLoading}
        className="rounded-xl bg-gray-200 py-2.5 px-5 flex items-center justify-center  hover:bg-gray-300 transition-all duration-300 cursor-pointer"
      >
        <i className="fal fa-filter text-gray-500 text-xl"></i>
      </button>

      <Modal
        title={<p>Loading Modal</p>}
        footer={
          <button
            onClick={showLoading}
            className="rounded-xl bg-blue-400 py-2.5 px-5 flex items-center justify-center  hover:bg-blue-500 transition-all duration-300 cursor-pointer"
          >
            Reload
          </button>
        }
        loading={loading}
        open={open}
        onCancel={() => setOpen(false)}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
};

export default FilterSection;
