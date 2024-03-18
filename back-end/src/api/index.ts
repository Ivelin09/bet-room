import { Hono } from 'hono';
import users from './controllers/usersController';
import support from './controllers/supportController';

// nested router ./api -> ./controllers

const api = new Hono();

api.route('/auth', users); // /api/v1/auth
api.route('/support', support); // /api/v1/support

export default api;
