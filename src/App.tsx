import "./App.css";
import Header from "./components/Header/Header.tsx";
import UserTable from "./components/UserTable/UserTable.tsx";

function App() {
  return (
    <>
      <Header></Header>
      <main>
        <UserTable />
      </main>
    </>
  );
}

export default App;
