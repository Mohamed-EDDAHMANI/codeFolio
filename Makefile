# COMPOSE can be overridden: make up COMPOSE="docker-compose"
COMPOSE ?= docker compose
SERVICES ?= app mongo

up:
	$(COMPOSE) up -d

up-build:
	$(COMPOSE) up -d --build

down:
	$(COMPOSE) down

logs:
	$(COMPOSE) logs -f $(SERVICES)

logs-app:
	$(COMPOSE) logs -f app

logs-mongo:
	$(COMPOSE) logs -f mongo

ps:
	$(COMPOSE) ps

build:
	$(COMPOSE) build

build-no-cache:
	$(COMPOSE) build --no-cache

up-rebuild:
	$(COMPOSE) up -d --build --force-recreate --renew-anon-volumes

restart:
	$(COMPOSE) restart $(SERVICES)

start:
	$(COMPOSE) start $(SERVICES)

stop:
	$(COMPOSE) stop $(SERVICES)

sh-app:
	# Prefer bash if present; fallback to sh
	$(COMPOSE) exec app sh -lc 'if command -v bash >/dev/null 2>&1; then exec bash; else exec sh; fi'

sh-mongo:
	$(COMPOSE) exec mongo bash

clean:
	$(COMPOSE) down -v --remove-orphans

prune:
	docker system prune -f