import 'tslib';
import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import * as functions from "firebase-functions";
import { AppModule } from './app/app.module';
import * as express from 'express';
import { Express } from "express";
const server = express();


export const createNestServer = async (expressInstance: Express) => {
  const app = await NestFactory.create(AppModule, new ExpressAdapter(expressInstance))
  app.enableCors();
  return app.init();
}

createNestServer(server).then(() => {
  console.log('bootstrap the server');
}).catch((err) => {
  console.log(err);
})


exports.api = functions.https.onRequest((request, response) => {
  server(request, response);
});
