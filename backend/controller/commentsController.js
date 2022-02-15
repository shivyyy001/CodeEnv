import Comment from "./../schemas/commentSchema.js";

export const newComment = async (request, response) => {
  try {
    const comment = new Comment(request.body);
    await comment.save();
    response.status(200).json(comment);
  } catch (error) {
    response.status(500).json(error);
  }
};

export const getComments = async (request, response) => {
  try {
    const comments = await Comment.find({ postId: request.params.id });
    response.status(200).json(comments);
  } catch (error) {
    response.status(500).json(error);
  }
};

export const deleteComment = async (request, response) => {
  try {
    await Comment.findByIdAndRemove(request.params.id);
    response.status(200).json({message:"Comment deleted successfully"});
  } catch (error) {
    response.status(500).json(error);
  }
};
