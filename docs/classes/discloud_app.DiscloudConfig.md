[Documentation](../README.md) / [Exports](../modules.md) / [discloud.app](../modules/discloud_app.md) / DiscloudConfig

# Class: DiscloudConfig

[discloud.app](../modules/discloud_app.md).DiscloudConfig

## Table of contents

### Constructors

- [constructor](discloud_app.DiscloudConfig.md#constructor)

### Properties

- [#private](discloud_app.DiscloudConfig.md##private)
- [path](discloud_app.DiscloudConfig.md#path)

### Accessors

- [comments](discloud_app.DiscloudConfig.md#comments)
- [data](discloud_app.DiscloudConfig.md#data)
- [exists](discloud_app.DiscloudConfig.md#exists)
- [existsMain](discloud_app.DiscloudConfig.md#existsmain)
- [fileExt](discloud_app.DiscloudConfig.md#fileext)
- [missingProps](discloud_app.DiscloudConfig.md#missingprops)

### Methods

- [get](discloud_app.DiscloudConfig.md#get)
- [set](discloud_app.DiscloudConfig.md#set)
- [update](discloud_app.DiscloudConfig.md#update)

## Constructors

### constructor

• **new DiscloudConfig**(`path`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |

#### Defined in

packages/util/out/DiscloudConfig.d.ts:10

## Properties

### #private

• `Private` **#private**: `any`

#### Defined in

packages/util/out/DiscloudConfig.d.ts:8

___

### path

• **path**: `string`

#### Defined in

packages/util/out/DiscloudConfig.d.ts:9

## Accessors

### comments

• `get` **comments**(): `string`[]

#### Returns

`string`[]

#### Defined in

packages/util/out/DiscloudConfig.d.ts:11

___

### data

• `get` **data**(): [`DiscloudConfigType`](../modules/discloud_app.md#discloudconfigtype)

#### Returns

[`DiscloudConfigType`](../modules/discloud_app.md#discloudconfigtype)

#### Defined in

packages/util/out/DiscloudConfig.d.ts:12

___

### exists

• `get` **exists**(): ``false`` \| ``"file"`` \| ``"dir"``

#### Returns

``false`` \| ``"file"`` \| ``"dir"``

#### Defined in

packages/util/out/DiscloudConfig.d.ts:13

___

### existsMain

• `get` **existsMain**(): ``false`` \| ``"file"`` \| ``"dir"``

#### Returns

``false`` \| ``"file"`` \| ``"dir"``

#### Defined in

packages/util/out/DiscloudConfig.d.ts:14

___

### fileExt

• `get` **fileExt**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Defined in

packages/util/out/DiscloudConfig.d.ts:15

___

### missingProps

• `get` **missingProps**(): `string`[]

#### Returns

`string`[]

#### Defined in

packages/util/out/DiscloudConfig.d.ts:16

## Methods

### get

▸ **get**<`K`\>(`key`): [`DiscloudConfigType`](../modules/discloud_app.md#discloudconfigtype)[`K`]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends ``"APT"`` \| ``"AUTORESTART"`` \| ``"ID"`` \| ``"MAIN"`` \| ``"RAM"`` \| ``"TYPE"`` \| ``"VERSION"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `K` |

#### Returns

[`DiscloudConfigType`](../modules/discloud_app.md#discloudconfigtype)[`K`]

#### Defined in

packages/util/out/DiscloudConfig.d.ts:17

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
| `value` | [`DiscloudConfigType`](../modules/discloud_app.md#discloudconfigtype)[`K`] |

#### Returns

`void`

#### Defined in

packages/util/out/DiscloudConfig.d.ts:18

___

### update

▸ **update**(`save`, `comments?`): `void` \| [`Error`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error )

#### Parameters

| Name | Type |
| :------ | :------ |
| `save` | `Partial`<[`DiscloudConfigType`](../modules/discloud_app.md#discloudconfigtype)\> |
| `comments?` | `string`[] |

#### Returns

`void` \| [`Error`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error )

#### Defined in

packages/util/out/DiscloudConfig.d.ts:19
