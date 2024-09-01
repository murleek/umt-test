import styles from "./UserTable.module.css";
import { useGetUsersQuery } from "../../app/services/user.ts";
import Spinner from "../Spinner/Spinner.tsx";
import SearchRow from "./SearchRow/SearchRow.tsx";
import HeaderRow from "./HeaderRow/HeaderRow.tsx";
import UserRow from "./UserRow/UserRow.tsx";

export default function UserTable() {
  const { data, isLoading, error } = useGetUsersQuery();

  return (
    <section className={styles.tableOuterWrapper}>
      <div className={styles.tableInnerWrapper}>
        <table className={styles.table}>
          <thead>
            <HeaderRow />
            <SearchRow />
          </thead>
          <tbody>
            {data && data.map((x) => <UserRow user={x} />)}
            {isLoading && (
              <tr className={styles.loading}>
                <td colSpan={4}>
                  <Spinner />
                </td>
              </tr>
            )}
          </tbody>
        </table>
        {error && <span>error</span>}
      </div>
    </section>
  );
}
