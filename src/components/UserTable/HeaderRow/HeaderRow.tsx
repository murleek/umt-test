import styles from "./HeaderRow.module.css";
export default function HeaderRow() {
  return (
    <tr className={styles.row}>
      <th>
        <span>Name</span>
      </th>
      <th>
        <span>Username</span>
      </th>
      <th>
        <span>Email</span>
      </th>
      <th>
        <span>Phone</span>
      </th>
    </tr>
  );
}
