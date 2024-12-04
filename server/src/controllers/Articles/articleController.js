class ArticleController {
  // Get all articles
  async getAllArticles(req, res) {
    try {
      const [articles] = await promisePool.query('SELECT * FROM Article');
      res.status(200).json(articles);  // Respond with the list of articles
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while fetching articles.' });  // Handle any errors
    }
  }

  // Get a single article by ID
  async getArticleById(req, res) {
    const { id } = req.params;  // Extract the article ID from the URL parameters
    try {
      const [article] = await promisePool.query('SELECT * FROM Article WHERE id_article = ?', [id]);

      if (article.length === 0) {
        return res.status(404).json({ error: 'Article not found.' });  // Handle case where article is not found
      }

      res.status(200).json(article[0]);  // Respond with the article if found
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while fetching the article.' });  // Handle any errors
    }
  }
}

module.exports = new ArticleController();  // Ensure this is the correct export
