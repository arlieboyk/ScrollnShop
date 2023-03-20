import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";


export async function GET(request: NextApiRequest, res: NextApiResponse) {
  const user = await prisma.user.findMany()
  return res.status(200).json(user)
}



