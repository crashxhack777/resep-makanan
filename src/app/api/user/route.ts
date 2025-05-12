import { NextResponse } from "next/server";
import { User } from "@/types/user.type";

import FileUtility from "@/utils/fileUtility";

const fileUtility = new FileUtility<User>("user");

export async function GET () {
  const users = await fileUtility.read();
  
  return NextResponse.json(users);
}

export async function POST (request: Request) {
  const user = await request.json() as User;
  const users = await fileUtility.read();
  
  users.push(user);
  await fileUtility.write(users);
  
  return NextResponse.json(user, { status: 201 });
}