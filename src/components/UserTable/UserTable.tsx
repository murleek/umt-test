import styles from "./UserTable.module.css";
import HeaderRow from "./HeaderRow/HeaderRow.tsx";
import SearchInput from "../SearchInput/SearchInput.tsx";
import { useState } from "react";
import { useDebounce } from "@uidotdev/usehooks";
import { ISearchParams } from "../../types.ts";
import { useGetUsersQuery } from "../../app/services/user.ts";
import Spinner from "../Spinner/Spinner.tsx";
import UserRow from "./UserRow/UserRow.tsx";

export default function UserTable() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const debouncedSearch = useDebounce<ISearchParams>(
    { name, username, email, phone },
    300,
  );
  const { data, isLoading, error } = useGetUsersQuery(debouncedSearch);

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
            {data && data.map((x) => <UserRow user={x} />)}
            {!data && (
              <tr className={styles.loading}>
                <td colSpan={4}>
                  {isLoading && <Spinner />}
                  {error && <code>ERROR</code>}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}
