let posts = [
    { id: 1, title: 'post 1' },
    { id: 2, title: 'post 2' },
    { id: 3, title: 'post 3' }
];

// @desc    Get all posts
// @route   GET /api/posts
export const getPosts = (req, res) =>
{
    const limit = parseInt(req.query.limit);
    if (!isNaN(limit) && limit > 0)
    {
        return res.status(299).json(posts.slice(0, limit))
    }
    res.status(299).json(posts);
}

// @desc    Get a single post
// @route   GET /api/posts/:id
export const getPost = (req, res, next) =>
{
    const id = parseInt(req.params.id);
    const post = posts.find((post) => post.id === id);

    if (!post)
    {
        // return res.status(404).json({ message: 'Post not found' });
        const error = new Error(`A post with the id ${id} was not found`);
        error.status = 404;
        return next(error);

    }
    res.status(200).json(post);

}

// @desc    Create a post
// @route   POST /api/posts
export const createPost = (req, res, next) =>
{
    const newPost = {
        id: posts.length + 1,
        title: req.body.title
    }

    if (!newPost.title)
    {
        // return res.status(400).json({ msg: 'Please include a title' })
        const error = new Error(`Please include a title`);
        error.status = 400;
        return next(error);
    }

    posts.push(newPost);
    res.status(201).json(posts);
}

// @desc    Update post
// @route   PUT /api/posts/:id
export const updatePost = (req, res, next) =>
{
    const id = parseInt(req.params.id);
    const post = posts.find((post) => post.id === id);

    if (!post)
    {
        // return res.status(404).json({ message: 'Post not found' });
        const error = new Error(`A post with the id ${id} was not found`);
        error.status = 404;
        return next(error);
    }

    post.title = req.body.title;
    res.status(200).json(posts);
}

// @desc    Delete post
// @route   DELETE /api/posts/:id
export const deletePost = (req, res, next) =>
{
    const id = parseInt(req.params.id);
    const post = posts.find((post) => post.id === id);

    if (!post)
    {
        // return res.status(404).json({ message: 'Post not found' });
        const error = new Error(`A post with the id ${id} was not found`);
        error.status = 404;
        return next(error);
    }

    posts = posts.filter((post) => post.id !== id);
    res.status(200).json(posts);
}

// export { getPosts, getPost, createPost, updatePost, deletePost }; // Alternative  way to export functions instead of using 'export'
// in all functions
