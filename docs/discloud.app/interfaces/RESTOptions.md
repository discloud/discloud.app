[**Documentation**](../../README.md)

***

[Documentation](../../packages.md) / [discloud.app](../README.md) / RESTOptions

# Interface: RESTOptions

Defined in: packages/rest/dist/@types/index.d.ts:6

## Properties

### api

> **api**: `string`

Defined in: packages/rest/dist/@types/index.d.ts:11

The base api path, without version

#### Default Value

`'https://api.discloud.app'`

***

### globalRequestsPerMinute

> **globalRequestsPerMinute**: `number`

Defined in: packages/rest/dist/@types/index.d.ts:17

How many requests to allow sending per second (Infinity for unlimited, 60 for the standard global limit used by Discloud)

#### Default Value

`60`

***

### headers

> **headers**: `HeadersInit` \| `undefined`

Defined in: packages/rest/dist/@types/index.d.ts:23

Additional headers to send for all API requests

#### Default Value

`{}`

***

### userAgent

> **userAgent**: [`IUserAgent`](IUserAgent.md)

Defined in: packages/rest/dist/@types/index.d.ts:30

***

### version

> **version**: `string`

Defined in: packages/rest/dist/@types/index.d.ts:29

The version of the API to use

#### Default Value

`{APIVersion}`
