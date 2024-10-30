import Image from 'next/image';
import React from 'react';

const ItemCard = () => {
  return (
    <div className="flex items-center gap-4 p-4 bg-gray-100 rounded-lg shadow-md w-full">
      <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" />
      

      <Image
        width={400}
        height={400} 
        src="https://via.placeholder.com/50" 
        alt="Item" 
        className="w-8 h-8 object-cover rounded-sm" 
      />
      
        <span className="font-semibold text-gray-800">Item Title</span>
        <span className="text-sm text-gray-500">Status: Available</span>
    </div>
  );
};

export default ItemCard;
