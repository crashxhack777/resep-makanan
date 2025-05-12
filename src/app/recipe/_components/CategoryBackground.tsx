import { useSearchParams } from 'next/navigation';

const CategoryBackground = () => {
  const searchParams = useSearchParams();
  const category = searchParams.get('category')?.toString() ?? 'recipe';
  
  console.log(category);  
  
  return (
    <img src={`/images/${category}_bg.jpg`} alt="" className="h-[300px] w-full object-cover mb-14"/>
  )
}

export default CategoryBackground
