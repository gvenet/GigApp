import json
from flask import Flask, request, jsonify
from flask_mongoengine import MongoEngine

app = Flask(__name__)
app.config['MONGODB_SETTINGS'] = {
    'db': 'test-db',
    'host': 'localhost',
    'port': 27017
}
me = MongoEngine()
me.init_app(app)

# class Name(me.EmbeddedDocument):
#     english = me.StringField()

# class Base(me.EmbeddedDocument):
#     HP = me.IntField()
#     Attack = me.IntField()
#     Defense = me.IntField()
#     SpAttack = me.IntField()
#     SpDefense = me.IntField()
#     Speed = me.IntField()

# class Image(me.EmbeddedDocument):
#     thumbnail = me.StringField()
#     hires = me.StringField()


# class Pokemon(me.Document):
#     test = me.StringField()
#     name = me.EmbeddedDocumentField(Name)
#     type = me.ListField()
#     base = me.EmbeddedDocumentField(Base)
#     image = me.EmbeddedDocumentField(Image)

# bulbasaur = Pokemon(test="_test_")
# bulbasaur.name = Name(english="Bulbasaur")
# bulbasaur.type= ["Grass", "Poison"]
# bulbasaur.base = Base(HP=45, Attack=49, Defense=49, SpAttack=65, SpDefense=65, Speed=45)
# bulbasaur.image = Image(
#     thumbnail= "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/001.png",
#     hires= "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/001.png"
# )

# bulbasaur.save()

# bulbasaur = Pokemon.objects(test="_test_").get_or_404()

if __name__ == "__main__":
    app.run(debug=True)

