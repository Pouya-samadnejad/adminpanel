import React, { useState } from "react";
import { Input, Button, Space, Tag } from "antd";
import { CloseOutlined } from "@ant-design/icons";

const AddInput = () => {
  const [ipList, setIpList] = useState([]);
  const [inputVisible, setInputVisible] = useState(false);
  const [ipInput, setIpInput] = useState("");

  const addIp = () => {
    const ip = ipInput.trim();
    if (ip && !ipList.includes(ip)) {
      setIpList([...ipList, ip]);
    }
    setIpInput("");
    setInputVisible(false);
  };

  const removeIp = (ipToRemove) => {
    setIpList(ipList.filter((ip) => ip !== ipToRemove));
  };

  return (
    <div style={{ width: "100%", maxWidth: 400 }}>
      <Space direction="vertical" style={{ width: "100%" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          {ipList.map((ip) => (
            <Tag
              key={ip}
              closable
              onClose={() => removeIp(ip)}
              closeIcon={<CloseOutlined />}
            >
              {ip}
            </Tag>
          ))}

          {inputVisible ? (
            <Input
              size="large"
              style={{ width: 120 }}
              value={ipInput}
              onChange={(e) => setIpInput(e.target.value)}
              onBlur={() => setInputVisible(false)}
              onPressEnter={addIp}
              autoFocus
              placeholder="IP جدید"
            />
          ) : (
            <Button
              style={{
                padding: "15px",
                borderRadius: "10px",
                width: "12px",
                height: "12px",
              }}
              type="dashed"
              size="small"
              onClick={() => setInputVisible(true)}
              className="flex items-center justify-center"
            >
              <i className="fal fa-add"></i>
            </Button>
          )}
        </div>
      </Space>
    </div>
  );
};

export default AddInput;
