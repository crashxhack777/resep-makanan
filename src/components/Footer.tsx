import { Lobster } from "next/font/google";
import Link from "next/link";

const lobster = Lobster({ weight: "400", subsets: ["latin"] });

const Footer = () => {
  return (
    <footer className="w-full bg-[#F0F0F0] border-t pt-14">
      <div className="container mx-auto px-4">
        <div className="flex lg:flex-row flex-col lg:items-center lg:justify-between">
          <div className='lg:mb-0 mb-10'>
            <h1 className={`text-4xl mb-4 ${lobster.className}`}>FlavorShare</h1>
            <p className="text-gray-700 lg:w-[500px]">
              Your ultimate destination for culinary exploration and creativity. 
              Discover a vast array of recipes from everyday meals to gourmet delights, curated by food lovers worldwide. 
              Browse by cuisine, ingredient, or dietary preference, and find your next favorite dish.
            </p>
          </div>
          <div className="flex items-center sm:gap-x-28 gap-x-12">
            <div>
              <h2 className="font-medium mb-4">FlavorShare</h2>
              <ul className="text-gray-700 flex flex-col gap-y-2">
                <Link href="/">Homepage</Link>
                <Link href="/recipe">Recipes</Link>
                <Link href="/">Categories</Link>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex sm:flex-row flex-col-reverse sm:gap-y-0 gap-y-10 items-center justify-center border-t mt-16 py-5">
          <p className="text-gray-700 text-sm">&copy; 2025 FlavorShare [Alfian] - All Rights Reserved</p>
        </div>
        <div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
