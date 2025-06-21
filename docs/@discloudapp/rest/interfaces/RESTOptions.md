[**Documentation**](../../../README.md)

***

[Documentation](../../../packages.md) / [@discloudapp/rest](../README.md) / RESTOptions

# Interface: RESTOptions

Defined in: [packages/rest/src/@types/index.ts:9](https://github.com/discloud/discloud.app/blob/1e4ce40911bd2c25d95ae21441839a6f9ec7c445/packages/rest/src/@types/index.ts#L9)

## Properties

### api

> **api**: `string`

Defined in: [packages/rest/src/@types/index.ts:14](https://github.com/discloud/discloud.app/blob/1e4ce40911bd2c25d95ae21441839a6f9ec7c445/packages/rest/src/@types/index.ts#L14)

The base api path, without version

#### Default Value

`'https://api.discloud.app'`

***

### globalRequestsPerMinute

> **globalRequestsPerMinute**: `number`

Defined in: [packages/rest/src/@types/index.ts:20](https://github.com/discloud/discloud.app/blob/1e4ce40911bd2c25d95ae21441839a6f9ec7c445/packages/rest/src/@types/index.ts#L20)

How many requests to allow sending per second (Infinity for unlimited, 60 for the standard global limit used by Discloud)

#### Default Value

`60`

***

### headers

> **headers**: `undefined` \| `HeadersInit`

Defined in: [packages/rest/src/@types/index.ts:26](https://github.com/discloud/discloud.app/blob/1e4ce40911bd2c25d95ae21441839a6f9ec7c445/packages/rest/src/@types/index.ts#L26)

Additional headers to send for all API requests

#### Default Value

`{}`

***

### userAgent

> **userAgent**: [`IUserAgent`](IUserAgent.md)

Defined in: [packages/rest/src/@types/index.ts:34](https://github.com/discloud/discloud.app/blob/1e4ce40911bd2c25d95ae21441839a6f9ec7c445/packages/rest/src/@types/index.ts#L34)

***

### version

> **version**: `string`

Defined in: [packages/rest/src/@types/index.ts:32](https://github.com/discloud/discloud.app/blob/1e4ce40911bd2c25d95ae21441839a6f9ec7c445/packages/rest/src/@types/index.ts#L32)

The version of the API to use

#### Default Value

`{APIVersion}`
