'use client'
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
export const Navbar = () => {
    const[search, setSearch] = useState('');
    const router = useRouter();

    const handleSubmit = () =>{
        const queryString = encodeURIComponent(search);
        router.push(`/filter-events?q=${queryString}`);
    }


    return(
        <nav className='bg-blue mx-auto px-6 absolute w-full top-0 h-16 flex items-center'>
            <Image className="mr-[6em]"
                src="/logo-gustavo.png" alt="logo" width={200} height={200} />
            <div className='flex items-center w-[50vw]'>
                
            </div>
        </nav>
    );
};