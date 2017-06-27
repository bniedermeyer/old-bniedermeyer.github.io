// import { environment } from 'environments/environment';
import { Application, Request, Response, Router } from 'express';
import * as express from 'express';
import * as path from 'path';
import * as http from 'http';

const app: Application = express();
const router: Router = express.Router();
app.use(express.static(path.join(__dirname, 'public')));

router.get('*', (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});
app.use(router);

const port: number = 3000;
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => {
  console.log('Listening on port %s', port);
});
