import os
from google.cloud import pubsub_v1
import json
import datetime
import requests

def publish_message(request):

    url = 'https://us-central1-chat-module-284116.cloudfunctions.net/gcs-test' 

    # Set CORS headers for the preflight request
    if request.method == 'OPTIONS':
        # Allows GET requests from any origin with the Content-Type
        # header and caches preflight response for an 3600s
        headers = {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST',
            'Access-Control-Allow-Headers': '*',
        }

        return ('', 204, headers)

    # Set CORS headers for the main request
    headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST',
        'Access-Control-Allow-Headers': '*',
    }

    # END CORS

    publisher = pubsub_v1.PublisherClient()
    project_id = "chat-module-284116"
    topic_id = "test"
    topic_path = publisher.topic_path(project_id, topic_id)
    print(json.dumps(request.get_json()))
    requestBody = request.get_json()
    msgBody = requestBody['data']
    user = requestBody['user']
    currentTimestamp = str(datetime.datetime.now())
    print("Message Body: " + msgBody)
    print("From User: " + user)

    jsonToStore = {
        "message": [
            {
                "messageBody": msgBody,
                "timestamp": currentTimestamp,
                "user": user
            }
        ]
    }

    x = requests.post(url, json = json.dumps(jsonToStore))

    print(x.text)

    future = publisher.publish(
        topic_path,
        data = msgBody.encode("utf-8"),
        user = user.encode("utf-8"),
        timestamp = currentTimestamp.encode("utf-8")
    )
    return (future.result(), 200, headers)