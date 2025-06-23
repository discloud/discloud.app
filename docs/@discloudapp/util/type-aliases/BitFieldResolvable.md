[**Documentation**](../../../README.md)

***

[Documentation](../../../packages.md) / [@discloudapp/util](../README.md) / BitFieldResolvable

# Type Alias: BitFieldResolvable\<S, N\>

> **BitFieldResolvable**\<`S`, `N`\> = `` `${bigint}` `` \| `number` \| `N` \| `S` \| [`BitField`](../classes/BitField.md)\<`S`, `N`\> \| `BitFieldResolvable`\<`S`, `N`\>[]

Defined in: [packages/util/src/BitField.ts:199](https://github.com/discloud/discloud.app/blob/ff86a7704bdfa4b9011141068419f0a48ab50b8b/packages/util/src/BitField.ts#L199)

Data that can be resolved to give a bitfield. This can be:
* A bit number (this can be a number literal or a value taken from [BitField.Flags](../classes/BitField.md#flags))
* A string bit number
* An instance of BitField
* An Array of BitFieldResolvable

## Type Parameters

### S

`S` *extends* `string`

### N

`N` *extends* `bigint` \| `number`
