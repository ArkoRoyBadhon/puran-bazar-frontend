import { useQuery } from '@tanstack/react-query';
import { data } from 'autoprefixer';
import React from 'react';


const AdvertisedItem = () => {
    const {data: items =[]} = useQuery({
        queryKey: ['data'],
        queryFn: async () => {
            const res = await fetch('fridge.json')
            const data = res.json();
            return data
        }
    })

    return (
        <div className='max-w-screen-xl mx-auto'>
            {
                items?.map((d,i) =>
                    <p key={i}>{d.name}</p>
                )
            }
        </div>
    );
};

export default AdvertisedItem;