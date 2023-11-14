import { NextResponse, NextRequest } from "next/server";
import {prisma} from "@/lib/prisma";

export async function GET () {
  const category = await prisma.category.findMany()
  return NextResponse.json(category)
}

export async function POST(req: NextRequest) {
  const data = await req.json();
  await prisma.category.create({
    data: {
      name: data.name,
      description: data.description
    }
  })

  return NextResponse.json('Successful category creation')
}

export async function DELETE () {
  await prisma.category.deleteMany()
  return NextResponse.json('Successful All items of Category')
}
