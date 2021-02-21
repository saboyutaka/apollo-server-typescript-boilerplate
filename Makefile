.DEFAULT_GOAL := help

build: ## build develoment
	if ! [ -f .env ];then cp .env.sample .env;fi
	docker-compose run --rm node yarn install

serve: ## Run Server
	docker-compose up node

install: ## Run npm Install
	docker-compose run --rm node yarn install

codegen: ## Ge]nerate GraphQL types via codegen
	docker-compose run --rm node yarn graphql-codegen --config codegen.yml

graphqlviz: ## Make graphql visualized map with graphviz
	docker-compose run --rm graphqlviz sh -c 'graphqlviz schema.graphql | dot -Tpng -Nfontname=Helvetica -o graph.png'

.PHONY: help
help:
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'
