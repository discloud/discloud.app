[Documentation](../README.md) / [Exports](../modules.md) / @discloudapp/rest

# Module: @discloudapp/rest

## Table of contents

### Enumerations

- [RESTEvents](../enums/discloudapp_rest.RESTEvents.md)
- [RequestMethod](../enums/discloudapp_rest.RequestMethod.md)

### Classes

- [DiscloudAPIError](../classes/discloudapp_rest.DiscloudAPIError.md)
- [REST](../classes/discloudapp_rest.REST.md)
- [RequestManager](../classes/discloudapp_rest.RequestManager.md)

### Interfaces

- [InternalRequest](../interfaces/discloudapp_rest.InternalRequest.md)
- [RESTOptions](../interfaces/discloudapp_rest.RESTOptions.md)
- [RateLimitData](../interfaces/discloudapp_rest.RateLimitData.md)
- [RequestData](../interfaces/discloudapp_rest.RequestData.md)
- [RequestHeaders](../interfaces/discloudapp_rest.RequestHeaders.md)
- [RestEvents](../interfaces/discloudapp_rest.RestEvents-1.md)

### Type Aliases

- [RequestOptions](discloudapp_rest.md#requestoptions)
- [RouteLike](discloudapp_rest.md#routelike)

### Variables

- [DefaultRestOptions](discloudapp_rest.md#defaultrestoptions)
- [DefaultUserAgent](discloudapp_rest.md#defaultuseragent)
- [cpu\_arch](discloudapp_rest.md#cpu_arch)
- [os\_name](discloudapp_rest.md#os_name)
- [os\_platform](discloudapp_rest.md#os_platform)
- [os\_release](discloudapp_rest.md#os_release)

## Type Aliases

### RequestOptions

Ƭ **RequestOptions**: `Parameters`\<typeof `request`\>[``1``]

#### Defined in

[packages/rest/src/@types/index.ts:7](https://github.com/discloud/discloud.app/blob/967320a/packages/rest/src/@types/index.ts#L7)

___

### RouteLike

Ƭ **RouteLike**: \`/$\{string}\`

#### Defined in

[packages/rest/src/@types/index.ts:5](https://github.com/discloud/discloud.app/blob/967320a/packages/rest/src/@types/index.ts#L5)

## Variables

### DefaultRestOptions

• `Const` **DefaultRestOptions**: `Required`\<[`RESTOptions`](../interfaces/discloudapp_rest.RESTOptions.md)\>

#### Defined in

[packages/rest/src/utils/contants.ts:20](https://github.com/discloud/discloud.app/blob/967320a/packages/rest/src/utils/contants.ts#L20)

___

### DefaultUserAgent

• `Const` **DefaultUserAgent**: `string`

#### Defined in

[packages/rest/src/utils/contants.ts:18](https://github.com/discloud/discloud.app/blob/967320a/packages/rest/src/utils/contants.ts#L18)

___

### cpu\_arch

• `Const` **cpu\_arch**: `string`

#### Defined in

[packages/rest/src/utils/contants.ts:11](https://github.com/discloud/discloud.app/blob/967320a/packages/rest/src/utils/contants.ts#L11)

___

### os\_name

• `Const` **os\_name**: `string`

#### Defined in

[packages/rest/src/utils/contants.ts:8](https://github.com/discloud/discloud.app/blob/967320a/packages/rest/src/utils/contants.ts#L8)

___

### os\_platform

• `Const` **os\_platform**: `Platform`

#### Defined in

[packages/rest/src/utils/contants.ts:10](https://github.com/discloud/discloud.app/blob/967320a/packages/rest/src/utils/contants.ts#L10)

___

### os\_release

• `Const` **os\_release**: `string`

#### Defined in

[packages/rest/src/utils/contants.ts:9](https://github.com/discloud/discloud.app/blob/967320a/packages/rest/src/utils/contants.ts#L9)
