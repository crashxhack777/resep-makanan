import { Fragment } from 'react'
import { Recipe } from '@/types/recipe.type'
import { Image } from 'lucide-react';

import Link from 'next/link';

interface SeasonalProps {
  recipes: Recipe[];
  isPending: boolean;
}

const Seasonal = ({ recipes, isPending }: SeasonalProps) => {
  const SeasonalCard = (recipe: Recipe) => {
    return (
      <Link 
        href={`/recipe/${recipe.id}`} 
        className="sm:w-[500px] w-[350px] h-[120px] flex lg:items-center sm:items-left items-center gap-x-6 border rounded-lg p-4 shadow-sm hover:scale-[1.025] hover:shadow-md mt-5 duration-200"
      >
        <img src={recipe.image} alt="" className="border rounded-lg w-[120px]"/>
        <div className="flex flex-col gap-y-2 text-wrap">
          <h2 className="font-bold line-clamp-1">{recipe.name}</h2>
          <p className="text-sm text-gray-600 line-clamp-2">{recipe.description}</p>
        </div>
      </Link>
    )
  }
  
  const SeasonalCardSkeleton = () => {
    return (
      <div className="sm:w-[500px] w-[350px] h-[120px] flex lg:items-center sm:items-left items-center gap-x-6 border rounded-lg p-4 shadow-sm hover:scale-[1.025] hover:shadow-md mt-5 duration-200">
        <div className='border rounded-lg w-[120px] h-full flex items-center justify-center animate-pulse'>
          <Image color="#9CA3AF" className="w-[50px] h-[50px]" strokeWidth={1}/>
        </div>
        <div className="flex flex-col gap-y-2 w-full pr-10">
          <div className="bg-gray-400 h-4 w-[150px] rounded-lg animate-pulse mb-3"/>
          <div className="bg-gray-200 h-2 w-full rounded-lg animate-pulse"/>
          <div className="bg-gray-200 h-2 w-full rounded-lg animate-pulse"/>
        </div>
      </div>
    )
  }
  
  return (
    <Fragment>
      <div className="logos group relative overflow-hidden whitespace-nowrap pb-20 sm:[mask-image:_linear-gradient(to_right,_transparent_0,_white_128px,white_calc(100%-128px),_transparent_100%)]">
        <div className="animate-slide-left-infinite group-hover:animation-pause inline-block w-max md:pr-5 pr-4">
          <div className='grid grid-cols-3 md:gap-x-8 gap-x-8'>
            {
              isPending ? (
                Array.from({ length: 3 }).map((_, index) => (
                  <SeasonalCardSkeleton key={index} />
                ))
              ) : (
                recipes!.slice(0, 3).map((recipe) => (
                  <SeasonalCard key={recipe.id} {...recipe} />
                ))
              )
            }
          </div>
        </div>

        {/* <!-- Duplicate of the above for infinite effect --> */}
        <div className="animate-slide-left-infinite group-hover:animation-pause inline-block w-max">
          <div className='grid grid-cols-3 md:gap-x-8 gap-x-6'>
            {
              isPending ? (
                Array.from({ length: 3 }).map((_, index) => (
                  <SeasonalCardSkeleton key={index} />
                ))
              ) : (
                recipes!.slice(0, 3).map((recipe) => (
                  <SeasonalCard key={recipe.id} {...recipe} />
                ))
              )
            }
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Seasonal
