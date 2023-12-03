DOCKER_FILE=./Dockerfile
APP_NAME=mcstatus

docker/run: docker/rm docker/build
	docker run -d -p 4321:80 --name $(APP_NAME) --restart=always $(APP_NAME):latest

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
