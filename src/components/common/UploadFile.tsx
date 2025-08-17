import React from "react";
import { Upload } from "antd";
import type { UploadFile } from "antd";

const UploadFile: React.FC = () => (
  <Upload
    showUploadList
    action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
    listType="picture"
  ></Upload>
);

export default UploadFile;
