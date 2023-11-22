import 'vite/modulepreload-polyfill';

{%- if cookiecutter.use_bootstrap %}

// Importation of Bootstrap
import * as bootstrap from 'bootstrap'{% endif %}

{%- if cookiecutter.use_stimulus %}

// Importation and configuration of Hotwired Stimulus
import "../controllers";{% endif %}

{%- if cookiecutter.use_htmx %}

// Importation and configuration of HTMX
import htmx from "htmx.org";
window.htmx = htmx;{% endif %}

{%- if cookiecutter.use_alpinejs %}

// Importation and configuration of Alpine.js
import Alpine from 'alpinejs'
window.Alpine = Alpine
Alpine.start(){% endif %}

{%- if cookiecutter.use_bootstrap %}

// Entry point for SCSS styles
import "../styles/app.scss";{% else %}

// Entry point for CSS styles
import "../styles/app.css";{% endif %}