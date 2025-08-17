import api from "../utils/api";


  Object.entries(values).forEach(([key, val]) => {
    // اگر مقدار تاریخ هست و dayjs یا moment، تبدیل به string کن
    if (val?.format && typeof val.format === "function") {
      formData.append(key, val.format("YYYY-MM-DD"));
    } else if (val !== undefined && val !== null) {
      formData.append(key, val);
    }
  });

  try {
    const response = await api.post("/v1/User", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    console.log("پاسخ سرور:", response.data);
  } catch (error) {
    console.error("خطا در ارسال داده‌ها:", error);
  }
};

