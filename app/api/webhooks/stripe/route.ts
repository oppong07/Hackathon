import { eq } from "drizzle-orm";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

import db from "@/db/drizzle";

export async function POST(req: Request) {
  const body = await req.text();
 

  return new NextResponse(null, { status: 200 });
};
