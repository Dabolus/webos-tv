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

[src/model.ts:25](https://github.com/Dabolus/webos-tv/blob/34d8c22/src/model.ts#L25)

___

### forcePairing

• **forcePairing**: `boolean`

#### Defined in

[src/model.ts:5](https://github.com/Dabolus/webos-tv/blob/34d8c22/src/model.ts#L5)

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

[src/model.ts:7](https://github.com/Dabolus/webos-tv/blob/34d8c22/src/model.ts#L7)

___

### pairingType

• **pairingType**: `string`

#### Defined in

[src/model.ts:6](https://github.com/Dabolus/webos-tv/blob/34d8c22/src/model.ts#L6)
