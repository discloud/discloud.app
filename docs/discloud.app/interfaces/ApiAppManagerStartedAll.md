[**discloud.app**](../README.md)

***

[Documentation](../../packages.md) / [discloud.app](../README.md) / ApiAppManagerStartedAll

# Interface: ApiAppManagerStartedAll

Defined in: [packages/api-types/rest/v2/app.ts:112](https://github.com/discloud/discloud.app/blob/8d6df0b18784d1a4408701ac8e6b9db44dbb7133/packages/api-types/rest/v2/app.ts#L112)

## Extends

- `Omit`\<[`ApiAppManager`](ApiAppManager.md), `"alreadyOffline"`\>

## Properties

### alreadyInProcess

> **alreadyInProcess**: `string`[]

Defined in: [packages/api-types/rest/v2/app.ts:87](https://github.com/discloud/discloud.app/blob/8d6df0b18784d1a4408701ac8e6b9db44dbb7133/packages/api-types/rest/v2/app.ts#L87)

Which of your applications are currently `processing`

#### Inherited from

`Omit.alreadyInProcess`

***

### alreadyOnline

> **alreadyOnline**: `string`[]

Defined in: [packages/api-types/rest/v2/app.ts:95](https://github.com/discloud/discloud.app/blob/8d6df0b18784d1a4408701ac8e6b9db44dbb7133/packages/api-types/rest/v2/app.ts#L95)

Which of your applications are currently `online`

#### Inherited from

`Omit.alreadyOnline`

***

### started

> **started**: `string`[]

Defined in: [packages/api-types/rest/v2/app.ts:116](https://github.com/discloud/discloud.app/blob/8d6df0b18784d1a4408701ac8e6b9db44dbb7133/packages/api-types/rest/v2/app.ts#L116)

Which of your applications have been `started`
