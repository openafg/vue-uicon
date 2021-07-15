## @openafg/vue-uicon

Use your SVG icons easily with vue-uicon


## Installation

Terminal:
```bash
// With npm

npm install --save @openafg/vue-uicon
```

## Usage
Add the following code in to your app.js or main.js
```js
import Uicon from '@openafg/vue-uicon'
....

Vue.use(Uicon, { 
  /* options */
  icons: {
    iconName: 'SVG path'
  }
})
```
```html
<template>
   <ui-icon name="iconName"></ui-icon>
</template>

```
Available props
```html
 <template>
   <ui-icon name="iconName" color="#00f" size="40"></ui-icon>
</template>
```
## Options
Currently supported options

```js
Vue.use(Uicon, { 
  defaultColor: '#aaa',
  defaultSize: 20, // default is 20
  viewBox: '0 0 60 60', // default is 0 0 32 32
  strokeLinecap: 'round', // default is round
  strokeLinejoin: 'round', // default is round,
  strokeWidth: 1 // default is 0.5
  icons: {
    ....
  }
})
```

## Links

* [Website](https://afgprogrammer.com)
* [Twitter](https://twitter.com/afgprogrammer)
* [Instagram](https://instagram.com/afgprogrammer)
