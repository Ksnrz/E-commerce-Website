import React from "react";
const LoginForm = () => {
  return (
    <>
      <div className="p-[2.5rem]">
        <div className="flex w-full">
          <div className="flex flex-1 flex-col bg-red-300 justify-center items-center">
            <div className="text-left">
              <h1 className="text-4xl mb-2.5">ยินดีต้อนรับ!</h1>
              <p>โปรดเข้าสู่ระบบ และ เริ่มใช้งานได้เลย</p>
            </div>
          </div>
          <div className="flex-1">
            <img
              className="w-full max-h-screen rounded-[16px]"
              src="/src/img/paint-login.png"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
