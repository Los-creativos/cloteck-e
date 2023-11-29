'use client'

import {useState} from "react";
import {Order} from "@prisma/client";

export default function ShopCartItemDisplay({
  Image,
  Title,
  Description,
  Color
}: {
  Image: string,
  Title: string,
  Description: string,
  Color: string
}) {
  const [orders, setOrders] = useState<Order[]>([])

  return (
    <div>
      <div>{Image}</div>
      <div>{Title}</div>
      <div>{Description}</div>
      <div>{Color}</div>
      <div>
      </div>
    </div>
  )
}