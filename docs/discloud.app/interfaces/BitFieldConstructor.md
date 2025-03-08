[**discloud.app**](../README.md)

***

[Documentation](../../packages.md) / [discloud.app](../README.md) / BitFieldConstructor

# Interface: BitFieldConstructor\<S, N\>

Defined in: packages/util/out/BitField.d.ts:4

**`Internal`**

## Type Parameters

• **S** *extends* `string`

• **N** *extends* `bigint` \| `number`

## Constructors

### new BitFieldConstructor()

> **new BitFieldConstructor**(...`bits`): [`BitField`](../classes/BitField.md)\<`S`, `N`\>

Defined in: packages/util/out/BitField.d.ts:5

#### Parameters

##### bits

...[`BitFieldResolvable`](../type-aliases/BitFieldResolvable.md)\<`S`, `N`\>[]

#### Returns

[`BitField`](../classes/BitField.md)\<`S`, `N`\>

## Properties

### DefaultBit

> `readonly` **DefaultBit**: `N`

Defined in: packages/util/out/BitField.d.ts:6

***

### Flags

> `readonly` **Flags**: `EnumLike`\<`S`, `N`\>

Defined in: packages/util/out/BitField.d.ts:7

## Methods

### resolve()

> **resolve**(`bit`): `N`

Defined in: packages/util/out/BitField.d.ts:8

#### Parameters

##### bit

[`BitFieldResolvable`](../type-aliases/BitFieldResolvable.md)\<`S`, `N`\>

#### Returns

`N`
