"use client";

import Link from "next/link";
import { 
  Categories,
  Hero, 
  Error,
  RecipeList,
  Seasonal,
  Title
} from "@/components";
import { useFetchRecipes } from "@/hooks/recipe.hook";

const Home = () => {
  const { 
    data: recipes, 
    isPending, 
    error 
  } = useFetchRecipes();
  
  if (error) {
    return <Error />
  }

  return (
    <main >
      <div className="container mx-auto px-4">
        <Hero 
          recipes={ recipes! } 
          isPending={ isPending }
        />
        <Title title="Perfect for this Season" />
        <Seasonal 
          recipes={ recipes! } 
          isPending={ isPending }
        />
        <Title title="Categories" />
        <Categories />
        <Title title="Discover Recipes" />
        <RecipeList 
          recipes={ recipes?.slice(0, 12)! } 
          isPending={ isPending }
        />
        <div className="w-ful flex items-center justify-center my-10">
          <Link href="/recipe" className="bg-white px-4 py-3 border border-gray-300 mx-auto font-bold rounded-xl shadow-sm hover:bg-gray-50">
            Discover More
          </Link>
        </div>
      </div>
    </main>
  );
}

export default Home;
