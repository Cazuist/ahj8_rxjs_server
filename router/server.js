const http = require('http');
const fs = require('fs');
const path = require('path');
const Koa = require('koa');
const koaBody = require('koa-body');

const { v4 } = require('uuid');
const moment = require('moment');
const faker = require('faker');
const posts = require('./data/posts.js');
const comments = require('./data/comments.js');

const app = new Koa();
const port = process.env.PORT || 7070;

app.use(koaBody({
  urlencoded: true,
  multipart: true,
}));

// CORS
app.use(async (ctx, next) => {
  const origin = ctx.request.get('Origin'); 
  
  if (!origin) {
    return await next();
  }  

  const headers = { 'Access-Control-Allow-Origin': '*', };
  
  if (ctx.request.method !== 'OPTIONS') {
    ctx.response.set({...headers});
    try {
      return await next();
    } catch (e) {
      e.headers = {...e.headers, ...headers};
      throw e;
    }
  }
  
  if (ctx.request.get('Access-Control-Request-Method')) {
    ctx.response.set({
      ...headers,
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH',
    });
  
    if (ctx.request.get('Access-Control-Request-Headers')) {
      ctx.response.set('Access-Control-Allow-Headers', ctx.request.get('Access-Control-Allow-Request-Headers'));
    }
  
    ctx.response.status = 204;
  }
});

let messages = [];

setInterval(() => {
  messages.push(getFakeResponse());
}, 5000);

function getFakeResponse() {
  const name = faker.name.firstName();
  const lastName = faker.name.lastName();

  return {    
    id: v4(),
    from: `${name}@${lastName}`,
    subject: faker.lorem.words(),
    body: faker.lorem.paragraph(),
    received: moment().valueOf(),  
  };
}

app.use(async (ctx) => {
  const { url } = ctx.request;
  const { id } = ctx.request.query;

  if (url === '/posts/latest') {
    ctx.response.body = JSON.stringify(posts);
    return;
  }

  if (url.split('?')[0].endsWith('/comments/latest') ) {
    const filtComments = comments.filter((comm) => comm.post_id === +id);
    ctx.response.body = JSON.stringify(filtComments);
    return;
  }
  
  const resData = {
    status: 'ok',
    timestamp: moment().valueOf(),
    messages,
  };

  ctx.response.body = JSON.stringify(resData);
  messages = [];
});

const server = http.createServer(app.callback()).listen(port);
