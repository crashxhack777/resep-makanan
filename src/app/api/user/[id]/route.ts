import { NextResponse } from "next/server";
import { User } from "@/types/user.type";

import FileUtility from "@/utils/fileUtility";

const fileUtility = new FileUtility<User>("user");

export async function GET (request: Request, context: { params: { id: string } }) {
  const { id } = context.params;
  const users = await fileUtility.read();
  const user = users.find((user: User) => user.id === Number(id));

  if (!user) {
    return NextResponse.json(
      { error: "User not found" },
      { status: 404 }
    );
  }

  return NextResponse.json(user);
}

export async function PUT (request: Request, context: { params: { id: string } }) {
  const { id } = context.params;
  const newUser = await request.json() as User;
  const users = await fileUtility.read();
  const user = users.findIndex((user: User) => user.id === Number(id));

  if (user === -1) {
    return NextResponse.json(
      { error: "User not found" },
      { status: 404 }
    );
  }

  users[user] = newUser;
  await fileUtility.write(users);

  return NextResponse.json(newUser);
}

export async function DELETE (request: Request, context: { params: { id: string } }) {
  const { id } = context.params;
  const users = await fileUtility.read();
  const user = users.findIndex((user: User) => user.id === Number(id));

  if (user === -1) {
    return NextResponse.json(
      { error: "User not found" },
      { status: 404 }
    );
  }

  users.splice(user, 1);
  await fileUtility.write(users);

  return NextResponse.json({ message: "User deleted" });
}