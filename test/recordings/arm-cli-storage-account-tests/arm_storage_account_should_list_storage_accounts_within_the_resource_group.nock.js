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
  .get('/subscriptions/45b60d85-fd72-427a-a708-f994d26e593e/resourceGroups/armclistorageGroup7701/providers/Microsoft.Storage/storageAccounts?api-version=2016-01-01')
  .reply(200, "{\"value\":[{\"id\":\"/subscriptions/45b60d85-fd72-427a-a708-f994d26e593e/resourceGroups/armclistoragegroup7701/providers/Microsoft.Storage/storageAccounts/armclistorageaccount9629\",\"kind\":\"Storage\",\"location\":\"eastus2(stage)\",\"name\":\"armclistorageaccount9629\",\"properties\":{\"creationTime\":\"2016-03-18T03:20:04.4939993Z\",\"primaryEndpoints\":{\"blob\":\"https://armclistorageaccount9629.blob.core.windows.net/\",\"file\":\"https://armclistorageaccount9629.file.core.windows.net/\",\"queue\":\"https://armclistorageaccount9629.queue.core.windows.net/\",\"table\":\"https://armclistorageaccount9629.table.core.windows.net/\"},\"primaryLocation\":\"eastus2(stage)\",\"provisioningState\":\"Succeeded\",\"statusOfPrimary\":\"available\"},\"sku\":{\"name\":\"Standard_LRS\",\"tier\":\"Standard\"},\"tags\":{},\"type\":\"Microsoft.Storage/storageAccounts\"}]}\n", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '803',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': 'c8119b7b-ff79-42db-b3d9-c798ac979802',
  server: 'Microsoft-Azure-Storage-Resource-Provider/1.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14985',
  'x-ms-correlation-request-id': 'c8119b7b-ff79-42db-b3d9-c798ac979802',
  'x-ms-routing-request-id': 'JAPANEAST:20160318T032042Z:c8119b7b-ff79-42db-b3d9-c798ac979802',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 18 Mar 2016 03:20:42 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/45b60d85-fd72-427a-a708-f994d26e593e/resourceGroups/armclistorageGroup7701/providers/Microsoft.Storage/storageAccounts?api-version=2016-01-01')
  .reply(200, "{\"value\":[{\"id\":\"/subscriptions/45b60d85-fd72-427a-a708-f994d26e593e/resourceGroups/armclistoragegroup7701/providers/Microsoft.Storage/storageAccounts/armclistorageaccount9629\",\"kind\":\"Storage\",\"location\":\"eastus2(stage)\",\"name\":\"armclistorageaccount9629\",\"properties\":{\"creationTime\":\"2016-03-18T03:20:04.4939993Z\",\"primaryEndpoints\":{\"blob\":\"https://armclistorageaccount9629.blob.core.windows.net/\",\"file\":\"https://armclistorageaccount9629.file.core.windows.net/\",\"queue\":\"https://armclistorageaccount9629.queue.core.windows.net/\",\"table\":\"https://armclistorageaccount9629.table.core.windows.net/\"},\"primaryLocation\":\"eastus2(stage)\",\"provisioningState\":\"Succeeded\",\"statusOfPrimary\":\"available\"},\"sku\":{\"name\":\"Standard_LRS\",\"tier\":\"Standard\"},\"tags\":{},\"type\":\"Microsoft.Storage/storageAccounts\"}]}\n", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '803',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': 'c8119b7b-ff79-42db-b3d9-c798ac979802',
  server: 'Microsoft-Azure-Storage-Resource-Provider/1.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14985',
  'x-ms-correlation-request-id': 'c8119b7b-ff79-42db-b3d9-c798ac979802',
  'x-ms-routing-request-id': 'JAPANEAST:20160318T032042Z:c8119b7b-ff79-42db-b3d9-c798ac979802',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 18 Mar 2016 03:20:42 GMT',
  connection: 'close' });
 return result; }]];