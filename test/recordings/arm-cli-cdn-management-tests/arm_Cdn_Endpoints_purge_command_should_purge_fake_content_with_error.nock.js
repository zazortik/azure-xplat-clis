// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4',
    name: 'Visual Studio Enterprise with MSDN',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: 'ed912eac-e7c1-43f8-a91f-ef14a7879293',
    state: 'Enabled',
    registeredProviders: [],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_ARM_TEST_LOCATION'] = 'East US 2';
  process.env['AZURE_ARM_TEST_RESOURCE_GROUP_1'] = 'xplattestadlsrgr01';
  process.env['AZURE_ARM_TEST_CDN_PROFILE_1'] = 'cliTestProfile01';
  process.env['AZURE_ARM_TEST_RESOURCE_GROUP_2'] = 'xplattestadlsrgr02';
  process.env['AZURE_ARM_TEST_CDN_PROFILE_2'] = 'cliTestProfile02';
  process.env['AZURE_ARM_TEST_CDN_ENDPOINT_1'] = 'cliTestEndpoint01';
  process.env['AZURE_ARM_TEST_CDN_ENDPOINT_2'] = 'cliTestEndpoint02';
  process.env['AZURE_ARM_TEST_CDN_ORIGIN_1'] = 'cliTestOrigin01';
  process.env['AZURE_ARM_TEST_CDN_ORIGIN_2'] = 'cliTestOrigin02';
  process.env['AZURE_ARM_TEST_ENDPOINT_TEST_LOCATION_1'] = 'eastus';
  process.env['AZURE_ARM_TEST_CUSTOM_DOMAIN_NAME_1'] = 'cliTestCustomDomain01';
  process.env['AZURE_ARM_TEST_CUSTOM_DOMAIN_HOST_NAME_1'] = 'cli-0a51dd4a-33ca-4c25-91d7-42ae35c12cdd.azureedge-test.net';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourceGroups/xplattestadlsrgr01/providers/Microsoft.Cdn/profiles/cliTestProfile01/endpoints/cliTestEndpoint01/purge?api-version=2016-04-02', '*')
  .reply(400, "{\r\n  \"error\": {\r\n    \"code\": \"BadRequest\",\r\n    \"message\": \"Invalid ContentPath \\\"fakePath!\\\". ContentPath for purge action must be a relative path: either for a single resource \\\"/path/pic.jpg\\\" or a wild card \\\"/path/*\\\".\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '232',
  'content-type': 'application/json; charset=utf-8',
  'content-language': 'en-US',
  expires: '-1',
  'x-ms-request-id': '710af135-8c83-411a-8597-5eda76715c30',
  'x-ms-client-request-id': 'a4172e91-7f5b-4155-a8ff-74c25a2cbdf8',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': 'b297af6f-516a-4939-b59d-4aa8bd254aad',
  'x-ms-routing-request-id': 'WESTUS:20160518T214533Z:b297af6f-516a-4939-b59d-4aa8bd254aad',
  date: 'Wed, 18 May 2016 21:45:33 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourceGroups/xplattestadlsrgr01/providers/Microsoft.Cdn/profiles/cliTestProfile01/endpoints/cliTestEndpoint01/purge?api-version=2016-04-02', '*')
  .reply(400, "{\r\n  \"error\": {\r\n    \"code\": \"BadRequest\",\r\n    \"message\": \"Invalid ContentPath \\\"fakePath!\\\". ContentPath for purge action must be a relative path: either for a single resource \\\"/path/pic.jpg\\\" or a wild card \\\"/path/*\\\".\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '232',
  'content-type': 'application/json; charset=utf-8',
  'content-language': 'en-US',
  expires: '-1',
  'x-ms-request-id': '710af135-8c83-411a-8597-5eda76715c30',
  'x-ms-client-request-id': 'a4172e91-7f5b-4155-a8ff-74c25a2cbdf8',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': 'b297af6f-516a-4939-b59d-4aa8bd254aad',
  'x-ms-routing-request-id': 'WESTUS:20160518T214533Z:b297af6f-516a-4939-b59d-4aa8bd254aad',
  date: 'Wed, 18 May 2016 21:45:33 GMT',
  connection: 'close' });
 return result; }]];