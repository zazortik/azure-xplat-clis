// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '1a66ce04-b633-4a0b-b2bc-a912ec8986a6',
    name: 'Monitoring vNext Test Environment Services 03',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: [],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('/subscriptions/1a66ce04-b633-4a0b-b2bc-a912ec8986a6/providers/microsoft.insights/logprofiles/default?api-version=2016-03-01')
  .reply(200, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '822da972-32dc-4838-9473-77d4cb47e6b2',
  server: 'Microsoft-IIS/8.5',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '7f56e9d0-aacf-495b-8d9e-fc00521a4901',
  'x-ms-routing-request-id': 'NORTHCENTRALUS:20160323T201154Z:7f56e9d0-aacf-495b-8d9e-fc00521a4901',
  date: 'Wed, 23 Mar 2016 20:11:54 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/1a66ce04-b633-4a0b-b2bc-a912ec8986a6/providers/microsoft.insights/logprofiles/default?api-version=2016-03-01')
  .reply(200, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '822da972-32dc-4838-9473-77d4cb47e6b2',
  server: 'Microsoft-IIS/8.5',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '7f56e9d0-aacf-495b-8d9e-fc00521a4901',
  'x-ms-routing-request-id': 'NORTHCENTRALUS:20160323T201154Z:7f56e9d0-aacf-495b-8d9e-fc00521a4901',
  date: 'Wed, 23 Mar 2016 20:11:54 GMT',
  connection: 'close' });
 return result; }]];