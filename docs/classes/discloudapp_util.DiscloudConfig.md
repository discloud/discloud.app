[discloudapp](../README.md) / [Exports](../modules.md) / [@discloudapp/util](../modules/discloudapp_util.md) / DiscloudConfig

# Class: DiscloudConfig

[@discloudapp/util](../modules/discloudapp_util.md).DiscloudConfig

## Table of contents

### Constructors

- [constructor](discloudapp_util.DiscloudConfig.md#constructor)

### Properties

- [path](discloudapp_util.DiscloudConfig.md#path)

### Accessors

- [#requiredProps](discloudapp_util.DiscloudConfig.md##requiredprops)
- [comments](discloudapp_util.DiscloudConfig.md#comments)
- [data](discloudapp_util.DiscloudConfig.md#data)
- [exists](discloudapp_util.DiscloudConfig.md#exists)
- [existsMain](discloudapp_util.DiscloudConfig.md#existsmain)
- [fileExt](discloudapp_util.DiscloudConfig.md#fileext)
- [missingProps](discloudapp_util.DiscloudConfig.md#missingprops)

### Methods

- [#configToObj](discloudapp_util.DiscloudConfig.md##configtoobj)
- [#objToString](discloudapp_util.DiscloudConfig.md##objtostring)
- [#processValues](discloudapp_util.DiscloudConfig.md##processvalues)
- [get](discloudapp_util.DiscloudConfig.md#get)
- [set](discloudapp_util.DiscloudConfig.md#set)
- [update](discloudapp_util.DiscloudConfig.md#update)

## Constructors

### constructor

• **new DiscloudConfig**(`path`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |

#### Defined in

[packages/util/src/DiscloudConfig.ts:12](https://github.com/discloud/discloud.app/blob/d2f41b0/packages/util/src/DiscloudConfig.ts#L12)

## Properties

### path

• **path**: `string`

#### Defined in

[packages/util/src/DiscloudConfig.ts:12](https://github.com/discloud/discloud.app/blob/d2f41b0/packages/util/src/DiscloudConfig.ts#L12)

## Accessors

### #requiredProps

• `Private` `get` **#requiredProps**(): `string`[]

#### Returns

`string`[]

#### Defined in

[packages/util/src/DiscloudConfig.ts:63](https://github.com/discloud/discloud.app/blob/d2f41b0/packages/util/src/DiscloudConfig.ts#L63)

___

### comments

• `get` **comments**(): `string`[]

#### Returns

`string`[]

#### Defined in

[packages/util/src/DiscloudConfig.ts:24](https://github.com/discloud/discloud.app/blob/d2f41b0/packages/util/src/DiscloudConfig.ts#L24)

___

### data

• `get` **data**(): `DiscloudConfigBot`<[`AppLanguages`](../modules/discloudapp_api_types.md#applanguages)\> \| `DiscloudConfigSite`<[`AppLanguages`](../modules/discloudapp_api_types.md#applanguages)\>

#### Returns

`DiscloudConfigBot`<[`AppLanguages`](../modules/discloudapp_api_types.md#applanguages)\> \| `DiscloudConfigSite`<[`AppLanguages`](../modules/discloudapp_api_types.md#applanguages)\>

#### Defined in

[packages/util/src/DiscloudConfig.ts:34](https://github.com/discloud/discloud.app/blob/d2f41b0/packages/util/src/DiscloudConfig.ts#L34)

___

### exists

• `get` **exists**(): `ExistsResult`

#### Returns

`ExistsResult`

#### Defined in

[packages/util/src/DiscloudConfig.ts:42](https://github.com/discloud/discloud.app/blob/d2f41b0/packages/util/src/DiscloudConfig.ts#L42)

___

### existsMain

• `get` **existsMain**(): `undefined` \| `ExistsResult`

#### Returns

`undefined` \| `ExistsResult`

#### Defined in

[packages/util/src/DiscloudConfig.ts:50](https://github.com/discloud/discloud.app/blob/d2f41b0/packages/util/src/DiscloudConfig.ts#L50)

___

### fileExt

• `get` **fileExt**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Defined in

[packages/util/src/DiscloudConfig.ts:54](https://github.com/discloud/discloud.app/blob/d2f41b0/packages/util/src/DiscloudConfig.ts#L54)

___

### missingProps

• `get` **missingProps**(): `string`[]

#### Returns

`string`[]

#### Defined in

[packages/util/src/DiscloudConfig.ts:58](https://github.com/discloud/discloud.app/blob/d2f41b0/packages/util/src/DiscloudConfig.ts#L58)

## Methods

### #configToObj

▸ `Private` **#configToObj**(`s`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `s` | `string` |

#### Returns

`any`

#### Defined in

[packages/util/src/DiscloudConfig.ts:92](https://github.com/discloud/discloud.app/blob/d2f41b0/packages/util/src/DiscloudConfig.ts#L92)

___

### #objToString

▸ `Private` **#objToString**(`obj`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `any` |

#### Returns

`string`

#### Defined in

[packages/util/src/DiscloudConfig.ts:68](https://github.com/discloud/discloud.app/blob/d2f41b0/packages/util/src/DiscloudConfig.ts#L68)

___

### #processValues

▸ `Private` **#processValues**(`obj`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `any` |

#### Returns

`any`

#### Defined in

[packages/util/src/DiscloudConfig.ts:102](https://github.com/discloud/discloud.app/blob/d2f41b0/packages/util/src/DiscloudConfig.ts#L102)

___

### get

▸ **get**<`K`\>(`key`): `DiscloudConfigBot`<[`AppLanguages`](../modules/discloudapp_api_types.md#applanguages)\> \| `DiscloudConfigSite`<[`AppLanguages`](../modules/discloudapp_api_types.md#applanguages)\>[`K`]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends ``"APT"`` \| ``"AUTORESTART"`` \| ``"ID"`` \| ``"MAIN"`` \| ``"RAM"`` \| ``"TYPE"`` \| ``"VERSION"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `K` |

#### Returns

`DiscloudConfigBot`<[`AppLanguages`](../modules/discloudapp_api_types.md#applanguages)\> \| `DiscloudConfigSite`<[`AppLanguages`](../modules/discloudapp_api_types.md#applanguages)\>[`K`]

#### Defined in

[packages/util/src/DiscloudConfig.ts:126](https://github.com/discloud/discloud.app/blob/d2f41b0/packages/util/src/DiscloudConfig.ts#L126)

___

### set

▸ **set**<`K`\>(`key`, `value`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends ``"APT"`` \| ``"AUTORESTART"`` \| ``"ID"`` \| ``"MAIN"`` \| ``"RAM"`` \| ``"TYPE"`` \| ``"VERSION"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `K` |
| `value` | `DiscloudConfigBot`<[`AppLanguages`](../modules/discloudapp_api_types.md#applanguages)\> \| `DiscloudConfigSite`<[`AppLanguages`](../modules/discloudapp_api_types.md#applanguages)\>[`K`] |

#### Returns

`void`

#### Defined in

[packages/util/src/DiscloudConfig.ts:130](https://github.com/discloud/discloud.app/blob/d2f41b0/packages/util/src/DiscloudConfig.ts#L130)

___

### update

▸ **update**(`save`, `comments?`): `void` \| [`Error`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error )

#### Parameters

| Name | Type |
| :------ | :------ |
| `save` | `Partial`<`DiscloudConfigBot`<[`AppLanguages`](../modules/discloudapp_api_types.md#applanguages)\> \| `DiscloudConfigSite`<[`AppLanguages`](../modules/discloudapp_api_types.md#applanguages)\>\> |
| `comments` | `string`[] |

#### Returns

`void` \| [`Error`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error )

#### Defined in

[packages/util/src/DiscloudConfig.ts:134](https://github.com/discloud/discloud.app/blob/d2f41b0/packages/util/src/DiscloudConfig.ts#L134)