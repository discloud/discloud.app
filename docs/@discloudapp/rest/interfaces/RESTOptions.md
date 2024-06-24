[**@discloudapp/rest**](../README.md) • **Docs**

***

[Documentation](../../../packages.md) / [@discloudapp/rest](../README.md) / RESTOptions

# Interface: RESTOptions

## Properties

### api

> **api**: `string`

The base api path, without version

#### Default Value

`'https://api.discloud.app'`

#### Defined in

[packages/rest/src/@types/index.ts:13](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/rest/src/@types/index.ts#L13)

***

### globalRequestsPerMinute

> **globalRequestsPerMinute**: `number`

How many requests to allow sending per second (Infinity for unlimited, 60 for the standard global limit used by Discloud)

#### Default Value

`60`

#### Defined in

[packages/rest/src/@types/index.ts:19](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/rest/src/@types/index.ts#L19)

***

### headers

> **headers**: `Record`\<`string`, `string`\>

Additional headers to send for all API requests

#### Default Value

`{}`

#### Defined in

[packages/rest/src/@types/index.ts:25](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/rest/src/@types/index.ts#L25)

***

### version

> **version**: `string`

The version of the API to use

#### Default Value

`{APIVersion}`

#### Defined in

[packages/rest/src/@types/index.ts:31](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/rest/src/@types/index.ts#L31)
