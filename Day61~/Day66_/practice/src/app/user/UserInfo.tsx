import React from "react";
import { User } from "./page";

type Props = {user: User}

export default function UserInfo({user} : Props) {
  return (
    <tr key={user.id}>
      <td className="px-4 py-2 w-12 text-center"><input type="checkbox"></input></td>
      <td className="text-center px-4 py-2">{user.username}</td>
      <td className="text-center px-4 py-2">{user.email}</td>
      <td className="text-center px-4 py-2">{user.status}</td>
    </tr>
  );
}
