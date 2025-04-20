[**Documentation**](../../README.md)

***

[Documentation](../../packages.md) / [discloud.app](../README.md) / RESTGetApiAppAllBackupResult

# Interface: RESTGetApiAppAllBackupResult

Defined in: [packages/api-types/rest/v2/app.ts:209](https://github.com/discloud/discloud.app/blob/5b4e3fe9c701f0b4f5ffa4246f463403d1e47fa1/packages/api-types/rest/v2/app.ts#L209)

## Extends

- [`RESTApiBaseResult`](RESTApiBaseResult.md)

## Properties

### backups

> **backups**: [`ApiAppBackupAll`](ApiAppBackupAll.md)[]

Defined in: [packages/api-types/rest/v2/app.ts:213](https://github.com/discloud/discloud.app/blob/5b4e3fe9c701f0b4f5ffa4246f463403d1e47fa1/packages/api-types/rest/v2/app.ts#L213)

Backup of all of your applications

***

### message

> **message**: `string`

Defined in: [packages/api-types/rest/v2/base.ts:10](https://github.com/discloud/discloud.app/blob/5b4e3fe9c701f0b4f5ffa4246f463403d1e47fa1/packages/api-types/rest/v2/base.ts#L10)

Message of the API
- It is useful to use as logs

#### Inherited from

[`RESTApiBaseResult`](RESTApiBaseResult.md).[`message`](RESTApiBaseResult.md#message)

***

### status

> **status**: [`RESTApiStatusResponse`](../type-aliases/RESTApiStatusResponse.md)

Defined in: [packages/api-types/rest/v2/base.ts:5](https://github.com/discloud/discloud.app/blob/5b4e3fe9c701f0b4f5ffa4246f463403d1e47fa1/packages/api-types/rest/v2/base.ts#L5)

The status of API response

#### Inherited from

[`RESTApiBaseResult`](RESTApiBaseResult.md).[`status`](RESTApiBaseResult.md#status)
