import { fetch } from 'cross-fetch';
import dotenv from 'dotenv';
import { beforeAll, afterAll, afterEach, vi } from 'vitest';
import '@testing-library/jest-dom/vitest';
import { server } from '@src/testing/mocks/server';

dotenv.config({
  path: '.env',
});

const mockResponse = vi.fn();
Object.defineProperty(window, 'location', {
  value: {
    hash: {
      endsWith: mockResponse,
      includes: mockResponse,
    },
    assign: mockResponse,
  },
  writable: true,
});

const baseURL = 'http://localhost:3000';

beforeAll(() => {
  server.listen({
    onUnhandledRequest: 'error',
  });
  global.fetch = function (...args) {
    // MSW hijacks the fetch requests, so we need to modify AFTER we start listening.
    // This modification is so that next auth requests have the base url attached
    return fetch(new URL(args[0] as string, baseURL), args[1]);
  };
});

// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => server.resetHandlers());

// Clean up after the tests are finished.
afterAll(() => server.close());

// server.events.on('request:start', ({ request }) => {
//   console.log('MSW intercepted:', request.method, request.url, request.body);
// });
