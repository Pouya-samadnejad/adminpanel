import { Avatar, Space } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { useCurrentUser } from "../../../store/context/useCurrentUser";
import Loading from "../Loading";

const UserSection: React.FC = () => {
  const { currentUser, loading } = useCurrentUser();

  if (loading) return <Loading />;

  return (
    <div className="px-4">
      <Space
        direction="vertical"
        size={16}
        align="center"
        className="w-full py-4 border-b-1 border-gray-400"
      >
        <Avatar
          size={64}
          icon={<UserOutlined />}
          src={`data:image/png;base64,${currentUser?.avatarBase64}`}
        />
        <div className="flex items-center justify-between">
          <p>{currentUser?.firstName}</p>
          <p>{currentUser?.lastName}</p>
        </div>
        <div className="flex gap-4 justify-between items-center mt-1.5">
          <button>
            <i className="fal fa-expand cursor-pointer text-xl" />
          </button>
          <button>
            <i className="fal fa-home-lg-alt text-xl cursor-pointer"></i>{" "}
          </button>
          <button>
            <i className="fal fa-sign-out-alt cursor-pointer text-xl text-red-600"></i>
          </button>
        </div>
      </Space>
    </div>
  );
};

export default UserSection;
