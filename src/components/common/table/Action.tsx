import { Link } from "react-router-dom";

interface User {
  firstName: string;
  lastName: string;
}

interface ActionProps {
  rowNumber: number;
  user: User;
}

const Action: React.FC<ActionProps> = ({ id }) => {
  const handleClick = (action: string) => {
    alert(`کاربر: ${id} | اکشن: ${action}`);
  };

  return (
    <div className="flex items-center justify-center gap-6 text-xl">
      <Link to={`edit/${id}`} className="!text-stone-800">
        <i className="fal fa-edit cursor-pointer" />
      </Link>
      <button onClick={() => handleClick("key")}>
        <i className="fal fa-key cursor-pointer" />
      </button>
      <button onClick={() => handleClick("shield")}>
        <i className="fal fa-shield-alt cursor-pointer" />
      </button>
      <button onClick={() => handleClick("trash")}>
        <i className="fal fa-trash cursor-pointer text-red-600" />
      </button>
    </div>
  );
};

export default Action;
