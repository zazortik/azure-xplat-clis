// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948',
    name: 'CollaberaInteropTest',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    registeredProviders: [],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'eastus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourcegroups/xplatTestGAvailCreate?api-version=2014-04-01-preview')
  .reply(404, "{\"error\":{\"code\":\"ResourceGroupNotFound\",\"message\":\"Resource group 'xplatTestGAvailCreate' could not be found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-ratelimit-remaining-subscription-reads': '14947',
  'x-ms-request-id': '4eb607a6-8436-418c-97e4-7369a3dc2f8b',
  'x-ms-correlation-request-id': '4eb607a6-8436-418c-97e4-7369a3dc2f8b',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150521T115814Z:4eb607a6-8436-418c-97e4-7369a3dc2f8b',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 21 May 2015 11:58:13 GMT',
  connection: 'close',
  'content-length': '113' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourcegroups/xplatTestGAvailCreate?api-version=2014-04-01-preview')
  .reply(404, "{\"error\":{\"code\":\"ResourceGroupNotFound\",\"message\":\"Resource group 'xplatTestGAvailCreate' could not be found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-ratelimit-remaining-subscription-reads': '14947',
  'x-ms-request-id': '4eb607a6-8436-418c-97e4-7369a3dc2f8b',
  'x-ms-correlation-request-id': '4eb607a6-8436-418c-97e4-7369a3dc2f8b',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150521T115814Z:4eb607a6-8436-418c-97e4-7369a3dc2f8b',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 21 May 2015 11:58:13 GMT',
  connection: 'close',
  'content-length': '113' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourcegroups/xplatTestGAvailCreate?api-version=2014-04-01-preview', '*')
  .reply(201, "{\"id\":\"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGAvailCreate\",\"name\":\"xplatTestGAvailCreate\",\"location\":\"eastus\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '205',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1189',
  'x-ms-request-id': '59444d42-4786-406a-a552-0195b0ef2523',
  'x-ms-correlation-request-id': '59444d42-4786-406a-a552-0195b0ef2523',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150521T115817Z:59444d42-4786-406a-a552-0195b0ef2523',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 21 May 2015 11:58:17 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourcegroups/xplatTestGAvailCreate?api-version=2014-04-01-preview', '*')
  .reply(201, "{\"id\":\"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGAvailCreate\",\"name\":\"xplatTestGAvailCreate\",\"location\":\"eastus\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '205',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1189',
  'x-ms-request-id': '59444d42-4786-406a-a552-0195b0ef2523',
  'x-ms-correlation-request-id': '59444d42-4786-406a-a552-0195b0ef2523',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150521T115817Z:59444d42-4786-406a-a552-0195b0ef2523',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 21 May 2015 11:58:17 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGAvailCreate/providers/Microsoft.Compute/availabilitySets/xplatTestaAvail?api-version=2015-05-01-preview')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"Resource not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': 'c2e5f51e-86be-4101-abc6-49d354db6576',
  'x-ms-correlation-request-id': 'c2e5f51e-86be-4101-abc6-49d354db6576',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150521T115819Z:c2e5f51e-86be-4101-abc6-49d354db6576',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 21 May 2015 11:58:18 GMT',
  connection: 'close',
  'content-length': '69' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGAvailCreate/providers/Microsoft.Compute/availabilitySets/xplatTestaAvail?api-version=2015-05-01-preview')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"Resource not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': 'c2e5f51e-86be-4101-abc6-49d354db6576',
  'x-ms-correlation-request-id': 'c2e5f51e-86be-4101-abc6-49d354db6576',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150521T115819Z:c2e5f51e-86be-4101-abc6-49d354db6576',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 21 May 2015 11:58:18 GMT',
  connection: 'close',
  'content-length': '69' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGAvailCreate/providers/Microsoft.Compute/availabilitySets/xplatTestaAvail?api-version=2015-05-01-preview', '*')
  .reply(200, "{\r\n  \"properties\": {\r\n    \"platformUpdateDomainCount\": 5,\r\n    \"platformFaultDomainCount\": 3\r\n  },\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGAvailCreate/providers/Microsoft.Compute/availabilitySets/xplatTestaAvail\",\r\n  \"name\": \"xplatTestaAvail\",\r\n  \"type\": \"Microsoft.Compute/availabilitySets\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {}\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '381',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'e80e1bc4-fd52-447c-b506-30715329af09',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1188',
  'x-ms-correlation-request-id': 'ce241725-dce9-4a74-ad50-205106fc108b',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150521T115825Z:ce241725-dce9-4a74-ad50-205106fc108b',
  date: 'Thu, 21 May 2015 11:58:24 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGAvailCreate/providers/Microsoft.Compute/availabilitySets/xplatTestaAvail?api-version=2015-05-01-preview', '*')
  .reply(200, "{\r\n  \"properties\": {\r\n    \"platformUpdateDomainCount\": 5,\r\n    \"platformFaultDomainCount\": 3\r\n  },\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGAvailCreate/providers/Microsoft.Compute/availabilitySets/xplatTestaAvail\",\r\n  \"name\": \"xplatTestaAvail\",\r\n  \"type\": \"Microsoft.Compute/availabilitySets\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {}\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '381',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'e80e1bc4-fd52-447c-b506-30715329af09',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1188',
  'x-ms-correlation-request-id': 'ce241725-dce9-4a74-ad50-205106fc108b',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150521T115825Z:ce241725-dce9-4a74-ad50-205106fc108b',
  date: 'Thu, 21 May 2015 11:58:24 GMT',
  connection: 'close' });
 return result; }]];