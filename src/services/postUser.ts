import api from "../utils/api";

const postUser = async (value) => {
  // ایجاد یک شیء FormData
  const formData = new FormData();

  formData.append("FirstName", value.firstName);
  formData.append("LastName", value.lastName);
  formData.append("FatherName", value.fatherName);
  formData.append("Gender", value.gender);
  formData.append("Email", value.email);
  formData.append("Mobile", value.mobile);
  formData.append("NationalCode", value.nationalCode);
  formData.append("BirthDate", value.birthDate);
  formData.append("password", value.password);
  formData.append("UserName", value.userName);

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
export default postUser;
