import express from "express";
import { createComment, getCommentBySnippetId } from "../controller/comment.js";

const route = express.Router();
route.post("/:id/comment", createComment);
route.get("/:id/comment", getCommentBySnippetId);
export default route;
