// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '45b60d85-fd72-427a-a708-f994d26e593e',
    name: 'Azure Storage DM Staging',
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
  process.env['AZURE_STORAGE_TEST_LOCATION'] = 'East US 2 (Stage)';
  process.env['AZURE_STORAGE_TEST_TYPE'] = 'LRS';
  process.env['AZURE_STORAGE_TEST_KIND'] = 'storage';
  process.env['AZURE_RESOURCE_GROUP_TEST_LOCATION'] = 'West US';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .post('/subscriptions/45b60d85-fd72-427a-a708-f994d26e593e/resourceGroups/armclistorageGroup7701/providers/Microsoft.Storage/storageAccounts/armclistorageaccount9629/listKeys?api-version=2016-01-01')
  .reply(200, "{\"keys\":[{\"keyName\":\"key1\",\"permissions\":\"Full\",\"value\":\"h9plwG544ZWjJ4Zez2J8h4pnog3W7Dwz1xW6aDT/AC1YLHgg+/CcUAmCgojV+FRbUYBKQXkxz+xxUkVE7NQOVQ==\"},{\"keyName\":\"key2\",\"permissions\":\"Full\",\"value\":\"9H8nC15EzxFBh2RM9F68gRgJYIzUCJWTOl3r9WsWstIq2md4WbzoBqspLINRiF3/+KuUi9nUquRZ+dAI52sSUw==\"}]}\n", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '289',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': 'd1e7d800-39b1-4c34-9c2c-a1305844a31b',
  server: 'Microsoft-Azure-Storage-Resource-Provider/1.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': 'd1e7d800-39b1-4c34-9c2c-a1305844a31b',
  'x-ms-routing-request-id': 'JAPANEAST:20160318T032133Z:d1e7d800-39b1-4c34-9c2c-a1305844a31b',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 18 Mar 2016 03:21:33 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .post('/subscriptions/45b60d85-fd72-427a-a708-f994d26e593e/resourceGroups/armclistorageGroup7701/providers/Microsoft.Storage/storageAccounts/armclistorageaccount9629/listKeys?api-version=2016-01-01')
  .reply(200, "{\"keys\":[{\"keyName\":\"key1\",\"permissions\":\"Full\",\"value\":\"h9plwG544ZWjJ4Zez2J8h4pnog3W7Dwz1xW6aDT/AC1YLHgg+/CcUAmCgojV+FRbUYBKQXkxz+xxUkVE7NQOVQ==\"},{\"keyName\":\"key2\",\"permissions\":\"Full\",\"value\":\"9H8nC15EzxFBh2RM9F68gRgJYIzUCJWTOl3r9WsWstIq2md4WbzoBqspLINRiF3/+KuUi9nUquRZ+dAI52sSUw==\"}]}\n", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '289',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': 'd1e7d800-39b1-4c34-9c2c-a1305844a31b',
  server: 'Microsoft-Azure-Storage-Resource-Provider/1.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': 'd1e7d800-39b1-4c34-9c2c-a1305844a31b',
  'x-ms-routing-request-id': 'JAPANEAST:20160318T032133Z:d1e7d800-39b1-4c34-9c2c-a1305844a31b',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 18 Mar 2016 03:21:33 GMT',
  connection: 'close' });
 return result; }]];