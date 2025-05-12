import Link from "next/link"

interface CollapsibleProps {
  collapsed: boolean;
  setIsCollapsed: (collapsed: boolean) => void;
}

const Collapsible = ({ collapsed, setIsCollapsed }: CollapsibleProps) => {
  return (
    <div className={`absolute z-50 w-full bg-white sm:rounded-b-lg top-[100px] left-1/2 -translate-x-1/2 ${collapsed ? 'h-0': 'sm:h-[80px] h-[150px]'} transition-all delay-50 duration-300 overflow-hidden`}>
      <ul className={`flex sm:flex-row flex-col sm:items-center justify-center gap-x-14 gap-y-4 font-medium border w-full h-full py-5 px-4 ${collapsed ? 'opacity-0': 'opacity-100'} sm:transition-none transition-all delay-50 duration-300`}>
        <Link href={"/"} onClick={() => setIsCollapsed(true)}>Home</Link>
        <Link href={"/recipe"} onClick={() => setIsCollapsed(true)}>Recipes</Link>
        <Link href={"/"} onClick={() => setIsCollapsed(true)}>Categories</Link>
      </ul>
    </div>
  )
}

export default Collapsible
