[**Documentation**](../../README.md)

***

[Documentation](../../packages.md) / [discloud.app](../README.md) / ApiAppManagerRemovedAll

# Interface: ApiAppManagerRemovedAll

Defined in: [packages/api-types/rest/v2/app.ts:64](https://github.com/discloud/discloud.app/blob/ef5a53ad8a6f91adbc134ed77dfe720d80e4b29f/packages/api-types/rest/v2/app.ts#L64)

## Extends

- [`Omit`](https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys)\<[`ApiAppManager`](ApiAppManager.md), `"alreadyOnline"`\>

## Properties

### alreadyInProcess

> **alreadyInProcess**: `string`[]

Defined in: [packages/api-types/rest/v2/app.ts:57](https://github.com/discloud/discloud.app/blob/ef5a53ad8a6f91adbc134ed77dfe720d80e4b29f/packages/api-types/rest/v2/app.ts#L57)

Which of your applications are currently `processing`

#### Inherited from

[`ApiAppManager`](ApiAppManager.md).[`alreadyInProcess`](ApiAppManager.md#alreadyinprocess)

***

### alreadyOffline

> **alreadyOffline**: `string`[]

Defined in: [packages/api-types/rest/v2/app.ts:59](https://github.com/discloud/discloud.app/blob/ef5a53ad8a6f91adbc134ed77dfe720d80e4b29f/packages/api-types/rest/v2/app.ts#L59)

Which of your applications are currently `offline`

#### Inherited from

[`ApiAppManager`](ApiAppManager.md).[`alreadyOffline`](ApiAppManager.md#alreadyoffline)

***

### removealled

> **removealled**: `string`[]

Defined in: [packages/api-types/rest/v2/app.ts:66](https://github.com/discloud/discloud.app/blob/ef5a53ad8a6f91adbc134ed77dfe720d80e4b29f/packages/api-types/rest/v2/app.ts#L66)

Which of your applications have been `removed`
