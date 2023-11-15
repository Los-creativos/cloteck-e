import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import {prisma} from "@/lib/prisma";
import {updateCategoryValidator} from "@/app/api/category/category.schema";
import { ZodError } from "zod";

export async function GET(
  req: NextRequest,
  {
    params
  }: {
    params: { id: string };
  }
) {
  try {
    const uniqueCategory = await prisma.category.findUnique({
      where: {
        category_id: parseInt(params.id)
      }
    })

    return NextResponse.json(uniqueCategory)
  } catch (error) {
    console.error('Error', error)
    if (error instanceof ZodError) {
      return NextResponse.json({ error: (error as any).errors }, { status: 401 })
    }
    return NextResponse.json({ error: (error as any).errors }, { status: 500 })
  }
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
  const data = await req.json();
  updateCategoryValidator.parse(data);
  await prisma.category.update({
    where: {
      category_id: parseInt(params.id)
    },
    data: {
      description: data.description
    }
  })

  return NextResponse.json('Successful Category Updated')
}
