import Button from "@/app/components/Button";
import InputWithTItle from "@/app/components/InputWithTitle";
import Footer from "@/app/components/footer";
import Link from "next/link";

export default function AddCategory() {
  return (
    <div className="p-10 ml-10">
      <h1 className="font-bold text-4xl">ADD CATEGORY</h1>
      <div className="pt-10 px-10 md:px-28">
        <InputWithTItle title='Category Name' />
        <InputWithTItle title='Description' />
        <div className="flex justify-between pt-20">
          <Link href='/admin-panel/category-list'>
            <Button text='Back' className='text-xl px-10 py-3 rounded-sm' />
          </Link>
          <Button text='Add' type='submit' className='text-xl px-10 py-3 rounded-sm'/>
        </div>
      </div>
    </div>
  )
}