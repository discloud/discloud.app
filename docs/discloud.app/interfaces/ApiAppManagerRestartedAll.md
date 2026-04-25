[**Documentation**](../../README.md)

***

[Documentation](../../packages.md) / [discloud.app](../README.md) / ApiAppManagerRestartedAll

# Interface: ApiAppManagerRestartedAll

Defined in: [packages/api-types/rest/v2/app.ts:69](https://github.com/discloud/discloud.app/blob/c4016c90540db229b9170cffe6882c41b0b114cb/packages/api-types/rest/v2/app.ts#L69)

## Extends

- [`Omit`](https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys)\<[`ApiAppManager`](ApiAppManager.md), `"alreadyOnline"`\>

## Properties

### alreadyInProcess

> **alreadyInProcess**: `string`[]

Defined in: [packages/api-types/rest/v2/app.ts:57](https://github.com/discloud/discloud.app/blob/c4016c90540db229b9170cffe6882c41b0b114cb/packages/api-types/rest/v2/app.ts#L57)

Which of your applications are currently `processing`

#### Inherited from

[`ApiAppManager`](ApiAppManager.md).[`alreadyInProcess`](ApiAppManager.md#alreadyinprocess)

***

### alreadyOffline

> **alreadyOffline**: `string`[]

Defined in: [packages/api-types/rest/v2/app.ts:59](https://github.com/discloud/discloud.app/blob/c4016c90540db229b9170cffe6882c41b0b114cb/packages/api-types/rest/v2/app.ts#L59)

Which of your applications are currently `offline`

#### Inherited from

[`ApiAppManager`](ApiAppManager.md).[`alreadyOffline`](ApiAppManager.md#alreadyoffline)

***

### restarted

> **restarted**: `string`[]

Defined in: [packages/api-types/rest/v2/app.ts:71](https://github.com/discloud/discloud.app/blob/c4016c90540db229b9170cffe6882c41b0b114cb/packages/api-types/rest/v2/app.ts#L71)

Which of your applications have been `restarted`
