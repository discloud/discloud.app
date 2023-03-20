[discloudapp](../README.md) / [Exports](../modules.md) / [@discloudapp/util](../modules/discloudapp_util.md) / GS

# Class: GS

[@discloudapp/util](../modules/discloudapp_util.md).GS

## Table of contents

### Constructors

- [constructor](discloudapp_util.GS.md#constructor)

### Properties

- [found](discloudapp_util.GS.md#found)
- [ignore](discloudapp_util.GS.md#ignore)
- [pattern](discloudapp_util.GS.md#pattern)

### Methods

- [#normalizePath](discloudapp_util.GS.md##normalizepath)

## Constructors

### constructor

• **new GS**(`pattern`, `ignoreFileName?`, `optionalIgnoreList?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `pattern` | `string` \| `string`[] | `undefined` |
| `ignoreFileName?` | `string` | `undefined` |
| `optionalIgnoreList` | `string`[] | `[]` |

#### Defined in

[packages/util/src/GS.ts:10](https://github.com/discloud/discloud.app/blob/9c516a5/packages/util/src/GS.ts#L10)

## Properties

### found

• **found**: `string`[] = `[]`

#### Defined in

[packages/util/src/GS.ts:7](https://github.com/discloud/discloud.app/blob/9c516a5/packages/util/src/GS.ts#L7)

___

### ignore

• **ignore**: [`IgnoreFiles`](discloudapp_util.IgnoreFiles.md)

#### Defined in

[packages/util/src/GS.ts:8](https://github.com/discloud/discloud.app/blob/9c516a5/packages/util/src/GS.ts#L8)

___

### pattern

• **pattern**: `string` \| `string`[]

#### Defined in

[packages/util/src/GS.ts:11](https://github.com/discloud/discloud.app/blob/9c516a5/packages/util/src/GS.ts#L11)

## Methods

### #normalizePath

▸ `Private` **#normalizePath**(`path`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |

#### Returns

`string`

#### Defined in

[packages/util/src/GS.ts:33](https://github.com/discloud/discloud.app/blob/9c516a5/packages/util/src/GS.ts#L33)