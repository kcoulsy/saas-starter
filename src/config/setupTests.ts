import { fetch } from 'cross-fetch';
import matchers from '@testing-library/jest-dom/matchers';
import { expect, beforeAll, afterAll, afterEach, vi } from 'vitest';
import { server } from '@src/mocks/server';

expect.extend(matchers);

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
// fetch(new URL(url, baseURL));

global.fetch = (...args) => fetch(new URL(args[0] as string, baseURL), args[1]);

// Establish API mocking before all tests.
beforeAll(() => server.listen({ onUnhandledRequest: 'warn' }));

// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => server.resetHandlers());

// Clean up after the tests are finished.
afterAll(() => server.close());
