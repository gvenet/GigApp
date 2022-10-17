import type { PokemonInterface } from "@/interfaces";

export default [
   {
      "id": 1,
      "name": {
         "english": "Bulbasaur",
         "japanese": "フシギダネ",
         "chinese": "妙蛙种子",
         "french": "Bulbizarre"
      },
      "type": [
         "Grass",
         "Poison"
      ],
      "base": {
         "HP": 45,
         "Attack": 49,
         "Defense": 49,
         "SpAttack": 65,
         "SpDefense": 65,
         "Speed": 45
      },
      "species": "Seed Pokémon",
      "description": "Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun’s rays, the seed grows progressively larger.",
      "evolution": {
         "next": [
            [
               "2",
               "Level 16"
            ]
         ]
      },
      "profile": {
         "height": "0.7 m",
         "weight": "6.9 kg",
         "egg": [
            "Monster",
            "Grass"
         ],
         "ability": [
            [
               "Overgrow",
               "false"
            ],
            [
               "Chlorophyll",
               "true"
            ]
         ],
         "gender": "87.5:12.5"
      },
      "image": {
         "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/001.png",
         "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/001.png",
         "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/001.png"
      }
   },
   {
      "id": 2,
      "name": {
         "english": "Ivysaur",
         "japanese": "フシギソウ",
         "chinese": "妙蛙草",
         "french": "Herbizarre"
      },
      "type": [
         "Grass",
         "Poison"
      ],
      "base": {
         "HP": 60,
         "Attack": 62,
         "Defense": 63,
         "SpAttack": 80,
         "SpDefense": 80,
         "Speed": 60
      },
      "species": "Seed Pokémon",
      "description": "There is a bud on this Pokémon’s back. To support its weight, Ivysaur’s legs and trunk grow thick and strong. If it starts spending more time lying in the sunlight, it’s a sign that the bud will bloom into a large flower soon.",
      "evolution": {
         "prev": [
            "1",
            "Level 16"
         ],
         "next": [
            [
               "3",
               "Level 32"
            ]
         ]
      },
      "profile": {
         "height": "1 m",
         "weight": "13 kg",
         "egg": [
            "Monster",
            "Grass"
         ],
         "ability": [
            [
               "Overgrow",
               "false"
            ],
            [
               "Chlorophyll",
               "true"
            ]
         ],
         "gender": "87.5:12.5"
      },
      "image": {
         "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/002.png",
         "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/002.png",
         "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/002.png"
      }
   },
   {
      "id": 3,
      "name": {
         "english": "Venusaur",
         "japanese": "フシギバナ",
         "chinese": "妙蛙花",
         "french": "Florizarre"
      },
      "type": [
         "Grass",
         "Poison"
      ],
      "base": {
         "HP": 80,
         "Attack": 82,
         "Defense": 83,
         "SpAttack": 100,
         "SpDefense": 100,
         "Speed": 80
      },
      "species": "Seed Pokémon",
      "description": "There is a large flower on Venusaur’s back. The flower is said to take on vivid colors if it gets plenty of nutrition and sunlight. The flower’s aroma soothes the emotions of people.",
      "evolution": {
         "prev": [
            "2",
            "Level 32"
         ]
      },
      "profile": {
         "height": "2 m",
         "weight": "100 kg",
         "egg": [
            "Monster",
            "Grass"
         ],
         "ability": [
            [
               "Overgrow",
               "false"
            ],
            [
               "Chlorophyll",
               "true"
            ]
         ],
         "gender": "87.5:12.5"
      },
      "image": {
         "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/003.png",
         "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/003.png",
         "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/003.png"
      }
   },
   {
      "id": 4,
      "name": {
         "english": "Charmander",
         "japanese": "ヒトカゲ",
         "chinese": "小火龙",
         "french": "Salamèche"
      },
      "type": [
         "Fire"
      ],
      "base": {
         "HP": 39,
         "Attack": 52,
         "Defense": 43,
         "SpAttack": 60,
         "SpDefense": 50,
         "Speed": 65
      },
      "species": "Lizard Pokémon",
      "description": "The flame that burns at the tip of its tail is an indication of its emotions. The flame wavers when Charmander is enjoying itself. If the Pokémon becomes enraged, the flame burns fiercely.",
      "evolution": {
         "next": [
            [
               "5",
               "Level 16"
            ]
         ]
      },
      "profile": {
         "height": "0.6 m",
         "weight": "8.5 kg",
         "egg": [
            "Monster",
            "Dragon"
         ],
         "ability": [
            [
               "Blaze",
               "false"
            ],
            [
               "Solar Power",
               "true"
            ]
         ],
         "gender": "87.5:12.5"
      },
      "image": {
         "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/004.png",
         "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/004.png",
         "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/004.png"
      }
   },
   {
      "id": 5,
      "name": {
         "english": "Charmeleon",
         "japanese": "リザード",
         "chinese": "火恐龙",
         "french": "Reptincel"
      },
      "type": [
         "Fire"
      ],
      "base": {
         "HP": 58,
         "Attack": 64,
         "Defense": 58,
         "SpAttack": 80,
         "SpDefense": 65,
         "Speed": 80
      },
      "species": "Flame Pokémon",
      "description": "Charmeleon mercilessly destroys its foes using its sharp claws. If it encounters a strong foe, it turns aggressive. In this excited state, the flame at the tip of its tail flares with a bluish white color.",
      "evolution": {
         "prev": [
            "4",
            "Level 16"
         ],
         "next": [
            [
               "6",
               "Level 36"
            ]
         ]
      },
      "profile": {
         "height": "1.1 m",
         "weight": "19 kg",
         "egg": [
            "Monster",
            "Dragon"
         ],
         "ability": [
            [
               "Blaze",
               "false"
            ],
            [
               "Solar Power",
               "true"
            ]
         ],
         "gender": "87.5:12.5"
      },
      "image": {
         "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/005.png",
         "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/005.png",
         "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/005.png"
      }
   },
   {
      "id": 6,
      "name": {
         "english": "Charizard",
         "japanese": "リザードン",
         "chinese": "喷火龙",
         "french": "Dracaufeu"
      },
      "type": [
         "Fire",
         "Flying"
      ],
      "base": {
         "HP": 78,
         "Attack": 84,
         "Defense": 78,
         "SpAttack": 109,
         "SpDefense": 85,
         "Speed": 100
      },
      "species": "Flame Pokémon",
      "description": "Charizard flies around the sky in search of powerful opponents. It breathes fire of such great heat that it melts anything. However, it never turns its fiery breath on any opponent weaker than itself.",
      "evolution": {
         "prev": [
            "5",
            "Level 36"
         ]
      },
      "profile": {
         "height": "1.7 m",
         "weight": "90.5 kg",
         "egg": [
            "Monster",
            "Dragon"
         ],
         "ability": [
            [
               "Blaze",
               "false"
            ],
            [
               "Solar Power",
               "true"
            ]
         ],
         "gender": "87.5:12.5"
      },
      "image": {
         "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/006.png",
         "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/006.png",
         "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/006.png"
      }
   },
   {
      "id": 7,
      "name": {
         "english": "Squirtle",
         "japanese": "ゼニガメ",
         "chinese": "杰尼龟",
         "french": "Carapuce"
      },
      "type": [
         "Water"
      ],
      "base": {
         "HP": 44,
         "Attack": 48,
         "Defense": 65,
         "SpAttack": 50,
         "SpDefense": 64,
         "Speed": 43
      },
      "species": "Tiny Turtle Pokémon",
      "description": "Squirtle’s shell is not merely used for protection. The shell’s rounded shape and the grooves on its surface help minimize resistance in water, enabling this Pokémon to swim at high speeds.",
      "evolution": {
         "next": [
            [
               "8",
               "Level 16"
            ]
         ]
      },
      "profile": {
         "height": "0.5 m",
         "weight": "9 kg",
         "egg": [
            "Monster",
            "Water 1"
         ],
         "ability": [
            [
               "Torrent",
               "false"
            ],
            [
               "Rain Dish",
               "true"
            ]
         ],
         "gender": "87.5:12.5"
      },
      "image": {
         "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/007.png",
         "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/007.png",
         "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/007.png"
      }
   },
   {
      "id": 8,
      "name": {
         "english": "Wartortle",
         "japanese": "カメール",
         "chinese": "卡咪龟",
         "french": "Carabaffe"
      },
      "type": [
         "Water"
      ],
      "base": {
         "HP": 59,
         "Attack": 63,
         "Defense": 80,
         "SpAttack": 65,
         "SpDefense": 80,
         "Speed": 58
      },
      "species": "Turtle Pokémon",
      "description": "Its tail is large and covered with a rich, thick fur. The tail becomes increasingly deeper in color as Wartortle ages. The scratches on its shell are evidence of this Pokémon’s toughness as a battler.",
      "evolution": {
         "prev": [
            "7",
            "Level 16"
         ],
         "next": [
            [
               "9",
               "Level 36"
            ]
         ]
      },
      "profile": {
         "height": "1 m",
         "weight": "22.5 kg",
         "egg": [
            "Monster",
            "Water 1"
         ],
         "ability": [
            [
               "Torrent",
               "false"
            ],
            [
               "Rain Dish",
               "true"
            ]
         ],
         "gender": "87.5:12.5"
      },
      "image": {
         "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/008.png",
         "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/008.png",
         "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/008.png"
      }
   },
   {
      "id": 9,
      "name": {
         "english": "Blastoise",
         "japanese": "カメックス",
         "chinese": "水箭龟",
         "french": "Tortank"
      },
      "type": [
         "Water"
      ],
      "base": {
         "HP": 79,
         "Attack": 83,
         "Defense": 100,
         "SpAttack": 85,
         "SpDefense": 105,
         "Speed": 78
      },
      "species": "Shellfish Pokémon",
      "description": "Blastoise has water spouts that protrude from its shell. The water spouts are very accurate. They can shoot bullets of water with enough accuracy to strike empty cans from a distance of over 160 feet.",
      "evolution": {
         "prev": [
            "8",
            "Level 36"
         ]
      },
      "profile": {
         "height": "1.6 m",
         "weight": "85.5 kg",
         "egg": [
            "Monster",
            "Water 1"
         ],
         "ability": [
            [
               "Torrent",
               "false"
            ],
            [
               "Rain Dish",
               "true"
            ]
         ],
         "gender": "87.5:12.5"
      },
      "image": {
         "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/009.png",
         "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/009.png",
         "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/009.png"
      }
   },
   {
      "id": 10,
      "name": {
         "english": "Caterpie",
         "japanese": "キャタピー",
         "chinese": "绿毛虫",
         "french": "Chenipan"
      },
      "type": [
         "Bug"
      ],
      "base": {
         "HP": 45,
         "Attack": 30,
         "Defense": 35,
         "SpAttack": 20,
         "SpDefense": 20,
         "Speed": 45
      },
      "species": "Worm Pokémon",
      "description": "Its body is soft and weak. In nature, its perpetual fate is to be seen by others as food.",
      "evolution": {
         "next": [
            [
               "11",
               "Level 7"
            ]
         ]
      },
      "profile": {
         "height": "0.3 m",
         "weight": "2.9 kg",
         "egg": [
            "Bug"
         ],
         "ability": [
            [
               "Shield Dust",
               "false"
            ],
            [
               "Run Away",
               "true"
            ]
         ],
         "gender": "50:50"
      },
      "image": {
         "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/010.png",
         "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/010.png",
         "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/010.png"
      }
   },
   {
      "id": 11,
      "name": {
         "english": "Metapod",
         "japanese": "トランセル",
         "chinese": "铁甲蛹",
         "french": "Chrysacier"
      },
      "type": [
         "Bug"
      ],
      "base": {
         "HP": 50,
         "Attack": 20,
         "Defense": 55,
         "SpAttack": 25,
         "SpDefense": 25,
         "Speed": 30
      },
      "species": "Cocoon Pokémon",
      "description": "Its hard shell doesn’t crack a bit even if Pikipek pecks at it, but it will tip over, spilling out its insides.",
      "evolution": {
         "prev": [
            "10",
            "Level 7"
         ],
         "next": [
            [
               "12",
               "Level 10"
            ]
         ]
      },
      "profile": {
         "height": "0.7 m",
         "weight": "9.9 kg",
         "egg": [
            "Bug"
         ],
         "ability": [
            [
               "Shed Skin",
               "false"
            ]
         ],
         "gender": "50:50"
      },
      "image": {
         "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/011.png",
         "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/011.png",
         "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/011.png"
      }
   },
   {
      "id": 12,
      "name": {
         "english": "Butterfree",
         "japanese": "バタフリー",
         "chinese": "巴大蝶",
         "french": "Papilusion"
      },
      "type": [
         "Bug",
         "Flying"
      ],
      "base": {
         "HP": 60,
         "Attack": 45,
         "Defense": 50,
         "SpAttack": 90,
         "SpDefense": 80,
         "Speed": 70
      },
      "species": "Butterfly Pokémon",
      "description": "Nectar from pretty flowers is its favorite food. In fields of flowers, it has heated battles with Cutiefly for territory.",
      "evolution": {
         "prev": [
            "11",
            "Level 10"
         ]
      },
      "profile": {
         "height": "1.1 m",
         "weight": "32 kg",
         "egg": [
            "Bug"
         ],
         "ability": [
            [
               "Compound Eyes",
               "false"
            ],
            [
               "Tinted Lens",
               "true"
            ]
         ],
         "gender": "50:50"
      },
      "image": {
         "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/012.png",
         "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/012.png",
         "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/012.png"
      }
   },
   {
      "id": 13,
      "name": {
         "english": "Weedle",
         "japanese": "ビードル",
         "chinese": "独角虫",
         "french": "Aspicot"
      },
      "type": [
         "Bug",
         "Poison"
      ],
      "base": {
         "HP": 40,
         "Attack": 35,
         "Defense": 30,
         "SpAttack": 20,
         "SpDefense": 20,
         "Speed": 50
      },
      "species": "Hairy Bug Pokémon",
      "description": "Weedle has an extremely acute sense of smell. It is capable of distinguishing its favorite kinds of leaves from those it dislikes just by sniffing with its big red proboscis (nose).",
      "evolution": {
         "next": [
            [
               "14",
               "Level 7"
            ]
         ]
      },
      "profile": {
         "height": "0.3 m",
         "weight": "3.2 kg",
         "egg": [
            "Bug"
         ],
         "ability": [
            [
               "Shield Dust",
               "false"
            ],
            [
               "Run Away",
               "true"
            ]
         ],
         "gender": "50:50"
      },
      "image": {
         "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/013.png",
         "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/013.png",
         "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/013.png"
      }
   },
   {
      "id": 14,
      "name": {
         "english": "Kakuna",
         "japanese": "コクーン",
         "chinese": "铁壳蛹",
         "french": "Coconfort"
      },
      "type": [
         "Bug",
         "Poison"
      ],
      "base": {
         "HP": 45,
         "Attack": 25,
         "Defense": 50,
         "SpAttack": 25,
         "SpDefense": 25,
         "Speed": 35
      },
      "species": "Cocoon Pokémon",
      "description": "Kakuna remains virtually immobile as it clings to a tree. However, on the inside, it is extremely busy as it prepares for its coming evolution. This is evident from how hot the shell becomes to the touch.",
      "evolution": {
         "prev": [
            "13",
            "Level 7"
         ],
         "next": [
            [
               "15",
               "Level 10"
            ]
         ]
      },
      "profile": {
         "height": "0.6 m",
         "weight": "10 kg",
         "egg": [
            "Bug"
         ],
         "ability": [
            [
               "Shed Skin",
               "false"
            ]
         ],
         "gender": "50:50"
      },
      "image": {
         "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/014.png",
         "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/014.png",
         "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/014.png"
      }
   },
   {
      "id": 15,
      "name": {
         "english": "Beedrill",
         "japanese": "スピアー",
         "chinese": "大针蜂",
         "french": "Dardargnan"
      },
      "type": [
         "Bug",
         "Poison"
      ],
      "base": {
         "HP": 65,
         "Attack": 90,
         "Defense": 40,
         "SpAttack": 45,
         "SpDefense": 80,
         "Speed": 75
      },
      "species": "Poison Bee Pokémon",
      "description": "Beedrill is extremely territorial. No one should ever approach its nest—this is for their own safety. If angered, they will attack in a furious swarm.",
      "evolution": {
         "prev": [
            "14",
            "Level 10"
         ]
      },
      "profile": {
         "height": "1 m",
         "weight": "29.5 kg",
         "egg": [
            "Bug"
         ],
         "ability": [
            [
               "Swarm",
               "false"
            ],
            [
               "Sniper",
               "true"
            ]
         ],
         "gender": "50:50"
      },
      "image": {
         "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/015.png",
         "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/015.png",
         "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/015.png"
      }
   },
   {
      "id": 16,
      "name": {
         "english": "Pidgey",
         "japanese": "ポッポ",
         "chinese": "波波",
         "french": "Roucool"
      },
      "type": [
         "Normal",
         "Flying"
      ],
      "base": {
         "HP": 40,
         "Attack": 45,
         "Defense": 40,
         "SpAttack": 35,
         "SpDefense": 35,
         "Speed": 56
      },
      "species": "Tiny Bird Pokémon",
      "description": "Pidgey has an extremely sharp sense of direction. It is capable of unerringly returning home to its nest, however far it may be removed from its familiar surroundings.",
      "evolution": {
         "next": [
            [
               "17",
               "Level 18"
            ]
         ]
      },
      "profile": {
         "height": "0.3 m",
         "weight": "1.8 kg",
         "egg": [
            "Flying"
         ],
         "ability": [
            [
               "Keen Eye",
               "false"
            ],
            [
               "Tangled Feet",
               "false"
            ],
            [
               "Big Pecks",
               "true"
            ]
         ],
         "gender": "50:50"
      },
      "image": {
         "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/016.png",
         "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/016.png",
         "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/016.png"
      }
   },
   {
      "id": 17,
      "name": {
         "english": "Pidgeotto",
         "japanese": "ピジョン",
         "chinese": "比比鸟",
         "french": "Roucoups"
      },
      "type": [
         "Normal",
         "Flying"
      ],
      "base": {
         "HP": 63,
         "Attack": 60,
         "Defense": 55,
         "SpAttack": 50,
         "SpDefense": 50,
         "Speed": 71
      },
      "species": "Bird Pokémon",
      "description": "Pidgeotto claims a large area as its own territory. This Pokémon flies around, patrolling its living space. If its territory is violated, it shows no mercy in thoroughly punishing the foe with its sharp claws.",
      "evolution": {
         "prev": [
            "16",
            "Level 18"
         ],
         "next": [
            [
               "18",
               "Level 36"
            ]
         ]
      },
      "profile": {
         "height": "1.1 m",
         "weight": "30 kg",
         "egg": [
            "Flying"
         ],
         "ability": [
            [
               "Keen Eye",
               "false"
            ],
            [
               "Tangled Feet",
               "false"
            ],
            [
               "Big Pecks",
               "true"
            ]
         ],
         "gender": "50:50"
      },
      "image": {
         "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/017.png",
         "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/017.png",
         "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/017.png"
      }
   },
   {
      "id": 18,
      "name": {
         "english": "Pidgeot",
         "japanese": "ピジョット",
         "chinese": "大比鸟",
         "french": "Roucarnage"
      },
      "type": [
         "Normal",
         "Flying"
      ],
      "base": {
         "HP": 83,
         "Attack": 80,
         "Defense": 75,
         "SpAttack": 70,
         "SpDefense": 70,
         "Speed": 101
      },
      "species": "Bird Pokémon",
      "description": "This Pokémon has a dazzling plumage of beautifully glossy feathers. Many Trainers are captivated by the striking beauty of the feathers on its head, compelling them to choose Pidgeot as their Pokémon.",
      "evolution": {
         "prev": [
            "17",
            "Level 36"
         ]
      },
      "profile": {
         "height": "1.5 m",
         "weight": "39.5 kg",
         "egg": [
            "Flying"
         ],
         "ability": [
            [
               "Keen Eye",
               "false"
            ],
            [
               "Tangled Feet",
               "false"
            ],
            [
               "Big Pecks",
               "true"
            ]
         ],
         "gender": "50:50"
      },
      "image": {
         "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/018.png",
         "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/018.png",
         "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/018.png"
      }
   },
   {
      "id": 19,
      "name": {
         "english": "Rattata",
         "japanese": "コラッタ",
         "chinese": "小拉达",
         "french": "Rattata"
      },
      "type": [
         "Normal"
      ],
      "base": {
         "HP": 30,
         "Attack": 56,
         "Defense": 35,
         "SpAttack": 25,
         "SpDefense": 35,
         "Speed": 72
      },
      "species": "Mouse Pokémon",
      "description": "This Pokémon is common but hazardous. Its sharp incisors can easily cut right through hard wood.",
      "evolution": {
         "next": [
            [
               "20",
               "Level 20"
            ]
         ]
      },
      "profile": {
         "height": "0.3 m",
         "weight": "3.5 kg",
         "egg": [
            "Field"
         ],
         "ability": [
            [
               "Run Away",
               "false"
            ],
            [
               "Guts",
               "false"
            ],
            [
               "Hustle",
               "true"
            ]
         ],
         "gender": "50:50"
      },
      "image": {
         "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/019.png",
         "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/019.png",
         "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/019.png"
      }
   },
   {
      "id": 20,
      "name": {
         "english": "Raticate",
         "japanese": "ラッタ",
         "chinese": "拉达",
         "french": "Rattatac"
      },
      "type": [
         "Normal"
      ],
      "base": {
         "HP": 55,
         "Attack": 81,
         "Defense": 60,
         "SpAttack": 50,
         "SpDefense": 70,
         "Speed": 97
      },
      "species": "Mouse Pokémon",
      "description": "Its whiskers are essential for maintaining its balance. No matter how friendly you are, it will get angry and bite you if you touch its whiskers.",
      "evolution": {
         "prev": [
            "19",
            "Level 20"
         ]
      },
      "profile": {
         "height": "0.7 m",
         "weight": "18.5 kg",
         "egg": [
            "Field"
         ],
         "ability": [
            [
               "Run Away",
               "false"
            ],
            [
               "Guts",
               "false"
            ],
            [
               "Hustle",
               "true"
            ]
         ],
         "gender": "50:50"
      },
      "image": {
         "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/020.png",
         "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/020.png",
         "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/020.png"
      }
   },
   {
      "id": 21,
      "name": {
         "english": "Spearow",
         "japanese": "オニスズメ",
         "chinese": "烈雀",
         "french": "Piafabec"
      },
      "type": [
         "Normal",
         "Flying"
      ],
      "base": {
         "HP": 40,
         "Attack": 60,
         "Defense": 30,
         "SpAttack": 31,
         "SpDefense": 31,
         "Speed": 70
      },
      "species": "Tiny Bird Pokémon",
      "description": "Due to its short wings, it can’t fly long distances. It wanders about restlessly and pecks at bug Pokémon.",
      "evolution": {
         "next": [
            [
               "22",
               "Level 20"
            ]
         ]
      },
      "profile": {
         "height": "0.3 m",
         "weight": "2 kg",
         "egg": [
            "Flying"
         ],
         "ability": [
            [
               "Keen Eye",
               "false"
            ],
            [
               "Sniper",
               "true"
            ]
         ],
         "gender": "50:50"
      },
      "image": {
         "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/021.png",
         "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/021.png",
         "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/021.png"
      }
   },
   {
      "id": 22,
      "name": {
         "english": "Fearow",
         "japanese": "オニドリル",
         "chinese": "大嘴雀",
         "french": "Rapasdepic"
      },
      "type": [
         "Normal",
         "Flying"
      ],
      "base": {
         "HP": 65,
         "Attack": 90,
         "Defense": 65,
         "SpAttack": 61,
         "SpDefense": 61,
         "Speed": 100
      },
      "species": "Beak Pokémon",
      "description": "In Alola, fish Pokémon are its prey. It can be seen circling above the ocean searching for food.",
      "evolution": {
         "prev": [
            "21",
            "Level 20"
         ]
      },
      "profile": {
         "height": "1.2 m",
         "weight": "38 kg",
         "egg": [
            "Flying"
         ],
         "ability": [
            [
               "Keen Eye",
               "false"
            ],
            [
               "Sniper",
               "true"
            ]
         ],
         "gender": "50:50"
      },
      "image": {
         "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/022.png",
         "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/022.png",
         "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/022.png"
      }
   },
   {
      "id": 23,
      "name": {
         "english": "Ekans",
         "japanese": "アーボ",
         "chinese": "阿柏蛇",
         "french": "Abo"
      },
      "type": [
         "Poison"
      ],
      "base": {
         "HP": 35,
         "Attack": 60,
         "Defense": 44,
         "SpAttack": 40,
         "SpDefense": 54,
         "Speed": 55
      },
      "species": "Snake Pokémon",
      "description": "The eggs of bird Pokémon are its favorite food. It swallows eggs whole, so sometimes an egg gets stuck, and Ekans faints.",
      "evolution": {
         "next": [
            [
               "24",
               "Level 22"
            ]
         ]
      },
      "profile": {
         "height": "2 m",
         "weight": "6.9 kg",
         "egg": [
            "Field",
            "Dragon"
         ],
         "ability": [
            [
               "Intimidate",
               "false"
            ],
            [
               "Shed Skin",
               "false"
            ],
            [
               "Unnerve",
               "true"
            ]
         ],
         "gender": "50:50"
      },
      "image": {
         "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/023.png",
         "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/023.png",
         "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/023.png"
      }
   },
   {
      "id": 24,
      "name": {
         "english": "Arbok",
         "japanese": "アーボック",
         "chinese": "阿柏怪",
         "french": "Arbok"
      },
      "type": [
         "Poison"
      ],
      "base": {
         "HP": 60,
         "Attack": 95,
         "Defense": 69,
         "SpAttack": 65,
         "SpDefense": 79,
         "Speed": 80
      },
      "species": "Cobra Pokémon",
      "description": "After stunning its opponents with the pattern on its stomach, it quickly wraps them up in its body and waits for them to stop moving.",
      "evolution": {
         "prev": [
            "23",
            "Level 22"
         ]
      },
      "profile": {
         "height": "3.5 m",
         "weight": "65 kg",
         "egg": [
            "Field",
            "Dragon"
         ],
         "ability": [
            [
               "Intimidate",
               "false"
            ],
            [
               "Shed Skin",
               "false"
            ],
            [
               "Unnerve",
               "true"
            ]
         ],
         "gender": "50:50"
      },
      "image": {
         "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/024.png",
         "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/024.png",
         "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/024.png"
      }
   },
   {
      "id": 25,
      "name": {
         "english": "Pikachu",
         "japanese": "ピカチュウ",
         "chinese": "皮卡丘",
         "french": "Pikachu"
      },
      "type": [
         "Electric"
      ],
      "base": {
         "HP": 35,
         "Attack": 55,
         "Defense": 40,
         "SpAttack": 50,
         "SpDefense": 50,
         "Speed": 90
      },
      "species": "Mouse Pokémon",
      "description": "While sleeping, it generates electricity in the sacs in its cheeks. If it’s not getting enough sleep, it will be able to use only weak electricity.",
      "evolution": {
         "prev": [
            "172",
            "high Friendship"
         ],
         "next": [
            [
               "26",
               "use Thunder Stone"
            ]
         ]
      },
      "profile": {
         "height": "0.4 m",
         "weight": "6 kg",
         "egg": [
            "Field",
            "Fairy"
         ],
         "ability": [
            [
               "Static",
               "false"
            ],
            [
               "Lightning Rod",
               "true"
            ]
         ],
         "gender": "50:50"
      },
      "image": {
         "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/025.png",
         "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/025.png",
         "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/025.png"
      }
   },
   {
      "id": 26,
      "name": {
         "english": "Raichu",
         "japanese": "ライチュウ",
         "chinese": "雷丘",
         "french": "Raichu"
      },
      "type": [
         "Electric"
      ],
      "base": {
         "HP": 60,
         "Attack": 90,
         "Defense": 55,
         "SpAttack": 90,
         "SpDefense": 80,
         "Speed": 110
      },
      "species": "Mouse Pokémon",
      "description": "Because so many Trainers like the way Pikachu looks, you don’t see this Pokémon very often.",
      "evolution": {
         "prev": [
            "25",
            "use Thunder Stone"
         ]
      },
      "profile": {
         "height": "0.8 m",
         "weight": "30 kg",
         "egg": [
            "Field",
            "Fairy"
         ],
         "ability": [
            [
               "Static",
               "false"
            ],
            [
               "Lightning Rod",
               "true"
            ]
         ],
         "gender": "50:50"
      },
      "image": {
         "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/026.png",
         "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/026.png",
         "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/026.png"
      }
   },
   {
      "id": 27,
      "name": {
         "english": "Sandshrew",
         "japanese": "サンド",
         "chinese": "穿山鼠",
         "french": "Sabelette"
      },
      "type": [
         "Ground"
      ],
      "base": {
         "HP": 50,
         "Attack": 75,
         "Defense": 85,
         "SpAttack": 20,
         "SpDefense": 30,
         "Speed": 40
      },
      "species": "Mouse Pokémon",
      "description": "When its skin gets wrinkled from moisture, it heads for a volcano. It lies flat on a spot with a lot of geothermal heat and dries itself out.",
      "evolution": {
         "next": [
            [
               "28",
               "Level 22"
            ]
         ]
      },
      "profile": {
         "height": "0.6 m",
         "weight": "12 kg",
         "egg": [
            "Field"
         ],
         "ability": [
            [
               "Sand Veil",
               "false"
            ],
            [
               "Sand Rush",
               "true"
            ]
         ],
         "gender": "50:50"
      },
      "image": {
         "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/027.png",
         "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/027.png",
         "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/027.png"
      }
   },
   {
      "id": 28,
      "name": {
         "english": "Sandslash",
         "japanese": "サンドパン",
         "chinese": "穿山王",
         "french": "Sablaireau"
      },
      "type": [
         "Ground"
      ],
      "base": {
         "HP": 75,
         "Attack": 100,
         "Defense": 110,
         "SpAttack": 45,
         "SpDefense": 55,
         "Speed": 65
      },
      "species": "Mouse Pokémon",
      "description": "Thanks to its thick claws, it’s good at climbing trees. There are plenty of Sandslash that park themselves in trees and go right to sleep.",
      "evolution": {
         "prev": [
            "27",
            "Level 22"
         ]
      },
      "profile": {
         "height": "1 m",
         "weight": "29.5 kg",
         "egg": [
            "Field"
         ],
         "ability": [
            [
               "Sand Veil",
               "false"
            ],
            [
               "Sand Rush",
               "true"
            ]
         ],
         "gender": "50:50"
      },
      "image": {
         "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/028.png",
         "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/028.png",
         "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/028.png"
      }
   },
   {
      "id": 29,
      "name": {
         "english": "Nidoran♀",
         "japanese": "ニドラン♀",
         "chinese": "尼多兰",
         "french": "Nidoran♀"
      },
      "type": [
         "Poison"
      ],
      "base": {
         "HP": 55,
         "Attack": 47,
         "Defense": 52,
         "SpAttack": 40,
         "SpDefense": 40,
         "Speed": 41
      },
      "species": "Poison Pin Pokémon",
      "description": "Nidoran♀ has barbs that secrete a powerful poison. They are thought to have developed as protection for this small-bodied Pokémon. When enraged, it releases a horrible toxin from its horn.",
      "evolution": {
         "next": [
            [
               "30",
               "Level 16"
            ]
         ]
      },
      "profile": {
         "height": "0.4 m",
         "weight": "7 kg",
         "egg": [
            "Monster",
            "Field"
         ],
         "ability": [
            [
               "Poison Point",
               "false"
            ],
            [
               "Rivalry",
               "false"
            ],
            [
               "Hustle",
               "true"
            ]
         ],
         "gender": "0:100"
      },
      "image": {
         "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/029.png",
         "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/029.png",
         "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/029.png"
      }
   },
   {
      "id": 30,
      "name": {
         "english": "Nidorina",
         "japanese": "ニドリーナ",
         "chinese": "尼多娜",
         "french": "Nidorina"
      },
      "type": [
         "Poison"
      ],
      "base": {
         "HP": 70,
         "Attack": 62,
         "Defense": 67,
         "SpAttack": 55,
         "SpDefense": 55,
         "Speed": 56
      },
      "species": "Poison Pin Pokémon",
      "description": "When Nidorina are with their friends or family, they keep their barbs tucked away to prevent hurting each other. This Pokémon appears to become nervous if separated from the others.",
      "evolution": {
         "prev": [
            "29",
            "Level 16"
         ],
         "next": [
            [
               "31",
               "use Moon Stone"
            ]
         ]
      },
      "profile": {
         "height": "0.8 m",
         "weight": "20 kg",
         "egg": [
            "Undiscovered"
         ],
         "ability": [
            [
               "Poison Point",
               "false"
            ],
            [
               "Rivalry",
               "false"
            ],
            [
               "Hustle",
               "true"
            ]
         ],
         "gender": "0:100"
      },
      "image": {
         "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/030.png",
         "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/030.png",
         "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/030.png"
      }
   },
   {
      "id": 31,
      "name": {
         "english": "Nidoqueen",
         "japanese": "ニドクイン",
         "chinese": "尼多后",
         "french": "Nidoqueen"
      },
      "type": [
         "Poison",
         "Ground"
      ],
      "base": {
         "HP": 90,
         "Attack": 92,
         "Defense": 87,
         "SpAttack": 75,
         "SpDefense": 85,
         "Speed": 76
      },
      "species": "Drill Pokémon",
      "description": "Nidoqueen’s body is encased in extremely hard scales. It is adept at sending foes flying with harsh tackles. This Pokémon is at its strongest when it is defending its young.",
      "evolution": {
         "prev": [
            "30",
            "use Moon Stone"
         ]
      },
      "profile": {
         "height": "1.3 m",
         "weight": "60 kg",
         "egg": [
            "Undiscovered"
         ],
         "ability": [
            [
               "Poison Point",
               "false"
            ],
            [
               "Rivalry",
               "false"
            ],
            [
               "Sheer Force",
               "true"
            ]
         ],
         "gender": "0:100"
      },
      "image": {
         "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/031.png",
         "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/031.png",
         "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/031.png"
      }
   },
   {
      "id": 32,
      "name": {
         "english": "Nidoran♂",
         "japanese": "ニドラン♂",
         "chinese": "尼多朗",
         "french": "Nidoran♂"
      },
      "type": [
         "Poison"
      ],
      "base": {
         "HP": 46,
         "Attack": 57,
         "Defense": 40,
         "SpAttack": 40,
         "SpDefense": 40,
         "Speed": 50
      },
      "species": "Poison Pin Pokémon",
      "description": "Nidoran♂ has developed muscles for moving its ears. Thanks to them, the ears can be freely moved in any direction. Even the slightest sound does not escape this Pokémon’s notice.",
      "evolution": {
         "next": [
            [
               "33",
               "Level 16"
            ]
         ]
      },
      "profile": {
         "height": "0.5 m",
         "weight": "9 kg",
         "egg": [
            "Monster",
            "Field"
         ],
         "ability": [
            [
               "Poison Point",
               "false"
            ],
            [
               "Rivalry",
               "false"
            ],
            [
               "Hustle",
               "true"
            ]
         ],
         "gender": "100:0"
      },
      "image": {
         "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/032.png",
         "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/032.png",
         "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/032.png"
      }
   },
   {
      "id": 33,
      "name": {
         "english": "Nidorino",
         "japanese": "ニドリーノ",
         "chinese": "尼多力诺",
         "french": "Nidorino"
      },
      "type": [
         "Poison"
      ],
      "base": {
         "HP": 61,
         "Attack": 72,
         "Defense": 57,
         "SpAttack": 55,
         "SpDefense": 55,
         "Speed": 65
      },
      "species": "Poison Pin Pokémon",
      "description": "Nidorino has a horn that is harder than a diamond. If it senses a hostile presence, all the barbs on its back bristle up at once, and it challenges the foe with all its might.",
      "evolution": {
         "prev": [
            "32",
            "Level 16"
         ],
         "next": [
            [
               "34",
               "use Moon Stone"
            ]
         ]
      },
      "profile": {
         "height": "0.9 m",
         "weight": "19.5 kg",
         "egg": [
            "Monster",
            "Field"
         ],
         "ability": [
            [
               "Poison Point",
               "false"
            ],
            [
               "Rivalry",
               "false"
            ],
            [
               "Hustle",
               "true"
            ]
         ],
         "gender": "100:0"
      },
      "image": {
         "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/033.png",
         "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/033.png",
         "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/033.png"
      }
   },
   {
      "id": 34,
      "name": {
         "english": "Nidoking",
         "japanese": "ニドキング",
         "chinese": "尼多王",
         "french": "Nidoking"
      },
      "type": [
         "Poison",
         "Ground"
      ],
      "base": {
         "HP": 81,
         "Attack": 102,
         "Defense": 77,
         "SpAttack": 85,
         "SpDefense": 75,
         "Speed": 85
      },
      "species": "Drill Pokémon",
      "description": "Nidoking’s thick tail packs enormously destructive power. With one swing, it can topple a metal transmission tower. Once this Pokémon goes on a rampage, there is no stopping it.",
      "evolution": {
         "prev": [
            "33",
            "use Moon Stone"
         ]
      },
      "profile": {
         "height": "1.4 m",
         "weight": "62 kg",
         "egg": [
            "Monster",
            "Field"
         ],
         "ability": [
            [
               "Poison Point",
               "false"
            ],
            [
               "Rivalry",
               "false"
            ],
            [
               "Sheer Force",
               "true"
            ]
         ],
         "gender": "100:0"
      },
      "image": {
         "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/034.png",
         "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/034.png",
         "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/034.png"
      }
   },
   {
      "id": 35,
      "name": {
         "english": "Clefairy",
         "japanese": "ピッピ",
         "chinese": "皮皮",
         "french": "Mélofée"
      },
      "type": [
         "Fairy"
      ],
      "base": {
         "HP": 70,
         "Attack": 45,
         "Defense": 48,
         "SpAttack": 60,
         "SpDefense": 65,
         "Speed": 35
      },
      "species": "Fairy Pokémon",
      "description": "Bathed in moonlight, its wings glow faintly. Without even flapping, Clefairy rises into the air, where it dances around.",
      "evolution": {
         "prev": [
            "173",
            "high Friendship"
         ],
         "next": [
            [
               "36",
               "use Moon Stone"
            ]
         ]
      },
      "profile": {
         "height": "0.6 m",
         "weight": "7.5 kg",
         "egg": [
            "Fairy"
         ],
         "ability": [
            [
               "Cute Charm",
               "false"
            ],
            [
               "Magic Guard",
               "false"
            ],
            [
               "Friend Guard",
               "true"
            ]
         ],
         "gender": "25:75"
      },
      "image": {
         "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/035.png",
         "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/035.png",
         "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/035.png"
      }
   },
   {
      "id": 36,
      "name": {
         "english": "Clefable",
         "japanese": "ピクシー",
         "chinese": "皮可西",
         "french": "Mélodelfe"
      },
      "type": [
         "Fairy"
      ],
      "base": {
         "HP": 95,
         "Attack": 70,
         "Defense": 73,
         "SpAttack": 95,
         "SpDefense": 90,
         "Speed": 60
      },
      "species": "Fairy Pokémon",
      "description": "Some scientists believe that it gazes intently at the sky on nights with a full moon because it’s homesick.",
      "evolution": {
         "prev": [
            "35",
            "use Moon Stone"
         ]
      },
      "profile": {
         "height": "1.3 m",
         "weight": "40 kg",
         "egg": [
            "Fairy"
         ],
         "ability": [
            [
               "Cute Charm",
               "false"
            ],
            [
               "Magic Guard",
               "false"
            ],
            [
               "Unaware",
               "true"
            ]
         ],
         "gender": "25:75"
      },
      "image": {
         "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/036.png",
         "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/036.png",
         "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/036.png"
      }
   },
   {
      "id": 37,
      "name": {
         "english": "Vulpix",
         "japanese": "ロコン",
         "chinese": "六尾",
         "french": "Goupix"
      },
      "type": [
         "Fire"
      ],
      "base": {
         "HP": 38,
         "Attack": 41,
         "Defense": 40,
         "SpAttack": 50,
         "SpDefense": 65,
         "Speed": 65
      },
      "species": "Fox Pokémon",
      "description": "It manipulates balls of fire to catch its prey. If you raise one from when it’s young, it will grow close to you like a puppy Pokémon.",
      "evolution": {
         "next": [
            [
               "38",
               "use Fire Stone"
            ]
         ]
      },
      "profile": {
         "height": "0.6 m",
         "weight": "9.9 kg",
         "egg": [
            "Field"
         ],
         "ability": [
            [
               "Flash Fire",
               "false"
            ],
            [
               "Drought",
               "true"
            ]
         ],
         "gender": "25:75"
      },
      "image": {
         "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/037.png",
         "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/037.png",
         "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/037.png"
      }
   },
   {
      "id": 38,
      "name": {
         "english": "Ninetales",
         "japanese": "キュウコン",
         "chinese": "九尾",
         "french": "Feunard"
      },
      "type": [
         "Fire"
      ],
      "base": {
         "HP": 73,
         "Attack": 76,
         "Defense": 75,
         "SpAttack": 81,
         "SpDefense": 100,
         "Speed": 100
      },
      "species": "Fox Pokémon",
      "description": "The flickering flames it spews from its mouth leave its opponents hypnotized. Then, this extremely intelligent Pokémon attacks.",
      "evolution": {
         "prev": [
            "37",
            "use Fire Stone"
         ]
      },
      "profile": {
         "height": "1.1 m",
         "weight": "19.9 kg",
         "egg": [
            "Field"
         ],
         "ability": [
            [
               "Flash Fire",
               "false"
            ],
            [
               "Drought",
               "true"
            ]
         ],
         "gender": "25:75"
      },
      "image": {
         "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/038.png",
         "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/038.png",
         "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/038.png"
      }
   },
   {
      "id": 39,
      "name": {
         "english": "Jigglypuff",
         "japanese": "プリン",
         "chinese": "胖丁",
         "french": "Rondoudou"
      },
      "type": [
         "Normal",
         "Fairy"
      ],
      "base": {
         "HP": 115,
         "Attack": 45,
         "Defense": 20,
         "SpAttack": 45,
         "SpDefense": 25,
         "Speed": 20
      },
      "species": "Balloon Pokémon",
      "description": "The songs they sing are totally different depending on the region they live in. Some even sound like they’re shouting!",
      "evolution": {
         "prev": [
            "174",
            "high Friendship"
         ],
         "next": [
            [
               "40",
               "use Moon Stone"
            ]
         ]
      },
      "profile": {
         "height": "0.5 m",
         "weight": "5.5 kg",
         "egg": [
            "Fairy"
         ],
         "ability": [
            [
               "Cute Charm",
               "false"
            ],
            [
               "Competitive",
               "false"
            ],
            [
               "Friend Guard",
               "true"
            ]
         ],
         "gender": "25:75"
      },
      "image": {
         "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/039.png",
         "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/039.png",
         "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/039.png"
      }
   },
   {
      "id": 40,
      "name": {
         "english": "Wigglytuff",
         "japanese": "プクリン",
         "chinese": "胖可丁",
         "french": "Grodoudou"
      },
      "type": [
         "Normal",
         "Fairy"
      ],
      "base": {
         "HP": 140,
         "Attack": 70,
         "Defense": 45,
         "SpAttack": 85,
         "SpDefense": 50,
         "Speed": 45
      },
      "species": "Balloon Pokémon",
      "description": "When it gets angry, it inhales with all its might, and its body gradually inflates. Sometimes they can grow 20 times larger!",
      "evolution": {
         "prev": [
            "39",
            "use Moon Stone"
         ]
      },
      "profile": {
         "height": "1 m",
         "weight": "12 kg",
         "egg": [
            "Fairy"
         ],
         "ability": [
            [
               "Cute Charm",
               "false"
            ],
            [
               "Competitive",
               "false"
            ],
            [
               "Frisk",
               "true"
            ]
         ],
         "gender": "25:75"
      },
      "image": {
         "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/040.png",
         "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/040.png",
         "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/040.png"
      }
   },
   {
      "id": 41,
      "name": {
         "english": "Zubat",
         "japanese": "ズバット",
         "chinese": "超音蝠",
         "french": "Nosferapti"
      },
      "type": [
         "Poison",
         "Flying"
      ],
      "base": {
         "HP": 40,
         "Attack": 45,
         "Defense": 35,
         "SpAttack": 30,
         "SpDefense": 40,
         "Speed": 55
      },
      "species": "Bat Pokémon",
      "description": "Their skin is so thin that they’ll be burned if sunlight hits them. When it gets cold out, they gather together to warm one another’s bodies.",
      "evolution": {
         "next": [
            [
               "42",
               "Level 22"
            ]
         ]
      },
      "profile": {
         "height": "0.8 m",
         "weight": "7.5 kg",
         "egg": [
            "Flying"
         ],
         "ability": [
            [
               "Inner Focus",
               "false"
            ],
            [
               "Infiltrator",
               "true"
            ]
         ],
         "gender": "50:50"
      },
      "image": {
         "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/041.png",
         "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/041.png",
         "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/041.png"
      }
   },
   {
      "id": 42,
      "name": {
         "english": "Golbat",
         "japanese": "ゴルバット",
         "chinese": "大嘴蝠",
         "french": "Nosferalto"
      },
      "type": [
         "Poison",
         "Flying"
      ],
      "base": {
         "HP": 75,
         "Attack": 80,
         "Defense": 70,
         "SpAttack": 65,
         "SpDefense": 75,
         "Speed": 90
      },
      "species": "Bat Pokémon",
      "description": "They can suck down over 10 ounces of blood in one go. They have been known to drink so much blood that they can no longer fly.",
      "evolution": {
         "prev": [
            "41",
            "Level 22"
         ],
         "next": [
            [
               "169",
               "high Friendship"
            ]
         ]
      },
      "profile": {
         "height": "1.6 m",
         "weight": "55 kg",
         "egg": [
            "Flying"
         ],
         "ability": [
            [
               "Inner Focus",
               "false"
            ],
            [
               "Infiltrator",
               "true"
            ]
         ],
         "gender": "50:50"
      },
      "image": {
         "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/042.png",
         "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/042.png",
         "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/042.png"
      }
   },
   {
      "id": 43,
      "name": {
         "english": "Oddish",
         "japanese": "ナゾノクサ",
         "chinese": "走路草",
         "french": "Mystherbe"
      },
      "type": [
         "Grass",
         "Poison"
      ],
      "base": {
         "HP": 45,
         "Attack": 50,
         "Defense": 55,
         "SpAttack": 75,
         "SpDefense": 65,
         "Speed": 30
      },
      "species": "Weed Pokémon",
      "description": "Oddish searches for fertile, nutrient-rich soil, then plants itself. During the daytime, while it is planted, this Pokémon’s feet are thought to change shape and become similar to the roots of trees.",
      "evolution": {
         "next": [
            [
               "44",
               "Level 21"
            ]
         ]
      },
      "profile": {
         "height": "0.5 m",
         "weight": "5.4 kg",
         "egg": [
            "Grass"
         ],
         "ability": [
            [
               "Chlorophyll",
               "false"
            ],
            [
               "Run Away",
               "true"
            ]
         ],
         "gender": "50:50"
      },
      "image": {
         "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/043.png",
         "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/043.png",
         "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/043.png"
      }
   },
   {
      "id": 44,
      "name": {
         "english": "Gloom",
         "japanese": "クサイハナ",
         "chinese": "臭臭花",
         "french": "Ortide"
      },
      "type": [
         "Grass",
         "Poison"
      ],
      "base": {
         "HP": 60,
         "Attack": 65,
         "Defense": 70,
         "SpAttack": 85,
         "SpDefense": 75,
         "Speed": 40
      },
      "species": "Weed Pokémon",
      "description": "From its mouth Gloom drips honey that smells absolutely horrible. Apparently, it loves the horrid stench. It sniffs the noxious fumes and then drools even more of its honey.",
      "evolution": {
         "prev": [
            "43",
            "Level 21"
         ],
         "next": [
            [
               "45",
               "use Leaf Stone"
            ],
            [
               "182",
               "use Sun Stone"
            ]
         ]
      },
      "profile": {
         "height": "0.8 m",
         "weight": "8.6 kg",
         "egg": [
            "Grass"
         ],
         "ability": [
            [
               "Chlorophyll",
               "false"
            ],
            [
               "Stench",
               "true"
            ]
         ],
         "gender": "50:50"
      },
      "image": {
         "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/044.png",
         "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/044.png",
         "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/044.png"
      }
   },
   {
      "id": 45,
      "name": {
         "english": "Vileplume",
         "japanese": "ラフレシア",
         "chinese": "霸王花",
         "french": "Rafflesia"
      },
      "type": [
         "Grass",
         "Poison"
      ],
      "base": {
         "HP": 75,
         "Attack": 80,
         "Defense": 85,
         "SpAttack": 110,
         "SpDefense": 90,
         "Speed": 50
      },
      "species": "Flower Pokémon",
      "description": "Vileplume has the world’s largest petals. They are used to attract prey that are then doused with toxic spores. Once the prey are immobilized, this Pokémon catches and devours them.",
      "evolution": {
         "prev": [
            "44",
            "use Leaf Stone"
         ]
      },
      "profile": {
         "height": "1.2 m",
         "weight": "18.6 kg",
         "egg": [
            "Grass"
         ],
         "ability": [
            [
               "Chlorophyll",
               "false"
            ],
            [
               "Effect Spore",
               "true"
            ]
         ],
         "gender": "50:50"
      },
      "image": {
         "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/045.png",
         "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/045.png",
         "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/045.png"
      }
   },
   {
      "id": 46,
      "name": {
         "english": "Paras",
         "japanese": "パラス",
         "chinese": "派拉斯",
         "french": "Paras"
      },
      "type": [
         "Bug",
         "Grass"
      ],
      "base": {
         "HP": 35,
         "Attack": 70,
         "Defense": 55,
         "SpAttack": 45,
         "SpDefense": 55,
         "Speed": 25
      },
      "species": "Mushroom Pokémon",
      "description": "The mushrooms, known as tochukaso, are controlling the bug. Even if the bug bugs the mushrooms, they tell it to bug off.",
      "evolution": {
         "next": [
            [
               "47",
               "Level 24"
            ]
         ]
      },
      "profile": {
         "height": "0.3 m",
         "weight": "5.4 kg",
         "egg": [
            "Bug",
            "Grass"
         ],
         "ability": [
            [
               "Effect Spore",
               "false"
            ],
            [
               "Dry Skin",
               "false"
            ],
            [
               "Damp",
               "true"
            ]
         ],
         "gender": "50:50"
      },
      "image": {
         "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/046.png",
         "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/046.png",
         "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/046.png"
      }
   },
   {
      "id": 47,
      "name": {
         "english": "Parasect",
         "japanese": "パラセクト",
         "chinese": "派拉斯特",
         "french": "Parasect"
      },
      "type": [
         "Bug",
         "Grass"
      ],
      "base": {
         "HP": 60,
         "Attack": 95,
         "Defense": 80,
         "SpAttack": 60,
         "SpDefense": 80,
         "Speed": 30
      },
      "species": "Mushroom Pokémon",
      "description": "Its poisonous spores are also used in traditional medicine. Apparently, spores produced in Alola are not of very good quality.",
      "evolution": {
         "prev": [
            "46",
            "Level 24"
         ]
      },
      "profile": {
         "height": "1 m",
         "weight": "29.5 kg",
         "egg": [
            "Bug",
            "Grass"
         ],
         "ability": [
            [
               "Effect Spore",
               "false"
            ],
            [
               "Dry Skin",
               "false"
            ],
            [
               "Damp",
               "true"
            ]
         ],
         "gender": "50:50"
      },
      "image": {
         "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/047.png",
         "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/047.png",
         "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/047.png"
      }
   },
   {
      "id": 48,
      "name": {
         "english": "Venonat",
         "japanese": "コンパン",
         "chinese": "毛球",
         "french": "Mimitoss"
      },
      "type": [
         "Bug",
         "Poison"
      ],
      "base": {
         "HP": 60,
         "Attack": 55,
         "Defense": 50,
         "SpAttack": 40,
         "SpDefense": 55,
         "Speed": 45
      },
      "species": "Insect Pokémon",
      "description": "Venonat is said to have evolved with a coat of thin, stiff hair that covers its entire body for protection. It possesses large eyes that never fail to spot even minuscule prey.",
      "evolution": {
         "next": [
            [
               "49",
               "Level 31"
            ]
         ]
      },
      "profile": {
         "height": "1 m",
         "weight": "30 kg",
         "egg": [
            "Bug"
         ],
         "ability": [
            [
               "Compound Eyes",
               "false"
            ],
            [
               "Tinted Lens",
               "false"
            ],
            [
               "Run Away",
               "true"
            ]
         ],
         "gender": "50:50"
      },
      "image": {
         "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/048.png",
         "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/048.png",
         "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/048.png"
      }
   },
   {
      "id": 49,
      "name": {
         "english": "Venomoth",
         "japanese": "モルフォン",
         "chinese": "摩鲁蛾",
         "french": "Aéromite"
      },
      "type": [
         "Bug",
         "Poison"
      ],
      "base": {
         "HP": 70,
         "Attack": 65,
         "Defense": 60,
         "SpAttack": 90,
         "SpDefense": 75,
         "Speed": 90
      },
      "species": "Poison Moth Pokémon",
      "description": "Venomoth is nocturnal—it is a Pokémon that only becomes active at night. Its favorite prey are small insects that gather around streetlights, attracted by the light in the darkness.",
      "evolution": {
         "prev": [
            "48",
            "Level 31"
         ]
      },
      "profile": {
         "height": "1.5 m",
         "weight": "12.5 kg",
         "egg": [
            "Bug"
         ],
         "ability": [
            [
               "Shield Dust",
               "false"
            ],
            [
               "Tinted Lens",
               "false"
            ],
            [
               "Wonder Skin",
               "true"
            ]
         ],
         "gender": "50:50"
      },
      "image": {
         "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/049.png",
         "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/049.png",
         "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/049.png"
      }
   },
   {
      "id": 50,
      "name": {
         "english": "Diglett",
         "japanese": "ディグダ",
         "chinese": "地鼠",
         "french": "Taupiqueur"
      },
      "type": [
         "Ground"
      ],
      "base": {
         "HP": 10,
         "Attack": 55,
         "Defense": 25,
         "SpAttack": 35,
         "SpDefense": 45,
         "Speed": 95
      },
      "species": "Mole Pokémon",
      "description": "Around their crops, farmers plant the kind of tree that Diglett like to eat as a way of getting Diglett to plow the fields for them.",
      "evolution": {
         "next": [
            [
               "51",
               "Level 26"
            ]
         ]
      },
      "profile": {
         "height": "0.2 m",
         "weight": "0.8 kg",
         "egg": [
            "Field"
         ],
         "ability": [
            [
               "Sand Veil",
               "false"
            ],
            [
               "Arena Trap",
               "false"
            ],
            [
               "Sand Force",
               "true"
            ]
         ],
         "gender": "50:50"
      },
      "image": {
         "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/050.png",
         "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/050.png",
         "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/050.png"
      }
   },
   {
      "id": 51,
      "name": {
         "english": "Dugtrio",
         "japanese": "ダグトリオ",
         "chinese": "三地鼠",
         "french": "Triopikeur"
      },
      "type": [
         "Ground"
      ],
      "base": {
         "HP": 35,
         "Attack": 100,
         "Defense": 50,
         "SpAttack": 50,
         "SpDefense": 70,
         "Speed": 120
      },
      "species": "Mole Pokémon",
      "description": "Dugtrio’s heads are sleek and smooth and incredibly hard. It can dig through any soil with its headbutts.",
      "evolution": {
         "prev": [
            "50",
            "Level 26"
         ]
      },
      "profile": {
         "height": "0.7 m",
         "weight": "33.3 kg",
         "egg": [
            "Field"
         ],
         "ability": [
            [
               "Sand Veil",
               "false"
            ],
            [
               "Arena Trap",
               "false"
            ],
            [
               "Sand Force",
               "true"
            ]
         ],
         "gender": "50:50"
      },
      "image": {
         "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/051.png",
         "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/051.png",
         "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/051.png"
      }
   },
   {
      "id": 52,
      "name": {
         "english": "Meowth",
         "japanese": "ニャース",
         "chinese": "喵喵",
         "french": "Miaouss"
      },
      "type": [
         "Normal"
      ],
      "base": {
         "HP": 40,
         "Attack": 45,
         "Defense": 35,
         "SpAttack": 40,
         "SpDefense": 40,
         "Speed": 90
      },
      "species": "Scratch Cat Pokémon",
      "description": "It loves coins, so if you give it one, you can make friends with Meowth easily. But it’s fickle, so you can’t count on that friendship lasting.",
      "evolution": {
         "next": [
            [
               "53",
               "Level 28"
            ]
         ]
      },
      "profile": {
         "height": "0.4 m",
         "weight": "4.2 kg",
         "egg": [
            "Field"
         ],
         "ability": [
            [
               "Pickup",
               "false"
            ],
            [
               "Technician",
               "false"
            ],
            [
               "Unnerve",
               "true"
            ]
         ],
         "gender": "50:50"
      },
      "image": {
         "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/052.png",
         "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/052.png",
         "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/052.png"
      }
   },
   {
      "id": 53,
      "name": {
         "english": "Persian",
         "japanese": "ペルシアン",
         "chinese": "猫老大",
         "french": "Persian"
      },
      "type": [
         "Normal"
      ],
      "base": {
         "HP": 65,
         "Attack": 70,
         "Defense": 60,
         "SpAttack": 65,
         "SpDefense": 65,
         "Speed": 115
      },
      "species": "Classy Cat Pokémon",
      "description": "This Pokémon is popular with rich people. It’s also targeted by hunters who are after the jewel in its forehead.",
      "evolution": {
         "prev": [
            "52",
            "Level 28"
         ]
      },
      "profile": {
         "height": "1 m",
         "weight": "32 kg",
         "egg": [
            "Field"
         ],
         "ability": [
            [
               "Limber",
               "false"
            ],
            [
               "Technician",
               "false"
            ],
            [
               "Unnerve",
               "true"
            ]
         ],
         "gender": "50:50"
      },
      "image": {
         "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/053.png",
         "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/053.png",
         "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/053.png"
      }
   },
   {
      "id": 54,
      "name": {
         "english": "Psyduck",
         "japanese": "コダック",
         "chinese": "可达鸭",
         "french": "Psykokwak"
      },
      "type": [
         "Water"
      ],
      "base": {
         "HP": 50,
         "Attack": 52,
         "Defense": 48,
         "SpAttack": 65,
         "SpDefense": 50,
         "Speed": 55
      },
      "species": "Duck Pokémon",
      "description": "It has been found that its brain cells are 10 times more active when Psyduck is experiencing a headache.",
      "evolution": {
         "next": [
            [
               "55",
               "Level 33"
            ]
         ]
      },
      "profile": {
         "height": "0.8 m",
         "weight": "19.6 kg",
         "egg": [
            "Water 1",
            "Field"
         ],
         "ability": [
            [
               "Damp",
               "false"
            ],
            [
               "Cloud Nine",
               "false"
            ],
            [
               "Swift Swim",
               "true"
            ]
         ],
         "gender": "50:50"
      },
      "image": {
         "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/054.png",
         "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/054.png",
         "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/054.png"
      }
   },
   {
      "id": 55,
      "name": {
         "english": "Golduck",
         "japanese": "ゴルダック",
         "chinese": "哥达鸭",
         "french": "Akwakwak"
      },
      "type": [
         "Water"
      ],
      "base": {
         "HP": 80,
         "Attack": 82,
         "Defense": 78,
         "SpAttack": 95,
         "SpDefense": 80,
         "Speed": 85
      },
      "species": "Duck Pokémon",
      "description": "A professional swimmer, it can continue swimming for two days straight by waving its long tail skillfully.",
      "evolution": {
         "prev": [
            "54",
            "Level 33"
         ]
      },
      "profile": {
         "height": "1.7 m",
         "weight": "76.6 kg",
         "egg": [
            "Water 1",
            "Field"
         ],
         "ability": [
            [
               "Damp",
               "false"
            ],
            [
               "Cloud Nine",
               "false"
            ],
            [
               "Swift Swim",
               "true"
            ]
         ],
         "gender": "50:50"
      },
      "image": {
         "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/055.png",
         "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/055.png",
         "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/055.png"
      }
   },
   {
      "id": 56,
      "name": {
         "english": "Mankey",
         "japanese": "マンキー",
         "chinese": "猴怪",
         "french": "Férosinge"
      },
      "type": [
         "Fighting"
      ],
      "base": {
         "HP": 40,
         "Attack": 80,
         "Defense": 35,
         "SpAttack": 35,
         "SpDefense": 45,
         "Speed": 70
      },
      "species": "Pig Monkey Pokémon",
      "description": "If one gets angry, all the others around it will get angry, so silence is a rare visitor in a troop of Mankey.",
      "evolution": {
         "next": [
            [
               "57",
               "Level 28"
            ]
         ]
      },
      "profile": {
         "height": "0.5 m",
         "weight": "28 kg",
         "egg": [
            "Field"
         ],
         "ability": [
            [
               "Vital Spirit",
               "false"
            ],
            [
               "Anger Point",
               "false"
            ],
            [
               "Defiant",
               "true"
            ]
         ],
         "gender": "50:50"
      },
      "image": {
         "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/056.png",
         "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/056.png",
         "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/056.png"
      }
   },
   {
      "id": 57,
      "name": {
         "english": "Primeape",
         "japanese": "オコリザル",
         "chinese": "火暴猴",
         "french": "Colossinge"
      },
      "type": [
         "Fighting"
      ],
      "base": {
         "HP": 65,
         "Attack": 105,
         "Defense": 60,
         "SpAttack": 60,
         "SpDefense": 70,
         "Speed": 95
      },
      "species": "Pig Monkey Pokémon",
      "description": "The blood vessels in its brain are sturdier than those of other Pokémon, so it can stay healthy despite its constant raging.",
      "evolution": {
         "prev": [
            "56",
            "Level 28"
         ]
      },
      "profile": {
         "height": "1 m",
         "weight": "32 kg",
         "egg": [
            "Field"
         ],
         "ability": [
            [
               "Vital Spirit",
               "false"
            ],
            [
               "Anger Point",
               "false"
            ],
            [
               "Defiant",
               "true"
            ]
         ],
         "gender": "50:50"
      },
      "image": {
         "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/057.png",
         "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/057.png",
         "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/057.png"
      }
   },
   {
      "id": 58,
      "name": {
         "english": "Growlithe",
         "japanese": "ガーディ",
         "chinese": "卡蒂狗",
         "french": "Caninos"
      },
      "type": [
         "Fire"
      ],
      "base": {
         "HP": 55,
         "Attack": 70,
         "Defense": 45,
         "SpAttack": 70,
         "SpDefense": 50,
         "Speed": 60
      },
      "species": "Puppy Pokémon",
      "description": "It has lived alongside humans since ages ago. Its bones have been found in excavations of ruins from the Stone Age.",
      "evolution": {
         "next": [
            [
               "59",
               "use Fire Stone"
            ]
         ]
      },
      "profile": {
         "height": "0.7 m",
         "weight": "19 kg",
         "egg": [
            "Field"
         ],
         "ability": [
            [
               "Intimidate",
               "false"
            ],
            [
               "Flash Fire",
               "false"
            ],
            [
               "Justified",
               "true"
            ]
         ],
         "gender": "75:25"
      },
      "image": {
         "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/058.png",
         "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/058.png",
         "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/058.png"
      }
   },
   {
      "id": 59,
      "name": {
         "english": "Arcanine",
         "japanese": "ウインディ",
         "chinese": "风速狗",
         "french": "Arcanin"
      },
      "type": [
         "Fire"
      ],
      "base": {
         "HP": 90,
         "Attack": 110,
         "Defense": 80,
         "SpAttack": 100,
         "SpDefense": 80,
         "Speed": 95
      },
      "species": "Legendary Pokémon",
      "description": "There are so many old tales about them that they’re called legendary Pokémon, but there are way more of them around than you’d expect.",
      "evolution": {
         "prev": [
            "58",
            "use Fire Stone"
         ]
      },
      "profile": {
         "height": "1.9 m",
         "weight": "155 kg",
         "egg": [
            "Field"
         ],
         "ability": [
            [
               "Intimidate",
               "false"
            ],
            [
               "Flash Fire",
               "false"
            ],
            [
               "Justified",
               "true"
            ]
         ],
         "gender": "75:25"
      },
      "image": {
         "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/059.png",
         "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/059.png",
         "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/059.png"
      }
   },
   {
      "id": 60,
      "name": {
         "english": "Poliwag",
         "japanese": "ニョロモ",
         "chinese": "蚊香蝌蚪",
         "french": "Ptitard"
      },
      "type": [
         "Water"
      ],
      "base": {
         "HP": 40,
         "Attack": 50,
         "Defense": 40,
         "SpAttack": 40,
         "SpDefense": 40,
         "Speed": 90
      },
      "species": "Tadpole Pokémon",
      "description": "The direction of the swirl on their stomachs differs depending on where they live. Poliwag aficionados can tell them apart at a glance.",
      "evolution": {
         "next": [
            [
               "61",
               "Level 25"
            ]
         ]
      },
      "profile": {
         "height": "0.6 m",
         "weight": "12.4 kg",
         "egg": [
            "Water 1"
         ],
         "ability": [
            [
               "Water Absorb",
               "false"
            ],
            [
               "Damp",
               "false"
            ],
            [
               "Swift Swim",
               "true"
            ]
         ],
         "gender": "50:50"
      },
      "image": {
         "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/060.png",
         "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/060.png",
         "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/060.png"
      }
   },
   {
      "id": 61,
      "name": {
         "english": "Poliwhirl",
         "japanese": "ニョロゾ",
         "chinese": "蚊香君",
         "french": "Têtarte"
      },
      "type": [
         "Water"
      ],
      "base": {
         "HP": 65,
         "Attack": 65,
         "Defense": 65,
         "SpAttack": 50,
         "SpDefense": 50,
         "Speed": 90
      },
      "species": "Tadpole Pokémon",
      "description": "Its health suffers when its skin dries out, so be sure to moisturize it diligently.",
      "evolution": {
         "prev": [
            "60",
            "Level 25"
         ],
         "next": [
            [
               "62",
               "use Water Stone"
            ],
            [
               "186",
               "trade holding Kings Rock"
            ]
         ]
      },
      "profile": {
         "height": "1 m",
         "weight": "20 kg",
         "egg": [
            "Water 1"
         ],
         "ability": [
            [
               "Water Absorb",
               "false"
            ],
            [
               "Damp",
               "false"
            ],
            [
               "Swift Swim",
               "true"
            ]
         ],
         "gender": "50:50"
      },
      "image": {
         "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/061.png",
         "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/061.png",
         "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/061.png"
      }
   },
   {
      "id": 62,
      "name": {
         "english": "Poliwrath",
         "japanese": "ニョロボン",
         "chinese": "蚊香泳士",
         "french": "Tartard"
      },
      "type": [
         "Water",
         "Fighting"
      ],
      "base": {
         "HP": 90,
         "Attack": 95,
         "Defense": 95,
         "SpAttack": 70,
         "SpDefense": 90,
         "Speed": 70
      },
      "species": "Tadpole Pokémon",
      "description": "The muscles it has developed through swimming are thick and powerful. When it lands a square punch, it can turn huge boulders to dust.",
      "evolution": {
         "prev": [
            "61",
            "use Water Stone"
         ]
      },
      "profile": {
         "height": "1.3 m",
         "weight": "54 kg",
         "egg": [
            "Water 1"
         ],
         "ability": [
            [
               "Water Absorb",
               "false"
            ],
            [
               "Damp",
               "false"
            ],
            [
               "Swift Swim",
               "true"
            ]
         ],
         "gender": "50:50"
      },
      "image": {
         "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/062.png",
         "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/062.png",
         "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/062.png"
      }
   },
   {
      "id": 63,
      "name": {
         "english": "Abra",
         "japanese": "ケーシィ",
         "chinese": "凯西",
         "french": "Abra"
      },
      "type": [
         "Psychic"
      ],
      "base": {
         "HP": 25,
         "Attack": 20,
         "Defense": 15,
         "SpAttack": 105,
         "SpDefense": 55,
         "Speed": 90
      },
      "species": "Psi Pokémon",
      "description": "It can read others’ minds and will teleport away when danger approaches. You must clear your mind if you want to catch it.",
      "evolution": {
         "next": [
            [
               "64",
               "Level 16"
            ]
         ]
      },
      "profile": {
         "height": "0.9 m",
         "weight": "19.5 kg",
         "egg": [
            "Human-Like"
         ],
         "ability": [
            [
               "Synchronize",
               "false"
            ],
            [
               "Inner Focus",
               "false"
            ],
            [
               "Magic Guard",
               "true"
            ]
         ],
         "gender": "75:25"
      },
      "image": {
         "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/063.png",
         "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/063.png",
         "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/063.png"
      }
   },
   {
      "id": 64,
      "name": {
         "english": "Kadabra",
         "japanese": "ユンゲラー",
         "chinese": "勇基拉",
         "french": "Kadabra"
      },
      "type": [
         "Psychic"
      ],
      "base": {
         "HP": 40,
         "Attack": 35,
         "Defense": 30,
         "SpAttack": 120,
         "SpDefense": 70,
         "Speed": 105
      },
      "species": "Psi Pokémon",
      "description": "It possesses strong mental capabilities, but its psychic powers are halved when it’s not holding a silver spoon.",
      "evolution": {
         "prev": [
            "63",
            "Level 16"
         ],
         "next": [
            [
               "65",
               "Trade"
            ]
         ]
      },
      "profile": {
         "height": "1.3 m",
         "weight": "56.5 kg",
         "egg": [
            "Human-Like"
         ],
         "ability": [
            [
               "Synchronize",
               "false"
            ],
            [
               "Inner Focus",
               "false"
            ],
            [
               "Magic Guard",
               "true"
            ]
         ],
         "gender": "75:25"
      },
      "image": {
         "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/064.png",
         "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/064.png",
         "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/064.png"
      }
   },
   {
      "id": 65,
      "name": {
         "english": "Alakazam",
         "japanese": "フーディン",
         "chinese": "胡地",
         "french": "Alakazam"
      },
      "type": [
         "Psychic"
      ],
      "base": {
         "HP": 55,
         "Attack": 50,
         "Defense": 45,
         "SpAttack": 135,
         "SpDefense": 95,
         "Speed": 120
      },
      "species": "Psi Pokémon",
      "description": "If it trusts someone deeply, it will let them have one of its spoons. Anything you eat with that spoon is apparently delicious.",
      "evolution": {
         "prev": [
            "64",
            "Trade"
         ]
      },
      "profile": {
         "height": "1.5 m",
         "weight": "48 kg",
         "egg": [
            "Human-Like"
         ],
         "ability": [
            [
               "Synchronize",
               "false"
            ],
            [
               "Inner Focus",
               "false"
            ],
            [
               "Magic Guard",
               "true"
            ]
         ],
         "gender": "75:25"
      },
      "image": {
         "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/065.png",
         "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/065.png",
         "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/065.png"
      }
   },
   {
      "id": 66,
      "name": {
         "english": "Machop",
         "japanese": "ワンリキー",
         "chinese": "腕力",
         "french": "Machoc"
      },
      "type": [
         "Fighting"
      ],
      "base": {
         "HP": 70,
         "Attack": 80,
         "Defense": 50,
         "SpAttack": 35,
         "SpDefense": 35,
         "Speed": 35
      },
      "species": "Superpower Pokémon",
      "description": "It likes food that’s highly nutritious because its instincts drive it to build muscle efficiently.",
      "evolution": {
         "next": [
            [
               "67",
               "Level 28"
            ]
         ]
      },
      "profile": {
         "height": "0.8 m",
         "weight": "19.5 kg",
         "egg": [
            "Human-Like"
         ],
         "ability": [
            [
               "Guts",
               "false"
            ],
            [
               "No Guard",
               "false"
            ],
            [
               "Steadfast",
               "true"
            ]
         ],
         "gender": "75:25"
      },
      "image": {
         "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/066.png",
         "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/066.png",
         "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/066.png"
      }
   },
   {
      "id": 67,
      "name": {
         "english": "Machoke",
         "japanese": "ゴーリキー",
         "chinese": "豪力",
         "french": "Machopeur"
      },
      "type": [
         "Fighting"
      ],
      "base": {
         "HP": 80,
         "Attack": 100,
         "Defense": 70,
         "SpAttack": 50,
         "SpDefense": 60,
         "Speed": 45
      },
      "species": "Superpower Pokémon",
      "description": "A popular motif for sculptures, its incredibly well-developed muscles have captured the imagination of many an artist.",
      "evolution": {
         "prev": [
            "66",
            "Level 28"
         ],
         "next": [
            [
               "68",
               "Trade"
            ]
         ]
      },
      "profile": {
         "height": "1.5 m",
         "weight": "70.5 kg",
         "egg": [
            "Human-Like"
         ],
         "ability": [
            [
               "Guts",
               "false"
            ],
            [
               "No Guard",
               "false"
            ],
            [
               "Steadfast",
               "true"
            ]
         ],
         "gender": "75:25"
      },
      "image": {
         "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/067.png",
         "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/067.png",
         "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/067.png"
      }
   },
   {
      "id": 68,
      "name": {
         "english": "Machamp",
         "japanese": "カイリキー",
         "chinese": "怪力",
         "french": "Mackogneur"
      },
      "type": [
         "Fighting"
      ],
      "base": {
         "HP": 90,
         "Attack": 130,
         "Defense": 80,
         "SpAttack": 65,
         "SpDefense": 85,
         "Speed": 55
      },
      "species": "Superpower Pokémon",
      "description": "With four arms, it can attack and defend simultaneously. It’s said to have mastered every martial art in the world.",
      "evolution": {
         "prev": [
            "67",
            "Trade"
         ]
      },
      "profile": {
         "height": "1.6 m",
         "weight": "130 kg",
         "egg": [
            "Human-Like"
         ],
         "ability": [
            [
               "Guts",
               "false"
            ],
            [
               "No Guard",
               "false"
            ],
            [
               "Steadfast",
               "true"
            ]
         ],
         "gender": "75:25"
      },
      "image": {
         "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/068.png",
         "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/068.png",
         "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/068.png"
      }
   },
   {
      "id": 69,
      "name": {
         "english": "Bellsprout",
         "japanese": "マダツボミ",
         "chinese": "喇叭芽",
         "french": "Chétiflor"
      },
      "type": [
         "Grass",
         "Poison"
      ],
      "base": {
         "HP": 50,
         "Attack": 75,
         "Defense": 35,
         "SpAttack": 70,
         "SpDefense": 30,
         "Speed": 40
      },
      "species": "Flower Pokémon",
      "description": "Bellsprout’s thin and flexible body lets it bend and sway to avoid any attack, however strong it may be. From its mouth, this Pokémon spits a corrosive fluid that melts even iron.",
      "evolution": {
         "next": [
            [
               "70",
               "Level 21"
            ]
         ]
      },
      "profile": {
         "height": "0.7 m",
         "weight": "4 kg",
         "egg": [
            "Grass"
         ],
         "ability": [
            [
               "Chlorophyll",
               "false"
            ],
            [
               "Gluttony",
               "true"
            ]
         ],
         "gender": "50:50"
      },
      "image": {
         "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/069.png",
         "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/069.png",
         "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/069.png"
      }
   },
   {
      "id": 70,
      "name": {
         "english": "Weepinbell",
         "japanese": "ウツドン",
         "chinese": "口呆花",
         "french": "Boustiflor"
      },
      "type": [
         "Grass",
         "Poison"
      ],
      "base": {
         "HP": 65,
         "Attack": 90,
         "Defense": 50,
         "SpAttack": 85,
         "SpDefense": 45,
         "Speed": 55
      },
      "species": "Flycatcher Pokémon",
      "description": "Weepinbell has a large hook on its rear end. At night, the Pokémon hooks on to a tree branch and goes to sleep. If it moves around in its sleep, it may wake up to find itself on the ground.",
      "evolution": {
         "prev": [
            "69",
            "Level 21"
         ],
         "next": [
            [
               "71",
               "use Leaf Stone"
            ]
         ]
      },
      "profile": {
         "height": "1 m",
         "weight": "6.4 kg",
         "egg": [
            "Grass"
         ],
         "ability": [
            [
               "Chlorophyll",
               "false"
            ],
            [
               "Gluttony",
               "true"
            ]
         ],
         "gender": "50:50"
      },
      "image": {
         "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/070.png",
         "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/070.png",
         "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/070.png"
      }
   },
   {
      "id": 71,
      "name": {
         "english": "Victreebel",
         "japanese": "ウツボット",
         "chinese": "大食花",
         "french": "Empiflor"
      },
      "type": [
         "Grass",
         "Poison"
      ],
      "base": {
         "HP": 80,
         "Attack": 105,
         "Defense": 65,
         "SpAttack": 100,
         "SpDefense": 70,
         "Speed": 70
      },
      "species": "Flycatcher Pokémon",
      "description": "Victreebel has a long vine that extends from its head. This vine is waved and flicked about as if it were an animal to attract prey. When an unsuspecting prey draws near, this Pokémon swallows it whole.",
      "evolution": {
         "prev": [
            "70",
            "use Leaf Stone"
         ]
      },
      "profile": {
         "height": "1.7 m",
         "weight": "15.5 kg",
         "egg": [
            "Grass"
         ],
         "ability": [
            [
               "Chlorophyll",
               "false"
            ],
            [
               "Gluttony",
               "true"
            ]
         ],
         "gender": "50:50"
      },
      "image": {
         "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/071.png",
         "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/071.png",
         "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/071.png"
      }
   },
   {
      "id": 72,
      "name": {
         "english": "Tentacool",
         "japanese": "メノクラゲ",
         "chinese": "玛瑙水母",
         "french": "Tentacool"
      },
      "type": [
         "Water",
         "Poison"
      ],
      "base": {
         "HP": 40,
         "Attack": 40,
         "Defense": 35,
         "SpAttack": 50,
         "SpDefense": 100,
         "Speed": 70
      },
      "species": "Jellyfish Pokémon",
      "description": "Its body is 99% water. The remaining 1% contains the organ that makes its poison.",
      "evolution": {
         "next": [
            [
               "73",
               "Level 30"
            ]
         ]
      },
      "profile": {
         "height": "0.9 m",
         "weight": "45.5 kg",
         "egg": [
            "Water 3"
         ],
         "ability": [
            [
               "Clear Body",
               "false"
            ],
            [
               "Liquid Ooze",
               "false"
            ],
            [
               "Rain Dish",
               "true"
            ]
         ],
         "gender": "50:50"
      },
      "image": {
         "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/072.png",
         "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/072.png",
         "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/072.png"
      }
   },
   {
      "id": 73,
      "name": {
         "english": "Tentacruel",
         "japanese": "ドククラゲ",
         "chinese": "毒刺水母",
         "french": "Tentacruel"
      },
      "type": [
         "Water",
         "Poison"
      ],
      "base": {
         "HP": 80,
         "Attack": 70,
         "Defense": 65,
         "SpAttack": 80,
         "SpDefense": 120,
         "Speed": 100
      },
      "species": "Jellyfish Pokémon",
      "description": "It communicates with others of its kind by lighting up the red orbs on its head. When the orbs are blinking, it’s a warning sign.",
      "evolution": {
         "prev": [
            "72",
            "Level 30"
         ]
      },
      "profile": {
         "height": "1.6 m",
         "weight": "55 kg",
         "egg": [
            "Water 3"
         ],
         "ability": [
            [
               "Clear Body",
               "false"
            ],
            [
               "Liquid Ooze",
               "false"
            ],
            [
               "Rain Dish",
               "true"
            ]
         ],
         "gender": "50:50"
      },
      "image": {
         "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/073.png",
         "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/073.png",
         "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/073.png"
      }
   },
   {
      "id": 74,
      "name": {
         "english": "Geodude",
         "japanese": "イシツブテ",
         "chinese": "小拳石",
         "french": "Racaillou"
      },
      "type": [
         "Rock",
         "Ground"
      ],
      "base": {
         "HP": 40,
         "Attack": 80,
         "Defense": 100,
         "SpAttack": 30,
         "SpDefense": 30,
         "Speed": 20
      },
      "species": "Rock Pokémon",
      "description": "It uses both hands to climb precipitous cliffs. People who see it in action have been known to take up bouldering.",
      "evolution": {
         "next": [
            [
               "75",
               "Level 25"
            ]
         ]
      },
      "profile": {
         "height": "0.4 m",
         "weight": "20 kg",
         "egg": [
            "Mineral"
         ],
         "ability": [
            [
               "Rock Head",
               "false"
            ],
            [
               "Sturdy",
               "false"
            ],
            [
               "Sand Veil",
               "true"
            ]
         ],
         "gender": "50:50"
      },
      "image": {
         "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/074.png",
         "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/074.png",
         "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/074.png"
      }
   },
   {
      "id": 75,
      "name": {
         "english": "Graveler",
         "japanese": "ゴローン",
         "chinese": "隆隆石",
         "french": "Gravalanch"
      },
      "type": [
         "Rock",
         "Ground"
      ],
      "base": {
         "HP": 55,
         "Attack": 95,
         "Defense": 115,
         "SpAttack": 45,
         "SpDefense": 45,
         "Speed": 35
      },
      "species": "Rock Pokémon",
      "description": "It travels by rolling down cliffs. If it falls into a river, it will explode with its last gasp.",
      "evolution": {
         "prev": [
            "74",
            "Level 25"
         ],
         "next": [
            [
               "76",
               "Trade"
            ]
         ]
      },
      "profile": {
         "height": "1 m",
         "weight": "105 kg",
         "egg": [
            "Mineral"
         ],
         "ability": [
            [
               "Rock Head",
               "false"
            ],
            [
               "Sturdy",
               "false"
            ],
            [
               "Sand Veil",
               "true"
            ]
         ],
         "gender": "50:50"
      },
      "image": {
         "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/075.png",
         "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/075.png",
         "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/075.png"
      }
   },
   {
      "id": 76,
      "name": {
         "english": "Golem",
         "japanese": "ゴローニャ",
         "chinese": "隆隆岩",
         "french": "Grolem"
      },
      "type": [
         "Rock",
         "Ground"
      ],
      "base": {
         "HP": 80,
         "Attack": 120,
         "Defense": 130,
         "SpAttack": 55,
         "SpDefense": 65,
         "Speed": 45
      },
      "species": "Megaton Pokémon",
      "description": "It detonates its own body. The power from that explosion can propel it up steep mountain paths with amazing speed.",
      "evolution": {
         "prev": [
            "75",
            "Trade"
         ]
      },
      "profile": {
         "height": "1.4 m",
         "weight": "300 kg",
         "egg": [
            "Mineral"
         ],
         "ability": [
            [
               "Rock Head",
               "false"
            ],
            [
               "Sturdy",
               "false"
            ],
            [
               "Sand Veil",
               "true"
            ]
         ],
         "gender": "50:50"
      },
      "image": {
         "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/076.png",
         "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/076.png",
         "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/076.png"
      }
   },
   {
      "id": 77,
      "name": {
         "english": "Ponyta",
         "japanese": "ポニータ",
         "chinese": "小火马",
         "french": "Ponyta"
      },
      "type": [
         "Fire"
      ],
      "base": {
         "HP": 50,
         "Attack": 85,
         "Defense": 55,
         "SpAttack": 65,
         "SpDefense": 65,
         "Speed": 90
      },
      "species": "Fire Horse Pokémon",
      "description": "Ponyta is very weak at birth. It can barely stand up. This Pokémon becomes stronger by stumbling and falling to keep up with its parent.",
      "evolution": {
         "next": [
            [
               "78",
               "Level 40"
            ]
         ]
      },
      "profile": {
         "height": "1 m",
         "weight": "30 kg",
         "egg": [
            "Field"
         ],
         "ability": [
            [
               "Run Away",
               "false"
            ],
            [
               "Flash Fire",
               "false"
            ],
            [
               "Flame Body",
               "true"
            ]
         ],
         "gender": "50:50"
      },
      "image": {
         "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/077.png",
         "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/077.png",
         "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/077.png"
      }
   },
   {
      "id": 78,
      "name": {
         "english": "Rapidash",
         "japanese": "ギャロップ",
         "chinese": "烈焰马",
         "french": "Galopa"
      },
      "type": [
         "Fire"
      ],
      "base": {
         "HP": 65,
         "Attack": 100,
         "Defense": 70,
         "SpAttack": 80,
         "SpDefense": 80,
         "Speed": 105
      },
      "species": "Fire Horse Pokémon",
      "description": "Rapidash usually can be seen casually cantering in the fields and plains. However, when this Pokémon turns serious, its fiery manes flare and blaze as it gallops its way up to 150 mph.",
      "evolution": {
         "prev": [
            "77",
            "Level 40"
         ]
      },
      "profile": {
         "height": "1.7 m",
         "weight": "95 kg",
         "egg": [
            "Field"
         ],
         "ability": [
            [
               "Run Away",
               "false"
            ],
            [
               "Flash Fire",
               "false"
            ],
            [
               "Flame Body",
               "true"
            ]
         ],
         "gender": "50:50"
      },
      "image": {
         "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/078.png",
         "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/078.png",
         "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/078.png"
      }
   },
   {
      "id": 79,
      "name": {
         "english": "Slowpoke",
         "japanese": "ヤドン",
         "chinese": "呆呆兽",
         "french": "Ramoloss"
      },
      "type": [
         "Water",
         "Psychic"
      ],
      "base": {
         "HP": 90,
         "Attack": 65,
         "Defense": 65,
         "SpAttack": 40,
         "SpDefense": 40,
         "Speed": 15
      },
      "species": "Dopey Pokémon",
      "description": "Although their tails, which fall off naturally, can easily be found lying around, they’re a precious ingredient for cooking.",
      "evolution": {
         "next": [
            [
               "80",
               "Level 37"
            ],
            [
               "199",
               "trade holding Kings Rock"
            ]
         ]
      },
      "profile": {
         "height": "1.2 m",
         "weight": "36 kg",
         "egg": [
            "Monster",
            "Water 1"
         ],
         "ability": [
            [
               "Oblivious",
               "false"
            ],
            [
               "Own Tempo",
               "false"
            ],
            [
               "Regenerator",
               "true"
            ]
         ],
         "gender": "50:50"
      },
      "image": {
         "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/079.png",
         "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/079.png",
         "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/079.png"
      }
   },
   {
      "id": 80,
      "name": {
         "english": "Slowbro",
         "japanese": "ヤドラン",
         "chinese": "呆壳兽",
         "french": "Flagadoss"
      },
      "type": [
         "Water",
         "Psychic"
      ],
      "base": {
         "HP": 95,
         "Attack": 75,
         "Defense": 110,
         "SpAttack": 100,
         "SpDefense": 80,
         "Speed": 30
      },
      "species": "Hermit Crab Pokémon",
      "description": "Shellder, in its greed to suck out more and more sweetness from Slowbro’s tail, has metamorphosed into a spiral-shaped shell.",
      "evolution": {
         "prev": [
            "79",
            "Level 37"
         ]
      },
      "profile": {
         "height": "1.6 m",
         "weight": "78.5 kg",
         "egg": [
            "Monster",
            "Water 1"
         ],
         "ability": [
            [
               "Oblivious",
               "false"
            ],
            [
               "Own Tempo",
               "false"
            ],
            [
               "Regenerator",
               "true"
            ]
         ],
         "gender": "50:50"
      },
      "image": {
         "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/080.png",
         "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/080.png",
         "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/080.png"
      }
   },
   {
      "id": 81,
      "name": {
         "english": "Magnemite",
         "japanese": "コイル",
         "chinese": "小磁怪",
         "french": "Magnéti"
      },
      "type": [
         "Electric",
         "Steel"
      ],
      "base": {
         "HP": 25,
         "Attack": 35,
         "Defense": 70,
         "SpAttack": 95,
         "SpDefense": 55,
         "Speed": 45
      },
      "species": "Magnet Pokémon",
      "description": "Perhaps because electrical lines are often buried these days, the number of Magnemite attacks on power plants has increased.",
      "evolution": {
         "next": [
            [
               "82",
               "Level 30"
            ]
         ]
      },
      "profile": {
         "height": "0.3 m",
         "weight": "6 kg",
         "egg": [
            "Mineral"
         ],
         "ability": [
            [
               "Magnet Pull",
               "false"
            ],
            [
               "Sturdy",
               "false"
            ],
            [
               "Analytic",
               "true"
            ]
         ],
         "gender": "Genderless"
      },
      "image": {
         "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/081.png",
         "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/081.png",
         "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/081.png"
      }
   },
   {
      "id": 82,
      "name": {
         "english": "Magneton",
         "japanese": "レアコイル",
         "chinese": "三合一磁怪",
         "french": "Magnéton"
      },
      "type": [
         "Electric",
         "Steel"
      ],
      "base": {
         "HP": 50,
         "Attack": 60,
         "Defense": 95,
         "SpAttack": 120,
         "SpDefense": 70,
         "Speed": 70
      },
      "species": "Magnet Pokémon",
      "description": "When rain clouds form, many Magneton gather in high places to wait for lightning to strike.",
      "evolution": {
         "prev": [
            "81",
            "Level 30"
         ],
         "next": [
            [
               "462",
               "level up in a Magnetic Field area"
            ]
         ]
      },
      "profile": {
         "height": "1 m",
         "weight": "60 kg",
         "egg": [
            "Mineral"
         ],
         "ability": [
            [
               "Magnet Pull",
               "false"
            ],
            [
               "Sturdy",
               "false"
            ],
            [
               "Analytic",
               "true"
            ]
         ],
         "gender": "Genderless"
      },
      "image": {
         "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/082.png",
         "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/082.png",
         "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/082.png"
      }
   },
   {
      "id": 83,
      "name": {
         "english": "Farfetch'd",
         "japanese": "カモネギ",
         "chinese": "大葱鸭",
         "french": "Canarticho"
      },
      "type": [
         "Normal",
         "Flying"
      ],
      "base": {
         "HP": 52,
         "Attack": 90,
         "Defense": 55,
         "SpAttack": 58,
         "SpDefense": 62,
         "Speed": 60
      },
      "species": "Wild Duck Pokémon",
      "description": "Farfetch’d is always seen with a stalk from a plant of some sort. Apparently, there are good stalks and bad stalks. This Pokémon has been known to fight with others over stalks.",
      "evolution": {},
      "profile": {
         "height": "0.8 m",
         "weight": "15 kg",
         "egg": [
            "Flying",
            "Field"
         ],
         "ability": [
            [
               "Keen Eye",
               "false"
            ],
            [
               "Inner Focus",
               "false"
            ],
            [
               "Defiant",
               "true"
            ]
         ],
         "gender": "50:50"
      },
      "image": {
         "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/083.png",
         "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/083.png",
         "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/083.png"
      }
   },
   {
      "id": 84,
      "name": {
         "english": "Doduo",
         "japanese": "ドードー",
         "chinese": "嘟嘟",
         "french": "Doduo"
      },
      "type": [
         "Normal",
         "Flying"
      ],
      "base": {
         "HP": 35,
         "Attack": 85,
         "Defense": 45,
         "SpAttack": 35,
         "SpDefense": 35,
         "Speed": 75
      },
      "species": "Twin Bird Pokémon",
      "description": "Doduo’s two heads contain completely identical brains. A scientific study reported that on rare occasions, there will be examples of this Pokémon possessing different sets of brains.",
      "evolution": {
         "next": [
            [
               "85",
               "Level 31"
            ]
         ]
      },
      "profile": {
         "height": "1.4 m",
         "weight": "39.2 kg",
         "egg": [
            "Flying"
         ],
         "ability": [
            [
               "Run Away",
               "false"
            ],
            [
               "Early Bird",
               "false"
            ],
            [
               "Tangled Feet",
               "true"
            ]
         ],
         "gender": "50:50"
      },
      "image": {
         "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/084.png",
         "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/084.png",
         "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/084.png"
      }
   },
   {
      "id": 85,
      "name": {
         "english": "Dodrio",
         "japanese": "ドードリオ",
         "chinese": "嘟嘟利",
         "french": "Dodrio"
      },
      "type": [
         "Normal",
         "Flying"
      ],
      "base": {
         "HP": 60,
         "Attack": 110,
         "Defense": 70,
         "SpAttack": 60,
         "SpDefense": 60,
         "Speed": 110
      },
      "species": "Triple Bird Pokémon",
      "description": "Apparently, the heads aren’t the only parts of the body that Dodrio has three of. It has three sets of hearts and lungs as well, so it is capable of running long distances without rest.",
      "evolution": {
         "prev": [
            "84",
            "Level 31"
         ]
      },
      "profile": {
         "height": "1.8 m",
         "weight": "85.2 kg",
         "egg": [
            "Flying"
         ],
         "ability": [
            [
               "Run Away",
               "false"
            ],
            [
               "Early Bird",
               "false"
            ],
            [
               "Tangled Feet",
               "true"
            ]
         ],
         "gender": "50:50"
      },
      "image": {
         "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/085.png",
         "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/085.png",
         "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/085.png"
      }
   },
   {
      "id": 86,
      "name": {
         "english": "Seel",
         "japanese": "パウワウ",
         "chinese": "小海狮",
         "french": "Otaria"
      },
      "type": [
         "Water"
      ],
      "base": {
         "HP": 65,
         "Attack": 45,
         "Defense": 55,
         "SpAttack": 45,
         "SpDefense": 70,
         "Speed": 45
      },
      "species": "Sea Lion Pokémon",
      "description": "Thanks to its thick fat, cold seas don’t bother it at all, but it gets tired pretty easily in warm waters.",
      "evolution": {
         "next": [
            [
               "87",
               "Level 34"
            ]
         ]
      },
      "profile": {
         "height": "1.1 m",
         "weight": "90 kg",
         "egg": [
            "Water 1",
            "Field"
         ],
         "ability": [
            [
               "Thick Fat",
               "false"
            ],
            [
               "Hydration",
               "false"
            ],
            [
               "Ice Body",
               "true"
            ]
         ],
         "gender": "50:50"
      },
      "image": {
         "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/086.png",
         "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/086.png",
         "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/086.png"
      }
   },
   {
      "id": 87,
      "name": {
         "english": "Dewgong",
         "japanese": "ジュゴン",
         "chinese": "白海狮",
         "french": "Lamantine"
      },
      "type": [
         "Water",
         "Ice"
      ],
      "base": {
         "HP": 90,
         "Attack": 70,
         "Defense": 80,
         "SpAttack": 70,
         "SpDefense": 95,
         "Speed": 70
      },
      "species": "Sea Lion Pokémon",
      "description": "It sunbathes on the beach after meals. The rise in its body temperature helps its digestion.",
      "evolution": {
         "prev": [
            "86",
            "Level 34"
         ]
      },
      "profile": {
         "height": "1.7 m",
         "weight": "120 kg",
         "egg": [
            "Water 1",
            "Field"
         ],
         "ability": [
            [
               "Thick Fat",
               "false"
            ],
            [
               "Hydration",
               "false"
            ],
            [
               "Ice Body",
               "true"
            ]
         ],
         "gender": "50:50"
      },
      "image": {
         "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/087.png",
         "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/087.png",
         "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/087.png"
      }
   },
   {
      "id": 88,
      "name": {
         "english": "Grimer",
         "japanese": "ベトベター",
         "chinese": "臭泥",
         "french": "Tadmorv"
      },
      "type": [
         "Poison"
      ],
      "base": {
         "HP": 80,
         "Attack": 80,
         "Defense": 50,
         "SpAttack": 40,
         "SpDefense": 50,
         "Speed": 25
      },
      "species": "Sludge Pokémon",
      "description": "The wastewater coming from factories is clean these days, so Grimer have nothing to eat. They’re said to be on the verge of extinction.",
      "evolution": {
         "next": [
            [
               "89",
               "Level 38"
            ]
         ]
      },
      "profile": {
         "height": "0.9 m",
         "weight": "30 kg",
         "egg": [
            "Amorphous"
         ],
         "ability": [
            [
               "Stench",
               "false"
            ],
            [
               "Sticky Hold",
               "false"
            ],
            [
               "Poison Touch",
               "true"
            ]
         ],
         "gender": "50:50"
      },
      "image": {
         "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/088.png",
         "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/088.png",
         "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/088.png"
      }
   },
   {
      "id": 89,
      "name": {
         "english": "Muk",
         "japanese": "ベトベトン",
         "chinese": "臭臭泥",
         "french": "Grotadmorv"
      },
      "type": [
         "Poison"
      ],
      "base": {
         "HP": 105,
         "Attack": 105,
         "Defense": 75,
         "SpAttack": 65,
         "SpDefense": 100,
         "Speed": 50
      },
      "species": "Sludge Pokémon",
      "description": "Because they scatter germs everywhere, they’ve long been targeted for extermination, leading to a steep decline in their population.",
      "evolution": {
         "prev": [
            "88",
            "Level 38"
         ]
      },
      "profile": {
         "height": "1.2 m",
         "weight": "30 kg",
         "egg": [
            "Amorphous"
         ],
         "ability": [
            [
               "Stench",
               "false"
            ],
            [
               "Sticky Hold",
               "false"
            ],
            [
               "Poison Touch",
               "true"
            ]
         ],
         "gender": "50:50"
      },
      "image": {
         "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/089.png",
         "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/089.png",
         "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/089.png"
      }
   },
   {
      "id": 90,
      "name": {
         "english": "Shellder",
         "japanese": "シェルダー",
         "chinese": "大舌贝",
         "french": "Kokiyas"
      },
      "type": [
         "Water"
      ],
      "base": {
         "HP": 30,
         "Attack": 65,
         "Defense": 100,
         "SpAttack": 45,
         "SpDefense": 25,
         "Speed": 40
      },
      "species": "Bivalve Pokémon",
      "description": "Even when its shell is closed, its tongue still hangs out. If you give its tongue a good yank, the shock will cause Shellder to open its shell.",
      "evolution": {
         "next": [
            [
               "91",
               "use Water Stone"
            ]
         ]
      },
      "profile": {
         "height": "0.3 m",
         "weight": "4 kg",
         "egg": [
            "Water 3"
         ],
         "ability": [
            [
               "Shell Armor",
               "false"
            ],
            [
               "Skill Link",
               "false"
            ],
            [
               "Overcoat",
               "true"
            ]
         ],
         "gender": "50:50"
      },
      "image": {
         "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/090.png",
         "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/090.png",
         "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/090.png"
      }
   },
   {
      "id": 91,
      "name": {
         "english": "Cloyster",
         "japanese": "パルシェン",
         "chinese": "刺甲贝",
         "french": "Crustabri"
      },
      "type": [
         "Water",
         "Ice"
      ],
      "base": {
         "HP": 50,
         "Attack": 95,
         "Defense": 180,
         "SpAttack": 85,
         "SpDefense": 45,
         "Speed": 70
      },
      "species": "Bivalve Pokémon",
      "description": "Slowpoke tails are its favorite food. It has even been known to come up on land to look for Slowpoke from time to time.",
      "evolution": {
         "prev": [
            "90",
            "use Water Stone"
         ]
      },
      "profile": {
         "height": "1.5 m",
         "weight": "132.5 kg",
         "egg": [
            "Water 3"
         ],
         "ability": [
            [
               "Shell Armor",
               "false"
            ],
            [
               "Skill Link",
               "false"
            ],
            [
               "Overcoat",
               "true"
            ]
         ],
         "gender": "50:50"
      },
      "image": {
         "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/091.png",
         "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/091.png",
         "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/091.png"
      }
   },
   {
      "id": 92,
      "name": {
         "english": "Gastly",
         "japanese": "ゴース",
         "chinese": "鬼斯",
         "french": "Fantominus"
      },
      "type": [
         "Ghost",
         "Poison"
      ],
      "base": {
         "HP": 30,
         "Attack": 35,
         "Defense": 30,
         "SpAttack": 100,
         "SpDefense": 35,
         "Speed": 80
      },
      "species": "Gas Pokémon",
      "description": "Poisonous gas comprises 95% of its body. It’s said that the remaining 5% is made up of the souls of those who died from the gas.",
      "evolution": {
         "next": [
            [
               "93",
               "Level 25"
            ]
         ]
      },
      "profile": {
         "height": "1.3 m",
         "weight": "0.1 kg",
         "egg": [
            "Amorphous"
         ],
         "ability": [
            [
               "Levitate",
               "false"
            ]
         ],
         "gender": "50:50"
      },
      "image": {
         "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/092.png",
         "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/092.png",
         "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/092.png"
      }
   },
   {
      "id": 93,
      "name": {
         "english": "Haunter",
         "japanese": "ゴースト",
         "chinese": "鬼斯通",
         "french": "Spectrum"
      },
      "type": [
         "Ghost",
         "Poison"
      ],
      "base": {
         "HP": 45,
         "Attack": 50,
         "Defense": 45,
         "SpAttack": 115,
         "SpDefense": 55,
         "Speed": 95
      },
      "species": "Gas Pokémon",
      "description": "It’s dangerous to go outside alone on nights when you’re feeling sad. Haunter will catch you, and you won’t be able to go back home.",
      "evolution": {
         "prev": [
            "92",
            "Level 25"
         ],
         "next": [
            [
               "94",
               "Trade"
            ]
         ]
      },
      "profile": {
         "height": "1.6 m",
         "weight": "0.1 kg",
         "egg": [
            "Amorphous"
         ],
         "ability": [
            [
               "Levitate",
               "false"
            ]
         ],
         "gender": "50:50"
      },
      "image": {
         "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/093.png",
         "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/093.png",
         "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/093.png"
      }
   },
   {
      "id": 94,
      "name": {
         "english": "Gengar",
         "japanese": "ゲンガー",
         "chinese": "耿鬼",
         "french": "Ectoplasma"
      },
      "type": [
         "Ghost",
         "Poison"
      ],
      "base": {
         "HP": 60,
         "Attack": 65,
         "Defense": 60,
         "SpAttack": 130,
         "SpDefense": 75,
         "Speed": 110
      },
      "species": "Shadow Pokémon",
      "description": "Even your home isn’t safe. Gengar will lurk in whatever dark corner of a room it can find and wait for its chance to catch its prey.",
      "evolution": {
         "prev": [
            "93",
            "Trade"
         ]
      },
      "profile": {
         "height": "1.5 m",
         "weight": "40.5 kg",
         "egg": [
            "Amorphous"
         ],
         "ability": [
            [
               "Cursed Body",
               "false"
            ]
         ],
         "gender": "50:50"
      },
      "image": {
         "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/094.png",
         "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/094.png",
         "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/094.png"
      }
   },
   {
      "id": 95,
      "name": {
         "english": "Onix",
         "japanese": "イワーク",
         "chinese": "大岩蛇",
         "french": "Onix"
      },
      "type": [
         "Rock",
         "Ground"
      ],
      "base": {
         "HP": 35,
         "Attack": 45,
         "Defense": 160,
         "SpAttack": 30,
         "SpDefense": 45,
         "Speed": 70
      },
      "species": "Rock Snake Pokémon",
      "description": "Onix has a magnet in its brain. It acts as a compass so that this Pokémon does not lose direction while it is tunneling. As it grows older, its body becomes increasingly rounder and smoother.",
      "evolution": {
         "next": [
            [
               "208",
               "trade holding Metal Coat"
            ]
         ]
      },
      "profile": {
         "height": "8.8 m",
         "weight": "210 kg",
         "egg": [
            "Mineral"
         ],
         "ability": [
            [
               "Rock Head",
               "false"
            ],
            [
               "Sturdy",
               "false"
            ],
            [
               "Weak Armor",
               "true"
            ]
         ],
         "gender": "50:50"
      },
      "image": {
         "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/095.png",
         "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/095.png",
         "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/095.png"
      }
   },
   {
      "id": 96,
      "name": {
         "english": "Drowzee",
         "japanese": "スリープ",
         "chinese": "催眠貘",
         "french": "Soporifik"
      },
      "type": [
         "Psychic"
      ],
      "base": {
         "HP": 60,
         "Attack": 48,
         "Defense": 45,
         "SpAttack": 43,
         "SpDefense": 90,
         "Speed": 42
      },
      "species": "Hypnosis Pokémon",
      "description": "It puts its prey to sleep and devours their dreams. It seems that bad dreams taste sour, so Drowzee doesn’t particularly like eating them.",
      "evolution": {
         "next": [
            [
               "97",
               "Level 26"
            ]
         ]
      },
      "profile": {
         "height": "1 m",
         "weight": "32.4 kg",
         "egg": [
            "Human-Like"
         ],
         "ability": [
            [
               "Insomnia",
               "false"
            ],
            [
               "Forewarn",
               "false"
            ],
            [
               "Inner Focus",
               "true"
            ]
         ],
         "gender": "50:50"
      },
      "image": {
         "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/096.png",
         "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/096.png",
         "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/096.png"
      }
   },
   {
      "id": 97,
      "name": {
         "english": "Hypno",
         "japanese": "スリーパー",
         "chinese": "引梦貘人",
         "french": "Hypnomade"
      },
      "type": [
         "Psychic"
      ],
      "base": {
         "HP": 85,
         "Attack": 73,
         "Defense": 70,
         "SpAttack": 73,
         "SpDefense": 115,
         "Speed": 67
      },
      "species": "Hypnosis Pokémon",
      "description": "There are some Hypno that assist doctors with patients who can’t sleep at night in hospitals.",
      "evolution": {
         "prev": [
            "96",
            "Level 26"
         ]
      },
      "profile": {
         "height": "1.6 m",
         "weight": "75.6 kg",
         "egg": [
            "Human-Like"
         ],
         "ability": [
            [
               "Insomnia",
               "false"
            ],
            [
               "Forewarn",
               "false"
            ],
            [
               "Inner Focus",
               "true"
            ]
         ],
         "gender": "50:50"
      },
      "image": {
         "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/097.png",
         "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/097.png",
         "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/097.png"
      }
   },
   {
      "id": 98,
      "name": {
         "english": "Krabby",
         "japanese": "クラブ",
         "chinese": "大钳蟹",
         "french": "Krabby"
      },
      "type": [
         "Water"
      ],
      "base": {
         "HP": 30,
         "Attack": 105,
         "Defense": 90,
         "SpAttack": 25,
         "SpDefense": 25,
         "Speed": 50
      },
      "species": "River Crab Pokémon",
      "description": "Krabby live on beaches, burrowed inside holes dug into the sand. On sandy beaches with little in the way of food, these Pokémon can be seen squabbling with each other over territory.",
      "evolution": {
         "next": [
            [
               "99",
               "Level 28"
            ]
         ]
      },
      "profile": {
         "height": "0.4 m",
         "weight": "6.5 kg",
         "egg": [
            "Water 3"
         ],
         "ability": [
            [
               "Hyper Cutter",
               "false"
            ],
            [
               "Shell Armor",
               "false"
            ],
            [
               "Sheer Force",
               "true"
            ]
         ],
         "gender": "50:50"
      },
      "image": {
         "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/098.png",
         "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/098.png",
         "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/098.png"
      }
   },
   {
      "id": 99,
      "name": {
         "english": "Kingler",
         "japanese": "キングラー",
         "chinese": "巨钳蟹",
         "french": "Krabboss"
      },
      "type": [
         "Water"
      ],
      "base": {
         "HP": 55,
         "Attack": 130,
         "Defense": 115,
         "SpAttack": 50,
         "SpDefense": 50,
         "Speed": 75
      },
      "species": "Pincer Pokémon",
      "description": "Kingler has an enormous, oversized claw. It waves this huge claw in the air to communicate with others. However, because the claw is so heavy, the Pokémon quickly tires.",
      "evolution": {
         "prev": [
            "98",
            "Level 28"
         ]
      },
      "profile": {
         "height": "1.3 m",
         "weight": "60 kg",
         "egg": [
            "Water 3"
         ],
         "ability": [
            [
               "Hyper Cutter",
               "false"
            ],
            [
               "Shell Armor",
               "false"
            ],
            [
               "Sheer Force",
               "true"
            ]
         ],
         "gender": "50:50"
      },
      "image": {
         "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/099.png",
         "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/099.png",
         "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/099.png"
      }
   },
   {
      "id": 100,
      "name": {
         "english": "Voltorb",
         "japanese": "ビリリダマ",
         "chinese": "霹雳电球",
         "french": "Voltorbe"
      },
      "type": [
         "Electric"
      ],
      "base": {
         "HP": 40,
         "Attack": 30,
         "Defense": 50,
         "SpAttack": 55,
         "SpDefense": 55,
         "Speed": 100
      },
      "species": "Ball Pokémon",
      "description": "Voltorb is extremely sensitive—it explodes at the slightest of shocks. It is rumored that it was first created when a Poké Ball was exposed to a powerful pulse of energy.",
      "evolution": {
         "next": [
            [
               "101",
               "Level 30"
            ]
         ]
      },
      "profile": {
         "height": "0.5 m",
         "weight": "10.4 kg",
         "egg": [
            "Mineral"
         ],
         "ability": [
            [
               "Soundproof",
               "false"
            ],
            [
               "Static",
               "false"
            ],
            [
               "Aftermath",
               "true"
            ]
         ],
         "gender": "Genderless"
      },
      "image": {
         "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/100.png",
         "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/100.png",
         "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/100.png"
      }
   },
   {
      "id": 101,
      "name": {
         "english": "Electrode",
         "japanese": "マルマイン",
         "chinese": "顽皮雷弹",
         "french": "Électrode"
      },
      "type": [
         "Electric"
      ],
      "base": {
         "HP": 60,
         "Attack": 50,
         "Defense": 70,
         "SpAttack": 80,
         "SpDefense": 80,
         "Speed": 150
      },
      "species": "Ball Pokémon",
      "description": "One of Electrode’s characteristics is its attraction to electricity. It is a problematical Pokémon that congregates mostly at electrical power plants to feed on electricity that has just been generated.",
      "evolution": {
         "prev": [
            "100",
            "Level 30"
         ]
      },
      "profile": {
         "height": "1.2 m",
         "weight": "66.6 kg",
         "egg": [
            "Mineral"
         ],
         "ability": [
            [
               "Soundproof",
               "false"
            ],
            [
               "Static",
               "false"
            ],
            [
               "Aftermath",
               "true"
            ]
         ],
         "gender": "Genderless"
      },
      "image": {
         "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/101.png",
         "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/101.png",
         "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/101.png"
      }
   },
   {
      "id": 102,
      "name": {
         "english": "Exeggcute",
         "japanese": "タマタマ",
         "chinese": "蛋蛋",
         "french": "Noeunoeuf"
      },
      "type": [
         "Grass",
         "Psychic"
      ],
      "base": {
         "HP": 60,
         "Attack": 40,
         "Defense": 80,
         "SpAttack": 60,
         "SpDefense": 45,
         "Speed": 40
      },
      "species": "Egg Pokémon",
      "description": "Although they are the same size as other Exeggcute, the ones produced in Alola are quite heavy. Their shells are packed full.",
      "evolution": {
         "next": [
            [
               "103",
               "use Leaf Stone"
            ]
         ]
      },
      "profile": {
         "height": "0.4 m",
         "weight": "2.5 kg",
         "egg": [
            "Grass"
         ],
         "ability": [
            [
               "Chlorophyll",
               "false"
            ],
            [
               "Harvest",
               "true"
            ]
         ],
         "gender": "50:50"
      },
      "image": {
         "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/102.png",
         "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/102.png",
         "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/102.png"
      }
   },
   {
      "id": 103,
      "name": {
         "english": "Exeggutor",
         "japanese": "ナッシー",
         "chinese": "椰蛋树",
         "french": "Noadkoko"
      },
      "type": [
         "Grass",
         "Psychic"
      ],
      "base": {
         "HP": 95,
         "Attack": 95,
         "Defense": 85,
         "SpAttack": 125,
         "SpDefense": 75,
         "Speed": 55
      },
      "species": "Coconut Pokémon",
      "description": "Each of its three heads has its own thoughts. When they want to go in different directions, Exeggutor becomes unable to move.",
      "evolution": {
         "prev": [
            "102",
            "use Leaf Stone"
         ]
      },
      "profile": {
         "height": "2 m",
         "weight": "120 kg",
         "egg": [
            "Grass"
         ],
         "ability": [
            [
               "Chlorophyll",
               "false"
            ],
            [
               "Harvest",
               "true"
            ]
         ],
         "gender": "50:50"
      },
      "image": {
         "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/103.png",
         "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/103.png",
         "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/103.png"
      }
   },
   {
      "id": 104,
      "name": {
         "english": "Cubone",
         "japanese": "カラカラ",
         "chinese": "卡拉卡拉",
         "french": "Osselait"
      },
      "type": [
         "Ground"
      ],
      "base": {
         "HP": 50,
         "Attack": 50,
         "Defense": 95,
         "SpAttack": 40,
         "SpDefense": 50,
         "Speed": 35
      },
      "species": "Lonely Pokémon",
      "description": "It wears its mother’s skull on its head, so no one knows what its bare face looks like. However, it’s clear that it’s always crying.",
      "evolution": {
         "next": [
            [
               "105",
               "Level 28"
            ]
         ]
      },
      "profile": {
         "height": "0.4 m",
         "weight": "6.5 kg",
         "egg": [
            "Monster"
         ],
         "ability": [
            [
               "Rock Head",
               "false"
            ],
            [
               "Lightning Rod",
               "false"
            ],
            [
               "Battle Armor",
               "true"
            ]
         ],
         "gender": "50:50"
      },
      "image": {
         "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/104.png",
         "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/104.png",
         "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/104.png"
      }
   },
   {
      "id": 105,
      "name": {
         "english": "Marowak",
         "japanese": "ガラガラ",
         "chinese": "嘎啦嘎啦",
         "french": "Ossatueur"
      },
      "type": [
         "Ground"
      ],
      "base": {
         "HP": 60,
         "Attack": 80,
         "Defense": 110,
         "SpAttack": 50,
         "SpDefense": 80,
         "Speed": 45
      },
      "species": "Bone Keeper Pokémon",
      "description": "They thump their bones rhythmically to communicate among themselves. There are nearly 50 different rhythmic patterns.",
      "evolution": {
         "prev": [
            "104",
            "Level 28"
         ]
      },
      "profile": {
         "height": "1 m",
         "weight": "45 kg",
         "egg": [
            "Monster"
         ],
         "ability": [
            [
               "Rock Head",
               "false"
            ],
            [
               "Lightning Rod",
               "false"
            ],
            [
               "Battle Armor",
               "true"
            ]
         ],
         "gender": "50:50"
      },
      "image": {
         "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/105.png",
         "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/105.png",
         "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/105.png"
      }
   },
   {
      "id": 106,
      "name": {
         "english": "Hitmonlee",
         "japanese": "サワムラー",
         "chinese": "飞腿郎",
         "french": "Kicklee"
      },
      "type": [
         "Fighting"
      ],
      "base": {
         "HP": 50,
         "Attack": 120,
         "Defense": 53,
         "SpAttack": 35,
         "SpDefense": 110,
         "Speed": 87
      },
      "species": "Kicking Pokémon",
      "description": "Hitmonlee’s legs freely contract and stretch. Using these springlike legs, it bowls over foes with devastating kicks. After battle, it rubs down its legs and loosens the muscles to overcome fatigue.",
      "evolution": {
         "prev": [
            "236",
            "Level 20, Attack > Defense"
         ]
      },
      "profile": {
         "height": "1.5 m",
         "weight": "49.8 kg",
         "egg": [
            "Human-Like"
         ],
         "ability": [
            [
               "Limber",
               "false"
            ],
            [
               "Reckless",
               "false"
            ],
            [
               "Unburden",
               "true"
            ]
         ],
         "gender": "100:0"
      },
      "image": {
         "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/106.png",
         "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/106.png",
         "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/106.png"
      }
   },
   {
      "id": 107,
      "name": {
         "english": "Hitmonchan",
         "japanese": "エビワラー",
         "chinese": "快拳郎",
         "french": "Tygnon"
      },
      "type": [
         "Fighting"
      ],
      "base": {
         "HP": 50,
         "Attack": 105,
         "Defense": 79,
         "SpAttack": 35,
         "SpDefense": 110,
         "Speed": 76
      },
      "species": "Punching Pokémon",
      "description": "Hitmonchan is said to possess the spirit of a boxer who had been working toward a world championship. This Pokémon has an indomitable spirit and will never give up in the face of adversity.",
      "evolution": {
         "prev": [
            "236",
            "Level 20, Attack < Defense"
         ]
      },
      "profile": {
         "height": "1.4 m",
         "weight": "50.2 kg",
         "egg": [
            "Human-Like"
         ],
         "ability": [
            [
               "Keen Eye",
               "false"
            ],
            [
               "Iron Fist",
               "false"
            ],
            [
               "Inner Focus",
               "true"
            ]
         ],
         "gender": "100:0"
      },
      "image": {
         "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/107.png",
         "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/107.png",
         "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/107.png"
      }
   },
   {
      "id": 108,
      "name": {
         "english": "Lickitung",
         "japanese": "ベロリンガ",
         "chinese": "大舌头",
         "french": "Excelangue"
      },
      "type": [
         "Normal"
      ],
      "base": {
         "HP": 90,
         "Attack": 55,
         "Defense": 75,
         "SpAttack": 60,
         "SpDefense": 75,
         "Speed": 30
      },
      "species": "Licking Pokémon",
      "description": "It licks filth clean with its tongue. Whatever it licks always stinks afterward, so whether it’s really clean is...questionable.",
      "evolution": {
         "next": [
            [
               "463",
               "after Rollout learned"
            ]
         ]
      },
      "profile": {
         "height": "1.2 m",
         "weight": "65.5 kg",
         "egg": [
            "Monster"
         ],
         "ability": [
            [
               "Own Tempo",
               "false"
            ],
            [
               "Oblivious",
               "false"
            ],
            [
               "Cloud Nine",
               "true"
            ]
         ],
         "gender": "50:50"
      },
      "image": {
         "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/108.png",
         "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/108.png",
         "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/108.png"
      }
   },
   {
      "id": 109,
      "name": {
         "english": "Koffing",
         "japanese": "ドガース",
         "chinese": "瓦斯弹",
         "french": "Smogo"
      },
      "type": [
         "Poison"
      ],
      "base": {
         "HP": 40,
         "Attack": 65,
         "Defense": 95,
         "SpAttack": 60,
         "SpDefense": 45,
         "Speed": 35
      },
      "species": "Poison Gas Pokémon",
      "description": "Koffing embodies toxic substances. It mixes the toxins with raw garbage to set off a chemical reaction that results in a terribly powerful poison gas. The higher the temperature, the more gas is concocted by this Pokémon.",
      "evolution": {
         "next": [
            [
               "110",
               "Level 35"
            ]
         ]
      },
      "profile": {
         "height": "0.6 m",
         "weight": "1 kg",
         "egg": [
            "Amorphous"
         ],
         "ability": [
            [
               "Levitate",
               "false"
            ]
         ],
         "gender": "50:50"
      },
      "image": {
         "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/109.png",
         "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/109.png",
         "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/109.png"
      }
   },
   {
      "id": 110,
      "name": {
         "english": "Weezing",
         "japanese": "マタドガス",
         "chinese": "双弹瓦斯",
         "french": "Smogogo"
      },
      "type": [
         "Poison"
      ],
      "base": {
         "HP": 65,
         "Attack": 90,
         "Defense": 120,
         "SpAttack": 85,
         "SpDefense": 70,
         "Speed": 60
      },
      "species": "Poison Gas Pokémon",
      "description": "Weezing alternately shrinks and inflates its twin bodies to mix together toxic gases inside. The more the gases are mixed, the more powerful the toxins become. The Pokémon also becomes more putrid.",
      "evolution": {
         "prev": [
            "109",
            "Level 35"
         ]
      },
      "profile": {
         "height": "1.2 m",
         "weight": "9.5 kg",
         "egg": [
            "Amorphous"
         ],
         "ability": [
            [
               "Levitate",
               "false"
            ]
         ],
         "gender": "50:50"
      },
      "image": {
         "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/110.png",
         "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/110.png",
         "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/110.png"
      }
   },
   {
      "id": 111,
      "name": {
         "english": "Rhyhorn",
         "japanese": "サイホーン",
         "chinese": "独角犀牛",
         "french": "Rhinocorne"
      },
      "type": [
         "Ground",
         "Rock"
      ],
      "base": {
         "HP": 80,
         "Attack": 85,
         "Defense": 95,
         "SpAttack": 30,
         "SpDefense": 30,
         "Speed": 25
      },
      "species": "Spikes Pokémon",
      "description": "Rhyhorn’s brain is very small. It is so dense, while on a run it forgets why it started running in the first place. It apparently remembers sometimes if it demolishes something.",
      "evolution": {
         "next": [
            [
               "112",
               "Level 42"
            ]
         ]
      },
      "profile": {
         "height": "1 m",
         "weight": "115 kg",
         "egg": [
            "Monster",
            "Field"
         ],
         "ability": [
            [
               "Lightning Rod",
               "false"
            ],
            [
               "Rock Head",
               "false"
            ],
            [
               "Reckless",
               "true"
            ]
         ],
         "gender": "50:50"
      },
      "image": {
         "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/111.png",
         "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/111.png",
         "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/111.png"
      }
   },
   {
      "id": 112,
      "name": {
         "english": "Rhydon",
         "japanese": "サイドン",
         "chinese": "钻角犀兽",
         "french": "Rhinoféros"
      },
      "type": [
         "Ground",
         "Rock"
      ],
      "base": {
         "HP": 105,
         "Attack": 130,
         "Defense": 120,
         "SpAttack": 45,
         "SpDefense": 45,
         "Speed": 40
      },
      "species": "Drill Pokémon",
      "description": "Rhydon has a horn that serves as a drill. It is used for destroying rocks and boulders. This Pokémon occasionally rams into streams of magma, but the armor-like hide prevents it from feeling the heat.",
      "evolution": {
         "prev": [
            "111",
            "Level 42"
         ],
         "next": [
            [
               "464",
               "trade holding Protector"
            ]
         ]
      },
      "profile": {
         "height": "1.9 m",
         "weight": "120 kg",
         "egg": [
            "Monster",
            "Field"
         ],
         "ability": [
            [
               "Lightning Rod",
               "false"
            ],
            [
               "Rock Head",
               "false"
            ],
            [
               "Reckless",
               "true"
            ]
         ],
         "gender": "50:50"
      },
      "image": {
         "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/112.png",
         "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/112.png",
         "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/112.png"
      }
   },
   {
      "id": 113,
      "name": {
         "english": "Chansey",
         "japanese": "ラッキー",
         "chinese": "吉利蛋",
         "french": "Leveinard"
      },
      "type": [
         "Normal"
      ],
      "base": {
         "HP": 250,
         "Attack": 5,
         "Defense": 5,
         "SpAttack": 35,
         "SpDefense": 105,
         "Speed": 50
      },
      "species": "Egg Pokémon",
      "description": "Because the eggs on their bellies have been overharvested by people in the past, the Chansey population remains very small.",
      "evolution": {
         "prev": [
            "440",
            "hold Oval Stone, Daytime"
         ],
         "next": [
            [
               "242",
               "high Friendship"
            ]
         ]
      },
      "profile": {
         "height": "1.1 m",
         "weight": "34.6 kg",
         "egg": [
            "Fairy"
         ],
         "ability": [
            [
               "Natural Cure",
               "false"
            ],
            [
               "Serene Grace",
               "false"
            ],
            [
               "Healer",
               "true"
            ]
         ],
         "gender": "0:100"
      },
      "image": {
         "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/113.png",
         "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/113.png",
         "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/113.png"
      }
   },
   {
      "id": 114,
      "name": {
         "english": "Tangela",
         "japanese": "モンジャラ",
         "chinese": "蔓藤怪",
         "french": "Saquedeneu"
      },
      "type": [
         "Grass"
      ],
      "base": {
         "HP": 65,
         "Attack": 55,
         "Defense": 115,
         "SpAttack": 100,
         "SpDefense": 40,
         "Speed": 60
      },
      "species": "Vine Pokémon",
      "description": "Tangela’s vines snap off easily if they are grabbed. This happens without pain, allowing it to make a quick getaway. The lost vines are replaced by newly grown vines the very next day.",
      "evolution": {
         "next": [
            [
               "465",
               "after Ancient Power learned"
            ]
         ]
      },
      "profile": {
         "height": "1 m",
         "weight": "35 kg",
         "egg": [
            "Grass"
         ],
         "ability": [
            [
               "Chlorophyll",
               "false"
            ],
            [
               "Leaf Guard",
               "false"
            ],
            [
               "Regenerator",
               "true"
            ]
         ],
         "gender": "50:50"
      },
      "image": {
         "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/114.png",
         "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/114.png",
         "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/114.png"
      }
   },
   {
      "id": 115,
      "name": {
         "english": "Kangaskhan",
         "japanese": "ガルーラ",
         "chinese": "袋兽",
         "french": "Kangourex"
      },
      "type": [
         "Normal"
      ],
      "base": {
         "HP": 105,
         "Attack": 95,
         "Defense": 80,
         "SpAttack": 40,
         "SpDefense": 80,
         "Speed": 90
      },
      "species": "Parent Pokémon",
      "description": "You shouldn’t get close to the child when it’s playing outside its mother’s pouch. Its mother is always nearby watching over it.",
      "evolution": {},
      "profile": {
         "height": "2.2 m",
         "weight": "80 kg",
         "egg": [
            "Monster"
         ],
         "ability": [
            [
               "Early Bird",
               "false"
            ],
            [
               "Scrappy",
               "false"
            ],
            [
               "Inner Focus",
               "true"
            ]
         ],
         "gender": "0:100"
      },
      "image": {
         "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/115.png",
         "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/115.png",
         "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/115.png"
      }
   },
   {
      "id": 116,
      "name": {
         "english": "Horsea",
         "japanese": "タッツー",
         "chinese": "墨海马",
         "french": "Hypotrempe"
      },
      "type": [
         "Water"
      ],
      "base": {
         "HP": 30,
         "Attack": 40,
         "Defense": 70,
         "SpAttack": 70,
         "SpDefense": 25,
         "Speed": 60
      },
      "species": "Dragon Pokémon",
      "description": "If Horsea senses danger, it will reflexively spray a dense black ink from its mouth and try to escape. This Pokémon swims by cleverly flapping the fin on its back.",
      "evolution": {
         "next": [
            [
               "117",
               "Level 32"
            ]
         ]
      },
      "profile": {
         "height": "0.4 m",
         "weight": "8 kg",
         "egg": [
            "Water 1",
            "Dragon"
         ],
         "ability": [
            [
               "Swift Swim",
               "false"
            ],
            [
               "Sniper",
               "false"
            ],
            [
               "Damp",
               "true"
            ]
         ],
         "gender": "50:50"
      },
      "image": {
         "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/116.png",
         "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/116.png",
         "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/116.png"
      }
   },
   {
      "id": 117,
      "name": {
         "english": "Seadra",
         "japanese": "シードラ",
         "chinese": "海刺龙",
         "french": "Hypocéan"
      },
      "type": [
         "Water"
      ],
      "base": {
         "HP": 55,
         "Attack": 65,
         "Defense": 95,
         "SpAttack": 95,
         "SpDefense": 45,
         "Speed": 85
      },
      "species": "Dragon Pokémon",
      "description": "Seadra generates whirlpools by spinning its body. The whirlpools are strong enough to swallow even fishing boats. This Pokémon weakens prey with these currents, then swallows it whole.",
      "evolution": {
         "prev": [
            "116",
            "Level 32"
         ],
         "next": [
            [
               "230",
               "trade holding Dragon Scale"
            ]
         ]
      },
      "profile": {
         "height": "1.2 m",
         "weight": "25 kg",
         "egg": [
            "Water 1",
            "Dragon"
         ],
         "ability": [
            [
               "Poison Point",
               "false"
            ],
            [
               "Sniper",
               "false"
            ],
            [
               "Damp",
               "true"
            ]
         ],
         "gender": "50:50"
      },
      "image": {
         "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/117.png",
         "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/117.png",
         "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/117.png"
      }
   },
   {
      "id": 118,
      "name": {
         "english": "Goldeen",
         "japanese": "トサキント",
         "chinese": "角金鱼",
         "french": "Poissirène"
      },
      "type": [
         "Water"
      ],
      "base": {
         "HP": 45,
         "Attack": 67,
         "Defense": 60,
         "SpAttack": 35,
         "SpDefense": 50,
         "Speed": 63
      },
      "species": "Goldfish Pokémon",
      "description": "The way it swims along fluttering its dress-like fins has earned it the name “princess of the water.”",
      "evolution": {
         "next": [
            [
               "119",
               "Level 33"
            ]
         ]
      },
      "profile": {
         "height": "0.6 m",
         "weight": "15 kg",
         "egg": [
            "Water 2"
         ],
         "ability": [
            [
               "Swift Swim",
               "false"
            ],
            [
               "Water Veil",
               "false"
            ],
            [
               "Lightning Rod",
               "true"
            ]
         ],
         "gender": "50:50"
      },
      "image": {
         "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/118.png",
         "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/118.png",
         "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/118.png"
      }
   },
   {
      "id": 119,
      "name": {
         "english": "Seaking",
         "japanese": "アズマオウ",
         "chinese": "金鱼王",
         "french": "Poissoroy"
      },
      "type": [
         "Water"
      ],
      "base": {
         "HP": 80,
         "Attack": 92,
         "Defense": 65,
         "SpAttack": 65,
         "SpDefense": 80,
         "Speed": 68
      },
      "species": "Goldfish Pokémon",
      "description": "To attract females, males dance on the river’s floor. The females gather around the male that dances most gracefully.",
      "evolution": {
         "prev": [
            "118",
            "Level 33"
         ]
      },
      "profile": {
         "height": "1.3 m",
         "weight": "39 kg",
         "egg": [
            "Water 2"
         ],
         "ability": [
            [
               "Swift Swim",
               "false"
            ],
            [
               "Water Veil",
               "false"
            ],
            [
               "Lightning Rod",
               "true"
            ]
         ],
         "gender": "50:50"
      },
      "image": {
         "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/119.png",
         "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/119.png",
         "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/119.png"
      }
   },
   {
      "id": 120,
      "name": {
         "english": "Staryu",
         "japanese": "ヒトデマン",
         "chinese": "海星星",
         "french": "Stari"
      },
      "type": [
         "Water"
      ],
      "base": {
         "HP": 30,
         "Attack": 45,
         "Defense": 55,
         "SpAttack": 70,
         "SpDefense": 55,
         "Speed": 85
      },
      "species": "Star Shape Pokémon",
      "description": "No number of injuries can bother Staryu. Its amazing regenerative powers return it to its previous state in half a day!",
      "evolution": {
         "next": [
            [
               "121",
               "use Water Stone"
            ]
         ]
      },
      "profile": {
         "height": "0.8 m",
         "weight": "34.5 kg",
         "egg": [
            "Water 3"
         ],
         "ability": [
            [
               "Illuminate",
               "false"
            ],
            [
               "Natural Cure",
               "false"
            ],
            [
               "Analytic",
               "true"
            ]
         ],
         "gender": "Genderless"
      },
      "image": {
         "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/120.png",
         "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/120.png",
         "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/120.png"
      }
   },
   {
      "id": 121,
      "name": {
         "english": "Starmie",
         "japanese": "スターミー",
         "chinese": "宝石海星",
         "french": "Staross"
      },
      "type": [
         "Water",
         "Psychic"
      ],
      "base": {
         "HP": 60,
         "Attack": 75,
         "Defense": 85,
         "SpAttack": 100,
         "SpDefense": 85,
         "Speed": 115
      },
      "species": "Mysterious Pokémon",
      "description": "It rotates its geometrically shaped body to swim through the water. It always seems to be sending out mysterious radio waves.",
      "evolution": {
         "prev": [
            "120",
            "use Water Stone"
         ]
      },
      "profile": {
         "height": "1.1 m",
         "weight": "80 kg",
         "egg": [
            "Water 3"
         ],
         "ability": [
            [
               "Illuminate",
               "false"
            ],
            [
               "Natural Cure",
               "false"
            ],
            [
               "Analytic",
               "true"
            ]
         ],
         "gender": "Genderless"
      },
      "image": {
         "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/121.png",
         "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/121.png",
         "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/121.png"
      }
   },
   {
      "id": 122,
      "name": {
         "english": "Mr. Mime",
         "japanese": "バリヤード",
         "chinese": "魔墙人偶",
         "french": "M. Mime"
      },
      "type": [
         "Psychic",
         "Fairy"
      ],
      "base": {
         "HP": 40,
         "Attack": 45,
         "Defense": 65,
         "SpAttack": 100,
         "SpDefense": 120,
         "Speed": 90
      },
      "species": "Barrier Pokémon",
      "description": "It creates invisible walls with its pantomiming. If you don’t act impressed, it will attack you with a double slap!",
      "evolution": {
         "prev": [
            "439",
            "after Mimic learned"
         ]
      },
      "profile": {
         "height": "1.3 m",
         "weight": "54.5 kg",
         "egg": [
            "Human-Like"
         ],
         "ability": [
            [
               "Soundproof",
               "false"
            ],
            [
               "Filter",
               "false"
            ],
            [
               "Technician",
               "true"
            ]
         ],
         "gender": "50:50"
      },
      "image": {
         "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/122.png",
         "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/122.png",
         "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/122.png"
      }
   },
   {
      "id": 123,
      "name": {
         "english": "Scyther",
         "japanese": "ストライク",
         "chinese": "飞天螳螂",
         "french": "Insécateur"
      },
      "type": [
         "Bug",
         "Flying"
      ],
      "base": {
         "HP": 70,
         "Attack": 110,
         "Defense": 80,
         "SpAttack": 55,
         "SpDefense": 80,
         "Speed": 105
      },
      "species": "Mantis Pokémon",
      "description": "Some call it a ninja. Its movements— imperceptibly quick—are sufficient to cleave the air in two. It’s very popular in Alola.",
      "evolution": {
         "next": [
            [
               "212",
               "trade holding Metal Coat"
            ]
         ]
      },
      "profile": {
         "height": "1.5 m",
         "weight": "56 kg",
         "egg": [
            "Bug"
         ],
         "ability": [
            [
               "Swarm",
               "false"
            ],
            [
               "Technician",
               "false"
            ],
            [
               "Steadfast",
               "true"
            ]
         ],
         "gender": "50:50"
      },
      "image": {
         "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/123.png",
         "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/123.png",
         "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/123.png"
      }
   },
   {
      "id": 124,
      "name": {
         "english": "Jynx",
         "japanese": "ルージュラ",
         "chinese": "迷唇姐",
         "french": "Lippoutou"
      },
      "type": [
         "Ice",
         "Psychic"
      ],
      "base": {
         "HP": 65,
         "Attack": 50,
         "Defense": 35,
         "SpAttack": 115,
         "SpDefense": 95,
         "Speed": 95
      },
      "species": "Human Shape Pokémon",
      "description": "Its strange cries sound like human language. There are some musicians who compose songs for Jynx to sing.",
      "evolution": {
         "prev": [
            "238",
            "Level 30"
         ]
      },
      "profile": {
         "height": "1.4 m",
         "weight": "40.6 kg",
         "egg": [
            "Human-Like"
         ],
         "ability": [
            [
               "Oblivious",
               "false"
            ],
            [
               "Forewarn",
               "false"
            ],
            [
               "Dry Skin",
               "true"
            ]
         ],
         "gender": "0:100"
      },
      "image": {
         "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/124.png",
         "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/124.png",
         "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/124.png"
      }
   },
   {
      "id": 125,
      "name": {
         "english": "Electabuzz",
         "japanese": "エレブー",
         "chinese": "电击兽",
         "french": "Élektek"
      },
      "type": [
         "Electric"
      ],
      "base": {
         "HP": 65,
         "Attack": 83,
         "Defense": 57,
         "SpAttack": 95,
         "SpDefense": 85,
         "Speed": 105
      },
      "species": "Electric Pokémon",
      "description": "While it’s often blamed for power outages, the truth is the cause of outages is more often an error on the part of the electric company.",
      "evolution": {
         "prev": [
            "239",
            "Level 30"
         ],
         "next": [
            [
               "466",
               "trade holding Electirizer"
            ]
         ]
      },
      "profile": {
         "height": "1.1 m",
         "weight": "30 kg",
         "egg": [
            "Human-Like"
         ],
         "ability": [
            [
               "Static",
               "false"
            ],
            [
               "Vital Spirit",
               "true"
            ]
         ],
         "gender": "75:25"
      },
      "image": {
         "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/125.png",
         "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/125.png",
         "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/125.png"
      }
   },
   {
      "id": 126,
      "name": {
         "english": "Magmar",
         "japanese": "ブーバー",
         "chinese": "鸭嘴火兽",
         "french": "Magmar"
      },
      "type": [
         "Fire"
      ],
      "base": {
         "HP": 65,
         "Attack": 95,
         "Defense": 57,
         "SpAttack": 100,
         "SpDefense": 85,
         "Speed": 93
      },
      "species": "Spitfire Pokémon",
      "description": "The hotter the place, the better they feel. Magmar in Alola are said to be hardier than those in other areas.",
      "evolution": {
         "prev": [
            "240",
            "Level 30"
         ],
         "next": [
            [
               "467",
               "trade holding Magmarizer"
            ]
         ]
      },
      "profile": {
         "height": "1.3 m",
         "weight": "44.5 kg",
         "egg": [
            "Human-Like"
         ],
         "ability": [
            [
               "Flame Body",
               "false"
            ],
            [
               "Vital Spirit",
               "true"
            ]
         ],
         "gender": "75:25"
      },
      "image": {
         "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/126.png",
         "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/126.png",
         "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/126.png"
      }
   },
   {
      "id": 127,
      "name": {
         "english": "Pinsir",
         "japanese": "カイロス",
         "chinese": "凯罗斯",
         "french": "Scarabrute"
      },
      "type": [
         "Bug"
      ],
      "base": {
         "HP": 65,
         "Attack": 125,
         "Defense": 100,
         "SpAttack": 55,
         "SpDefense": 70,
         "Speed": 85
      },
      "species": "Stag Beetle Pokémon",
      "description": "Although it’s tough, it can’t handle cold well. When night falls, it buries itself in leafage and sleeps.",
      "evolution": {},
      "profile": {
         "height": "1.5 m",
         "weight": "55 kg",
         "egg": [
            "Bug"
         ],
         "ability": [
            [
               "Hyper Cutter",
               "false"
            ],
            [
               "Mold Breaker",
               "false"
            ],
            [
               "Moxie",
               "true"
            ]
         ],
         "gender": "50:50"
      },
      "image": {
         "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/127.png",
         "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/127.png",
         "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/127.png"
      }
   },
   {
      "id": 128,
      "name": {
         "english": "Tauros",
         "japanese": "ケンタロス",
         "chinese": "肯泰罗",
         "french": "Tauros"
      },
      "type": [
         "Normal"
      ],
      "base": {
         "HP": 75,
         "Attack": 100,
         "Defense": 95,
         "SpAttack": 40,
         "SpDefense": 70,
         "Speed": 110
      },
      "species": "Wild Bull Pokémon",
      "description": "The climate seems to be related to the reason Tauros in Alola are a little calmer than those in other regions.",
      "evolution": {},
      "profile": {
         "height": "1.4 m",
         "weight": "88.4 kg",
         "egg": [
            "Field"
         ],
         "ability": [
            [
               "Intimidate",
               "false"
            ],
            [
               "Anger Point",
               "false"
            ],
            [
               "Sheer Force",
               "true"
            ]
         ],
         "gender": "100:0"
      },
      "image": {
         "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/128.png",
         "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/128.png",
         "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/128.png"
      }
   },
   {
      "id": 129,
      "name": {
         "english": "Magikarp",
         "japanese": "コイキング",
         "chinese": "鲤鱼王",
         "french": "Magicarpe"
      },
      "type": [
         "Water"
      ],
      "base": {
         "HP": 20,
         "Attack": 10,
         "Defense": 55,
         "SpAttack": 15,
         "SpDefense": 20,
         "Speed": 80
      },
      "species": "Fish Pokémon",
      "description": "Thanks to their strong hold on life, dirty water doesn’t bother them at all. They live in waters all over the world!",
      "evolution": {
         "next": [
            [
               "130",
               "Level 20"
            ]
         ]
      },
      "profile": {
         "height": "0.9 m",
         "weight": "10 kg",
         "egg": [
            "Water 2",
            "Dragon"
         ],
         "ability": [
            [
               "Swift Swim",
               "false"
            ],
            [
               "Rattled",
               "true"
            ]
         ],
         "gender": "50:50"
      },
      "image": {
         "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/129.png",
         "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/129.png",
         "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/129.png"
      }
   },
   {
      "id": 130,
      "name": {
         "english": "Gyarados",
         "japanese": "ギャラドス",
         "chinese": "暴鲤龙",
         "french": "Léviator"
      },
      "type": [
         "Water",
         "Flying"
      ],
      "base": {
         "HP": 95,
         "Attack": 125,
         "Defense": 79,
         "SpAttack": 60,
         "SpDefense": 100,
         "Speed": 81
      },
      "species": "Atrocious Pokémon",
      "description": "The energy from evolution stimulated its brain cells strongly, causing it to become very ferocious.",
      "evolution": {
         "prev": [
            "129",
            "Level 20"
         ]
      },
      "profile": {
         "height": "6.5 m",
         "weight": "235 kg",
         "egg": [
            "Water 2",
            "Dragon"
         ],
         "ability": [
            [
               "Intimidate",
               "false"
            ],
            [
               "Moxie",
               "true"
            ]
         ],
         "gender": "50:50"
      },
      "image": {
         "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/130.png",
         "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/130.png",
         "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/130.png"
      }
   },
   {
      "id": 131,
      "name": {
         "english": "Lapras",
         "japanese": "ラプラス",
         "chinese": "拉普拉斯",
         "french": "Lokhlass"
      },
      "type": [
         "Water",
         "Ice"
      ],
      "base": {
         "HP": 130,
         "Attack": 85,
         "Defense": 80,
         "SpAttack": 85,
         "SpDefense": 95,
         "Speed": 60
      },
      "species": "Transport Pokémon",
      "description": "They’ve been so cherished that there’s now an overabundance. The fish Pokémon population has declined in waters with too many Lapras.",
      "evolution": {},
      "profile": {
         "height": "2.5 m",
         "weight": "220 kg",
         "egg": [
            "Monster",
            "Water 1"
         ],
         "ability": [
            [
               "Water Absorb",
               "false"
            ],
            [
               "Shell Armor",
               "false"
            ],
            [
               "Hydration",
               "true"
            ]
         ],
         "gender": "50:50"
      },
      "image": {
         "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/131.png",
         "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/131.png",
         "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/131.png"
      }
   },
   {
      "id": 132,
      "name": {
         "english": "Ditto",
         "japanese": "メタモン",
         "chinese": "百变怪",
         "french": "Métamorph"
      },
      "type": [
         "Normal"
      ],
      "base": {
         "HP": 48,
         "Attack": 48,
         "Defense": 48,
         "SpAttack": 48,
         "SpDefense": 48,
         "Speed": 48
      },
      "species": "Transform Pokémon",
      "description": "It transforms into whatever it sees. If the thing it’s transforming into isn’t right in front of it, Ditto relies on its memory—so sometimes it fails.",
      "evolution": {},
      "profile": {
         "height": "0.3 m",
         "weight": "4 kg",
         "egg": [
            "Ditto"
         ],
         "ability": [
            [
               "Limber",
               "false"
            ],
            [
               "Imposter",
               "true"
            ]
         ],
         "gender": "Genderless"
      },
      "image": {
         "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/132.png",
         "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/132.png",
         "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/132.png"
      }
   },
   {
      "id": 133,
      "name": {
         "english": "Eevee",
         "japanese": "イーブイ",
         "chinese": "伊布",
         "french": "Évoli"
      },
      "type": [
         "Normal"
      ],
      "base": {
         "HP": 55,
         "Attack": 55,
         "Defense": 50,
         "SpAttack": 45,
         "SpDefense": 65,
         "Speed": 55
      },
      "species": "Evolution Pokémon",
      "description": "Its genes are easily influenced by its surroundings. Even its face starts to look like that of its Trainer.",
      "evolution": {
         "next": [
            [
               "134",
               "use Water Stone"
            ],
            [
               "135",
               "use Thunder Stone"
            ],
            [
               "136",
               "use Fire Stone"
            ],
            [
               "196",
               "high Friendship, Daytime"
            ],
            [
               "197",
               "high Friendship, Nighttime"
            ],
            [
               "470",
               "level up near a Mossy Rock"
            ],
            [
               "471",
               "level up near an Icy Rock"
            ],
            [
               "700",
               "High Affection and knowing Fairy move"
            ]
         ]
      },
      "profile": {
         "height": "0.3 m",
         "weight": "6.5 kg",
         "egg": [
            "Field"
         ],
         "ability": [
            [
               "Run Away",
               "false"
            ],
            [
               "Adaptability",
               "false"
            ],
            [
               "Anticipation",
               "true"
            ]
         ],
         "gender": "87.5:12.5"
      },
      "image": {
         "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/133.png",
         "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/133.png",
         "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/133.png"
      }
   },
   {
      "id": 134,
      "name": {
         "english": "Vaporeon",
         "japanese": "シャワーズ",
         "chinese": "水伊布",
         "french": "Aquali"
      },
      "type": [
         "Water"
      ],
      "base": {
         "HP": 130,
         "Attack": 65,
         "Defense": 60,
         "SpAttack": 110,
         "SpDefense": 95,
         "Speed": 65
      },
      "species": "Bubble Jet Pokémon",
      "description": "It detects nearby moisture with its fin. When its fin begins trembling rapidly, that means rain will fall in a few hours.",
      "evolution": {
         "prev": [
            "133",
            "use Water Stone"
         ]
      },
      "profile": {
         "height": "1 m",
         "weight": "29 kg",
         "egg": [
            "Field"
         ],
         "ability": [
            [
               "Water Absorb",
               "false"
            ],
            [
               "Hydration",
               "true"
            ]
         ],
         "gender": "87.5:12.5"
      },
      "image": {
         "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/134.png",
         "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/134.png",
         "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/134.png"
      }
   },
   {
      "id": 135,
      "name": {
         "english": "Jolteon",
         "japanese": "サンダース",
         "chinese": "雷伊布",
         "french": "Voltali"
      },
      "type": [
         "Electric"
      ],
      "base": {
         "HP": 65,
         "Attack": 65,
         "Defense": 60,
         "SpAttack": 110,
         "SpDefense": 95,
         "Speed": 130
      },
      "species": "Lightning Pokémon",
      "description": "Its fur stands on end, becoming like needles it fires at enemies. Once they’re weakened, it finishes them off with a 10,000 volt shock.",
      "evolution": {
         "prev": [
            "133",
            "use Thunder Stone"
         ]
      },
      "profile": {
         "height": "0.8 m",
         "weight": "24.5 kg",
         "egg": [
            "Field"
         ],
         "ability": [
            [
               "Volt Absorb",
               "false"
            ],
            [
               "Quick Feet",
               "true"
            ]
         ],
         "gender": "87.5:12.5"
      },
      "image": {
         "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/135.png",
         "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/135.png",
         "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/135.png"
      }
   },
   {
      "id": 136,
      "name": {
         "english": "Flareon",
         "japanese": "ブースター",
         "chinese": "火伊布",
         "french": "Pyroli"
      },
      "type": [
         "Fire"
      ],
      "base": {
         "HP": 65,
         "Attack": 130,
         "Defense": 60,
         "SpAttack": 95,
         "SpDefense": 110,
         "Speed": 65
      },
      "species": "Flame Pokémon",
      "description": "The flame chamber inside its body ignites when Flareon gets agitated, reaching temperatures of up to 1,650 degrees Fahrenheit.",
      "evolution": {
         "prev": [
            "133",
            "use Fire Stone"
         ]
      },
      "profile": {
         "height": "0.9 m",
         "weight": "25 kg",
         "egg": [
            "Field"
         ],
         "ability": [
            [
               "Flash Fire",
               "false"
            ],
            [
               "Guts",
               "true"
            ]
         ],
         "gender": "87.5:12.5"
      },
      "image": {
         "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/136.png",
         "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/136.png",
         "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/136.png"
      }
   },
   {
      "id": 137,
      "name": {
         "english": "Porygon",
         "japanese": "ポリゴン",
         "chinese": "多边兽",
         "french": "Porygon"
      },
      "type": [
         "Normal"
      ],
      "base": {
         "HP": 65,
         "Attack": 60,
         "Defense": 70,
         "SpAttack": 85,
         "SpDefense": 75,
         "Speed": 40
      },
      "species": "Virtual Pokémon",
      "description": "It was built 20 years ago by scientists who dreamed of exploring space. Their dreams have yet to come true.",
      "evolution": {
         "next": [
            [
               "233",
               "trade holding Upgrade"
            ]
         ]
      },
      "profile": {
         "height": "0.8 m",
         "weight": "36.5 kg",
         "egg": [
            "Mineral"
         ],
         "ability": [
            [
               "Trace",
               "false"
            ],
            [
               "Download",
               "false"
            ],
            [
               "Analytic",
               "true"
            ]
         ],
         "gender": "Genderless"
      },
      "image": {
         "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/137.png",
         "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/137.png",
         "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/137.png"
      }
   },
   {
      "id": 138,
      "name": {
         "english": "Omanyte",
         "japanese": "オムナイト",
         "chinese": "菊石兽",
         "french": "Amonita"
      },
      "type": [
         "Rock",
         "Water"
      ],
      "base": {
         "HP": 35,
         "Attack": 40,
         "Defense": 100,
         "SpAttack": 90,
         "SpDefense": 55,
         "Speed": 35
      },
      "species": "Spiral Pokémon",
      "description": "It was restored from an ancient fossil. Those Helix Fossils are excavated from areas that were once oceans long, long ago.",
      "evolution": {
         "next": [
            [
               "139",
               "Level 40"
            ]
         ]
      },
      "profile": {
         "height": "0.4 m",
         "weight": "7.5 kg",
         "egg": [
            "Water 1",
            "Water 3"
         ],
         "ability": [
            [
               "Swift Swim",
               "false"
            ],
            [
               "Shell Armor",
               "false"
            ],
            [
               "Weak Armor",
               "true"
            ]
         ],
         "gender": "87.5:12.5"
      },
      "image": {
         "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/138.png",
         "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/138.png",
         "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/138.png"
      }
   },
   {
      "id": 139,
      "name": {
         "english": "Omastar",
         "japanese": "オムスター",
         "chinese": "多刺菊石兽",
         "french": "Amonistar"
      },
      "type": [
         "Rock",
         "Water"
      ],
      "base": {
         "HP": 70,
         "Attack": 60,
         "Defense": 125,
         "SpAttack": 115,
         "SpDefense": 70,
         "Speed": 55
      },
      "species": "Spiral Pokémon",
      "description": "It wraps its prey in its tentacles to immobilize them and then finishes them off with its sharp fangs.",
      "evolution": {
         "prev": [
            "138",
            "Level 40"
         ]
      },
      "profile": {
         "height": "1 m",
         "weight": "35 kg",
         "egg": [
            "Water 1",
            "Water 3"
         ],
         "ability": [
            [
               "Swift Swim",
               "false"
            ],
            [
               "Shell Armor",
               "false"
            ],
            [
               "Weak Armor",
               "true"
            ]
         ],
         "gender": "87.5:12.5"
      },
      "image": {
         "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/139.png",
         "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/139.png",
         "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/139.png"
      }
   },
   {
      "id": 140,
      "name": {
         "english": "Kabuto",
         "japanese": "カブト",
         "chinese": "化石盔",
         "french": "Kabuto"
      },
      "type": [
         "Rock",
         "Water"
      ],
      "base": {
         "HP": 30,
         "Attack": 80,
         "Defense": 90,
         "SpAttack": 55,
         "SpDefense": 45,
         "Speed": 55
      },
      "species": "Shellfish Pokémon",
      "description": "This Pokémon became extinct everywhere, except in a few areas. It protects itself with its hard shell.",
      "evolution": {
         "next": [
            [
               "141",
               "Level 40"
            ]
         ]
      },
      "profile": {
         "height": "0.5 m",
         "weight": "11.5 kg",
         "egg": [
            "Water 1",
            "Water 3"
         ],
         "ability": [
            [
               "Swift Swim",
               "false"
            ],
            [
               "Battle Armor",
               "false"
            ],
            [
               "Weak Armor",
               "true"
            ]
         ],
         "gender": "87.5:12.5"
      },
      "image": {
         "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/140.png",
         "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/140.png",
         "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/140.png"
      }
   },
   {
      "id": 141,
      "name": {
         "english": "Kabutops",
         "japanese": "カブトプス",
         "chinese": "镰刀盔",
         "french": "Kabutops"
      },
      "type": [
         "Rock",
         "Water"
      ],
      "base": {
         "HP": 60,
         "Attack": 115,
         "Defense": 105,
         "SpAttack": 65,
         "SpDefense": 70,
         "Speed": 80
      },
      "species": "Shellfish Pokémon",
      "description": "It swims at speeds of roughly 29 knots, quickly closing in on its prey and slashing into them with its scythes to finish them off.",
      "evolution": {
         "prev": [
            "140",
            "Level 40"
         ]
      },
      "profile": {
         "height": "1.3 m",
         "weight": "40.5 kg",
         "egg": [
            "Water 1",
            "Water 3"
         ],
         "ability": [
            [
               "Swift Swim",
               "false"
            ],
            [
               "Battle Armor",
               "false"
            ],
            [
               "Weak Armor",
               "true"
            ]
         ],
         "gender": "87.5:12.5"
      },
      "image": {
         "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/141.png",
         "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/141.png",
         "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/141.png"
      }
   },
   {
      "id": 142,
      "name": {
         "english": "Aerodactyl",
         "japanese": "プテラ",
         "chinese": "化石翼龙",
         "french": "Ptéra"
      },
      "type": [
         "Rock",
         "Flying"
      ],
      "base": {
         "HP": 80,
         "Attack": 105,
         "Defense": 65,
         "SpAttack": 60,
         "SpDefense": 75,
         "Speed": 130
      },
      "species": "Fossil Pokémon",
      "description": "It flew through the open skies over the ancient continent as if they were its own. When it touched ground, its walk was weak and slow.",
      "evolution": {},
      "profile": {
         "height": "1.8 m",
         "weight": "59 kg",
         "egg": [
            "Flying"
         ],
         "ability": [
            [
               "Rock Head",
               "false"
            ],
            [
               "Pressure",
               "false"
            ],
            [
               "Unnerve",
               "true"
            ]
         ],
         "gender": "87.5:12.5"
      },
      "image": {
         "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/142.png",
         "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/142.png",
         "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/142.png"
      }
   },
   {
      "id": 143,
      "name": {
         "english": "Snorlax",
         "japanese": "カビゴン",
         "chinese": "卡比兽",
         "french": "Ronflex"
      },
      "type": [
         "Normal"
      ],
      "base": {
         "HP": 160,
         "Attack": 110,
         "Defense": 65,
         "SpAttack": 65,
         "SpDefense": 110,
         "Speed": 30
      },
      "species": "Sleeping Pokémon",
      "description": "It has no interest in anything other than eating. Even if you climb up on its stomach while it’s napping, it doesn’t seem to mind at all!",
      "evolution": {
         "prev": [
            "446",
            "high Friendship"
         ]
      },
      "profile": {
         "height": "2.1 m",
         "weight": "460 kg",
         "egg": [
            "Monster"
         ],
         "ability": [
            [
               "Immunity",
               "false"
            ],
            [
               "Thick Fat",
               "false"
            ],
            [
               "Gluttony",
               "true"
            ]
         ],
         "gender": "87.5:12.5"
      },
      "image": {
         "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/143.png",
         "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/143.png",
         "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/143.png"
      }
   },
   {
      "id": 144,
      "name": {
         "english": "Articuno",
         "japanese": "フリーザー",
         "chinese": "急冻鸟",
         "french": "Artikodin"
      },
      "type": [
         "Ice",
         "Flying"
      ],
      "base": {
         "HP": 90,
         "Attack": 85,
         "Defense": 100,
         "SpAttack": 95,
         "SpDefense": 125,
         "Speed": 85
      },
      "species": "Freeze Pokémon",
      "description": "Articuno is a legendary bird Pokémon that can control ice. The flapping of its wings chills the air. As a result, it is said that when this Pokémon flies, snow will fall.",
      "evolution": {},
      "profile": {
         "height": "1.7 m",
         "weight": "55.4 kg",
         "egg": [
            "Undiscovered"
         ],
         "ability": [
            [
               "Pressure",
               "false"
            ],
            [
               "Snow Cloak",
               "true"
            ]
         ],
         "gender": "Genderless"
      },
      "image": {
         "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/144.png",
         "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/144.png",
         "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/144.png"
      }
   },
   {
      "id": 145,
      "name": {
         "english": "Zapdos",
         "japanese": "サンダー",
         "chinese": "闪电鸟",
         "french": "Électhor"
      },
      "type": [
         "Electric",
         "Flying"
      ],
      "base": {
         "HP": 90,
         "Attack": 90,
         "Defense": 85,
         "SpAttack": 125,
         "SpDefense": 90,
         "Speed": 100
      },
      "species": "Electric Pokémon",
      "description": "Zapdos is a legendary bird Pokémon that has the ability to control electricity. It usually lives in thunderclouds. The Pokémon gains power if it is stricken by lightning bolts.",
      "evolution": {},
      "profile": {
         "height": "1.6 m",
         "weight": "52.6 kg",
         "egg": [
            "Undiscovered"
         ],
         "ability": [
            [
               "Pressure",
               "false"
            ],
            [
               "Static",
               "true"
            ]
         ],
         "gender": "Genderless"
      },
      "image": {
         "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/145.png",
         "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/145.png",
         "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/145.png"
      }
   },
   {
      "id": 146,
      "name": {
         "english": "Moltres",
         "japanese": "ファイヤー",
         "chinese": "火焰鸟",
         "french": "Sulfura"
      },
      "type": [
         "Fire",
         "Flying"
      ],
      "base": {
         "HP": 90,
         "Attack": 100,
         "Defense": 90,
         "SpAttack": 125,
         "SpDefense": 85,
         "Speed": 90
      },
      "species": "Flame Pokémon",
      "description": "Moltres is a legendary bird Pokémon that has the ability to control fire. If this Pokémon is injured, it is said to dip its body in the molten magma of a volcano to burn and heal itself.",
      "evolution": {},
      "profile": {
         "height": "2 m",
         "weight": "60 kg",
         "egg": [
            "Undiscovered"
         ],
         "ability": [
            [
               "Pressure",
               "false"
            ],
            [
               "Flame Body",
               "true"
            ]
         ],
         "gender": "Genderless"
      },
      "image": {
         "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/146.png",
         "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/146.png",
         "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/146.png"
      }
   },
   {
      "id": 147,
      "name": {
         "english": "Dratini",
         "japanese": "ミニリュウ",
         "chinese": "迷你龙",
         "french": "Minidraco"
      },
      "type": [
         "Dragon"
      ],
      "base": {
         "HP": 41,
         "Attack": 64,
         "Defense": 45,
         "SpAttack": 50,
         "SpDefense": 50,
         "Speed": 50
      },
      "species": "Dragon Pokémon",
      "description": "It sheds its skin—almost on a daily basis—and grows larger. Its skin is soft just after it’s been shed.",
      "evolution": {
         "next": [
            [
               "148",
               "Level 30"
            ]
         ]
      },
      "profile": {
         "height": "1.8 m",
         "weight": "3.3 kg",
         "egg": [
            "Water 1",
            "Dragon"
         ],
         "ability": [
            [
               "Shed Skin",
               "false"
            ],
            [
               "Marvel Scale",
               "true"
            ]
         ],
         "gender": "50:50"
      },
      "image": {
         "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/147.png",
         "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/147.png",
         "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/147.png"
      }
   },
   {
      "id": 148,
      "name": {
         "english": "Dragonair",
         "japanese": "ハクリュー",
         "chinese": "哈克龙",
         "french": "Draco"
      },
      "type": [
         "Dragon"
      ],
      "base": {
         "HP": 61,
         "Attack": 84,
         "Defense": 65,
         "SpAttack": 70,
         "SpDefense": 70,
         "Speed": 70
      },
      "species": "Dragon Pokémon",
      "description": "Some say that if you see it at the start of the year, flying through the sky and twisting its body, you’ll be healthy all year long.",
      "evolution": {
         "prev": [
            "147",
            "Level 30"
         ],
         "next": [
            [
               "149",
               "Level 55"
            ]
         ]
      },
      "profile": {
         "height": "4 m",
         "weight": "16.5 kg",
         "egg": [
            "Water 1",
            "Dragon"
         ],
         "ability": [
            [
               "Shed Skin",
               "false"
            ],
            [
               "Marvel Scale",
               "true"
            ]
         ],
         "gender": "50:50"
      },
      "image": {
         "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/148.png",
         "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/148.png",
         "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/148.png"
      }
   },
   {
      "id": 149,
      "name": {
         "english": "Dragonite",
         "japanese": "カイリュー",
         "chinese": "快龙",
         "french": "Dracolosse"
      },
      "type": [
         "Dragon",
         "Flying"
      ],
      "base": {
         "HP": 91,
         "Attack": 134,
         "Defense": 95,
         "SpAttack": 100,
         "SpDefense": 100,
         "Speed": 80
      },
      "species": "Dragon Pokémon",
      "description": "You’ll often hear tales of this kindhearted Pokémon rescuing people or Pokémon that are drowning.",
      "evolution": {
         "prev": [
            "148",
            "Level 55"
         ]
      },
      "profile": {
         "height": "2.2 m",
         "weight": "210 kg",
         "egg": [
            "Water 1",
            "Dragon"
         ],
         "ability": [
            [
               "Inner Focus",
               "false"
            ],
            [
               "Multiscale",
               "true"
            ]
         ],
         "gender": "50:50"
      },
      "image": {
         "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/149.png",
         "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/149.png",
         "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/149.png"
      }
   },
   {
      "id": 150,
      "name": {
         "english": "Mewtwo",
         "japanese": "ミュウツー",
         "chinese": "超梦",
         "french": "Mewtwo"
      },
      "type": [
         "Psychic"
      ],
      "base": {
         "HP": 106,
         "Attack": 110,
         "Defense": 90,
         "SpAttack": 154,
         "SpDefense": 90,
         "Speed": 130
      },
      "species": "Genetic Pokémon",
      "description": "Mewtwo is a Pokémon that was created by genetic manipulation. However, even though the scientific power of humans created this Pokémon’s body, they failed to endow Mewtwo with a compassionate heart.",
      "evolution": {},
      "profile": {
         "height": "2 m",
         "weight": "122 kg",
         "egg": [
            "Undiscovered"
         ],
         "ability": [
            [
               "Pressure",
               "false"
            ],
            [
               "Unnerve",
               "true"
            ]
         ],
         "gender": "Genderless"
      },
      "image": {
         "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/150.png",
         "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/150.png",
         "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/150.png"
      }
   },
   {
      "id": 151,
      "name": {
         "english": "Mew",
         "japanese": "ミュウ",
         "chinese": "梦幻",
         "french": "Mew"
      },
      "type": [
         "Psychic"
      ],
      "base": {
         "HP": 100,
         "Attack": 100,
         "Defense": 100,
         "SpAttack": 100,
         "SpDefense": 100,
         "Speed": 100
      },
      "species": "New Species Pokémon",
      "description": "Mew is said to possess the genetic composition of all Pokémon. It is capable of making itself invisible at will, so it entirely avoids notice even if it approaches people.",
      "evolution": {},
      "profile": {
         "height": "0.4 m",
         "weight": "4 kg",
         "egg": [
            "Undiscovered"
         ],
         "ability": [
            [
               "Synchronize",
               "false"
            ]
         ],
         "gender": "Genderless"
      },
      "image": {
         "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/151.png",
         "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/151.png",
         "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/151.png"
      }
   }
] as PokemonInterface[]