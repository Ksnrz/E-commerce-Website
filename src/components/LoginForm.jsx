import React from "react";
const LoginForm = () => {
  return (
    <>
      <div className="m-[2rem] max-h-screen">
        <div className="flex w-full">
          <div className="flex flex-1 flex-col justify-center items-center bg-slate-300">
            <div className="text-left">
              <h1 className="text-4xl mb-2.5">ยินดีต้อนรับ!</h1>
              <p className="mb-8">โปรดเข้าสู่ระบบ และ เริ่มใช้งานได้เลย</p>
              <p>Email</p>
              <input
                className="px-3 py-2.5 rounded-xl w-[350px] mb-4 border-2 input-border-color"
                placeholder="Example@gmail.com"
              ></input>
              <p>Password</p>
              <input
                className="px-3 py-2.5 rounded-xl w-[350px] mb-4 border-2 input-border-color"
                placeholder="Password"
              ></input>
              <div className="text-right">
                <p className="mb-4 underline forgot-password-color">
                  Forgot password?
                </p>
              </div>
              <button className="bg-blue-900 w-full py-2.5 rounded-xl text-white mb-8">
                Sign In
              </button>
              <div class="divider">
                <span>or</span>
              </div>
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
