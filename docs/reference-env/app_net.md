---
id: app_net
title: app.net
---

Networking utility to communicate with server. This utility simplify usage of XMLHTTPRequest and provide better future support.

## Methods

| Name | Return Type | Description |
| :-: | :-: | :-- |
| [get](#get) | Promise&lt;string&gt; | Get something from server asynchronously, as plain string. |
| [getJSON](#getjson) | Promise&lt;Object&gt; | Get JSON data from server then decode as an Object. |
| [getImage](#getimage) | Promise&lt;ImageBitmap&gt; | Get image from anywhere at internet, asynchronously. |
| [post](#post) | Promise&lt;string&gt; | Send something to server asynchronously. |
| [setHeader](#setheader) | void | Set or add new to request header. |
| [getHeader](#getheader) | string | Get request header value corresponds to key name. |
| [removeHeader](#removeheader) | void | Removes request header item identified by key name. |
| [download](#download) | void | Download file from anywhere at internet or your own server. |
| [upload](#upload) | Promise&lt;boolean&gt; | Upload a single or multiple files to server, asynchronously. |
| [setCredential](#setcredential) | void | Set request-level credential. |
| [removeCredential](#removecredential) | void | Remove request-level credential. |

---

### get

```javascript
app.net.get(url);
```

Get something from server asynchronously, as plain string.

**Parameters:**

1. url: (_string_ type) Targeted HTTP-based URL. Use prefix "/" to reference your own web server.

**Return:** Promise&lt;string&gt;. Use `.then(response => { your code here })` to get the response.

**Throw:** NetworkException. Use `.catch(error => { your code here })` to get the error code and message.

---

### getJSON

```javascript
app.net.getJSON(url);
```

Get JSON data from server then decode as an Object.

**Parameters:**

1. url: (_string_ type) Targeted HTTP-based URL. Use prefix "/" to reference your own web server.

**Return:** Promise&lt;Object&gt;. Use `.then(response => { your code here })` to get the parsed response.

**Throw:** NetworkException. Use `.catch(error => { your code here })` to get the error code and message.

---

### getImage

```javascript
app.net.getImage(url);
```

Get image from anywhere at internet, asynchronously. Keep in mind that targeted image must allowed by server's [CORS Origin Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS).

**Parameters:**

1. url: (_string_ type) Targeted HTTP-based URL. Use prefix "/" to reference your own web server.

**Return:** Promise&lt;ImageBitmap&gt;. Use `.then(bitmap => { your code here })` to get the image bitmap.

**Throw:** NetworkException. Use `.catch(error => { your code here })` to get the error code and message.

---

### post

```javascript
app.net.post(url, thing);
```

Send something to server asynchronously. Make sure the intended URL allows [POST Method](https://www.diffen.com/difference/GET-vs-POST-HTTP-Requests).

**Parameters:**

1. url: (_string_ type) Targeted HTTP-based URL. Use prefix "/" to reference your own web server.
2. thing: (_string_ or _Object_ type) Something to be sent. If object, it will encoded as JSON.

**Return:** Promise&lt;string&gt;. Use `.then(response => { your code here })` to get the response.

**Throw:** NetworkException. Use `.catch(error => { your code here })` to get the error code and message.

---

### setHeader

```javascript
app.net.setHeader(key, value);
```

Set or add new to request header. Every added HTTP request header will stay persist until app exit. For more explanation of about HTTP request header, see [this documentation](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers).

**Parameters:**

1. key: (_string_ type) Header key name.
2. value: (_string_ type) Value for intended header key.

**Return:** void

---

### getHeader

```javascript
app.net.getHeader(key);
```

Get request header value corresponds to key name. For more explanation of about HTTP request header, see [this documentation](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers).

**Parameters:**

1. key: (_string_ type) Header key name.

**Return:** string or undefined. Value of intended header key. If the key isn't exist, returns undefined.

---

### removeHeader

```javascript
app.net.removeHeader(key);
```

Removes request header item identified by key name. For more explanation of about HTTP request header, see [this documentation](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers).

**Parameters:**

1. key: (_string_ type) Header key name.

**Return:** void

---

### download

```javascript
app.net.download(url, filename);
```

Download file from anywhere at internet or your own server. Progress and response status are handled by browser. Targeted file must allowed by server's [CORS Origin Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS).

**Parameters:**

1. url: (_string_ type) Targeted HTTP-based URL. Use prefix "/" to reference your own web server.
2. filename: (_string_ type) File name for client device.

**Return:** void

---

### upload

```javascript
app.net.upload(url, callback, filetype?, dataKey?);
```

Upload a single or multiple files to server, asynchronously. Make sure the intended URL allows [POST Method](https://www.diffen.com/difference/GET-vs-POST-HTTP-Requests).

**Parameters:**

1. url: (_string_ type) Targeted HTTP-based URL. Use prefix "/" to reference your own web server.
2. callback: (_object_ type) an object that contains one of or multiple of these functions:
   - `onProgress(percentage, loadedBytes, totalBytes, fileCount)`
   - `onCancel()`
   - `onSuccess()`
   - `onFailed(error)`
3. filetype: (_string_ type, optional) [MIME type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types) or file extension. This filters which file formats allowed to be uploaded.
4. dataKey: (_string_ type, optional) Key name to be shown on server side, default is "data".

**Return:** Promise&lt;boolean&gt;. Use `.then(isSuccess => { your code here })` to run something when done (if isSuccess == true) or fail (if isSuccess == false).

**Throw:** NetworkException. Use `.catch(error => { your code here })` to get the error code and message.

---

### setCredential

```javascript
app.net.setCredential(username, password);
```

Set request-level credential. Typically used on corporate network which requires credential to get proper response from server. To know if intended server requires request-level credential, try manually enter URL toward that server on browser and we expecting a dialog box asking for username and password.

**Parameters:**

1. username: (_string_ type) Typically an email or Unix-like account username.
2. password: (_string_ type) a Password with charset matches with server's requirement.

**Return:** void

---

### removeCredential

```javascript
app.net.removeCredential();
```

Remove request-level credential.

**Return:** void
