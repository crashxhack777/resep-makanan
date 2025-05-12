interface Recipe {
  id: number;
  name: string;
  image: string;
  description: string;
  ingredients: string[];
  instructions: string[];
  flavors: string[];
  category: string;
  time: string;
  servings: number;
  best: string;
}

export type {
  Recipe
}