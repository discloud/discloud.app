[Documentation](../README.md) / [Exports](../modules.md) / [@discloudapp/util](../modules/discloudapp_util.md) / DiscloudConfig

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

• **new DiscloudConfig**(`path`): [`DiscloudConfig`](discloudapp_util.DiscloudConfig.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |

#### Returns

[`DiscloudConfig`](discloudapp_util.DiscloudConfig.md)

#### Defined in

[DiscloudConfig.ts:12](https://github.com/discloud/discloud.app/blob/ee3bbd2/packages/util/src/DiscloudConfig.ts#L12)

## Properties

### path

• **path**: `string`

#### Defined in

[DiscloudConfig.ts:12](https://github.com/discloud/discloud.app/blob/ee3bbd2/packages/util/src/DiscloudConfig.ts#L12)

## Accessors

### #requiredProps

• `get` **#requiredProps**(): `string`[]

#### Returns

`string`[]

#### Defined in

[DiscloudConfig.ts:75](https://github.com/discloud/discloud.app/blob/ee3bbd2/packages/util/src/DiscloudConfig.ts#L75)

___

### comments

• `get` **comments**(): `string`[]

#### Returns

`string`[]

#### Defined in

[DiscloudConfig.ts:24](https://github.com/discloud/discloud.app/blob/ee3bbd2/packages/util/src/DiscloudConfig.ts#L24)

___

### data

• `get` **data**(): [`DiscloudConfigType`](../modules/discloudapp_api_types.md#discloudconfigtype)

#### Returns

[`DiscloudConfigType`](../modules/discloudapp_api_types.md#discloudconfigtype)

#### Defined in

[DiscloudConfig.ts:34](https://github.com/discloud/discloud.app/blob/ee3bbd2/packages/util/src/DiscloudConfig.ts#L34)

___

### exists

• `get` **exists**(): ``false`` \| ``"file"`` \| ``"dir"``

#### Returns

``false`` \| ``"file"`` \| ``"dir"``

#### Defined in

[DiscloudConfig.ts:42](https://github.com/discloud/discloud.app/blob/ee3bbd2/packages/util/src/DiscloudConfig.ts#L42)

___

### existsMain

• `get` **existsMain**(): ``false`` \| ``"file"`` \| ``"dir"``

#### Returns

``false`` \| ``"file"`` \| ``"dir"``

#### Defined in

[DiscloudConfig.ts:54](https://github.com/discloud/discloud.app/blob/ee3bbd2/packages/util/src/DiscloudConfig.ts#L54)

___

### fileExt

• `get` **fileExt**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Defined in

[DiscloudConfig.ts:66](https://github.com/discloud/discloud.app/blob/ee3bbd2/packages/util/src/DiscloudConfig.ts#L66)

___

### missingProps

• `get` **missingProps**(): `string`[]

#### Returns

`string`[]

#### Defined in

[DiscloudConfig.ts:70](https://github.com/discloud/discloud.app/blob/ee3bbd2/packages/util/src/DiscloudConfig.ts#L70)

## Methods

### #configToObj

▸ **#configToObj**(`s`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `s` | `string` |

#### Returns

`any`

#### Defined in

[DiscloudConfig.ts:104](https://github.com/discloud/discloud.app/blob/ee3bbd2/packages/util/src/DiscloudConfig.ts#L104)

___

### #objToString

▸ **#objToString**(`obj`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `any` |

#### Returns

`string`

#### Defined in

[DiscloudConfig.ts:80](https://github.com/discloud/discloud.app/blob/ee3bbd2/packages/util/src/DiscloudConfig.ts#L80)

___

### #processValues

▸ **#processValues**(`obj`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `any` |

#### Returns

`any`

#### Defined in

[DiscloudConfig.ts:114](https://github.com/discloud/discloud.app/blob/ee3bbd2/packages/util/src/DiscloudConfig.ts#L114)

___

### get

▸ **get**\<`K`\>(`key`): [`DiscloudConfigType`](../modules/discloudapp_api_types.md#discloudconfigtype)[`K`]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends ``"APT"`` \| ``"AUTORESTART"`` \| ``"ID"`` \| ``"MAIN"`` \| ``"RAM"`` \| ``"TYPE"`` \| ``"VERSION"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `K` |

#### Returns

[`DiscloudConfigType`](../modules/discloudapp_api_types.md#discloudconfigtype)[`K`]

#### Defined in

[DiscloudConfig.ts:138](https://github.com/discloud/discloud.app/blob/ee3bbd2/packages/util/src/DiscloudConfig.ts#L138)

___

### set

▸ **set**\<`K`\>(`key`, `value`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends ``"APT"`` \| ``"AUTORESTART"`` \| ``"ID"`` \| ``"MAIN"`` \| ``"RAM"`` \| ``"TYPE"`` \| ``"VERSION"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `K` |
| `value` | [`DiscloudConfigType`](../modules/discloudapp_api_types.md#discloudconfigtype)[`K`] |

#### Returns

`void`

#### Defined in

[DiscloudConfig.ts:142](https://github.com/discloud/discloud.app/blob/ee3bbd2/packages/util/src/DiscloudConfig.ts#L142)

___

### update

▸ **update**(`save`, `comments?`): `void` \| `Error`

#### Parameters

| Name | Type |
| :------ | :------ |
| `save` | `Partial`\<[`DiscloudConfigType`](../modules/discloudapp_api_types.md#discloudconfigtype)\> |
| `comments` | `string`[] |

#### Returns

`void` \| `Error`

#### Defined in

[DiscloudConfig.ts:146](https://github.com/discloud/discloud.app/blob/ee3bbd2/packages/util/src/DiscloudConfig.ts#L146)
