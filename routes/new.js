import express from 'express';
const router = express.Router();
router.get('/new', (req, res) => {
  res.render('form');
});

export default router;
