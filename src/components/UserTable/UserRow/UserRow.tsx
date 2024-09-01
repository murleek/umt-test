import styles from "./UserRow.module.css";
import { User } from "../../../types.ts";
export default function UserRow({ user }: { user: User }) {
  return (
    <tr className={styles.row}>
      <td>{user.name}</td>
      <td>{user.username}</td>
      <td>{user.email}</td>
      <td>{user.phone}</td>
    </tr>
  );
}
