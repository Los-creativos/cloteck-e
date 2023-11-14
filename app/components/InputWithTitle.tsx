export default function InputWithTItle({
  title,
  placeholder,
  type,
  value,
  onChange,
  className
}:{
  title: string,
  placeholder?: string,
  type?: string,
  value?: string,
  onChange?: any
  className?: string
}) {
  return (
    <div className='flex flex-col'>
      <h2 className='font-semibold text-xl mb-5 mt-5'>
        {title}
      </h2>
      <input placeholder={placeholder} className={`bg-slate-300 opacity-50 p-4 rounded-sm ${className}`} type={type} />
    </div>
  )
}