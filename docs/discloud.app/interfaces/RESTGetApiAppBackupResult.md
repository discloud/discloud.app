[**discloud.app**](../README.md) • **Docs**

***

[Documentation](../../packages.md) / [discloud.app](../README.md) / RESTGetApiAppBackupResult

# Interface: RESTGetApiAppBackupResult

## Extends

- [`RESTApiBaseResult`](RESTApiBaseResult.md)

## Properties

### backups

> **backups**: [`ApiAppBackup`](ApiAppBackup.md)

Backup of your application

#### Defined in

[packages/api-types/rest/v2/app.ts:240](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/api-types/rest/v2/app.ts#L240)

***

### message

> **message**: `string`

Message of the API
- It is useful to use as logs

#### Inherited from

[`RESTApiBaseResult`](RESTApiBaseResult.md).[`message`](RESTApiBaseResult.md#message)

#### Defined in

[packages/api-types/rest/v2/base.ts:10](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/api-types/rest/v2/base.ts#L10)

***

### status

> **status**: [`RESTApiStatusResponse`](../type-aliases/RESTApiStatusResponse.md)

The status of API response

#### Inherited from

[`RESTApiBaseResult`](RESTApiBaseResult.md).[`status`](RESTApiBaseResult.md#status)

#### Defined in

[packages/api-types/rest/v2/base.ts:5](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/api-types/rest/v2/base.ts#L5)
