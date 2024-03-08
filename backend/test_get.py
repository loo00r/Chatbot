from flask import Flask, request, jsonify
import json
import requests
from flask_cors import CORS, cross_origin


headers = {
        'Token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJEYXRhUG9pbnRTZWNyZXQiOiI0NWUxY2UyNy05Y2UzLTQ0ZjQtYTAzNC0wM2MzZGE1M2VlZTMiLCJuYmYiOjE3MDkzMjQ0MzgsImV4cCI6MTcxMjAwMjgzOCwiaWF0IjoxNzA5MzI0NDM4LCJpc3MiOiJTZXJ2ZXIiLCJhdWQiOiJDbGllbnQifQ.LLpPDdp_rtjawLq9FOZBE2Cim0bDZacLpUa-cFAuQxI',
        'Search': 'khaby.lame'
    }
response = requests.get('https://flaidata.tiktok-alltrends.com:442/api/datapoint/authors', headers=headers)
data = response.json()['data']['stats'][0]


print(data['subscribers'])