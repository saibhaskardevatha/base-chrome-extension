import React from 'react'

export default function Popup() {
  return (
    <div className="p-4 w-64 bg-white">
      <h2 className="text-lg font-semibold">Hello from Popup!</h2>
      <button
        className="mt-2 px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
        onClick={() => alert('You clicked me!')}
      >
        Click me
      </button>
    </div>
  )
}
