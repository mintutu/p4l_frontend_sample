/**
 * Mocking client-server processing
 */
import _accounts from './accounts.json'
import request from './request';

const TIMEOUT = 100

export default {
  getAccounts: (cb, timeout) => setTimeout(() => cb(_accounts), timeout || TIMEOUT),
}

const API_ENDPOINT = `http://localhost:9000/api/v1/accounts`;

export function fetchAccounts() {
  request({
    url: API_ENDPOINT,
    method: 'get'
  });  
};

export function fetchAccounts2() {
    return fetch(`http://localhost:9000/api/v1/accounts` )
            .then(response => response.json() )
}
