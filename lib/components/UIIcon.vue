<template>
	<svg v-bind="{
		viewBox: getViewBox(),
		height: getSize(),
		width: getSize()
	}"
	class="icon-ui">
    <path
    	v-for="(path, index) in icon.paths"
    	:key="index"
    	:d="path"
      :stroke="getColor()"
      :fill="getColor()"
      v-bind="icon.pathAttrs || {}"
    />
	</svg>
</template>
<script>
export default {
  props: {
    viewBox: {
      type: String,
      default: null,
    },
    
    size: {
      type: [String, Number],
      default: null,
    },

    color: {
      default: null
    },

    name: String,
  },

  computed: {
    pluginOption() {
      return this._options || {};
    },

    icons() {
      return this.createSVGObject(this.pluginOption.icons);
    },

    icon() {
      try {
        if (this.name === '')
          throw new Error(`vue-uicon: props 'name' could not be empty`);

        const icon = this.icons[this.name];

        if (icon) {
          return {
            ...icon,
            paths: Array.isArray(icon.paths) ? icon.paths : [icon.paths],
          };
        }

        throw new Error(`[${this.name}] icon not found`);
      } catch (err) {
        console.error(err);

        return [];
      }
    }
  },

  methods: {
    getColor() {
      if (this.color) return this.color;
      if (this.pluginOption.defaultColor) return this.pluginOption.defaultColor;

      return '#333';
    },

    getSize() {
      if (this.size) return this.size;
      if (this.pluginOption.defaultSize) return this.pluginOption.defaultSize;

      return 20;
    },

    getViewBox() {
      if (this.viewBox) return this.viewBox;
      if (this.pluginOption.viewBox) return this.pluginOption.viewBox;
      if (this.icon.viewBox) return this.icon.viewBox;

      return '0 0 32 32';
    },

    createSVGObject(icons) {
      let iconsObject = Object.assign({}, icons);

      for (const icon in iconsObject) {
        iconsObject[icon] = this.generateIcon(iconsObject[icon]);
      }

      return iconsObject;
    },

    generateIcon(path) {
      return {
        paths: Array.isArray(path) ? path : [path],
        pathAttrs: {
          'stroke-linecap': this.pluginOption.strokeLinecap || 'round',
          'stroke-linejoin': this.pluginOption.strokeLinejoin || 'round',
          'stroke-width': this.pluginOption.strokeWidth || 0.5
        },
      }
    }
  }
}
</script>
