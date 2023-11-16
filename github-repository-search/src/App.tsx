import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Content from './components/content/Content'
import Seperator from './shared/Seperator'
import { useQuery } from '@apollo/client'
import { useGithubStore } from './store/GithubStore'
import { useParams } from 'react-router-dom'
import { GET_GITHUB } from './queries/GET_GITHUB'
import { type ReactElement } from 'react'

/**
 * The main App component of the application.
 *
 * This component fetches data from GitHub using the `GET_GITHUB` query and the `login` parameter from the URL.
 * If data is fetched successfully, it updates the user state using the `updateUser` function from the `useGithubStore` hook.
 * If there's an error during the fetch, it logs the error to the console.
 *
 * @returns {ReactElement} The rendered App component, which includes the Header component and a main section.
 * If data is still loading, it displays "Loading..".
 * If there's an error, it doesn't display anything (this could be replaced with an error message or error component).
 */
function App (): ReactElement {
  const { login } = useParams()
  const { loading, error, data } = useQuery(GET_GITHUB, {
    variables: { login }
  })
  const updateUser = useGithubStore((state) => state.updateUser)

  if (data) {
        updateUser(data.user)
  }
  if (error) {
    console.log(error)
  }

  return (
    <>
      <Header />
      <main className="grid grid-cols-4 gap-0 pt-4 px-4">
        {loading
          ? (
          <>Loading..</>
            )
          : error
            ? (
          <>Error when fetching github user</>
              )
            : (
          <>
            <div className="col-span-1 md:flex hidden">
              <>
                <Sidebar />
                <Seperator vertical={true} />
              </>
            </div>
            <div className="md:col-span-3 col-span-4">
              <Content />
            </div>
          </>
              )}
      </main>
    </>
  )
}

export default App
