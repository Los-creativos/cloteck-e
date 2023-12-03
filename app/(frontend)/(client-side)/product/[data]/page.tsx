'use client'

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Button from "@/app/components/ui/Button";
import ColorDisplay from "@/app/components/admin/ColorDisplay";
import {createOrderProduct} from "@/app/(backend)/api/order/order.service";
import {getTokenCookie} from "@/app/utils/CookieManagement";
import {VerifyJwt} from "@/app/utils/JwtUtils";
import {Customer} from "@prisma/client";
import {useRouter} from "next/navigation";

const ProductDetailPage = ({ params }: { params: { data: string } }) => {
  const productInfo = JSON.parse(decodeURIComponent(params.data));
  const [idSelected, setId] = useState<number>(0);
  const [sizeSelected, setSizeId] = useState<number>(0);
  const [quantity, setQuantity] = useState<number>(1);
  const [uniqueSizes, setUniqueSizes] = useState<string[]>([]);
  const [uniqueColors, setUniqueColors] = useState<string[]>([]);
  const [colorImages, setColorImages] = useState<string[]>([]);
  const router = useRouter()

  useEffect(() => {    
    const sizes = productInfo.Attribute
      .filter((att: any) => att.color.name === uniqueColors[idSelected])
      .map((att: any) => att.size.name);
    setUniqueSizes(sizes);
  }, [idSelected, productInfo.Attribute, uniqueColors]);

  useEffect(() => {
    const colors = productInfo.Attribute.map((att: any) => att.color.name);
    const uniqueColorSet = new Set<string>(colors);
    setUniqueColors(Array.from(uniqueColorSet));

    const colorImageMap: Record<string, string> = {};
    colors.forEach((color: string, index: number) => {
      if (!(color in colorImageMap)) {
        colorImageMap[color] = productInfo.Attribute[index].image.trim();
      }
    });
    setColorImages(Object.values(colorImageMap));
  }, [productInfo.Attribute]);

  const setImage = (i: number) => {
    setId(i);
  };

  const handleSizeClick = (sizeId: number) => {
    setSizeId(sizeId);
  };

  const addToCartHandle = async (e: any) => {
    e.preventDefault()

    console.log("ADD TO CARTT")
    try {
      const token = await getTokenCookie()
      const data = await VerifyJwt(token?.value as string) as Customer
      if (!data) {
        router.push('/login')
        return;
      }
      console.log("Inside")
      const response = await createOrderProduct( 1, "asdas", "asdasd" , 123, "adsd")
      console.log("Inside222")
      if (response) {
        alert("Product Added to Shop Cart")
      } else {
        alert("Product Not Added, Please Try Again")
      }
    } catch (error) {
      console.error(error)
    }

  }

  return (
    <form onSubmit={addToCartHandle}
      className="grid grid-cols-1 md:grid-cols-2 p-4 md:p-8">
      <section className="flex justify-center p-4 h-full w-full">
        <Image
          alt={productInfo.name}
          src={colorImages[idSelected]}
          width={450}
          height={450}
          className="max-h-full w-auto"
        />
      </section>
      <section className="font-normal p-4">
        <header className="font-semibold text-xl">{productInfo.name}</header>
        <p>{productInfo.price} BOB</p>
        <section className="my-3">
          <p className="mb-3">SIZE</p>
          <div className="grid grid-cols-3 sm:grid-cols-6 sm:grid-rows-1 grid-flow-row gap-5">
            {uniqueSizes.map((sizeName: string, index: number) => (
              <Button
                type="button"
                key={index}
                className={`${
                  sizeSelected === index ? "bg-orange-200" : "hover:bg-orange-200"
                } border border-black rounded-none`}
                onClick={() => handleSizeClick(index)}
              >
                {sizeName}
              </Button>
            ))}
          </div>
        </section>
        <section>
          <p className="mb-3">COLOR</p>
          <div className="grid sm:grid-cols-10 grid-cols-5 sm:grid-rows-1 grid-flow-row gap-2 place-content-center">
            {uniqueColors.map((colorName: string, index: number) => (
              <Button
                type="button"
                key={index}
                className={`${
                  idSelected === index ? "bg-orange-200" : "hover:bg-orange-200"
                } border border-black rounded-none`}
                onClick={() => setImage(index)}
              >
                <div
                  style={{ backgroundColor: colorName }}
                  className="flex p-0.5 justify-center items-center w-auto border-2 rounded-full"
                >
                  <ColorDisplay hexColor={colorName} diameter={30} />
                </div>
              </Button>
            ))}
          </div>
        </section>
        <section className="my-3">
        <p>QUANTITY</p>
          <div className="flex w-full gap-4 md:place-content-start place-content-center">
            <Button
              type="button"
              text={"-"}
              className="border hover:bg-slate-200"
              onClick={() =>
                setQuantity((prevQuantity) =>
                  Math.max(prevQuantity - 1, 1)
                )
              }
            />
            <input
              type="number"
              value={quantity}
              min={1}
              max={
                productInfo.Attribute[idSelected]?.quantity || 1
              }
              className="flex w-20 text-center [-moz-appearance:_textfield] [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
              onChange={(e) => {
                const newValue = parseInt(e.target.value);
                setQuantity(
                  newValue >
                    productInfo.Attribute[idSelected]?.quantity
                    ? productInfo.Attribute[idSelected]?.quantity
                    : Math.max(newValue, 1)
                );
              }}
            />
            <Button
              type="button"
              text={"+"}
              className="border hover:bg-slate-200"
              onClick={() =>
                setQuantity((prevQuantity) =>
                  Math.min(
                    prevQuantity + 1,
                    productInfo.Attribute[idSelected]?.quantity || 1
                  )
                )
              }
            />
          </div>
        </section>
        <Button
          type='submit'
          className="w-full mb-5 bg-orange-200 hover:bg-orange-300 hover:bg-opacity-80 rounded-none">
          ADD TO CART
        </Button>
        <p>DESCRIPTION:</p>
        <p>{productInfo.description}</p>
      </section>
    </form>
  );
};

export default ProductDetailPage;
