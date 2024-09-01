import SearchInput from "../../SearchInput/SearchInput.tsx";
import styles from "./SearchRow.module.css";
export default function SearchRow({}: {}) {
  return (
    <tr className={styles.row}>
      <th>
        <SearchInput name={"Name"} />
      </th>
      <th>
        <SearchInput name={"Username"} />
      </th>
      <th>
        <SearchInput name={"Email"} />
      </th>
      <th>
        <SearchInput name={"Phone"} />
      </th>
    </tr>
  );
}
