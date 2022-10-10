import json
from flask import Flask, request, jsonify
from flask_mongoengine import MongoEngine

app = Flask(__name__)
app.config['MONGODB_SETTINGS'] = {
    'db': 'testdb',
    'host': 'localhost',
    'port': 27017
}
db = MongoEngine()
db.init_app(app)

class Pokemon(db.Document) :
    name = db.StringField()

Pokemon.object(name="jean").first()

if __name__ == "__main__":
    app.run(debug=True)

