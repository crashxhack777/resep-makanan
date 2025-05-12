import { Fragment } from 'react'
import Link from 'next/link';

const iconNames = [
  'Baked Goods',
  'Beverage',
  'Dessert',
  'Fried or Grilled',
  'Main Dish',
  'Salad',
  'Seafood',
  'Soup or Stew'
];

const CategoryCard = ({ name, link }: { name: string, link: string }) => {
  return (
    <Link href={link} className='hover:bg-slate-50 flex sm:flex-col flex-row items-center sm:gap-x-0 gap-x-4 gap-y-5 border 2xl:px-10 xl:px-6 sm:px-0 px-4 py-6 rounded-xl shadow-sm'>
      <img src={`icons/${name}.png`} alt="" className='xl:px-4 lg:px-8 md:px-16 sm:px-14 sm:w-fit w-[40px]'/>
      <p className='text-center text-sm font-semibold text-gray-700'>{name}</p>
    </Link>
  )
}

const Categories = () => {
  return (
    <Fragment>
      <div className='grid lg:grid-cols-8 sm:grid-cols-4 grid-cols-2 xl:gap-10 xl:gap-8 md:gap-6 gap-4 mb-20'>
        {
          iconNames.map((name, index) => (
            <CategoryCard 
              key={index} 
              name={name} 
              link={`/recipe?category=${name.toLowerCase().replace(/ /g, '+')}`}
            />
          ))
        }
      </div>
    </Fragment>
  )
}

export default Categories
