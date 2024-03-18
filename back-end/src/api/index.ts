import { Hono } from 'hono';
import users from './controllers/usersController';

// nested router ./api -> ./controllers

const api = new Hono();

api.route('/auth', users); // /api/v1/auth

export default api;
