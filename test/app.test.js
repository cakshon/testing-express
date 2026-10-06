import { suite, test } from 'node:test';
import assert from 'node:assert/strict';
import request from 'supertest';

import { app } from '../app.js';

suite('Testing the Express application', () => {
  test('GET / returns the Express heading', async () => {
    await request(app)
      .get('/')
      .expect(200)
      .expect('Content-Type', /html/)
      .expect((res) => {
        assert.ok(
          res.text.includes('<h1>Express</h1>'),
          'The home page should contain the heading "Express"'
        );
      });
  });

  test('GET /api/greeting returns the expected JSON', async () => {
    const res = await request(app)
      .get('/api/greeting')
      .expect(200)
      .expect('Content-Type', /json/);

    assert.deepEqual(res.body, {
      message: 'Hello, students!'
    });
  });

  test('GET /missing returns 404', async () => {
    await request(app)
      .get('/missing')
      .expect(404);
  });
});
