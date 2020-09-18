from concurrent.futures import TimeoutError
from google.cloud import pubsub_v1
import json
import time

messagesObj = {"messages": []}

def callback(message):
    global messagesObj
    print("Received message print: {}".format(message))
    
    msgBody = message.data
    msgSender = message.attributes['user']
    currentTimestamp = message.attributes['timestamp']

    currentMessage = {}

    currentMessage['messageBody'] = str(msgBody.decode('utf-8'))
    currentMessage['timestamp'] = str(currentTimestamp)
    currentMessage['user'] = str(msgSender)

    messagesObj['messages'].append(currentMessage)
    message.ack()

def subscriber_pull(request):
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

    request_json = request.json

    global messagesObj

    project_id = "chat-module-284116"
    subscription_id = request_json['subscriber']

    timeout = 3.0

    subscriber = pubsub_v1.SubscriberClient()

    subscription_path = subscriber.subscription_path(project_id, subscription_id)
    
    streaming_pull_future = subscriber.subscribe(subscription_path, callback=callback)
    print("Listening for messages on {}..\n".format(subscription_path))

    with subscriber:
        try:
            streaming_pull_future.result(timeout=timeout)
        except TimeoutError:
            return(json.dumps(messagesObj), 200, headers)
            streaming_pull_future.cancel()