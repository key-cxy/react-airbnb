import React, { memo } from "react";

import { Form, Input, Select } from "antd";
import { PhoneWrapper } from "./style";
import IconWx from "@/assets/svg/icon-wx";
import IconEmail from "@/assets/svg/icon-email";
const { Option } = Select;
const PhoneLogin = memo(() => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  return (
    <PhoneWrapper>
      <Form name="complex-form" onFinish={onFinish}>
        <Form.Item>
          <Input.Group compact>
            <Form.Item style={{ width: "20%" }}>
              <Select defaultValue="+86">
                <Option value="+86">+86</Option>
                <Option value="+87">+87</Option>
              </Select>
            </Form.Item>
            <Form.Item
              style={{ width: "76%" }}
              rules={[
                {
                  required: true,
                  message: "Street is required",
                },
              ]}
            >
              <Input
                addonAfter={<div style={{ cursor: "pointer" }}>发送验证码</div>}
                style={{
                  marginLeft: "20px",
                }}
                placeholder="手机号"
              />
            </Form.Item>
          </Input.Group>
        </Form.Item>
        <Form.Item>
          <Form.Item
            style={{ width: "100%" }}
            rules={[
              {
                required: true,
                message: "Street is required",
              },
            ]}
          >
            <Input placeholder="验证码" />
          </Form.Item>
        </Form.Item>
        <Form.Item>
          <div className="submit">登录</div>
          <div className="divide">
            <span>或</span>
          </div>
          <div className="wx-login">
            <span>
              <IconWx />
            </span>
            <span>微信账号扫码登录</span>
          </div>
          <div className="other">
            <span>使用其他方式</span>
          </div>
          <div className="email">
            <span>
              <IconEmail />
            </span>
            <span>账号密码登录</span>
          </div>
        </Form.Item>
      </Form>
    </PhoneWrapper>
  );
});

export default PhoneLogin;
