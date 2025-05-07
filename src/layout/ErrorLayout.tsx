import { Button, Result } from "antd";

function ErrorLayout() {
  return (
    <div className="h-screen w-full flex items-center justify-between">
      <div className="mx-auto ">
        <Result
          status="404"
          title="404"
          subTitle="صفحه وجود ندارد"
          extra={<Button type="primary">بازگشت</Button>}
        />
      </div>
    </div>
  );
}

export default ErrorLayout;
