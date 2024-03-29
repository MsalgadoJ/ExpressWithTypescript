import express from 'express';
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';
import { AppRouter } from './AppRouter';
import './controllers/LoginController';
import './controllers/RootController';

const app = express();

// Help us parse the information that we extract from a form
// This should be above the router, otherwise it won't work
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ['session'] }));
app.use(AppRouter.getInstance);

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
