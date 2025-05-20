import React, { useState } from "react";
import { Form, Input, DatePicker, Radio, Upload, Drawer, Button } from "antd";
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";
import Dragger from "antd/es/upload/Dragger";

const UserForm: React.FC = () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log("Form Submitted:", values);
  };

  const normFile = (e: any) => {
    console.log("Upload event:", e);
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const variant = Form.useWatch("variant", form);
  const navigate = useNavigate();
  const beforeUpload = (file: File) => {
    const maxSize = 320 * 1024; // 320KB
    if (file.size > maxSize) {
      message.error(
        `${file.name} بیش از 320 کیلوبایت است و نمی‌تواند آپلود شود.`
      );
      return false; // جلوگیری از آپلود فایل
    }
    return true;
  };
  const props: UploadProps = {
    name: "file",
    multiple: true,
    action: "https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload",
    onChange(info) {
      const { status } = info.file;
      if (status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (status === "done") {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log("Dropped files", e.dataTransfer.files);
    },
  };

  return (
    <div>
      <h2 className="mb-5">اطلاعات عمومی</h2>

      <Form
        form={form}
        onFinish={onFinish}
        layout="vertical"
        className="grid grid-cols-4 gap-x-2.5 my-2"
        variant={variant || "filled"}
        noValidate
      >
        <Form.Item
          name="nationalIdCode"
          label="کد ملی"
          rules={[
            { required: true, message: "لطفا کد ملی را وارد کنید" },
            { len: 10, message: "کد ملی باید دقیقا 10 رقم باشد" },
            {
              pattern: /^\d+$/,
              message: "فقط اعداد مجاز هستند",
            },
          ]}
        >
          <Input
            minLength={10}
            maxLength={10}
            inputMode="numeric"
            pattern="[0-9]*"
            showCount
            onBeforeInput={(e) => {
              if (!/^\d*$/.test(e.data)) {
                e.preventDefault();
              }
            }}
            size="large"
          />
        </Form.Item>
        <Form.Item
          name="firstName"
          label="نام"
          rules={[{ required: true, message: "لطفا نام خود را وارد کنید" }]}
        >
          <Input allowClear size="large" />
        </Form.Item>

        <Form.Item
          name="lastName"
          label="نام خانوادگی"
          rules={[
            { required: true, message: "لطفا نام خانوادگی را وارد کنید" },
          ]}
        >
          <Input allowClear size="large" />
        </Form.Item>
        <Form.Item
          name="fatherName"
          label="نام پدر"
          rules={[{ required: true, message: "لطفا نام پدر را وارد کنید" }]}
        >
          <Input allowClear size="large" />
        </Form.Item>

        <Form.Item
          name="phone"
          label="شماره تلفن"
          rules={[
            { required: true, message: "لطفا شماره تلفن خود را وارد کنید" },
            {
              pattern: /^[0-9]{11}$/,
              message: "شماره تلفن باید شامل 11 رقم باشد",
            },
            {
              pattern: /^(0|0098|\+98)?9(0[1-5]|[1 3]\d|2[0-2]|98)\d{7}$/,
              message: "شماره تلفن وارد شده معتبر نیست",
            },
          ]}
        >
          <Input
            maxLength={11}
            inputMode="numeric"
            pattern="[0-9]*"
            size="large"
            onBeforeInput={(e) => {
              if (!/^\d*$/.test(e.data)) {
                e.preventDefault();
              }
            }}
            placeholder="مثال: 09123456789"
          />
        </Form.Item>

        <Form.Item
          name="birthDate"
          label="تاریخ تولد"
          rules={[{ required: true, message: "لطفا تاریخ تولد را وارد کنید" }]}
          getValueFromEvent={(e: any) => e?.toISOString()}
          getValueProps={(value: any) => ({
            value: value ? dayjs(value) : undefined,
          })}
        >
          <DatePicker
            className="w-full"
            size="large"
            format="YYYY-MM-DD"
            placeholder="تاریخ تولد خود را وارد کنید"
          />
        </Form.Item>

        <Form.Item
          name="email"
          label="ایمیل"
          rules={[
            { required: true, message: "لطفا ایمیل خود را وارد کنید" },
            { type: "email", message: "ایمیل وارد شده معتبر نیست" },
          ]}
        >
          <Input type="email" className="w-full" size="large" />
        </Form.Item>
        <Form.Item
          name="gender"
          label="جنسیت"
          rules={[{ required: true, message: "لطفا جنسیت را انتخاب کنید" }]}
        >
          <Radio.Group
            options={[
              { value: 0, label: "مرد" },
              { value: 1, label: "زن" },
            ]}
          />
        </Form.Item>

        <div className="flex items-center gap-3 col-span-4 mb-10">
          <h2 className="font-bold">اطلاعات سامانه</h2>
          <div className="bg-gray-200 h-[1px] grow"></div>
        </div>

        <Form.Item
          name="type"
          label="نوع کاربر"
          rules={[{ required: true, message: "لطفا نوع کاربر را انتخاب کنید" }]}
          className="col-span-4"
        >
          <Radio.Group
            options={[
              { value: 0, label: "شهروند" },
              { value: 1, label: "سازمانی" },
              { value: 2, label: "LDAP" },
            ]}
          />
        </Form.Item>
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
                <li>
                  سمت‌ها در بخش مدیریت درختواره قابل تعریف و ویرایش هستند.
                </li>
                <li>
                  با تعیین سمت کاربر، می‌توانید موقعیت او را در گراف و درخت
                  سازمانی مشاهده کنید.
                </li>
                <li>
                  با ثبت سمت، امکان دسترسی به سامانه بر اساس نقش کاربر فراهم
                  می‌شود.
                </li>
                <li>
                  در قسمت مدیریت سمت‌ها، می‌توانید کاربر مورد نظر را به سمت
                  دلخواه متصل کنید.
                </li>
              </ul>
            </section>
          </Drawer>
        </div>
        <div className="flex items-center gap-3 col-span-4 mb-10">
          <h2 className="font-bold">تصاویر</h2>
          <div className="bg-gray-200 h-[1px] grow"></div>
        </div>

        <Form.Item
          name="dragger"
          valuePropName="fileList"
          getValueFromEvent={normFile}
          className="col-span-4"
          rules={[{ required: false, message: "لطفا یک فایل آپلود کنید" }]}
        >
          <Dragger
            {...props}
            beforeUpload={beforeUpload}
            name="files"
            showUploadList={true}
            accept=".png,.jpg"
            maxCount={3}
            className="w-full "
            style={{ width: "100%" }}
          >
            <p className="ant-upload-drag-icon">
              <i className="fal fa-cloud-upload-alt text-6xl text-gray-500"></i>
            </p>
            <p className="ant-upload-text">
              به منظور بارگذاری کلیک و یا فایل خود را در محدوده رها کنید
            </p>
            <p className="ant-upload-hint">پسوند‌های مجاز .png,.jpg</p>
            <p className="ant-upload-hint">حداکثر حجم فایل 320 KB</p>
          </Dragger>
        </Form.Item>
        <div className="flex items-center justify-end col-span-4 gap-2 fixed bottom-0 left-0 p-4 bg-white w-full shadow-2xl">
          <button
            className="bg-gray-200 text-gray-600 px-4 py-3 rounded-[12px] hover:bg-gray-300 transition-all duration-200 cursor-pointer"
            onClick={() => {
              navigate(-1);
            }}
          >
            انصراف
          </button>
          <button
            type="submit"
            className="bg-sky-600 text-white px-12 py-3  rounded-[12px] hover:bg-sky-700 transition-all duration-200 cursor-pointer"
          >
            ثبت و ذخیره
          </button>
        </div>
      </Form>
    </div>
  );
};

export default UserForm;
