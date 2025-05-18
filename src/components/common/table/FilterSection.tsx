import React, { useState } from "react";
import { Modal, Select } from "antd";
import { useQuery } from "@tanstack/react-query";
import getApplication from "../../../services/getapplication";

const { Option } = Select;

const App = () => {
  const [open, setOpen] = useState(false);

  const showModal = () => setOpen(true);
  const hideModal = () => setOpen(false);

  const { data } = useQuery({
    queryKey: ["applications"],
    queryFn: () => getApplication(),
  });

  const applications = data?.data.items || [];

  console.log(applications);

  return (
    <>
      <button
        onClick={showModal}
        className="bg-gray-100 flex items-center justify-center p-2.5 rounded-xl text-gray-600 hover:bg-gray-200 transition-all duration-200"
      >
        <i className="fal fa-filter text-xl"></i>
      </button>

      <Modal
        title="فیلتر کاربران"
        open={open}
        onOk={hideModal}
        onCancel={hideModal}
        okText="اعمال فیلتر"
        cancelText="بستن"
      >
        <div className="mt-6 space-y-4">
          <div>
            <p>سامانه</p>
            <Select
              placeholder="نوع سامانه"
              style={{ width: "100%" }}
              showSearch
              optionFilterProp="children"
            >
              {applications.map((app) => (
                <Option key={app.id} value={app.id}>
                  {app.name}
                </Option>
              ))}
            </Select>
          </div>
          <div>
            <p>نوع کاربر</p>
            <Select placeholder="نوع کاربر">
              {
                <Option key={App.id} vlaue={App.id}>
                  {App.name}
                </Option>
              }
            </Select>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default App;
