[webOS](../README.md) / [Modules](../modules.md) / [model](../modules/model.md) / GetChannelListTVResponse

# Interface: GetChannelListTVResponse

[model](../modules/model.md).GetChannelListTVResponse

## Table of contents

### Properties

- [cableAnalogSkipped](model.GetChannelListTVResponse.md#cableanalogskipped)
- [channelList](model.GetChannelListTVResponse.md#channellist)
- [channelListCount](model.GetChannelListTVResponse.md#channellistcount)
- [channelLogoServerUrl](model.GetChannelListTVResponse.md#channellogoserverurl)
- [dataSource](model.GetChannelListTVResponse.md#datasource)
- [dataType](model.GetChannelListTVResponse.md#datatype)
- [deviceSourceIndex](model.GetChannelListTVResponse.md#devicesourceindex)
- [scannedChannelCount](model.GetChannelListTVResponse.md#scannedchannelcount)
- [valueList](model.GetChannelListTVResponse.md#valuelist)

## Properties

### cableAnalogSkipped

• **cableAnalogSkipped**: `boolean`

#### Defined in

[src/model.ts:62](https://github.com/Dabolus/webos-tv/blob/405e2bb/src/model.ts#L62)

___

### channelList

• **channelList**: { `ATV`: `boolean` ; `Bandwidth`: `number` ; `CASystemIDList`: `any` ; `CASystemIDListCount`: `number` ; `DTV`: `boolean` ; `Data`: `boolean` ; `Frequency`: `number` ; `HDTV`: `boolean` ; `IPChannelCode`: `string` ; `Invisible`: `boolean` ; `Numeric`: `boolean` ; `PrimaryCh`: `boolean` ; `Radio`: `boolean` ; `TV`: `boolean` ; `chanCode`: `string` ; `channelGenreCode`: `string` ; `channelId`: `string` ; `channelLogoSize`: `string` ; `channelMode`: `string` ; `channelModeId`: `number` ; `channelName`: `string` ; `channelNumber`: `string` ; `channelType`: `string` ; `channelTypeId`: `number` ; `descrambled`: `boolean` ; `display`: `number` ; `favoriteGroup`: `any`[] ; `favoriteIdxA`: `number` ; `favoriteIdxB`: `number` ; `favoriteIdxC`: `number` ; `favoriteIdxD`: `number` ; `fineTuned`: `boolean` ; `groupIdList`: `any`[][] ; `imgUrl`: `string` ; `imgUrl2`: `string` ; `ipCallNumber`: `string` ; `ipChanServerUrl`: `string` ; `locked`: `boolean` ; `majorNumber`: `number` ; `minorNumber`: `number` ; `otuFlag`: `boolean` ; `payChan`: `boolean` ; `programId`: `string` ; `satelliteName`: `string` ; `scrambled`: `boolean` ; `serviceType`: `number` ; `shortCut`: `number` ; `signalChannelId`: `string` ; `skipped`: `boolean` ; `specialService`: `boolean`  }[]

#### Defined in

[src/model.ts:73](https://github.com/Dabolus/webos-tv/blob/405e2bb/src/model.ts#L73)

___

### channelListCount

• **channelListCount**: `number`

#### Defined in

[src/model.ts:71](https://github.com/Dabolus/webos-tv/blob/405e2bb/src/model.ts#L71)

___

### channelLogoServerUrl

• **channelLogoServerUrl**: `string`

#### Defined in

[src/model.ts:72](https://github.com/Dabolus/webos-tv/blob/405e2bb/src/model.ts#L72)

___

### dataSource

• **dataSource**: `number`

#### Defined in

[src/model.ts:60](https://github.com/Dabolus/webos-tv/blob/405e2bb/src/model.ts#L60)

___

### dataType

• **dataType**: `number`

#### Defined in

[src/model.ts:61](https://github.com/Dabolus/webos-tv/blob/405e2bb/src/model.ts#L61)

___

### deviceSourceIndex

• **deviceSourceIndex**: `number`

#### Defined in

[src/model.ts:70](https://github.com/Dabolus/webos-tv/blob/405e2bb/src/model.ts#L70)

___

### scannedChannelCount

• **scannedChannelCount**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `cableAnalogCount` | `number` |
| `cableDigitalCount` | `number` |
| `satelliteDigitalCount` | `number` |
| `terrestrialAnalogCount` | `number` |
| `terrestrialDigitalCount` | `number` |

#### Defined in

[src/model.ts:63](https://github.com/Dabolus/webos-tv/blob/405e2bb/src/model.ts#L63)

___

### valueList

• **valueList**: `string`

#### Defined in

[src/model.ts:59](https://github.com/Dabolus/webos-tv/blob/405e2bb/src/model.ts#L59)
