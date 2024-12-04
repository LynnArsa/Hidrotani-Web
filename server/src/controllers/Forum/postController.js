const { promisePool } = require('../../db');  // Ensure path is correct

class ForumPostController {
  // Create a new post
  async createPost(req, res) {
    const { title, content, id_user, category_id, image_url } = req.body;

    try {
      const result = await promisePool.query(
        'INSERT INTO Post (title, content, id_user, category_id, image_url) VALUES (?, ?, ?, ?, ?)',
        [title, content, id_user, category_id, image_url]
      );
      res.status(201).json({ message: 'Post created successfully!' });
    } catch (error) {
      console.error('Error creating post:', error);
      res.status(500).json({ error: 'An error occurred while creating the post.' });
    }
  }

  // Get all posts
  async getAllPosts(req, res) {
    try {
      const [posts] = await promisePool.query('SELECT * FROM Post');
      res.status(200).json(posts);
    } catch (error) {
      console.error('Error fetching posts:', error);
      res.status(500).json({ error: 'An error occurred while fetching posts.' });
    }
  }

  // Get a post by ID
  async getPostById(req, res) {
    const { id } = req.params;

    try {
      const [post] = await promisePool.query('SELECT * FROM Post WHERE id_post = ?', [id]);
      if (post.length === 0) {
        return res.status(404).json({ error: 'Post not found' });
      }
      res.status(200).json(post[0]);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch post' });
    }
  }

  // Update a post by ID
  async updatePost(req, res) {
    const { id } = req.params;
    const { title, content, category_id, image_url } = req.body;

    try {
      const [post] = await promisePool.query('SELECT * FROM Post WHERE id_post = ?', [id]);
      if (post.length === 0) {
        return res.status(404).json({ error: 'Post not found' });
      }

      await promisePool.query(
        'UPDATE Post SET title = ?, content = ?, category_id = ?, image_url = ? WHERE id_post = ?',
        [
          title || post[0].title,
          content || post[0].content,
          category_id || post[0].category_id,
          image_url || post[0].image_url,
          id,
        ]
      );
      res.status(200).json({ message: 'Post updated successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Failed to update post' });
    }
  }

  // Delete a post by ID
  async deletePost(req, res) {
    const { id } = req.params;

    try {
      const [post] = await promisePool.query('SELECT * FROM Post WHERE id_post = ?', [id]);
      if (post.length === 0) {
        return res.status(404).json({ error: 'Post not found' });
      }

      await promisePool.query('DELETE FROM Post WHERE id_post = ?', [id]);
      res.status(200).json({ message: 'Post deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Failed to delete post' });
    }
  }
}

module.exports = new ForumPostController();
