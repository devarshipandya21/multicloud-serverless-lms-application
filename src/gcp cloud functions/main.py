from google.cloud import pubsub_v1
import json

def delete_subscription(request):

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

    request_json = request.get_json()

    client = pubsub_v1.SubscriberClient()

    PROJECT = 'chat-module-284116'
    SUBSCRIPTION = request_json['subscription']

    subscription = client.subscription_path(PROJECT, SUBSCRIPTION)

    client.delete_subscription(subscription)

    return (json.dumps({"status": 200}), 200, headers)
    
    
