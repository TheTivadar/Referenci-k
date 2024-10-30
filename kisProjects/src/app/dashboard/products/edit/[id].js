"use client"
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const EditItem = () => {
  const router = useRouter();
  const { id } = router.query;
  const [item, setItem] = useState(null);

  useEffect(() => {
    if (id) {
      // Adatok lekérése a megadott id alapján
      fetch(`https://test.gatium.hu/api/items/${id}`)
        .then(response => response.json())
        .then(data => setItem(data))
        .catch(error => console.error('Error fetching data:', error));
    }
  }, [id]);

  if (!id) return <div>Loading...</div>;

  return (
    <div>
      <h1>Edit Item {id}</h1>
      {item ? (
        <div>
          <p>Name: {item.name}</p>
          <p>Category: {item.category_id}</p>
          {/* Add other item details here */}
        </div>
      ) : (
        <p>Loading item details...</p>
      )}
    </div>
  );
};

export default EditItem;
