[webOS](../README.md) / [Exports](../modules.md) / wol

# Module: wol

## Table of contents

### Functions

- [chunk](wol.md#chunk)
- [createMagicPacket](wol.md#createmagicpacket)
- [send](wol.md#send)
- [wake](wol.md#wake)

## Functions

### chunk

▸ **chunk**<`T`\>(`arr`, `size`): `T`[]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `string` \| `unknown`[] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `arr` | `T` |
| `size` | `number` |

#### Returns

`T`[]

#### Defined in

[src/wol.ts:6](https://github.com/Dabolus/webos-tv/blob/a44bbc5/src/wol.ts#L6)

___

### createMagicPacket

▸ **createMagicPacket**(`macAddress`, `password?`): `Buffer`

Creates a WOL magic packet intended to wake the given MAC address.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `macAddress` | `string` | The MAC address of the device to wake |
| `password?` | `string` | The SecureOn password of the device to wake |

#### Returns

`Buffer`

The WOL magic packet

#### Defined in

[src/wol.ts:21](https://github.com/Dabolus/webos-tv/blob/a44bbc5/src/wol.ts#L21)

___

### send

▸ **send**(`magicPacket`, `options?`): `Promise`<`Buffer`\>

Sends a WOL magic packet on the network

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `magicPacket` | `Buffer` | The WOL magic packet ot send |
| `options` | `Object` | An object containing some sending options |
| `options.address?` | `string` | The address to send the magic packet to |
| `options.port?` | `number` | The port to send the magic packet to |

#### Returns

`Promise`<`Buffer`\>

A promise that returns the sent magic packet when resolved, or an error when rejected

#### Defined in

[src/wol.ts:68](https://github.com/Dabolus/webos-tv/blob/a44bbc5/src/wol.ts#L68)

___

### wake

▸ **wake**(`macAddress`, `options?`): `Promise`<`Buffer`\>

Creates and sends a magic packet intended to wake the given MAC address.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `macAddress` | `string` | The MAC address of the device to wake |
| `options?` | `Object` | An object containing some sending options |
| `options.address?` | `string` | The address to send the magic packet to |
| `options.password?` | `string` | The SecureOn password of the device to wake |
| `options.port?` | `number` | The port to send the magic packet to |

#### Returns

`Promise`<`Buffer`\>

A promise that returns the sent magic packet when resolved, or an error when rejected

#### Defined in

[src/wol.ts:112](https://github.com/Dabolus/webos-tv/blob/a44bbc5/src/wol.ts#L112)
