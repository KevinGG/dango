# Create a venv for the backend:

```
python3 -m venv dev
source dev/bin/activate

cd dango-flask
pip install -e .
```

Keep the venv activated throughout the development.


# To start the development servers:

```
cd dango-react
./run.sh
```

This will invoke `yarn start-backend` and `yarn start` to start the Flask
backend server and React frontend server.

`yarn start-backend` runs the `run.sh` under `dango-flask`.

You can also issue both yarn commands in separate terminal windows if needed.
