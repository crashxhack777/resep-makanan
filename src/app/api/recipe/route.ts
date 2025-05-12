import { NextResponse } from "next/server"
import { Recipe } from "@/types/recipe.type";

import FileUtility from "@/utils/fileUtility";

const fileUtility = new FileUtility<Recipe>("recipe");

export async function GET () {
  const recipes = await fileUtility.read();

  return NextResponse.json(recipes);
}

export async function POST (request: Request) {
  const recipe = await request.json() as Recipe;
  const recipes = await fileUtility.read();
  
  recipes.push(recipe);
  await fileUtility.write(recipes);

  return NextResponse.json(recipe, { status: 201 });
}