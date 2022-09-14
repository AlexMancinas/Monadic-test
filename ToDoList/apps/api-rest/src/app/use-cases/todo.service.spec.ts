import { Test } from '@nestjs/testing';

import { ToDoService } from './todo.service';

describe('AppService', () => {

  beforeAll(async () => {
    const app = await Test.createTestingModule({
      providers: [ToDoService],
    }).compile();
    app.get<ToDoService>(ToDoService);
  });
});
