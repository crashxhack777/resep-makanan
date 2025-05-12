import { usePathname, useSearchParams, useRouter } from 'next/navigation';

const Search = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const handleSearch = (searchInput: string) => {
    const params = new URLSearchParams(searchParams);

    if (searchInput)
      params.set('search', searchInput);
    else
      params.delete('search');

    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  }

  return (
    <input 
      type="text" 
      className="sm:w-[600px] w-full rounded-full px-6 py-4 mt-4 border border-gray-400" 
      placeholder="Search recipes"
      onChange={(event) => handleSearch(event.target.value)}
    />
  )
}

export default Search
