import { Breadcrumb } from "antd";
import { Link, useMatches } from "react-router-dom";

const RouteBasedBreadcrumb = () => {
  const matches = useMatches();

  const items = matches
    .filter((m) => m.handle?.breadcrumb)
    .map((match, index, arr) => {
      const { handle, params, pathname } = match;

      const isLast = index === arr.length - 1;

      let label =
        typeof handle.breadcrumb === "function"
          ? handle.breadcrumb({ params, match })
          : handle.breadcrumb;

      return {
        title: isLast ? (
          <span>{label}</span>
        ) : (
          <Link to={pathname}>{label}</Link>
        ),
      };
    });

  return <Breadcrumb items={items} style={{ margin: "16px 0" }} />;
};

export default RouteBasedBreadcrumb;
