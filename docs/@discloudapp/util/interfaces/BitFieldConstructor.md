[**@discloudapp/util**](../README.md) • **Docs**

***

[Documentation](../../../packages.md) / [@discloudapp/util](../README.md) / BitFieldConstructor

# Interface: BitFieldConstructor\<S, N\>

**`Internal`**

## Type Parameters

• **S** *extends* `string`

• **N** *extends* `bigint` \| `number`

## Constructors

### new BitFieldConstructor()

> **new BitFieldConstructor**(...`bits`): [`BitField`](../classes/BitField.md)\<`S`, `N`\>

#### Parameters

• ...**bits**: [`BitFieldResolvable`](../type-aliases/BitFieldResolvable.md)\<`S`, `N`\>[]

#### Returns

[`BitField`](../classes/BitField.md)\<`S`, `N`\>

#### Defined in

[packages/util/src/BitField.ts:5](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/util/src/BitField.ts#L5)

## Properties

### DefaultBit

> **DefaultBit**: `N`

#### Defined in

[packages/util/src/BitField.ts:6](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/util/src/BitField.ts#L6)

***

### Flags

> **Flags**: `EnumLike`\<`S`, `N`\>

#### Defined in

[packages/util/src/BitField.ts:7](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/util/src/BitField.ts#L7)

## Methods

### resolve()

> **resolve**(`bit`): `N`

#### Parameters

• **bit**: [`BitFieldResolvable`](../type-aliases/BitFieldResolvable.md)\<`S`, `N`\>

#### Returns

`N`

#### Defined in

[packages/util/src/BitField.ts:8](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/util/src/BitField.ts#L8)
