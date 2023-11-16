import React, { useState, useEffect, type ReactElement } from 'react'
import Seperator from '../../shared/Seperator'
import RepoCard from './RepoCard'
import { useGithubStore } from '../../store/GithubStore'
import { type RepositoryEdge } from '../../interfaces/RepositoryEdge'

/**
 * A component that displays a list of GitHub repositories.
 * It also includes a search bar for filtering the repositories.
 * @returns {ReactElement} The rendered content.
 */
function Content (): ReactElement {
  const repositories: RepositoryEdge[] = useGithubStore(
    (state) => state.repositories.edges
  )
  const [filteredRepositories, setFilteredRepositories] =
    useState(repositories)
  const [searchWord, setSearchWord] = useState('')
  
  /**
   * A useEffect hook that filters the repositories based on the search word.
   * It removes any non-alphanumeric characters from the repository names and the search word before comparing them.
   * It runs whenever the search word or the repositories change.
   */
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
      <header className="w-full max-w-full h-12">
        <input
          type="text"
          className="border flex w-full h-full flex-col rounded-xl border-solid border-gray-400 max-md:max-w-full py-2 px-4"
          aria-label="Main Navigation"
          value={searchWord}
          placeholder='Search for repositories...'
          onChange={(e) => { setSearchWord(e.target.value) }}
        />
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
