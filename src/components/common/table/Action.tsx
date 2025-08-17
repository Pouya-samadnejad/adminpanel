import { useMutation } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { deleteUser } from "../../../services/allusers";
import toast from "react-hot-toast";
import { Popconfirm, type PopconfirmProps } from "antd";

interface User {
  firstName: string;
  lastName: string;
}

interface ActionProps {
  rowNumber: number;
  user: User;
}

const Action: React.FC<ActionProps> = ({ user }) => {
  const handleClick = (action: string) => {
    alert(`کاربر: ${user.firstName} | اکشن: ${action}`);
    console.log(user);
  };

  const deletefunction = useMutation({
    mutationFn: deleteUser,
    onSuccess: (data) => {
      toast.success(data.message || "کاربر با موفقیت حذف شد");
      window.location.reload();
    },
    onError: (error) => {
      const err =
        error.response?.data?.message || error.message || "مشکلی پیش آمده";
      toast.error(err);
    },
  });
  const confirm: PopconfirmProps["onConfirm"] = (e) => {
    deletefunction.mutate(user.id);
    message.success("Click on Yes");
  };

  const cancel: PopconfirmProps["onCancel"] = (e) => {
    console.log(e);
    message.error("Click on No");
  };
  return (
    <div className="flex items-center justify-center gap-6 text-xl">
      <Link to={`edit/${user.id}`} className="!text-stone-800">
        <i className="fal fa-edit cursor-pointer" />
      </Link>
      <button onClick={() => handleClick("key")}>
        <i className="fal fa-key cursor-pointer" />
      </button>
      <button onClick={() => handleClick("shield")}>
        <i className="fal fa-shield-alt cursor-pointer" />
      </button>

      <Popconfirm
        title="حذف کاربر"
        description={
          <>
            کاربر <strong>{user.firstName}</strong>{" "}
            <strong>{user.lastName}</strong> حذف شود؟
          </>
        }
        onConfirm={confirm}
        onCancel={cancel}
        okText="بله"
        cancelText="نه"
      >
        <button>
          <i className="fal fa-trash cursor-pointer text-red-600" />
        </button>
      </Popconfirm>
    </div>
  );
};

export default Action;
