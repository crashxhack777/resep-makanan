"use client";

import { Error } from "@/components";
import { Recipe } from "@/types/recipe.type";
import { useFetchRecipes } from "@/hooks/recipe.hook";
import { useState, useEffect, Suspense } from "react";

import CategoryBackground from "./_components/CategoryBackground";
import CategoryTitle from "./_components/CategoryTitle";
import FilteredRecipeList from "./_components/FilteredRecipeList";
import Search from "./_components/Search";

const RecipePage = () => {
  const {
    data: recipes,
    isPending,
    error
  } = useFetchRecipes();

  const [recipeRange, setRecipeRange] = useState(12);
  const [displayedRecipes, setDisplayedRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    if (recipes) {
      setDisplayedRecipes(recipes.slice(0, recipeRange));
    }
  }, [recipes, recipeRange]);

  const handleShowMore = () => {
    if (recipes) {
      setRecipeRange(prevRange => prevRange + 12);
    }
  }

  if (error) {
    return <Error />
  }

  return (
    <main className="mx-auto">
      <div className="animate-fade-down-enter w-full h-fit relative">
        <div className="absolute left-1/2 -translate-x-1/2 top-16 flex flex-col items-center gap-y-4 w-full px-6">
          <Suspense fallback={<div>Loading ...</div>}>
            <CategoryTitle />
          </Suspense>
          <Suspense fallback={<div>Loading ...</div>}>
            <Search />
          </Suspense>
        </div>
        <Suspense fallback={<div>Loading ...</div>}>
          <CategoryBackground />
        </Suspense>
      </div>
      <div className="container mx-auto px-4">
        <Suspense>
          <FilteredRecipeList allRecipes={recipes!} displayedRecipes={displayedRecipes} isPending={isPending} />
        </Suspense>
        <div className="w-ful flex items-center justify-center my-10">
          <button 
            className="bg-white px-4 py-3 border border-gray-300 mx-auto font-bold rounded-xl shadow-sm hover:bg-gray-50"
            onClick={handleShowMore}
          >
            Show More
          </button>
        </div>
      </div>
    </main>
  )
}

export default RecipePage;
