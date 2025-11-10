[**Documentation**](../../../README.md)

***

[Documentation](../../../packages.md) / [@discloudapp/api-types](../README.md) / RESTGetApiAppAllBackupResult

# Interface: RESTGetApiAppAllBackupResult

Defined in: [rest/v2/app.ts:143](https://github.com/discloud/discloud.app/blob/ef5a53ad8a6f91adbc134ed77dfe720d80e4b29f/packages/api-types/rest/v2/app.ts#L143)

## Extends

- [`RESTApiBaseResult`](RESTApiBaseResult.md)

## Properties

### backups

> **backups**: [`ApiAppBackupAll`](ApiAppBackupAll.md)[]

Defined in: [rest/v2/app.ts:145](https://github.com/discloud/discloud.app/blob/ef5a53ad8a6f91adbc134ed77dfe720d80e4b29f/packages/api-types/rest/v2/app.ts#L145)

Backup of all of your applications

***

### message

> **message**: `string`

Defined in: [rest/v2/base.ts:10](https://github.com/discloud/discloud.app/blob/ef5a53ad8a6f91adbc134ed77dfe720d80e4b29f/packages/api-types/rest/v2/base.ts#L10)

Message of the API
- It is useful to use as logs

#### Inherited from

[`RESTApiBaseResult`](RESTApiBaseResult.md).[`message`](RESTApiBaseResult.md#message)

***

### status

> **status**: `"ok"` \| `"error"`

Defined in: [rest/v2/base.ts:5](https://github.com/discloud/discloud.app/blob/ef5a53ad8a6f91adbc134ed77dfe720d80e4b29f/packages/api-types/rest/v2/base.ts#L5)

The status of API response

#### Inherited from

[`RESTApiBaseResult`](RESTApiBaseResult.md).[`status`](RESTApiBaseResult.md#status)
