[**@discloudapp/api-types**](../README.md)

***

[Documentation](../../../packages.md) / [@discloudapp/api-types](../README.md) / ApiAppManagerStartedAll

# Interface: ApiAppManagerStartedAll

Defined in: [rest/v2/app.ts:112](https://github.com/discloud/discloud.app/blob/bfcb626f6315ac03eb36b36e57f162cd101e1996/packages/api-types/rest/v2/app.ts#L112)

## Extends

- `Omit`\<[`ApiAppManager`](ApiAppManager.md), `"alreadyOffline"`\>

## Properties

### alreadyInProcess

> **alreadyInProcess**: `string`[]

Defined in: [rest/v2/app.ts:87](https://github.com/discloud/discloud.app/blob/bfcb626f6315ac03eb36b36e57f162cd101e1996/packages/api-types/rest/v2/app.ts#L87)

Which of your applications are currently `processing`

#### Inherited from

`Omit.alreadyInProcess`

***

### alreadyOnline

> **alreadyOnline**: `string`[]

Defined in: [rest/v2/app.ts:95](https://github.com/discloud/discloud.app/blob/bfcb626f6315ac03eb36b36e57f162cd101e1996/packages/api-types/rest/v2/app.ts#L95)

Which of your applications are currently `online`

#### Inherited from

`Omit.alreadyOnline`

***

### started

> **started**: `string`[]

Defined in: [rest/v2/app.ts:116](https://github.com/discloud/discloud.app/blob/bfcb626f6315ac03eb36b36e57f162cd101e1996/packages/api-types/rest/v2/app.ts#L116)

Which of your applications have been `started`
