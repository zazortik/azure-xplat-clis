// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'd05f4e58-b80d-4ebd-a6d7-c9cac216cd39',
    name: 'Microsoft Azure Internal Consumption',
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
  process.env['AZURE_ARM_TEST_LOCATION'] = 'South Central US';
  process.env['AZURE_ARM_TEST_SQL_RESOURCE_LOCATION'] = 'West US';
  process.env['AZURE_ARM_TEST_WEBSITES_RESOURCE_LOCATION'] = 'South Central US';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/d05f4e58-b80d-4ebd-a6d7-c9cac216cd39/resourcegroups/xTestResource6279?api-version=2016-02-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceGroupNotFound\",\"message\":\"Resource group 'xTestResource6279' could not be found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-request-id': '1ee0bba7-5104-4a68-b61e-2ea7fce9ec33',
  'x-ms-correlation-request-id': '1ee0bba7-5104-4a68-b61e-2ea7fce9ec33',
  'x-ms-routing-request-id': 'WESTUS2:20160815T225451Z:1ee0bba7-5104-4a68-b61e-2ea7fce9ec33',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 15 Aug 2016 22:54:51 GMT',
  connection: 'close',
  'content-length': '109' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/d05f4e58-b80d-4ebd-a6d7-c9cac216cd39/resourcegroups/xTestResource6279?api-version=2016-02-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceGroupNotFound\",\"message\":\"Resource group 'xTestResource6279' could not be found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-request-id': '1ee0bba7-5104-4a68-b61e-2ea7fce9ec33',
  'x-ms-correlation-request-id': '1ee0bba7-5104-4a68-b61e-2ea7fce9ec33',
  'x-ms-routing-request-id': 'WESTUS2:20160815T225451Z:1ee0bba7-5104-4a68-b61e-2ea7fce9ec33',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 15 Aug 2016 22:54:51 GMT',
  connection: 'close',
  'content-length': '109' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/d05f4e58-b80d-4ebd-a6d7-c9cac216cd39/resourcegroups/xTestResource6279?api-version=2016-02-01', '*')
  .reply(201, "{\"id\":\"/subscriptions/d05f4e58-b80d-4ebd-a6d7-c9cac216cd39/resourceGroups/xTestResource6279\",\"name\":\"xTestResource6279\",\"location\":\"southcentralus\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '205',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-request-id': '20350fe3-66d6-4d7b-9760-99d8a0d0bd4c',
  'x-ms-correlation-request-id': '20350fe3-66d6-4d7b-9760-99d8a0d0bd4c',
  'x-ms-routing-request-id': 'WESTUS2:20160815T225452Z:20350fe3-66d6-4d7b-9760-99d8a0d0bd4c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 15 Aug 2016 22:54:52 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/d05f4e58-b80d-4ebd-a6d7-c9cac216cd39/resourcegroups/xTestResource6279?api-version=2016-02-01', '*')
  .reply(201, "{\"id\":\"/subscriptions/d05f4e58-b80d-4ebd-a6d7-c9cac216cd39/resourceGroups/xTestResource6279\",\"name\":\"xTestResource6279\",\"location\":\"southcentralus\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '205',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-request-id': '20350fe3-66d6-4d7b-9760-99d8a0d0bd4c',
  'x-ms-correlation-request-id': '20350fe3-66d6-4d7b-9760-99d8a0d0bd4c',
  'x-ms-routing-request-id': 'WESTUS2:20160815T225452Z:20350fe3-66d6-4d7b-9760-99d8a0d0bd4c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 15 Aug 2016 22:54:52 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/d05f4e58-b80d-4ebd-a6d7-c9cac216cd39/resourcegroups/xTestResource6279/providers/Microsoft.Web/sites/xTestGrpRes3458?api-version=2014-04-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Web/sites/xTestGrpRes3458' under resource group 'xTestResource6279' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': 'd3599ed1-4d70-493b-be85-8dbb2ebeeb3c',
  'x-ms-correlation-request-id': 'd3599ed1-4d70-493b-be85-8dbb2ebeeb3c',
  'x-ms-routing-request-id': 'WESTUS2:20160815T225454Z:d3599ed1-4d70-493b-be85-8dbb2ebeeb3c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 15 Aug 2016 22:54:53 GMT',
  connection: 'close',
  'content-length': '156' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/d05f4e58-b80d-4ebd-a6d7-c9cac216cd39/resourcegroups/xTestResource6279/providers/Microsoft.Web/sites/xTestGrpRes3458?api-version=2014-04-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Web/sites/xTestGrpRes3458' under resource group 'xTestResource6279' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': 'd3599ed1-4d70-493b-be85-8dbb2ebeeb3c',
  'x-ms-correlation-request-id': 'd3599ed1-4d70-493b-be85-8dbb2ebeeb3c',
  'x-ms-routing-request-id': 'WESTUS2:20160815T225454Z:d3599ed1-4d70-493b-be85-8dbb2ebeeb3c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 15 Aug 2016 22:54:53 GMT',
  connection: 'close',
  'content-length': '156' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/d05f4e58-b80d-4ebd-a6d7-c9cac216cd39/resourcegroups/xTestResource6279/providers/Microsoft.Web/sites/xTestGrpRes3458?api-version=2014-04-01', '*')
  .reply(400, "{\"error\":{\"code\":\"InvalidRequestContent\",\"message\":\"The request content was invalid and could not be deserialized: 'Required property 'name' not found in JSON. Path 'plan', line 1, position 50.'.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '36e8fa49-931f-4855-a16e-c960d717c433',
  'x-ms-correlation-request-id': '36e8fa49-931f-4855-a16e-c960d717c433',
  'x-ms-routing-request-id': 'WESTUS2:20160815T225454Z:36e8fa49-931f-4855-a16e-c960d717c433',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 15 Aug 2016 22:54:53 GMT',
  connection: 'close',
  'content-length': '198' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/d05f4e58-b80d-4ebd-a6d7-c9cac216cd39/resourcegroups/xTestResource6279/providers/Microsoft.Web/sites/xTestGrpRes3458?api-version=2014-04-01', '*')
  .reply(400, "{\"error\":{\"code\":\"InvalidRequestContent\",\"message\":\"The request content was invalid and could not be deserialized: 'Required property 'name' not found in JSON. Path 'plan', line 1, position 50.'.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '36e8fa49-931f-4855-a16e-c960d717c433',
  'x-ms-correlation-request-id': '36e8fa49-931f-4855-a16e-c960d717c433',
  'x-ms-routing-request-id': 'WESTUS2:20160815T225454Z:36e8fa49-931f-4855-a16e-c960d717c433',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 15 Aug 2016 22:54:53 GMT',
  connection: 'close',
  'content-length': '198' });
 return result; }]];
 exports.randomTestIdsGenerated = function() { return ['xTestResource6279','xTestGrpRes3458'];};