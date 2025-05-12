import { useState, useEffect } from "react";
import { Recipe } from "@/types/recipe.type";

interface FetchResult<T> {
  isPending: boolean;
  error: string | null;
  data: T | null;
}

const useFetch = <T>(url: string): FetchResult<T> => {
  const [data, setData] = useState<T | null>(null);
  const [isPending, setIsPending] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error('An error occurred while fetching the data');
        }

        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
      } finally {
        setIsPending(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, isPending, error };
}

const useFetchRecipes = () => {
  return useFetch<Recipe[]>('/api/recipe');
}

const useFetchRecipe = (id: string) => {
  return useFetch<Recipe>(`/api/recipe/${id}`);
}

export { 
  useFetchRecipes, 
  useFetchRecipe 
};