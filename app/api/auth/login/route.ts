import connect from "@/lib/connectDb";
import { NextRequest, NextResponse } from "next/server";

{
  /** 

  function connect() => connection to database

  TODO: add the functionality to the rotue

**/
}

connect();
export async function POST(request: NextRequest) {
  try {
    const { username, password } = await request.json();
    console.log(username, password);

    return NextResponse.json({
      message: "Success",
      data: { username: username, password: password },
      status: 200,
    });
  } catch (error) {
    console.error("POST /login", error);
    return NextResponse.json({
      message: "Internal Server Error",
      status: 500,
    });
  }
}
