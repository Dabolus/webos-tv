export interface Config {
  forcePairing: boolean;
  pairingType: string;
  manifest: {
    manifestVersion: number;
    appVersion: string;
    signed: {
      created: string;
      appId: string;
      vendorId: string;
      localizedAppNames: Record<string, string>;
      localizedVendorNames: Record<string, string>;
      permissions: string[];
      serial: string;
    };
    permissions: string[];
    signatures: {
      signatureVersion: number;
      signature: string;
    }[];
  };
}

export enum Button {
  HOME = 'HOME',
  BACK = 'BACK',
  UP = 'UP',
  DOWN = 'DOWN',
  LEFT = 'LEFT',
  RIGHT = 'RIGHT',
  THREED_MODE = '3D_MODE',
}

export interface TVOptions {
  appName?: string;
  vendorName?: string;
}

export interface AuthenticationTVResponse {
  'client-key': string;
}

export type AuthenticateResult = string;

export interface BaseTVResponse {
  returnValue: boolean;
}

export type TurnOffTVResponse = BaseTVResponse;

export type TurnOffResult = boolean;

export interface TVService {
  name: string;
  version: number;
}

export interface GetServiceListTVResponse extends BaseTVResponse {
  services: TVService[];
}

export type GetServiceListResult = TVService[];

export interface GetChannelListTVResponse extends BaseTVResponse {
  valueList: string;
  dataSource: number;
  dataType: number;
  cableAnalogSkipped: boolean;
  scannedChannelCount: {
    terrestrialAnalogCount: number;
    terrestrialDigitalCount: number;
    cableAnalogCount: number;
    cableDigitalCount: number;
    satelliteDigitalCount: number;
  };
  deviceSourceIndex: number;
  channelListCount: number;
  channelLogoServerUrl: string;
  channelList: {
    channelId: string;
    programId: string;
    signalChannelId: string;
    chanCode: string;
    channelMode: string;
    channelModeId: number;
    channelType: string;
    channelTypeId: number;
    channelNumber: string;
    majorNumber: number;
    minorNumber: number;
    channelName: string;
    skipped: boolean;
    locked: boolean;
    descrambled: boolean;
    scrambled: boolean;
    serviceType: number;
    favoriteGroup: any[];
    imgUrl: string;
    display: number;
    satelliteName: string;
    fineTuned: boolean;
    Frequency: number;
    shortCut: number;
    Bandwidth: number;
    HDTV: boolean;
    Invisible: boolean;
    TV: boolean;
    DTV: boolean;
    ATV: boolean;
    Data: boolean;
    Radio: boolean;
    Numeric: boolean;
    PrimaryCh: boolean;
    specialService: boolean;
    CASystemIDList: any;
    CASystemIDListCount: number;
    groupIdList: any[][];
    channelGenreCode: string;
    favoriteIdxA: number;
    favoriteIdxB: number;
    favoriteIdxC: number;
    favoriteIdxD: number;
    imgUrl2: string;
    channelLogoSize: string;
    ipChanServerUrl: string;
    payChan: boolean;
    IPChannelCode: string;
    ipCallNumber: string;
    otuFlag: boolean;
  }[];
}

export type GetChannelListResult = GetChannelListTVResponse;

export interface GetCurrentChannelTVResponse extends BaseTVResponse {
  returnValue: boolean;
  channelId: string;
  signalChannelId: string;
  channelModeId: number;
  channelModeName: string;
  channelTypeId: number;
  channelTypeName: string;
  channelNumber: string;
  channelName: string;
  physicalNumber: number;
  isSkipped: boolean;
  isLocked: boolean;
  isDescrambled: boolean;
  isScrambled: boolean;
  isFineTuned: boolean;
  isInvisible: boolean;
  isHEVCChannel: boolean;
  favoriteGroup: any;
  hybridtvType: any;
  dualChannel: {
    dualChannelId: any;
    dualChannelTypeId: any;
    dualChannelTypeName: any;
    dualChannelNumber: any;
  };
}

export type GetCurrentChannelResult = GetCurrentChannelTVResponse;

export type ChannelUpTVResponse = BaseTVResponse;

export type ChannelUpResult = GetCurrentChannelResult;

export type ChannelDownTVResponse = BaseTVResponse;

export type ChannelDownResult = GetCurrentChannelResult;

export interface GetVolumeTVResponse extends BaseTVResponse {
  scenario: string;
  volume: number;
  muted: boolean;
}

export type GetVolumeResult = GetVolumeTVResponse;

export type SetVolumeResult = GetVolumeResult;

export type IncreaseVolumeResult = SetVolumeResult;

export type DecreaseVolumeResult = SetVolumeResult;

export type VolumeUpResult = GetVolumeTVResponse;

export type VolumeDownResult = GetVolumeTVResponse;

export interface GetAudioStatusTVResponse extends BaseTVResponse {
  scenario: string;
  volume: number;
  mute: boolean;
}

export type GetAudioStatusResult = GetAudioStatusTVResponse;

export type IsMutedResult = boolean;

export type SetMuteTVResponse = BaseTVResponse;

export type SetMuteResult = boolean;

export type MuteResult = boolean;

export type UnmuteResult = boolean;

export type ToggleMuteResult = boolean;

export interface ForegroundAppInfoTVResponse extends BaseTVResponse {
  appId: string;
  windowId: string;
  processId: string;
}

export type ForegroundAppInfoResult = ForegroundAppInfoTVResponse;

export interface OpenURLTVResponse extends BaseTVResponse {
  id: string;
  sessionId: string;
}

export type OpenURLResult = OpenURLTVResponse;

export type Enable3DTVResponse = BaseTVResponse;

export type Enable3DResult = boolean;

export type Disable3DTVResponse = BaseTVResponse;

export type Disable3DResult = boolean;

export enum TV3DStatusPattern {
  TWOD = '2d',
  TWOD_TO_THREED = '2dto3d',
  SIDE_SIDE_HALF = 'side_side_half',
  TOP_BOTTOM = 'top_bottom',
}

export interface TV3DStatus {
  status: boolean;
  pattern: TV3DStatusPattern;
}

export interface Check3DStatusTVResponse extends BaseTVResponse {
  status3D: TV3DStatus;
}

export type Check3DStatusResult = TV3DStatus;

export interface ShowNotificationTVResponse extends BaseTVResponse {
  toastId: string;
}

export type ShowNotificationResult = string;

export interface InputSocketTVResponse extends BaseTVResponse {
  socketPath: string;
}
