import { Button, Drawer } from "antd";
import React, { useState } from "react";

interface GuidProps {}

const Guid: React.FC<GuidProps> = (props) => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  return (
    <div className="col-span-4">
      <div className="my-8 flex gap-1.5 items-center">
        <h3>سمت‌ها</h3>
        <button
          className="bg-teal-600 text-white px-1 rounded-md"
          onClick={showDrawer}
          type="button"
        >
          راهنما
        </button>
        <Drawer
          width="30%"
          title="راهنما"
          closable={{ "aria-label": "Close Button" }}
          closable={false}
          open={open}
          placement="left"
          extra={
            <Button
              type="text"
              onClick={onClose}
              icon={<i className="fal fa-x"></i>} // آیکون دکمه بسته شدن
              style={{
                marginLeft: "auto",
                display: "flex",
                alignItems: "center",
              }}
            />
          }
        >
          <section className="p-4">
            <li className="mt-2 mb-5 w-full flex flex-col justify-center items-center text-teal-700">
              <span className="relative inline-block w-fit">
                <i className="fal fa-layer-group text-6xl"></i>
                <i className="fal fa-user-vneck text-3xl absolute -bottom-1 -right-1 bg-white rounded-full p-0.5"></i>
              </span>

              <strong className="text-info">سمــت کـــــاربر</strong>
            </li>
            <h2 className="text-xl font-bold mb-4">سمت در چارت سازمانی</h2>
            <ul className="list-disc pr-6 space-y-2 text-right">
              <li>
                منظور از سمت، موقعیت کاربر در چارت سازمانی است، مانند مدیرکل،
                مدیرعامل، کارشناس، معاون مالی و ...
              </li>
              <li>سمت‌ها در بخش مدیریت درختواره قابل تعریف و ویرایش هستند.</li>
              <li>
                با تعیین سمت کاربر، می‌توانید موقعیت او را در گراف و درخت
                سازمانی مشاهده کنید.
              </li>
              <li>
                با ثبت سمت، امکان دسترسی به سامانه بر اساس نقش کاربر فراهم
                می‌شود.
              </li>
              <li>
                در قسمت مدیریت سمت‌ها، می‌توانید کاربر مورد نظر را به سمت دلخواه
                متصل کنید.
              </li>
            </ul>
          </section>
        </Drawer>
      </div>{" "}
    </div>
  );
};

export default Guid;
