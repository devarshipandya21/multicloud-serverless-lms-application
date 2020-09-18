from google.cloud import storage
import json
import cloudstorage as gcs
from datetime import datetime

storage_client = storage.Client()

def send_to_bucket(request):
    print(request)
    request_json = json.dumps(request.json)
    print(request_json)
    bucket = storage_client.bucket('chat-module-messages')
    
    # current date and time
    now = datetime.now()
    timestamp = datetime.timestamp(now)
    fileName = str(timestamp) + 'chat-module-history.json'
    with open('/tmp/' + fileName, 'w') as json_file:
        json.dump(request_json, json_file)
    blob = bucket.blob(fileName)
    blob.upload_from_filename('/tmp/' + fileName)