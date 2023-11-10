export default function ProductDisplay({
  ProductName = 'PRODUCT NAME',
  Size = 'SIZE',
  Color = 'COLOR',
  Price = 'PRICE',
  Category = 'CATEGORY',
  Edit = 'EDIT',
  Remove = 'REMOVE'
}: {
  ProductName?: String;
  Size?: String;
  Color?: String | React.ReactNode;
  Price?: String;
  Category?: String;
  Edit?: String | React.ReactNode;
  Remove?: String | React.ReactNode;
}) {
  return (
    <div className='grid grid-cols-7 gap-4 mx-auto text-center font-semibold text-lg'>
      <div className='flex col-span-1 justify-center items-center'>{ProductName}</div>
      <div className='flex col-span-1 justify-center items-center'>{Size}</div>
      <div className='flex col-span-1 justify-center items-center'>{Color}</div>
      <div className='flex col-span-1 justify-center items-center'>{Price}</div>
      <div className='flex col-span-1 justify-center items-center'>{Category}</div>
      <div className='flex col-span-1 justify-center items-center'>{Edit}</div>
      <div className='flex col-span-1 justify-center items-center'>{Remove}</div>
    </div>
  );
}
