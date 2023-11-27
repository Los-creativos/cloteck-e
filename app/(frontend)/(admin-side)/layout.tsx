import { ReactNode } from 'react'
import Navbar from '@/app/components/ui/Navbar'

export default function AdminLayout ({ children }: { children: ReactNode }) {
  return (
    <div>
      <Navbar admin />
      {children}
    </div>
  )
}
