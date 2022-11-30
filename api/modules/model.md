[webOS](../README.md) / [Modules](../modules.md) / model

# Module: model

## Table of contents

### Enumerations

- [Button](../enums/model.Button.md)
- [TV3DStatusPattern](../enums/model.TV3DStatusPattern.md)

### Interfaces

- [AppListTVResponse](../interfaces/model.AppListTVResponse.md)
- [BaseTVResponse](../interfaces/model.BaseTVResponse.md)
- [Check3DStatusTVResponse](../interfaces/model.Check3DStatusTVResponse.md)
- [Config](../interfaces/model.Config.md)
- [ForegroundAppInfoTVResponse](../interfaces/model.ForegroundAppInfoTVResponse.md)
- [GetAudioStatusTVResponse](../interfaces/model.GetAudioStatusTVResponse.md)
- [GetChannelListTVResponse](../interfaces/model.GetChannelListTVResponse.md)
- [GetCurrentChannelTVResponse](../interfaces/model.GetCurrentChannelTVResponse.md)
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
- [GetServiceListResult](model.md#getservicelistresult)
- [GetVolumeResult](model.md#getvolumeresult)
- [IncreaseVolumeResult](model.md#increasevolumeresult)
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

[src/model.ts:354](https://github.com/Dabolus/webos-tv/blob/405e2bb/src/model.ts#L354)

___

### AuthenticateResult

Ƭ **AuthenticateResult**: `string`

#### Defined in

[src/model.ts:41](https://github.com/Dabolus/webos-tv/blob/405e2bb/src/model.ts#L41)

___

### ChannelDownResult

Ƭ **ChannelDownResult**: [`GetCurrentChannelResult`](model.md#getcurrentchannelresult)

#### Defined in

[src/model.ts:165](https://github.com/Dabolus/webos-tv/blob/405e2bb/src/model.ts#L165)

___

### ChannelDownTVResponse

Ƭ **ChannelDownTVResponse**: [`EmptyResponse`](model.md#emptyresponse)

#### Defined in

[src/model.ts:163](https://github.com/Dabolus/webos-tv/blob/405e2bb/src/model.ts#L163)

___

### ChannelUpResult

Ƭ **ChannelUpResult**: [`GetCurrentChannelResult`](model.md#getcurrentchannelresult)

#### Defined in

[src/model.ts:161](https://github.com/Dabolus/webos-tv/blob/405e2bb/src/model.ts#L161)

___

### ChannelUpTVResponse

Ƭ **ChannelUpTVResponse**: [`EmptyResponse`](model.md#emptyresponse)

#### Defined in

[src/model.ts:159](https://github.com/Dabolus/webos-tv/blob/405e2bb/src/model.ts#L159)

___

### Check3DStatusResult

Ƭ **Check3DStatusResult**: [`TV3DStatus`](../interfaces/model.TV3DStatus.md)

#### Defined in

[src/model.ts:281](https://github.com/Dabolus/webos-tv/blob/405e2bb/src/model.ts#L281)

___

### CloseAppResult

Ƭ **CloseAppResult**: `void`

#### Defined in

[src/model.ts:246](https://github.com/Dabolus/webos-tv/blob/405e2bb/src/model.ts#L246)

___

### CloseAppTVResponse

Ƭ **CloseAppTVResponse**: [`EmptyResponse`](model.md#emptyresponse)

#### Defined in

[src/model.ts:244](https://github.com/Dabolus/webos-tv/blob/405e2bb/src/model.ts#L244)

___

### CloseMediaViewerResult

Ƭ **CloseMediaViewerResult**: `void`

#### Defined in

[src/model.ts:227](https://github.com/Dabolus/webos-tv/blob/405e2bb/src/model.ts#L227)

___

### CloseMediaViewerTVResponse

Ƭ **CloseMediaViewerTVResponse**: [`EmptyResponse`](model.md#emptyresponse)

#### Defined in

[src/model.ts:225](https://github.com/Dabolus/webos-tv/blob/405e2bb/src/model.ts#L225)

___

### DecreaseVolumeResult

Ƭ **DecreaseVolumeResult**: [`SetVolumeResult`](model.md#setvolumeresult)

#### Defined in

[src/model.ts:179](https://github.com/Dabolus/webos-tv/blob/405e2bb/src/model.ts#L179)

___

### DeleteTextResult

Ƭ **DeleteTextResult**: `void`

#### Defined in

[src/model.ts:295](https://github.com/Dabolus/webos-tv/blob/405e2bb/src/model.ts#L295)

___

### DeleteTextTVResponse

Ƭ **DeleteTextTVResponse**: [`EmptyResponse`](model.md#emptyresponse)

#### Defined in

[src/model.ts:293](https://github.com/Dabolus/webos-tv/blob/405e2bb/src/model.ts#L293)

___

### Disable3DResult

Ƭ **Disable3DResult**: `boolean`

#### Defined in

[src/model.ts:261](https://github.com/Dabolus/webos-tv/blob/405e2bb/src/model.ts#L261)

___

### Disable3DTVResponse

Ƭ **Disable3DTVResponse**: [`EmptyResponse`](model.md#emptyresponse)

#### Defined in

[src/model.ts:259](https://github.com/Dabolus/webos-tv/blob/405e2bb/src/model.ts#L259)

___

### EmptyResponse

Ƭ **EmptyResponse**: `Record`<`string`, `never`\>

#### Defined in

[src/model.ts:35](https://github.com/Dabolus/webos-tv/blob/405e2bb/src/model.ts#L35)

___

### Enable3DResult

Ƭ **Enable3DResult**: `boolean`

#### Defined in

[src/model.ts:257](https://github.com/Dabolus/webos-tv/blob/405e2bb/src/model.ts#L257)

___

### Enable3DTVResponse

Ƭ **Enable3DTVResponse**: [`EmptyResponse`](model.md#emptyresponse)

#### Defined in

[src/model.ts:255](https://github.com/Dabolus/webos-tv/blob/405e2bb/src/model.ts#L255)

___

### FastForwardResult

Ƭ **FastForwardResult**: `void`

#### Defined in

[src/model.ts:223](https://github.com/Dabolus/webos-tv/blob/405e2bb/src/model.ts#L223)

___

### FastForwardTVResponse

Ƭ **FastForwardTVResponse**: [`EmptyResponse`](model.md#emptyresponse)

#### Defined in

[src/model.ts:221](https://github.com/Dabolus/webos-tv/blob/405e2bb/src/model.ts#L221)

___

### ForegroundAppInfoResult

Ƭ **ForegroundAppInfoResult**: [`ForegroundAppInfoTVResponse`](../interfaces/model.ForegroundAppInfoTVResponse.md)

#### Defined in

[src/model.ts:235](https://github.com/Dabolus/webos-tv/blob/405e2bb/src/model.ts#L235)

___

### GetAudioStatusResult

Ƭ **GetAudioStatusResult**: [`GetAudioStatusTVResponse`](../interfaces/model.GetAudioStatusTVResponse.md)

#### Defined in

[src/model.ts:191](https://github.com/Dabolus/webos-tv/blob/405e2bb/src/model.ts#L191)

___

### GetChannelListResult

Ƭ **GetChannelListResult**: [`GetChannelListTVResponse`](../interfaces/model.GetChannelListTVResponse.md)

#### Defined in

[src/model.ts:127](https://github.com/Dabolus/webos-tv/blob/405e2bb/src/model.ts#L127)

___

### GetCurrentChannelResult

Ƭ **GetCurrentChannelResult**: [`GetCurrentChannelTVResponse`](../interfaces/model.GetCurrentChannelTVResponse.md)

#### Defined in

[src/model.ts:157](https://github.com/Dabolus/webos-tv/blob/405e2bb/src/model.ts#L157)

___

### GetServiceListResult

Ƭ **GetServiceListResult**: [`TVService`](../interfaces/model.TVService.md)[]

#### Defined in

[src/model.ts:56](https://github.com/Dabolus/webos-tv/blob/405e2bb/src/model.ts#L56)

___

### GetVolumeResult

Ƭ **GetVolumeResult**: [`GetVolumeTVResponse`](../interfaces/model.GetVolumeTVResponse.md)

#### Defined in

[src/model.ts:173](https://github.com/Dabolus/webos-tv/blob/405e2bb/src/model.ts#L173)

___

### IncreaseVolumeResult

Ƭ **IncreaseVolumeResult**: [`SetVolumeResult`](model.md#setvolumeresult)

#### Defined in

[src/model.ts:177](https://github.com/Dabolus/webos-tv/blob/405e2bb/src/model.ts#L177)

___

### IsMutedResult

Ƭ **IsMutedResult**: `boolean`

#### Defined in

[src/model.ts:193](https://github.com/Dabolus/webos-tv/blob/405e2bb/src/model.ts#L193)

___

### LaunchAppResult

Ƭ **LaunchAppResult**: [`LaunchAppTVResponse`](../interfaces/model.LaunchAppTVResponse.md)

#### Defined in

[src/model.ts:242](https://github.com/Dabolus/webos-tv/blob/405e2bb/src/model.ts#L242)

___

### LaunchPointsResult

Ƭ **LaunchPointsResult**: [`LaunchPointsTVResponse`](../interfaces/model.LaunchPointsTVResponse.md)

#### Defined in

[src/model.ts:386](https://github.com/Dabolus/webos-tv/blob/405e2bb/src/model.ts#L386)

___

### MuteResult

Ƭ **MuteResult**: `boolean`

#### Defined in

[src/model.ts:199](https://github.com/Dabolus/webos-tv/blob/405e2bb/src/model.ts#L199)

___

### OpenURLResult

Ƭ **OpenURLResult**: [`OpenURLTVResponse`](../interfaces/model.OpenURLTVResponse.md)

#### Defined in

[src/model.ts:253](https://github.com/Dabolus/webos-tv/blob/405e2bb/src/model.ts#L253)

___

### PauseResult

Ƭ **PauseResult**: `void`

#### Defined in

[src/model.ts:215](https://github.com/Dabolus/webos-tv/blob/405e2bb/src/model.ts#L215)

___

### PauseTVResponse

Ƭ **PauseTVResponse**: [`EmptyResponse`](model.md#emptyresponse)

#### Defined in

[src/model.ts:213](https://github.com/Dabolus/webos-tv/blob/405e2bb/src/model.ts#L213)

___

### PlayResult

Ƭ **PlayResult**: `void`

#### Defined in

[src/model.ts:207](https://github.com/Dabolus/webos-tv/blob/405e2bb/src/model.ts#L207)

___

### PlayTVResponse

Ƭ **PlayTVResponse**: [`EmptyResponse`](model.md#emptyresponse)

#### Defined in

[src/model.ts:205](https://github.com/Dabolus/webos-tv/blob/405e2bb/src/model.ts#L205)

___

### RewindResult

Ƭ **RewindResult**: `void`

#### Defined in

[src/model.ts:219](https://github.com/Dabolus/webos-tv/blob/405e2bb/src/model.ts#L219)

___

### RewindTVResponse

Ƭ **RewindTVResponse**: [`EmptyResponse`](model.md#emptyresponse)

#### Defined in

[src/model.ts:217](https://github.com/Dabolus/webos-tv/blob/405e2bb/src/model.ts#L217)

___

### SendEnterResult

Ƭ **SendEnterResult**: `void`

#### Defined in

[src/model.ts:299](https://github.com/Dabolus/webos-tv/blob/405e2bb/src/model.ts#L299)

___

### SendEnterTVResponse

Ƭ **SendEnterTVResponse**: [`EmptyResponse`](model.md#emptyresponse)

#### Defined in

[src/model.ts:297](https://github.com/Dabolus/webos-tv/blob/405e2bb/src/model.ts#L297)

___

### SetMuteResult

Ƭ **SetMuteResult**: `boolean`

#### Defined in

[src/model.ts:197](https://github.com/Dabolus/webos-tv/blob/405e2bb/src/model.ts#L197)

___

### SetMuteTVResponse

Ƭ **SetMuteTVResponse**: [`EmptyResponse`](model.md#emptyresponse)

#### Defined in

[src/model.ts:195](https://github.com/Dabolus/webos-tv/blob/405e2bb/src/model.ts#L195)

___

### SetVolumeResult

Ƭ **SetVolumeResult**: [`GetVolumeResult`](model.md#getvolumeresult)

#### Defined in

[src/model.ts:175](https://github.com/Dabolus/webos-tv/blob/405e2bb/src/model.ts#L175)

___

### ShowNotificationResult

Ƭ **ShowNotificationResult**: `string`

#### Defined in

[src/model.ts:287](https://github.com/Dabolus/webos-tv/blob/405e2bb/src/model.ts#L287)

___

### StopResult

Ƭ **StopResult**: `void`

#### Defined in

[src/model.ts:211](https://github.com/Dabolus/webos-tv/blob/405e2bb/src/model.ts#L211)

___

### StopTVResponse

Ƭ **StopTVResponse**: [`EmptyResponse`](model.md#emptyresponse)

#### Defined in

[src/model.ts:209](https://github.com/Dabolus/webos-tv/blob/405e2bb/src/model.ts#L209)

___

### Toggle3DResult

Ƭ **Toggle3DResult**: `boolean`

#### Defined in

[src/model.ts:263](https://github.com/Dabolus/webos-tv/blob/405e2bb/src/model.ts#L263)

___

### ToggleMuteResult

Ƭ **ToggleMuteResult**: `boolean`

#### Defined in

[src/model.ts:203](https://github.com/Dabolus/webos-tv/blob/405e2bb/src/model.ts#L203)

___

### TurnOffResult

Ƭ **TurnOffResult**: `void`

#### Defined in

[src/model.ts:45](https://github.com/Dabolus/webos-tv/blob/405e2bb/src/model.ts#L45)

___

### TurnOffTVResponse

Ƭ **TurnOffTVResponse**: [`EmptyResponse`](model.md#emptyresponse)

#### Defined in

[src/model.ts:43](https://github.com/Dabolus/webos-tv/blob/405e2bb/src/model.ts#L43)

___

### UnmuteResult

Ƭ **UnmuteResult**: `boolean`

#### Defined in

[src/model.ts:201](https://github.com/Dabolus/webos-tv/blob/405e2bb/src/model.ts#L201)

___

### VolumeDownResult

Ƭ **VolumeDownResult**: [`GetVolumeTVResponse`](../interfaces/model.GetVolumeTVResponse.md)

#### Defined in

[src/model.ts:183](https://github.com/Dabolus/webos-tv/blob/405e2bb/src/model.ts#L183)

___

### VolumeUpResult

Ƭ **VolumeUpResult**: [`GetVolumeTVResponse`](../interfaces/model.GetVolumeTVResponse.md)

#### Defined in

[src/model.ts:181](https://github.com/Dabolus/webos-tv/blob/405e2bb/src/model.ts#L181)

___

### WriteTextResult

Ƭ **WriteTextResult**: `void`

#### Defined in

[src/model.ts:291](https://github.com/Dabolus/webos-tv/blob/405e2bb/src/model.ts#L291)

___

### WriteTextTVResponse

Ƭ **WriteTextTVResponse**: [`EmptyResponse`](model.md#emptyresponse)

#### Defined in

[src/model.ts:289](https://github.com/Dabolus/webos-tv/blob/405e2bb/src/model.ts#L289)
