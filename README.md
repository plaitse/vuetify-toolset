# vuetify-toolset

## What is it Vuetify?

A UI component library based on Google Material Design specifically designed for VueJS to improve UX. It uses CSS classes and VueJS components.

## Installation

### Vue CLI 3

`vue create project_name`

- Manually select features: Babel, router and linter
- Use history mode
- Use ESLint with error prevention only
- Use Lint on save
- Place the features in package.json
- No preset for future projects

### Vuetify

`vue add vuetify`

- Preset: Default

Complete documentation: https://vuetifyjs.com/en/getting-started/quick-start

## Some UI examples

### Props

V-toolbar component:

- Add the attribute/prop `app` to fix the navbar at the top of the window.
- Add `dark` to change the navbar's background color. By default, `light` is set.
- Add `class="indigo"` to overwrite the navbar's bg color ; `dark` will keep the text color white.
- Add `height="150"` to increase the navbar's height.

See the "Toolbar" section in the documentation.

### Colors

- Add `class="red"` to set the bg color and `white--text` to set the color of the text.
- Add `pink lighten-4` to lighten the bg color and `red--text text--darken-4` to darken the color of the text.

See the "Colors" section in the documentation.

### Typography

- Add `class="display-4"` or `class="subheading"` or `class="caption"` to set the font-size.
- Add `class="font-weight-bold" to set the font-weight.

See the "Typography" section in the documentation.

### Button

- The tag `v-btn` creates a button.
- `class="pink white--text"` is equal to `dark color="pink"`.
- Add `depressed` to remove the box-shadow.
- Add `flat color="pink"` to set the bg color to transparent and the text color to pink.
- Add `small` or `large` to set the button's size.

See the "Button" section in the documentation.

### Icons

- The tag `v-icon` creates a MD icon and the word in between the tags sets the icon symbol.
- Add `small` or `large` to set the icon's size.
- To add text inside and keep a space with the icon:

```html
<v-btn>
  <v-icon left>email</v-icon>
  <span>email me</span>
</v-btn>
```

- Add `fab` to create a circle button with a centered icon in it:

```html
<v-btn fab>
  <v-icon>favorite</v-icon>
</v-btn>
```

All icons: https://material.io/tools/icons/?style=baseline

### Visibility and breakpoints

We can hide components using `class="hidden-(breakpoint)-(condition)"`.

- To hide a button between the two breakpoints of small sized screens: `<v-btn class="hidden-md-only">click me</v-btn>`
- To hide a button until the medium sized screens breakpoint: `<v-btn class="hidden-md-and-down">click me</v-btn>`
- To hide a button from the large sized screens breakpoint and up: `<v-btn class="hidden-lg-and-up">click me</v-btn>`

See the "Visibility" and "Breakpoints" sections in the documentation.

### Grid and flex

```html
<v-layout row wrap>
  <v-flex xs12 md6>
    <v-btn outline block class="primary">1</v-btn>
  </v-flex>
  <v-flex xs4 md2>
    <v-btn outline block class="primary">2</v-btn>
  </v-flex>
  <v-flex xs4 md2>
    <v-btn outline block class="primary">3</v-btn>
  </v-flex>
  <v-flex xs4 md2>
    <v-btn outline block class="primary">4</v-btn>
  </v-flex>
</v-layout>

<v-layout row wrap justify-space-around>
  <v-flex xs4 md3>
    <v-btn outline block class="success">3</v-btn>
  </v-flex>
  <v-flex xs4 md3>
    <v-btn outline block class="success">4</v-btn>
  </v-flex>
</v-layout>
```

See the "Grid system" section in the documentation.
