start_pubsub:
	docker-compose -f ./centrifugo/docker-compose.yaml up

stop_pubsub:
	docker-compose -f ./centrifugo/docker-compose.yaml down

publisher:
	(for i in `seq 1 10000`; do sleep 1; echo New Stock Price; done) | API_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmb28iOiJiYXIiLCJpYXQiOjE1ODk0NDI3ODh9.03oCkrDVT_HGMsEaIsu1q2JsSRGq5rayk-WbXhRcvtY CHANNEL_ID=chat node publisher

publisher_2:
	(for i in `seq 1 10000`; do sleep 1; echo Hello; done) | API_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmb28iOiJiYXIiLCJpYXQiOjE1ODk0NDI3ODh9.03oCkrDVT_HGMsEaIsu1q2JsSRGq5rayk-WbXhRcvtY CHANNEL_ID=chat node publisher

subscriber:
	TOKEN=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmb28iOiJiYXIiLCJpYXQiOjE1ODk0NTI3Mjd9.jEpIsjLwFfRU_dkjtH6m-4MsUUqXCnLKpqJu1cvILa0 CHANNEL_ID=chat node subscriber

ubersub:
	EMAIL=bakar@demo.com PASSWORD=abcd1234 node uber/subscriber
