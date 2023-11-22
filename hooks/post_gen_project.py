from pathlib import Path
import shutil


def remove_bootstrap_files():
    shutil.rmtree("src/styles/base")
    Path("src/styles/app.scss").resolve().unlink()

def remove_tailwind_files():
    Path("tailwind.config.js").resolve().unlink()

def remove_controllers_folder():
    shutil.rmtree("../{{ cookiecutter.frontend_dirname }}/src/controllers")


def main():
    {%- if not cookiecutter.use_bootstrap %}
    Path("src/styles/app.css").resolve().unlink(){% endif %}

    {%- if not cookiecutter.use_bootstrap %}
    remove_bootstrap_files(){% endif %}

    {%- if not cookiecutter.use_tailwindcss %}
    remove_tailwind_files(){% endif %}

    {%- if not cookiecutter.use_stimulus %}
    remove_controllers_folder(){% endif %}

main()