import {NextRequest, NextResponse} from "next/server";
import {prisma} from "@/lib/prisma";
import {ZodError} from "zod";


export async function GET (
  req: NextRequest,
  { params }: { params: { id: string }; }
) {
  try {
    //const uniqueOrder = await getUniqOrder(parseInt(params.id));

    return NextResponse.json("")
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
    
    return NextResponse.json("Successful Order Deleted")
  } catch (error) {
    console.error('Error', error)
    if (error instanceof ZodError) {
      return NextResponse.json({ error: (error as any).errors }, { status: 400 })
    }
    return NextResponse.json({ error: (error as any).errors }, { status: 500 })
  }
}