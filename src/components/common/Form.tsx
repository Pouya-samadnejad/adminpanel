import React from "react";
import { Button, Form, Input, DatePicker, Radio, Upload } from "antd";
import { useNavigate } from "react-router-dom";

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

  const variant = Form.useWatch("variant", form);
  const navigate = useNavigate;

  return (
    <div>
      <h2 className="mb-5">اطلاعات عمومی</h2>

      <Form
        form={form}
        onFinish={onFinish}
        layout="vertical"
        className="grid grid-cols-4 gap-x-2.5 my-2"
        variant={variant || "filled"}
      >
        <Form.Item
          name="nationalIdCode"
          label="کد ملی"
          rules={[
            { required: true, message: "لطفا کد ملی را وارد کنید" },
            {
              message: "کد ملی باید دقیقا 10 رقم عددی باشد",
              pattern: /^\d{10}$/,
            },
          ]}
        >
          <Input maxLength={10} showCount />
        </Form.Item>
        <Form.Item
          name="firstName"
          label="نام"
          rules={[{ required: true, message: "لطفا نام خود را وارد کنید" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="lastName"
          label="نام خانوادگی"
          rules={[
            { required: true, message: "لطفا نام خانوادگی را وارد کنید" },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="fatherName"
          label="نام پدر"
          rules={[{ required: true, message: "لطفا نام پدر را وارد کنید" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="mobile"
          label="موبایل"
          rules={[{ required: true, message: "لطفا موبایل خود را وارد کنید" }]}
        >
          <Input maxLength={11} type="tel" />
        </Form.Item>

        <Form.Item
          name="birthDate"
          label="تاریخ تولد"
          rules={[{ required: true, message: "لطفا تاریخ تولد را وارد کنید" }]}
        >
          <DatePicker className="w-full" />
        </Form.Item>

        <Form.Item
          name="email"
          label="ایمیل"
          rules={[{ required: true, message: "لطفا ایمیل خود را وارد کنید" }]}
        >
          <Input type="email" className="w-full" />
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
        >
          <Radio.Group
            options={[
              { value: 0, label: "شهروند" },
              { value: 1, label: "سازمانی" },
              { value: 2, label: "LDAP" },
            ]}
          />
        </Form.Item>
        <div className="flex items-center gap-3 col-span-4 mb-10">
          <h2 className="font-bold">تصاویر</h2>
          <div className="bg-gray-200 h-[1px] grow"></div>
        </div>

        <Form.Item
          name="dragger"
          valuePropName="fileList"
          getValueFromEvent={normFile}
          className="col-span-4"
          rules={[{ required: true, message: "لطفا یک فایل آپلود کنید" }]}
        >
          <Upload.Dragger
            name="files"
            action="/upload.do"
            accept=".png,.jpg"
            maxCount={1}
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
          </Upload.Dragger>
        </Form.Item>
        <div className="flex items-center justify-end col-span-4 gap-2">
          <button
            className="bg-gray-200 text-gray-600 px-4 py-3 text-xl rounded-xl hover:bg-gray-300 transition-all duration-200"
            onClick={() => {
              navigate(-1);
            }}
          >
            انصراف
          </button>
          <button>ثبت و ذخیره</button>
        </div>
      </Form>
    </div>
  );
};

export default UserForm;
