/**
 * Mr. White - Social Deduction Party Game
 * A web-based implementation of the popular party game
 */

// ==================== WORD DATABASE ====================
const WORD_DATABASE = {
    animals: {
        name: "🐾 Animals",
        pairs: [
            { civilian: "Dog", undercover: "Wolf" },
            { civilian: "Cat", undercover: "Tiger" },
            { civilian: "Elephant", undercover: "Mammoth" },
            { civilian: "Dolphin", undercover: "Shark" },
            { civilian: "Eagle", undercover: "Hawk" },
            { civilian: "Lion", undercover: "Cheetah" },
            { civilian: "Rabbit", undercover: "Hare" },
            { civilian: "Penguin", undercover: "Puffin" },
            { civilian: "Horse", undercover: "Donkey" },
            { civilian: "Butterfly", undercover: "Moth" },
            { civilian: "Zebra", undercover: "Striped Horse" },
            { civilian: "Giraffe", undercover: "Okapi" },
            { civilian: "Bear", undercover: "Panda" },
            { civilian: "Whale", undercover: "Porpoise" },
            { civilian: "Owl", undercover: "Falcon" },
            { civilian: "Snake", undercover: "Lizard" },
            { civilian: "Frog", undercover: "Toad" },
            { civilian: "Fox", undercover: "Jackal" },
            { civilian: "Deer", undercover: "Moose" },
            { civilian: "Cow", undercover: "Buffalo" },
            { civilian: "Pig", undercover: "Boar" },
            { civilian: "Sheep", undercover: "Goat" },
            { civilian: "Chicken", undercover: "Turkey" },
            { civilian: "Duck", undercover: "Goose" },
            { civilian: "Parrot", undercover: "Macaw" },
            { civilian: "Spider", undercover: "Scorpion" },
            { civilian: "Ant", undercover: "Termite" },
            { civilian: "Bee", undercover: "Wasp" },
            { civilian: "Fish", undercover: "Trout" },
            { civilian: "Squirrel", undercover: "Chipmunk" },
            { civilian: "Porcupine", undercover: "Hedgehog" },
            { civilian: "Otter", undercover: "Weasel" },
            { civilian: "Badger", undercover: "Raccoon" },
            { civilian: "Kangaroo", undercover: "Wallaby" },
            { civilian: "Koala", undercover: "Wombat" },
            { civilian: "Monkey", undercover: "Ape" },
            { civilian: "Gorilla", undercover: "Chimpanzee" },
            { civilian: "Camel", undercover: "Llama" },
            { civilian: "Ostrich", undercover: "Emu" },
            { civilian: "Crocodile", undercover: "Alligator" },
            { civilian: "Turtle", undercover: "Tortoise" },
            { civilian: "Crab", undercover: "Lobster" },
            { civilian: "Octopus", undercover: "Squid" },
            { civilian: "Starfish", undercover: "Sea Urchin" },
            { civilian: "Jellyfish", undercover: "Sea Anemone" },
            { civilian: "Peacock", undercover: "Pheasant" },
            { civilian: "Swan", undercover: "Flamingo" },
            { civilian: "Stork", undercover: "Crane" },
            { civilian: "Vulture", undercover: "Raven" },
            { civilian: "Cheetah", undercover: "Leopard" },
            { civilian: "Hyena", undercover: "Jackal" },
            { civilian: "Leopard", undercover: "Jaguar" },
            { civilian: "Puma", undercover: "Cougar" },
            { civilian: "Salmon", undercover: "Pike" },
            { civilian: "Tuna", undercover: "Mackerel" },
            { civilian: "Sloth", undercover: "Anteater" },
            { civilian: "Armadillo", undercover: "Pangolin" },
            { civilian: "Hamster", undercover: "Guinea Pig" },
            { civilian: "Gerbil", undercover: "Mouse" },
            { civilian: "Lizard", undercover: "Salamander" },
            { civilian: "Newt", undercover: "Axolotl" },
            { civilian: "Caterpillar", undercover: "Larva" },
            { civilian: "Dragonfly", undercover: "Damselfly" },
            { civilian: "Grasshopper", undercover: "Cricket" },
            { civilian: "Mantis", undercover: "Katydid" },
            { civilian: "Beetle", undercover: "Firefly" },
            { civilian: "Ladybug", undercover: "Cicada" },
            { civilian: "Snail", undercover: "Slug" },
            { civilian: "Worm", undercover: "Leech" },
            { civilian: "Mole", undercover: "Shrew" },
            { civilian: "Lynx", undercover: "Bobcat" },
            { civilian: "Reindeer", undercover: "Elk" },
            { civilian: "Antelope", undercover: "Gazelle" },
            { civilian: "Bison", undercover: "Yak" },
            { civilian: "Hippopotamus", undercover: "Rhinoceros" },
            { civilian: "Porcupine", undercover: "Quill Pig" },
            { civilian: "Alpaca", undercover: "Vicuña" },
            { civilian: "Chinchilla", undercover: "Degu" },
            { civilian: "Platypus", undercover: "Echidna" },
            { civilian: "Lemur", undercover: "Loris" },
            { civilian: "Gibbon", undercover: "Orangutan" },
            { civilian: "Baboon", undercover: "Mandrill" },
            { civilian: "Capybara", undercover: "Nutria" },
            { civilian: "Porcupine", undercover: "Spiny Anteater" },
            { civilian: "Gibbon", undercover: "Siamang" },
            { civilian: "Lemmings", undercover: "Voles" },
            { civilian: "Pronghorn", undercover: "Mountain Goat" },
            { civilian: "Wildebeest", undercover: "Gnu" },
            { civilian: "Impala", undercover: "Springbok" },
            { civilian: "Narwhal", undercover: "Beluga" },
            { civilian: "Walrus", undercover: "Sea Lion" },
            { civilian: "Seal", undercover: "Manatee" },
            { civilian: "Dugong", undercover: "Sirenian" },
            { civilian: "Hummingbird", undercover: "Sunbird" },
            { civilian: "Woodpecker", undercover: "Flicker" },
            { civilian: "Sparrow", undercover: "Finch" },
            { civilian: "Raven", undercover: "Crow" },
            { civilian: "Pigeon", undercover: "Dove" },
            { civilian: "Chicken", undercover: "Quail" },
            { civilian: "Grouse", undercover: "Partridge" }
        ]
    },
    food: {
        name: "🍕 Food",
        pairs: [
            { civilian: "Pizza", undercover: "Flatbread" },
            { civilian: "Burger", undercover: "Sandwich" },
            { civilian: "Sushi", undercover: "Sashimi" },
            { civilian: "Ice Cream", undercover: "Frozen Yogurt" },
            { civilian: "Coffee", undercover: "Tea" },
            { civilian: "Pasta", undercover: "Noodles" },
            { civilian: "Chocolate", undercover: "Cocoa" },
            { civilian: "Cheese", undercover: "Butter" },
            { civilian: "Apple", undercover: "Pear" },
            { civilian: "Orange", undercover: "Tangerine" },
            { civilian: "Bread", undercover: "Bagel" },
            { civilian: "Rice", undercover: "Couscous" },
            { civilian: "Chicken", undercover: "Turkey" },
            { civilian: "Beef", undercover: "Pork" },
            { civilian: "Fish", undercover: "Salmon" },
            { civilian: "Salad", undercover: "Slaw" },
            { civilian: "Soup", undercover: "Broth" },
            { civilian: "Steak", undercover: "Roast" },
            { civilian: "Bacon", undercover: "Ham" },
            { civilian: "Egg", undercover: "Omelet" },
            { civilian: "Pancake", undercover: "Waffle" },
            { civilian: "Cereal", undercover: "Granola" },
            { civilian: "Milk", undercover: "Yogurt" },
            { civilian: "Donut", undercover: "Pastry" },
            { civilian: "Cookie", undercover: "Brownie" },
            { civilian: "Candy", undercover: "Taffy" },
            { civilian: "Potato", undercover: "Yam" },
            { civilian: "Carrot", undercover: "Parsnip" },
            { civilian: "Broccoli", undercover: "Cauliflower" },
            { civilian: "Spinach", undercover: "Kale" },
            { civilian: "Corn", undercover: "Squash" },
            { civilian: "Tomato", undercover: "Pepper" },
            { civilian: "Onion", undercover: "Garlic" },
            { civilian: "Banana", undercover: "Plantain" },
            { civilian: "Strawberry", undercover: "Raspberry" },
            { civilian: "Blueberry", undercover: "Blackberry" },
            { civilian: "Grape", undercover: "Raisin" },
            { civilian: "Lemon", undercover: "Lime" },
            { civilian: "Watermelon", undercover: "Cantaloupe" },
            { civilian: "Pineapple", undercover: "Papaya" },
            { civilian: "Mango", undercover: "Peach" },
            { civilian: "Avocado", undercover: "Guacamole" },
            { civilian: "Almond", undercover: "Walnut" },
            { civilian: "Peanut", undercover: "Cashew" },
            { civilian: "Olive", undercover: "Pickle" },
            { civilian: "Bean", undercover: "Lentil" },
            { civilian: "Pea", undercover: "Chickpea" },
            { civilian: "Taco", undercover: "Burrito" },
            { civilian: "Quesadilla", undercover: "Enchilada" },
            { civilian: "Meatball", undercover: "Dumpling" },
            { civilian: "Shrimp", undercover: "Lobster" },
            { civilian: "Crab", undercover: "Oyster" },
            { civilian: "Clam", undercover: "Mussel" },
            { civilian: "Squid", undercover: "Octopus" },
            { civilian: "Pistachio", undercover: "Pecan" },
            { civilian: "Sunflower", undercover: "Pumpkin" },
            { civilian: "Sesame", undercover: "Poppy Seed" },
            { civilian: "Cinnamon", undercover: "Nutmeg" },
            { civilian: "Vanilla", undercover: "Almond Extract" },
            { civilian: "Honey", undercover: "Maple Syrup" },
            { civilian: "Ketchup", undercover: "Mustard" },
            { civilian: "Mayonnaise", undercover: "Sour Cream" },
            { civilian: "Salsa", undercover: "Guacamole" },
            { civilian: "Hummus", undercover: "Tahini" },
            { civilian: "Pesto", undercover: "Chimichurri" },
            { civilian: "BBQ Sauce", undercover: "Hot Sauce" },
            { civilian: "Gravy", undercover: "Cream Sauce" },
            { civilian: "Croissant", undercover: "Danish" },
            { civilian: "Muffin", undercover: "Cupcake" },
            { civilian: "Cake", undercover: "Pudding" },
            { civilian: "Pie", undercover: "Tart" },
            { civilian: "Cheesecake", undercover: "Tiramisu" },
            { civilian: "Candy Cane", undercover: "Lollipop" },
            { civilian: "Marshmallow", undercover: "Meringue" },
            { civilian: "Gummy", undercover: "Jelly" },
            { civilian: "Caramel", undercover: "Toffee" },
            { civilian: "Fudge", undercover: "Nougat" },
            { civilian: "Wafer", undercover: "Cracker" },
            { civilian: "Pretzel", undercover: "Chip" },
            { civilian: "Popcorn", undercover: "Nut Mix" },
            { civilian: "Trail Mix", undercover: "Granola Bar" },
            { civilian: "Smoothie", undercover: "Milkshake" },
            { civilian: "Juice", undercover: "Punch" },
            { civilian: "Soda", undercover: "Sparkling Water" },
            { civilian: "Beer", undercover: "Cider" },
            { civilian: "Wine", undercover: "Sake" },
            { civilian: "Whiskey", undercover: "Rum" },
            { civilian: "Vodka", undercover: "Tequila" },
            { civilian: "Gin", undercover: "Brandy" },
            { civilian: "Margarita", undercover: "Daiquiri" },
            { civilian: "Martini", undercover: "Mojito" },
            { civilian: "Espresso", undercover: "Cappuccino" },
            { civilian: "Latte", undercover: "Macchiato" },
            { civilian: "Mocha", undercover: "Americano" },
            { civilian: "Iced Coffee", undercover: "Cold Brew" }
        ]
    },
    places: {
        name: "🌍 Places",
        pairs: [
            { civilian: "Beach", undercover: "Lake" },
            { civilian: "Mountain", undercover: "Hill" },
            { civilian: "Library", undercover: "Bookstore" },
            { civilian: "Hospital", undercover: "Clinic" },
            { civilian: "Airport", undercover: "Train Station" },
            { civilian: "Museum", undercover: "Art Gallery" },
            { civilian: "Restaurant", undercover: "Cafe" },
            { civilian: "Park", undercover: "Garden" },
            { civilian: "School", undercover: "University" },
            { civilian: "Cinema", undercover: "Theater" },
            { civilian: "Mall", undercover: "Bazaar" },
            { civilian: "Bank", undercover: "ATM" },
            { civilian: "Hotel", undercover: "Resort" },
            { civilian: "Office", undercover: "Workspace" },
            { civilian: "House", undercover: "Apartment" },
            { civilian: "Church", undercover: "Chapel" },
            { civilian: "Gym", undercover: "Studio" },
            { civilian: "Pool", undercover: "Spa" },
            { civilian: "Market", undercover: "Store" },
            { civilian: "Street", undercover: "Avenue" },
            { civilian: "Bridge", undercover: "Tunnel" },
            { civilian: "Forest", undercover: "Jungle" },
            { civilian: "Desert", undercover: "Canyon" },
            { civilian: "Island", undercover: "Peninsula" },
            { civilian: "Valley", undercover: "Basin" },
            { civilian: "Farm", undercover: "Ranch" },
            { civilian: "Vineyard", undercover: "Orchard" },
            { civilian: "Factory", undercover: "Warehouse" },
            { civilian: "Harbor", undercover: "Port" },
            { civilian: "Castle", undercover: "Palace" },
            { civilian: "Monastery", undercover: "Abbey" },
            { civilian: "Stadium", undercover: "Arena" },
            { civilian: "Theater", undercover: "Amphitheater" },
            { civilian: "Opera House", undercover: "Concert Hall" },
            { civilian: "Gallery", undercover: "Atrium" },
            { civilian: "Tower", undercover: "Monument" },
            { civilian: "Fountain", undercover: "Waterfall" },
            { civilian: "Shrine", undercover: "Temple" },
            { civilian: "Prison", undercover: "Jail" },
            { civilian: "Cemetery", undercover: "Tomb" },
            { civilian: "Zoo", undercover: "Nature Reserve" },
            { civilian: "Aquarium", undercover: "Fish Tank" },
            { civilian: "Greenhouse", undercover: "Nursery" },
            { civilian: "Laboratory", undercover: "Research Center" },
            { civilian: "Observatory", undercover: "Planetarium" },
            { civilian: "Lighthouse", undercover: "Beacon" },
            { civilian: "Market Square", undercover: "Town Center" },
            { civilian: "Plaza", undercover: "Courtyard" },
            { civilian: "Subway", undercover: "Metro" },
            { civilian: "Bus Station", undercover: "Terminal" },
            { civilian: "Parking Lot", undercover: "Garage" },
            { civilian: "Gas Station", undercover: "Service Stop" },
            { civilian: "Laundromat", undercover: "Dry Cleaners" },
            { civilian: "Barbershop", undercover: "Salon" },
            { civilian: "Pharmacy", undercover: "Apothecary" },
            { civilian: "Grocery", undercover: "Supermarket" },
            { civilian: "Bakery", undercover: "Pastry Shop" },
            { civilian: "Butcher", undercover: "Meat Market" },
            { civilian: "Fish Market", undercover: "Seafood Stand" },
            { civilian: "Florist", undercover: "Nursery" },
            { civilian: "Bookstore", undercover: "Library" },
            { civilian: "Toy Store", undercover: "Game Shop" },
            { civilian: "Clothing Store", undercover: "Boutique" },
            { civilian: "Shoe Store", undercover: "Footwear Shop" },
            { civilian: "Jewelry Store", undercover: "Pawn Shop" },
            { civilian: "Electronics Store", undercover: "Tech Shop" },
            { civilian: "Furniture Store", undercover: "Design Studio" },
            { civilian: "Car Dealership", undercover: "Auto Shop" },
            { civilian: "Pet Store", undercover: "Veterinary Clinic" },
            { civilian: "Art Supply Store", undercover: "Craft Shop" },
            { civilian: "Music Store", undercover: "Recording Studio" },
            { civilian: "Sports Bar", undercover: "Tavern" },
            { civilian: "Nightclub", undercover: "Lounge" },
            { civilian: "Karaoke Bar", undercover: "Music Venue" },
            { civilian: "Hotel Lobby", undercover: "Reception Area" },
            { civilian: "Penthouse", undercover: "Suite" },
            { civilian: "Basement", undercover: "Cellar" },
            { civilian: "Attic", undercover: "Loft" },
            { civilian: "Kitchen", undercover: "Pantry" },
            { civilian: "Bedroom", undercover: "Sleeping Quarter" },
            { civilian: "Bathroom", undercover: "Restroom" },
            { civilian: "Living Room", undercover: "Den" },
            { civilian: "Dining Room", undercover: "Breakfast Nook" },
            { civilian: "Office", undercover: "Study" },
            { civilian: "Library", undercover: "Reading Room" },
            { civilian: "Nursery", undercover: "Playroom" },
            { civilian: "Hallway", undercover: "Corridor" },
            { civilian: "Stairs", undercover: "Landing" },
            { civilian: "Elevator", undercover: "Lift" },
            { civilian: "Balcony", undercover: "Terrace" },
            { civilian: "Patio", undercover: "Veranda" },
            { civilian: "Deck", undercover: "Boardwalk" },
            { civilian: "Porch", undercover: "Stoop" },
            { civilian: "Driveway", undercover: "Entrance" },
            { civilian: "Garden", undercover: "Botanical Park" },
            { civilian: "Playground", undercover: "Recreational Area" },
            { civilian: "Picnic Area", undercover: "Rest Stop" }
        ]
    },
    objects: {
        name: "📦 Objects",
        pairs: [
            { civilian: "Phone", undercover: "Tablet" },
            { civilian: "Chair", undercover: "Stool" },
            { civilian: "Book", undercover: "Magazine" },
            { civilian: "Clock", undercover: "Watch" },
            { civilian: "Lamp", undercover: "Candle" },
            { civilian: "Mirror", undercover: "Window" },
            { civilian: "Pillow", undercover: "Cushion" },
            { civilian: "Umbrella", undercover: "Parasol" },
            { civilian: "Glasses", undercover: "Sunglasses" },
            { civilian: "Wallet", undercover: "Purse" },
            { civilian: "Desk", undercover: "Table" },
            { civilian: "Bed", undercover: "Couch" },
            { civilian: "Door", undercover: "Gate" },
            { civilian: "Window", undercover: "Skylight" },
            { civilian: "Painting", undercover: "Poster" },
            { civilian: "Picture Frame", undercover: "Board" },
            { civilian: "Vase", undercover: "Jar" },
            { civilian: "Plate", undercover: "Bowl" },
            { civilian: "Cup", undercover: "Mug" },
            { civilian: "Spoon", undercover: "Fork" },
            { civilian: "Knife", undercover: "Blade" },
            { civilian: "Pot", undercover: "Pan" },
            { civilian: "Oven", undercover: "Stove" },
            { civilian: "Refrigerator", undercover: "Freezer" },
            { civilian: "Microwave", undercover: "Toaster" },
            { civilian: "Television", undercover: "Monitor" },
            { civilian: "Remote Control", undercover: "Controller" },
            { civilian: "Keyboard", undercover: "Keypad" },
            { civilian: "Mouse", undercover: "Trackpad" },
            { civilian: "Printer", undercover: "Scanner" },
            { civilian: "Camera", undercover: "Video Camera" },
            { civilian: "Headphones", undercover: "Earbuds" },
            { civilian: "Speaker", undercover: "Microphone" },
            { civilian: "Guitar", undercover: "Ukulele" },
            { civilian: "Piano", undercover: "Keyboard" },
            { civilian: "Drum", undercover: "Percussion" },
            { civilian: "Violin", undercover: "Viola" },
            { civilian: "Trumpet", undercover: "Trombone" },
            { civilian: "Flute", undercover: "Harmonica" },
            { civilian: "Bicycle", undercover: "Tricycle" },
            { civilian: "Car", undercover: "Truck" },
            { civilian: "Motorcycle", undercover: "Scooter" },
            { civilian: "Skateboard", undercover: "Roller Skates" },
            { civilian: "Ball", undercover: "Sphere" },
            { civilian: "Racket", undercover: "Paddle" },
            { civilian: "Baseball Bat", undercover: "Cricket Bat" },
            { civilian: "Net", undercover: "Cage" },
            { civilian: "Rope", undercover: "String" },
            { civilian: "Chain", undercover: "Link" },
            { civilian: "Lock", undercover: "Padlock" },
            { civilian: "Key", undercover: "Keycard" },
            { civilian: "Flashlight", undercover: "Torch" },
            { civilian: "Battery", undercover: "Power Cell" },
            { civilian: "Lightbulb", undercover: "LED" },
            { civilian: "Wire", undercover: "Cable" },
            { civilian: "Outlet", undercover: "Socket" },
            { civilian: "Switch", undercover: "Button" },
            { civilian: "Thermostat", undercover: "Dial" },
            { civilian: "Fan", undercover: "Blower" },
            { civilian: "Heater", undercover: "Radiator" },
            { civilian: "Air Conditioner", undercover: "Cooler" },
            { civilian: "Humidifier", undercover: "Dehumidifier" },
            { civilian: "Vacuum", undercover: "Sweeper" },
            { civilian: "Broom", undercover: "Duster" },
            { civilian: "Mop", undercover: "Cloth" },
            { civilian: "Bucket", undercover: "Basin" },
            { civilian: "Trash Can", undercover: "Dumpster" },
            { civilian: "Mailbox", undercover: "Letterbox" },
            { civilian: "Calendar", undercover: "Planner" },
            { civilian: "Pen", undercover: "Pencil" },
            { civilian: "Marker", undercover: "Crayon" },
            { civilian: "Eraser", undercover: "Whiteout" },
            { civilian: "Notebook", undercover: "Notepad" },
            { civilian: "Ruler", undercover: "Measuring Tape" },
            { civilian: "Scissors", undercover: "Cutting Tool" },
            { civilian: "Stapler", undercover: "Tape Dispenser" },
            { civilian: "Paper Clip", undercover: "Binder Clip" },
            { civilian: "Magnifying Glass", undercover: "Loupe" },
            { civilian: "Telescope", undercover: "Binoculars" },
            { civilian: "Microscope", undercover: "Magnifier" },
            { civilian: "Thermometer", undercover: "Gauge" },
            { civilian: "Scale", undercover: "Balance" },
            { civilian: "Measuring Cup", undercover: "Syringe" },
            { civilian: "Spoon", undercover: "Stirrer" },
            { civilian: "Blender", undercover: "Mixer" },
            { civilian: "Whisk", undercover: "Beater" },
            { civilian: "Spatula", undercover: "Turner" },
            { civilian: "Tongs", undercover: "Tweezers" },
            { civilian: "Colander", undercover: "Strainer" },
            { civilian: "Grater", undercover: "Shredder" },
            { civilian: "Peeler", undercover: "Scraper" },
            { civilian: "Can Opener", undercover: "Bottle Opener" },
            { civilian: "Corkscrew", undercover: "Wine Key" },
            { civilian: "Cutting Board", undercover: "Chopping Block" },
            { civilian: "Wok", undercover: "Skillet" },
            { civilian: "Pressure Cooker", undercover: "Slow Cooker" },
            { civilian: "Toaster Oven", undercover: "Convection Oven" },
            { civilian: "Food Processor", undercover: "Chopper" },
            { civilian: "Coffee Maker", undercover: "Espresso Machine" },
            { civilian: "Dishwasher", undercover: "Sanitizer" }
        ]
    },
    sports: {
        name: "⚽ Sports",
        pairs: [
            { civilian: "Soccer", undercover: "Football" },
            { civilian: "Basketball", undercover: "Volleyball" },
            { civilian: "Tennis", undercover: "Badminton" },
            { civilian: "Swimming", undercover: "Diving" },
            { civilian: "Running", undercover: "Jogging" },
            { civilian: "Cycling", undercover: "Motorcycling" },
            { civilian: "Boxing", undercover: "Wrestling" },
            { civilian: "Golf", undercover: "Mini Golf" },
            { civilian: "Skiing", undercover: "Snowboarding" },
            { civilian: "Yoga", undercover: "Pilates" },
            { civilian: "Baseball", undercover: "Softball" },
            { civilian: "Cricket", undercover: "Wicket" },
            { civilian: "Lacrosse", undercover: "Field Hockey" },
            { civilian: "Handball", undercover: "Racquetball" },
            { civilian: "Table Tennis", undercover: "Ping Pong" },
            { civilian: "Squash", undercover: "Racquets" },
            { civilian: "Archery", undercover: "Bow Hunting" },
            { civilian: "Fencing", undercover: "Dueling" },
            { civilian: "Martial Arts", undercover: "Karate" },
            { civilian: "Judo", undercover: "Jujitsu" },
            { civilian: "Taekwondo", undercover: "Kung Fu" },
            { civilian: "Gymnastics", undercover: "Acrobatics" },
            { civilian: "Figure Skating", undercover: "Speed Skating" },
            { civilian: "Ice Hockey", undercover: "Roller Hockey" },
            { civilian: "Curling", undercover: "Shuffleboard" },
            { civilian: "Bowling", undercover: "Duckpin" },
            { civilian: "Billiards", undercover: "Snooker" },
            { civilian: "Darts", undercover: "Cornhole" },
            { civilian: "Rock Climbing", undercover: "Bouldering" },
            { civilian: "Mountaineering", undercover: "Hiking" },
            { civilian: "Trail Running", undercover: "Fell Running" },
            { civilian: "Skateboarding", undercover: "Longboarding" },
            { civilian: "Surfing", undercover: "Paddleboarding" },
            { civilian: "Windsurfing", undercover: "Kiteboarding" },
            { civilian: "Canoeing", undercover: "Kayaking" },
            { civilian: "Rowing", undercover: "Crew" },
            { civilian: "Sailing", undercover: "Yachting" },
            { civilian: "Fishing", undercover: "Fly Fishing" },
            { civilian: "Hunting", undercover: "Stalking" },
            { civilian: "Horseback Riding", undercover: "Equestrian" },
            { civilian: "Polo", undercover: "Pony Club" },
            { civilian: "Eventing", undercover: "Dressage" },
            { civilian: "Showjumping", undercover: "Cross Country" },
            { civilian: "Motor Racing", undercover: "Rally" },
            { civilian: "Formula One", undercover: "Indy Car" },
            { civilian: "Drag Racing", undercover: "Street Racing" },
            { civilian: "Off-roading", undercover: "ATV" },
            { civilian: "Motocross", undercover: "Enduro" },
            { civilian: "BMX", undercover: "Mountain Biking" },
            { civilian: "Downhill", undercover: "Cross-country" },
            { civilian: "Orienteering", undercover: "Rogaining" },
            { civilian: "Parkour", undercover: "Freerunning" },
            { civilian: "Skateboard Tricks", undercover: "Freestyle" },
            { civilian: "Rollerblade", undercover: "Speed Skating" },
            { civilian: "Roller Derby", undercover: "Roller Skating" },
            { civilian: "Cheerleading", undercover: "Cheer Sport" },
            { civilian: "Pommel Horse", undercover: "Vault" },
            { civilian: "Parallel Bars", undercover: "High Bar" },
            { civilian: "Balance Beam", undercover: "Uneven Bars" },
            { civilian: "Floor Exercise", undercover: "Rhythmic Gymnastics" },
            { civilian: "Trampoline", undercover: "Tumbling" },
            { civilian: "Synchronized Swimming", undercover: "Water Ballet" },
            { civilian: "Pentathlon", undercover: "Decathlon" },
            { civilian: "Biathlon", undercover: "Triathlon" },
            { civilian: "Orienteering", undercover: "Trail Orienteering" },
            { civilian: "Sport Climbing", undercover: "Speed Climbing" },
            { civilian: "Kin-Ball", undercover: "Newcomb Ball" },
            { civilian: "Tchoukball", undercover: "Netball" },
            { civilian: "Quidditch", undercover: "Ultimate Frisbee" },
            { civilian: "Pickleball", undercover: "Paddleball" },
            { civilian: "Platform Diving", undercover: "Springboard Diving" },
            { civilian: "Weightlifting", undercover: "Powerlifting" },
            { civilian: "Strongman", undercover: "Crossfit" },
            { civilian: "Bodybuilding", undercover: "Fitness" },
            { civilian: "Aerobics", undercover: "Zumba" },
            { civilian: "Dance", undercover: "Ballet" },
            { civilian: "Tap Dance", undercover: "Jazz Dance" },
            { civilian: "Contemporary Dance", undercover: "Modern Dance" },
            { civilian: "Swing Dance", undercover: "Salsa" },
            { civilian: "Tango", undercover: "Waltz" },
            { civilian: "Breakdancing", undercover: "Popping" },
            { civilian: "Hip Hop Dance", undercover: "Freestyle" },
            { civilian: "Step Aerobics", undercover: "Spinning" },
            { civilian: "Rowing Machine", undercover: "Ergometer" },
            { civilian: "Elliptical", undercover: "Stationary Bike" },
            { civilian: "Treadmill", undercover: "Stair Climber" },
            { civilian: "Swimming Pool", undercover: "Hot Tub" },
            { civilian: "Trampoline Park", undercover: "Jump House" },
            { civilian: "Obstacle Course", undercover: "Mud Run" }
        ]
    },
    movies: {
        name: "🎬 Movies & TV",
        pairs: [
            { civilian: "Netflix", undercover: "Hulu" },
            { civilian: "Marvel", undercover: "DC" },
            { civilian: "Star Wars", undercover: "Star Trek" },
            { civilian: "Harry Potter", undercover: "Lord of the Rings" },
            { civilian: "Disney", undercover: "Pixar" },
            { civilian: "Sitcom", undercover: "Drama" },
            { civilian: "Documentary", undercover: "Reality Show" },
            { civilian: "Animated", undercover: "Cartoon" },
            { civilian: "Horror", undercover: "Thriller" },
            { civilian: "Comedy", undercover: "Parody" },
            { civilian: "Action", undercover: "Adventure" },
            { civilian: "Romance", undercover: "Comedy-Romance" },
            { civilian: "Science Fiction", undercover: "Fantasy" },
            { civilian: "Western", undercover: "Crime Drama" },
            { civilian: "War Film", undercover: "Spy Thriller" },
            { civilian: "Mystery", undercover: "Detective Show" },
            { civilian: "Sports Movie", undercover: "Underdog Story" },
            { civilian: "Superhero", undercover: "Vigilante" },
            { civilian: "Superhero Team", undercover: "Supervillain" },
            { civilian: "Animated Film", undercover: "Stop-motion" },
            { civilian: "TV Series", undercover: "Web Series" },
            { civilian: "Movie", undercover: "Short Film" },
            { civilian: "Season", undercover: "Episode" },
            { civilian: "Channel", undercover: "Network" },
            { civilian: "Cable TV", undercover: "Streaming" },
            { civilian: "Broadcast", undercover: "Satellite" },
            { civilian: "Prime Video", undercover: "Apple TV+" },
            { civilian: "Disney+", undercover: "Peacock" },
            { civilian: "HBO Max", undercover: "Paramount+" },
            { civilian: "HBO", undercover: "Showtime" },
            { civilian: "Lifetime", undercover: "Hallmark" },
            { civilian: "Nickelodeon", undercover: "Disney Channel" },
            { civilian: "Cartoon Network", undercover: "Adult Swim" },
            { civilian: "Sci-Fi Channel", undercover: "SyFy" },
            { civilian: "History Channel", undercover: "Discovery Channel" },
            { civilian: "National Geographic", undercover: "Animal Planet" },
            { civilian: "Food Network", undercover: "HGTV" },
            { civilian: "AMC", undercover: "FX" },
            { civilian: "TBS", undercover: "TNT" },
            { civilian: "USA Network", undercover: "Bravo" },
            { civilian: "Arrow", undercover: "Supergirl" },
            { civilian: "The Flash", undercover: "Legends of Tomorrow" },
            { civilian: "Breaking Bad", undercover: "Better Call Saul" },
            { civilian: "The Office", undercover: "Parks and Rec" },
            { civilian: "Friends", undercover: "Seinfeld" },
            { civilian: "The Crown", undercover: "The Bridgertons" },
            { civilian: "Stranger Things", undercover: "Dark" },
            { civilian: "The Mandalorian", undercover: "The Book of Boba Fett" },
            { civilian: "Game of Thrones", undercover: "House of the Dragon" },
            { civilian: "The Witcher", undercover: "Lord of the Rings" },
            { civilian: "Sherlock", undercover: "Blacklist" },
            { civilian: "Mindhunter", undercover: "Profiler" },
            { civilian: "Dexter", undercover: "Criminal Minds" },
            { civilian: "Hannibal", undercover: "Psycho" },
            { civilian: "The Silence of the Lambs", undercover: "The Shining" },
            { civilian: "Inception", undercover: "The Matrix" },
            { civilian: "Interstellar", undercover: "Dune" },
            { civilian: "Avatar", undercover: "Alita Battle Angel" },
            { civilian: "Avengers", undercover: "X-Men" },
            { civilian: "Spider-Man", undercover: "Batman" },
            { civilian: "Superman", undercover: "Wonder Woman" },
            { civilian: "The Dark Knight", undercover: "Wonder Woman 1984" },
            { civilian: "Aquaman", undercover: "Flash" },
            { civilian: "Deadpool", undercover: "Logan" },
            { civilian: "Doctor Strange", undercover: "Eternals" },
            { civilian: "Thor", undercover: "Loki" },
            { civilian: "Iron Man", undercover: "Captain America" },
            { civilian: "Black Panther", undercover: "Captain Marvel" },
            { civilian: "The Avengers", undercover: "Ant-Man" },
            { civilian: "Guardians of the Galaxy", undercover: "Thor Ragnarok" },
            { civilian: "Fantastic Four", undercover: "Doctor Octopus" },
            { civilian: "Daredevil", undercover: "Jessica Jones" },
            { civilian: "Luke Cage", undercover: "Iron Fist" },
            { civilian: "The Defenders", undercover: "The Punisher" },
            { civilian: "WandaVision", undercover: "Loki Series" },
            { civilian: "What If...", undercover: "Marvel Legends" },
            { civilian: "The Expanse", undercover: "Battlestar Galactica" },
            { civilian: "The Boys", undercover: "Invincible" },
            { civilian: "Castlevania", undercover: "Demon Slayer" },
            { civilian: "Attack on Titan", undercover: "My Hero Academia" },
            { civilian: "One Punch Man", undercover: "Mob Psycho 100" },
            { civilian: "Death Note", undercover: "Code Geass" },
            { civilian: "Naruto", undercover: "Bleach" },
            { civilian: "Dragon Ball", undercover: "Jujutsu Kaisen" },
            { civilian: "Tokyo Ghoul", undercover: "Parasyte" },
            { civilian: "Fullmetal Alchemist", undercover: "Soul Eater" },
            { civilian: "Sailor Moon", undercover: "Cardcaptor Sakura" },
            { civilian: "Neon Genesis Evangelion", undercover: "Kill la Kill" },
            { civilian: "Steins;Gate", undercover: "Puella Magi Madoka Magica" },
            { civilian: "ReZero", undercover: "That Time I Got Reincarnated" },
            { civilian: "Sword Art Online", undercover: "Log Horizon" },
            { civilian: "Attack on Titan: The Final Season", undercover: "AOT: The Rumbling" }
        ]
    }
};

// ==================== GAME STATE ====================
const GameState = {
    // Game configuration
    playerCount: 4,
    selectedTopic: null,
    
    // Players
    players: [], // Array of { name, role, word, eliminated, hasRevealed }
    playerNames: [],
    
    // Card reveal
    availableCards: [],
    currentCardIndex: null,
    revealedCount: 0,
    
    // Gameplay
    currentRound: 1,
    currentTurnIndex: 0,
    turnOrder: [],
    
    // Voting
    votes: {}, // playerName -> votedForName
    currentVoterIndex: 0,
    
    // Words
    civilianWord: "",
    mrWhiteWord: "",
    
    // Game status
    gamePhase: "setup", // setup, reveal, playing, voting, gameover
    winner: null, // "civilians", "mrwhite"
    mrWhitePlayer: null,
    
    // Reset state for new game
    reset() {
        this.playerCount = 4;
        this.selectedTopic = null;
        this.players = [];
        this.playerNames = [];
        this.availableCards = [];
        this.currentCardIndex = null;
        this.revealedCount = 0;
        this.currentRound = 1;
        this.currentTurnIndex = 0;
        this.turnOrder = [];
        this.votes = {};
        this.currentVoterIndex = 0;
        this.civilianWord = "";
        this.mrWhiteWord = "";
        this.gamePhase = "setup";
        this.winner = null;
        this.mrWhitePlayer = null;
    }
};

// ==================== UTILITY FUNCTIONS ====================
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

function getActivePlayers() {
    return GameState.players.filter(p => !p.eliminated);
}

function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');
}

// Prevent cheating via back navigation
function preventBackNavigation() {
    history.pushState(null, null, location.href);
    window.onpopstate = function() {
        history.go(1);
    };
}

// ==================== INITIALIZATION ====================
document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
    preventBackNavigation();
});

function initializeApp() {
    // Welcome screen
    document.getElementById('start-game-btn').addEventListener('click', () => {
        showScreen('setup-screen');
        initializeSetupScreen();
    });
    
    // Setup screen
    document.getElementById('decrease-players').addEventListener('click', () => {
        if (GameState.playerCount > 3) {
            GameState.playerCount--;
            updatePlayerCountDisplay();
        }
    });
    
    document.getElementById('increase-players').addEventListener('click', () => {
        if (GameState.playerCount < 12) {
            GameState.playerCount++;
            updatePlayerCountDisplay();
        }
    });
    
    document.getElementById('back-to-welcome').addEventListener('click', () => {
        showScreen('welcome-screen');
    });
    
    document.getElementById('continue-to-names').addEventListener('click', () => {
        if (!GameState.selectedTopic) {
            alert('Please select a topic!');
            return;
        }
        showScreen('names-screen');
        initializeNamesScreen();
    });
    
    // Names screen
    document.getElementById('back-to-setup').addEventListener('click', () => {
        showScreen('setup-screen');
    });
    
    document.getElementById('start-card-reveal').addEventListener('click', startCardReveal);
    
    // Card selection
    document.getElementById('cancel-card-selection').addEventListener('click', () => {
        showScreen('card-reveal-screen');
    });
    
    // Role reveal
    document.getElementById('confirm-role').addEventListener('click', confirmRoleViewed);
    
    // Pass device
    document.getElementById('next-player-ready').addEventListener('click', () => {
        showScreen('card-reveal-screen');
        updateCardGrid();
    });
    
    // All revealed
    document.getElementById('start-gameplay').addEventListener('click', startGameplay);
    
    // Vote results
    document.getElementById('continue-after-vote').addEventListener('click', continueAfterVote);
    
    // Mr. White guess
    document.getElementById('submit-guess').addEventListener('click', submitMrWhiteGuess);
    document.getElementById('skip-guess').addEventListener('click', () => endGame('civilians'));
    
    // Game over
    document.getElementById('play-again').addEventListener('click', () => {
        GameState.reset();
        showScreen('welcome-screen');
    });
}

// ==================== SETUP SCREEN ====================
function initializeSetupScreen() {
    // Populate topic grid
    const topicGrid = document.getElementById('topic-grid');
    topicGrid.innerHTML = '';
    
    Object.entries(WORD_DATABASE).forEach(([key, topic]) => {
        const btn = document.createElement('button');
        btn.className = 'topic-btn';
        btn.textContent = topic.name;
        btn.dataset.topic = key;
        
        btn.addEventListener('click', () => {
            document.querySelectorAll('.topic-btn').forEach(b => b.classList.remove('selected'));
            btn.classList.add('selected');
            GameState.selectedTopic = key;
        });
        
        topicGrid.appendChild(btn);
    });
    
    updatePlayerCountDisplay();
}

function updatePlayerCountDisplay() {
    document.getElementById('player-count').textContent = GameState.playerCount;
}

// ==================== NAMES SCREEN ====================
function initializeNamesScreen() {
    const container = document.getElementById('name-inputs');
    container.innerHTML = '';
    
    for (let i = 0; i < GameState.playerCount; i++) {
        const group = document.createElement('div');
        group.className = 'name-input-group';
        group.innerHTML = `
            <span>${i + 1}.</span>
            <input type="text" placeholder="Player ${i + 1}" data-index="${i}" maxlength="15">
        `;
        container.appendChild(group);
    }
    
    // Focus first input
    container.querySelector('input').focus();
}

// ==================== CARD REVEAL ====================
function startCardReveal() {
    // Validate names
    const inputs = document.querySelectorAll('#name-inputs input');
    const names = [];
    
    inputs.forEach(input => {
        const name = input.value.trim() || `Player ${parseInt(input.dataset.index) + 1}`;
        names.push(name);
    });
    
    // Check for duplicate names
    const uniqueNames = new Set(names);
    if (uniqueNames.size !== names.length) {
        alert('Please ensure all player names are unique!');
        return;
    }
    
    GameState.playerNames = names;
    
    // Select random word pair from topic
    const topic = WORD_DATABASE[GameState.selectedTopic];
    const shuffledPairs = shuffleArray([...topic.pairs]);
    
    // Use the same pair - civilians get one word, Mr. White gets the similar word
    const mainPair = shuffledPairs[0];
    GameState.civilianWord = mainPair.civilian;      // e.g., "Coffee"
    GameState.mrWhiteWord = mainPair.undercover;     // e.g., "Tea" (similar word)
    
    // Assign roles
    assignRoles();
    
    // Initialize card reveal
    GameState.availableCards = Array(GameState.playerCount).fill(false);
    GameState.revealedCount = 0;
    GameState.gamePhase = "reveal";
    
    showScreen('card-reveal-screen');
    initializeCardGrid();
}

function assignRoles() {
    // Create role distribution
    const roles = [];
    
    // Add Mr. White
    roles.push('mrwhite');
    
    // Fill rest with civilians
    while (roles.length < GameState.playerCount) {
        roles.push('civilian');
    }
    
    // Shuffle roles
    const shuffledRoles = shuffleArray(roles);
    
    // Create player objects
    GameState.players = GameState.playerNames.map((name, index) => {
        const role = shuffledRoles[index];
        let word = "";
        
        if (role === 'civilian') {
            word = GameState.civilianWord;
        } else if (role === 'mrwhite') {
            word = GameState.mrWhiteWord;
        }
        
        return {
            name,
            role,
            word,
            eliminated: false,
            hasRevealed: false
        };
    });
    
    // Store Mr. White reference
    GameState.mrWhitePlayer = GameState.players.find(p => p.role === 'mrwhite');
}

function initializeCardGrid() {
    const cardGrid = document.getElementById('card-grid');
    cardGrid.innerHTML = '';
    
    for (let i = 0; i < GameState.playerCount; i++) {
        const card = document.createElement('div');
        card.className = 'game-card';
        card.dataset.index = i;
        
        card.addEventListener('click', () => selectCard(i));
        cardGrid.appendChild(card);
    }
    
    updateCardInstruction();
}

function updateCardGrid() {
    const cards = document.querySelectorAll('.game-card');
    cards.forEach((card, index) => {
        if (GameState.availableCards[index]) {
            card.classList.add('taken');
        } else {
            card.classList.remove('taken');
        }
    });
    updateCardInstruction();
}

function updateCardInstruction() {
    const remaining = GameState.playerCount - GameState.revealedCount;
    document.getElementById('card-instruction').textContent = 
        `${remaining} card${remaining !== 1 ? 's' : ''} remaining. Tap a card to reveal your role.`;
}

function selectCard(cardIndex) {
    if (GameState.availableCards[cardIndex]) {
        return; // Card already taken
    }
    
    GameState.currentCardIndex = cardIndex;
    showScreen('name-entry-screen');
    populateNameButtons();
}

function populateNameButtons() {
    const container = document.getElementById('available-names');
    container.innerHTML = '';
    
    GameState.players.forEach((player, index) => {
        const btn = document.createElement('button');
        btn.className = 'name-btn';
        btn.textContent = player.name;
        
        if (player.hasRevealed) {
            btn.classList.add('taken');
        } else {
            btn.addEventListener('click', () => revealRole(index));
        }
        
        container.appendChild(btn);
    });
}

function revealRole(playerIndex) {
    const player = GameState.players[playerIndex];
    
    if (player.hasRevealed) {
        return;
    }
    
    // Mark card as taken
    GameState.availableCards[GameState.currentCardIndex] = true;
    player.hasRevealed = true;
    GameState.revealedCount++;
    
    // Show only the word (no role)
    document.getElementById('player-name-display').textContent = player.name;
    const wordDisplay = document.getElementById('word-display');
    wordDisplay.textContent = player.word;
    wordDisplay.style.display = 'block';
    
    showScreen('role-reveal-screen');
}

function confirmRoleViewed() {
    if (GameState.revealedCount >= GameState.playerCount) {
        // All cards revealed
        showScreen('all-revealed-screen');
    } else {
        // Show pass device screen
        const remaining = GameState.playerCount - GameState.revealedCount;
        document.getElementById('cards-remaining').textContent = 
            `${remaining} player${remaining !== 1 ? 's' : ''} still need to see their word`;
        showScreen('pass-device-screen');
    }
}

// ==================== GAMEPLAY ====================
function startGameplay() {
    GameState.gamePhase = "voting";
    // Go directly to voting
    startVoting();
}

function updateGameplayUI() {
    document.getElementById('current-round').textContent = GameState.currentRound;
    
    const activePlayers = getActivePlayers();
    const turnOrder = GameState.turnOrder.filter(p => !p.eliminated);
    
    if (turnOrder.length === 0) {
        // Re-shuffle for new round
        GameState.turnOrder = shuffleArray([...activePlayers]);
        GameState.currentTurnIndex = 0;
    }
    
    const currentPlayer = GameState.turnOrder[GameState.currentTurnIndex];
    
    if (currentPlayer && !currentPlayer.eliminated) {
        document.getElementById('current-player-turn').textContent = currentPlayer.name;
    }
    
    // Update player order display
    const orderContainer = document.getElementById('player-order');
    orderContainer.innerHTML = '';
    
    GameState.turnOrder.forEach((player, index) => {
        const chip = document.createElement('div');
        chip.className = 'player-chip';
        chip.textContent = player.name;
        
        if (player.eliminated) {
            chip.classList.add('eliminated');
        } else if (index < GameState.currentTurnIndex) {
            chip.classList.add('done');
        } else if (index === GameState.currentTurnIndex) {
            chip.classList.add('current');
        }
        
        orderContainer.appendChild(chip);
    });
    
    // Show/hide voting button - only after every 2 rounds
    const startVotingBtn = document.getElementById('start-voting');
    const isRoundComplete = GameState.currentTurnIndex >= GameState.turnOrder.length - 1;
    const isVotingRound = GameState.currentRound % 2 === 0;
    
    if (isRoundComplete && isVotingRound) {
        startVotingBtn.style.display = 'block';
        startVotingBtn.textContent = 'Start Voting';
    } else if (isRoundComplete) {
        startVotingBtn.style.display = 'block';
        startVotingBtn.textContent = 'Next Round';
        startVotingBtn.className = 'btn btn-primary';
    } else {
        startVotingBtn.style.display = 'none';
    }
}

function nextTurn() {
    GameState.currentTurnIndex++;
    
    // Skip eliminated players
    while (GameState.currentTurnIndex < GameState.turnOrder.length && 
           GameState.turnOrder[GameState.currentTurnIndex].eliminated) {
        GameState.currentTurnIndex++;
    }
    
    if (GameState.currentTurnIndex >= GameState.turnOrder.length) {
        // Round complete
        document.getElementById('next-turn').style.display = 'none';
        updateGameplayUI();
        return;
    }
    
    updateGameplayUI();
}

// ==================== VOTING ====================
function startVoting() {
    GameState.gamePhase = "voting";
    
    showScreen('voting-screen');
    initializeVoting();
}

function initializeVoting() {
    const container = document.getElementById('vote-options');
    container.innerHTML = '';
    
    const activePlayers = getActivePlayers();
    
    activePlayers.forEach(player => {
        const btn = document.createElement('button');
        btn.className = 'vote-btn';
        btn.innerHTML = `<span>${player.name}</span>`;
        btn.dataset.player = player.name;
        
        btn.addEventListener('click', () => eliminatePlayer(player.name));
        container.appendChild(btn);
    });
}

function eliminatePlayer(playerName) {
    // Find and eliminate the player
    const player = GameState.players.find(p => p.name === playerName);
    if (!player) return;
    
    player.eliminated = true;
    
    // Show result
    const resultContent = document.getElementById('vote-result-content');
    
    if (player.role === 'mrwhite') {
        // Mr. White was voted out! Give them a chance to guess
        resultContent.innerHTML = `
            <div class="result-icon">🎯</div>
            <h2>You Found Them!</h2>
            <p class="eliminated-name">${playerName}</p>
            <p class="result-message">has the <strong>DIFFERENT WORD!</strong></p>
            <p class="result-sub">But they get one chance to guess your word...</p>
        `;
        document.getElementById('continue-after-vote').textContent = 'Let Them Guess';
    } else {
        // Wrong person eliminated
        resultContent.innerHTML = `
            <div class="result-icon">❌</div>
            <h2>Wrong Person!</h2>
            <p class="eliminated-name">${playerName}</p>
            <p class="result-message">had the <strong>SAME WORD</strong> as you!</p>
            <p class="result-sub">The person with the different word is still playing...</p>
        `;
        document.getElementById('continue-after-vote').textContent = 'Continue Voting';
    }
    
    showScreen('vote-results-screen');
}

function continueAfterVote() {
    const mrWhite = GameState.mrWhitePlayer;
    const activePlayers = getActivePlayers();
    
    // Check if Mr. White was eliminated
    if (mrWhite.eliminated) {
        // Give Mr. White a chance to guess
        showMrWhiteGuess();
        return;
    }
    
    // Check if only Mr. White is left (Mr. White wins)
    if (activePlayers.length <= 1) {
        endGame('mrwhite');
        return;
    }
    
    // Check if only 2 players left (Mr. White wins)
    if (activePlayers.length <= 2) {
        endGame('mrwhite');
        return;
    }
    
    // Continue voting
    startVoting();
}

// ==================== MR. WHITE GUESS ====================
function showMrWhiteGuess() {
    document.getElementById('mrwhite-name').textContent = GameState.mrWhitePlayer.name;
    document.getElementById('guess-input').value = '';
    showScreen('mrwhite-guess-screen');
}

function submitMrWhiteGuess() {
    const guess = document.getElementById('guess-input').value.trim().toLowerCase();
    const civilianWord = GameState.civilianWord.toLowerCase();
    
    if (!guess) {
        alert('Please enter a guess!');
        return;
    }
    
    if (guess === civilianWord) {
        endGame('mrwhite');
    } else {
        endGame('civilians');
    }
}

// ==================== GAME OVER ====================
function endGame(winner) {
    GameState.gamePhase = "gameover";
    GameState.winner = winner;
    
    const announcement = document.getElementById('winner-announcement');
    
    if (winner === 'civilians') {
        announcement.innerHTML = `
            <div class="winner-icon">🎉</div>
            <h2>Civilians Win!</h2>
            <p>Mr. White has been defeated!</p>
        `;
    } else {
        announcement.innerHTML = `
            <div class="winner-icon">🎭</div>
            <h2>Mr. White Wins!</h2>
            <p>${GameState.mrWhitePlayer.name} has outsmarted everyone!</p>
        `;
    }
    
    // Show game summary
    const summary = document.getElementById('game-summary');
    summary.innerHTML = '<h3>Player Roles</h3>';
    
    GameState.players.forEach(player => {
        const roleClass = player.role;
        const roleLabel = player.role === 'mrwhite' ? 'Mr. White' : 'Civilian';
        
        summary.innerHTML += `
            <div class="summary-item">
                <span>${player.name}</span>
                <span class="role-badge ${roleClass}">${roleLabel}</span>
            </div>
        `;
    });
    
    summary.innerHTML += `
        <div class="summary-item">
            <span>Civilian Word:</span>
            <strong>${GameState.civilianWord}</strong>
        </div>
        <div class="summary-item">
            <span>Mr. White's Word:</span>
            <strong>${GameState.mrWhiteWord}</strong>
        </div>
    `;
    
    showScreen('game-over-screen');
}

// ==================== PREVENT CHEATING ====================
// Disable context menu
document.addEventListener('contextmenu', e => e.preventDefault());

// Warn on page refresh during game
window.addEventListener('beforeunload', (e) => {
    if (GameState.gamePhase !== 'setup' && GameState.gamePhase !== 'gameover') {
        e.preventDefault();
        e.returnValue = '';
    }
});

// Disable keyboard shortcuts that could be used to cheat
document.addEventListener('keydown', (e) => {
    // Disable F5 refresh
    if (e.key === 'F5') {
        e.preventDefault();
    }
    // Disable Ctrl+R refresh
    if (e.ctrlKey && e.key === 'r') {
        e.preventDefault();
    }
    // Disable Ctrl+Shift+I dev tools
    if (e.ctrlKey && e.shiftKey && e.key === 'I') {
        e.preventDefault();
    }
});
