[**discloud.app**](../README.md)

***

[Documentation](../../packages.md) / [discloud.app](../README.md) / ApiAppManagerRemovedAll

# Interface: ApiAppManagerRemovedAll

Defined in: [packages/api-types/rest/v2/app.ts:98](https://github.com/discloud/discloud.app/blob/1458affc9a022eb2fc5fe37e7b3b002130b2fdad/packages/api-types/rest/v2/app.ts#L98)

## Extends

- `Omit`\<[`ApiAppManager`](ApiAppManager.md), `"alreadyOnline"`\>

## Properties

### alreadyInProcess

> **alreadyInProcess**: `string`[]

Defined in: [packages/api-types/rest/v2/app.ts:87](https://github.com/discloud/discloud.app/blob/1458affc9a022eb2fc5fe37e7b3b002130b2fdad/packages/api-types/rest/v2/app.ts#L87)

Which of your applications are currently `processing`

#### Inherited from

`Omit.alreadyInProcess`

***

### alreadyOffline

> **alreadyOffline**: `string`[]

Defined in: [packages/api-types/rest/v2/app.ts:91](https://github.com/discloud/discloud.app/blob/1458affc9a022eb2fc5fe37e7b3b002130b2fdad/packages/api-types/rest/v2/app.ts#L91)

Which of your applications are currently `offline`

#### Inherited from

`Omit.alreadyOffline`

***

### removealled

> **removealled**: `string`[]

Defined in: [packages/api-types/rest/v2/app.ts:102](https://github.com/discloud/discloud.app/blob/1458affc9a022eb2fc5fe37e7b3b002130b2fdad/packages/api-types/rest/v2/app.ts#L102)

Which of your applications have been `removed`
