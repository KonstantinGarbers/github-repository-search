import React from 'react';

interface RepoCardProps {
  repoName: string;
  language: string;
  stars: number;
  lastUpdated: string;
}

const RepoCard: React.FC<RepoCardProps> = ({ repoName, language, stars, lastUpdated }) => {
  return (
    <div className="w-full bg-white border border-gray-200 rounded-lg p-4">
      <h2 className="text-lg font-semibold">{repoName}</h2>
      <div className="text-gray-600 text-sm mt-2">
        <span>Language: {language}</span>
      </div>
      <div className="flex items-center justify-between mt-2">
        <div className="flex items-center text-gray-600 text-sm">
          <svg className="h-4 w-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 18l-6-6h4V6h4v6h4l-6 6z"></path>
          </svg>
          <span>{stars} stars</span>
        </div>
        <div className="text-gray-600 text-sm">
          Updated on {lastUpdated}
        </div>
      </div>
    </div>
  );
};

export default RepoCard;