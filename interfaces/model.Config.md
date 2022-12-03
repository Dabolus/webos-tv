[webOS](../README.md) / [Exports](../modules.md) / [model](../modules/model.md) / Config

# Interface: Config

[model](../modules/model.md).Config

## Table of contents

### Properties

- [client-key](model.Config.md#client-key)
- [forcePairing](model.Config.md#forcepairing)
- [manifest](model.Config.md#manifest)
- [pairingType](model.Config.md#pairingtype)

## Properties

### client-key

• `Optional` **client-key**: `string`

#### Defined in

[src/model.ts:22](https://github.com/Dabolus/webos-tv/blob/5769651/src/model.ts#L22)

___

### forcePairing

• **forcePairing**: `boolean`

#### Defined in

[src/model.ts:2](https://github.com/Dabolus/webos-tv/blob/5769651/src/model.ts#L2)

___

### manifest

• **manifest**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `appVersion` | `string` |
| `manifestVersion` | `number` |
| `permissions` | `string`[] |
| `signatures` | { `signature`: `string` ; `signatureVersion`: `number`  }[] |
| `signed` | { `appId`: `string` ; `created`: `string` ; `localizedAppNames`: `Record`<`string`, `string`\> ; `localizedVendorNames`: `Record`<`string`, `string`\> ; `permissions`: `string`[] ; `serial`: `string` ; `vendorId`: `string`  } |
| `signed.appId` | `string` |
| `signed.created` | `string` |
| `signed.localizedAppNames` | `Record`<`string`, `string`\> |
| `signed.localizedVendorNames` | `Record`<`string`, `string`\> |
| `signed.permissions` | `string`[] |
| `signed.serial` | `string` |
| `signed.vendorId` | `string` |

#### Defined in

[src/model.ts:4](https://github.com/Dabolus/webos-tv/blob/5769651/src/model.ts#L4)

___

### pairingType

• **pairingType**: `string`

#### Defined in

[src/model.ts:3](https://github.com/Dabolus/webos-tv/blob/5769651/src/model.ts#L3)
