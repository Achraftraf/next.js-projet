import { NextResponse } from "next/server";
import db from "app/utils/db.ts";

export const GET = async (request) => {
  const tasks = await db.task.findMany();
  return Response.json({ tasksData: tasks });
  // return NextResponse.json({ data: tasks });
};
