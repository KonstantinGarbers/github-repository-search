import React from "react";
import { useGithubStore } from "../store/GithubStore";

function Sidebar() {
  const bioHTML = useGithubStore((state) => state.bioHTML);
  const name = useGithubStore((state) => state.name);
  const avatarUrl = useGithubStore((state) => state.avatarUrl);
  const login = useGithubStore((state) => state.login)


  return (
    <div className="flex flex-col items-stretch">
      <img
        loading="lazy"
        srcSet={avatarUrl}
      />
      <h1 className="text-black text-4xl font-medium w-full -mr-5 mt-3 max-md:mt-10">
        {name}
      </h1>
      <h2 className="text-black text-opacity-50 text-2xl w-full -mr-3">
        {login}
      </h2>
      <p className="text-black text-xl w-full -mr-5 mt-6" dangerouslySetInnerHTML={{__html: bioHTML}}/>
      <div className="w-px h-full bg-gray-300 -mr-5"></div>
    </div>
  );
}

export default Sidebar;
