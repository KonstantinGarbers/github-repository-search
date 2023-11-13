import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content/Content";
import Seperator from "./shared/Seperator";

function App() {
  return (
    <>
      <Header />
      <main className="grid grid-cols-4 gap-0 pt-4 px-4">
        <div className="col-span-1 flex items-center">
          <>
            <Sidebar />
            <Seperator vertical={true}/>
          </>
        </div>
        <div className="col-span-3">
          <Content />
        </div>
      </main>
    </>
  );
}

export default App;
