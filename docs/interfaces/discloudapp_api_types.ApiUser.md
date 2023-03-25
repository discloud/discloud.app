[discloudapp](../README.md) / [Exports](../modules.md) / [@discloudapp/api-types](../modules/discloudapp_api_types.md) / ApiUser

# Interface: ApiUser

[@discloudapp/api-types](../modules/discloudapp_api_types.md).ApiUser

## Table of contents

### Properties

- [apps](discloudapp_api_types.ApiUser.md#apps)
- [customdomains](discloudapp_api_types.ApiUser.md#customdomains)
- [lastDataLeft](discloudapp_api_types.ApiUser.md#lastdataleft)
- [locale](discloudapp_api_types.ApiUser.md#locale)
- [plan](discloudapp_api_types.ApiUser.md#plan)
- [planDataEnd](discloudapp_api_types.ApiUser.md#plandataend)
- [ramUsedMb](discloudapp_api_types.ApiUser.md#ramusedmb)
- [subdomains](discloudapp_api_types.ApiUser.md#subdomains)
- [totalRamMb](discloudapp_api_types.ApiUser.md#totalrammb)
- [userID](discloudapp_api_types.ApiUser.md#userid)

## Properties

### apps

• **apps**: `string`[]

Your applications ID

#### Defined in

[packages/api-types/rest/v2/user.ts:14](https://github.com/discloud/discloud.app/blob/0fe6620/packages/api-types/rest/v2/user.ts#L14)

___

### customdomains

• **customdomains**: `string`[]

Your custom domains on Discloud

#### Defined in

[packages/api-types/rest/v2/user.ts:18](https://github.com/discloud/discloud.app/blob/0fe6620/packages/api-types/rest/v2/user.ts#L18)

___

### lastDataLeft

• `Optional` **lastDataLeft**: [`LastDataLeft`](discloudapp_api_types.LastDataLeft.md)

When will your plan end

#### Defined in

[packages/api-types/rest/v2/user.ts:46](https://github.com/discloud/discloud.app/blob/0fe6620/packages/api-types/rest/v2/user.ts#L46)

___

### locale

• **locale**: `string`

Your locale

#### Defined in

[packages/api-types/rest/v2/user.ts:22](https://github.com/discloud/discloud.app/blob/0fe6620/packages/api-types/rest/v2/user.ts#L22)

___

### plan

• **plan**: `string`

Your plan

#### Defined in

[packages/api-types/rest/v2/user.ts:26](https://github.com/discloud/discloud.app/blob/0fe6620/packages/api-types/rest/v2/user.ts#L26)

___

### planDataEnd

• `Optional` **planDataEnd**: `string`

Date of when will your plan end

#### Defined in

[packages/api-types/rest/v2/user.ts:50](https://github.com/discloud/discloud.app/blob/0fe6620/packages/api-types/rest/v2/user.ts#L50)

___

### ramUsedMb

• **ramUsedMb**: `number`

Quantity of RAM was used for your applications

#### Defined in

[packages/api-types/rest/v2/user.ts:30](https://github.com/discloud/discloud.app/blob/0fe6620/packages/api-types/rest/v2/user.ts#L30)

___

### subdomains

• **subdomains**: `string`[]

Your subdomains on Discloud

#### Defined in

[packages/api-types/rest/v2/user.ts:34](https://github.com/discloud/discloud.app/blob/0fe6620/packages/api-types/rest/v2/user.ts#L34)

___

### totalRamMb

• **totalRamMb**: `number`

Your total RAM quantity

#### Defined in

[packages/api-types/rest/v2/user.ts:38](https://github.com/discloud/discloud.app/blob/0fe6620/packages/api-types/rest/v2/user.ts#L38)

___

### userID

• **userID**: `string`

Your id

#### Defined in

[packages/api-types/rest/v2/user.ts:42](https://github.com/discloud/discloud.app/blob/0fe6620/packages/api-types/rest/v2/user.ts#L42)
