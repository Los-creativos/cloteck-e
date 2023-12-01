import { Prisma, Order } from '@prisma/client';
import { prisma } from '@/lib/prisma';

export const createOrder = async (input: Prisma.OrderCreateInput) => {
  return await prisma.order.create({
    data: input
  }) as Order;
};

export const findOrder = async (
  where: Partial<Prisma.OrderWhereInput>,
  select?: Prisma.OrderSelect
) => {
  return await prisma.order.findFirst({
    where,
    select
  }) as Order;
};

export const findAllOrders = async (
  page: number, limit: number
) => {
  const take = limit || 10;
  const skip = (page - 1) * limit;
  return await prisma.order.findMany({
    skip,
    take
  }) as Order[];
};
