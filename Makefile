# path to production docker compose file
DCOMPOSE:=docker-compose.yaml

# path to dev docker compose file
DCOMPOSEDEV:=docker-compose.dev.yaml

# improve build time
DOCKER_BUILD_KIT:=COMPOSE_DOCKER_CLI_BUILD=1 DOCKER_BUILDKIT=1

production: cleanup build docker-production

dev: docker-dev-down cleanup docker-dev-up start

build:
	npm run build

start:
	npm run start

docker-production: docker-production-down docker-production-build docker-production-up

docker-production-down:
	docker-compose -f ${DCOMPOSE} down --remove-orphans

docker-production-build:
	${DOCKER_BUILD_KIT} docker-compose -f ${DCOMPOSE} build

docker-production-up:
	docker-compose -f ${DCOMPOSE} up -d --remove-orphans

docker-dev-down:
	docker-compose -f ${DCOMPOSEDEV} down --remove-orphans

docker-dev-up:
	docker-compose -f ${DCOMPOSEDEV} up -d --remove-orphans

cleanup:
	rm -rf build
