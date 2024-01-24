docker/up:
	docker compose up -d

docker/start:
	docker compose start

docker/stop:
	docker compose stop

docker/dowm:
	docker compose down

docker/reset:
	docker compose down -v

docker/logs:
	docker compose logs -f
