import sys

if {{cookiecutter.use_tailwindcss}} and {{cookiecutter.use_bootstrap}}:
    print(
        "You should either use TailwindCSS or Bootstrap 5, "
        "but not both of them !"
    )
    sys.exit(1)
