export default function InputWithTItle ({
  title,
  placeholder,
  value,
  onChange,
  className
}:{
  title: string,
  placeholder?: string,
  value?: string,
  onChange?: any
  className?: string
}) {
  return (
    <div className='flex flex-col'>
      <h2 className='font-semibold lg:text-xl md:text-lg mb-5 mt-5'>
        {title}
      </h2>
      <textarea onChange={onChange} value={value} placeholder={placeholder} className={`bg-slate-300 bg-opacity-50 p-4 rounded-sm hover:bg-slate-400 hover:bg-opacity-50 ${className}`} />
    </div>
  )
}
