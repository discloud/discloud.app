[**Documentation**](../../../README.md)

***

[Documentation](../../../packages.md) / [@discloudapp/api-types](../README.md) / ApiAppManagerRemovedAll

# Interface: ApiAppManagerRemovedAll

Defined in: [rest/v2/app.ts:98](https://github.com/discloud/discloud.app/blob/5b4e3fe9c701f0b4f5ffa4246f463403d1e47fa1/packages/api-types/rest/v2/app.ts#L98)

## Extends

- [`Omit`](https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys)\<[`ApiAppManager`](ApiAppManager.md), `"alreadyOnline"`\>

## Properties

### alreadyInProcess

> **alreadyInProcess**: `string`[]

Defined in: [rest/v2/app.ts:87](https://github.com/discloud/discloud.app/blob/5b4e3fe9c701f0b4f5ffa4246f463403d1e47fa1/packages/api-types/rest/v2/app.ts#L87)

Which of your applications are currently `processing`

#### Inherited from

`Omit.alreadyInProcess`

***

### alreadyOffline

> **alreadyOffline**: `string`[]

Defined in: [rest/v2/app.ts:91](https://github.com/discloud/discloud.app/blob/5b4e3fe9c701f0b4f5ffa4246f463403d1e47fa1/packages/api-types/rest/v2/app.ts#L91)

Which of your applications are currently `offline`

#### Inherited from

`Omit.alreadyOffline`

***

### removealled

> **removealled**: `string`[]

Defined in: [rest/v2/app.ts:102](https://github.com/discloud/discloud.app/blob/5b4e3fe9c701f0b4f5ffa4246f463403d1e47fa1/packages/api-types/rest/v2/app.ts#L102)

Which of your applications have been `removed`
