import UserRow from "../UserRow/UserRow.tsx";
import styles from "../UserTable.module.css";
import Spinner from "../../Spinner/Spinner.tsx";
import { useGetUsersQuery } from "../../../app/services/user.ts";
import { ISearchParams } from "../../../types.ts";

export default function UserTableBody({ search }: { search: ISearchParams }) {
  const { data, isLoading, error } = useGetUsersQuery(search);

  return (
    <>
      {data && data.map((x) => <UserRow user={x} />)}
      {!data && (
        <tr className={styles.loading}>
          <td colSpan={4}>
            {isLoading && <Spinner />}
            {error && <code>ERROR</code>}
          </td>
        </tr>
      )}
    </>
  );
}
