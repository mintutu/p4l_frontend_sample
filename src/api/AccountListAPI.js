/**
 * Mocking client-server processing
 */
import request from './request';

const TIMEOUT = 100

const API_GET_ACCOUNTS_ENDPOINT = 'http://localhost:8080/api/v1/accounts'

export function getAccounts() {
  return request({
    url: API_GET_ACCOUNTS_ENDPOINT,
    method: 'get'
  })
}

export function fetchOffAds(accountId) {
  return request({
    url: "http://localhost:8080/api/v1/ads/off_ads_list?accountId="+accountId,
    method: 'get'
  });  
};

export function executeOnOffRule(accountId) {
  return request({
    url: "http://localhost:8080/api/v1/accounts/execute_rule_settings",
    method: 'post',
    body: {
      accountId: accountId
    }    
  });    
};
