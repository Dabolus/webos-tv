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

[src/model.ts:430](https://github.com/Dabolus/webos-tv/blob/7abb5c9/src/model.ts#L430)

___

### AppStateResult

Ƭ **AppStateResult**: [`AppStateTVResponse`](../interfaces/model.AppStateTVResponse.md)

#### Defined in

[src/model.ts:277](https://github.com/Dabolus/webos-tv/blob/7abb5c9/src/model.ts#L277)

___

### AuthenticateResult

Ƭ **AuthenticateResult**: `string`

#### Defined in

[src/model.ts:77](https://github.com/Dabolus/webos-tv/blob/7abb5c9/src/model.ts#L77)

___

### ChannelDownResult

Ƭ **ChannelDownResult**: [`GetCurrentChannelResult`](model.md#getcurrentchannelresult)

#### Defined in

[src/model.ts:200](https://github.com/Dabolus/webos-tv/blob/7abb5c9/src/model.ts#L200)

___

### ChannelDownTVResponse

Ƭ **ChannelDownTVResponse**: [`EmptyResponse`](model.md#emptyresponse)

#### Defined in

[src/model.ts:198](https://github.com/Dabolus/webos-tv/blob/7abb5c9/src/model.ts#L198)

___

### ChannelUpResult

Ƭ **ChannelUpResult**: [`GetCurrentChannelResult`](model.md#getcurrentchannelresult)

#### Defined in

[src/model.ts:196](https://github.com/Dabolus/webos-tv/blob/7abb5c9/src/model.ts#L196)

___

### ChannelUpTVResponse

Ƭ **ChannelUpTVResponse**: [`EmptyResponse`](model.md#emptyresponse)

#### Defined in

[src/model.ts:194](https://github.com/Dabolus/webos-tv/blob/7abb5c9/src/model.ts#L194)

___

### Check3DStatusResult

Ƭ **Check3DStatusResult**: [`TV3DStatus`](../interfaces/model.TV3DStatus.md)

#### Defined in

[src/model.ts:342](https://github.com/Dabolus/webos-tv/blob/7abb5c9/src/model.ts#L342)

___

### CloseAppResult

Ƭ **CloseAppResult**: `void`

#### Defined in

[src/model.ts:305](https://github.com/Dabolus/webos-tv/blob/7abb5c9/src/model.ts#L305)

___

### CloseAppTVResponse

Ƭ **CloseAppTVResponse**: [`EmptyResponse`](model.md#emptyresponse)

#### Defined in

[src/model.ts:303](https://github.com/Dabolus/webos-tv/blob/7abb5c9/src/model.ts#L303)

___

### CloseMediaViewerResult

Ƭ **CloseMediaViewerResult**: `void`

#### Defined in

[src/model.ts:262](https://github.com/Dabolus/webos-tv/blob/7abb5c9/src/model.ts#L262)

___

### CloseMediaViewerTVResponse

Ƭ **CloseMediaViewerTVResponse**: [`EmptyResponse`](model.md#emptyresponse)

#### Defined in

[src/model.ts:260](https://github.com/Dabolus/webos-tv/blob/7abb5c9/src/model.ts#L260)

___

### Constructor

Ƭ **Constructor**<`T`\>: (...`args`: `any`[]) => `T`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Type declaration

• (`...args`)

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any`[] |

#### Defined in

[src/model.ts:2](https://github.com/Dabolus/webos-tv/blob/7abb5c9/src/model.ts#L2)

___

### DecreaseVolumeResult

Ƭ **DecreaseVolumeResult**: [`SetVolumeResult`](model.md#setvolumeresult)

#### Defined in

[src/model.ts:214](https://github.com/Dabolus/webos-tv/blob/7abb5c9/src/model.ts#L214)

___

### DeleteTextResult

Ƭ **DeleteTextResult**: `void`

#### Defined in

[src/model.ts:356](https://github.com/Dabolus/webos-tv/blob/7abb5c9/src/model.ts#L356)

___

### DeleteTextTVResponse

Ƭ **DeleteTextTVResponse**: [`EmptyResponse`](model.md#emptyresponse)

#### Defined in

[src/model.ts:354](https://github.com/Dabolus/webos-tv/blob/7abb5c9/src/model.ts#L354)

___

### Disable3DResult

Ƭ **Disable3DResult**: `boolean`

#### Defined in

[src/model.ts:322](https://github.com/Dabolus/webos-tv/blob/7abb5c9/src/model.ts#L322)

___

### Disable3DTVResponse

Ƭ **Disable3DTVResponse**: [`EmptyResponse`](model.md#emptyresponse)

#### Defined in

[src/model.ts:320](https://github.com/Dabolus/webos-tv/blob/7abb5c9/src/model.ts#L320)

___

### EmptyResponse

Ƭ **EmptyResponse**: `Record`<`string`, `never`\>

#### Defined in

[src/model.ts:65](https://github.com/Dabolus/webos-tv/blob/7abb5c9/src/model.ts#L65)

___

### Enable3DResult

Ƭ **Enable3DResult**: `boolean`

#### Defined in

[src/model.ts:318](https://github.com/Dabolus/webos-tv/blob/7abb5c9/src/model.ts#L318)

___

### Enable3DTVResponse

Ƭ **Enable3DTVResponse**: [`EmptyResponse`](model.md#emptyresponse)

#### Defined in

[src/model.ts:316](https://github.com/Dabolus/webos-tv/blob/7abb5c9/src/model.ts#L316)

___

### FastForwardResult

Ƭ **FastForwardResult**: `void`

#### Defined in

[src/model.ts:258](https://github.com/Dabolus/webos-tv/blob/7abb5c9/src/model.ts#L258)

___

### FastForwardTVResponse

Ƭ **FastForwardTVResponse**: [`EmptyResponse`](model.md#emptyresponse)

#### Defined in

[src/model.ts:256](https://github.com/Dabolus/webos-tv/blob/7abb5c9/src/model.ts#L256)

___

### ForegroundAppInfoResult

Ƭ **ForegroundAppInfoResult**: [`ForegroundAppInfoTVResponse`](../interfaces/model.ForegroundAppInfoTVResponse.md)

#### Defined in

[src/model.ts:270](https://github.com/Dabolus/webos-tv/blob/7abb5c9/src/model.ts#L270)

___

### GetAudioStatusResult

Ƭ **GetAudioStatusResult**: [`GetAudioStatusTVResponse`](../interfaces/model.GetAudioStatusTVResponse.md)

#### Defined in

[src/model.ts:226](https://github.com/Dabolus/webos-tv/blob/7abb5c9/src/model.ts#L226)

___

### GetChannelListResult

Ƭ **GetChannelListResult**: [`GetChannelListTVResponse`](../interfaces/model.GetChannelListTVResponse.md)

#### Defined in

[src/model.ts:163](https://github.com/Dabolus/webos-tv/blob/7abb5c9/src/model.ts#L163)

___

### GetCurrentChannelResult

Ƭ **GetCurrentChannelResult**: [`GetCurrentChannelTVResponse`](../interfaces/model.GetCurrentChannelTVResponse.md)

#### Defined in

[src/model.ts:192](https://github.com/Dabolus/webos-tv/blob/7abb5c9/src/model.ts#L192)

___

### GetCurrentSWInformationResult

Ƭ **GetCurrentSWInformationResult**: [`GetCurrentSWInformationTVResponse`](../interfaces/model.GetCurrentSWInformationTVResponse.md)

#### Defined in

[src/model.ts:294](https://github.com/Dabolus/webos-tv/blob/7abb5c9/src/model.ts#L294)

___

### GetServiceListResult

Ƭ **GetServiceListResult**: [`TVService`](../interfaces/model.TVService.md)[]

#### Defined in

[src/model.ts:92](https://github.com/Dabolus/webos-tv/blob/7abb5c9/src/model.ts#L92)

___

### GetVolumeResult

Ƭ **GetVolumeResult**: [`GetVolumeTVResponse`](../interfaces/model.GetVolumeTVResponse.md)

#### Defined in

[src/model.ts:208](https://github.com/Dabolus/webos-tv/blob/7abb5c9/src/model.ts#L208)

___

### IncreaseVolumeResult

Ƭ **IncreaseVolumeResult**: [`SetVolumeResult`](model.md#setvolumeresult)

#### Defined in

[src/model.ts:212](https://github.com/Dabolus/webos-tv/blob/7abb5c9/src/model.ts#L212)

___

### Is3DEnabledResult

Ƭ **Is3DEnabledResult**: `boolean`

#### Defined in

[src/model.ts:314](https://github.com/Dabolus/webos-tv/blob/7abb5c9/src/model.ts#L314)

___

### IsMutedResult

Ƭ **IsMutedResult**: `boolean`

#### Defined in

[src/model.ts:228](https://github.com/Dabolus/webos-tv/blob/7abb5c9/src/model.ts#L228)

___

### LaunchAppResult

Ƭ **LaunchAppResult**: [`LaunchAppTVResponse`](../interfaces/model.LaunchAppTVResponse.md)

#### Defined in

[src/model.ts:301](https://github.com/Dabolus/webos-tv/blob/7abb5c9/src/model.ts#L301)

___

### LaunchPointsResult

Ƭ **LaunchPointsResult**: [`LaunchPointsTVResponse`](../interfaces/model.LaunchPointsTVResponse.md)

#### Defined in

[src/model.ts:462](https://github.com/Dabolus/webos-tv/blob/7abb5c9/src/model.ts#L462)

___

### MuteResult

Ƭ **MuteResult**: `boolean`

#### Defined in

[src/model.ts:234](https://github.com/Dabolus/webos-tv/blob/7abb5c9/src/model.ts#L234)

___

### OpenURLResult

Ƭ **OpenURLResult**: [`OpenURLTVResponse`](../interfaces/model.OpenURLTVResponse.md)

#### Defined in

[src/model.ts:312](https://github.com/Dabolus/webos-tv/blob/7abb5c9/src/model.ts#L312)

___

### PauseResult

Ƭ **PauseResult**: `void`

#### Defined in

[src/model.ts:250](https://github.com/Dabolus/webos-tv/blob/7abb5c9/src/model.ts#L250)

___

### PauseTVResponse

Ƭ **PauseTVResponse**: [`EmptyResponse`](model.md#emptyresponse)

#### Defined in

[src/model.ts:248](https://github.com/Dabolus/webos-tv/blob/7abb5c9/src/model.ts#L248)

___

### PlayResult

Ƭ **PlayResult**: `void`

#### Defined in

[src/model.ts:242](https://github.com/Dabolus/webos-tv/blob/7abb5c9/src/model.ts#L242)

___

### PlayTVResponse

Ƭ **PlayTVResponse**: [`EmptyResponse`](model.md#emptyresponse)

#### Defined in

[src/model.ts:240](https://github.com/Dabolus/webos-tv/blob/7abb5c9/src/model.ts#L240)

___

### RewindResult

Ƭ **RewindResult**: `void`

#### Defined in

[src/model.ts:254](https://github.com/Dabolus/webos-tv/blob/7abb5c9/src/model.ts#L254)

___

### RewindTVResponse

Ƭ **RewindTVResponse**: [`EmptyResponse`](model.md#emptyresponse)

#### Defined in

[src/model.ts:252](https://github.com/Dabolus/webos-tv/blob/7abb5c9/src/model.ts#L252)

___

### SendEnterResult

Ƭ **SendEnterResult**: `void`

#### Defined in

[src/model.ts:360](https://github.com/Dabolus/webos-tv/blob/7abb5c9/src/model.ts#L360)

___

### SendEnterTVResponse

Ƭ **SendEnterTVResponse**: [`EmptyResponse`](model.md#emptyresponse)

#### Defined in

[src/model.ts:358](https://github.com/Dabolus/webos-tv/blob/7abb5c9/src/model.ts#L358)

___

### SetMuteResult

Ƭ **SetMuteResult**: `boolean`

#### Defined in

[src/model.ts:232](https://github.com/Dabolus/webos-tv/blob/7abb5c9/src/model.ts#L232)

___

### SetMuteTVResponse

Ƭ **SetMuteTVResponse**: [`EmptyResponse`](model.md#emptyresponse)

#### Defined in

[src/model.ts:230](https://github.com/Dabolus/webos-tv/blob/7abb5c9/src/model.ts#L230)

___

### SetVolumeResult

Ƭ **SetVolumeResult**: [`GetVolumeResult`](model.md#getvolumeresult)

#### Defined in

[src/model.ts:210](https://github.com/Dabolus/webos-tv/blob/7abb5c9/src/model.ts#L210)

___

### ShowNotificationResult

Ƭ **ShowNotificationResult**: `string`

#### Defined in

[src/model.ts:348](https://github.com/Dabolus/webos-tv/blob/7abb5c9/src/model.ts#L348)

___

### StopResult

Ƭ **StopResult**: `void`

#### Defined in

[src/model.ts:246](https://github.com/Dabolus/webos-tv/blob/7abb5c9/src/model.ts#L246)

___

### StopTVResponse

Ƭ **StopTVResponse**: [`EmptyResponse`](model.md#emptyresponse)

#### Defined in

[src/model.ts:244](https://github.com/Dabolus/webos-tv/blob/7abb5c9/src/model.ts#L244)

___

### Toggle3DResult

Ƭ **Toggle3DResult**: `boolean`

#### Defined in

[src/model.ts:324](https://github.com/Dabolus/webos-tv/blob/7abb5c9/src/model.ts#L324)

___

### ToggleMuteResult

Ƭ **ToggleMuteResult**: `boolean`

#### Defined in

[src/model.ts:238](https://github.com/Dabolus/webos-tv/blob/7abb5c9/src/model.ts#L238)

___

### TurnOffResult

Ƭ **TurnOffResult**: `void`

#### Defined in

[src/model.ts:81](https://github.com/Dabolus/webos-tv/blob/7abb5c9/src/model.ts#L81)

___

### TurnOffTVResponse

Ƭ **TurnOffTVResponse**: [`EmptyResponse`](model.md#emptyresponse)

#### Defined in

[src/model.ts:79](https://github.com/Dabolus/webos-tv/blob/7abb5c9/src/model.ts#L79)

___

### UnmuteResult

Ƭ **UnmuteResult**: `boolean`

#### Defined in

[src/model.ts:236](https://github.com/Dabolus/webos-tv/blob/7abb5c9/src/model.ts#L236)

___

### VolumeDownResult

Ƭ **VolumeDownResult**: [`GetVolumeTVResponse`](../interfaces/model.GetVolumeTVResponse.md)

#### Defined in

[src/model.ts:218](https://github.com/Dabolus/webos-tv/blob/7abb5c9/src/model.ts#L218)

___

### VolumeUpResult

Ƭ **VolumeUpResult**: [`GetVolumeTVResponse`](../interfaces/model.GetVolumeTVResponse.md)

#### Defined in

[src/model.ts:216](https://github.com/Dabolus/webos-tv/blob/7abb5c9/src/model.ts#L216)

___

### WriteTextResult

Ƭ **WriteTextResult**: `void`

#### Defined in

[src/model.ts:352](https://github.com/Dabolus/webos-tv/blob/7abb5c9/src/model.ts#L352)

___

### WriteTextTVResponse

Ƭ **WriteTextTVResponse**: [`EmptyResponse`](model.md#emptyresponse)

#### Defined in

[src/model.ts:350](https://github.com/Dabolus/webos-tv/blob/7abb5c9/src/model.ts#L350)
