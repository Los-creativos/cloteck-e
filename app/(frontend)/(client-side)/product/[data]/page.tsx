"use client";

import React, { useState } from "react";
import Image from "next/image";
import Button from "@/app/components/ui/Button";
import ColorDisplay from "@/app/components/admin/ColorDisplay";

const ProductDetailPage = ({ params }: { params: { data: string } }) => {
  const [idSelected, setId] = useState<number>(0);
  const [sizeSelected, setSizeId] = useState<number>();
  const [quantity, setQuantity] = useState<number>(0);
  const [maxQuantity, setMaxQuantity] = useState<number>(0)
  const productInfo = JSON.parse(decodeURIComponent(params.data));

  return (
      <form className="grid grid-cols-1 md:grid-cols-2 p-4 md:p-8">
        <section className="flex justify-center p-4 h-full w-full">
          <Image
              alt={productInfo.name}
              src={productInfo.Attribute[idSelected ? idSelected : 0].image}
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
              {productInfo.Attribute.map((attribute: any, i: number) => {
                return (
                    <>
                      {attribute.size.size_id === sizeSelected ? (
                          <Button
                              type="button"
                              key={i}
                              className="bg-orange-200 border border-black rounded-none"
                              onClick={() => setSizeId(attribute.size.size_id)}
                          >
                            {attribute.size.name}
                          </Button>
                      ) : (
                          <Button
                              type="button"
                              key={i}
                              className="hover:bg-orange-200 border border-black rounded-none"
                              onClick={() => setSizeId(attribute.size.size_id)}
                          >
                            {attribute.size.name}
                          </Button>
                      )}
                    </>
                );
              })}
            </div>
          </section>
          <section>
            <p className="mb-3">COLOR</p>
            <div className="grid sm:grid-cols-10 grid-cols-5 sm:grid-rows-1 grid-flow-row gap-2 place-content-center">
              {productInfo.Attribute.map((attribute: any, i: number) => {
                return (
                    <Button
                        type="button"
                        key={i}
                        className="bg-transparent items-center"
                        onClick={() => setId(i)}
                    >
                      <ColorDisplay hexColor={attribute.color.name} diameter={30} />
                    </Button>
                );
              })}
            </div>
          </section>
          <section className="my-3">
            <p>QUANTITY</p>
            <div className="flex w-full gap-4 md:place-content-start place-content-center">
              <Button
                  type="button"
                  text={"-"}
                  className="border hover:bg-slate-200"
                  onClick={() => setQuantity((prevQuantity) => Math.max(prevQuantity - 1, 1))}

              />
              <input
                  type="number"
                  value={quantity || 1}
                  min={1}
                  max={productInfo.Attribute[idSelected !== undefined ? idSelected : 0]?.quantity || 1}
                  className="flex w-20 text-center [-moz-appearance:_textfield] [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
                  onChange={(e) => {
                    const newValue = parseInt(e.target.value)
                    setQuantity(newValue > productInfo.Attribute[idSelected !== undefined ? idSelected : 0]?.quantity ? productInfo.Attribute[idSelected !== undefined ? idSelected : 0]?.quantity : Math.max(newValue, 1));
                  }}
              />
              <Button
                  type="button"
                  text={"+"}
                  className="border hover:bg-slate-200"
                  onClick={() => setQuantity((prevQuantity) => Math.min(prevQuantity + 1, productInfo.Attribute[idSelected !== undefined ? idSelected : 0]?.quantity || 1))}
              />
            </div>
          </section>
          <Button className="w-full mb-5 bg-orange-200 hover:bg-orange-300 hover:bg-opacity-80 rounded-none">
            ADD TO CART
          </Button>
          <p>DESCRIPTION:</p>
          <p>{productInfo.description}</p>
        </section>
      </form>
  );
};

export default ProductDetailPage;
