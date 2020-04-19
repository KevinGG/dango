import os
from setuptools import setup, find_packages

setup(
    name = 'dango',
    version = '0.0.1',
    author = 'ningk',
    author_email = 'kawaigin@gmail.com',
    install_requires = [
        'Flask',
        'stripe',
    ],
)
