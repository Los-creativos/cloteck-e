import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(
  req: NextRequest,
  {
    params
  }: {
    params: { id: string };
  }
) {
  const uniqueCategory = await prisma.category.findUnique({
    where: {
      category_id: parseInt(params.id)
    }
  })

  return NextResponse.json(uniqueCategory)
}

export async function DELETE (
  req: NextRequest,
  {
    params
  }: {
    params: { id: string };
  }
) {
  await prisma.category.delete({
    where: {
      category_id: parseInt(params.id)
    }
  })

  return NextResponse.json('Successful Category Deleted')
}

export async function PUT(
  req: NextRequest,
  {
    params
  }: {
    params: { id: string };
  }
) {
  const data = await req.json()
  await prisma.category.update({
    where: {
      category_id: parseInt(params.id)
    },
    data: {
      name: data.name,
      description: data.description
    }
  })

  return NextResponse.json('Successful Category Updated')
}
