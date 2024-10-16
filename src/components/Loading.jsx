import React from 'react'

const Loading = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
    {/* Spinner Dots */}
    <div className="flex space-x-2 mb-4">
      <div className="h-4 w-4 bg-blue-500 rounded-full animate-bounce"></div>
      <div className="h-4 w-4 bg-blue-500 rounded-full animate-bounce delay-150"></div>
      <div className="h-4 w-4 bg-blue-500 rounded-full animate-bounce delay-300"></div>
    </div>

    {/* Animated Loading Text */}
    <p className="text-lg font-semibold text-gray-700 animate-pulse">
      Loading...
    </p>
  </div>
  )
}

export default Loading
