.PHONY: format lint

format:
	npx prettier --write .

lint:
	npx eslint .
