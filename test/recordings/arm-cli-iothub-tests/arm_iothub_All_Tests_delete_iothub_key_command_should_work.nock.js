// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '2c224e7e-3ef5-431d-a57b-e71f4662e3a6',
    name: 'Node CLI Test',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: ['mobileservice'],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_ARM_IOTHUB_TEST_LOCATION'] = 'West US';
  process.env['AZURE_ARM_TEST_RESOURCE_GROUP'] = 'xplattestiothubrg';
};

exports.scopes = [[function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplattestiothubrg/providers/Microsoft.Devices/IotHubs/xplattestiothub74?api-version=2016-02-03')
  .reply(200, "{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplattestiothubrg/providers/Microsoft.Devices/IotHubs/xplattestiothub74\",\"name\":\"xplattestiothub74\",\"type\":\"Microsoft.Devices/IotHubs\",\"location\":\"westus\",\"tags\":{\"t1\":\"v1\"},\"subscriptionid\":\"2c224e7e-3ef5-431d-a57b-e71f4662e3a6\",\"resourcegroup\":\"xplattestiothubrg\",\"etag\":\"AAAAAABdGdk=\",\"properties\":{\"state\":\"Active\",\"provisioningState\":\"Succeeded\",\"hostName\":\"xplattestiothub74.azure-devices.net\",\"eventHubEndpoints\":{\"events\":{\"retentionTimeInDays\":5,\"partitionCount\":2,\"partitionIds\":[\"0\",\"1\"],\"path\":\"xplattestiothub74\",\"endpoint\":\"sb://iothub-ns-xplattesti-64820-bbd7b2afd9.servicebus.windows.net/\"},\"operationsMonitoringEvents\":{\"retentionTimeInDays\":5,\"partitionCount\":2,\"partitionIds\":[\"0\",\"1\"],\"path\":\"xplattestiothub74-operationmonitoring\",\"endpoint\":\"sb://iothub-ns-xplattesti-64820-bbd7b2afd9.servicebus.windows.net/\"}},\"storageEndpoints\":{\"$default\":{\"sasTtlAsIso8601\":\"PT1H\",\"connectionString\":\"\",\"containerName\":\"\"}},\"messagingEndpoints\":{\"fileNotifications\":{\"lockDurationAsIso8601\":\"PT1M\",\"ttlAsIso8601\":\"PT1H\",\"maxDeliveryCount\":10}},\"enableFileUploadNotifications\":false,\"cloudToDevice\":{\"maxDeliveryCount\":50,\"defaultTtlAsIso8601\":\"PT1H\",\"feedback\":{\"lockDurationAsIso8601\":\"PT1M\",\"ttlAsIso8601\":\"PT1H\",\"maxDeliveryCount\":1}},\"operationsMonitoringProperties\":{\"events\":{\"None\":\"None\",\"Connections\":\"None\",\"DeviceTelemetry\":\"None\",\"C2DCommands\":\"None\",\"DeviceIdentityOperations\":\"None\",\"FileUploadOperations\":\"None\"}},\"features\":\"None\",\"generationNumber\":0},\"sku\":{\"name\":\"S2\",\"tier\":\"Standard\",\"capacity\":2}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1604',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14986',
  'x-ms-request-id': 'adda96ef-fd51-4e2c-9209-b54724f3a5af',
  'x-ms-correlation-request-id': 'adda96ef-fd51-4e2c-9209-b54724f3a5af',
  'x-ms-routing-request-id': 'WESTEUROPE:20160901T091414Z:adda96ef-fd51-4e2c-9209-b54724f3a5af',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 01 Sep 2016 09:14:14 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .post('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplattestiothubrg/providers/Microsoft.Devices/IotHubs/xplattestiothub74/listkeys?api-version=2016-02-03')
  .reply(200, "{\"value\":[{\"keyName\":\"iothubowner\",\"primaryKey\":\"07QHDsmFx2QCTGprtaF+CGmAYj6dDSUXkj2QFeggQeA=\",\"secondaryKey\":\"nyUv2ryt5eht1A+775SbrxpwEh9SpCIeJzR7jdlMzZU=\",\"rights\":\"RegistryWrite, ServiceConnect, DeviceConnect\"},{\"keyName\":\"service\",\"primaryKey\":\"Qg8Wq30hp87sSAm77A0k6riphIc9NYKU97foIb91i4A=\",\"secondaryKey\":\"DPgT1hTeJxjAXQ7lFajoMi4qjhjXAy4dU3f4n8ooE7E=\",\"rights\":\"ServiceConnect\"},{\"keyName\":\"device\",\"primaryKey\":\"JFX6gu4se6qUPfTW12i9KSDf+YTr7Kl0XAzuXHduc+k=\",\"secondaryKey\":\"QEFM77HuwQOG2kq/mWXX18GSS0PkOMpSFaPk4aRAmjY=\",\"rights\":\"DeviceConnect\"},{\"keyName\":\"registryRead\",\"primaryKey\":\"YTYKxTV88NAXTLBbTlXOGEI6Q7p7fSDrfALN0GN1DAc=\",\"secondaryKey\":\"ZOcvpKpGBP5GEvpDwNB/F21pJ94h+uUQ9eUCunRJI58=\",\"rights\":\"RegistryRead\"},{\"keyName\":\"registryReadWrite\",\"primaryKey\":\"evXUR+lV/NllbDJKB47wBkvHT833+O5M5Gjxi/qEKh0=\",\"secondaryKey\":\"Ta9o29AEGgl3ag1LevrjqjDKB8kLl9XyiT1BeFnQHcA=\",\"rights\":\"RegistryWrite\"},{\"keyName\":\"key1\",\"primaryKey\":\"vzUpoB02o0OHyL+3t2zsl7nFUJsIB4FzcspIF7lP5KU=\",\"secondaryKey\":\"NltJaeiuON86xIVMpHf8alyKhSCjOIU8VotOu0JhUZY=\",\"rights\":\"ServiceConnect\"}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1072',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-request-id': 'c0a58b10-63ff-46af-9597-59f1139d4a60',
  'x-ms-correlation-request-id': 'c0a58b10-63ff-46af-9597-59f1139d4a60',
  'x-ms-routing-request-id': 'WESTEUROPE:20160901T091415Z:c0a58b10-63ff-46af-9597-59f1139d4a60',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 01 Sep 2016 09:14:14 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplattestiothubrg/providers/Microsoft.Devices/IotHubs/xplattestiothub74?api-version=2016-02-03', '*')
  .reply(201, "{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplattestiothubrg/providers/Microsoft.Devices/IotHubs/xplattestiothub74\",\"name\":\"xplattestiothub74\",\"type\":\"Microsoft.Devices/IotHubs\",\"location\":\"westus\",\"tags\":{\"t1\":\"v1\"},\"subscriptionid\":\"2c224e7e-3ef5-431d-a57b-e71f4662e3a6\",\"resourcegroup\":\"xplattestiothubrg\",\"etag\":\"AAAAAABdGdk=\",\"properties\":{\"provisioningState\":\"Accepted\",\"authorizationPolicies\":[{\"keyName\":\"iothubowner\",\"primaryKey\":\"07QHDsmFx2QCTGprtaF+CGmAYj6dDSUXkj2QFeggQeA=\",\"secondaryKey\":\"nyUv2ryt5eht1A+775SbrxpwEh9SpCIeJzR7jdlMzZU=\",\"rights\":\"RegistryWrite, ServiceConnect, DeviceConnect\"},{\"keyName\":\"service\",\"primaryKey\":\"Qg8Wq30hp87sSAm77A0k6riphIc9NYKU97foIb91i4A=\",\"secondaryKey\":\"DPgT1hTeJxjAXQ7lFajoMi4qjhjXAy4dU3f4n8ooE7E=\",\"rights\":\"ServiceConnect\"},{\"keyName\":\"device\",\"primaryKey\":\"JFX6gu4se6qUPfTW12i9KSDf+YTr7Kl0XAzuXHduc+k=\",\"secondaryKey\":\"QEFM77HuwQOG2kq/mWXX18GSS0PkOMpSFaPk4aRAmjY=\",\"rights\":\"DeviceConnect\"},{\"keyName\":\"registryRead\",\"primaryKey\":\"YTYKxTV88NAXTLBbTlXOGEI6Q7p7fSDrfALN0GN1DAc=\",\"secondaryKey\":\"ZOcvpKpGBP5GEvpDwNB/F21pJ94h+uUQ9eUCunRJI58=\",\"rights\":\"RegistryRead\"},{\"keyName\":\"registryReadWrite\",\"primaryKey\":\"evXUR+lV/NllbDJKB47wBkvHT833+O5M5Gjxi/qEKh0=\",\"secondaryKey\":\"Ta9o29AEGgl3ag1LevrjqjDKB8kLl9XyiT1BeFnQHcA=\",\"rights\":\"RegistryWrite\"}],\"hostName\":\"xplattestiothub74.azure-devices.net\",\"eventHubEndpoints\":{\"events\":{\"retentionTimeInDays\":5,\"partitionCount\":2,\"partitionIds\":[\"0\",\"1\"],\"path\":\"xplattestiothub74\",\"endpoint\":\"sb://iothub-ns-xplattesti-64820-bbd7b2afd9.servicebus.windows.net/\"},\"operationsMonitoringEvents\":{\"retentionTimeInDays\":5,\"partitionCount\":2,\"partitionIds\":[\"0\",\"1\"],\"path\":\"xplattestiothub74-operationmonitoring\",\"endpoint\":\"sb://iothub-ns-xplattesti-64820-bbd7b2afd9.servicebus.windows.net/\"}},\"storageEndpoints\":{\"$default\":{\"sasTtlAsIso8601\":\"PT1H\",\"connectionString\":\"\",\"containerName\":\"\"}},\"messagingEndpoints\":{\"fileNotifications\":{\"lockDurationAsIso8601\":\"PT1M\",\"ttlAsIso8601\":\"PT1H\",\"maxDeliveryCount\":10}},\"enableFileUploadNotifications\":false,\"cloudToDevice\":{\"maxDeliveryCount\":50,\"defaultTtlAsIso8601\":\"PT1H\",\"feedback\":{\"lockDurationAsIso8601\":\"PT1M\",\"ttlAsIso8601\":\"PT1H\",\"maxDeliveryCount\":1}},\"operationsMonitoringProperties\":{\"events\":{\"None\":\"None\",\"Connections\":\"None\",\"DeviceTelemetry\":\"None\",\"C2DCommands\":\"None\",\"DeviceIdentityOperations\":\"None\",\"FileUploadOperations\":\"None\"}},\"features\":\"None\",\"generationNumber\":0},\"sku\":{\"name\":\"S2\",\"tier\":\"Standard\",\"capacity\":2}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2506',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplattestiothubrg/providers/Microsoft.Devices/IotHubs/xplattestiothub74/operationResults/MjIyODhhNWYtN2ExMS00YmQ2LTgwMmMtZjY0NmIwYmRiYzhk?api-version=2016-02-03&asyncinfo',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '4996',
  'x-ms-request-id': 'a83967ef-3f4b-425b-9c71-ea282b97e6c1',
  'x-ms-correlation-request-id': 'a83967ef-3f4b-425b-9c71-ea282b97e6c1',
  'x-ms-routing-request-id': 'WESTEUROPE:20160901T091417Z:a83967ef-3f4b-425b-9c71-ea282b97e6c1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 01 Sep 2016 09:14:17 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplattestiothubrg/providers/Microsoft.Devices/IotHubs/xplattestiothub74/operationResults/MjIyODhhNWYtN2ExMS00YmQ2LTgwMmMtZjY0NmIwYmRiYzhk?api-version=2016-02-03&asyncinfo')
  .reply(200, "{\"status\":\"Succeeded\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '22',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14981',
  'x-ms-request-id': 'bfc74838-3c10-499c-a6a6-9626f2446928',
  'x-ms-correlation-request-id': 'bfc74838-3c10-499c-a6a6-9626f2446928',
  'x-ms-routing-request-id': 'WESTEUROPE:20160901T091448Z:bfc74838-3c10-499c-a6a6-9626f2446928',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 01 Sep 2016 09:14:47 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplattestiothubrg/providers/Microsoft.Devices/IotHubs/xplattestiothub74?api-version=2016-02-03')
  .reply(200, "{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplattestiothubrg/providers/Microsoft.Devices/IotHubs/xplattestiothub74\",\"name\":\"xplattestiothub74\",\"type\":\"Microsoft.Devices/IotHubs\",\"location\":\"westus\",\"tags\":{\"t1\":\"v1\"},\"subscriptionid\":\"2c224e7e-3ef5-431d-a57b-e71f4662e3a6\",\"resourcegroup\":\"xplattestiothubrg\",\"etag\":\"AAAAAABdGeg=\",\"properties\":{\"state\":\"Active\",\"provisioningState\":\"Succeeded\",\"hostName\":\"xplattestiothub74.azure-devices.net\",\"eventHubEndpoints\":{\"events\":{\"retentionTimeInDays\":5,\"partitionCount\":2,\"partitionIds\":[\"0\",\"1\"],\"path\":\"xplattestiothub74\",\"endpoint\":\"sb://iothub-ns-xplattesti-64820-bbd7b2afd9.servicebus.windows.net/\"},\"operationsMonitoringEvents\":{\"retentionTimeInDays\":5,\"partitionCount\":2,\"partitionIds\":[\"0\",\"1\"],\"path\":\"xplattestiothub74-operationmonitoring\",\"endpoint\":\"sb://iothub-ns-xplattesti-64820-bbd7b2afd9.servicebus.windows.net/\"}},\"storageEndpoints\":{\"$default\":{\"sasTtlAsIso8601\":\"PT1H\",\"connectionString\":\"\",\"containerName\":\"\"}},\"messagingEndpoints\":{\"fileNotifications\":{\"lockDurationAsIso8601\":\"PT1M\",\"ttlAsIso8601\":\"PT1H\",\"maxDeliveryCount\":10}},\"enableFileUploadNotifications\":false,\"cloudToDevice\":{\"maxDeliveryCount\":50,\"defaultTtlAsIso8601\":\"PT1H\",\"feedback\":{\"lockDurationAsIso8601\":\"PT1M\",\"ttlAsIso8601\":\"PT1H\",\"maxDeliveryCount\":1}},\"operationsMonitoringProperties\":{\"events\":{\"None\":\"None\",\"Connections\":\"None\",\"DeviceTelemetry\":\"None\",\"C2DCommands\":\"None\",\"DeviceIdentityOperations\":\"None\",\"FileUploadOperations\":\"None\"}},\"features\":\"None\",\"generationNumber\":0},\"sku\":{\"name\":\"S2\",\"tier\":\"Standard\",\"capacity\":2}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1604',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14986',
  'x-ms-request-id': '46f5633a-a866-4b99-8a4e-0d3d9171a1df',
  'x-ms-correlation-request-id': '46f5633a-a866-4b99-8a4e-0d3d9171a1df',
  'x-ms-routing-request-id': 'WESTEUROPE:20160901T091449Z:46f5633a-a866-4b99-8a4e-0d3d9171a1df',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 01 Sep 2016 09:14:49 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .post('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplattestiothubrg/providers/Microsoft.Devices/IotHubs/xplattestiothub74/IotHubKeys/key1/listkeys?api-version=2016-02-03')
  .reply(404, "{\"Code\":\"KeyNameNotFound\",\"HttpStatusCode\":\"NotFound\",\"Message\":\"Key name not found: key1. If you contact a support representative please include this correlation identifier: f43b4aca-1cb5-4e79-8827-6a366cfc0687, timestamp: 2016-09-01 09:14:49Z, errorcode: IH404001.\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '268',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1193',
  'x-ms-request-id': '094470a1-0b50-4684-83b9-a710a8ff7d38',
  'x-ms-correlation-request-id': '094470a1-0b50-4684-83b9-a710a8ff7d38',
  'x-ms-routing-request-id': 'WESTEUROPE:20160901T091450Z:094470a1-0b50-4684-83b9-a710a8ff7d38',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 01 Sep 2016 09:14:49 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .post('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplattestiothubrg/providers/Microsoft.Devices/IotHubs/xplattestiothub74/listkeys?api-version=2016-02-03')
  .reply(200, "{\"value\":[{\"keyName\":\"iothubowner\",\"primaryKey\":\"07QHDsmFx2QCTGprtaF+CGmAYj6dDSUXkj2QFeggQeA=\",\"secondaryKey\":\"nyUv2ryt5eht1A+775SbrxpwEh9SpCIeJzR7jdlMzZU=\",\"rights\":\"RegistryWrite, ServiceConnect, DeviceConnect\"},{\"keyName\":\"service\",\"primaryKey\":\"Qg8Wq30hp87sSAm77A0k6riphIc9NYKU97foIb91i4A=\",\"secondaryKey\":\"DPgT1hTeJxjAXQ7lFajoMi4qjhjXAy4dU3f4n8ooE7E=\",\"rights\":\"ServiceConnect\"},{\"keyName\":\"device\",\"primaryKey\":\"JFX6gu4se6qUPfTW12i9KSDf+YTr7Kl0XAzuXHduc+k=\",\"secondaryKey\":\"QEFM77HuwQOG2kq/mWXX18GSS0PkOMpSFaPk4aRAmjY=\",\"rights\":\"DeviceConnect\"},{\"keyName\":\"registryRead\",\"primaryKey\":\"YTYKxTV88NAXTLBbTlXOGEI6Q7p7fSDrfALN0GN1DAc=\",\"secondaryKey\":\"ZOcvpKpGBP5GEvpDwNB/F21pJ94h+uUQ9eUCunRJI58=\",\"rights\":\"RegistryRead\"},{\"keyName\":\"registryReadWrite\",\"primaryKey\":\"evXUR+lV/NllbDJKB47wBkvHT833+O5M5Gjxi/qEKh0=\",\"secondaryKey\":\"Ta9o29AEGgl3ag1LevrjqjDKB8kLl9XyiT1BeFnQHcA=\",\"rights\":\"RegistryWrite\"}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '905',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-request-id': '1548ddf5-af4e-4535-ab45-f9c5e48f8e94',
  'x-ms-correlation-request-id': '1548ddf5-af4e-4535-ab45-f9c5e48f8e94',
  'x-ms-routing-request-id': 'WESTEUROPE:20160901T091451Z:1548ddf5-af4e-4535-ab45-f9c5e48f8e94',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 01 Sep 2016 09:14:51 GMT' });
 return result; }]];