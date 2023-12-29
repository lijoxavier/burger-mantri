import { useEffect, useState } from 'react';
// import { burgers } from '../../data';
import ProductGridItem from './ProductGridItem';
import { useLoaderData } from 'react-router-dom';

const ProductGrid = () => {
  // const [burgers, setBurgers] = useState([]);
  const burgers = useLoaderData();

  // useEffect(() => {
  //   const fetchData = async() => {
  //     const res = await fetch('https://burgermantri.onrender.com/data');
  //     const data = await res.json();
  //     // console.log(data);
  //     setBurgers(data);
  //   };

  //   fetchData();
  // }, []);

  return (
    <main>
      <div className="container">
        <div className="productGrid">
          {burgers.map((burger) => {
            return <ProductGridItem key={burger.id} data={burger} />
          })}
        </div>
      </div>
    </main>
  );
};

export default ProductGrid;
