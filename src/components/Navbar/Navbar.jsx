import React from 'react';

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm px-[140px] py-[25px] flex justify-between items-center">
        <div className="">
          <h1 className="text-3xl space-x-0">
            <span className="font-bold text-blue-800">Auction</span>
            <span className="font-extrabold text-yellow-400">Gallery</span>
          </h1>
        </div>
        <div>
          <ul className="flex justify-between items-center gap-[78px] font-semibold">
            <li>Home</li>
            <li>Auctions</li>
            <li>Categories</li>
            <li>How to works</li>
          </ul>
        </div>
        <div className="space-x-6">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 00-5-5.917V4a2 2 0 00-4 0v1.083A6 6 0 004 11v3.159c0 .538-.214 1.055-.595 1.436L2 17h5m5 0v1a3 3 0 01-6 0v-1m6 0h4"
                  />
                </svg>
                <span className="badge badge-sm indicator-item">9</span>
              </div>
            </div>
            <div
              tabIndex={0}
              className="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-52 shadow"
            ></div>
          </div>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  //   src="./../../assets/rsz_1chatgpt_image_apr_28_2025_10_08_43_pm.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
