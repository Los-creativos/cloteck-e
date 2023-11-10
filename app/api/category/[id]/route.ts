import {prisma} from "@/lib/prisma";
import {NextApiRequest} from "next";
import {NextResponse} from "next/server";

export async function GET (
  req: NextApiRequest,
  {
    params
  }: {
    params: { id: string };
  }
) {
  const uniqueCategory = await prisma.category.findUnique({
    where: {
      category_id: parseInt(params.id)
    },
  });

  return NextResponse.json(uniqueCategory);
}

export async function DELETE (
  req: NextApiRequest,
  {
    params
  }: {
    params: { id: string };
  }
) {
  await prisma.category.delete({
    where: {
      category_id: parseInt(params.id)
    },
  });

  return NextResponse.json("Successful Category Deleted");
}

export async function PUT (
  req: { json: () => any; },
  {
    params
  }: {
    params: { id: string };
  }
) {
  const data = await req.json();
  await prisma.category.update({
    where: {
      category_id: parseInt(params.id)
    },
    data: {
      name: data.name,
      description: data.description
    }
  });

  return NextResponse.json("Successful Category Updated");
}
