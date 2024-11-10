import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
const NavBar = () => {
  return (
    <>
      <div className="flex justify-between items-center bg-sky-600 px-[100px] py-4 text-white font-bold">
        <p>Shop</p>
        <ul className="flex items-center justify-center">
          <li className="mx-4">หน้าแรก</li>
          <li className="mx-4">Content</li>
          <li className="mx-4">เกี่ยวกับเรา</li>
          <li className="mx-4">
            <button>
              <FontAwesomeIcon icon={faCartShopping} className="mr-2" />
              ตะกร้า
            </button>
          </li>
          <li className="ml-4">
            <button>
              <FontAwesomeIcon icon={faUser} className="mr-2" />
              ลงชื่อเข้าใช้
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};
export default NavBar;
