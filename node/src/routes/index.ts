import express from 'express';

const router = express.Router();
// require('./claims.routes')(router);

require('./user.routes')(router);

export default router;

