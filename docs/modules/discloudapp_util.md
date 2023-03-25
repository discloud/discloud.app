[discloudapp](../README.md) / [Exports](../modules.md) / @discloudapp/util

# Module: @discloudapp/util

## Table of contents

### Classes

- [BitField](../classes/discloudapp_util.BitField.md)
- [DiscloudConfig](../classes/discloudapp_util.DiscloudConfig.md)
- [GS](../classes/discloudapp_util.GS.md)
- [IgnoreFiles](../classes/discloudapp_util.IgnoreFiles.md)
- [ModPermissionsBF](../classes/discloudapp_util.ModPermissionsBF.md)

### Interfaces

- [IgnoreFilesOptions](../interfaces/discloudapp_util.IgnoreFilesOptions.md)
- [RawFile](../interfaces/discloudapp_util.RawFile.md)

### Type Aliases

- [BitFieldConstructor](discloudapp_util.md#bitfieldconstructor)
- [BitFieldResolvable](discloudapp_util.md#bitfieldresolvable)
- [FileResolvable](discloudapp_util.md#fileresolvable)
- [ModPermissionsFlags](discloudapp_util.md#modpermissionsflags)
- [ModPermissionsResolvable](discloudapp_util.md#modpermissionsresolvable)

### Variables

- [ModPermissions](discloudapp_util.md#modpermissions)
- [allBlockedFiles](discloudapp_util.md#allblockedfiles)
- [allBlockedFilesRegex](discloudapp_util.md#allblockedfilesregex)
- [blockedFiles](discloudapp_util.md#blockedfiles)
- [discloudConfigRequiredScopes](discloudapp_util.md#discloudconfigrequiredscopes)
- [fileNamePattern](discloudapp_util.md#filenamepattern)

### Functions

- [calculatePercentage](discloudapp_util.md#calculatepercentage)
- [resolveFile](discloudapp_util.md#resolvefile)
- [streamToBlob](discloudapp_util.md#streamtoblob)
- [streamToFile](discloudapp_util.md#streamtofile)

## Type Aliases

### BitFieldConstructor

Ƭ **BitFieldConstructor**<`S`, `N`\>: typeof [`BitField`](../classes/discloudapp_util.BitField.md) & { `DefaultBit`: `N` ; `Flags`: `EnumLike`<`S`, `N`\> ; `resolve`: (`bit`: [`BitFieldResolvable`](discloudapp_util.md#bitfieldresolvable)<`S`, `N`\>) => `N`  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends `string` |
| `N` | extends `bigint` \| `number` |

#### Defined in

[packages/util/src/BitField.ts:6](https://github.com/discloud/discloud.app/blob/0fe6620/packages/util/src/BitField.ts#L6)

___

### BitFieldResolvable

Ƭ **BitFieldResolvable**<`S`, `N`\>: \`${bigint}\` \| `number` \| `N` \| `S` \| [`BitField`](../classes/discloudapp_util.BitField.md)<`S`, `N`\> \| [`BitFieldResolvable`](discloudapp_util.md#bitfieldresolvable)<`S`, `N`\>[]

Data that can be resolved to give a bitfield. This can be:
* A bit number (this can be a number literal or a value taken from [Flags](../classes/discloudapp_util.BitField.md#flags))
* A string bit number
* An instance of BitField
* An Array of BitFieldResolvable

#### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends `string` |
| `N` | extends `bigint` \| `number` |

#### Defined in

[packages/util/src/BitField.ts:166](https://github.com/discloud/discloud.app/blob/0fe6620/packages/util/src/BitField.ts#L166)

___

### FileResolvable

Ƭ **FileResolvable**: `Blob` \| `File` \| `PathLike` \| [`RawFile`](../interfaces/discloudapp_util.RawFile.md) \| `Readable` \| `Writable`

This parameter could be Blob, Buffer, File, PathLike, [RawFile](../interfaces/discloudapp_util.RawFile.md), Readable, String, URL or Writable

#### Defined in

[packages/util/src/FileResolver.ts:30](https://github.com/discloud/discloud.app/blob/0fe6620/packages/util/src/FileResolver.ts#L30)

___

### ModPermissionsFlags

Ƭ **ModPermissionsFlags**: keyof typeof [`ModPermissions`](discloudapp_util.md#modpermissions)

#### Defined in

[packages/util/src/ModPermissionsBF.ts:14](https://github.com/discloud/discloud.app/blob/0fe6620/packages/util/src/ModPermissionsBF.ts#L14)

___

### ModPermissionsResolvable

Ƭ **ModPermissionsResolvable**: [`BitFieldResolvable`](discloudapp_util.md#bitfieldresolvable)<[`ModPermissionsFlags`](discloudapp_util.md#modpermissionsflags), `number`\>

#### Defined in

[packages/util/src/ModPermissionsBF.ts:16](https://github.com/discloud/discloud.app/blob/0fe6620/packages/util/src/ModPermissionsBF.ts#L16)

## Variables

### ModPermissions

• `Const` **ModPermissions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `backup_app` | `number` |
| `commit_app` | `number` |
| `edit_ram` | `number` |
| `logs_app` | `number` |
| `restart_app` | `number` |
| `start_app` | `number` |
| `status_app` | `number` |
| `stop_app` | `number` |

#### Defined in

[packages/util/src/ModPermissionsBF.ts:3](https://github.com/discloud/discloud.app/blob/0fe6620/packages/util/src/ModPermissionsBF.ts#L3)

___

### allBlockedFiles

• `Const` **allBlockedFiles**: `string`[]

#### Defined in

[packages/util/src/IgnoreFiles.ts:15](https://github.com/discloud/discloud.app/blob/0fe6620/packages/util/src/IgnoreFiles.ts#L15)

___

### allBlockedFilesRegex

• `Const` **allBlockedFilesRegex**: [`RegExp`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp )

#### Defined in

[packages/util/src/IgnoreFiles.ts:17](https://github.com/discloud/discloud.app/blob/0fe6620/packages/util/src/IgnoreFiles.ts#L17)

___

### blockedFiles

• `Const` **blockedFiles**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `common` | `string`[] |
| `go` | `never`[] |
| `js` | `string`[] |
| `py` | `string`[] |
| `rb` | `string`[] |
| `rs` | `string`[] |
| `ts` | `string`[] |

#### Defined in

[packages/util/src/IgnoreFiles.ts:5](https://github.com/discloud/discloud.app/blob/0fe6620/packages/util/src/IgnoreFiles.ts#L5)

___

### discloudConfigRequiredScopes

• `Const` **discloudConfigRequiredScopes**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `bot` | `string`[] |
| `common` | `string`[] |
| `site` | `string`[] |

#### Defined in

[packages/util/src/DiscloudConfig.ts:5](https://github.com/discloud/discloud.app/blob/0fe6620/packages/util/src/DiscloudConfig.ts#L5)

___

### fileNamePattern

• `Const` **fileNamePattern**: [`RegExp`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp )

#### Defined in

[packages/util/src/FileResolver.ts:6](https://github.com/discloud/discloud.app/blob/0fe6620/packages/util/src/FileResolver.ts#L6)

## Functions

### calculatePercentage

▸ **calculatePercentage**(`value`, `major`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` \| `number` |
| `major` | `string` \| `number` |

#### Returns

`number`

#### Defined in

[packages/util/src/index.ts:8](https://github.com/discloud/discloud.app/blob/0fe6620/packages/util/src/index.ts#L8)

___

### resolveFile

▸ **resolveFile**(`file`, `fileName?`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`File`\>

A function that converts [FileResolvable](discloudapp_util.md#fileresolvable) to File

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `file` | [`FileResolvable`](discloudapp_util.md#fileresolvable) | The file as [FileResolvable](discloudapp_util.md#fileresolvable) to resolve |
| `fileName?` | `string` | The name of the file to upload |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`File`\>

#### Defined in

[packages/util/src/FileResolver.ts:44](https://github.com/discloud/discloud.app/blob/0fe6620/packages/util/src/FileResolver.ts#L44)

___

### streamToBlob

▸ **streamToBlob**(`stream`, `mimeType?`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`Blob`\>

A function that converts a like Stream parameter to Blob

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `stream` | `Stream` | A parameter like Readable or Writable |
| `mimeType?` | `string` | A mimeType parameter |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`Blob`\>

#### Defined in

[packages/util/src/FileResolver.ts:100](https://github.com/discloud/discloud.app/blob/0fe6620/packages/util/src/FileResolver.ts#L100)

___

### streamToFile

▸ **streamToFile**(`stream`, `fileName?`, `mimeType?`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`File`\>

A function that converts a like Stream parameter to File

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `stream` | `Stream` | A parameter like Readable or Writable |
| `fileName?` | ``null`` \| `string` | A file name, if you wish |
| `mimeType?` | `string` | A mimeType parameter |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`File`\>

#### Defined in

[packages/util/src/FileResolver.ts:85](https://github.com/discloud/discloud.app/blob/0fe6620/packages/util/src/FileResolver.ts#L85)
