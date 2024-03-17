import { Hono } from 'hono';
import users from './controllers/usersController';


const api = new Hono();

api.route('/auth', users);

export default api;
