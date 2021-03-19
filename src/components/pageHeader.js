import React from "react"

const PageHeader = props => {
  return (
    <div className="mt-12 mb-12 container mx-auto p-5">
      <h1 className="border-t-2 border-gray-800  pt-5 text-gray-800 text-4xl font-extrabold">
        {props.title}
      </h1>
    </div>
  )
}

export default PageHeader
