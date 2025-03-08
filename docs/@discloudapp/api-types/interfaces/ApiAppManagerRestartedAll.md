[**@discloudapp/api-types**](../README.md)

***

[Documentation](../../../packages.md) / [@discloudapp/api-types](../README.md) / ApiAppManagerRestartedAll

# Interface: ApiAppManagerRestartedAll

Defined in: [rest/v2/app.ts:105](https://github.com/discloud/discloud.app/blob/1458affc9a022eb2fc5fe37e7b3b002130b2fdad/packages/api-types/rest/v2/app.ts#L105)

## Extends

- `Omit`\<[`ApiAppManager`](ApiAppManager.md), `"alreadyOnline"`\>

## Properties

### alreadyInProcess

> **alreadyInProcess**: `string`[]

Defined in: [rest/v2/app.ts:87](https://github.com/discloud/discloud.app/blob/1458affc9a022eb2fc5fe37e7b3b002130b2fdad/packages/api-types/rest/v2/app.ts#L87)

Which of your applications are currently `processing`

#### Inherited from

`Omit.alreadyInProcess`

***

### alreadyOffline

> **alreadyOffline**: `string`[]

Defined in: [rest/v2/app.ts:91](https://github.com/discloud/discloud.app/blob/1458affc9a022eb2fc5fe37e7b3b002130b2fdad/packages/api-types/rest/v2/app.ts#L91)

Which of your applications are currently `offline`

#### Inherited from

`Omit.alreadyOffline`

***

### restarted

> **restarted**: `string`[]

Defined in: [rest/v2/app.ts:109](https://github.com/discloud/discloud.app/blob/1458affc9a022eb2fc5fe37e7b3b002130b2fdad/packages/api-types/rest/v2/app.ts#L109)

Which of your applications have been `restarted`
