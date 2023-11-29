import {NextRequest, NextResponse} from "next/server";
import {prisma} from "@/lib/prisma";
import {ZodError} from "zod";
import {deleteOrder, getUniqOrder, updateOrder} from "@/app/(backend)/api/order/order.service";

export async function GET (
  req: NextRequest,
  { params }: { params: { id: string }; }
) {
  try {
    const uniqueOrder = await getUniqOrder(parseInt(params.id));

    return NextResponse.json(uniqueOrder)
  } catch (error) {
    return NextResponse.json({error}, { status: 500})
  }

}

export async function PUT (
  req: NextRequest,
  { params }: { params: { id: string }; }
){
  try {
    const data = await req.json()
    await updateOrder(parseInt(params.id), data.product_quantity)
    return NextResponse.json("Successful order update")
  } catch (error) {

    console.error('Error', error)
    if (error instanceof ZodError) {
      return NextResponse.json({ error: (error as any).errors }, { status: 400 })
    }
    return NextResponse.json({ error: (error as any).errors }, { status: 500 })
  }
}

export async function DELETE (
  req: NextRequest,
  { params }: { params: { id: string }}
) {
  try {
    await deleteOrder(parseInt(params.id))
    return NextResponse.json("Successful Order Deleted")
  } catch (error) {
    console.error('Error', error)
    if (error instanceof ZodError) {
      return NextResponse.json({ error: (error as any).errors }, { status: 400 })
    }
    return NextResponse.json({ error: (error as any).errors }, { status: 500 })
  }
}