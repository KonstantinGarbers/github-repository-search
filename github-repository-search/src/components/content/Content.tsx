import React from "react";
import Seperator from "../../shared/Seperator";
import RepoCard from "./RepoCard";

function Content() {
  const formCount = 3;

  const renderRepositories = () => {
    const repositories = [];

    for (let i = 0; i < formCount; i++) {
      repositories.push(
          <div>
          <Seperator vertical={false} />
          <RepoCard
            repoName="test"
            language="test"
            stars={0}
            lastUpdated="test" />
        </div>
      );
    }

    return repositories;
  };

  return (
    <section className="flex flex-col items-stretch">
      <header className="grid grid-cols-5 w-full gap-4 -mr-5 max-w-full h-12">
        <input
          type="text"
          className="border col-span-4 flex w-full flex-col rounded-xl border-solid border-gray-400 max-md:max-w-full p-2"
          aria-label="Main Navigation"
        />
        <button className="col-span-1 h-full items-center text-white text-xl relative bg-green-600 overflow-hidden w-full px-2 py-2 self-start rounded-xl">
          Search
        </button>
      </header>
      {renderRepositories()}
    </section>
  );
}

export default Content;