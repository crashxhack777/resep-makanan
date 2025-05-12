"use client";

import { Playfair_Display } from "next/font/google"
import { Error, RecipeList, Title } from "@/components"
import { useParams } from "next/navigation"
import { 
  useFetchRecipe, 
  useFetchRecipes 
} from "@/hooks/recipe.hook";

const playfair_display = Playfair_Display({ weight: "700", subsets: ["latin"] })

const RecipeDetailsPage = () => {
  const { id } = useParams(); 

  const {
    data: recipes,
    isPending: isRecipesPending,
    error: recipesError
  } = useFetchRecipes();

  const {
    data: recipe,
    isPending: isRecipePending,
    error: recipeError
  } = useFetchRecipe(id.toString());

  if (recipeError) { 
    return (
      <main className="container px-2 mx-auto mb-20">
        <h1 className={`text-5xl font-bold mb-6 ${playfair_display.className}`}>Recipe not found</h1>
      </main>
    )
  }

  if (recipesError) {
    <Error />
  }

  if (isRecipePending) {
    return (
      <div className="w-full sm:flex items-center gap-x-20 border-t lg:pt-20 pt-10 container mx-auto mb-20 px-4">
        <div className="w-full">
          <div className="h-4 bg-gray-200 animate-pulse w-[100px] mb-4 rounded-full"/>
          <div className="h-8 bg-gray-400 animate-pulse w-[200px] mb-10 rounded-full"/>
          <div className="h-4 bg-gray-200 animate-pulse w-full mb-4 rounded-full"/>
          <div className="h-4 bg-gray-200 animate-pulse w-full mb-4 rounded-full"/>
          <div className="h-4 bg-gray-200 animate-pulse w-full mb-4 rounded-full"/>
          <div className="h-4 bg-gray-200 animate-pulse w-full mb-4 rounded-full"/>
          <div className="flex items-center gap-x-4 mb-10 mt-10">
            <div className="h-6 bg-gray-200 w-[100px] rounded-full animate-pulse"/>
            <div className="h-6 bg-gray-200 w-[100px] rounded-full animate-pulse"/>
            <div className="h-6 bg-gray-200 w-[100px] rounded-full animate-pulse"/>
          </div>
          <div className="flex flex-col gap-y-4 mb-10">
            {
              Array.from({ length: 6 }).map((_, index) => (
                <div key={index} className="h-4 bg-gray-200 sm:w-[500px] w-full rounded-full animate-pulse rounded-full"/>
              ))
            }
          </div>
        </div>
        <div className="w-full">
          <div className="h-[500px] bg-gray-200 animate-pulse w-full mb-8 rounded-lg"/>
        </div>
      </div>
    )
  }

  return (
    <main className="container px-2 mx-auto mb-20 animate-fade-up-enter px-4">
      <div className="w-full lg:flex items-center gap-x-20 lg:border-t lg:pt-20 pt-10">
        <div className="w-full">
          <p className="font-semibold text-[#FF6A3A] mb-2">{recipe!.category}</p>
          <h1 className={`sm:text-5xl text-3xl font-bold mb-6 ${playfair_display.className}`}>{ recipe!.name }</h1>
          <p className="mb-6">{recipe!.description}</p>
          <div className="flex items-center gap-x-4 mb-5">
            {
              recipe!.flavors?.map((flavor, index) => (
                <span key={index} className="bg-gray-100 text-gray-800 px-4 py-1 rounded-full font-bold">{flavor}</span>
              ))
            }
          </div>
          <ul className="list-disc ml-5 mb-10">
            {
              recipe!.ingredients?.map((ingredient, index) => (
                <li key={index} className="mb-2">{ingredient}</li>
              ))
            }
          </ul>
        </div>
        <div className="w-full">
          <img src={recipe!.image} className="rounded-lg border mb-8" alt="" />
        </div>
      </div>
      <Title title="Instructions" />
      <ul className="pl-5 mb-10">
        {
          recipe!.instructions?.map((instruction, index) => (
            <li key={index} className="mb-2 list-decimal">{instruction}</li>
          ))
        }
      </ul>
      <Title title="Similar Category" />
      <RecipeList 
        recipes={
          recipes?.filter((similarRecipe) => {
            return similarRecipe.category === recipe!.category && similarRecipe.id !== recipe!.id
          }).slice(0, 4)!
        }
        isPending={isRecipesPending}
      />
    </main>
  )
}

export default RecipeDetailsPage;
