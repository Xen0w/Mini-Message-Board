import express from 'express';
const app = express();
import newRout from './routes/new.js';
const PORT = process.env.PORT || 8000;
const messages = [
  {
    text: 'Hi there!',
    user: 'Amando',
    added: new Date(),
  },
  {
    text: 'Hello World!',
    user: 'Charles',
    added: new Date(),
  },
];
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.set('views', './views');
app.get('/', (req, res) => {
  res.render('index', { title: 'Mini Messageboard', messages: messages });
});
app.post('/new', (req, res) => {
  const { author, messege } = req.body;
  messages.push({
    text: messege,
    user: author,
    added: new Date(),
  });

  res.send(res.redirect('/'));
});

app.use(newRout);

app.listen(PORT, () => console.log('server is runing at port :' + PORT));
