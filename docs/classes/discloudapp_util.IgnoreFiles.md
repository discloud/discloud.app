[Documentation](../README.md) / [Exports](../modules.md) / [@discloudapp/util](../modules/discloudapp_util.md) / IgnoreFiles

# Class: IgnoreFiles

[@discloudapp/util](../modules/discloudapp_util.md).IgnoreFiles

## Table of contents

### Constructors

- [constructor](discloudapp_util.IgnoreFiles.md#constructor)

### Properties

- [fileName](discloudapp_util.IgnoreFiles.md#filename)
- [filesIgnore](discloudapp_util.IgnoreFiles.md#filesignore)
- [list](discloudapp_util.IgnoreFiles.md#list)
- [paths](discloudapp_util.IgnoreFiles.md#paths)

### Methods

- [processIgnoreFiles](discloudapp_util.IgnoreFiles.md#processignorefiles)
- [findIgnoreFiles](discloudapp_util.IgnoreFiles.md#findignorefiles)
- [normalizeIgnore](discloudapp_util.IgnoreFiles.md#normalizeignore)
- [normalizePath](discloudapp_util.IgnoreFiles.md#normalizepath)
- [normalizePaths](discloudapp_util.IgnoreFiles.md#normalizepaths)
- [processIgnoreFile](discloudapp_util.IgnoreFiles.md#processignorefile)

## Constructors

### constructor

• **new IgnoreFiles**(`options`): [`IgnoreFiles`](discloudapp_util.IgnoreFiles.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`IgnoreFilesOptions`](../interfaces/discloudapp_util.IgnoreFilesOptions.md) |

#### Returns

[`IgnoreFiles`](discloudapp_util.IgnoreFiles.md)

#### Defined in

[IgnoreFiles.ts:32](https://github.com/discloud/discloud.app/blob/62751fe/packages/util/src/IgnoreFiles.ts#L32)

## Properties

### fileName

• **fileName**: `string`

#### Defined in

[IgnoreFiles.ts:27](https://github.com/discloud/discloud.app/blob/62751fe/packages/util/src/IgnoreFiles.ts#L27)

___

### filesIgnore

• **filesIgnore**: `string`[] = `[]`

#### Defined in

[IgnoreFiles.ts:28](https://github.com/discloud/discloud.app/blob/62751fe/packages/util/src/IgnoreFiles.ts#L28)

___

### list

• **list**: `string`[] = `allBlockedFiles`

#### Defined in

[IgnoreFiles.ts:29](https://github.com/discloud/discloud.app/blob/62751fe/packages/util/src/IgnoreFiles.ts#L29)

___

### paths

• **paths**: `string`[] = `[]`

#### Defined in

[IgnoreFiles.ts:30](https://github.com/discloud/discloud.app/blob/62751fe/packages/util/src/IgnoreFiles.ts#L30)

## Methods

### processIgnoreFiles

▸ **processIgnoreFiles**(`files?`): `string`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `files` | `string`[] |

#### Returns

`string`[]

#### Defined in

[IgnoreFiles.ts:103](https://github.com/discloud/discloud.app/blob/62751fe/packages/util/src/IgnoreFiles.ts#L103)

___

### findIgnoreFiles

▸ **findIgnoreFiles**(`fileName`, `paths`, `ignore`): `string`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `fileName` | `string` |
| `paths` | `string`[] |
| `ignore` | `string`[] |

#### Returns

`string`[]

#### Defined in

[IgnoreFiles.ts:56](https://github.com/discloud/discloud.app/blob/62751fe/packages/util/src/IgnoreFiles.ts#L56)

___

### normalizeIgnore

▸ **normalizeIgnore**(`ignore`, `path?`): `string`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `ignore` | `string` | `undefined` |
| `path` | `string` | `"**"` |

#### Returns

`string`

#### Defined in

[IgnoreFiles.ts:70](https://github.com/discloud/discloud.app/blob/62751fe/packages/util/src/IgnoreFiles.ts#L70)

___

### normalizePath

▸ **normalizePath**(`path`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |

#### Returns

`string`

#### Defined in

[IgnoreFiles.ts:74](https://github.com/discloud/discloud.app/blob/62751fe/packages/util/src/IgnoreFiles.ts#L74)

___

### normalizePaths

▸ **normalizePaths**(`paths`): `string`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `paths` | `string`[] |

#### Returns

`string`[]

#### Defined in

[IgnoreFiles.ts:78](https://github.com/discloud/discloud.app/blob/62751fe/packages/util/src/IgnoreFiles.ts#L78)

___

### processIgnoreFile

▸ **processIgnoreFile**(`file`): `string`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `file` | `string` |

#### Returns

`string`[]

#### Defined in

[IgnoreFiles.ts:86](https://github.com/discloud/discloud.app/blob/62751fe/packages/util/src/IgnoreFiles.ts#L86)
