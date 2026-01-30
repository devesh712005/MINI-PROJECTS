import React from "react";

function CreateSnippet() {
  return (
    <div className="m-10">
      <form action="" className="flex flex-col space-y-4">
        <input
          type="text"
          placeholder="Title"
          className="border rounded  px-2 py-1 w-fit "
        />

        <textarea
          placeholder="write a code snippets..."
          className="border rounded  px-2 py-1"
        />
        <button className="w-fit bg-black text-white px-6 py-2 rounded cursor-pointer">
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateSnippet;
