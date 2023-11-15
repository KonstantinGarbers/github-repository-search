import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Content from "./components/content/Content";
import Seperator from "./shared/Seperator";
import { useQuery, gql } from "@apollo/client";
import { useGithubStore } from "./store/GithubStore";

function App() {
  const GET_GITHUB = gql`
    query GetGithub {
      user(login: "AlexPerathoner") {
        name
        bioHTML
        avatarUrl
        login
        repositories(
          first: 100
          orderBy: { field: STARGAZERS, direction: DESC }
        ) {
          edges {
            node {
              name
              descriptionHTML
              url
              stargazerCount
              primaryLanguage {
                color
                name
              }
            }
          }
        }
      }
    }
  `;

  const { loading, error, data } = useQuery(GET_GITHUB);
  const updateUser = useGithubStore((state) => state.updateUser);

  if (data) {
    updateUser(data.user);
  }
  if (error) {
    console.log(error);
  }

  return (
    <>
      <Header />
      <main className="grid grid-cols-4 gap-0 pt-4 px-4">
        {loading ? (
          <div>Loading..</div>
        ) : (
          <>
            <div className="col-span-1 flex items-center">
              <>
                <Sidebar />
                <Seperator vertical={true} />
              </>
            </div>
            <div className="col-span-3">
              <Content />
            </div>
          </>
        )}
      </main>
    </>
  );
}

export default App;
