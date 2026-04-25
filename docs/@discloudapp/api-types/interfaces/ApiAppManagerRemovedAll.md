[**Documentation**](../../../README.md)

***

[Documentation](../../../packages.md) / [@discloudapp/api-types](../README.md) / ApiAppManagerRemovedAll

# Interface: ApiAppManagerRemovedAll

Defined in: [rest/v2/app.ts:64](https://github.com/discloud/discloud.app/blob/c4016c90540db229b9170cffe6882c41b0b114cb/packages/api-types/rest/v2/app.ts#L64)

## Extends

- [`Omit`](https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys)\<[`ApiAppManager`](ApiAppManager.md), `"alreadyOnline"`\>

## Properties

### alreadyInProcess

> **alreadyInProcess**: `string`[]

Defined in: [rest/v2/app.ts:57](https://github.com/discloud/discloud.app/blob/c4016c90540db229b9170cffe6882c41b0b114cb/packages/api-types/rest/v2/app.ts#L57)

Which of your applications are currently `processing`

#### Inherited from

[`ApiAppManager`](ApiAppManager.md).[`alreadyInProcess`](ApiAppManager.md#alreadyinprocess)

***

### alreadyOffline

> **alreadyOffline**: `string`[]

Defined in: [rest/v2/app.ts:59](https://github.com/discloud/discloud.app/blob/c4016c90540db229b9170cffe6882c41b0b114cb/packages/api-types/rest/v2/app.ts#L59)

Which of your applications are currently `offline`

#### Inherited from

[`ApiAppManager`](ApiAppManager.md).[`alreadyOffline`](ApiAppManager.md#alreadyoffline)

***

### removealled

> **removealled**: `string`[]

Defined in: [rest/v2/app.ts:66](https://github.com/discloud/discloud.app/blob/c4016c90540db229b9170cffe6882c41b0b114cb/packages/api-types/rest/v2/app.ts#L66)

Which of your applications have been `removed`
