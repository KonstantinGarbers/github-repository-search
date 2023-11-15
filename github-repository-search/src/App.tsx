import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Content from "./components/content/Content";
import Seperator from "./shared/Seperator";
import { useQuery, gql } from "@apollo/client";
import { useGithubStore } from "./store/GithubStore";
import { useParams } from "react-router-dom";
import { GET_GITHUB } from "./queries/GET_GITHUB";

function App() {
  const { login } = useParams();
  const { loading, error, data } = useQuery(GET_GITHUB, {
    variables: { login },
  });
  const updateUser = useGithubStore((state) => state.updateUser);

  if (data) {
    console.log(data);
    updateUser(data.user);
  }
  if (error) {
    console.log(error);
  }

  return (
    <>
      <Header />
      {error ? (
        <>Error when fetching github user</>
      ) : (
        <main className="grid grid-cols-4 gap-0 pt-4 px-4">
          {loading ? (
            <div>Loading..</div>
          ) : (
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
      )}
    </>
  );
}

export default App;
