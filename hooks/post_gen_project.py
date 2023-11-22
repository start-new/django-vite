import shutil


def move_bootstrap_files():
    shutil.move("frontend-bootstrap", "../{{ cookiecutter.frontend_dirname }}")

def move_tailwind_files():
    shutil.move("frontend-tailwind", "../{{ cookiecutter.frontend_dirname }}")

def move_vanilla_files():
    shutil.move("frontend-vanilla", "../{{ cookiecutter.frontend_dirname }}")

def remove_controllers_folder():
    shutil.rmtree("../{{ cookiecutter.frontend_dirname }}/src/controllers")

def remove_project_dir():
    shutil.rmtree("../__{{ cookiecutter.frontend_dirname }}__")


def main():
    {% if cookiecutter.use_bootstrap %}
    move_bootstrap_files()
    {% elif cookiecutter.use_tailwindcss %}
    move_tailwind_files()
    {% else %}
    move_vanilla_files()
    {% endif %}

    {% if not cookiecutter.use_stimulus %}
    remove_controllers_folder()
    {% endif %}

    remove_project_dir()

main()