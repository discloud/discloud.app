[**Documentation**](../../../README.md)

***

[Documentation](../../../packages.md) / [@discloudapp/util](../README.md) / BitFieldConstructor

# Interface: BitFieldConstructor\<S, N\>

Defined in: [packages/util/src/BitField.ts:4](https://github.com/discloud/discloud.app/blob/5b4e3fe9c701f0b4f5ffa4246f463403d1e47fa1/packages/util/src/BitField.ts#L4)

**`Internal`**

## Type Parameters

### S

`S` *extends* `string`

### N

`N` *extends* `bigint` \| `number`

## Constructors

### Constructor

> **new BitFieldConstructor**(...`bits`): [`BitField`](../classes/BitField.md)\<`S`, `N`\>

Defined in: [packages/util/src/BitField.ts:5](https://github.com/discloud/discloud.app/blob/5b4e3fe9c701f0b4f5ffa4246f463403d1e47fa1/packages/util/src/BitField.ts#L5)

#### Parameters

##### bits

...[`BitFieldResolvable`](../type-aliases/BitFieldResolvable.md)\<`S`, `N`\>[]

#### Returns

[`BitField`](../classes/BitField.md)\<`S`, `N`\>

## Properties

### DefaultBit

> `readonly` **DefaultBit**: `N`

Defined in: [packages/util/src/BitField.ts:6](https://github.com/discloud/discloud.app/blob/5b4e3fe9c701f0b4f5ffa4246f463403d1e47fa1/packages/util/src/BitField.ts#L6)

***

### Flags

> `readonly` **Flags**: `EnumLike`\<`S`, `N`\>

Defined in: [packages/util/src/BitField.ts:7](https://github.com/discloud/discloud.app/blob/5b4e3fe9c701f0b4f5ffa4246f463403d1e47fa1/packages/util/src/BitField.ts#L7)

## Methods

### resolve()

> **resolve**(`bit`): `N`

Defined in: [packages/util/src/BitField.ts:8](https://github.com/discloud/discloud.app/blob/5b4e3fe9c701f0b4f5ffa4246f463403d1e47fa1/packages/util/src/BitField.ts#L8)

#### Parameters

##### bit

[`BitFieldResolvable`](../type-aliases/BitFieldResolvable.md)\<`S`, `N`\>

#### Returns

`N`
