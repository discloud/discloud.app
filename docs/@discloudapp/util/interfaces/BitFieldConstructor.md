[**@discloudapp/util**](../README.md)

***

[Documentation](../../../packages.md) / [@discloudapp/util](../README.md) / BitFieldConstructor

# Interface: BitFieldConstructor\<S, N\>

Defined in: [packages/util/src/BitField.ts:4](https://github.com/discloud/discloud.app/blob/1458affc9a022eb2fc5fe37e7b3b002130b2fdad/packages/util/src/BitField.ts#L4)

**`Internal`**

## Type Parameters

• **S** *extends* `string`

• **N** *extends* `bigint` \| `number`

## Constructors

### new BitFieldConstructor()

> **new BitFieldConstructor**(...`bits`): [`BitField`](../classes/BitField.md)\<`S`, `N`\>

Defined in: [packages/util/src/BitField.ts:5](https://github.com/discloud/discloud.app/blob/1458affc9a022eb2fc5fe37e7b3b002130b2fdad/packages/util/src/BitField.ts#L5)

#### Parameters

##### bits

...[`BitFieldResolvable`](../type-aliases/BitFieldResolvable.md)\<`S`, `N`\>[]

#### Returns

[`BitField`](../classes/BitField.md)\<`S`, `N`\>

## Properties

### DefaultBit

> `readonly` **DefaultBit**: `N`

Defined in: [packages/util/src/BitField.ts:6](https://github.com/discloud/discloud.app/blob/1458affc9a022eb2fc5fe37e7b3b002130b2fdad/packages/util/src/BitField.ts#L6)

***

### Flags

> `readonly` **Flags**: `EnumLike`\<`S`, `N`\>

Defined in: [packages/util/src/BitField.ts:7](https://github.com/discloud/discloud.app/blob/1458affc9a022eb2fc5fe37e7b3b002130b2fdad/packages/util/src/BitField.ts#L7)

## Methods

### resolve()

> **resolve**(`bit`): `N`

Defined in: [packages/util/src/BitField.ts:8](https://github.com/discloud/discloud.app/blob/1458affc9a022eb2fc5fe37e7b3b002130b2fdad/packages/util/src/BitField.ts#L8)

#### Parameters

##### bit

[`BitFieldResolvable`](../type-aliases/BitFieldResolvable.md)\<`S`, `N`\>

#### Returns

`N`
