[discloudapp](../README.md) / [Exports](../modules.md) / [discloud.app](../modules/discloud_app.md) / DiscloudConfig

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

packages/util/dist/DiscloudConfig.d.ts:10

## Properties

### #private

• `Private` **#private**: `any`

#### Defined in

packages/util/dist/DiscloudConfig.d.ts:8

___

### path

• **path**: `string`

#### Defined in

packages/util/dist/DiscloudConfig.d.ts:9

## Accessors

### comments

• `get` **comments**(): `string`[]

#### Returns

`string`[]

#### Defined in

packages/util/dist/DiscloudConfig.d.ts:11

___

### data

• `get` **data**(): `DiscloudConfigBot`<[`AppLanguages`](../modules/discloud_app.md#applanguages)\> \| `DiscloudConfigSite`<[`AppLanguages`](../modules/discloud_app.md#applanguages)\>

#### Returns

`DiscloudConfigBot`<[`AppLanguages`](../modules/discloud_app.md#applanguages)\> \| `DiscloudConfigSite`<[`AppLanguages`](../modules/discloud_app.md#applanguages)\>

#### Defined in

packages/util/dist/DiscloudConfig.d.ts:12

___

### exists

• `get` **exists**(): `ExistsResult`

#### Returns

`ExistsResult`

#### Defined in

packages/util/dist/DiscloudConfig.d.ts:13

___

### existsMain

• `get` **existsMain**(): `undefined` \| `ExistsResult`

#### Returns

`undefined` \| `ExistsResult`

#### Defined in

packages/util/dist/DiscloudConfig.d.ts:14

___

### fileExt

• `get` **fileExt**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Defined in

packages/util/dist/DiscloudConfig.d.ts:15

___

### missingProps

• `get` **missingProps**(): `string`[]

#### Returns

`string`[]

#### Defined in

packages/util/dist/DiscloudConfig.d.ts:16

## Methods

### get

▸ **get**<`K`\>(`key`): `DiscloudConfigBot`<[`AppLanguages`](../modules/discloud_app.md#applanguages)\> \| `DiscloudConfigSite`<[`AppLanguages`](../modules/discloud_app.md#applanguages)\>[`K`]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends ``"APT"`` \| ``"AUTORESTART"`` \| ``"ID"`` \| ``"MAIN"`` \| ``"RAM"`` \| ``"TYPE"`` \| ``"VERSION"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `K` |

#### Returns

`DiscloudConfigBot`<[`AppLanguages`](../modules/discloud_app.md#applanguages)\> \| `DiscloudConfigSite`<[`AppLanguages`](../modules/discloud_app.md#applanguages)\>[`K`]

#### Defined in

packages/util/dist/DiscloudConfig.d.ts:17

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
| `value` | `DiscloudConfigBot`<[`AppLanguages`](../modules/discloud_app.md#applanguages)\> \| `DiscloudConfigSite`<[`AppLanguages`](../modules/discloud_app.md#applanguages)\>[`K`] |

#### Returns

`void`

#### Defined in

packages/util/dist/DiscloudConfig.d.ts:18

___

### update

▸ **update**(`save`, `comments?`): `void` \| [`Error`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error )

#### Parameters

| Name | Type |
| :------ | :------ |
| `save` | `Partial`<`DiscloudConfigBot`<[`AppLanguages`](../modules/discloud_app.md#applanguages)\> \| `DiscloudConfigSite`<[`AppLanguages`](../modules/discloud_app.md#applanguages)\>\> |
| `comments?` | `string`[] |

#### Returns

`void` \| [`Error`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error )

#### Defined in

packages/util/dist/DiscloudConfig.d.ts:19