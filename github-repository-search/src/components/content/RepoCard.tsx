import { type ReactElement } from "react";
import { type RepositoryNode } from "../../interfaces/RepositoryNode";

/**
 * A component that displays a logo.
 * @returns {ReactElement} The rendered header.
 */
function RepoCard(repo: RepositoryNode): ReactElement {
  return (
    <div className="w-full bg-white border border-gray-200 rounded-lg p-4">
      <h2 className="text-lg font-semibold underline">
        <a href={repo.url} target="_blank" rel="noopener noreferrer">
          {repo.name}
        </a>
      </h2>
      <div className="text-gray-600 text-sm mt-2">
        <div dangerouslySetInnerHTML={{ __html: repo.descriptionHTML }} />
      </div>
      <div className="my-2 flex items-center">
        <div
          className="h-4 w-4 rounded-full mr-2"
          style={{ backgroundColor: repo.primaryLanguage?.color }}
        />
        <span className="text-gray-600 text-sm">
          {repo.primaryLanguage?.name}
        </span>
      </div>
      <div className="flex items-center justify-between mt-2">
        <div className="flex items-center text-gray-600 text-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-5 h-5 mr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
            />
          </svg>

          <span>{repo.stargazerCount}</span>
        </div>
        <div className="text-gray-600 text-sm">
          Updated at{" "}
          {repo.updatedAt?.toString().split("T")[0].replace(/-/g, "/")}
        </div>
      </div>
    </div>
  );
}

export default RepoCard;
