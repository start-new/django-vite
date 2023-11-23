import { defineConfig } from "vite";
import path from "path";
import { glob } from "glob";
{{%- if cookiecutter.use_stimulus %}}
import StimulusHMR from 'vite-plugin-stimulus-hmr';{{% endif %}}

/**
 * Return an objet for vite rollup$Options input detecting all files in
 * the src/application/ folder.
 */
const getInputObject = () => {
  const entries = {};
  glob
    .sync(path.join(__dirname, "src/application/*.js"))
    .forEach((fullpath) => {
      const name = path.basename(fullpath, ".js");
      entries[name] = fullpath;
    });
  return entries;
};

/**
 * Return an asset file path pattern determined from file type.
 */
const assetFileNames = (assetInfo) => {
  const extType = assetInfo.name.split(".").pop();
  let assetType = "js";
  if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
    assetType = "images";
  } else if (extType === "css") {
    assetType = "css";
  } else if (/\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/i.test(extType)) {
    assetType = "fonts";
  }
  return `${assetType}/[name]-[hash][extname]`;
};

// Configuration entry point
export default defineConfig({
  plugins: [
    {{%- if cookiecutter.use_stimulus %}}
    StimulusHMR()
  {{% endif %}}],
  publicDir: path.resolve(__dirname, "public/"),
  base: "/static/",
  server: {
    open: false,
  },
  build: {
    outDir: path.resolve(__dirname, "../{{{ cookiecutter.static_dirpath }}}"),
    manifest: true,
    emptyOutDir: true,
    target: "es2015",
    rollupOptions: {
      input: getInputObject(),
      output: {
        assetFileNames,
        entryFileNames: "js/[name]-[hash].js",
      }
    },
  },
});
