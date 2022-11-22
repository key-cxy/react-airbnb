import React, { forwardRef, memo, useImperativeHandle, useState } from "react";

import { Modal, Checkbox } from "antd";
import { LoginWrapper } from "./style";
import CloseBtn from "@/assets/svg/close_btn";
import PhoneLogin from "./cpns/phone-login";

const LoginContext = memo(
  forwardRef((props, ref) => {
    useImperativeHandle(ref, () => ({
      showModal: showModal,
    }));

    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
      setIsModalOpen(true);
    };

    const [isCheck, setIsCheck] = useState(false);

    const checkChangeHandle = () => {
      setIsCheck(!isCheck);
    };

    return (
      <LoginWrapper>
        <Modal
          wrapClassName="login-box"
          open={isModalOpen}
          getContainer={false}
          width={568}
          closeIcon={<CloseBtn />}
          onCancel={() => setIsModalOpen(false)}
          footer={[]}
        >
          <div className="title">登录爱彼迎</div>
          <p className="description">
            未注册的手机号或微信号验证后将自动创建新账号
          </p>
          <div className="content">
            <PhoneLogin />
          </div>
          <div
            style={{
              marginTop: "200px",
              marginLeft: "10px",
              position: "relative",
            }}
          >
            {!isCheck && (
              <div className="checkbox-tips">点击勾选方可进行注册登录</div>
            )}
            <Checkbox checked={isCheck} onChange={checkChangeHandle}>
              <div className="confirm-info">
                我确认已年满18周岁、且已认真阅读并同意接受爱彼迎
                <a target="_blank" href="/terms?source=tos">
                  《服务条款》
                </a>
                、
                <a target="_blank" href="/terms/privacy_policy?source=tos">
                  《隐私政策》
                </a>
                、
                <a
                  target="_blank"
                  href="/terms/nondiscrimination_policy?source=tos"
                >
                  《非歧视政策》
                </a>
                、
                <a target="_blank" href="/help/article/1523?source=tos">
                  《社区承诺》
                </a>
                和
                <a target="_blank" href="/help/article/2894?source=tos">
                  《房客可靠性标准》
                </a>
                。
              </div>
            </Checkbox>
          </div>
        </Modal>
      </LoginWrapper>
    );
  })
);

export default LoginContext;
