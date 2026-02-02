import axios from "axios";
import React, { useState } from "react";

function CreateComment({ snippet }) {
  const [text, setText] = useState("");
  const [comments, setComments] = useState([]);

  const addComment = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `http://localhost:8001/api/v1/snippet/${snippet.id}/comment`,
        { text },
      );
      console.log(res.data);
      setComments([...comments, res.data.comment]);
    } catch (error) {}
  };
  return (
    <div>
      {snippet.comments.map((comment, index) => (
        <li key={index}>{comment.content}</li>
      ))}
      <form onSubmit={addComment} className="mt-5 flex items-center gap-2 ">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add comment"
          className="border rounded px-2 text-sm py-2"
        />
        <button className="bg-black text-amber-50 px-4 ">Add</button>
      </form>
    </div>
  );
}

export default CreateComment;
