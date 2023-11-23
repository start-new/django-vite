{{%- if cookiecutter.use_tailwindcss -%}}
module.exports = {
  plugins: {
    "postcss-import": {},
    "tailwindcss/nesting": {},
    tailwindcss: {},
    "postcss-preset-env": {
      features: { "nesting-rules": false },
    },
  },
};
{{%- else -%}}
module.exports = {
  plugins: {
    autoprefixer: {}
  },
};{{% endif %}}
