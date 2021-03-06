// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'a0d901ba-9956-4f7d-830c-2d7974c36666',
    name: 'Azure Storage DM Dev',
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
  process.env['AZURE_STORAGE_TEST_LOCATION'] = 'West Europe';
  process.env['AZURE_STORAGE_TEST_TYPE'] = 'LRS';
  process.env['AZURE_SITE_TEST_LOCATION'] = 'West Europe';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.core.windows.net:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/a0d901ba-9956-4f7d-830c-2d7974c36666/services/storageservices/xcliaccount7910', '*')
  .reply(200, "", { 'cache-control': 'no-cache',
  'content-length': '0',
  server: '1.0.6198.357 (rd_rdfe_stable.160413-1538) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth3',
  'x-ms-request-id': 'ba07adf2c1ae945793c1cc1cf3f23d8e',
  date: 'Fri, 22 Apr 2016 14:10:59 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/a0d901ba-9956-4f7d-830c-2d7974c36666/services/storageservices/xcliaccount7910', '*')
  .reply(200, "", { 'cache-control': 'no-cache',
  'content-length': '0',
  server: '1.0.6198.357 (rd_rdfe_stable.160413-1538) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth3',
  'x-ms-request-id': 'ba07adf2c1ae945793c1cc1cf3f23d8e',
  date: 'Fri, 22 Apr 2016 14:10:59 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.core.windows.net:443')
  .get('/a0d901ba-9956-4f7d-830c-2d7974c36666/services/storageservices/xcliaccount7910')
  .reply(200, "<StorageService xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Url>https://management.core.windows.net/a0d901ba-9956-4f7d-830c-2d7974c36666/services/storageservices/xcliaccount7910</Url><ServiceName>xcliaccount7910</ServiceName><StorageServiceProperties><Description i:nil=\"true\"/><AffinityGroup>xcliaffinity5646</AffinityGroup><Label>dGVzdA==</Label><Status>Created</Status><Endpoints><Endpoint>https://xcliaccount7910.blob.core.windows.net/</Endpoint><Endpoint>https://xcliaccount7910.queue.core.windows.net/</Endpoint><Endpoint>https://xcliaccount7910.table.core.windows.net/</Endpoint><Endpoint>https://xcliaccount7910.file.core.windows.net/</Endpoint></Endpoints><GeoPrimaryRegion>West Europe</GeoPrimaryRegion><StatusOfPrimary>Available</StatusOfPrimary><GeoSecondaryRegion/><StatusOfSecondary/><CreationTime>2016-04-22T14:10:12Z</CreationTime><CustomDomains/><AccountType>Standard_LRS</AccountType></StorageServiceProperties><ExtendedProperties><ExtendedProperty><Name>ResourceGroup</Name><Value>Default-Storage-WestEurope</Value></ExtendedProperty><ExtendedProperty><Name>ResourceLocation</Name><Value>West Europe</Value></ExtendedProperty></ExtendedProperties><Capabilities><Capability>PersistentVMRole</Capability></Capabilities></StorageService>", { 'cache-control': 'no-cache',
  'content-length': '1312',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.357 (rd_rdfe_stable.160413-1538) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth3',
  'x-ms-request-id': '6df2ef1171449d25a01dafecff53b5b8',
  date: 'Fri, 22 Apr 2016 14:11:01 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/a0d901ba-9956-4f7d-830c-2d7974c36666/services/storageservices/xcliaccount7910')
  .reply(200, "<StorageService xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Url>https://management.core.windows.net/a0d901ba-9956-4f7d-830c-2d7974c36666/services/storageservices/xcliaccount7910</Url><ServiceName>xcliaccount7910</ServiceName><StorageServiceProperties><Description i:nil=\"true\"/><AffinityGroup>xcliaffinity5646</AffinityGroup><Label>dGVzdA==</Label><Status>Created</Status><Endpoints><Endpoint>https://xcliaccount7910.blob.core.windows.net/</Endpoint><Endpoint>https://xcliaccount7910.queue.core.windows.net/</Endpoint><Endpoint>https://xcliaccount7910.table.core.windows.net/</Endpoint><Endpoint>https://xcliaccount7910.file.core.windows.net/</Endpoint></Endpoints><GeoPrimaryRegion>West Europe</GeoPrimaryRegion><StatusOfPrimary>Available</StatusOfPrimary><GeoSecondaryRegion/><StatusOfSecondary/><CreationTime>2016-04-22T14:10:12Z</CreationTime><CustomDomains/><AccountType>Standard_LRS</AccountType></StorageServiceProperties><ExtendedProperties><ExtendedProperty><Name>ResourceGroup</Name><Value>Default-Storage-WestEurope</Value></ExtendedProperty><ExtendedProperty><Name>ResourceLocation</Name><Value>West Europe</Value></ExtendedProperty></ExtendedProperties><Capabilities><Capability>PersistentVMRole</Capability></Capabilities></StorageService>", { 'cache-control': 'no-cache',
  'content-length': '1312',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.357 (rd_rdfe_stable.160413-1538) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth3',
  'x-ms-request-id': '6df2ef1171449d25a01dafecff53b5b8',
  date: 'Fri, 22 Apr 2016 14:11:01 GMT',
  connection: 'close' });
 return result; }]];