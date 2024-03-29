import { NextFunction, Request, Response } from 'express';
import { get, controller, bodyValidator, post } from './decorators';

@controller('/auth')
class LoginController {
  @get('/login')
  getLogin(req: Request, res: Response): void {
    res.send(`
          <form method="POST">
              <div>
                  <label>Email</label>
                  <input name="email" />
              </div>
              <div>
                  <label>Password</label>
                  <input name="password" type="password" />   
              </div>
              <button>Submit</button>
          </form>
    `);
  }

  @post('/login')
  @bodyValidator('email', 'password')
  postLogin(req: Request, res: Response) {
    const { email, password } = req.body;
    // the req object doesn't have a "body" property.
    // the only way to access it is through the bodyParser middleware

    if (
      email &&
      password &&
      email === 'bagui@gmail.com' &&
      password === '54321'
    ) {
      req.session = { loggedIn: true };
      res.redirect('/');
    } else {
      res.send('Invalid email or password');
    }
  }

  @get('/logout')
  getLogout(req: Request, res: Response) {
    req.session = undefined;
    res.redirect('/');
  }
}
