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
  .get('/subscriptions/45b60d85-fd72-427a-a708-f994d26e593e/resourcegroups/armclistorageGroup7845?api-version=2015-11-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceGroupNotFound\",\"message\":\"Resource group 'armclistorageGroup7845' could not be found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-request-id': '6a2617ac-b795-43a4-bd1b-577794cd2f03',
  'x-ms-correlation-request-id': '6a2617ac-b795-43a4-bd1b-577794cd2f03',
  'x-ms-routing-request-id': 'JAPANEAST:20160318T031841Z:6a2617ac-b795-43a4-bd1b-577794cd2f03',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 18 Mar 2016 03:18:41 GMT',
  connection: 'close',
  'content-length': '114' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/45b60d85-fd72-427a-a708-f994d26e593e/resourcegroups/armclistorageGroup7845?api-version=2015-11-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceGroupNotFound\",\"message\":\"Resource group 'armclistorageGroup7845' could not be found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-request-id': '6a2617ac-b795-43a4-bd1b-577794cd2f03',
  'x-ms-correlation-request-id': '6a2617ac-b795-43a4-bd1b-577794cd2f03',
  'x-ms-routing-request-id': 'JAPANEAST:20160318T031841Z:6a2617ac-b795-43a4-bd1b-577794cd2f03',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 18 Mar 2016 03:18:41 GMT',
  connection: 'close',
  'content-length': '114' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/45b60d85-fd72-427a-a708-f994d26e593e/resourcegroups/armclistorageGroup7845?api-version=2015-11-01', '*')
  .reply(201, "{\"id\":\"/subscriptions/45b60d85-fd72-427a-a708-f994d26e593e/resourceGroups/armclistorageGroup7845\",\"name\":\"armclistorageGroup7845\",\"location\":\"westus\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '207',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-request-id': '7b92263a-1d1d-4db5-83cb-b3a2fd21c493',
  'x-ms-correlation-request-id': '7b92263a-1d1d-4db5-83cb-b3a2fd21c493',
  'x-ms-routing-request-id': 'JAPANEAST:20160318T031845Z:7b92263a-1d1d-4db5-83cb-b3a2fd21c493',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 18 Mar 2016 03:18:44 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/45b60d85-fd72-427a-a708-f994d26e593e/resourcegroups/armclistorageGroup7845?api-version=2015-11-01', '*')
  .reply(201, "{\"id\":\"/subscriptions/45b60d85-fd72-427a-a708-f994d26e593e/resourceGroups/armclistorageGroup7845\",\"name\":\"armclistorageGroup7845\",\"location\":\"westus\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '207',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-request-id': '7b92263a-1d1d-4db5-83cb-b3a2fd21c493',
  'x-ms-correlation-request-id': '7b92263a-1d1d-4db5-83cb-b3a2fd21c493',
  'x-ms-routing-request-id': 'JAPANEAST:20160318T031845Z:7b92263a-1d1d-4db5-83cb-b3a2fd21c493',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 18 Mar 2016 03:18:44 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/45b60d85-fd72-427a-a708-f994d26e593e/resourceGroups/armclistorageGroup7845/providers/Microsoft.Storage/storageAccounts/armclistorageaccount6327?api-version=2016-01-01', '*')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/45b60d85-fd72-427a-a708-f994d26e593e/providers/Microsoft.Storage/operations/d6f92b4e-f967-41bd-801a-02804f10b961?monitor=true&api-version=2016-01-01',
  'retry-after': '25',
  'x-ms-ratelimit-remaining-subscription-writes': '1196',
  'x-ms-request-id': 'fd781c9c-6067-48f8-9c80-48c319faf896',
  server: 'Microsoft-Azure-Storage-Resource-Provider/1.0',
  'x-ms-correlation-request-id': 'fd781c9c-6067-48f8-9c80-48c319faf896',
  'x-ms-routing-request-id': 'JAPANEAST:20160318T031849Z:fd781c9c-6067-48f8-9c80-48c319faf896',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 18 Mar 2016 03:18:48 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/45b60d85-fd72-427a-a708-f994d26e593e/resourceGroups/armclistorageGroup7845/providers/Microsoft.Storage/storageAccounts/armclistorageaccount6327?api-version=2016-01-01', '*')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/45b60d85-fd72-427a-a708-f994d26e593e/providers/Microsoft.Storage/operations/d6f92b4e-f967-41bd-801a-02804f10b961?monitor=true&api-version=2016-01-01',
  'retry-after': '25',
  'x-ms-ratelimit-remaining-subscription-writes': '1196',
  'x-ms-request-id': 'fd781c9c-6067-48f8-9c80-48c319faf896',
  server: 'Microsoft-Azure-Storage-Resource-Provider/1.0',
  'x-ms-correlation-request-id': 'fd781c9c-6067-48f8-9c80-48c319faf896',
  'x-ms-routing-request-id': 'JAPANEAST:20160318T031849Z:fd781c9c-6067-48f8-9c80-48c319faf896',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 18 Mar 2016 03:18:48 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/45b60d85-fd72-427a-a708-f994d26e593e/providers/Microsoft.Storage/operations/d6f92b4e-f967-41bd-801a-02804f10b961?monitor=true&api-version=2016-01-01')
  .reply(200, "{\"id\":\"/subscriptions/45b60d85-fd72-427a-a708-f994d26e593e/resourceGroups/armclistoragegroup7845/providers/Microsoft.Storage/storageAccounts/armclistorageaccount6327\",\"kind\":\"Storage\",\"location\":\"eastus2(stage)\",\"name\":\"armclistorageaccount6327\",\"properties\":{\"creationTime\":\"2016-03-18T03:18:48.0666618Z\",\"encryption\":{\"keySource\":\"Microsoft.Storage\",\"services\":{\"blob\":{\"enabled\":true,\"lastEnabledTime\":\"2016-03-18T03:18:48.0676614Z\"}}},\"primaryEndpoints\":{\"blob\":\"https://armclistorageaccount6327.blob.core.windows.net/\",\"file\":\"https://armclistorageaccount6327.file.core.windows.net/\",\"queue\":\"https://armclistorageaccount6327.queue.core.windows.net/\",\"table\":\"https://armclistorageaccount6327.table.core.windows.net/\"},\"primaryLocation\":\"eastus2(stage)\",\"provisioningState\":\"Succeeded\",\"statusOfPrimary\":\"available\"},\"sku\":{\"name\":\"Standard_LRS\",\"tier\":\"Standard\"},\"tags\":{},\"type\":\"Microsoft.Storage/storageAccounts\"}\n", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '924',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': 'e94b8c2b-a16a-4361-8dae-634092f96bd9',
  server: 'Microsoft-Azure-Storage-Resource-Provider/1.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': 'e94b8c2b-a16a-4361-8dae-634092f96bd9',
  'x-ms-routing-request-id': 'JAPANEAST:20160318T031921Z:e94b8c2b-a16a-4361-8dae-634092f96bd9',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 18 Mar 2016 03:19:20 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/45b60d85-fd72-427a-a708-f994d26e593e/providers/Microsoft.Storage/operations/d6f92b4e-f967-41bd-801a-02804f10b961?monitor=true&api-version=2016-01-01')
  .reply(200, "{\"id\":\"/subscriptions/45b60d85-fd72-427a-a708-f994d26e593e/resourceGroups/armclistoragegroup7845/providers/Microsoft.Storage/storageAccounts/armclistorageaccount6327\",\"kind\":\"Storage\",\"location\":\"eastus2(stage)\",\"name\":\"armclistorageaccount6327\",\"properties\":{\"creationTime\":\"2016-03-18T03:18:48.0666618Z\",\"encryption\":{\"keySource\":\"Microsoft.Storage\",\"services\":{\"blob\":{\"enabled\":true,\"lastEnabledTime\":\"2016-03-18T03:18:48.0676614Z\"}}},\"primaryEndpoints\":{\"blob\":\"https://armclistorageaccount6327.blob.core.windows.net/\",\"file\":\"https://armclistorageaccount6327.file.core.windows.net/\",\"queue\":\"https://armclistorageaccount6327.queue.core.windows.net/\",\"table\":\"https://armclistorageaccount6327.table.core.windows.net/\"},\"primaryLocation\":\"eastus2(stage)\",\"provisioningState\":\"Succeeded\",\"statusOfPrimary\":\"available\"},\"sku\":{\"name\":\"Standard_LRS\",\"tier\":\"Standard\"},\"tags\":{},\"type\":\"Microsoft.Storage/storageAccounts\"}\n", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '924',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': 'e94b8c2b-a16a-4361-8dae-634092f96bd9',
  server: 'Microsoft-Azure-Storage-Resource-Provider/1.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': 'e94b8c2b-a16a-4361-8dae-634092f96bd9',
  'x-ms-routing-request-id': 'JAPANEAST:20160318T031921Z:e94b8c2b-a16a-4361-8dae-634092f96bd9',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 18 Mar 2016 03:19:20 GMT',
  connection: 'close' });
 return result; }]];
 exports.randomTestIdsGenerated = function() { return ['armclistorageaccount6327','armclistorageGroup7845'];};