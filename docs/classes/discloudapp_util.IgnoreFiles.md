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

- [#findIgnoreFiles](discloudapp_util.IgnoreFiles.md##findignorefiles)
- [#getIgnoreList](discloudapp_util.IgnoreFiles.md##getignorelist)
- [#makeBothCase](discloudapp_util.IgnoreFiles.md##makebothcase)
- [#normalizePath](discloudapp_util.IgnoreFiles.md##normalizepath)
- [#recursivelyReadDirSync](discloudapp_util.IgnoreFiles.md##recursivelyreaddirsync)
- [#resolveIgnoreFile](discloudapp_util.IgnoreFiles.md##resolveignorefile)
- [#resolveIgnorePatterns](discloudapp_util.IgnoreFiles.md##resolveignorepatterns)

## Constructors

### constructor

• **new IgnoreFiles**(`options`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`IgnoreFilesOptions`](../interfaces/discloudapp_util.IgnoreFilesOptions.md) |

#### Defined in

[IgnoreFiles.ts:31](https://github.com/discloud/discloud.app/blob/a142e7d/packages/util/src/IgnoreFiles.ts#L31)

## Properties

### fileName

• **fileName**: `string`

#### Defined in

[IgnoreFiles.ts:26](https://github.com/discloud/discloud.app/blob/a142e7d/packages/util/src/IgnoreFiles.ts#L26)

___

### filesIgnore

• **filesIgnore**: `string`[] = `[]`

#### Defined in

[IgnoreFiles.ts:27](https://github.com/discloud/discloud.app/blob/a142e7d/packages/util/src/IgnoreFiles.ts#L27)

___

### list

• **list**: `string`[] = `[]`

#### Defined in

[IgnoreFiles.ts:28](https://github.com/discloud/discloud.app/blob/a142e7d/packages/util/src/IgnoreFiles.ts#L28)

___

### paths

• **paths**: `string`[] = `[]`

#### Defined in

[IgnoreFiles.ts:29](https://github.com/discloud/discloud.app/blob/a142e7d/packages/util/src/IgnoreFiles.ts#L29)

## Methods

### #findIgnoreFiles

▸ `Private` **#findIgnoreFiles**(`fileName`, `paths`): `string`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `fileName` | `string` |
| `paths` | `string`[] |

#### Returns

`string`[]

#### Defined in

[IgnoreFiles.ts:53](https://github.com/discloud/discloud.app/blob/a142e7d/packages/util/src/IgnoreFiles.ts#L53)

___

### #getIgnoreList

▸ `Private` **#getIgnoreList**(): `string`[]

#### Returns

`string`[]

#### Defined in

[IgnoreFiles.ts:68](https://github.com/discloud/discloud.app/blob/a142e7d/packages/util/src/IgnoreFiles.ts#L68)

___

### #makeBothCase

▸ `Private` **#makeBothCase**(`s`): `string`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `s` | `string` |

#### Returns

`string`[]

#### Defined in

[IgnoreFiles.ts:58](https://github.com/discloud/discloud.app/blob/a142e7d/packages/util/src/IgnoreFiles.ts#L58)

___

### #normalizePath

▸ `Private` **#normalizePath**(`path`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |

#### Returns

`string`

#### Defined in

[IgnoreFiles.ts:72](https://github.com/discloud/discloud.app/blob/a142e7d/packages/util/src/IgnoreFiles.ts#L72)

___

### #recursivelyReadDirSync

▸ `Private` **#recursivelyReadDirSync**(`path`): `string`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |

#### Returns

`string`[]

#### Defined in

[IgnoreFiles.ts:113](https://github.com/discloud/discloud.app/blob/a142e7d/packages/util/src/IgnoreFiles.ts#L113)

___

### #resolveIgnoreFile

▸ `Private` **#resolveIgnoreFile**(`ignoreFile`): `string`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `ignoreFile` | `string` \| `string`[] |

#### Returns

`string`[]

#### Defined in

[IgnoreFiles.ts:91](https://github.com/discloud/discloud.app/blob/a142e7d/packages/util/src/IgnoreFiles.ts#L91)

___

### #resolveIgnorePatterns

▸ `Private` **#resolveIgnorePatterns**(`ignore`, `paths`): `string`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `ignore` | `string`[] |
| `paths` | `string`[] |

#### Returns

`string`[]

#### Defined in

[IgnoreFiles.ts:78](https://github.com/discloud/discloud.app/blob/a142e7d/packages/util/src/IgnoreFiles.ts#L78)
