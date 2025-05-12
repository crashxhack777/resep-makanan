import { useSearchParams } from 'next/navigation';
import { RecipeList } from "@/components";
import { Recipe } from '@/types/recipe.type';

interface FilteredRecipeListProps {
  allRecipes: Recipe[];
  displayedRecipes: Recipe[];
  isPending: boolean;
}

const FilteredRecipeList = ({ allRecipes, displayedRecipes, isPending }: FilteredRecipeListProps) => {
  const searchParams = useSearchParams();
  const search = searchParams.get('search')?.toString() ?? '';
  const category = searchParams.get('category')?.toString() ?? '';

  if (!allRecipes || !displayedRecipes) {
    return <RecipeList displayLoadingOnly={true} />;
  }

  const filteredRecipes = allRecipes.filter((recipe) => {
    const nameMatch = search ? recipe.name.toLowerCase().includes(search) : true;
    const categoryMatch = category ? recipe.category.toLowerCase() === category : true;
    return nameMatch && categoryMatch;
  });

  return (
    <RecipeList 
      recipes={search || category ? filteredRecipes : displayedRecipes}
      isPending={isPending}
    />
  );
}

export default FilteredRecipeList;