# kaihei

## 🚀 Setup

Copy .env

```bash
$ cp .env.sample .env
$ npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🐳 Docker

via make

```bash
# start container
$ make docker/start

# stop container
$ make docker/stop

# remove container
$ make docker/rm

# remove container and volume
$ make docker/reset

# view logs
$ make docker/logs
```
