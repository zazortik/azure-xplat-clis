// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '2915bbd6-1252-405f-8173-6c00428146d9',
    name: 'Batch-MatthChr',
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
  process.env['AZURE_BATCH_ACCOUNT'] = 'matthchreastus2';
  process.env['AZURE_BATCH_ENDPOINT'] = 'https://matthchreastus2.eastus2.batch.azure.com';
  
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://matthchreastus2.eastus2.batch.azure.com:443')
  .post('/pools/xplatTestPool/disableautoscale?api-version=2016-07-01.3.1&timeout=30')
  .reply(200, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Thu, 04 Aug 2016 00:01:48 GMT',
  etag: '0x8D3BBFA88185C1F',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'c2e8e24c-7e0d-406b-a6b1-d9cacca4042c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': '61a72415-3ab5-4dfb-b553-e645f8561a32',
  dataserviceversion: '3.0',
  dataserviceid: 'https://matthchreastus2.eastus2.batch.azure.com/pools/xplatTestPool/disableautoscale',
  date: 'Thu, 04 Aug 2016 00:01:49 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://matthchreastus2.eastus2.batch.azure.com:443')
  .post('/pools/xplatTestPool/disableautoscale?api-version=2016-07-01.3.1&timeout=30')
  .reply(200, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Thu, 04 Aug 2016 00:01:48 GMT',
  etag: '0x8D3BBFA88185C1F',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'c2e8e24c-7e0d-406b-a6b1-d9cacca4042c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': '61a72415-3ab5-4dfb-b553-e645f8561a32',
  dataserviceversion: '3.0',
  dataserviceid: 'https://matthchreastus2.eastus2.batch.azure.com/pools/xplatTestPool/disableautoscale',
  date: 'Thu, 04 Aug 2016 00:01:49 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://matthchreastus2.eastus2.batch.azure.com:443')
  .get('/pools/xplatTestPool?api-version=2016-07-01.3.1&timeout=30')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://matthchreastus2.eastus2.batch.azure.com/$metadata#pools/@Element\",\"id\":\"xplattestpool\",\"url\":\"https://matthchreastus2.eastus2.batch.azure.com/pools/xplatTestPool\",\"eTag\":\"0x8D3BBFA88185C1F\",\"lastModified\":\"2016-08-04T00:01:48.8887839Z\",\"creationTime\":\"2016-08-02T22:17:51.8979308Z\",\"state\":\"active\",\"stateTransitionTime\":\"2016-08-02T22:17:51.8979308Z\",\"allocationState\":\"steady\",\"allocationStateTransitionTime\":\"2016-08-04T00:01:50.1582495Z\",\"vmSize\":\"small\",\"resizeTimeout\":\"PT2M\",\"currentDedicated\":3,\"targetDedicated\":3,\"enableAutoScale\":false,\"enableInterNodeCommunication\":true,\"startTask\":{\r\n    \"commandLine\":\"cmd /c dir\",\"resourceFiles\":[\r\n      \r\n    ],\"runElevated\":false,\"maxTaskRetryCount\":0,\"waitForSuccess\":true\r\n  },\"maxTasksPerNode\":1,\"taskSchedulingPolicy\":{\r\n    \"nodeFillType\":\"Spread\"\r\n  },\"cloudServiceConfiguration\":{\r\n    \"osFamily\":\"2\",\"targetOSVersion\":\"*\",\"currentOSVersion\":\"*\"\r\n  }\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  'last-modified': 'Thu, 04 Aug 2016 00:01:48 GMT',
  etag: '0x8D3BBFA88185C1F',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '698fbae0-5818-4c3e-8e13-1f6f4ddbd312',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': 'f7df0a98-72ff-4a42-9864-4016f11dca21',
  dataserviceversion: '3.0',
  date: 'Thu, 04 Aug 2016 00:01:50 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://matthchreastus2.eastus2.batch.azure.com:443')
  .get('/pools/xplatTestPool?api-version=2016-07-01.3.1&timeout=30')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://matthchreastus2.eastus2.batch.azure.com/$metadata#pools/@Element\",\"id\":\"xplattestpool\",\"url\":\"https://matthchreastus2.eastus2.batch.azure.com/pools/xplatTestPool\",\"eTag\":\"0x8D3BBFA88185C1F\",\"lastModified\":\"2016-08-04T00:01:48.8887839Z\",\"creationTime\":\"2016-08-02T22:17:51.8979308Z\",\"state\":\"active\",\"stateTransitionTime\":\"2016-08-02T22:17:51.8979308Z\",\"allocationState\":\"steady\",\"allocationStateTransitionTime\":\"2016-08-04T00:01:50.1582495Z\",\"vmSize\":\"small\",\"resizeTimeout\":\"PT2M\",\"currentDedicated\":3,\"targetDedicated\":3,\"enableAutoScale\":false,\"enableInterNodeCommunication\":true,\"startTask\":{\r\n    \"commandLine\":\"cmd /c dir\",\"resourceFiles\":[\r\n      \r\n    ],\"runElevated\":false,\"maxTaskRetryCount\":0,\"waitForSuccess\":true\r\n  },\"maxTasksPerNode\":1,\"taskSchedulingPolicy\":{\r\n    \"nodeFillType\":\"Spread\"\r\n  },\"cloudServiceConfiguration\":{\r\n    \"osFamily\":\"2\",\"targetOSVersion\":\"*\",\"currentOSVersion\":\"*\"\r\n  }\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  'last-modified': 'Thu, 04 Aug 2016 00:01:48 GMT',
  etag: '0x8D3BBFA88185C1F',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '698fbae0-5818-4c3e-8e13-1f6f4ddbd312',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': 'f7df0a98-72ff-4a42-9864-4016f11dca21',
  dataserviceversion: '3.0',
  date: 'Thu, 04 Aug 2016 00:01:50 GMT',
  connection: 'close' });
 return result; }]];