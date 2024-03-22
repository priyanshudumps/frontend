"use client";
import { useState } from "react";
import Image from "next/image";
import InfluencerSetup2 from "./InfluencerSetup2";

function InfluencerSetup1() {
  const [choose, setChoose] = useState(true);
  return (
    <>
      <div
        className={`w-[90%] flex justify-center items-center gap-10 my-10 ${
          choose ? "flex" : "hidden"
        } `}
      >
        <div className="w-[50%] text-white flex flex-col gap-4">
          <p className="text-3xl font-semibold">Influencer Account Setup</p>
          <p>Give your account details</p>
          <div className="ml-2 flex flex-col gap-8">
            <div className="text-white">
              <p className="mb-2">Your Picture</p>
              <Image
                src="/LogoUpload.svg"
                width="252"
                height="300"
                className="w-[10%]"
                alt="Ref3r logo"
              />
            </div>

            <div className="flex flex-col w-[70%]">
              <label className="mb-2">Your Name</label>
              <input
                type="text"
                id="event-name"
                placeholder="Name"
                className="bg-[#27292D] rounded-xl p-2 text-[#929396]"
              />
            </div>

            <div className="flex flex-col w-[70%]">
              <label className="mb-2">Your Bio</label>
              <textarea
                placeholder="Description..."
                rows={4}
                className="bg-[#27292D] rounded-xl p-2 text-[#929396] resize-none"
              />
            </div>
            <button
              className="bg-[#00B24F] px-4 py-2 text-[0.8rem] text-white rounded-2xl md:rounded-lg w-[30%]"
              onClick={() => {
                setChoose(false);
              }}
            >
              Save Details
            </button>
          </div>
        </div>
        <div className="w-[50%] rounded-2xl bg-[#15A145] flex justify-center items-center">
          <Image
            src="/User.svg"
            width="252"
            height="300"
            className="w-[100%] max-h-[85vh]"
            alt="Ref3r logo"
          />
        </div>
      </div>
      {choose ? "" : <InfluencerSetup2 />}
    </>
  );
}

export default InfluencerSetup1;
