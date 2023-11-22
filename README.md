# Cookiecutter template for a frontend folder using Vite

This Cookiecutter template has been designed to assist you in creating and configuring the front-end tooling for your Django project. The generated code uses Vite.js for compiling and updating your staticfiles when the front-end source code is changed.

## Installing Cookiecutter and Node.js

This project uses **cookiecutter** to handle the code generation task from the template hosted on github. You need to install cookiecutter to use this project. Therefore, if cookiecutter is not already installed on your computer, you can install it globally using the following command:

```
$ pip install cookiecutter
```

You will also need npm to install frontend dependencies. Hence, this project requires you to install Node.js globally on your computer. You can do this by [downloading the appropriate installer](https://nodejs.org/en/download/current) for your operating system. 

## Creating the frontend folder

Once having installed the dependencies described above, you can generate the frontend folder at the root of your django projet using the following command:

```
$ cookiecutter gh:start-new/django-vite
```

Then, answer the questions asked by the prompt. Once created, open your newly-generated frontend folder in a terminal and install the dependencies using the command:

```
$ npm install
```

## Running vite for development

For development purpose, you can start the frontend development server by running the command `$ npm start` from your frontend-related server.

## Use Django-vite in your Django project

On the django side, using the django-vite package is a valuable option. You can install it using pipenv (or pip if you prefer) like this:

```
$ pipenv install django-vite
```

Once installed, add `django_vite` in the INSTALLED_APPS list of your django settings. Then, configure it using the
DJANGO_VITE variable in your settings:

```
DJANGO_VITE = {
    "default": {
        "dev_mode": DEBUG,
        "dev_server_port": 5173,
    },
}
```

You can use django-vite to reference your assets in your django templates:

```
{% load django_vite %}

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Page title</title>

    {% vite_hmr_client %}
    {% vite_asset 'src/application/app.js' %}
</head>
<body>
    ...
</body>
</html>
```

For more information on django-vite, feel free to read the [offical README for the project](https://github.com/MrBin99/django-vite/blob/3.0.0/README.md).

