[**Documentation**](../../README.md)

***

[Documentation](../../packages.md) / [discloud.app](../README.md) / ApiAppManagerStartedAll

# Interface: ApiAppManagerStartedAll

Defined in: [packages/api-types/rest/v2/app.ts:74](https://github.com/discloud/discloud.app/blob/c4016c90540db229b9170cffe6882c41b0b114cb/packages/api-types/rest/v2/app.ts#L74)

## Extends

- [`Omit`](https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys)\<[`ApiAppManager`](ApiAppManager.md), `"alreadyOffline"`\>

## Properties

### alreadyInProcess

> **alreadyInProcess**: `string`[]

Defined in: [packages/api-types/rest/v2/app.ts:57](https://github.com/discloud/discloud.app/blob/c4016c90540db229b9170cffe6882c41b0b114cb/packages/api-types/rest/v2/app.ts#L57)

Which of your applications are currently `processing`

#### Inherited from

[`ApiAppManager`](ApiAppManager.md).[`alreadyInProcess`](ApiAppManager.md#alreadyinprocess)

***

### alreadyOnline

> **alreadyOnline**: `string`[]

Defined in: [packages/api-types/rest/v2/app.ts:61](https://github.com/discloud/discloud.app/blob/c4016c90540db229b9170cffe6882c41b0b114cb/packages/api-types/rest/v2/app.ts#L61)

Which of your applications are currently `online`

#### Inherited from

[`ApiAppManager`](ApiAppManager.md).[`alreadyOnline`](ApiAppManager.md#alreadyonline)

***

### started

> **started**: `string`[]

Defined in: [packages/api-types/rest/v2/app.ts:76](https://github.com/discloud/discloud.app/blob/c4016c90540db229b9170cffe6882c41b0b114cb/packages/api-types/rest/v2/app.ts#L76)

Which of your applications have been `started`
