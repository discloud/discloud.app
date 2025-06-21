[**Documentation**](../../README.md)

***

[Documentation](../../packages.md) / [discloud.app](../README.md) / ApiAppManagerStartedAll

# Interface: ApiAppManagerStartedAll

Defined in: [packages/api-types/rest/v2/app.ts:112](https://github.com/discloud/discloud.app/blob/1e4ce40911bd2c25d95ae21441839a6f9ec7c445/packages/api-types/rest/v2/app.ts#L112)

## Extends

- [`Omit`](https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys)\<[`ApiAppManager`](ApiAppManager.md), `"alreadyOffline"`\>

## Properties

### alreadyInProcess

> **alreadyInProcess**: `string`[]

Defined in: [packages/api-types/rest/v2/app.ts:87](https://github.com/discloud/discloud.app/blob/1e4ce40911bd2c25d95ae21441839a6f9ec7c445/packages/api-types/rest/v2/app.ts#L87)

Which of your applications are currently `processing`

#### Inherited from

`Omit.alreadyInProcess`

***

### alreadyOnline

> **alreadyOnline**: `string`[]

Defined in: [packages/api-types/rest/v2/app.ts:95](https://github.com/discloud/discloud.app/blob/1e4ce40911bd2c25d95ae21441839a6f9ec7c445/packages/api-types/rest/v2/app.ts#L95)

Which of your applications are currently `online`

#### Inherited from

`Omit.alreadyOnline`

***

### started

> **started**: `string`[]

Defined in: [packages/api-types/rest/v2/app.ts:116](https://github.com/discloud/discloud.app/blob/1e4ce40911bd2c25d95ae21441839a6f9ec7c445/packages/api-types/rest/v2/app.ts#L116)

Which of your applications have been `started`
