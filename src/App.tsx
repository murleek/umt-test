import "./App.css";
import { useGetUsersQuery } from "./app/services/user.ts";
import Header from "./components/Header/Header.tsx";

function App() {
  const { data } = useGetUsersQuery();

  console.log(data);

  return (
    <>
      <Header></Header>
      <main></main>
    </>
  );
}

export default App;
