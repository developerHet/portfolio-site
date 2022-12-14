import React from "react";
const ProfileBlob = () => {
  return (
    <svg
      width="400"
      height="400"
      viewBox="0 0 1000 1000"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <clipPath id="shape">
          <path
            fill="currentColor"
            d="M750,750Q500,1000,250,750Q0,500,250,250Q500,0,750,250Q1000,500,750,750Z"
          ></path>
        </clipPath>
      </defs>

      <g clip-path="url(#shape)">
        <path
          fill="#00ADB5"
          d="M750,750Q500,1000,250,750Q0,500,250,250Q500,0,750,250Q1000,500,750,750Z"
        />
      </g>
      <image
      x="80"
      y="80"
          width="80%"
          height="80%"
          preserveAspectRatio="xMinYMin slice"
          xlinkHref="/imgs/myProfile.jpg"
          clip-path="url(#shape)"
        />
    </svg>
  );
};
//https://www.bootdey.com/img/Content/avatar/avatar7.png
export default ProfileBlob;
