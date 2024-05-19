# kaihei-api

## Specification

- Go 1.21

## API
### `/api/network/*`
ネットワークを経由するAPIs

### `/api/network/ping`
ネットワークを経由でPing計測

### `/api/local/*`
ローカルネットワークで完結するAPIs

### `/api/local/query`
ローカルネットワーク経由でqueryをみる

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
