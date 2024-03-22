"use client";
import { useState } from "react";
import FeatureAffiliate from "./FeatureAffiliate";
import FeatureBrand from "./FeatureBrand";

function FeaturesSection() {
  const [choose, setChoose] = useState(false);

  return (
    <div className="mt-10 mb-2 flex flex-col justify-center items-center">
      <div className="py-2 px-4 bg-[#61BC8463] rounded-3xl text-sm text-white font-semibold mb-10">
        Benefits
      </div>
      <div className="w-[90%]">{choose ? <FeatureBrand /> : <FeatureAffiliate />}</div>
      <div className="flex justify-center items-center gap-2">
        <svg
          className={`w-[40%] cursor-pointer ${
            choose ? "fill-[#27292D]" : "fill-[#00B24F]"
          }`}
          onClick={() => setChoose(false)}
          width="80"
          height="145"
          viewBox="0 0 151 145"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M135.792 27.9582C135.792 34.8748 131.208 40.75 124.917 42.6666C125.625 40.375 126 37.9167 126 35.4167C126 26.2917 121.083 18.2921 113.792 13.9587C115.792 13.0421 118 12.5 120.375 12.5C128.875 12.5 135.792 19.4165 135.792 27.9582ZM132.667 47.0835C130.917 46.5835 129 46.8331 127.458 47.7081C125.625 48.7081 123.667 49.2921 121.667 49.4171C120.833 50.6671 119.875 51.8748 118.75 52.9582C126.792 55.5832 132.667 62.5417 134 70.8333H136.875C138.792 70.8333 140.542 69.8338 141.417 68.2088C142.25 66.6672 142.667 64.9163 142.667 63.1663V60.2081C142.667 53.9998 138.542 48.6252 132.667 47.0835ZM88.2083 13.9587C86.2083 13.0421 83.9999 12.5 81.6249 12.5C73.1249 12.5 66.2085 19.4165 66.2085 27.9582C66.2085 34.8748 70.7917 40.75 77.0834 42.6666C76.3751 40.375 76 37.9167 76 35.4167C76 26.2917 80.9167 18.2921 88.2083 13.9587ZM83.25 52.9582C82.125 51.8748 81.1666 50.6671 80.3333 49.4171C78.3333 49.2921 76.3751 48.7081 74.5418 47.7081C73.0001 46.8331 71.0835 46.5835 69.3335 47.0835C63.4585 48.6252 59.3334 53.9998 59.3334 60.2081V63.1663C59.3334 64.9163 59.75 66.6672 60.5833 68.2088C61.4583 69.8338 63.2084 70.8333 65.0834 70.8333H68.0001C69.3334 62.5417 75.2083 55.5832 83.25 52.9582ZM115.917 58.6253C115.208 58.4586 114.458 58.3333 113.708 58.3333C112.292 58.3333 110.833 58.7084 109.583 59.4167C106.917 60.875 103.958 61.6252 101 61.6252C98.0417 61.6252 95.0834 60.875 92.4167 59.4167C91.1667 58.7084 89.7084 58.3333 88.2918 58.3333C87.5418 58.3333 86.7916 58.4586 86.0833 58.6253C78.9166 60.542 73.9167 67.0829 73.9167 74.5829V78.2084C73.9167 80.3334 74.4584 82.4582 75.4584 84.2916C76.5 86.2916 78.5833 87.5 80.9167 87.5H121.083C123.417 87.5 125.5 86.2916 126.542 84.2916C127.542 82.4582 128.083 80.3334 128.083 78.2084V74.5829C128.083 67.0829 123.083 60.542 115.917 58.6253ZM119.75 35.4167C119.75 25.0625 111.354 16.6667 101 16.6667C90.6459 16.6667 82.25 25.0625 82.25 35.4167C82.25 45.7708 90.6459 54.1667 101 54.1667C111.354 54.1667 119.75 45.7708 119.75 35.4167Z" />
          <rect y="137" width="151" height="8" />
          <path d="M59.3942 126H56.4283L60.9474 112.909H64.5142L69.027 126H66.0611L62.782 115.901H62.6797L59.3942 126ZM59.2088 120.854H66.2145V123.015H59.2088V120.854ZM70.6026 126V112.909H79.2702V115.191H73.3704V118.31H78.695V120.592H73.3704V126H70.6026ZM81.1319 126V112.909H89.7995V115.191H83.8997V118.31H89.2243V120.592H83.8997V126H81.1319ZM94.429 112.909V126H91.6612V112.909H94.429ZM96.7061 126V112.909H99.4739V123.718H105.086V126H96.7061ZM109.687 112.909V126H106.919V112.909H109.687ZM114.22 126H111.254L115.774 112.909H119.34L123.853 126H120.887L117.608 115.901H117.506L114.22 126ZM114.035 120.854H121.041V123.015H114.035V120.854ZM123.331 115.191V112.909H134.082V115.191H130.074V126H127.338V115.191H123.331ZM135.853 126V112.909H144.674V115.191H138.62V118.31H144.22V120.592H138.62V123.718H144.699V126H135.853Z" />
        </svg>
        <svg
          className={`w-[43%] cursor-pointer ${
            choose ? "fill-[#00B24F]" : "fill-[#27292D]"
          }`}
          onClick={() => setChoose(true)}
          width="85"
          height="145"
          viewBox="0 0 161 145"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M85.4166 75C85.4166 83.0417 78.875 89.5833 70.8333 89.5833H60.5417V79.1667C60.5417 73.4167 55.8751 68.75 50.1251 68.75C44.3751 68.75 39.7084 73.4167 39.7084 79.1667V89.5833H29.1666C21.125 89.5833 14.5833 83.0417 14.5833 75V55.6254C17.9166 57.3337 21.6249 58.3333 24.9583 58.3333C29.6666 58.3333 34.25 56.3751 37.5 53.2501C40.7083 56.3751 45.2916 58.3333 50 58.3333C54.7083 58.3333 59.2916 56.3751 62.5 53.2501C65.75 56.3751 70.3333 58.3333 75.0417 58.3333C78.375 58.3333 82.0833 57.3337 85.4166 55.6254V75ZM89.475 36.8418L84.9416 23.2371C82.3874 15.5663 75.2375 10.4167 67.1541 10.4167H32.8458C24.7624 10.4167 17.6167 15.5663 15.0583 23.2371L10.525 36.8418C10.4541 37.0585 10.4166 37.2749 10.4166 37.5041C10.4291 45.5457 16.9499 52.0833 24.9583 52.0833C29.9083 52.0833 34.6583 49.6622 37.4875 45.9747C40.2917 49.6622 45.0375 52.0833 50 52.0833C54.9625 52.0833 59.7083 49.6622 62.5124 45.9747C65.3416 49.6622 70.0958 52.0833 75.0417 52.0833C83.0458 52.0833 89.5708 45.5457 89.5833 37.5041C89.5833 37.2749 89.5458 37.0585 89.475 36.8418Z" />
          <rect x="10" y="137" width="151" height="8" />
          <path
            d="M19.1378 126V112.909H24.3793C25.3423 112.909 26.1456 113.052 26.7891 113.337C27.4325 113.623 27.9162 114.019 28.2401 114.526C28.5639 115.029 28.7259 115.609 28.7259 116.265C28.7259 116.776 28.6236 117.226 28.419 117.614C28.2145 117.997 27.9332 118.312 27.5753 118.56C27.2216 118.803 26.8168 118.975 26.3608 119.077V119.205C26.8594 119.227 27.326 119.367 27.7607 119.627C28.1996 119.887 28.5554 120.251 28.8281 120.72C29.1009 121.185 29.2372 121.739 29.2372 122.382C29.2372 123.077 29.0646 123.697 28.7195 124.242C28.3786 124.783 27.8736 125.212 27.2045 125.527C26.5355 125.842 25.7109 126 24.7308 126H19.1378ZM21.9055 123.737H24.1619C24.9332 123.737 25.4957 123.59 25.8494 123.296C26.2031 122.998 26.38 122.602 26.38 122.107C26.38 121.745 26.2926 121.425 26.1179 121.148C25.9432 120.871 25.6939 120.654 25.37 120.496C25.0504 120.339 24.669 120.26 24.2259 120.26H21.9055V123.737ZM21.9055 118.387H23.9574C24.3366 118.387 24.6733 118.321 24.9673 118.189C25.2656 118.053 25.5 117.861 25.6705 117.614C25.8452 117.366 25.9325 117.07 25.9325 116.725C25.9325 116.252 25.7642 115.871 25.4276 115.581C25.0952 115.291 24.6222 115.146 24.0085 115.146H21.9055V118.387ZM31.0382 126V112.909H36.2029C37.1916 112.909 38.0353 113.086 38.7342 113.44C39.4373 113.789 39.9721 114.286 40.3386 114.929C40.7093 115.568 40.8947 116.32 40.8947 117.185C40.8947 118.055 40.7072 118.803 40.3322 119.429C39.9572 120.051 39.4139 120.528 38.7022 120.861C37.9949 121.193 37.1383 121.359 36.1326 121.359H32.6745V119.135H35.6852C36.2136 119.135 36.6525 119.062 37.002 118.918C37.3514 118.773 37.6113 118.555 37.7818 118.266C37.9565 117.976 38.0439 117.616 38.0439 117.185C38.0439 116.751 37.9565 116.384 37.7818 116.086C37.6113 115.788 37.3493 115.562 36.9956 115.408C36.6461 115.251 36.2051 115.172 35.6724 115.172H33.8059V126H31.0382ZM38.1078 120.043L41.3613 126H38.3059L35.1227 120.043H38.1078ZM45.1071 126H42.1412L46.6603 112.909H50.2271L54.7399 126H51.774L48.4949 115.901H48.3926L45.1071 126ZM44.9217 120.854H51.9274V123.015H44.9217V120.854ZM67.2651 112.909V126H64.8745L59.1792 117.761H59.0833V126H56.3155V112.909H58.7445L64.3951 121.142H64.5101V112.909H67.2651ZM74.1925 126H69.5518V112.909H74.2308C75.5476 112.909 76.6811 113.171 77.6314 113.695C78.5817 114.215 79.3125 114.963 79.8239 115.939C80.3395 116.915 80.5973 118.082 80.5973 119.442C80.5973 120.805 80.3395 121.977 79.8239 122.957C79.3125 123.937 78.5774 124.69 77.6186 125.214C76.6641 125.738 75.522 126 74.1925 126ZM72.3196 123.629H74.0774C74.8956 123.629 75.5838 123.484 76.142 123.194C76.7045 122.9 77.1264 122.446 77.4077 121.832C77.6932 121.214 77.8359 120.418 77.8359 119.442C77.8359 118.474 77.6932 117.684 77.4077 117.07C77.1264 116.457 76.7067 116.005 76.1484 115.715C75.5902 115.425 74.902 115.281 74.0838 115.281H72.3196V123.629Z"
            // fill="#27292D"
          />
        </svg>
      </div>
    </div>
  );
}

export default FeaturesSection;
