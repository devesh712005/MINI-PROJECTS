import React, { useEffect, useState } from "react";
import axios from "axios";
import CreateComment from "./CreateComment.jsx";

function CreateSnippet() {
  const [title, setTitle] = useState("");
  const [code, setCode] = useState("");
  const [snippets, setSnippets] = useState({});
  const createSnippet = async (e) => {
    e.preventDefault(); //Page not refresh
    try {
      const res = await axios.post("http://localhost:8000/api/v1/snippet", {
        title,
        code,
      });
      alert(res.data.message);
    } catch (error) {
      console.log("Error occured", error);
    }
  };

  useEffect(() => {
    const fetchSnippets = async () => {
      try {
        const res = await axios.get("http://localhost:8002/snippets");

        setSnippets(res.data);
      } catch (error) {
        console.log("Error while fetching snippet", error);
      }
    };
    fetchSnippets();
  }, []);
  return (
    <div className="m-10">
      <form onSubmit={createSnippet} className="flex flex-col space-y-4">
        <input
          type="text"
          placeholder="Title"
          className="border rounded  px-2 py-1 w-fit "
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          placeholder="write a code snippets..."
          className="border rounded  px-2 py-1"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
        <button className="w-fit bg-black text-white px-6 py-2 rounded cursor-pointer">
          Add
        </button>
      </form>
      <div className="mt-5 grid  md:grid-cols-3 gap-2">
        {Object.values(snippets).map((snippet) => (
          <div key={snippet.id} className="p-3 border rounded ">
            <h1 className="font-bold text-xl">{snippet.title}</h1>
            <CreateComment snippet={snippet} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CreateSnippet;
