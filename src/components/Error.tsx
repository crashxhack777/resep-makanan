
const Error = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center sm:mt-[5%] mt-[20%]">
      <img src="/images/error_image.png" className="sm:w-[350px] w-[300px] mb-5" alt="" />
      <h1 className="sm:text-2xl text-xl font-bold text-center mb-3"><span className="text-orange-500">Oops!</span> Something went wrong.</h1>
      <p className="text-center text-gray-700 mb-5">Please try to refresh the page.</p>
      <button className="bg-white px-4 py-3 border border-gray-300 mx-auto font-bold rounded-xl shadow-sm hover:bg-gray-50">
        Refresh
      </button>
    </div>
  )
}

export default Error
