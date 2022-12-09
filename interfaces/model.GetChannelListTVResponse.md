[webOS](../README.md) / [Exports](../modules.md) / [model](../modules/model.md) / GetChannelListTVResponse

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

[src/model.ts:97](https://github.com/Dabolus/webos-tv/blob/34d8c22/src/model.ts#L97)

___

### channelList

• **channelList**: { `ATV`: `boolean` ; `Bandwidth`: `number` ; `CASystemIDList`: `any` ; `CASystemIDListCount`: `number` ; `DTV`: `boolean` ; `Data`: `boolean` ; `Frequency`: `number` ; `HDTV`: `boolean` ; `IPChannelCode`: `string` ; `Invisible`: `boolean` ; `Numeric`: `boolean` ; `PrimaryCh`: `boolean` ; `Radio`: `boolean` ; `TV`: `boolean` ; `chanCode`: `string` ; `channelGenreCode`: `string` ; `channelId`: `string` ; `channelLogoSize`: `string` ; `channelMode`: `string` ; `channelModeId`: `number` ; `channelName`: `string` ; `channelNumber`: `string` ; `channelType`: `string` ; `channelTypeId`: `number` ; `descrambled`: `boolean` ; `display`: `number` ; `favoriteGroup`: `any`[] ; `favoriteIdxA`: `number` ; `favoriteIdxB`: `number` ; `favoriteIdxC`: `number` ; `favoriteIdxD`: `number` ; `fineTuned`: `boolean` ; `groupIdList`: `any`[][] ; `imgUrl`: `string` ; `imgUrl2`: `string` ; `ipCallNumber`: `string` ; `ipChanServerUrl`: `string` ; `locked`: `boolean` ; `majorNumber`: `number` ; `minorNumber`: `number` ; `otuFlag`: `boolean` ; `payChan`: `boolean` ; `programId`: `string` ; `satelliteName`: `string` ; `scrambled`: `boolean` ; `serviceType`: `number` ; `shortCut`: `number` ; `signalChannelId`: `string` ; `skipped`: `boolean` ; `specialService`: `boolean`  }[]

#### Defined in

[src/model.ts:108](https://github.com/Dabolus/webos-tv/blob/34d8c22/src/model.ts#L108)

___

### channelListCount

• **channelListCount**: `number`

#### Defined in

[src/model.ts:106](https://github.com/Dabolus/webos-tv/blob/34d8c22/src/model.ts#L106)

___

### channelLogoServerUrl

• **channelLogoServerUrl**: `string`

#### Defined in

[src/model.ts:107](https://github.com/Dabolus/webos-tv/blob/34d8c22/src/model.ts#L107)

___

### dataSource

• **dataSource**: `number`

#### Defined in

[src/model.ts:95](https://github.com/Dabolus/webos-tv/blob/34d8c22/src/model.ts#L95)

___

### dataType

• **dataType**: `number`

#### Defined in

[src/model.ts:96](https://github.com/Dabolus/webos-tv/blob/34d8c22/src/model.ts#L96)

___

### deviceSourceIndex

• **deviceSourceIndex**: `number`

#### Defined in

[src/model.ts:105](https://github.com/Dabolus/webos-tv/blob/34d8c22/src/model.ts#L105)

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

[src/model.ts:98](https://github.com/Dabolus/webos-tv/blob/34d8c22/src/model.ts#L98)

___

### valueList

• **valueList**: `string`

#### Defined in

[src/model.ts:94](https://github.com/Dabolus/webos-tv/blob/34d8c22/src/model.ts#L94)
