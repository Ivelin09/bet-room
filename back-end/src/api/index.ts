import { Hono } from 'hono';
import users from './controllers/usersController';
import support from './controllers/supportController';
import archive from './controllers/archive';

// nested router ./api -> ./controllers

const api = new Hono();

api.route('/auth', users); // /api/v1/auth
api.route('/support', support); // /api/v1/support
api.route('/archives', archive); // /api/v1/archives

export default api;
