import React from "react";
import UserInfo from "./UserInfo";

type Status = "active" | "inactive" | "pending";

export type User = {
  id: number;
  username: string;
  email: string;
  status: Status;
};

export default function userList() {
  const users: User[] = [
    {
      id: 1,
      username: "alice",
      email: "alice@example.com",
      status: "active",
    },
    {
      id: 2,
      username: "bob",
      email: "bob@example.com",
      status: "inactive",
    },
    {
      id: 3,
      username: "charlie",
      email: "charlie@example.com",
      status: "pending",
    },
    {
      id: 4,
      username: "diana",
      email: "diana@example.com",
      status: "active",
    },
    {
      id: 5,
      username: "eric",
      email: "eric@example.com",
      status: "inactive",
    },
  ];

  return (
    <div>
      <h3>유저 정보</h3>
      <table>
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2 w-12 text-center"></th>
            <th className="border border-gray-300 px-4 py-2">name</th>
            <th className="border border-gray-300 px-4 py-2">email</th>
            <th className="border border-gray-300 px-4 py-2">status</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <UserInfo key={user.id} user={user} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
