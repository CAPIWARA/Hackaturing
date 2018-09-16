'use strict';

const Koa = require('koa');
const Router = require('koa-router');

const {
  createReadStream,
  createWriteStream,
} = require('fs');
const body = require('koa-body');

const app = new Koa();
const router = new Router();

router.post('/okay', async (context, next) => {
  console.log('Okay');
  await next();
});

router.post('/send', body({ multipart: true }), async (context, next) => {
  const file = context.request.files.file;
  const reader = createReadStream(file.path);
  const stream = createWriteStream(getPath());
  reader.pipe(stream);
  console.log('uploading %s -> %s', file.name, stream.path);
  await next();
});

app.use();

app.use(router.routes());

app.listen(process.env.PORT);
