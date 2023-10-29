// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Constructor<T> = new (...args: any[]) => T;

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
  'client-key'?: string;
}

export enum Button {
  HOME = 'HOME',
  BACK = 'BACK',
  UP = 'UP',
  DOWN = 'DOWN',
  LEFT = 'LEFT',
  RIGHT = 'RIGHT',
  THREED_MODE = '3D_MODE',
  ENTER = 'ENTER',
  DELETE = 'DELETE',
  DASH = 'DASH',
  INFO = 'INFO',
  ASTERISK = 'ASTERISK',
  CC = 'CC',
  EXIT = 'EXIT',
  MUTE = 'MUTE',
  RED = 'RED',
  GREEN = 'GREEN',
  BLUE = 'BLUE',
  VOLUMEUP = 'VOLUMEUP',
  VOLUMEDOWN = 'VOLUMEDOWN',
  CHANNELUP = 'CHANNELUP',
  CHANNELDOWN = 'CHANNELDOWN',
  PLAY = 'PLAY',
  PAUSE = 'PAUSE',
  ZERO = '0',
  ONE = '1',
  TWO = '2',
  THREE = '3',
  FOUR = '4',
  FIVE = '5',
  SIX = '6',
  SEVEN = '7',
  EIGHT = '8',
  NINE = '9',
}

export type EmptyResponse = Record<string, never>;

export interface BaseTVResponse {
  returnValue: boolean;
}

export interface ErrorTVResponse {
  returnValue?: false;
  errorCode?: number;
  errorText?: string;
}

export type AuthenticateResult = string;

export type TurnOffTVResponse = EmptyResponse;

export type TurnOffResult = void;

export interface TVService {
  name: string;
  version: number;
}

export interface GetServiceListTVResponse {
  services: TVService[];
}

export type GetServiceListResult = TVService[];

export interface GetChannelListTVResponse {
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
    CASystemIDList: Record<string, unknown>;
    CASystemIDListCount: number;
    groupIdList: number[];
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

export interface GetCurrentChannelTVResponse {
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

export type ChannelUpTVResponse = EmptyResponse;

export type ChannelUpResult = GetCurrentChannelResult;

export type ChannelDownTVResponse = EmptyResponse;

export type ChannelDownResult = GetCurrentChannelResult;

export interface GetVolumeTVResponse {
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

export interface GetAudioStatusTVResponse {
  scenario: string;
  volume: number;
  mute: boolean;
}

export type GetAudioStatusResult = GetAudioStatusTVResponse;

export type IsMutedResult = boolean;

export type SetMuteTVResponse = EmptyResponse;

export type SetMuteResult = boolean;

export type MuteResult = boolean;

export type UnmuteResult = boolean;

export type ToggleMuteResult = boolean;

export type PlayTVResponse = EmptyResponse;

export type PlayResult = void;

export type StopTVResponse = EmptyResponse;

export type StopResult = void;

export type PauseTVResponse = EmptyResponse;

export type PauseResult = void;

export type RewindTVResponse = EmptyResponse;

export type RewindResult = void;

export type FastForwardTVResponse = EmptyResponse;

export type FastForwardResult = void;

export type CloseMediaViewerTVResponse = EmptyResponse;

export type CloseMediaViewerResult = void;

export interface ForegroundAppInfoTVResponse {
  appId: string;
  windowId: string;
  processId: string;
}

export type ForegroundAppInfoResult = ForegroundAppInfoTVResponse;

export interface AppStateTVResponse {
  running: boolean;
  visible: boolean;
}

export type AppStateResult = AppStateTVResponse;

export interface GetCurrentSWInformationTVResponse {
  product_name: string;
  model_name: string;
  sw_type: string;
  major_ver: string;
  minor_ver: string;
  country: string;
  device_id: string;
  auth_flag: string;
  ignore_disable: string;
  eco_info: string;
  config_key: string;
  language_code: string;
}

export type GetCurrentSWInformationResult = GetCurrentSWInformationTVResponse;

export interface LaunchAppTVResponse {
  id: string;
  sessionId: string;
}

export type LaunchAppResult = LaunchAppTVResponse;

export type CloseAppTVResponse = EmptyResponse;

export type CloseAppResult = void;

export interface OpenURLTVResponse {
  id: string;
  sessionId: string;
}

export type OpenURLResult = OpenURLTVResponse;

export type Is3DEnabledResult = boolean;

export type Enable3DTVResponse = EmptyResponse;

export type Enable3DResult = boolean;

export type Disable3DTVResponse = EmptyResponse;

export type Disable3DResult = boolean;

export type Toggle3DResult = boolean;

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

export interface Check3DStatusTVResponse {
  status3D: TV3DStatus;
}

export type Check3DStatusResult = TV3DStatus;

export interface ShowNotificationTVResponse {
  toastId: string;
}

export type ShowNotificationResult = string;

export type WriteTextTVResponse = EmptyResponse;

export type WriteTextResult = void;

export type DeleteTextTVResponse = EmptyResponse;

export type DeleteTextResult = void;

export type SendEnterTVResponse = EmptyResponse;

export type SendEnterResult = void;

export interface InputSocketTVResponse {
  socketPath: string;
}

export interface TVAppInfo {
  defaultWindowType: string;
  installedTime: number;
  uiRevision?: number;
  containerCSS?: string;
  containerJS?: string;
  bgImage: string;
  version: string;
  systemApp: boolean;
  vendor: string;
  miniicon: string;
  hasPromotion: boolean;
  requestedWindowOrientation: string;
  class?: { hidden: boolean };
  extraLargeIcon: string;
  largeIcon: string;
  lockable: boolean;
  transparent: boolean;
  icon: string;
  checkUpdateOnLaunch: boolean;
  category: string;
  launchinnewgroup: boolean;
  handlesRelaunch: boolean;
  id: string;
  enyoVersion?: string;
  noSplashOnLaunch: boolean;
  inAppSetting: boolean;
  privilegedJail: boolean;
  trustLevel: string;
  mediumLargeIcon: string;
  splashBackground: string;
  binId: number;
  title: string;
  resolution: string;
  hardwareFeaturesNeeded: unknown[];
  visible: boolean;
  deeplinkingParams: string;
  noWindow: boolean;
  requiredEULA: string;
  inspectable: boolean;
  folderPath: string;
  age: number;
  main: string;
  type: string;
  iconColor: string;
  disableBackHistoryAPI: boolean;
  removable: boolean;
  appsize: number;
  windowGroup?: {
    clientInfo?: { layer: string }[];
    ownerInfo?: {
      allowAnonymous: boolean;
      layers: { z: number; name: string }[];
    };
    owner: boolean;
    name: string;
  };
  onDeviceSource?: Record<string, string>;
}

export interface AppListTVResponse {
  apps: TVAppInfo[];
}

export type AppListResult = TVAppInfo[];

export interface TVLaunchPoint {
  systemApp: boolean;
  removable: boolean;
  relaunch: boolean;
  largeIcon: string;
  id: string;
  title: string;
  bgColor: string;
  iconColor: string;
  appDescription: string;
  lptype: string;
  params: Record<string, unknown>;
  bgImage: string;
  icon: string;
  launchPointId: string;
  favicon: string;
  imageForRecents: string;
}

export interface LaunchPointsTVResponse {
  subscribed: boolean;
  launchPoints: TVLaunchPoint[];
  caseDetail: {
    serviceCountryCode: string;
    localeCode: string;
    change: unknown[];
    broadcastCountryCode: string;
  };
}

export type LaunchPointsResult = LaunchPointsTVResponse;
