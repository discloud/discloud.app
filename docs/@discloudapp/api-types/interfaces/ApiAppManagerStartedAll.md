[**Documentation**](../../../README.md)

***

[Documentation](../../../packages.md) / [@discloudapp/api-types](../README.md) / ApiAppManagerStartedAll

# Interface: ApiAppManagerStartedAll

Defined in: [rest/v2/app.ts:74](https://github.com/discloud/discloud.app/blob/ef5a53ad8a6f91adbc134ed77dfe720d80e4b29f/packages/api-types/rest/v2/app.ts#L74)

## Extends

- [`Omit`](https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys)\<[`ApiAppManager`](ApiAppManager.md), `"alreadyOffline"`\>

## Properties

### alreadyInProcess

> **alreadyInProcess**: `string`[]

Defined in: [rest/v2/app.ts:57](https://github.com/discloud/discloud.app/blob/ef5a53ad8a6f91adbc134ed77dfe720d80e4b29f/packages/api-types/rest/v2/app.ts#L57)

Which of your applications are currently `processing`

#### Inherited from

[`ApiAppManager`](ApiAppManager.md).[`alreadyInProcess`](ApiAppManager.md#alreadyinprocess)

***

### alreadyOnline

> **alreadyOnline**: `string`[]

Defined in: [rest/v2/app.ts:61](https://github.com/discloud/discloud.app/blob/ef5a53ad8a6f91adbc134ed77dfe720d80e4b29f/packages/api-types/rest/v2/app.ts#L61)

Which of your applications are currently `online`

#### Inherited from

[`ApiAppManager`](ApiAppManager.md).[`alreadyOnline`](ApiAppManager.md#alreadyonline)

***

### started

> **started**: `string`[]

Defined in: [rest/v2/app.ts:76](https://github.com/discloud/discloud.app/blob/ef5a53ad8a6f91adbc134ed77dfe720d80e4b29f/packages/api-types/rest/v2/app.ts#L76)

Which of your applications have been `started`
