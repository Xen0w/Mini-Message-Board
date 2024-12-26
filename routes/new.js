import express from 'express';
const router = express.Router();
router.get('/new', (req, res) => {
  res.render('form');
});
router.post('/new', (req, res) => {
  const { author, messege } = req.body;
  console.log(author + ' : ' + messege);
  res.send('messege send seccecfuly');
});
export default router;
