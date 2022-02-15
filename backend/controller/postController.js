import Posts from "../schemas/postSchema.js";

export const createPost = async (request, response) => {
  try {
    const finalPost = new Posts(request.body);
    await finalPost.save();
    console.log(request.body);
    response.status(200).json("post saved successfully");
  } catch (error) {
    response.status(500).json(error);
  }
};

export const getAllPosts = async (request, response) => {
  let username = request.query.username;
  let category = request.query.categories;
  let posts;
  try {
    if (username && category) {
      posts = await Posts.find({ username: username, categories: category });
    } else if (username) {
      posts = await Posts.find({ username: username });
    } else if (category) {
      posts = await Posts.find({ categories: category });
    } else {
      posts = await Posts.find({});
    }
    response.status(200).json(posts);
  } catch (error) {
    response.status(500).json(error);
  }
};

export const getPost = async (request, response) => {
  try {
    let post = await Posts.findById(request.params.id);
    response.status(200).json(post);
  } catch (error) {
    response.status(500).json(error);
  }
};

export const updatePost = async (request, response) => {
  try {
    let post = await Posts.findByIdAndUpdate(request.params.id, {
      $set: request.body,
    });
    response.status(200).json(post);
  } catch (error) {
    response.status(500).json(error);
  }
};

export const deletePost = async (request, response) => {
  try {
    let post = await Posts.findByIdAndRemove(request.params.id);
    response.status(200).json(post);
  } catch (error) {
    response.status(500).json(error);
  }
};
