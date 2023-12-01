'use client'
import { UserCookies } from '@/app/types';
import { getTokenCookie } from '@/app/utils/CookieManagement';
import { VerifyJwt } from '@/app/utils/JwtUtils';
import { Customer } from '@prisma/client';
import React, { ChangeEvent, useEffect, useState } from 'react';

export default function UserPreferencesPage() {
  const [selectedRegion, setSelectedRegion] = useState('Cochabamba');
  const [userData, setUserData] = useState<Customer>()

  useEffect(() => {
    const fetchTokenCookie = async () => {
      const token = await getTokenCookie();
      if (!token) return;
      console.log(token.value);
      
      const data = await VerifyJwt(token?.value as string) as Customer
      console.log(data);
      
      setUserData(data)      
    
    }
    fetchTokenCookie();
  }, []);
  
  function handleRegionChange(event: ChangeEvent<HTMLSelectElement>): void {
    setSelectedRegion(event.target.value);
  }

  return (
    <div>

      <h2>Región</h2>
      <select value={selectedRegion} onChange={handleRegionChange}>
        <option value="" disabled>Select a department</option>
        <option value="La Paz">La Paz</option>
        <option value="Cochabamba">Cochabamba</option>
        <option value="Santa Cruz">Santa Cruz</option>
        <option value="Beni">Beni</option>
        <option value="Pando">Pando</option>
        <option value="Oruro">Oruro</option>
        <option value="Potosi">Potosi</option>
        <option value="Chuquisaca">Chuqisaca</option>
        <option value="Tarija">Tarija</option>
      </select>
      {selectedRegion && (
        <div>
          <p>Selected Department: {selectedRegion}</p>
        </div>
       )}
      
      <div>
        <h2>Información del Usuario</h2>
        <p>Nombre de usuario: {userData?.name}</p>
        <p>Email de usuario: {userData?.email}</p>
       
      </div>

    </div>
  );
}
