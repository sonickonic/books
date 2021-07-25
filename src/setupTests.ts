import '@testing-library/jest-dom';
import { setupServer } from 'msw/node';

export * from './utils/test-helpers';

export const server = setupServer();

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());
