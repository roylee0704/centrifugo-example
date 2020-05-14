start_pubsub:
	docker-compose -f ./centrifugo/docker-compose.yaml up

stop_pubsub:
	docker-compose -f ./centrifugo/docker-compose.yaml down
