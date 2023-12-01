"use client";

import { useState } from "react";
import InputWithTItle from "./InputWithTitle";
import Button from "@/app/components/ui/Button";
import LinkButton from "@/app/components/ui/LinkButton";
import AddProductCheckBoxDropDown from "./AddProductCheckboxDropDown";
import Dropdown from "../ui/DropDown";
import AttributeDisplay from "./AttributeDisplay";
import { createAttributeSchema } from "@/app/(backend)/api/attribute/attribute.schema";
import { ZodError } from "zod";
import { createProductSchema } from "@/app/(backend)/api/products/product.schema";
import toast, { Toaster } from "react-hot-toast";

export interface Attribute {
  size: string;
  color: string;
  quantity: number;
  image: string;
}

export default function AddProductForm() {
  const [name, setProductName] = useState('')
  const [price, setPrice] = useState('')
  const [description, setDescription] = useState('')
  const [size, setSize] = useState('')
  const [color, setColor] = useState('')
  const [quantity, setQuantity] = useState(0)
  const [attributes, setAttributes] = useState<Attribute[]>([])
  const [selectedCategories, setSelectedCategories] = useState<number[]>([])
  const [imageFile, setImageFile] = useState(new FormData())

  const handleCategoriesChange = (categories: number[]) => {
    setSelectedCategories(categories);
  };

  const dismissToasts = () => {
    toast.dismiss();
  };

  const handleUploadImage = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "ecommerce-cloteck");
      setImageFile(formData);
    }
  };

  const handleAddAttribute = async () => {
    if (
      size !== "" &&
      color !== "" &&
      quantity !== 0 &&
      imageFile !== new FormData()
    ) {
      try {
        const imageUpdatedData = await fetch(
          "https://api.cloudinary.com/v1_1/dnfdovmde/image/upload",
          {
            method: "POST",
            body: imageFile,
          }
        );
        const uploadedImageData = await imageUpdatedData.json();
        const attribute = {
          size,
          color,
          quantity,
          image: uploadedImageData.secure_url,
        };
        createAttributeSchema.parse(attribute);
        setAttributes([...attributes, attribute]);
      } catch (error) {
        if (error instanceof ZodError) {
          dismissToasts();
          `${Object.values(error.issues).map((issue) => {
            toast.error(issue.path + ": " + issue.message, {
              position: "top-left",
            });
          })}`;
        }
      }
    } else {
      dismissToasts();
      toast.error("Please fill all the fields", { position: "top-left" });
    }
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;

    if (/^\d{0,8}\.?\d{0,2}$/.test(inputValue)) {
      setPrice(inputValue);
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const productData = {
      name,
      description,
      price: parseFloat(price),
      ProductCategory: selectedCategories.map((category_id) => ({
        category_id,
      })),
      Attribute: attributes.map((attribute) => ({
        size: attribute.size,
        color: attribute.color,
        quantity: attribute.quantity,
        image: attribute.image,
      })),
    };

    try {
      createProductSchema.parse(productData);
      const response = await fetch("/api/products/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(productData),
      });
      response.ok
        ? alert("Product added successfully")
        : alert("Product not added");
    } catch (error) {
      if (error instanceof ZodError) {
        dismissToasts();
        `${Object.values(error.issues).map((issue) => {
          toast.error(issue.path + ": " + issue.message, {
            position: "top-left",
          });
        })}`;
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="pt-10 md:px-10 lg:px-28">
        <div className="grid grid-rows-3 grid-cols-1 sm:grid-cols-3 sm:grid-rows-1 sm:gap-x-4">
          <InputWithTItle
            title="Product Name"
            placeholder="Ej. T-shirt ALC"
            value={name}
            onChange={(e: any) => setProductName(e.target.value)}
            className="sm:min-h-[57px] min-h-[80px] sm:max-h-[57px] max-h-[80px]"
          />
          <InputWithTItle
            title='Price'
            placeholder='Ej. 163.00'
            value={price === '' ? "" : price.toString()}
            onChange={(e: any) => handlePriceChange(e)}
            className='sm:min-h-[57px] min-h-[80px] sm:max-h-[57px] max-h-[80px]'
          />
          <AddProductCheckBoxDropDown
            selectedCategories={selectedCategories}
            onChange={handleCategoriesChange}
          />
        </div>
        <InputWithTItle
          title="Description"
          placeholder="Ej. T-shirt ALC is the new mode of T-shirts and now is available in Cloteck"
          value={description}
          onChange={(e: any) => setDescription(e.target.value)}
          className="3xl:min-h-[57px] lg:min-h-[80px] md:min-h-[120px] sm:min-h-[120px] min-h-[230px] 3xl:max-h-[57px] lg:max-h-[80px] md:max-h-[120px] sm:max-h-[120px] max-h-[230px]"
        />
        <div className="grid md:grid-cols-4 grid-cols-2 md:grid-rows-1 grid-rows-2 gap-x-4">
          <InputWithTItle
            title="Size"
            placeholder="Ej. XL"
            value={size}
            onChange={(e: any) => setSize(e.target.value)}
            className="sm:min-h-[57px] min-h-[80px] sm:max-h-[57px] max-h-[80px]"
          />
          <InputWithTItle
            title='Color'
            placeholder='Ej. #FFFFFF'
            value={color}
            onChange={(e: any) => setColor(e.target.value)}
            className="sm:min-h-[57px] min-h-[80px] sm:max-h-[57px] max-h-[80px]"
          />
          <InputWithTItle
            title="Quantity"
            placeholder="Ej. 54"
            value={quantity === 0 ? "" : quantity.toString()}
            onChange={(e: any) => setQuantity(parseInt(e.target.value) || 0)}
            className="sm:min-h-[57px] min-h-[80px] sm:max-h-[57px] max-h-[80px]"
          />
          <div>
            <h2 className="font-semibold lg:text-xl md:text-lg w-full mb-5 mt-5">
              Image
            </h2>
            <input
              className="sm:min-h-[57px] min-h-[80px] sm:max-h-[57px] max-h-[80px] p-4 bg-slate-300 bg-opacity-50 w-full text-sm text-gray-900 border rounded-lg hover:bg-slate-400 hover:bg-opacity-50 cursor-pointer"
              type="file"
              accept="image/png"
              onChange={handleUploadImage}
            />
          </div>
          {attributes.length === 0 ? (
            <Button
              onClick={handleAddAttribute}
              text="Add Attribute +"
              className="rounded-full md:col-span-4 col-span-2 mt-5 bg-slate-400 hover:bg-slate-500"
              type="button"
            />
          ) : (
            <div className="md:col-span-4 col-span-2">
              <Button
                onClick={handleAddAttribute}
                text="Add Attribute +"
                className="rounded-t-3xl w-full mt-5 bg-slate-400 hover:bg-slate-500"
                type="button"
              />
              <Dropdown
                classnameButton="w-full p-3 rounded-b-3xl text-center"
                text="See your actual attributes"
              >
                {attributes.map((attribute, i) => {
                  return (
                    <AttributeDisplay
                      key={i}
                      color={attribute.color}
                      image={attribute.image}
                      quantity={attribute.quantity}
                      size={attribute.size}
                    />
                  );
                })}
              </Dropdown>
            </div>
          )}
        </div>
        <div className="flex justify-between pt-20">
          <LinkButton
            text="Back"
            className="bg-black text-white text-xl px-10 py-3 rounded-sm"
            href="/admin/product"
          />
          <Button
            text="Add"
            type="submit"
            className="bg-black text-white text-xl px-10 py-3 rounded-sm"
          />
        </div>
      </div>
      <Toaster reverseOrder/>
    </form>
  );
}
