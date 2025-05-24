import React from "react";
import { Form, Input, DatePicker, Radio, Switch, TimePicker } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import dayjs from "dayjs";
import Dragger from "antd/es/upload/Dragger";
import Guid from "../../../components/common/Guid";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { useMutation, useQuery } from "@tanstack/react-query";
import getUser from "../../../services/getUser";
import AddInput from "./AddInput";
import toast from "react-hot-toast";
import { postUsers, putUsers } from "../../../services/allusers";

const UserForm: React.FC = () => {
  const formData = new FormData();

  const { id } = useParams();
  const [form] = Form.useForm();

  const { data } = useQuery({
    queryKey: ["users", id],
    queryFn: () => getUser(id),
    select: (data) => data?.data,
  });

  const addUser = useMutation({
    mutationFn: postUsers,
    onSuccess: (data) => {
      toast.success(data.message || "کاربر با موفقیت افزوده شد");
      navigate(-1);
    },
    onError: (error) => {
      const err =
        error.response?.data?.message || error.message || "مشکلی پیش آمده";
      toast.error(err);
    },
  });

  const editUser = useMutation({
    mutationFn: putUsers,
    onSuccess: (data) => {
      toast.success(data.message || "کاربر با موفقیت ویرایش شد");
      navigate(-1);
    },
    onError: (error) => {
      const err =
        error.response?.data?.message || error.message || "مشکلی پیش آمده";

      toast.error(err);
    },
  });

  const onFinish = async (values) => {
    if (id && data) {
      values.id = id;
    }

    Object.entries(values).forEach(([key, val]) => {
      // اگر مقدار تاریخ هست و dayjs یا moment، تبدیل به string کن
      if (val?.format && typeof val.format === "function") {
        formData.append(key, val.format("YYYY-MM-DD"));
      } else if (val !== undefined && val !== null) {
        formData.append(key, val);
      }
    });
    if (id && data) {
      editUser.mutate(formData);
    } else addUser.mutate(formData);
  };

  const normFile = (e: any) => {
    console.log("Upload event:", e);
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
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
  console.log(data);

  if (data && id) {
    form.setFieldsValue(data);
  }

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
        initialValues={data}
      >
        <Form.Item
          name="nationalCode"
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
            disabled={!!id}
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
          name="mobile"
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
          name="status"
          label="وضعیت"
          rules={[{ required: true, message: "لطفا نوع کاربر را انتخاب کنید" }]}
        >
          <Radio.Group
            options={[
              { value: 1, label: "فعال" },
              { value: 0, label: "غیرفعال" },
            ]}
          />
        </Form.Item>
        <Form.Item
          name="twoFactorEnabled"
          label="ورود دو مرحله"
          rules={[{ required: true }]}
        >
          <Radio.Group
            options={[
              { value: true, label: "فعال" },
              { value: false, label: "غیرفعال" },
            ]}
          />
        </Form.Item>
        <Form.Item
          name="smsWebServiceAccess"
          label="دسترسی به وب سرویس
"
          rules={[{ required: true, message: "وضعیت دسترسی خود را مشخص کنید" }]}
        >
          <Radio.Group
            options={[
              { value: true, label: "دارد" },
              { value: false, label: "ندارد" },
            ]}
          />
        </Form.Item>
        <Form.Item
          name="type"
          label="نوع کاربر"
          rules={[{ required: true, message: "لطفا نوع کاربر را انتخاب کنید" }]}
        >
          <Radio.Group
            options={[
              { value: 0, label: "سازمانی" },
              { value: 1, label: "شهروند" },
              { value: 2, label: "LDAP" },
            ]}
          />
        </Form.Item>
        <Form.Item required name="UserName" label="نام کاربری">
          <Input type="email" className="w-full" size="large" />
        </Form.Item>
        <Form.Item name="estelam" label="استعلام ثبت احوال">
          <Input type="email" disabled className="w-full" size="large" />
        </Form.Item>
        <Form.Item name="shakar" label="استعلام شاهکار">
          <Input disabled type="email" className="w-full" size="large" />
        </Form.Item>
        {!id ? (
          <Form.Item
            name="password"
            label="رمز عبور"
            rules={[
              {
                required: true,
                message: "لطفاً رمز عبور را وارد کنید",
              },
              {
                pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}$/,
                message:
                  "رمز باید لاتین و شامل حروف کوچک، بزرگ، نماد و حداقل ۸ کاراکتر باشد",
              },
            ]}
            hasFeedback
          >
            <Input.Password
              placeholder="رمز عبور را وارد کنید"
              size="large"
              iconRender={(visible) =>
                visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
              }
            />
          </Form.Item>
        ) : (
          <div></div>
        )}
        <Form.Item name="allowedLoginIPs" label="تعیین نوع ساعات محدودیت ورود">
          <Switch
            size="default"
            checkedChildren="عدم مجاز به ورود در ساعات معین"
            unCheckedChildren="مجاز به ورود در ساعات معین"
            defaultChecked
          />
          <p className="mt-2 text-[12px]">
            IP های مجاز ورود (مثال:192.168.1.166)
          </p>
          <AddInput />
        </Form.Item>
        <Form.Item name="allowedLoginStartTime" label="ساعت غیر مجاز اغاز ورود">
          <TimePicker
            variant="filled"
            placeholder="لطفا زمان خود را انتخاب کنید"
            size="large"
            className="w-full"
          />
        </Form.Item>
        <Form.Item name="allowedLoginEndTime" label="ساعت غیر مجاز پایان ورود">
          <TimePicker
            variant="filled"
            placeholder="لطفا زمان خود را انتخاب کنید"
            size="large"
            className="w-full"
          />
        </Form.Item>
        <Guid />
        <div className="flex items-center gap-3 col-span-4 mb-10">
          <h2 className="font-bold">تصاویر</h2>
          <div className="bg-gray-200 h-[1px] grow"></div>
        </div>
        <Form.Item
          name="AvatarFile"
          valuePropName="fileList"
          getValueFromEvent={normFile}
          className="col-span-2"
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
        <Form.Item
          name="avatarFile"
          valuePropName="fileList"
          getValueFromEvent={normFile}
          className="col-span-2"
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
        <div className="flex items-center justify-end col-span-4 gap-2 fixed bottom-0 left-0 p-2 bg-white w-full shadow-2xl">
          <button
            className="bg-gray-200 text-gray-600 px-4 py-2 rounded-[12px] hover:bg-gray-300 transition-all duration-200 cursor-pointer"
            onClick={() => {
              navigate(-1);
            }}
          >
            انصراف
          </button>
          <button
            type="submit"
            className="bg-sky-600 text-white px-12 py-2  rounded-[12px] hover:bg-sky-700 transition-all duration-200 cursor-pointer"
          >
            ثبت و ذخیره
          </button>
        </div>
      </Form>
    </div>
  );
};

export default UserForm;
