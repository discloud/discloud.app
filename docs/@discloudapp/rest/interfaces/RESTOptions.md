[**@discloudapp/rest**](../README.md)

***

[Documentation](../../../packages.md) / [@discloudapp/rest](../README.md) / RESTOptions

# Interface: RESTOptions

Defined in: [packages/rest/src/@types/index.ts:8](https://github.com/discloud/discloud.app/blob/8d6df0b18784d1a4408701ac8e6b9db44dbb7133/packages/rest/src/@types/index.ts#L8)

## Properties

### api

> **api**: `string`

Defined in: [packages/rest/src/@types/index.ts:13](https://github.com/discloud/discloud.app/blob/8d6df0b18784d1a4408701ac8e6b9db44dbb7133/packages/rest/src/@types/index.ts#L13)

The base api path, without version

#### Default Value

`'https://api.discloud.app'`

***

### globalRequestsPerMinute

> **globalRequestsPerMinute**: `number`

Defined in: [packages/rest/src/@types/index.ts:19](https://github.com/discloud/discloud.app/blob/8d6df0b18784d1a4408701ac8e6b9db44dbb7133/packages/rest/src/@types/index.ts#L19)

How many requests to allow sending per second (Infinity for unlimited, 60 for the standard global limit used by Discloud)

#### Default Value

`60`

***

### headers

> **headers**: `undefined` \| `HeadersInit`

Defined in: [packages/rest/src/@types/index.ts:25](https://github.com/discloud/discloud.app/blob/8d6df0b18784d1a4408701ac8e6b9db44dbb7133/packages/rest/src/@types/index.ts#L25)

Additional headers to send for all API requests

#### Default Value

`{}`

***

### version

> **version**: `string`

Defined in: [packages/rest/src/@types/index.ts:31](https://github.com/discloud/discloud.app/blob/8d6df0b18784d1a4408701ac8e6b9db44dbb7133/packages/rest/src/@types/index.ts#L31)

The version of the API to use

#### Default Value

`{APIVersion}`
