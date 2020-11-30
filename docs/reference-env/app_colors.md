---
id: app_colors
title: app.colors
---

Provides nice and easy color palette. Courtesy [Google Material Design](https://material.io/design/color/the-color-system.html). We can use this in layout, script, and event tags.

**Usage in Layout tag:**

```xml
...
    <Label
      text="Red Coloured Text"
      textColor="@color/red"/>
...
```

**Usage in javascript:**

```xml
...
  <Layout>
    <Button
      id="test_button"
      text="My Test Button"/>
  </Layout>
...
```

```xml
...
  <event on="ready">
    const testButton = this.layout.findContent('test_button');
    testButton.backgroundColor = app.colors.blue;
  </event>
...
```

## Constants

|      Name       |  Type  | Description       |
| :-------------: | :----: | :---------------- |
|  **redLight**   | number | value: 0xFFCDD2   |
|     **red**     | number | value: 0xF44336   |
|   **redDark**   | number | value: 0xB71C1C   |
|  **pinkLight**  | number | value: 0xF8BBD0   |
|    **pink**     | number | value: 0xE91E63   |
|  **pinkDark**   | number | value: 0x880E4F   |
| **purpleLight** | number | value: 0xE1BEE7   |
|   **purple**    | number | value: 0x9C27B0   |
| **purpleDark**  | number | value: 0x4A148C   |
| **indigoLight** | number | value: 0xC5CAE9   |
|   **indigo**    | number | value: 0x3F51B5   |
| **indigoDark**  | number | value: 0x1A237E   |
|  **blueLight**  | number | value: 0xBBDEFB   |
|    **blue**     | number | value: 0x2196F3   |
|  **blueDark**   | number | value: 0x0D47A1   |
|  **cyanLight**  | number | value: 0xB2EBF2   |
|    **cyan**     | number | value: 0x00BCD4   |
|  **cyanDark**   | number | value: 0x006064   |
|  **tealLight**  | number | value: 0xB2DFDB   |
|    **teal**     | number | value: 0x009688   |
|  **tealDark**   | number | value: 0x004D40   |
| **greenLight**  | number | value: 0xC8E6C9   |
|    **green**    | number | value: 0x4CAF50   |
|  **greenDark**  | number | value: 0x1B5E20   |
|  **limeLight**  | number | value: 0xF0F4C3   |
|    **lime**     | number | value: 0xCDDC39   |
|  **limeDark**   | number | value: 0x827717   |
| **yellowLight** | number | value: 0xFFF9C4   |
|   **yellow**    | number | value: 0xFFEB3B   |
| **yellowDark**  | number | value: 0xF57F17   |
| **amberLight**  | number | value: 0xFFECB3   |
|    **amber**    | number | value: 0xFFC107   |
|  **amberDark**  | number | value: 0xFF6F00   |
| **orangeLight** | number | value: 0xFFF3E0   |
|   **orange**    | number | value: 0xFF9800   |
| **orangeDark**  | number | value: 0xE65100   |
| **brownLight**  | number | value: 0xD7CCC8   |
|    **brown**    | number | value: 0x795548   |
|  **brownDark**  | number | value: 0x3E2723   |
|  **grayLight**  | number | value: 0xF5F5F5   |
|    **gray**     | number | value: 0x9E9E9E   |
|  **grayBlue**   | number | value: 0x607D8B   |
|  **grayDark**   | number | value: 0x212121   |
|    **white**    | number | value: 0xffffff   |
|    **black**    | number | value: 0x000000   |
|  **greyLight**  | number | value: 0xF5F5F5   |
|    **grey**     | number | value: 0x9E9E9E   |
|  **greyBlue**   | number | value: 0x607D8B   |
|  **greyDark**   | number | value: 0x212121   |
| **transparent** | number | value: 0xff000000 |

## Methods

| Name | Return Type | Description |
| :-: | :-: | :-- |
| [rgba](#rgba) | number | Convert RGBA format into 0xTTRRGGBB hex. |
| [hexAlpha](#hexalpha) | number | Combines 0.0 - 0.1 alpha value with 0xRRGGBB color hex. |

---

### rgba

```javascript
app.colors.rgba(red, green, blue);
```

Convert RGBA format into 0xTTRRGGBB hex. Whereas:

- **TT**: Hex between 0x00 - 0xff that represents Transparency (0x00 means opaque and 0xff means full transparent)
- **RR**: Hex between 0x00 - 0xff that represents Red
- **GG**: Hex between 0x00 - 0xff that represents Green
- **BB**: Hex between 0x00 - 0xff that represents Blue

**Parameters:**

1. red: (_number_ type) Integer between 0 - 255 that represents Red color
2. green: (_number_ type) Integer between 0 - 255 that represents Green color
3. blue: (_number_ type) Integer between 0 - 255 that represents Blue color

**Return:** number

---

### hexAlpha

```javascript
app.colors.hexAlpha(hex, alpha);
```

Combines 0.0 - 0.1 alpha value with 0xRRGGBB color hex. Whereas:

- **RR**: Hex between 0x00 - 0xff that represents Red
- **GG**: Hex between 0x00 - 0xff that represents Green
- **BB**: Hex between 0x00 - 0xff that represents Blue

**Parameters:**

1. hex: (_number_ type) 0xRRGGBB color hex
2. alpha: (_number_ type) Decimal number between 0.0 - 1.0 that represents opacity

**Return:** number
