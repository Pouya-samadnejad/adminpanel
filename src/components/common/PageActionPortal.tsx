import ReactDOM from "react-dom";

const PageActionPortal = ({ children }) => {
  const el = document.getElementById("buttonHolder");
  return el ? ReactDOM.createPortal(children, el) : null;
};

export default PageActionPortal;
