import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Result } from "antd";
const NotFound = () => {
  const navigate = useNavigate();

  const backHomeHandle = () => {
    navigate("/home");
  };

  return (
    <Result
      status="403"
      title="403"
      subTitle="Sorry, you are not authorized to access this page."
      extra={
        <Button type="primary" onClick={backHomeHandle}>
          Back Home
        </Button>
      }
    />
  );
};
export default NotFound;
