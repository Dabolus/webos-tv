[webOS](../README.md) / [Exports](../modules.md) / model

# Module: model

## Table of contents

### Enumerations

- [Button](../enums/model.Button.md)
- [TV3DStatusPattern](../enums/model.TV3DStatusPattern.md)

### Interfaces

- [AppListTVResponse](../interfaces/model.AppListTVResponse.md)
- [AppStateTVResponse](../interfaces/model.AppStateTVResponse.md)
- [BaseTVResponse](../interfaces/model.BaseTVResponse.md)
- [Check3DStatusTVResponse](../interfaces/model.Check3DStatusTVResponse.md)
- [Config](../interfaces/model.Config.md)
- [ErrorTVResponse](../interfaces/model.ErrorTVResponse.md)
- [ForegroundAppInfoTVResponse](../interfaces/model.ForegroundAppInfoTVResponse.md)
- [GetAudioStatusTVResponse](../interfaces/model.GetAudioStatusTVResponse.md)
- [GetChannelListTVResponse](../interfaces/model.GetChannelListTVResponse.md)
- [GetCurrentChannelTVResponse](../interfaces/model.GetCurrentChannelTVResponse.md)
- [GetCurrentSWInformationTVResponse](../interfaces/model.GetCurrentSWInformationTVResponse.md)
- [GetServiceListTVResponse](../interfaces/model.GetServiceListTVResponse.md)
- [GetVolumeTVResponse](../interfaces/model.GetVolumeTVResponse.md)
- [InputSocketTVResponse](../interfaces/model.InputSocketTVResponse.md)
- [LaunchAppTVResponse](../interfaces/model.LaunchAppTVResponse.md)
- [LaunchPointsTVResponse](../interfaces/model.LaunchPointsTVResponse.md)
- [OpenURLTVResponse](../interfaces/model.OpenURLTVResponse.md)
- [ShowNotificationTVResponse](../interfaces/model.ShowNotificationTVResponse.md)
- [TV3DStatus](../interfaces/model.TV3DStatus.md)
- [TVAppInfo](../interfaces/model.TVAppInfo.md)
- [TVLaunchPoint](../interfaces/model.TVLaunchPoint.md)
- [TVService](../interfaces/model.TVService.md)

### Type Aliases

- [AppListResult](model.md#applistresult)
- [AppStateResult](model.md#appstateresult)
- [AuthenticateResult](model.md#authenticateresult)
- [ChannelDownResult](model.md#channeldownresult)
- [ChannelDownTVResponse](model.md#channeldowntvresponse)
- [ChannelUpResult](model.md#channelupresult)
- [ChannelUpTVResponse](model.md#channeluptvresponse)
- [Check3DStatusResult](model.md#check3dstatusresult)
- [CloseAppResult](model.md#closeappresult)
- [CloseAppTVResponse](model.md#closeapptvresponse)
- [CloseMediaViewerResult](model.md#closemediaviewerresult)
- [CloseMediaViewerTVResponse](model.md#closemediaviewertvresponse)
- [Constructor](model.md#constructor)
- [DecreaseVolumeResult](model.md#decreasevolumeresult)
- [DeleteTextResult](model.md#deletetextresult)
- [DeleteTextTVResponse](model.md#deletetexttvresponse)
- [Disable3DResult](model.md#disable3dresult)
- [Disable3DTVResponse](model.md#disable3dtvresponse)
- [EmptyResponse](model.md#emptyresponse)
- [Enable3DResult](model.md#enable3dresult)
- [Enable3DTVResponse](model.md#enable3dtvresponse)
- [FastForwardResult](model.md#fastforwardresult)
- [FastForwardTVResponse](model.md#fastforwardtvresponse)
- [ForegroundAppInfoResult](model.md#foregroundappinforesult)
- [GetAudioStatusResult](model.md#getaudiostatusresult)
- [GetChannelListResult](model.md#getchannellistresult)
- [GetCurrentChannelResult](model.md#getcurrentchannelresult)
- [GetCurrentSWInformationResult](model.md#getcurrentswinformationresult)
- [GetServiceListResult](model.md#getservicelistresult)
- [GetVolumeResult](model.md#getvolumeresult)
- [IncreaseVolumeResult](model.md#increasevolumeresult)
- [Is3DEnabledResult](model.md#is3denabledresult)
- [IsMutedResult](model.md#ismutedresult)
- [LaunchAppResult](model.md#launchappresult)
- [LaunchPointsResult](model.md#launchpointsresult)
- [MuteResult](model.md#muteresult)
- [OpenURLResult](model.md#openurlresult)
- [PauseResult](model.md#pauseresult)
- [PauseTVResponse](model.md#pausetvresponse)
- [PlayResult](model.md#playresult)
- [PlayTVResponse](model.md#playtvresponse)
- [RewindResult](model.md#rewindresult)
- [RewindTVResponse](model.md#rewindtvresponse)
- [SendEnterResult](model.md#sendenterresult)
- [SendEnterTVResponse](model.md#sendentertvresponse)
- [SetMuteResult](model.md#setmuteresult)
- [SetMuteTVResponse](model.md#setmutetvresponse)
- [SetVolumeResult](model.md#setvolumeresult)
- [ShowNotificationResult](model.md#shownotificationresult)
- [StopResult](model.md#stopresult)
- [StopTVResponse](model.md#stoptvresponse)
- [Toggle3DResult](model.md#toggle3dresult)
- [ToggleMuteResult](model.md#togglemuteresult)
- [TurnOffResult](model.md#turnoffresult)
- [TurnOffTVResponse](model.md#turnofftvresponse)
- [UnmuteResult](model.md#unmuteresult)
- [VolumeDownResult](model.md#volumedownresult)
- [VolumeUpResult](model.md#volumeupresult)
- [WriteTextResult](model.md#writetextresult)
- [WriteTextTVResponse](model.md#writetexttvresponse)

## Type Aliases

### AppListResult

Ƭ **AppListResult**: [`TVAppInfo`](../interfaces/model.TVAppInfo.md)[]

#### Defined in

[src/model.ts:414](https://github.com/Dabolus/webos-tv/blob/34d8c22/src/model.ts#L414)

___

### AppStateResult

Ƭ **AppStateResult**: [`AppStateTVResponse`](../interfaces/model.AppStateTVResponse.md)

#### Defined in

[src/model.ts:276](https://github.com/Dabolus/webos-tv/blob/34d8c22/src/model.ts#L276)

___

### AuthenticateResult

Ƭ **AuthenticateResult**: `string`

#### Defined in

[src/model.ts:76](https://github.com/Dabolus/webos-tv/blob/34d8c22/src/model.ts#L76)

___

### ChannelDownResult

Ƭ **ChannelDownResult**: [`GetCurrentChannelResult`](model.md#getcurrentchannelresult)

#### Defined in

[src/model.ts:199](https://github.com/Dabolus/webos-tv/blob/34d8c22/src/model.ts#L199)

___

### ChannelDownTVResponse

Ƭ **ChannelDownTVResponse**: [`EmptyResponse`](model.md#emptyresponse)

#### Defined in

[src/model.ts:197](https://github.com/Dabolus/webos-tv/blob/34d8c22/src/model.ts#L197)

___

### ChannelUpResult

Ƭ **ChannelUpResult**: [`GetCurrentChannelResult`](model.md#getcurrentchannelresult)

#### Defined in

[src/model.ts:195](https://github.com/Dabolus/webos-tv/blob/34d8c22/src/model.ts#L195)

___

### ChannelUpTVResponse

Ƭ **ChannelUpTVResponse**: [`EmptyResponse`](model.md#emptyresponse)

#### Defined in

[src/model.ts:193](https://github.com/Dabolus/webos-tv/blob/34d8c22/src/model.ts#L193)

___

### Check3DStatusResult

Ƭ **Check3DStatusResult**: [`TV3DStatus`](../interfaces/model.TV3DStatus.md)

#### Defined in

[src/model.ts:341](https://github.com/Dabolus/webos-tv/blob/34d8c22/src/model.ts#L341)

___

### CloseAppResult

Ƭ **CloseAppResult**: `void`

#### Defined in

[src/model.ts:304](https://github.com/Dabolus/webos-tv/blob/34d8c22/src/model.ts#L304)

___

### CloseAppTVResponse

Ƭ **CloseAppTVResponse**: [`EmptyResponse`](model.md#emptyresponse)

#### Defined in

[src/model.ts:302](https://github.com/Dabolus/webos-tv/blob/34d8c22/src/model.ts#L302)

___

### CloseMediaViewerResult

Ƭ **CloseMediaViewerResult**: `void`

#### Defined in

[src/model.ts:261](https://github.com/Dabolus/webos-tv/blob/34d8c22/src/model.ts#L261)

___

### CloseMediaViewerTVResponse

Ƭ **CloseMediaViewerTVResponse**: [`EmptyResponse`](model.md#emptyresponse)

#### Defined in

[src/model.ts:259](https://github.com/Dabolus/webos-tv/blob/34d8c22/src/model.ts#L259)

___

### Constructor

Ƭ **Constructor**<`T`\>: (...`args`: `any`[]) => `T`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Type declaration

• (...`args`)

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any`[] |

#### Defined in

[src/model.ts:2](https://github.com/Dabolus/webos-tv/blob/34d8c22/src/model.ts#L2)

___

### DecreaseVolumeResult

Ƭ **DecreaseVolumeResult**: [`SetVolumeResult`](model.md#setvolumeresult)

#### Defined in

[src/model.ts:213](https://github.com/Dabolus/webos-tv/blob/34d8c22/src/model.ts#L213)

___

### DeleteTextResult

Ƭ **DeleteTextResult**: `void`

#### Defined in

[src/model.ts:355](https://github.com/Dabolus/webos-tv/blob/34d8c22/src/model.ts#L355)

___

### DeleteTextTVResponse

Ƭ **DeleteTextTVResponse**: [`EmptyResponse`](model.md#emptyresponse)

#### Defined in

[src/model.ts:353](https://github.com/Dabolus/webos-tv/blob/34d8c22/src/model.ts#L353)

___

### Disable3DResult

Ƭ **Disable3DResult**: `boolean`

#### Defined in

[src/model.ts:321](https://github.com/Dabolus/webos-tv/blob/34d8c22/src/model.ts#L321)

___

### Disable3DTVResponse

Ƭ **Disable3DTVResponse**: [`EmptyResponse`](model.md#emptyresponse)

#### Defined in

[src/model.ts:319](https://github.com/Dabolus/webos-tv/blob/34d8c22/src/model.ts#L319)

___

### EmptyResponse

Ƭ **EmptyResponse**: `Record`<`string`, `never`\>

#### Defined in

[src/model.ts:64](https://github.com/Dabolus/webos-tv/blob/34d8c22/src/model.ts#L64)

___

### Enable3DResult

Ƭ **Enable3DResult**: `boolean`

#### Defined in

[src/model.ts:317](https://github.com/Dabolus/webos-tv/blob/34d8c22/src/model.ts#L317)

___

### Enable3DTVResponse

Ƭ **Enable3DTVResponse**: [`EmptyResponse`](model.md#emptyresponse)

#### Defined in

[src/model.ts:315](https://github.com/Dabolus/webos-tv/blob/34d8c22/src/model.ts#L315)

___

### FastForwardResult

Ƭ **FastForwardResult**: `void`

#### Defined in

[src/model.ts:257](https://github.com/Dabolus/webos-tv/blob/34d8c22/src/model.ts#L257)

___

### FastForwardTVResponse

Ƭ **FastForwardTVResponse**: [`EmptyResponse`](model.md#emptyresponse)

#### Defined in

[src/model.ts:255](https://github.com/Dabolus/webos-tv/blob/34d8c22/src/model.ts#L255)

___

### ForegroundAppInfoResult

Ƭ **ForegroundAppInfoResult**: [`ForegroundAppInfoTVResponse`](../interfaces/model.ForegroundAppInfoTVResponse.md)

#### Defined in

[src/model.ts:269](https://github.com/Dabolus/webos-tv/blob/34d8c22/src/model.ts#L269)

___

### GetAudioStatusResult

Ƭ **GetAudioStatusResult**: [`GetAudioStatusTVResponse`](../interfaces/model.GetAudioStatusTVResponse.md)

#### Defined in

[src/model.ts:225](https://github.com/Dabolus/webos-tv/blob/34d8c22/src/model.ts#L225)

___

### GetChannelListResult

Ƭ **GetChannelListResult**: [`GetChannelListTVResponse`](../interfaces/model.GetChannelListTVResponse.md)

#### Defined in

[src/model.ts:162](https://github.com/Dabolus/webos-tv/blob/34d8c22/src/model.ts#L162)

___

### GetCurrentChannelResult

Ƭ **GetCurrentChannelResult**: [`GetCurrentChannelTVResponse`](../interfaces/model.GetCurrentChannelTVResponse.md)

#### Defined in

[src/model.ts:191](https://github.com/Dabolus/webos-tv/blob/34d8c22/src/model.ts#L191)

___

### GetCurrentSWInformationResult

Ƭ **GetCurrentSWInformationResult**: [`GetCurrentSWInformationTVResponse`](../interfaces/model.GetCurrentSWInformationTVResponse.md)

#### Defined in

[src/model.ts:293](https://github.com/Dabolus/webos-tv/blob/34d8c22/src/model.ts#L293)

___

### GetServiceListResult

Ƭ **GetServiceListResult**: [`TVService`](../interfaces/model.TVService.md)[]

#### Defined in

[src/model.ts:91](https://github.com/Dabolus/webos-tv/blob/34d8c22/src/model.ts#L91)

___

### GetVolumeResult

Ƭ **GetVolumeResult**: [`GetVolumeTVResponse`](../interfaces/model.GetVolumeTVResponse.md)

#### Defined in

[src/model.ts:207](https://github.com/Dabolus/webos-tv/blob/34d8c22/src/model.ts#L207)

___

### IncreaseVolumeResult

Ƭ **IncreaseVolumeResult**: [`SetVolumeResult`](model.md#setvolumeresult)

#### Defined in

[src/model.ts:211](https://github.com/Dabolus/webos-tv/blob/34d8c22/src/model.ts#L211)

___

### Is3DEnabledResult

Ƭ **Is3DEnabledResult**: `boolean`

#### Defined in

[src/model.ts:313](https://github.com/Dabolus/webos-tv/blob/34d8c22/src/model.ts#L313)

___

### IsMutedResult

Ƭ **IsMutedResult**: `boolean`

#### Defined in

[src/model.ts:227](https://github.com/Dabolus/webos-tv/blob/34d8c22/src/model.ts#L227)

___

### LaunchAppResult

Ƭ **LaunchAppResult**: [`LaunchAppTVResponse`](../interfaces/model.LaunchAppTVResponse.md)

#### Defined in

[src/model.ts:300](https://github.com/Dabolus/webos-tv/blob/34d8c22/src/model.ts#L300)

___

### LaunchPointsResult

Ƭ **LaunchPointsResult**: [`LaunchPointsTVResponse`](../interfaces/model.LaunchPointsTVResponse.md)

#### Defined in

[src/model.ts:446](https://github.com/Dabolus/webos-tv/blob/34d8c22/src/model.ts#L446)

___

### MuteResult

Ƭ **MuteResult**: `boolean`

#### Defined in

[src/model.ts:233](https://github.com/Dabolus/webos-tv/blob/34d8c22/src/model.ts#L233)

___

### OpenURLResult

Ƭ **OpenURLResult**: [`OpenURLTVResponse`](../interfaces/model.OpenURLTVResponse.md)

#### Defined in

[src/model.ts:311](https://github.com/Dabolus/webos-tv/blob/34d8c22/src/model.ts#L311)

___

### PauseResult

Ƭ **PauseResult**: `void`

#### Defined in

[src/model.ts:249](https://github.com/Dabolus/webos-tv/blob/34d8c22/src/model.ts#L249)

___

### PauseTVResponse

Ƭ **PauseTVResponse**: [`EmptyResponse`](model.md#emptyresponse)

#### Defined in

[src/model.ts:247](https://github.com/Dabolus/webos-tv/blob/34d8c22/src/model.ts#L247)

___

### PlayResult

Ƭ **PlayResult**: `void`

#### Defined in

[src/model.ts:241](https://github.com/Dabolus/webos-tv/blob/34d8c22/src/model.ts#L241)

___

### PlayTVResponse

Ƭ **PlayTVResponse**: [`EmptyResponse`](model.md#emptyresponse)

#### Defined in

[src/model.ts:239](https://github.com/Dabolus/webos-tv/blob/34d8c22/src/model.ts#L239)

___

### RewindResult

Ƭ **RewindResult**: `void`

#### Defined in

[src/model.ts:253](https://github.com/Dabolus/webos-tv/blob/34d8c22/src/model.ts#L253)

___

### RewindTVResponse

Ƭ **RewindTVResponse**: [`EmptyResponse`](model.md#emptyresponse)

#### Defined in

[src/model.ts:251](https://github.com/Dabolus/webos-tv/blob/34d8c22/src/model.ts#L251)

___

### SendEnterResult

Ƭ **SendEnterResult**: `void`

#### Defined in

[src/model.ts:359](https://github.com/Dabolus/webos-tv/blob/34d8c22/src/model.ts#L359)

___

### SendEnterTVResponse

Ƭ **SendEnterTVResponse**: [`EmptyResponse`](model.md#emptyresponse)

#### Defined in

[src/model.ts:357](https://github.com/Dabolus/webos-tv/blob/34d8c22/src/model.ts#L357)

___

### SetMuteResult

Ƭ **SetMuteResult**: `boolean`

#### Defined in

[src/model.ts:231](https://github.com/Dabolus/webos-tv/blob/34d8c22/src/model.ts#L231)

___

### SetMuteTVResponse

Ƭ **SetMuteTVResponse**: [`EmptyResponse`](model.md#emptyresponse)

#### Defined in

[src/model.ts:229](https://github.com/Dabolus/webos-tv/blob/34d8c22/src/model.ts#L229)

___

### SetVolumeResult

Ƭ **SetVolumeResult**: [`GetVolumeResult`](model.md#getvolumeresult)

#### Defined in

[src/model.ts:209](https://github.com/Dabolus/webos-tv/blob/34d8c22/src/model.ts#L209)

___

### ShowNotificationResult

Ƭ **ShowNotificationResult**: `string`

#### Defined in

[src/model.ts:347](https://github.com/Dabolus/webos-tv/blob/34d8c22/src/model.ts#L347)

___

### StopResult

Ƭ **StopResult**: `void`

#### Defined in

[src/model.ts:245](https://github.com/Dabolus/webos-tv/blob/34d8c22/src/model.ts#L245)

___

### StopTVResponse

Ƭ **StopTVResponse**: [`EmptyResponse`](model.md#emptyresponse)

#### Defined in

[src/model.ts:243](https://github.com/Dabolus/webos-tv/blob/34d8c22/src/model.ts#L243)

___

### Toggle3DResult

Ƭ **Toggle3DResult**: `boolean`

#### Defined in

[src/model.ts:323](https://github.com/Dabolus/webos-tv/blob/34d8c22/src/model.ts#L323)

___

### ToggleMuteResult

Ƭ **ToggleMuteResult**: `boolean`

#### Defined in

[src/model.ts:237](https://github.com/Dabolus/webos-tv/blob/34d8c22/src/model.ts#L237)

___

### TurnOffResult

Ƭ **TurnOffResult**: `void`

#### Defined in

[src/model.ts:80](https://github.com/Dabolus/webos-tv/blob/34d8c22/src/model.ts#L80)

___

### TurnOffTVResponse

Ƭ **TurnOffTVResponse**: [`EmptyResponse`](model.md#emptyresponse)

#### Defined in

[src/model.ts:78](https://github.com/Dabolus/webos-tv/blob/34d8c22/src/model.ts#L78)

___

### UnmuteResult

Ƭ **UnmuteResult**: `boolean`

#### Defined in

[src/model.ts:235](https://github.com/Dabolus/webos-tv/blob/34d8c22/src/model.ts#L235)

___

### VolumeDownResult

Ƭ **VolumeDownResult**: [`GetVolumeTVResponse`](../interfaces/model.GetVolumeTVResponse.md)

#### Defined in

[src/model.ts:217](https://github.com/Dabolus/webos-tv/blob/34d8c22/src/model.ts#L217)

___

### VolumeUpResult

Ƭ **VolumeUpResult**: [`GetVolumeTVResponse`](../interfaces/model.GetVolumeTVResponse.md)

#### Defined in

[src/model.ts:215](https://github.com/Dabolus/webos-tv/blob/34d8c22/src/model.ts#L215)

___

### WriteTextResult

Ƭ **WriteTextResult**: `void`

#### Defined in

[src/model.ts:351](https://github.com/Dabolus/webos-tv/blob/34d8c22/src/model.ts#L351)

___

### WriteTextTVResponse

Ƭ **WriteTextTVResponse**: [`EmptyResponse`](model.md#emptyresponse)

#### Defined in

[src/model.ts:349](https://github.com/Dabolus/webos-tv/blob/34d8c22/src/model.ts#L349)
