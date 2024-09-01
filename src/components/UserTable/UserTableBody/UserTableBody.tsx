import UserRow from "../UserRow/UserRow.tsx";
import { User } from "../../../types.ts";

export default function UserTableBody({
  users,
}: {
  users: User[] | undefined;
}) {
  return users && users.map((x) => <UserRow user={x} />);
}
