import "./App.css";
import { useGetUsersQuery } from "./app/services/user.ts";

function App() {
  const { data } = useGetUsersQuery();

  console.log(data);

  return <span>UMT</span>;
}

export default App;
