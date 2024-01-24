# kaihei-api

## Specification

- Go 1.21

## Setup

```bash
$ cp .env.sample .env

# create docker container (build included)
$ make docker/run
```

## Make commands

```bash
# start container
$ make docker/start

# stop container
$ make docker/stop

# remove container
$ make docker/rm

# view logs
$ make docker/logs
```
