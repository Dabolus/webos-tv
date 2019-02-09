[webOS](../README.md) > [SpecializedWebSocket](../classes/specializedwebsocket.md) > [ClientOptions](../interfaces/specializedwebsocket.clientoptions.md)

# Interface: ClientOptions

## Hierarchy

**ClientOptions**

## Index

### Properties

* [agent](specializedwebsocket.clientoptions.md#agent)
* [ca](specializedwebsocket.clientoptions.md#ca)
* [cert](specializedwebsocket.clientoptions.md#cert)
* [ciphers](specializedwebsocket.clientoptions.md#ciphers)
* [family](specializedwebsocket.clientoptions.md#family)
* [handshakeTimeout](specializedwebsocket.clientoptions.md#handshaketimeout)
* [headers](specializedwebsocket.clientoptions.md#headers)
* [host](specializedwebsocket.clientoptions.md#host)
* [key](specializedwebsocket.clientoptions.md#key)
* [localAddress](specializedwebsocket.clientoptions.md#localaddress)
* [maxPayload](specializedwebsocket.clientoptions.md#maxpayload)
* [origin](specializedwebsocket.clientoptions.md#origin)
* [passphrase](specializedwebsocket.clientoptions.md#passphrase)
* [perMessageDeflate](specializedwebsocket.clientoptions.md#permessagedeflate)
* [pfx](specializedwebsocket.clientoptions.md#pfx)
* [protocol](specializedwebsocket.clientoptions.md#protocol)
* [protocolVersion](specializedwebsocket.clientoptions.md#protocolversion)
* [rejectUnauthorized](specializedwebsocket.clientoptions.md#rejectunauthorized)

### Methods

* [checkServerIdentity](specializedwebsocket.clientoptions.md#checkserveridentity)

---

## Properties

<a id="agent"></a>

### `<Optional>` agent

**● agent**: *`Agent`*

___
<a id="ca"></a>

### `<Optional>` ca

**● ca**: *[CertMeta](../classes/specializedwebsocket.md#certmeta)*

___
<a id="cert"></a>

### `<Optional>` cert

**● cert**: *[CertMeta](../classes/specializedwebsocket.md#certmeta)*

___
<a id="ciphers"></a>

### `<Optional>` ciphers

**● ciphers**: *`string`*

___
<a id="family"></a>

### `<Optional>` family

**● family**: *`number`*

___
<a id="handshaketimeout"></a>

### `<Optional>` handshakeTimeout

**● handshakeTimeout**: *`number`*

___
<a id="headers"></a>

### `<Optional>` headers

**● headers**: *`object`*

#### Type declaration

[key: `string`]: `string`

___
<a id="host"></a>

### `<Optional>` host

**● host**: *`string`*

___
<a id="key"></a>

### `<Optional>` key

**● key**: *[CertMeta](../classes/specializedwebsocket.md#certmeta)*

___
<a id="localaddress"></a>

### `<Optional>` localAddress

**● localAddress**: *`string`*

___
<a id="maxpayload"></a>

### `<Optional>` maxPayload

**● maxPayload**: *`number`*

___
<a id="origin"></a>

### `<Optional>` origin

**● origin**: *`string`*

___
<a id="passphrase"></a>

### `<Optional>` passphrase

**● passphrase**: *`string`*

___
<a id="permessagedeflate"></a>

### `<Optional>` perMessageDeflate

**● perMessageDeflate**: *`boolean` \| `PerMessageDeflateOptions`*

___
<a id="pfx"></a>

### `<Optional>` pfx

**● pfx**: *`string` \| `Buffer`*

___
<a id="protocol"></a>

### `<Optional>` protocol

**● protocol**: *`string`*

___
<a id="protocolversion"></a>

### `<Optional>` protocolVersion

**● protocolVersion**: *`number`*

___
<a id="rejectunauthorized"></a>

### `<Optional>` rejectUnauthorized

**● rejectUnauthorized**: *`boolean`*

___

## Methods

<a id="checkserveridentity"></a>

### `<Optional>` checkServerIdentity

▸ **checkServerIdentity**(servername: *`string`*, cert: *[CertMeta](../classes/specializedwebsocket.md#certmeta)*): `boolean`

**Parameters:**

| Name | Type |
| ------ | ------ |
| servername | `string` |
| cert | [CertMeta](../classes/specializedwebsocket.md#certmeta) |

**Returns:** `boolean`

___

