#!/usr/bin/env zsh

export FLASK_APP=index.py
export FLASK_ENV=development

# stripe test keys
export PUBLISHABLE_KEY=pk_test_TYooMQauvdEDq54NiTphI7jx
export SECRET_KEY=sk_test_4eC39HqLyjWDarjtT1zdp7dc

flask run

