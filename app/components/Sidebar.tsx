import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="absolute">
      <div className="flex flex-col w-64 h-screen px-10 py-8 bg-white border-r">
        <Link href='/admin-panel/product-list'>
          <h3 className="font-semibold text-xl mt-10">PRODUCT LIST</h3>
        </Link>
        <Link href='/admin-panel/category-list'>
          <h3 className="font-semibold text-xl mt-10">CATEGORY LIST</h3>
        </Link>
      </div>
    </div>
  )
}