from datetime import datetime
from google.cloud import pubsub
import json

def create_subscription(request):
    
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

    subscriber = pubsub.SubscriberClient()

    PROJECT = 'chat-module-284116'

    now = datetime.now()
    timestamp = datetime.timestamp(now)

    SUBSCRIPTION = request_json['user'] + '-subscriber-' + str(timestamp)
    TOPIC = 'test'

    sub_path = subscriber.subscription_path(PROJECT, SUBSCRIPTION)
    topic_path = subscriber.topic_path(PROJECT, TOPIC)

    sub_id = subscriber.create_subscription(sub_path, topic_path)

    return (json.dumps({"subscriber": SUBSCRIPTION}), 200, headers)