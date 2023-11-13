import React from "react";

const profilePictureUrl = "https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D";
const name = "Konstantin Garbers"
const username = "garbersKonstantin"
const description = "Software developer with a passion for software, living in Munich but currently in Taiwan for an exchange semester"

function Sidebar() {
  return (
    <div className="flex flex-col items-stretch">
      <img
        loading="lazy"
        srcSet={profilePictureUrl}
        alt="Profile Picture"
      />
      <h1 className="text-black text-4xl font-medium w-full -mr-5 mt-3 max-md:mt-10">
        {name}
      </h1>
      <h2 className="text-black text-opacity-50 text-2xl w-full -mr-3">
        {username}
      </h2>
      <p className="text-black text-xl w-full -mr-5 mt-6">
        {description}
      </p>
      <div className="w-px h-full bg-gray-300 -mr-5"></div>
    </div>
  );
}

export default Sidebar;
