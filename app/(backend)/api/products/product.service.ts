'use server'

import { Prisma, Product } from '@prisma/client'
import { prisma } from '@/lib/prisma'

export const createProduct = async (input: Prisma.ProductCreateInput) => {
  return await prisma.product.create({
    data: input
  }) as Product
}

export const findProduct = async (
  where: Partial<Prisma.ProductWhereInput>,
  select?: Prisma.ProductSelect
) => {
  return await prisma.product.findFirst({
    where,
    select
  }) as Product
}

export const findUniqueProduct = async (
  where: Prisma.ProductWhereUniqueInput,
  select?: Prisma.ProductSelect
) => {
  return await prisma.product.findUnique({
    where,
    select
  }) as Product
}

export const findAllProducts = async (
  page: number, limit: number
) => {
  const take = limit || 10
  const skip = (page - 1) * limit
  const products = await prisma.product.findMany({
    skip,
    take,
    include: {
      ProductCategory: {
        include: {
          category: true
        }
      },
      Attribute: {
        include: {
          size: true,
          color: true,
        }
      }
    },
    orderBy: {
      name: 'asc'
    }
  }) as Product[]
  prisma.$disconnect()
  return products
}

export const updateProduct = async (
  where: Prisma.ProductWhereUniqueInput,
  data: Prisma.ProductUpdateInput
) => {
  return await prisma.product.update({
    where,
    data
  }) as Product
}

export const deleteProduct = async (
  where: Prisma.ProductWhereUniqueInput
) => {
  return await prisma.product.delete({
    where
  }) as Product
}
