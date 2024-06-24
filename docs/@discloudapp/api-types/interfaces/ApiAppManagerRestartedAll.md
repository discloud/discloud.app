[**@discloudapp/api-types**](../README.md) • **Docs**

***

[Documentation](../../../packages.md) / [@discloudapp/api-types](../README.md) / ApiAppManagerRestartedAll

# Interface: ApiAppManagerRestartedAll

## Extends

- `Omit`\<[`ApiAppManager`](ApiAppManager.md), `"alreadyOnline"`\>

## Properties

### alreadyInProcess

> **alreadyInProcess**: `string`[]

Which of your applications are currently `processing`

#### Inherited from

`Omit.alreadyInProcess`

#### Defined in

[rest/v2/app.ts:87](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/api-types/rest/v2/app.ts#L87)

***

### alreadyOffline

> **alreadyOffline**: `string`[]

Which of your applications are currently `offline`

#### Inherited from

`Omit.alreadyOffline`

#### Defined in

[rest/v2/app.ts:91](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/api-types/rest/v2/app.ts#L91)

***

### restarted

> **restarted**: `string`[]

Which of your applications have been `restarted`

#### Defined in

[rest/v2/app.ts:109](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/api-types/rest/v2/app.ts#L109)
