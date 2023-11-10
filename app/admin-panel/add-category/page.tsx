import Button from "@/app/components/Button";
import InputWithTItle from "@/app/components/InputWithTitle";

export default function AddCategory() {
  return (
    <div className="p-10 ml-10">
      <h1 className="font-bold text-4xl">ADD CATEGORY</h1>
      <div className="pt-10 px-28">
        <InputWithTItle title='Category Name' />
        <InputWithTItle title='Description' className="h-36" />
        <div className="flex justify-end pt-20">
          <Button text='Add' type='submit' className='text-xl px-10 py-3 rounded-sm'/>
        </div>
      </div>
    </div>
  )
}