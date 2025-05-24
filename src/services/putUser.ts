import api from "../utils/api";

const putUser = async (values) => {
  const formData = new FormData();

  Object.entries(values).forEach(([key, val]) => {
    if (val?.format && typeof val.format === "function") {
      // تبدیل dayjs به رشته تاریخ
      formData.append(key, val.format("YYYY-MM-DD"));
    } else if (val !== undefined && val !== null) {
      formData.append(key, val);
    }
  });

  try {
    const response = await api.put("/v1/User", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    console.log("پاسخ سرور:", response.data);
  } catch (error) {
    console.error("خطا در ارسال داده‌ها:", error);
  }
};

export default putUser;
