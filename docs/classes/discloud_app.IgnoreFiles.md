[Documentation](../README.md) / [Exports](../modules.md) / [discloud.app](../modules/discloud_app.md) / IgnoreFiles

# Class: IgnoreFiles

[discloud.app](../modules/discloud_app.md).IgnoreFiles

## Table of contents

### Constructors

- [constructor](discloud_app.IgnoreFiles.md#constructor)

### Properties

- [fileName](discloud_app.IgnoreFiles.md#filename)
- [filesIgnore](discloud_app.IgnoreFiles.md#filesignore)
- [list](discloud_app.IgnoreFiles.md#list)
- [paths](discloud_app.IgnoreFiles.md#paths)

### Methods

- [processIgnoreFiles](discloud_app.IgnoreFiles.md#processignorefiles)
- [findIgnoreFiles](discloud_app.IgnoreFiles.md#findignorefiles)
- [normalizeIgnore](discloud_app.IgnoreFiles.md#normalizeignore)
- [normalizePath](discloud_app.IgnoreFiles.md#normalizepath)
- [normalizePaths](discloud_app.IgnoreFiles.md#normalizepaths)
- [processIgnoreFile](discloud_app.IgnoreFiles.md#processignorefile)

## Constructors

### constructor

• **new IgnoreFiles**(`options`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`IgnoreFilesOptions`](../interfaces/discloud_app.IgnoreFilesOptions.md) |

#### Defined in

packages/util/out/IgnoreFiles.d.ts:22

## Properties

### fileName

• **fileName**: `string`

#### Defined in

packages/util/out/IgnoreFiles.d.ts:18

___

### filesIgnore

• **filesIgnore**: `string`[]

#### Defined in

packages/util/out/IgnoreFiles.d.ts:19

___

### list

• **list**: `string`[]

#### Defined in

packages/util/out/IgnoreFiles.d.ts:20

___

### paths

• **paths**: `string`[]

#### Defined in

packages/util/out/IgnoreFiles.d.ts:21

## Methods

### processIgnoreFiles

▸ **processIgnoreFiles**(`files?`): `string`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `files?` | `string`[] |

#### Returns

`string`[]

#### Defined in

packages/util/out/IgnoreFiles.d.ts:28

___

### findIgnoreFiles

▸ `Static` **findIgnoreFiles**(`fileName`, `paths`, `ignore`): `string`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `fileName` | `string` |
| `paths` | `string`[] |
| `ignore` | `string`[] |

#### Returns

`string`[]

#### Defined in

packages/util/out/IgnoreFiles.d.ts:23

___

### normalizeIgnore

▸ `Static` **normalizeIgnore**(`ignore`, `path?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ignore` | `string` |
| `path?` | `string` |

#### Returns

`string`

#### Defined in

packages/util/out/IgnoreFiles.d.ts:24

___

### normalizePath

▸ `Static` **normalizePath**(`path`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |

#### Returns

`string`

#### Defined in

packages/util/out/IgnoreFiles.d.ts:25

___

### normalizePaths

▸ `Static` **normalizePaths**(`paths`): `string`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `paths` | `string`[] |

#### Returns

`string`[]

#### Defined in

packages/util/out/IgnoreFiles.d.ts:26

___

### processIgnoreFile

▸ `Static` **processIgnoreFile**(`file`): `string`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `file` | `string` |

#### Returns

`string`[]

#### Defined in

packages/util/out/IgnoreFiles.d.ts:27
