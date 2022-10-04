import 'whatwg-fetch'
import '@testing-library/jest-dom/extend-expect';
import {server} from './src/hooks/server'

process.env.REACT_APP_API_KEY = '84e25ac11ad6125024e1d376337be05f';

beforeAll(() => server.listen())
// if you need to add a handler after calling setupServer for some specific test
// this will remove that handler for the rest of them
// (which is important for test isolation):
afterEach(() => server.resetHandlers())
afterAll(() => server.close())