import { useSearchParams } from 'next/navigation';
import { Fragment } from 'react';
import { Playfair_Display } from 'next/font/google';

const playfair_display = Playfair_Display({ weight: "700", subsets: ["latin"] });

const CategoryTitle = () => {
  const searchParams = useSearchParams();
  const category = searchParams.get('category')?.toString() ?? 'recipes';
  
  console.log(category);  
  
  return (
    <Fragment>
      <h1 className={`sm:text-5xl text-3xl text-black font-bold px-4 tYext-center ${playfair_display.className}`}>Discover {category.charAt(0).toUpperCase() + category.slice(1)}</h1>
      {
        category == 'recipe' ? (
          <p className="text-gray-700 px-4 text-center">Explore a wide variety of recipes from different categories</p>
        ) : (
          <p className="text-gray-700 px-4 text-center">Explore a wide variety of {category} recipes</p>
        )
      }
    </Fragment>
  )
}

export default CategoryTitle
