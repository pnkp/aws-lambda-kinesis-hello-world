deploy-lambdas:
	make build-lambdas
	cd consumer && \
 	sam deploy

build-lambdas:
	cd consumer/hello-world && \
 	npm run build && \
	cd ../ && \
	rm -rf .aws-sam && \
	sam build

produce-kinesis-event:
	cd producer && npm run build && npm run start
