include .env

DOCKER_FILE=./Dockerfile
ENV_FILE=.env
APP_NAME=kaihei-api

docker/run: docker/rm docker/build
	docker run -d -p 1321:1321 --name $(APP_NAME) --env-file=$(ENV_FILE) --restart=always $(APP_NAME):latest

docker/start:
	docker start $(APP_NAME)

docker/stop:
	docker stop $(APP_NAME)

docker/rm:
	docker rm -f $(APP_NAME)

docker/reset:
	docker rm -f $(APP_NAME)

docker/build:
	docker build -t $(APP_NAME) -f $(DOCKER_FILE) .

docker/logs:
	docker logs -f $(APP_NAME)
