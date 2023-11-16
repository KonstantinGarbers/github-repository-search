import React, { useState, useEffect, ReactElement } from 'react'
import Seperator from '../../shared/Seperator'
import RepoCard from './RepoCard'
import { useGithubStore } from '../../store/GithubStore'
import { type RepositoryEdge } from '../../interfaces/RepositoryEdge'

function Content (): ReactElement {
  const repositories: RepositoryEdge[] = useGithubStore(
    (state) => state.repositories.edges
  )
  const [filteredRepositories, setFilteredRepositories] =
    useState(repositories)
  const [searchWord, setSearchWord] = useState('')

  useEffect(() => {
    const result = repositories.filter((repo) =>
      repo.node.name
        .toLowerCase()
        .replace(/[^a-z0-9]/gi, '')
        .includes(searchWord.toLowerCase().replace(/[^a-z0-9]/gi, ''))
    )
    setFilteredRepositories(result)
  }, [searchWord, repositories])

  return (
    <section className="flex flex-col items-stretch">
      <header className="grid grid-cols-5 w-full gap-4 -mr-5 max-w-full h-12">
        <input
          type="text"
          className="border col-span-4 flex w-full flex-col rounded-xl border-solid border-gray-400 max-md:max-w-full p-2"
          aria-label="Main Navigation"
          value={searchWord}
          onChange={(e) => { setSearchWord(e.target.value) }}
        />
        <button className="col-span-1 h-full items-center text-white text-xl relative bg-green-600 overflow-hidden w-full px-2 py-2 self-start rounded-xl">
          Filter
        </button>
      </header>
      {filteredRepositories.map((repo, index) => (
        <React.Fragment key={index}>
          <Seperator vertical={false} />
          <RepoCard {...repo.node} />
        </React.Fragment>
      ))}
    </section>
  )
}

export default Content
