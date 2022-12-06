import {ApiCaller} from '@/services/ApiCaller';
import MockAdapter from 'axios-mock-adapter';
import 'vitest-mock-extended'

import axios from 'axios';
const mock = new MockAdapter(axios);

describe('api call tests', () => {
  test('it calls api', async () => {
    ApiCaller.init();
    mock.onGet().reply(200, 'hello');
    const result = await ApiCaller.callApi();
    expect(result).toBe('hello');
  })

  test('it patches api', async () => {
    ApiCaller.init();
    mock.onPatch().reply(200, {some: 'val'});
    const result = await ApiCaller.patchApi();
    expect(result).toEqual({some: 'val'});
  })

  test('it demonstrates toEqual output is truncated', () => {
    const source = {
      hello: 'world',
      something: 'else',
      good: true,
      and: 'that'
    }
    const target = {
      hello: 'world',
      something: 'else',
      good: false,
    }
    expect(source).toEqual(target);
  })
})