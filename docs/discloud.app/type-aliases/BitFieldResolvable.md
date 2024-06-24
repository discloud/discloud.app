[**discloud.app**](../README.md) • **Docs**

***

[Documentation](../../packages.md) / [discloud.app](../README.md) / BitFieldResolvable

# Type Alias: BitFieldResolvable\<S, N\>

> **BitFieldResolvable**\<`S`, `N`\>: \`$\{bigint\}\` \| `number` \| `N` \| `S` \| [`BitField`](../classes/BitField.md)\<`S`, `N`\> \| [`BitFieldResolvable`](BitFieldResolvable.md)\<`S`, `N`\>[]

Data that can be resolved to give a bitfield. This can be:
* A bit number (this can be a number literal or a value taken from [BitField.Flags](../classes/BitField.md#flags))
* A string bit number
* An instance of BitField
* An Array of BitFieldResolvable

## Type Parameters

• **S** *extends* `string`

• **N** *extends* `bigint` \| `number`

## Defined in

packages/util/out/BitField.d.ts:95
