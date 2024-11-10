import React from "react";
const LoginForm = () => {
  return (
    <>
      <div className="m-[2rem] max-h-screen overflow-hidden">
        <div className="flex w-full">
          <div className="flex flex-1 flex-col justify-center items-center">
            <div className="text-left">
              <h1 className="text-4xl mb-2.5">ยินดีต้อนรับ!</h1>
              <p className="mb-8 text-xl">
                โปรดเข้าสู่ระบบ และ เริ่มใช้งานได้เลย
              </p>
              <p>อีเมล</p>
              <input
                className="px-3 py-2.5 rounded-xl w-[350px] mb-4 border-2 input-border-color"
                placeholder="Example@gmail.com"
              ></input>
              <p>รหัสผ่าน</p>
              <input
                className="px-3 py-2.5 rounded-xl w-[350px] mb-4 border-2 input-border-color"
                placeholder="Password"
              ></input>
              <div className="text-right">
                <p className="mb-4 underline forgot-password-color">
                  ลืมรหัสผ่าน?
                </p>
              </div>
              <button className="bg-blue-900 w-full py-2.5 rounded-xl text-white mb-8 text-xl">
                เข้าสู่ระบบ
              </button>
              <div class="divider">
                <span>or</span>
              </div>
            </div>
          </div>
          <div className="flex-1 shadow-lg">
            <img
              className="w-full max-h-screen rounded-[16px] "
              src="/src/img/paint-login.png"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
