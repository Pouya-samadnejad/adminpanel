import { Avatar, Space } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { useCurrentUser } from "../../store/context/useCurrentUser";
import Loading from "../../components/common/Loading";

const UserSection: React.FC = () => {
  const { currentUser, loading } = useCurrentUser();

  if (loading) return <Loading />;

  return (
    <Space
      direction="vertical"
      size={16}
      align="center"
      className="w-full mx-auto py-4"
    >
      <Avatar
        size={64}
        icon={<UserOutlined />}
        src={`data:image/png;base64,${currentUser?.avatarBase64}`}
      />
      <div className="flex items-center justify-between">
        <p>{currentUser?.firstName}</p>
        <p>{currentUser?.lastName}</p>
        <i className="fal fa-heart"></i>
      </div>
    </Space>
  );
};

export default UserSection;
