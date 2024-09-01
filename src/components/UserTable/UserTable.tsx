import styles from "./UserTable.module.css";
import HeaderRow from "./HeaderRow/HeaderRow.tsx";
import SearchInput from "../SearchInput/SearchInput.tsx";
import { useState } from "react";
import { useDebounce } from "@uidotdev/usehooks";
import UserTableBody from "./UserTableBody/UserTableBody.tsx";
import { ISearchParams } from "../../types.ts";

export default function UserTable() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const debouncedSearch = useDebounce<ISearchParams>(
    { name, username, email, phone },
    300,
  );

  return (
    <section className={styles.tableOuterWrapper}>
      <div className={styles.tableInnerWrapper}>
        <table className={styles.table}>
          <thead>
            <HeaderRow />
            <tr className={styles.searchRow}>
              <th>
                <SearchInput
                  name={"Name"}
                  value={name}
                  setValue={setName}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </th>
              <th>
                <SearchInput
                  name={"Username"}
                  value={username}
                  setValue={setUsername}
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                />
              </th>
              <th>
                <SearchInput
                  name={"Email"}
                  value={email}
                  setValue={setEmail}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </th>
              <th>
                <SearchInput
                  name={"Phone"}
                  value={phone}
                  setValue={setPhone}
                  onChange={(e) => {
                    setPhone(e.target.value);
                  }}
                />
              </th>
            </tr>
          </thead>
          <tbody>
            <UserTableBody search={debouncedSearch} />
          </tbody>
        </table>
      </div>
    </section>
  );
}
