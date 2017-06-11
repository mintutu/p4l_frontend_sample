/**
 * Mocking client-server processing
 */
import _accounts from './accounts.json'

const TIMEOUT = 100

export default {
  getAccounts: (cb, timeout) => setTimeout(() => cb(_accounts), timeout || TIMEOUT),
}
