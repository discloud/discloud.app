[**@discloudapp/util**](../README.md)

***

[Documentation](../../../packages.md) / [@discloudapp/util](../README.md) / BitFieldResolvable

# Type Alias: BitFieldResolvable\<S, N\>

> **BitFieldResolvable**\<`S`, `N`\>: `` `${bigint}` `` \| `number` \| `N` \| `S` \| [`BitField`](../classes/BitField.md)\<`S`, `N`\> \| [`BitFieldResolvable`](BitFieldResolvable.md)\<`S`, `N`\>[]

Defined in: [packages/util/src/BitField.ts:198](https://github.com/discloud/discloud.app/blob/8d6df0b18784d1a4408701ac8e6b9db44dbb7133/packages/util/src/BitField.ts#L198)

Data that can be resolved to give a bitfield. This can be:
* A bit number (this can be a number literal or a value taken from [BitField.Flags](../classes/BitField.md#flags))
* A string bit number
* An instance of BitField
* An Array of BitFieldResolvable

## Type Parameters

• **S** *extends* `string`

• **N** *extends* `bigint` \| `number`
