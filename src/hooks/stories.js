export const stories = [
  {
    id: 1,
    title: "The Enchanted Forest Adventure",
    story: {
      part1: {
        data: "Once upon a time, in a small village nestled between mountains and rivers, there lived a young adventurer named Alex. Alex was known for their curiosity and bravery, always eager to explore new places and discover hidden secrets.",
        choices: [],
        next: "part2",
      },
      part2: {
        data: "One day, Alex heard rumors about an enchanted forest on the outskirts of the village. The villagers spoke of treasures hidden deep within its woods and ancient secrets waiting to be uncovered. However, they also warned of the dangers lurking in the shadows.",
        choices: [],
        next: "part3",
      },
      part3: {
        data: "Excited by the tales, Alex decided to explore the forest, despite the warnings. The next morning, with a pack filled with supplies and a heart full of courage, Alex set off toward the enchanted forest.",
        choices: [],
        next: "part4",
      },
      part4: {
        data: "As Alex stepped into the forest, a sense of mystery enveloped them. The dense canopy above blocked much of the sunlight, casting long shadows on the ground. The air was cool and fresh, and the forest was alive with the sounds of rustling leaves and distant chirping birds.",
        choices: [],
        next: "part5",
      },
      part5: {
        data: "After walking for some time, Alex came to a fork in the path.",
        choices: [
          {
            id: 1,
            title: "Left Path",
            details:
              "Colorful flowers bloom, and the sound of a gentle stream can be heard nearby.",
            next: "part6",
          },
          {
            id: 2,
            title: "Right Path",
            details:
              "The path seems darker and more mysterious, with towering trees that creak in the wind.",
            next: "part18",
          },
        ],
        next: "",
      },
      part6: {
        data: "Drawn by the beauty of the flowers and the soothing sound of the stream, Alex takes the left path. The forest here feels alive and welcoming.",
        choices: [],
        next: "part7",
      },
      part7: {
        data: "As they walk, the path becomes brighter, and soon Alex finds themselves in a beautiful glade, with a crystal-clear stream flowing through it. Kneeling down to drink from the stream, Alex notices something shiny in the water. It's a golden key!",
        choices: [
          {
            id: 1,
            title: "Pick up the key and continue down the path.",
            details: "",
            next: "part8",
          },
          {
            id: 2,
            title: "Leave the key and follow the stream to see where it leads.",
            details: "",
            next: "part31",
          },
        ],
        next: "",
      },
      part8: {
        data: "Curious about the golden key, Alex picks it up. It feels warm to the touch and seems to pulse with a faint magical energy.",
        choices: [],
        next: "part9",
      },
      part9: {
        data: "Alex continues down the path, and after a short walk, they come across an old stone door hidden behind a thick wall of vines. The door has a keyhole that matches the key perfectly.",
        choices: [
          {
            id: 1,
            title:
              "Use the key to unlock the door and enter the hidden chamber.",
            details: "",
            next: "part10",
          },
          {
            id: 2,
            title:
              "Keep the key and continue exploring the forest without unlocking the door.",
            details: "",
            next: "part31",
          },
        ],
        next: "",
      },
      part10: {
        data: "With a sense of anticipation, Alex inserts the key into the lock and turns it.",
        choices: [],
        next: "part11",
      },
      part11: {
        data: "The door opens with a slow, creaking sound, revealing a hidden chamber inside. The chamber is filled with ancient books, scrolls, and strange artifacts.",
        choices: [],
        next: "part12",
      },
      part12: {
        data: "As Alex steps inside, a soft light fills the room, illuminating a large, dusty tome resting on a pedestal in the center.",
        choices: [],
        next: "part13",
      },
      part13: {
        data: "Alex approaches the book and opens it.",
        choices: [],
        next: "part14",
      },
      part14: {
        data: "The pages are filled with spells and knowledge of a time long past. Alex realizes they have stumbled upon a lost library of magical knowledge.",
        choices: [],
        next: "part15",
      },
      part15: {
        data: "With the wisdom contained in these books, Alex can learn powerful spells and uncover secrets that have been forgotten for centuries.",
        choices: [],
        next: "part16",
      },
      part16: {
        data: "Feeling a sense of accomplishment, Alex decides to spend some time studying the books and learning all they can from this hidden library.",
        choices: [],
        next: "part17",
      },
      part17: {
        data: "Alex becomes a powerful sorcerer, using the knowledge from the enchanted library to help their village prosper.",
        choices: [],
        next: "end",
      },
      part18: {
        data: "Intrigued by the mystery of the darker woods, Alex takes the right path.",
        choices: [],
        next: "part19",
      },
      part19: {
        data: "The trees here are taller and closer together, creating a canopy that blocks out much of the light. The air grows cooler, and a sense of unease settles over Alex.",
        choices: [],
        next: "part20",
      },
      part20: {
        data: "As they walk deeper into the woods, a rustling sound comes from behind them. Alex turns and sees a pair of glowing eyes staring at them from the shadows!",
        choices: [
          {
            id: 1,
            title: "Confront the creature to see what it wants.",
            details: "",
            next: "part21",
          },
          {
            id: 2,
            title: "Run away deeper into the woods to avoid whatever it is.",
            details: "",
            next: "part45",
          },
        ],
        next: "",
      },
      part21: {
        data: "Summoning their courage, Alex decides to confront the creature.",
        choices: [],
        next: "part22",
      },
      part22: {
        data: "As they step forward, the creature emerges from the shadows. It’s a large wolf, but it doesn’t appear hostile. Instead, it sits and watches Alex, tilting its head curiously.",
        choices: [],
        next: "part24",
      },
      part24: {
        data: "Alex notices a thorn stuck in the wolf’s paw.",
        choices: [
          {
            id: 1,
            title: "Help the wolf by removing the thorn.",
            details: "",
            next: "part25",
          },
          {
            id: 2,
            title: "Leave the wolf and continue on the path.",
            details: "",
            next: "part45",
          },
        ],
        next: "",
      },
      part25: {
        data: "Gently, Alex approaches the wolf and kneels down. Speaking softly, they reach out and carefully remove the thorn from the wolf's paw.",
        choices: [],
        next: "part26",
      },
      part26: {
        data: "The wolf yelps softly but soon relaxes, realizing that Alex means no harm. Once the thorn is out, the wolf licks Alex’s hand in gratitude.",
        choices: [],
        next: "part27",
      },
      part27: {
        data: "The wolf then stands and begins to walk away but pauses and looks back at Alex, as if urging them to follow.",
        choices: [],
        next: "part28",
      },
      part28: {
        data: "Deciding to trust the wolf, Alex follows it deeper into the woods. After some time, they come to a hidden glade where a beautiful silver tree stands. The tree’s leaves glisten like stars, and at its base lies a treasure chest.",
        choices: [],
        next: "part29",
      },
      part29: {
        data: "The wolf nudges the chest with its nose, and Alex opens it to find it filled with gold, jewels, and precious artifacts. Alex realizes that they have found a treasure beyond their wildest dreams, thanks to the kindness they showed to the wolf.",
        choices: [],
        next: "part30",
      },
      part30: {
        data: "Alex returns to the village a hero, with riches to share and tales of their adventure.",
        choices: [],
        next: "end",
      },
      part31: {
        data: "Alex decides to follow the stream, curious about where it might lead.",
        choices: [],
        next: "part33",
      },
      part33: {
        data: "The sound of the flowing water is calming, and Alex carefully makes their way along the stream's edge, enjoying the vibrant greenery and the occasional sight of small fish darting through the clear water.",
        choices: [],
        next: "part34",
      },
      part34: {
        data: "After walking for a while, the stream widens and leads Alex to a small, picturesque waterfall cascading into a serene pond.",
        choices: [],
        next: "part35",
      },
      part35: {
        data: "The water sparkles in the dappled sunlight that manages to peek through the thick canopy overhead. At the base of the waterfall, partially concealed by moss and ferns, Alex spots a cave entrance. The cave looks dark and mysterious, with faint sounds echoing from within.",
        choices: [
          {
            id: 1,
            title: "Enter the cave to explore what secrets it might hold.",
            details: "",
            next: "part36",
          },
          {
            id: 2,
            title:
              "Avoid the cave and continue following the stream further downstream.",
            details: "",
            next: "part44",
          },
        ],
        next: "",
      },
      part36: {
        data: "Intrigued by the mystery of the cave, Alex decides to enter. The air inside is cool and damp, and the walls glisten with moisture. As Alex carefully makes their way deeper into the cave, they notice strange, glowing crystals embedded in the walls. The crystals emit a soft, blue light, illuminating the narrow path ahead.",
        choices: [],
        next: "part37",
      },
      part37: {
        data: "As Alex continues, they come across a large chamber filled with even more glowing crystals. In the center of the chamber lies a stone pedestal with a beautifully crafted silver chalice resting on it. The chalice is intricately designed, and Alex can sense a magical aura emanating from it.",
        choices: [
          {
            id: 1,
            title:
              "Take the chalice from the pedestal, hoping it holds some magical properties.",
            details: "",
            next: "part38",
          },
          {
            id: 2,
            title: "Leave the chalice and explore the rest of the cave.",
            details: "",
            next: "part56",
          },
        ],
        next: "",
      },
      part38: {
        data: "Deciding to take a chance, Alex carefully lifts the silver chalice from the pedestal.",
        choices: [],
        next: "part39",
      },
      part39: {
        data: "As soon as the chalice is removed, the cave begins to tremble, and the crystals’ light grows brighter. A deep, resonant voice fills the chamber",
        choices: [],
        next: "part40",
      },
      part40: {
        data: '"You have chosen wisely, seeker of truth. The Chalice of Clarity will grant you the ability to see the true nature of things, but use it wisely."',
        choices: [],
        next: "part41",
      },
      part41: {
        data: "Realizing the power of the chalice, Alex carefully puts it in their pack and makes their way out of the cave, feeling a sense of accomplishment and wonder.",
        choices: [],
        next: "part42",
      },
      part42: {
        data: "Outside, the forest seems even more vibrant and alive. With the chalice's power, Alex is able to see hidden paths, avoid dangerous traps, and uncover even more secrets of the enchanted forest.",
        choices: [],
        next: "part43",
      },
      part43: {
        data: "Alex gains the Chalice of Clarity, using its power to uncover the forest's secrets and help the village find hidden truths and lost knowledge.",
        choices: [],
        next: "end",
      },
      part44: {
        data: "Deciding that the cave might be too risky, Alex chooses to continue following the stream further downstream.",
        choices: [],
        next: "part45",
      },
      part45: {
        data: "The path becomes narrower, and the sound of the waterfall fades into the background. After a while, Alex notices that the stream is leading them to a clearing with a massive oak tree in its center. The tree is ancient, with a wide trunk and sprawling branches.",
        choices: [],
        next: "part46",
      },
      part46: {
        data: "At the base of the oak tree, there is a small, wooden chest partially buried in the earth, with its lid slightly ajar.",
        choices: [
          {
            id: 1,
            title: "Open the chest to see what's inside.",
            details: "",
            next: "part47",
          },
          {
            id: 2,
            title: "Leave the chest alone and continue exploring the clearing.",
            details: "",
            next: "part57",
          },
        ],
        next: "",
      },
      part47: {
        data: "Alex decides to open the chest, gently lifting the lid. Inside, they find a collection of small, intricately carved wooden figurines and a rolled-up piece of parchment.",
        choices: [],
        next: "part48",
      },
      part48: {
        data: "Unrolling the parchment, Alex discovers that it is an old map of the enchanted forest. The map shows various hidden locations marked with symbols, including one that appears to lead to a legendary treasure hidden deep within the forest.",
        choices: [],
        next: "part49",
      },
      part49: {
        data: "Excited by the discovery, Alex decides to use the map to guide their exploration further.",
        choices: [],
        next: "part50",
      },
      part50: {
        data: "Following the map, Alex ventures deeper into the forest, finding paths that were previously hidden and avoiding areas marked as dangerous. Eventually, the map leads them to a secluded glen where an ancient stone monument stands.",
        choices: [],
        next: "part51",
      },
      part51: {
        data: "The monument has inscriptions in a language Alex doesn’t understand, but one of the symbols on the map matches a symbol carved into the stone.",
        choices: [],
        next: "part52",
      },
      part52: {
        data: "Trusting the map, Alex places their hand on the symbol. Suddenly, the ground beneath the monument shifts, revealing a hidden staircase descending into a secret underground chamber.",
        choices: [],
        next: "part53",
      },
      part53: {
        data: "Inside the chamber, Alex finds a trove of ancient artifacts, gold coins, and precious gems—far more than they could have ever imagined.",
        choices: [],
        next: "part54",
      },
      part54: {
        data: "In the center of the chamber sits an ornate, jewel-encrusted box. When Alex opens it, they find a mystical amulet said to grant the wearer protection and enhanced abilities.",
        choices: [],
        next: "part55",
      },
      part55: {
        data: "Alex returns to the village, not only with treasure but also with an amulet of protection. The villagers celebrate Alex’s safe return and the incredible fortune brought back. Alex is hailed as a hero, their name becoming a legend in the village.",
        choices: [],
        next: "end",
      },
      part56: {
        data: "Alex notices there is a chest at the end of the cave",
        choices: [],
        next: "part47",
      },
      part57: {
        data: "Alex found a rolled-up piece of parchment.",
        choices: [],
        next: "part48",
      },
    },
  },
  {
    id: 2,
    title: "The Lost Planet Expedition",
    story: {
      part1: {
        data: "In the distant future, humanity has begun exploring the far reaches of space. Jamie, a seasoned astronaut, is part of a mission to explore a newly discovered planet called Xenthara. The planet's surface is covered in strange blue vegetation and towering rock formations.",
        choices: [],
        next: "part2",
      },
      part2: {
        data: "Upon landing, Jamie steps out of the spacecraft and feels the low gravity of Xenthara. The mission is to gather samples and explore the terrain, but Jamie notices a faint signal coming from a nearby cave.",
        choices: [
          {
            id: 1,
            title: "Investigate the signal in the cave.",
            details:
              "The cave looks dark and mysterious, with an eerie glow emanating from within.",
            next: "part3",
          },
          {
            id: 2,
            title: "Ignore the signal and explore the surface of the planet.",
            details:
              "The surface is vast and filled with strange, blue plant life.",
            next: "part10",
          },
        ],
        next: "",
      },
      part3: {
        data: "Curious about the signal, Jamie decides to enter the cave. As they venture deeper, the glow becomes brighter, and the signal stronger.",
        choices: [],
        next: "part4",
      },
      part4: {
        data: "Inside the cave, Jamie discovers a piece of alien technology emitting the signal. It appears to be a small, cube-like device with unknown symbols on it.",
        choices: [
          {
            id: 1,
            title: "Pick up the alien device to examine it.",
            details: "",
            next: "part5",
          },
          {
            id: 2,
            title: "Leave the device and continue exploring the cave.",
            details: "",
            next: "part8",
          },
        ],
        next: "",
      },
      part5: {
        data: "As Jamie picks up the device, it activates, projecting a holographic map of the cave system. Jamie realizes this device could help navigate through the cave.",
        choices: [],
        next: "part6",
      },
      part6: {
        data: "Using the map, Jamie finds a hidden passage leading deeper into the cave. The passage opens into a chamber filled with glowing crystals and an ancient alien structure.",
        choices: [
          {
            id: 1,
            title: "Enter the alien structure to investigate further.",
            details: "",
            next: "part7",
          },
          {
            id: 2,
            title: "Leave the cave and return to the surface.",
            details: "",
            next: "part12",
          },
        ],
        next: "",
      },
      part7: {
        data: "Inside the alien structure, Jamie finds advanced technology and a strange artifact that could be a key to the planet's secrets.",
        choices: [],
        next: "ending1",
      },
      part8: {
        data: "Jamie continues exploring the cave and discovers a subterranean river flowing with a glowing liquid. It seems to have unique properties.",
        choices: [
          {
            id: 1,
            title: "Collect a sample of the glowing liquid.",
            details: "",
            next: "part9",
          },
          {
            id: 2,
            title: "Leave the cave and report the findings to the team.",
            details: "",
            next: "part12",
          },
        ],
        next: "",
      },
      part9: {
        data: "As Jamie collects the liquid, they feel a strange energy coursing through their body. The liquid seems to enhance their senses and strength temporarily.",
        choices: [],
        next: "part13",
      },
      part10: {
        data: "Deciding to explore the surface, Jamie moves away from the cave and starts examining the strange blue plants.",
        choices: [],
        next: "part11",
      },
      part11: {
        data: "The plants are unlike anything seen before, with flowers that seem to change color and emit a soft hum. Jamie decides to collect some samples.",
        choices: [
          {
            id: 1,
            title: "Continue exploring the planet's surface.",
            details: "",
            next: "part14",
          },
          {
            id: 2,
            title: "Return to the spaceship with the samples.",
            details: "",
            next: "ending3",
          },
        ],
        next: "",
      },
      part12: {
        data: "Jamie returns to the surface and shares the discoveries with the rest of the team. They decide to further investigate the cave with more equipment.",
        choices: [],
        next: "ending2",
      },
      part13: {
        data: "With enhanced senses, Jamie explores the cave further and finds a hidden exit leading to a valley filled with ancient ruins.",
        choices: [],
        next: "ending4",
      },
      part14: {
        data: "While exploring, Jamie encounters an unexpected storm. The winds are strong and filled with dust, reducing visibility significantly.",
        choices: [
          {
            id: 1,
            title: "Take shelter under a rock formation.",
            details: "",
            next: "ending5",
          },
          {
            id: 2,
            title: "Try to find a way back to the spaceship.",
            details: "",
            next: "ending6",
          },
        ],
        next: "",
      },
      ending1: {
        data: "Jamie spends hours studying the advanced technology in the alien structure. With the newfound knowledge and artifact, Jamie returns to the spaceship, ready to share the secrets of Xenthara with humanity. This discovery could change the course of history!",
        choices: [],
        next: "end",
      },
      ending2: {
        data: "The team, armed with new equipment and knowledge, prepares for a deeper exploration of the mysterious cave. Jamie's initial findings have paved the way for future discoveries, making this mission a monumental success.",
        choices: [],
        next: "end",
      },
      ending3: {
        data: "Jamie returns to the spaceship with unique plant samples. The research team is excited about the potential discoveries these samples might hold. The mission is considered a great success, as humanity learns more about the alien flora of Xenthara.",
        choices: [],
        next: "end",
      },
      ending4: {
        data: "Jamie explores the valley filled with ancient ruins and uncovers remnants of a long-lost alien civilization. The discovery is groundbreaking, offering new insights into the history of intelligent life in the universe.",
        choices: [],
        next: "end",
      },
      ending5: {
        data: "Jamie takes shelter under a rock formation as the storm passes. Surviving the storm unscathed, Jamie continues the mission with renewed caution and determination.",
        choices: [],
        next: "end",
      },
      ending6: {
        data: "Jamie bravely makes their way back to the spaceship, battling against the fierce winds and dust. Safely back on board, Jamie reflects on the planet's unpredictability and the importance of being prepared for anything.",
        choices: [],
        next: "end",
      },
    },
  },
];
