from flask import Flask
from flask_cors import CORS
import time
import json
app = Flask(__name__)
CORS(app)

DEBUG=True
@app.route('/api/inventory')
def hello():
	
    # time.sleep(10)
    return json.dumps([{"fruit":"apple"}])
@app.route('/api/lunch')
def hello2():
    time.sleep(3)
    return json.dumps([
  {
    "itemname": "idli",
    "availabletime": "7:00-11:00,17:00-22:00",
    "price": 20
  },
  {
    "itemname": "vada",
    "availabletime": "7:00-11:00,17:00-22:01",
    "price": 15
  },
  {
    "itemname": "rava idli",
    "availabletime": "7:00-11:00,17:00-22:02",
    "price": 35
  },
  {
    "itemname": "set dosa",
    "availabletime": "7:00-11:00,17:00-22:03",
    "price": 30
  },
  {
    "itemname": "ghee dosa",
    "availabletime": "7:00-11:00,17:00-22:04",
    "price": 40
  },
  {
    "itemname": "pongal",
    "availabletime": "7:00-11:00,17:00-22:05",
    "price": 50
  },
  {
    "itemname": "medu vada",
    "availabletime": "7:00-11:00,17:00-22:06",
    "price": 15
  },
  {
    "itemname": "upma",
    "availabletime": "7:00-11:00,17:00-22:07",
    "price": 30
  },
  {
    "itemname": "idiyappam",
    "availabletime": "7:00-11:00,17:00-22:08",
    "price": 10
  },
  {
    "itemname": "uttapam",
    "availabletime": "7:00-11:00,17:00-22:09",
    "price": 20
  },
  {
    "itemname": "puttu",
    "availabletime": "7:00-11:00,17:00-22:10",
    "price": 30
  },
  {
    "itemname": "rice bath",
    "availabletime": "7:00-11:00,17:00-22:11",
    "price": 50
  }
])
if __name__ == '__main__':
    app.run(port='4300',debug=True)
