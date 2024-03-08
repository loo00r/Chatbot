from flask import Flask, request, jsonify
import json
import requests

app = Flask(__name__)
#


@app.route('/get-authors', methods=['GET','POST'])
def get_authors():
    # Get the JSON data from the request
    request_data = request.json

    # Get the conversation type and search query from the request data
    conversation_type = request_data.get('conversationType')
    search_query = request_data.get('searchQuery')

    # Check if the conversation type is 'accountAnalysis'
    if conversation_type == 'accountAnalysis':
        # Define the base URL for the API endpoint

        headers = {
            'Token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJEYXRhUG9pbnRTZWNyZXQiOiI0NWUxY2UyNy05Y2UzLTQ0ZjQtYTAzNC0wM2MzZGE1M2VlZTMiLCJuYmYiOjE3MDkzMjQ0MzgsImV4cCI6MTcxMjAwMjgzOCwiaWF0IjoxNzA5MzI0NDM4LCJpc3MiOiJTZXJ2ZXIiLCJhdWQiOiJDbGllbnQifQ.LLpPDdp_rtjawLq9FOZBE2Cim0bDZacLpUa-cFAuQxI'}
        response = requests.get('https://flaidata.tiktok-alltrends.com:442/api/datapoint/test', headers=headers)
        print(response.status_code)

        # Send a GET request to the API endpoint
        response = requests.get(base_url, headers=headers, params=params)

        # Check if the response is successful (status code 200)
        if response.status_code == 200:
            # Return the JSON response from the API
            return jsonify(response.json())
        else:
            # Return an error message if the request fails
            return jsonify({'error': f"Request failed with status code {response.status_code}: {response.text}"})
    else:
        # Return an error message if the conversation type is invalid
        return jsonify({'error': 'Invalid conversation type'})

if __name__ == '__main__':
    app.run(port=3000)


