const PHONICS_RULES = [
  {
    "id": "short-vowel-a",
    "title": "Short vowel a",
    "sourceHeading": "短母音 a",
    "items": [
      {
        "word": "apple",
        "pos": "Noun",
        "definition": "蘋果",
        "sentence": "I have an _______ in my bag.",
        "translation": "我的袋子裡有一個蘋果。",
        "answer": "apple",
        "id": "apple"
      },
      {
        "word": "ax",
        "pos": "Noun",
        "definition": "斧頭",
        "sentence": "We use an _______ to chop wood.",
        "translation": "我們用斧頭劈木頭。",
        "answer": "ax",
        "id": "ax"
      },
      {
        "word": "ant",
        "pos": "Noun",
        "definition": "螞蟻",
        "sentence": "There are many _______ in the garden.",
        "translation": "花園裡有很多螞蟻。",
        "answer": "ant",
        "id": "ant"
      },
      {
        "word": "and",
        "pos": "Conj",
        "definition": "和",
        "sentence": "She likes tea _______ coffee.",
        "translation": "她喜歡茶和咖啡。",
        "answer": "and",
        "id": "and"
      },
      {
        "word": "act",
        "pos": "Verb",
        "definition": "行動",
        "sentence": "They always _______ together in plays.",
        "translation": "他們經常在劇中表演。",
        "answer": "act",
        "id": "act"
      },
      {
        "word": "actor",
        "pos": "Noun",
        "definition": "演員",
        "sentence": "The _______ is on the stage.",
        "translation": "演員在舞台上。",
        "answer": "actor",
        "id": "actor"
      },
      {
        "word": "ask",
        "pos": "Verb",
        "definition": "問",
        "sentence": "She will _______ a question.",
        "translation": "她會問一個問題。",
        "answer": "ask",
        "id": "ask"
      },
      {
        "word": "after",
        "pos": "prep./con",
        "definition": "在…之後",
        "sentence": "I ran fast _______ the earthquake.",
        "translation": "我跑很快，在地震後",
        "answer": "after",
        "id": "after"
      },
      {
        "word": "bat",
        "pos": "Noun",
        "definition": "球棒",
        "sentence": "I have a baseball _______.",
        "translation": "我有一個棒球球棒。",
        "answer": "bat",
        "id": "bat"
      },
      {
        "word": "bad",
        "pos": "Adjective",
        "definition": "糟糕的",
        "sentence": "This is a _____ situation.",
        "translation": "這是一個糟糕的情況。",
        "answer": "bad",
        "id": "bad"
      },
      {
        "word": "bag",
        "pos": "Noun",
        "definition": "袋子",
        "sentence": "She has a red _____ .",
        "translation": "她有一個紅色的袋子。",
        "answer": "bag",
        "id": "bag"
      },
      {
        "word": "cat",
        "pos": "Noun",
        "definition": "貓",
        "sentence": "I see a _____ in the park.",
        "translation": "我在公園看到一隻貓。",
        "answer": "cat",
        "id": "cat"
      },
      {
        "word": "cap",
        "pos": "Noun",
        "definition": "帽子",
        "sentence": "He's wearing a _____ today.",
        "translation": "他今天戴著一頂帽子。",
        "answer": "cap",
        "id": "cap"
      },
      {
        "word": "cab",
        "pos": "Noun",
        "definition": "計程車",
        "sentence": "I took a _____ to the airport.",
        "translation": "我搭計程車去機場。",
        "answer": "cab",
        "id": "cab"
      },
      {
        "word": "dad",
        "pos": "Noun",
        "definition": "爸爸",
        "sentence": "My _____ is cooking dinner.",
        "translation": "我爸爸正在做晚餐。",
        "answer": "dad",
        "id": "dad"
      },
      {
        "word": "Dan",
        "pos": "Noun",
        "definition": "男生名",
        "sentence": "_____ is my friend's name.",
        "translation": "丹是我朋友的名字。",
        "answer": "Dan",
        "id": "dan"
      },
      {
        "word": "fan (n)",
        "pos": "Noun",
        "definition": "風扇",
        "sentence": "The _____ is keeping us cool.",
        "translation": "風扇讓我們感到涼爽。",
        "answer": "fan (n)",
        "id": "fan-n"
      },
      {
        "word": "fan (n)",
        "pos": "Noun",
        "definition": "粉絲",
        "sentence": "She's a big _____ of that singer.",
        "translation": "她是那位歌手的忠實粉絲。",
        "answer": "fan (n)",
        "id": "fan-n-2"
      },
      {
        "word": "fat",
        "pos": "Adjective",
        "definition": "肥胖的",
        "sentence": "The cat is very _____.",
        "translation": "這隻貓很胖。",
        "answer": "fat",
        "id": "fat"
      },
      {
        "word": "gap",
        "pos": "Noun",
        "definition": "缺口",
        "sentence": "There is a _____ in the wall after the earthquake.",
        "translation": "牆上有個缺口，在地震後。",
        "answer": "gap",
        "id": "gap"
      },
      {
        "word": "gas",
        "pos": "Noun",
        "definition": "氣體",
        "sentence": "The _____ in the balloon makes it float.",
        "translation": "氣球中的氣體使它漂浮。",
        "answer": "gas",
        "id": "gas"
      },
      {
        "word": "ham",
        "pos": "Noun",
        "definition": "火腿",
        "sentence": "I like _____ on my sandwich.",
        "translation": "我喜歡在三明治上加火腿。",
        "answer": "ham",
        "id": "ham"
      },
      {
        "word": "have",
        "pos": "Verb",
        "definition": "擁有，有",
        "sentence": "They _____ a beautiful garden.",
        "translation": "他們有一個美麗的花園。",
        "answer": "have",
        "id": "have"
      },
      {
        "word": "has",
        "pos": "Verb",
        "definition": "擁有，有",
        "sentence": "She _____ a big collection of stamps.",
        "translation": "她有一大堆郵票的收藏。",
        "answer": "has",
        "id": "has"
      },
      {
        "word": "had",
        "pos": "Verb",
        "definition": "擁有，有",
        "sentence": "He _____ a great time at the party.",
        "translation": "他在派對上玩得很開心。",
        "answer": "had",
        "id": "had"
      },
      {
        "word": "hat",
        "pos": "Noun",
        "definition": "帽子",
        "sentence": "I'm wearing my favorite _____ .",
        "translation": "我戴著我最喜歡的帽子。",
        "answer": "hat",
        "id": "hat"
      },
      {
        "word": "jam",
        "pos": "Noun",
        "definition": "果醬",
        "sentence": "I spread _____ on my toast.",
        "translation": "我把果醬塗在土司上。",
        "answer": "jam",
        "id": "jam"
      },
      {
        "word": "lab",
        "pos": "Noun",
        "definition": "實驗室",
        "sentence": "The scientists work in a _____ .",
        "translation": "科學家們在實驗室工作。",
        "answer": "lab",
        "id": "lab"
      },
      {
        "word": "lap",
        "pos": "Noun",
        "definition": "大腿",
        "sentence": "The cat is sitting on her _____.",
        "translation": "貓咪坐在她的大腿上。",
        "answer": "lap",
        "id": "lap"
      },
      {
        "word": "man",
        "pos": "Noun",
        "definition": "男人",
        "sentence": "That _____ is very strong.",
        "translation": "那個男人很強壯。",
        "answer": "man",
        "id": "man"
      },
      {
        "word": "mad",
        "pos": "Adjective",
        "definition": "生氣的",
        "sentence": "She's _____ because she lost her keys.",
        "translation": "她因為弄丟了鑰匙而生氣。",
        "answer": "mad",
        "id": "mad"
      },
      {
        "word": "mat",
        "pos": "Noun",
        "definition": "墊子",
        "sentence": "We have a colorful _____ on the floor.",
        "translation": "我們地板上有一張色彩繽紛 的墊子。",
        "answer": "mat",
        "id": "mat"
      },
      {
        "word": "map",
        "pos": "Noun",
        "definition": "地圖",
        "sentence": "We need a _____ to find our way.",
        "translation": "我們需要一張地圖找路。",
        "answer": "map",
        "id": "map"
      },
      {
        "word": "nap",
        "pos": "Noun",
        "definition": "午睡",
        "sentence": "He takes a _____ after lunch.",
        "translation": "他午餐後小睡一會兒。",
        "answer": "nap",
        "id": "nap"
      },
      {
        "word": "pan",
        "pos": "Noun",
        "definition": "平底鍋",
        "sentence": "She's cooking eggs in the _____.",
        "translation": "她正在平底鍋裡煮蛋。",
        "answer": "pan",
        "id": "pan"
      },
      {
        "word": "Pam",
        "pos": "Noun",
        "definition": "女生名字",
        "sentence": "_____ is her name.",
        "translation": "她叫帕姆。",
        "answer": "Pam",
        "id": "pam"
      },
      {
        "word": "pad",
        "pos": "Noun",
        "definition": "墊子",
        "sentence": "I use a _____ for my mouse.",
        "translation": "我使用滑鼠墊。",
        "answer": "pad",
        "id": "pad"
      },
      {
        "word": "pal",
        "pos": "Noun",
        "definition": "朋友",
        "sentence": "He's my best _____.",
        "translation": "他是我最好的朋友。",
        "answer": "pal",
        "id": "pal"
      },
      {
        "word": "ran",
        "pos": "Verb",
        "definition": "奔跑",
        "sentence": "They _____ in the race.",
        "translation": "他們在比賽中奔跑。",
        "answer": "ran",
        "id": "ran"
      },
      {
        "word": "rag",
        "pos": "Noun",
        "definition": "破布",
        "sentence": "He used an old _____ to clean the floor.",
        "translation": "他用一塊舊破布擦地板。",
        "answer": "rag",
        "id": "rag"
      },
      {
        "word": "rat",
        "pos": "Noun",
        "definition": "老鼠",
        "sentence": "There's a _____ in the kitchen.",
        "translation": "廚房裡有一隻老鼠。",
        "answer": "rat",
        "id": "rat"
      },
      {
        "word": "Sam",
        "pos": "Noun",
        "definition": "山姆",
        "sentence": "_____ is his name.",
        "translation": "他叫山姆。",
        "answer": "Sam",
        "id": "sam"
      },
      {
        "word": "sat",
        "pos": "Verb",
        "definition": "坐",
        "sentence": "She _____ on the chair.",
        "translation": "她坐在椅子上。",
        "answer": "sat",
        "id": "sat"
      },
      {
        "word": "van",
        "pos": "Noun",
        "definition": "貨車",
        "sentence": "Can your dad drive a van? Yes, he can. No, he can't.",
        "translation": "你爸會開貨車嗎?是的他會 不 會",
        "answer": "van",
        "id": "van"
      },
      {
        "word": "yam",
        "pos": "Noun",
        "definition": "山藥",
        "sentence": "We're making _____ fries for dinner.",
        "translation": "我們晚餐做山藥薯條。 trap N/v 陷阱，設 陷阱 He set a _____ to catch mice. 他設了個陷阱來捉老鼠。",
        "answer": "yam",
        "id": "yam"
      },
      {
        "word": "black",
        "pos": "Adjective",
        "definition": "黑色的",
        "sentence": "What is this? It is a _____ cat.",
        "translation": "這是什麼? 這是一隻黑貓。",
        "answer": "black",
        "id": "black"
      },
      {
        "word": "gram",
        "pos": "Noun",
        "definition": "克",
        "sentence": "She will buy 100 grams of beef.",
        "translation": "她會買 100 克的牛肉",
        "answer": "gram",
        "id": "gram"
      },
      {
        "word": "flag",
        "pos": "Noun",
        "definition": "旗幟",
        "sentence": "The national _____ is flying high.",
        "translation": "國旗高高飄揚。",
        "answer": "flag",
        "id": "flag"
      },
      {
        "word": "flat",
        "pos": "Adjective",
        "definition": "平坦的",
        "sentence": "The ground is very _____.",
        "translation": "地面很平坦。",
        "answer": "flat",
        "id": "flat"
      },
      {
        "word": "clam",
        "pos": "Noun",
        "definition": "蛤蜊",
        "sentence": "She is cooking _____ for dinner.",
        "translation": "她正在煮蛤蜊為了晚餐。",
        "answer": "clam",
        "id": "clam"
      },
      {
        "word": "glad",
        "pos": "Adjective",
        "definition": "高興的",
        "sentence": "She's _____ to see you.",
        "translation": "她很高興見到你。",
        "answer": "glad",
        "id": "glad"
      },
      {
        "word": "happy",
        "pos": "Adjective",
        "definition": "快樂的",
        "sentence": "She looks very _____ today.",
        "translation": "她今天看起來非常快樂。 what n 什麼 _______ do you want? I want some water. 你想要什麼? 我想要一些水",
        "answer": "happy",
        "id": "happy"
      },
      {
        "word": "want",
        "pos": "v",
        "definition": "想要",
        "sentence": "What does he want? He wants some apple juice.",
        "translation": "他想要什麼?他想要一些蘋果 汁",
        "answer": "want",
        "id": "want"
      },
      {
        "word": "water",
        "pos": "n",
        "definition": "水",
        "sentence": "Do you want some water? Yes, I do. No, thank you.",
        "translation": "你想要一些水嗎?是的。不， 感謝",
        "answer": "water",
        "id": "water"
      },
      {
        "word": "father",
        "pos": "n",
        "definition": "爸爸",
        "sentence": "Does your father want some water? Yes, he does. No, he doesn't.",
        "translation": "你爸想要一些水嗎?是的/不",
        "answer": "father",
        "id": "father"
      },
      {
        "word": "swan",
        "pos": "n",
        "definition": "天鵝",
        "sentence": "I can’t tell a swan from a goose or a duck.",
        "translation": "我區分不出來天鵝，鵝，旱 鴨子的差別",
        "answer": "swan",
        "id": "swan"
      }
    ],
    "group": "Short Vowels"
  },
  {
    "id": "short-vowel-e",
    "title": "Short vowel e",
    "sourceHeading": "短母音 e",
    "items": [
      {
        "word": "Ben",
        "pos": "Noun",
        "definition": "男孩名",
        "sentence": "_____ is playing in the park.",
        "translation": "男孩在公園玩耍。",
        "answer": "Ben",
        "id": "ben"
      },
      {
        "word": "bed",
        "pos": "Noun",
        "definition": "床",
        "sentence": "I sleep in the big _____ in my bedroom.",
        "translation": "我睡在一張大床上在我臥室 裡。",
        "answer": "bed",
        "id": "bed"
      },
      {
        "word": "beg",
        "pos": "Verb",
        "definition": "乞討",
        "sentence": "These poor kids _____ for food.",
        "translation": "這些貧窮的小孩乞討食物。",
        "answer": "beg",
        "id": "beg"
      },
      {
        "word": "bet",
        "pos": "V/N",
        "definition": "打賭",
        "sentence": "I _____ $10 on the game.",
        "translation": "我在比賽上打賭 10 美元。",
        "answer": "bet",
        "id": "bet"
      },
      {
        "word": "den",
        "pos": "Noun",
        "definition": "巢穴",
        "sentence": "The bear lives in a _____ .",
        "translation": "熊住在一個巢穴中。",
        "answer": "den",
        "id": "den"
      },
      {
        "word": "fed",
        "pos": "Verb",
        "definition": "餵養",
        "sentence": "She _____ her pet fish.",
        "translation": "她餵養她的寵物魚。",
        "answer": "fed",
        "id": "fed"
      },
      {
        "word": "gem",
        "pos": "Noun",
        "definition": "寶石",
        "sentence": "She found a beautiful _____ .",
        "translation": "她找到了一顆美麗的寶石。",
        "answer": "gem",
        "id": "gem"
      },
      {
        "word": "get",
        "pos": "Verb",
        "definition": "獲得",
        "sentence": "I _____ a gift for my birthday.",
        "translation": "我收到了一份生日禮物。",
        "answer": "get",
        "id": "get"
      },
      {
        "word": "gel",
        "pos": "Noun",
        "definition": "凝膠",
        "sentence": "You can use hair _____ on your hair.",
        "translation": "你可以用髮膠在你的頭髮 上。",
        "answer": "gel",
        "id": "gel"
      },
      {
        "word": "hen",
        "pos": "Noun",
        "definition": "母雞",
        "sentence": "The _____ is laying eggs.",
        "translation": "母雞正在下蛋。",
        "answer": "hen",
        "id": "hen"
      },
      {
        "word": "jet",
        "pos": "Noun",
        "definition": "噴射機",
        "sentence": "There is a fast _____ in the sky.",
        "translation": "有一架快速的噴射機在天空 中。",
        "answer": "jet",
        "id": "jet"
      },
      {
        "word": "led",
        "pos": "Verb",
        "definition": "引領",
        "sentence": "She _____ us to the park.",
        "translation": "她引領我們去了公園。",
        "answer": "led",
        "id": "led"
      },
      {
        "word": "leg",
        "pos": "Noun",
        "definition": "腿",
        "sentence": "That man has only one _____.",
        "translation": "那個男人只有一條腿。",
        "answer": "leg",
        "id": "leg"
      },
      {
        "word": "let",
        "pos": "Verb",
        "definition": "允許",
        "sentence": "Please _____ me go to the party.",
        "translation": "請允許我去參加派對。",
        "answer": "let",
        "id": "let"
      },
      {
        "word": "men",
        "pos": "Noun",
        "definition": "男人",
        "sentence": "There are many _____ in the crowd.",
        "translation": "人群中有很多男人。",
        "answer": "men",
        "id": "men"
      },
      {
        "word": "met",
        "pos": "Verb",
        "definition": "遇見",
        "sentence": "I _____ an old friend today.",
        "translation": "我今天遇見了一個老朋友。",
        "answer": "met",
        "id": "met"
      },
      {
        "word": "net",
        "pos": "Noun",
        "definition": "網",
        "sentence": "The fisherman put the fish in the _____.",
        "translation": "這個漁夫把魚放在網中。",
        "answer": "net",
        "id": "net"
      },
      {
        "word": "pen",
        "pos": "Noun",
        "definition": "筆",
        "sentence": "I need a _____ to write.",
        "translation": "我需要一支筆來寫字。",
        "answer": "pen",
        "id": "pen"
      },
      {
        "word": "pencil",
        "pos": "Noun",
        "definition": "鉛筆",
        "sentence": "She's using a _____ to draw.",
        "translation": "她正在用鉛筆畫畫。",
        "answer": "pencil",
        "id": "pencil"
      },
      {
        "word": "pet",
        "pos": "Noun",
        "definition": "寵物",
        "sentence": "My _____ is a cute cat.",
        "translation": "我的寵物是一隻可愛的貓。",
        "answer": "pet",
        "id": "pet"
      },
      {
        "word": "red",
        "pos": "Adjective",
        "definition": "紅色的",
        "sentence": "She's wearing a _____ dress.",
        "translation": "她穿著一條紅色的連衣裙。",
        "answer": "red",
        "id": "red"
      },
      {
        "word": "Ted",
        "pos": "Noun",
        "definition": "泰德",
        "sentence": "_____ is my friend.",
        "translation": "泰德是我的朋友。",
        "answer": "Ted",
        "id": "ted"
      },
      {
        "word": "vet",
        "pos": "Noun",
        "definition": "獸醫",
        "sentence": "The _____ takes care of animals.",
        "translation": "獸醫照顧動物。 yet Adverb 還，尚未 I haven't finished my homework _____. 我的作業還沒做完。",
        "answer": "vet",
        "id": "vet"
      },
      {
        "word": "wed",
        "pos": "Verb",
        "definition": "結婚",
        "sentence": "They will _____ next month.",
        "translation": "他們下個月結婚。",
        "answer": "wed",
        "id": "wed"
      },
      {
        "word": "wet",
        "pos": "Adjective",
        "definition": "濕的",
        "sentence": "Don't sit on the _____ chair.",
        "translation": "別坐在濕椅子上。",
        "answer": "wet",
        "id": "wet"
      },
      {
        "word": "ferry",
        "pos": "Noun",
        "definition": "渡輪",
        "sentence": "We took a _____ to the island.",
        "translation": "我們坐渡輪去了島上。",
        "answer": "ferry",
        "id": "ferry"
      },
      {
        "word": "elbow",
        "pos": "Noun",
        "definition": "肘部",
        "sentence": "My _____ hurts.",
        "translation": "我的肘部疼痛。",
        "answer": "elbow",
        "id": "elbow"
      },
      {
        "word": "egg",
        "pos": "Noun",
        "definition": "蛋",
        "sentence": "She's cooking an _____ for breakfast.",
        "translation": "她正在煮蛋作早餐。",
        "answer": "egg",
        "id": "egg"
      },
      {
        "word": "elephant",
        "pos": "n",
        "definition": "大象",
        "sentence": "The elephant is very _____.",
        "translation": "大象很大。",
        "answer": "elephant",
        "id": "elephant"
      },
      {
        "word": "friend",
        "pos": "n",
        "definition": "朋友",
        "sentence": "He is my best _________. We play games together.",
        "translation": "他是我最要好的朋友。我們 一起玩遊戲",
        "answer": "friend",
        "id": "friend"
      },
      {
        "word": "mess",
        "pos": "Noun",
        "definition": "一團亂",
        "sentence": "Clean up this ___ on the floor.",
        "translation": "把地板上的亂七八糟的東西 收拾一下。",
        "answer": "mess",
        "id": "mess"
      },
      {
        "word": "bell",
        "pos": "Noun",
        "definition": "鈴",
        "sentence": "The school ___ rang loudly.",
        "translation": "學校的鈴聲響了起來。",
        "answer": "bell",
        "id": "bell"
      },
      {
        "word": "sell",
        "pos": "Verb",
        "definition": "賣東西",
        "sentence": "They ___ toys at the market.",
        "translation": "他們在市場上賣玩具。",
        "answer": "sell",
        "id": "sell"
      },
      {
        "word": "tell",
        "pos": "Verb",
        "definition": "告訴",
        "sentence": "Can you ___ me a story?",
        "translation": "你能給我講個故事嗎？",
        "answer": "tell",
        "id": "tell"
      },
      {
        "word": "yell",
        "pos": "Verb",
        "definition": "吼叫",
        "sentence": "Please don't ___ in the library.",
        "translation": "請不要在圖書館裡吼叫。",
        "answer": "yell",
        "id": "yell"
      },
      {
        "word": "help",
        "pos": "Verb",
        "definition": "幫助",
        "sentence": "Can you ___ me with my homework?",
        "translation": "你能幫我做作業嗎？",
        "answer": "help",
        "id": "help"
      },
      {
        "word": "belt",
        "pos": "Noun",
        "definition": "腰帶",
        "sentence": "She wore a beautiful ___ with her dress.",
        "translation": "她在洋裝上配了條漂亮的腰 帶。",
        "answer": "belt",
        "id": "belt"
      },
      {
        "word": "bend",
        "pos": "Verb",
        "definition": "彎曲",
        "sentence": "You need to ___ your knees.",
        "translation": "你需要彎曲你的膝蓋。",
        "answer": "bend",
        "id": "bend"
      },
      {
        "word": "send",
        "pos": "Verb",
        "definition": "寄送/給予",
        "sentence": "I will ___ you a letter.",
        "translation": "我會寄封信給你。",
        "answer": "send",
        "id": "send"
      },
      {
        "word": "nest",
        "pos": "Noun",
        "definition": "鳥巢",
        "sentence": "The birds built a ___ in the tree.",
        "translation": "鳥在樹上築了一個巢。",
        "answer": "nest",
        "id": "nest"
      },
      {
        "word": "best",
        "pos": "Adjective",
        "definition": "最棒的",
        "sentence": "This is the ___ cake I've ever tasted.",
        "translation": "這是我嘗過的最好吃的蛋 糕。",
        "answer": "best",
        "id": "best"
      },
      {
        "word": "neck",
        "pos": "Noun",
        "definition": "脖子",
        "sentence": "He has a sore ___ from sleeping awkwardly.",
        "translation": "他因睡姿不正確而脖子疼 痛。",
        "answer": "neck",
        "id": "neck"
      },
      {
        "word": "ready",
        "pos": "adj",
        "definition": "準備好的",
        "sentence": "Are you _____ for the test?",
        "translation": "你準備好考試了嗎？",
        "answer": "ready",
        "id": "ready"
      },
      {
        "word": "breath",
        "pos": "Noun",
        "definition": "呼吸",
        "sentence": "Take a deep _____.",
        "translation": "深呼吸。",
        "answer": "breath",
        "id": "breath"
      },
      {
        "word": "heavy",
        "pos": "adj",
        "definition": "重的",
        "sentence": "That box is very _____.",
        "translation": "那個箱子很重。",
        "answer": "heavy",
        "id": "heavy"
      },
      {
        "word": "head",
        "pos": "Noun",
        "definition": "頭",
        "sentence": "I have a headache in my _____.",
        "translation": "我的頭疼。",
        "answer": "head",
        "id": "head"
      },
      {
        "word": "dead",
        "pos": "adj",
        "definition": "死的",
        "sentence": "The tree is _____ .",
        "translation": "這棵樹已經死了。",
        "answer": "dead",
        "id": "dead"
      },
      {
        "word": "deaf",
        "pos": "adj",
        "definition": "聾的",
        "sentence": "He is _____, so he can't talk.",
        "translation": "他是聾子，所以他不會講 話。",
        "answer": "deaf",
        "id": "deaf"
      },
      {
        "word": "bear",
        "pos": "V/N",
        "definition": "忍受，熊",
        "sentence": "I can't _____ the pain in my leg.",
        "translation": "我無法忍受我的腿的痛苦。",
        "answer": "bear",
        "id": "bear"
      },
      {
        "word": "pear",
        "pos": "Noun",
        "definition": "梨",
        "sentence": "I like eating _____s.",
        "translation": "我喜歡吃梨。",
        "answer": "pear",
        "id": "pear"
      }
    ],
    "group": "Short Vowels"
  },
  {
    "id": "short-vowel-i",
    "title": "Short vowel i",
    "sourceHeading": "短母音 i",
    "items": [
      {
        "word": "big",
        "pos": "Adjective",
        "definition": "大",
        "sentence": "The elephant is very _____.",
        "translation": "大象很大。",
        "answer": "big",
        "id": "big"
      },
      {
        "word": "bill",
        "pos": "Noun",
        "definition": "賬單/鈔票",
        "sentence": "I need to pay the restaurant _____.",
        "translation": "我需要支付餐廳的賬單。",
        "answer": "bill",
        "id": "bill"
      },
      {
        "word": "sit",
        "pos": "Verb",
        "definition": "坐",
        "sentence": "Please _____ down on the chair.",
        "translation": "請坐在椅子上。",
        "answer": "sit",
        "id": "sit"
      },
      {
        "word": "did",
        "pos": "Verb",
        "definition": "做",
        "sentence": "What _____ you do today?",
        "translation": "你今天做了什麼？",
        "answer": "did",
        "id": "did"
      },
      {
        "word": "dig",
        "pos": "Verb",
        "definition": "挖",
        "sentence": "I like to _____ in the garden.",
        "translation": "我喜歡在花園裡挖土。",
        "answer": "dig",
        "id": "dig"
      },
      {
        "word": "fix",
        "pos": "Verb",
        "definition": "修理",
        "sentence": "He can _____ the broken bike.",
        "translation": "他可以修理壞掉的自行車。",
        "answer": "fix",
        "id": "fix"
      },
      {
        "word": "kid",
        "pos": "Noun",
        "definition": "小孩",
        "sentence": "The _____s are playing in the park.",
        "translation": "孩子們在公園裡玩耍。",
        "answer": "kid",
        "id": "kid"
      },
      {
        "word": "lips",
        "pos": "Noun",
        "definition": "嘴唇",
        "sentence": "Her _____ are red.",
        "translation": "她的嘴唇是紅色的。",
        "answer": "lips",
        "id": "lips"
      },
      {
        "word": "tip",
        "pos": "Noun",
        "definition": "小費",
        "sentence": "Don't forget to leave a _____.",
        "translation": "別忘了留下小費。",
        "answer": "tip",
        "id": "tip"
      },
      {
        "word": "zip up",
        "pos": "Verb",
        "definition": "拉上拉鏈",
        "sentence": "Please _____ your jacket.",
        "translation": "請拉上你的夾克的拉鏈。",
        "answer": "zip up",
        "id": "zip-up"
      },
      {
        "word": "pig",
        "pos": "Noun",
        "definition": "豬",
        "sentence": "The _____ is rolling in the mud.",
        "translation": "這隻豬正在泥濘中打滾。",
        "answer": "pig",
        "id": "pig"
      },
      {
        "word": "mix",
        "pos": "Verb",
        "definition": "混合",
        "sentence": "______ the milk, flour, butter, sugar and eggs to make cake.",
        "translation": "把牛奶，麵粉，奶油，糖和 雞蛋混合在一起做蛋糕。",
        "answer": "mix",
        "id": "mix"
      },
      {
        "word": "sick",
        "pos": "Adjective",
        "definition": "生病的",
        "sentence": "She's _____ and needs some rest.",
        "translation": "她生病了，需要休息。",
        "answer": "sick",
        "id": "sick"
      },
      {
        "word": "pink",
        "pos": "Adjective",
        "definition": "粉紅色的",
        "sentence": "She loves to wear _____ dresses.",
        "translation": "她喜歡穿粉紅色的連衣裙。",
        "answer": "pink",
        "id": "pink"
      },
      {
        "word": "hit",
        "pos": "Verb",
        "definition": "打",
        "sentence": "Don't hit your friends.",
        "translation": "不可以打你的朋友",
        "answer": "hit",
        "id": "hit"
      },
      {
        "word": "wig",
        "pos": "Noun",
        "definition": "假髮",
        "sentence": "She wore a _____ for the costume party.",
        "translation": "她在化裝派對上戴了假髮。",
        "answer": "wig",
        "id": "wig"
      },
      {
        "word": "quick",
        "pos": "Adjective",
        "definition": "快速的",
        "sentence": "The rabbit is very _____.",
        "translation": "這隻兔子跑得很快。",
        "answer": "quick",
        "id": "quick"
      },
      {
        "word": "river",
        "pos": "Noun",
        "definition": "河流",
        "sentence": "We went for a swim in the _____.",
        "translation": "我們去河裡游泳。",
        "answer": "river",
        "id": "river"
      },
      {
        "word": "kiss",
        "pos": "V/N",
        "definition": "親吻",
        "sentence": "He gave her a sweet _____.",
        "translation": "他親吻了她。",
        "answer": "kiss",
        "id": "kiss"
      },
      {
        "word": "kick",
        "pos": "Verb",
        "definition": "踢",
        "sentence": "He can _____ the soccer ball far.",
        "translation": "他可以把足球踢遠。",
        "answer": "kick",
        "id": "kick"
      },
      {
        "word": "rich",
        "pos": "Adjective",
        "definition": "有錢的",
        "sentence": "They live in a _____ neighborhood.",
        "translation": "他們住在一個有錢人的社 區。",
        "answer": "rich",
        "id": "rich"
      },
      {
        "word": "ship",
        "pos": "Noun",
        "definition": "船",
        "sentence": "The _____ is sailing to the island.",
        "translation": "船正在駛向島嶼。",
        "answer": "ship",
        "id": "ship"
      },
      {
        "word": "trick",
        "pos": "V/N",
        "definition": "戲法，欺",
        "sentence": "He can do a cool magic _____.",
        "translation": "他戶變一個很酷的魔術戲 騙 法。",
        "answer": "trick",
        "id": "trick"
      },
      {
        "word": "ink",
        "pos": "Noun",
        "definition": "墨水",
        "sentence": "The pen is out of _____.",
        "translation": "這支筆沒墨水了。 this Pronoun 這個 _____ is my favorite book. 這是我的最愛書。",
        "answer": "ink",
        "id": "ink"
      },
      {
        "word": "think",
        "pos": "Verb",
        "definition": "思考",
        "sentence": "I need time to _____ about it.",
        "translation": "我需要時間來思考一下。",
        "answer": "think",
        "id": "think"
      },
      {
        "word": "thick",
        "pos": "Adjective",
        "definition": "厚的",
        "sentence": "This dictionary is very _______ and heavy.",
        "translation": "這本字典很厚很重",
        "answer": "thick",
        "id": "thick"
      },
      {
        "word": "sing",
        "pos": "Verb",
        "definition": "唱歌",
        "sentence": "She is ______ing in the bathroom.",
        "translation": "她現在正在浴室裡唱歌",
        "answer": "sing",
        "id": "sing"
      }
    ],
    "group": "Short Vowels"
  },
  {
    "id": "short-vowel-o",
    "title": "Short vowel o",
    "sourceHeading": "短母音 o",
    "items": [
      {
        "word": "mop",
        "pos": "N/V",
        "definition": "拖把",
        "sentence": "Use the _____ to clean the floor.",
        "translation": "用拖把去清理地板。",
        "answer": "mop",
        "id": "mop"
      },
      {
        "word": "top",
        "pos": "Noun",
        "definition": "頂部; 陀螺",
        "sentence": "We are running to the _____ of the mountain.",
        "translation": "我們正在跑去山頂",
        "answer": "top",
        "id": "top"
      },
      {
        "word": "cop",
        "pos": "Noun",
        "definition": "警官",
        "sentence": "The _____ is driving the police car on the streets.",
        "translation": "警官正在開車巡邏街道。",
        "answer": "cop",
        "id": "cop"
      },
      {
        "word": "hop",
        "pos": "Verb",
        "definition": "單足跳",
        "sentence": "Those kids are_____ping in the garden.",
        "translation": "那些小朋友們正在花園裡單 足跳躍。",
        "answer": "hop",
        "id": "hop"
      },
      {
        "word": "pop",
        "pos": "Verb",
        "definition": "/Adjective 流行的",
        "sentence": "I love K-_______. I can sing and dance to K-pop songs.",
        "translation": "我喜歡韓國流行樂。我可以 一邊唱一邊跳韓國歌",
        "answer": "pop",
        "id": "pop"
      },
      {
        "word": "hot",
        "pos": "Adjective",
        "definition": "熱的",
        "sentence": "Be careful, the tea is _____ .",
        "translation": "小心，茶很熱。",
        "answer": "hot",
        "id": "hot"
      },
      {
        "word": "pot",
        "pos": "Noun",
        "definition": "鍋子",
        "sentence": "She is cooking soup in the ____ .",
        "translation": "她在鍋子裡煮湯。",
        "answer": "pot",
        "id": "pot"
      },
      {
        "word": "dot",
        "pos": "Noun",
        "definition": "小圓點",
        "sentence": "There's a red _____ on the paper.",
        "translation": "紙上有一個紅色的小圓點。",
        "answer": "dot",
        "id": "dot"
      },
      {
        "word": "lot",
        "pos": "Noun",
        "definition": "很多",
        "sentence": "We have a _____ of work to do.",
        "translation": "我們有很多工作要做。",
        "answer": "lot",
        "id": "lot"
      },
      {
        "word": "rot",
        "pos": "Verb",
        "definition": "腐爛",
        "sentence": "The fruit will _____ because it's too hot.",
        "translation": "水果會腐爛因為天氣太熱。",
        "answer": "rot",
        "id": "rot"
      },
      {
        "word": "mom",
        "pos": "Noun",
        "definition": "媽媽",
        "sentence": "My _____ bakes delicious cookies.",
        "translation": "我媽媽烤的餅乾很好吃。",
        "answer": "mom",
        "id": "mom"
      },
      {
        "word": "jog",
        "pos": "Verb",
        "definition": "/Noun 慢跑",
        "sentence": "Let's go _____ging in the park.",
        "translation": "我們去公園慢跑吧。",
        "answer": "jog",
        "id": "jog"
      },
      {
        "word": "fog",
        "pos": "Noun",
        "definition": "霧",
        "sentence": "The _____ makes it hard to see.",
        "translation": "霧讓人很難看清楚。",
        "answer": "fog",
        "id": "fog"
      },
      {
        "word": "log",
        "pos": "Noun",
        "definition": "原木",
        "sentence": "We need some _____s for the fire.",
        "translation": "我們需要原木來生火。",
        "answer": "log",
        "id": "log"
      },
      {
        "word": "sock",
        "pos": "Noun",
        "definition": "襪子",
        "sentence": "I need to buy new _____s.",
        "translation": "我需要買新的襪子。",
        "answer": "sock",
        "id": "sock"
      },
      {
        "word": "lock",
        "pos": "Noun",
        "definition": "/Verb 鎖",
        "sentence": "Don't forget to _____ the door when you go out.",
        "translation": "別忘了鎖門。",
        "answer": "lock",
        "id": "lock"
      },
      {
        "word": "cod",
        "pos": "Noun",
        "definition": "鱈魚",
        "sentence": "She is cooking a delicious _____ dish.",
        "translation": "她做了一道美味的鱈魚菜 餚。",
        "answer": "cod",
        "id": "cod"
      },
      {
        "word": "rod",
        "pos": "Noun",
        "definition": "棒,桿,竿",
        "sentence": "He likes to go fishing with his _____.",
        "translation": "他喜歡帶著他的釣竿釣魚。",
        "answer": "rod",
        "id": "rod"
      },
      {
        "word": "nod",
        "pos": "Verb",
        "definition": "點頭",
        "sentence": "He gave a _____ of approval.",
        "translation": "他點了點頭表示贊同。",
        "answer": "nod",
        "id": "nod"
      },
      {
        "word": "god",
        "pos": "Noun",
        "definition": "神",
        "sentence": "People pray to _____ in the church.",
        "translation": "人們在教堂裡向神禱告。",
        "answer": "god",
        "id": "god"
      },
      {
        "word": "fox",
        "pos": "Noun",
        "definition": "狐狸",
        "sentence": "There are a lot of ______es in the woods.",
        "translation": "樹林裡有很多隻狐狸。",
        "answer": "fox",
        "id": "fox"
      },
      {
        "word": "box",
        "pos": "Noun",
        "definition": "盒子",
        "sentence": "The gift is inside the _____.",
        "translation": "禮物在盒子裡面。",
        "answer": "box",
        "id": "box"
      },
      {
        "word": "shop",
        "pos": "Verb",
        "definition": "/Noun 購物/商店",
        "sentence": "We're going _____ at the mall.",
        "translation": "我們要去商場購物。",
        "answer": "shop",
        "id": "shop"
      },
      {
        "word": "chop",
        "pos": "Verb",
        "definition": "切剁",
        "sentence": "Can you _____ the vegetables for the salad?",
        "translation": "你能把蔬菜切碎做沙拉嗎？",
        "answer": "chop",
        "id": "chop"
      },
      {
        "word": "clock",
        "pos": "Noun",
        "definition": "鐘表",
        "sentence": "Look at the _____ on the wall.",
        "translation": "看看牆上的時鐘。 o'clock Adverb 點鐘 What time is it? It's twelve ________ . 現在幾點? 現在是十二點。",
        "answer": "clock",
        "id": "clock"
      },
      {
        "word": "drop",
        "pos": "Verb",
        "definition": "掉落",
        "sentence": "Be careful not to _____ the glass.",
        "translation": "小心別讓玻璃掉下來。",
        "answer": "drop",
        "id": "drop"
      },
      {
        "word": "frog",
        "pos": "Noun",
        "definition": "青蛙",
        "sentence": "There is a _____ by the pond.",
        "translation": "在池塘邊有一隻青蛙。",
        "answer": "frog",
        "id": "frog"
      },
      {
        "word": "stop",
        "pos": "n",
        "definition": "/V 停止",
        "sentence": "Please _____ running in the hallway.",
        "translation": "請不要在走廊裡奔跑。",
        "answer": "stop",
        "id": "stop"
      },
      {
        "word": "what ㄚ",
        "pos": "n",
        "definition": "什麼",
        "sentence": "_______ do you want? I want some water.",
        "translation": "你想要什麼? 我想要一些水",
        "answer": "what ㄚ",
        "id": "what"
      },
      {
        "word": "want ㄚ",
        "pos": "v",
        "definition": "想要",
        "sentence": "What does he want? He wants some apple juice.",
        "translation": "他想要什麼?他想要一些蘋果 汁",
        "answer": "want ㄚ",
        "id": "want"
      },
      {
        "word": "water ㄚ",
        "pos": "n",
        "definition": "水",
        "sentence": "Do you want some water? Yes, I do. No, thank you.",
        "translation": "你想要一些水嗎?是的。不， 感謝",
        "answer": "water ㄚ",
        "id": "water"
      },
      {
        "word": "father ㄚ",
        "pos": "n",
        "definition": "爸爸",
        "sentence": "Does your father want some water? Yes, he does. No, he doesn't.",
        "translation": "你爸想要一些水嗎?是的/不",
        "answer": "father ㄚ",
        "id": "father"
      },
      {
        "word": "swan ㄚ",
        "pos": "n",
        "definition": "天鵝",
        "sentence": "I can’t tell a swan from a goose or a duck.",
        "translation": "我區分不出來天鵝，鵝，旱 鴨子的差別",
        "answer": "swan ㄚ",
        "id": "swan"
      }
    ],
    "group": "Short Vowels"
  },
  {
    "id": "short-vowel-u",
    "title": "Short vowel u",
    "sourceHeading": "短母音 u",
    "items": [
      {
        "word": "ugly",
        "pos": "Adjective",
        "definition": "醜的",
        "sentence": "The bugs are _______________. Yuck.",
        "translation": "蟲很醜。很噁心",
        "answer": "ugly",
        "id": "ugly"
      },
      {
        "word": "umbrella",
        "pos": "Noun",
        "definition": "雨傘",
        "sentence": "It's raining now. Don't forget to bring an ____________.",
        "translation": "正在下雨，不要忘記帶雨 傘。",
        "answer": "umbrella",
        "id": "umbrella"
      },
      {
        "word": "sun",
        "pos": "Noun",
        "definition": "太陽",
        "sentence": "The ____ rises from the east.",
        "translation": "太陽從東邊升起",
        "answer": "sun",
        "id": "sun"
      },
      {
        "word": "sunny",
        "pos": "Adjective",
        "definition": "晴朗的",
        "sentence": "It's ______ny today.",
        "translation": "今天太陽高照。",
        "answer": "sunny",
        "id": "sunny"
      },
      {
        "word": "bun",
        "pos": "Noun",
        "definition": "小圓麵包",
        "sentence": "What do you want? I want a hamburger with a _______.",
        "translation": "我要一個小圓麵包漢堡。",
        "answer": "bun",
        "id": "bun"
      },
      {
        "word": "fun",
        "pos": "Noun",
        "definition": "樂趣",
        "sentence": "I like to play games with friends. It is so much _______.",
        "translation": "我與朋友玩遊戲。這真是太 有趣了。",
        "answer": "fun",
        "id": "fun"
      },
      {
        "word": "run",
        "pos": "Verb",
        "definition": "跑",
        "sentence": "Let's _______ to the park and play games.",
        "translation": "我們去公園跑跑步玩玩吧。",
        "answer": "run",
        "id": "run"
      },
      {
        "word": "bug",
        "pos": "Noun",
        "definition": "蟲子",
        "sentence": "There's a tiny _______ on the leaf.",
        "translation": "在葉子上有一隻小小的蟲 子。",
        "answer": "bug",
        "id": "bug"
      },
      {
        "word": "mug",
        "pos": "Noun",
        "definition": "馬克杯",
        "sentence": "She is drinking some coffee from a big _______ .",
        "translation": "她正在用大馬克杯喝咖啡。",
        "answer": "mug",
        "id": "mug"
      },
      {
        "word": "rug",
        "pos": "Noun",
        "definition": "小地毯",
        "sentence": "This _______ is ugly.",
        "translation": "這張小地毯很醜",
        "answer": "rug",
        "id": "rug"
      },
      {
        "word": "hug",
        "pos": "Verb",
        "definition": "擁抱",
        "sentence": "Give me a _______ before you go.",
        "translation": "你走之前給我一個擁抱。",
        "answer": "hug",
        "id": "hug"
      },
      {
        "word": "nut",
        "pos": "Noun",
        "definition": "堅果",
        "sentence": "He is eating some _______s for snacks. Yum!",
        "translation": "他正在吃堅果當點心。好好 吃 but Conjunction 但是 I'm tired, _______ I still want to finish my homework first. 我累了，但我還想完成這個 任務。",
        "answer": "nut",
        "id": "nut"
      },
      {
        "word": "cut",
        "pos": "Verb",
        "definition": "切割",
        "sentence": "Be careful when you _______ with scissors.",
        "translation": "用剪刀切東西時要小心。",
        "answer": "cut",
        "id": "cut"
      },
      {
        "word": "tub",
        "pos": "Noun",
        "definition": "盆；桶",
        "sentence": "She's taking a bath in the _______.",
        "translation": "她正在盆裡洗澡。",
        "answer": "tub",
        "id": "tub"
      },
      {
        "word": "rub",
        "pos": "Verb",
        "definition": "搓、摩擦",
        "sentence": "You can _______ your hands together to warm them up.",
        "translation": "你可以把手搓在一起暖和一 下。",
        "answer": "rub",
        "id": "rub"
      },
      {
        "word": "cub",
        "pos": "Noun",
        "definition": "幼獸",
        "sentence": "A baby lion or a baby bear is a _______.",
        "translation": "小獅子或小熊被稱為幼獸。",
        "answer": "cub",
        "id": "cub"
      },
      {
        "word": "gun",
        "pos": "Noun",
        "definition": "槍",
        "sentence": "The police officer is walking and he carries a _______ .",
        "translation": "警察正在走路且他有攜帶槍 支",
        "answer": "gun",
        "id": "gun"
      },
      {
        "word": "gum",
        "pos": "Noun",
        "definition": "口香糖",
        "sentence": "Do you have any _______ to share?",
        "translation": "你有口香糖可以分享嗎？",
        "answer": "gum",
        "id": "gum"
      },
      {
        "word": "mud",
        "pos": "Noun",
        "definition": "泥巴",
        "sentence": "After the rain, the ground was all in _______.",
        "translation": "雨過後，地面都是泥巴。",
        "answer": "mud",
        "id": "mud"
      },
      {
        "word": "bus",
        "pos": "Noun",
        "definition": "巴士",
        "sentence": "I often go to school by _____.",
        "translation": "我常常坐巴士上班。",
        "answer": "bus",
        "id": "bus"
      },
      {
        "word": "luck",
        "pos": "Noun",
        "definition": "運氣",
        "sentence": "I hope you have good _______ on your test.",
        "translation": "我希望你在測驗上運氣好。",
        "answer": "luck",
        "id": "luck"
      },
      {
        "word": "lucky",
        "pos": "Adjective",
        "definition": "幸運的",
        "sentence": "It's a _______ day for us!",
        "translation": "今天對我們來說是幸運的一 天！ plus Preposition 加上 Two _______ two is four. 兩加兩等於四。",
        "answer": "lucky",
        "id": "lucky"
      },
      {
        "word": "truck",
        "pos": "Noun",
        "definition": "卡車",
        "sentence": "Can he drive a ________? Yes, he can. No, he can't.",
        "translation": "他會開貨車嗎? 會/不會",
        "answer": "truck",
        "id": "truck"
      },
      {
        "word": "drug",
        "pos": "Noun",
        "definition": "藥物",
        "sentence": "He takes a _______ when he has headache, stomachache and toothache.",
        "translation": "他吃藥物當他有頭痛胃痛和 牙痛時。",
        "answer": "drug",
        "id": "drug"
      },
      {
        "word": "bubble",
        "pos": "Noun",
        "definition": "/Verb 泡泡",
        "sentence": "The children love to blow __________s.",
        "translation": "孩子們喜歡吹泡泡。",
        "answer": "bubble",
        "id": "bubble"
      },
      {
        "word": "shut",
        "pos": "Verb",
        "definition": "關閉",
        "sentence": "Please _______ the door when you leave.",
        "translation": "離開時請關閉門。",
        "answer": "shut",
        "id": "shut"
      },
      {
        "word": "blood ㄜ",
        "pos": "Noun",
        "definition": "血",
        "sentence": "The nurse got my _______ for the test.",
        "translation": "護士拿我的血進行檢測。",
        "answer": "blood ㄜ",
        "id": "blood"
      },
      {
        "word": "put ㄨ",
        "pos": "Verb",
        "definition": "放",
        "sentence": "_______ the book on the shelf, please.",
        "translation": "請將書放在書架上。",
        "answer": "put ㄨ",
        "id": "put"
      },
      {
        "word": "push ㄨ",
        "pos": "Verb",
        "definition": "推",
        "sentence": "Don't pull the door. You need to ______ the door.",
        "translation": "不要拉門。要用推的",
        "answer": "push ㄨ",
        "id": "push"
      },
      {
        "word": "pull ㄨ",
        "pos": "Verb",
        "definition": "拉",
        "sentence": "I'll _______ the rope, and you push the box.",
        "translation": "我拉繩子，你推箱子。",
        "answer": "pull ㄨ",
        "id": "pull"
      },
      {
        "word": "bull ㄨ",
        "pos": "Noun",
        "definition": "公牛",
        "sentence": "The _______ is eating grass.",
        "translation": "這頭公牛正在吃草。",
        "answer": "bull ㄨ",
        "id": "bull"
      }
    ],
    "group": "Short Vowels"
  },
  {
    "id": "long-vowel-a",
    "title": "Long vowel a",
    "sourceHeading": "長母音 a",
    "items": [
      {
        "word": "maid",
        "pos": "noun",
        "definition": "女僕",
        "sentence": "The ________ is cleaning the bedroom.",
        "translation": "這個女僕在打掃臥室。",
        "answer": "maid",
        "id": "maid"
      },
      {
        "word": "fail",
        "pos": "verb",
        "definition": "失敗",
        "sentence": "Don’t be ________ to fail.",
        "translation": "不要害怕失敗。",
        "answer": "fail",
        "id": "fail"
      },
      {
        "word": "pain",
        "pos": "noun",
        "definition": "痛苦",
        "sentence": "I feel ________ in my knee.",
        "translation": "我感受到痛苦在我的膝蓋上",
        "answer": "pain",
        "id": "pain"
      },
      {
        "word": "faint",
        "pos": "adjective",
        "definition": ", verb 昏厥;暈倒",
        "sentence": "It’s so hot. I may ________.",
        "translation": "天氣好熱。我可能會昏倒。",
        "answer": "faint",
        "id": "faint"
      },
      {
        "word": "lay",
        "pos": "verb",
        "definition": "放;擱/下蛋",
        "sentence": "Please ________ down on the ground.",
        "translation": "請躺下在地面上。",
        "answer": "lay",
        "id": "lay"
      },
      {
        "word": "say",
        "pos": "verb",
        "definition": "講",
        "sentence": "I ________ hi to my classmates.",
        "translation": "我說 hi 對我的同學。",
        "answer": "say",
        "id": "say"
      },
      {
        "word": "bay",
        "pos": "noun",
        "definition": "海灣",
        "sentence": "There is a beautiful ________.",
        "translation": "這裡有一個美麗的海灣。",
        "answer": "bay",
        "id": "bay"
      },
      {
        "word": "hay",
        "pos": "noun",
        "definition": "乾草",
        "sentence": "There is a pile of ________.",
        "translation": "這裡有一堆乾草。",
        "answer": "hay",
        "id": "hay"
      },
      {
        "word": "gate",
        "pos": "noun",
        "definition": "門",
        "sentence": "The ________ is open.",
        "translation": "大門是開著的。",
        "answer": "gate",
        "id": "gate"
      },
      {
        "word": "rake",
        "pos": "noun",
        "definition": ", verb 園藝耙",
        "sentence": "The farmers have to ________ the leaves.",
        "translation": "農夫們必須耙落葉。",
        "answer": "rake",
        "id": "rake"
      },
      {
        "word": "fake",
        "pos": "adjective",
        "definition": "假的",
        "sentence": "The news is ________.",
        "translation": "這新聞是假的。",
        "answer": "fake",
        "id": "fake"
      },
      {
        "word": "wave",
        "pos": "noun",
        "definition": ", verb 海浪",
        "sentence": "I see a ________ in the sea.",
        "translation": "我看到一個海浪在海裡。",
        "answer": "wave",
        "id": "wave"
      },
      {
        "word": "name",
        "pos": "noun",
        "definition": "名字",
        "sentence": "What’s your ________? My ________ is Ben.",
        "translation": "你叫什麼名字？我的名字是 Ben",
        "answer": "name",
        "id": "name"
      },
      {
        "word": "face",
        "pos": "noun",
        "definition": "臉",
        "sentence": "There is some rice on your ________.",
        "translation": "有一些米飯在你的臉上。",
        "answer": "face",
        "id": "face"
      },
      {
        "word": "cake",
        "pos": "noun",
        "definition": "蛋糕",
        "sentence": "I am eating my birthday ________.",
        "translation": "我正在吃我的生日蛋糕。",
        "answer": "cake",
        "id": "cake"
      },
      {
        "word": "page",
        "pos": "noun",
        "definition": "頁",
        "sentence": "Please turn to ________ thirty.",
        "translation": "請翻到第 30 頁。",
        "answer": "page",
        "id": "page"
      },
      {
        "word": "plate",
        "pos": "noun",
        "definition": "盤子",
        "sentence": "There is a ________ on the table.",
        "translation": "桌子上有一個盤子。",
        "answer": "plate",
        "id": "plate"
      },
      {
        "word": "bake",
        "pos": "verb",
        "definition": "烘焙",
        "sentence": "Can you ________ cookies? Yes, I can. No, I can’t.",
        "translation": "你會烤餅乾嗎?是的我會。 不，我不會",
        "answer": "bake",
        "id": "bake"
      },
      {
        "word": "date",
        "pos": "noun",
        "definition": "日期",
        "sentence": "What’s the ________ today? It’s May thirty-first.",
        "translation": "今天是幾月幾日？5/31",
        "answer": "date",
        "id": "date"
      },
      {
        "word": "wake up",
        "pos": "verb",
        "definition": "醒來",
        "sentence": "I ________ up at six thirty every day.",
        "translation": "我醒來在 6:30 每天。",
        "answer": "wake up",
        "id": "wake-up"
      },
      {
        "word": "lake",
        "pos": "noun",
        "definition": "湖泊",
        "sentence": "There is a boat on the ________.",
        "translation": "有一艘船在湖上。",
        "answer": "lake",
        "id": "lake"
      },
      {
        "word": "hate",
        "pos": "verb",
        "definition": ", noun 恨",
        "sentence": "I ________ mice.",
        "translation": "我討厭老鼠。",
        "answer": "hate",
        "id": "hate"
      },
      {
        "word": "play",
        "pos": "verb",
        "definition": ", noun 玩遊戲",
        "sentence": "They are ________ing baseball.",
        "translation": "他們正在打棒球。",
        "answer": "play",
        "id": "play"
      },
      {
        "word": "rainy",
        "pos": "adj",
        "definition": "下雨",
        "sentence": "How’s the weather? It is ________.",
        "translation": "天氣如何?今天是雨天。",
        "answer": "rainy",
        "id": "rainy"
      },
      {
        "word": "late",
        "pos": "adjective",
        "definition": "遲到的",
        "sentence": "Don’t be ________ for school.",
        "translation": "不要遲到去上學校。",
        "answer": "late",
        "id": "late"
      },
      {
        "word": "make",
        "pos": "verb",
        "definition": "製作",
        "sentence": "She can ________ cake.",
        "translation": "她會做蛋糕。",
        "answer": "make",
        "id": "make"
      },
      {
        "word": "take",
        "pos": "verb",
        "definition": "拿取",
        "sentence": "Can I ________ these cookies? Yes, you can.",
        "translation": "我能拿這些餅乾嗎？是的你 可以",
        "answer": "take",
        "id": "take"
      },
      {
        "word": "day",
        "pos": "noun",
        "definition": "日期",
        "sentence": "It's a ________ day.",
        "translation": "今天是個很棒的一天。",
        "answer": "day",
        "id": "day"
      },
      {
        "word": "May",
        "pos": "proper noun",
        "definition": "五月",
        "sentence": "His birthday is in ________.",
        "translation": "他的生日在五月。",
        "answer": "May",
        "id": "may"
      },
      {
        "word": "train",
        "pos": "noun",
        "definition": ", verb 火車",
        "sentence": "I can ________ a train.",
        "translation": "我會搭火車 they noun 他們 ________ are my sister and brother. 他們是我的姊妹和兄弟",
        "answer": "train",
        "id": "train"
      },
      {
        "word": "great",
        "pos": "adj",
        "definition": "很棒的",
        "sentence": "I am a ________ kid.",
        "translation": "我是個很棒的小孩",
        "answer": "great",
        "id": "great"
      },
      {
        "word": "break",
        "pos": "v",
        "definition": "打破",
        "sentence": "Don’t ________ these eggs.",
        "translation": "不要打破這些蛋",
        "answer": "break",
        "id": "break"
      }
    ],
    "group": "Long Vowels"
  },
  {
    "id": "long-vowel-e",
    "title": "Long vowel e",
    "sourceHeading": "長母音 e",
    "items": [
      {
        "word": "me",
        "pos": "n",
        "definition": "我",
        "sentence": "He likes to play with ___________.",
        "translation": "他喜歡跟我玩。 he n 他 ___________ is a good doctor. 他是一名好醫生。 we n 我們 ___________ are best friends. 我們是最好的朋友。 she n 她 ___________ is my English teacher. 她是我的英文老師。",
        "answer": "me",
        "id": "me"
      },
      {
        "word": "gene",
        "pos": "n",
        "definition": "基因",
        "sentence": "The twin brothers have the same ___________s.",
        "translation": "這對雙胞胎兄弟有相同的基 因",
        "answer": "gene",
        "id": "gene"
      },
      {
        "word": "these",
        "pos": "n",
        "definition": "這些",
        "sentence": "Let’s play with ___________ sheep.",
        "translation": "我們跟這些羊玩耍吧",
        "answer": "these",
        "id": "these"
      },
      {
        "word": "tea",
        "pos": "n",
        "definition": "茶",
        "sentence": "I drink ___________ in the morning.",
        "translation": "我早上喝茶。",
        "answer": "tea",
        "id": "tea"
      },
      {
        "word": "sea",
        "pos": "n",
        "definition": "海",
        "sentence": "The ___________ is blue.",
        "translation": "海是藍色的。",
        "answer": "sea",
        "id": "sea"
      },
      {
        "word": "lead",
        "pos": "v",
        "definition": "帶領",
        "sentence": "She will ___________ my team.",
        "translation": "她會帶領我的團隊。",
        "answer": "lead",
        "id": "lead"
      },
      {
        "word": "read",
        "pos": "v",
        "definition": "閱讀",
        "sentence": "They are ___________ing books.",
        "translation": "他們正在看書。",
        "answer": "read",
        "id": "read"
      },
      {
        "word": "lean",
        "pos": "v",
        "definition": "傾斜",
        "sentence": "Don’t ___________ against the wall.",
        "translation": "不要靠著牆。",
        "answer": "lean",
        "id": "lean"
      },
      {
        "word": "clean",
        "pos": "adj",
        "definition": "乾淨的",
        "sentence": "My feet are ___________.",
        "translation": "我的腳很乾淨",
        "answer": "clean",
        "id": "clean"
      },
      {
        "word": "weak",
        "pos": "adj",
        "definition": "虛弱的",
        "sentence": "He is ___________ when he is sick.",
        "translation": "他很虛弱當他生病時",
        "answer": "weak",
        "id": "weak"
      },
      {
        "word": "beat",
        "pos": "v",
        "definition": "打敗",
        "sentence": "We ___________ her team.",
        "translation": "我們打敗了她的隊伍。",
        "answer": "beat",
        "id": "beat"
      },
      {
        "word": "team",
        "pos": "n",
        "definition": "團隊",
        "sentence": "We are the best ___________.",
        "translation": "我們是最好的團隊",
        "answer": "team",
        "id": "team"
      },
      {
        "word": "cheap",
        "pos": "adj",
        "definition": "便宜的",
        "sentence": "The pencil is ___________.",
        "translation": "這支鉛筆很便宜。",
        "answer": "cheap",
        "id": "cheap"
      },
      {
        "word": "ice cream",
        "pos": "n",
        "definition": "冰淇淋",
        "sentence": "I like chocolate ice ___________.",
        "translation": "我喜歡巧克力冰淇淋。",
        "answer": "ice cream",
        "id": "ice-cream"
      },
      {
        "word": "dream",
        "pos": "n",
        "definition": "作夢",
        "sentence": "I had a bad ___________ last night.",
        "translation": "昨晚我做了一個惡夢。",
        "answer": "dream",
        "id": "dream"
      },
      {
        "word": "see",
        "pos": "v",
        "definition": "看見",
        "sentence": "I ___________ the bird flying.",
        "translation": "我看見這隻鳥正在飛。",
        "answer": "see",
        "id": "see"
      },
      {
        "word": "seed",
        "pos": "n",
        "definition": "種子",
        "sentence": "This is a flower ___________.",
        "translation": "這是一顆花種子。",
        "answer": "seed",
        "id": "seed"
      },
      {
        "word": "meet",
        "pos": "v",
        "definition": "遇見;相遇",
        "sentence": "I will ___________ him at the park.",
        "translation": "我會在公園和他見面。",
        "answer": "meet",
        "id": "meet"
      },
      {
        "word": "feet",
        "pos": "n",
        "definition": "腳(兩個)",
        "sentence": "I have two big ___________. My feet are clean.",
        "translation": "我有兩隻大腳ㄚ。",
        "answer": "feet",
        "id": "feet"
      },
      {
        "word": "need",
        "pos": "v",
        "definition": "需要",
        "sentence": "I’m hungry. I ___________ food.",
        "translation": "我很餓。我需要食物。",
        "answer": "need",
        "id": "need"
      },
      {
        "word": "bee",
        "pos": "n",
        "definition": "蜜蜂",
        "sentence": "The ___________ makes honey.",
        "translation": "蜜蜂製作蜂蜜。",
        "answer": "bee",
        "id": "bee"
      },
      {
        "word": "jeep",
        "pos": "n",
        "definition": "吉普車",
        "sentence": "We can drive a __________ on the mountain.",
        "translation": "我們可以在山上開吉普車。",
        "answer": "jeep",
        "id": "jeep"
      },
      {
        "word": "sheep",
        "pos": "n",
        "definition": "綿羊",
        "sentence": "The ___________ has wool.",
        "translation": "綿羊有羊毛。",
        "answer": "sheep",
        "id": "sheep"
      },
      {
        "word": "cheese",
        "pos": "n",
        "definition": "起司",
        "sentence": "I like ___________ pizza.",
        "translation": "我喜歡起司披薩。",
        "answer": "cheese",
        "id": "cheese"
      },
      {
        "word": "sleep",
        "pos": "v",
        "definition": "睡",
        "sentence": "I ___________ at night.",
        "translation": "我晚上睡覺。",
        "answer": "sleep",
        "id": "sleep"
      },
      {
        "word": "tree",
        "pos": "n",
        "definition": "樹",
        "sentence": "The ___________is tall.",
        "translation": "這棵樹很高。",
        "answer": "tree",
        "id": "tree"
      },
      {
        "word": "key",
        "pos": "n",
        "definition": "鑰匙",
        "sentence": "I can’t see my ___________.",
        "translation": "我看不到我的鑰匙。",
        "answer": "key",
        "id": "key"
      },
      {
        "word": "monkey",
        "pos": "n",
        "definition": "猴子",
        "sentence": "The ___________ is playing in the tree.",
        "translation": "猴子在樹上玩耍。",
        "answer": "monkey",
        "id": "monkey"
      },
      {
        "word": "money",
        "pos": "n",
        "definition": "錢",
        "sentence": "I need ____________ to buy food.",
        "translation": "我需要錢買食物。",
        "answer": "money",
        "id": "money"
      },
      {
        "word": "believe",
        "pos": "v",
        "definition": "相信",
        "sentence": "I _________ you, but I don't believe him.",
        "translation": "我相信你，但我不相信他",
        "answer": "believe",
        "id": "believe"
      }
    ],
    "group": "Long Vowels"
  },
  {
    "id": "long-vowel-i",
    "title": "Long vowel i",
    "sourceHeading": "長母音 i",
    "items": [
      {
        "word": "hide",
        "pos": "verb",
        "definition": "躲藏",
        "sentence": "Don't _______ under the bed!",
        "translation": "不要躲藏在床底下！",
        "answer": "hide",
        "id": "hide"
      },
      {
        "word": "ride",
        "pos": "verb",
        "definition": "騎",
        "sentence": "I want to _______ a bike.",
        "translation": "我想騎腳踏車。",
        "answer": "ride",
        "id": "ride"
      },
      {
        "word": "wide",
        "pos": "adjective",
        "definition": "寬的",
        "sentence": "The road is very _______.",
        "translation": "這條路很寬。",
        "answer": "wide",
        "id": "wide"
      },
      {
        "word": "life",
        "pos": "noun",
        "definition": "生命",
        "sentence": "Plants need water for _______.",
        "translation": "植物需要水才能生長。",
        "answer": "life",
        "id": "life"
      },
      {
        "word": "wife",
        "pos": "noun",
        "definition": "妻子",
        "sentence": "His _______ is a doctor.",
        "translation": "他的妻子是醫生。",
        "answer": "wife",
        "id": "wife"
      },
      {
        "word": "bike",
        "pos": "noun",
        "definition": "腳踏車",
        "sentence": "I ride my _______ to school every day.",
        "translation": "我每天騎腳踏車上學。",
        "answer": "bike",
        "id": "bike"
      },
      {
        "word": "hike",
        "pos": "verb",
        "definition": "健行",
        "sentence": "Let's _______ in the mountains.",
        "translation": "我們去山上健行吧。",
        "answer": "hike",
        "id": "hike"
      },
      {
        "word": "like",
        "pos": "verb",
        "definition": "喜歡",
        "sentence": "I _______ ice cream.",
        "translation": "我喜歡冰淇淋。",
        "answer": "like",
        "id": "like"
      },
      {
        "word": "mile",
        "pos": "noun",
        "definition": "英里",
        "sentence": "I ride a bike for six _______s.",
        "translation": "我騎腳踏車六英里",
        "answer": "mile",
        "id": "mile"
      },
      {
        "word": "pile",
        "pos": "noun",
        "definition": "一堆",
        "sentence": "There's a _______ of books on the table.",
        "translation": "桌子上有一堆書。",
        "answer": "pile",
        "id": "pile"
      },
      {
        "word": "smile",
        "pos": "verb",
        "definition": "微笑",
        "sentence": "The girl _______d at her friend.",
        "translation": "小女孩對她的朋友微笑。",
        "answer": "smile",
        "id": "smile"
      },
      {
        "word": "lime",
        "pos": "noun",
        "definition": "萊姆",
        "sentence": "I put a _______ into my drink.",
        "translation": "我將一個萊姆放進我的飲料 中。",
        "answer": "lime",
        "id": "lime"
      },
      {
        "word": "time",
        "pos": "noun",
        "definition": "時間",
        "sentence": "What _______ is it? It's three o'clock.",
        "translation": "現在是幾點？三點",
        "answer": "time",
        "id": "time"
      },
      {
        "word": "dime",
        "pos": "noun",
        "definition": "一角硬幣",
        "sentence": "I found a _______ on the desk.",
        "translation": "我在桌上找到一個一角硬 幣。",
        "answer": "dime",
        "id": "dime"
      },
      {
        "word": "fine",
        "pos": "adjective",
        "definition": "好的",
        "sentence": "How are you? I'm _______ today.",
        "translation": "今天你過得如何?還好。",
        "answer": "fine",
        "id": "fine"
      },
      {
        "word": "line",
        "pos": "noun",
        "definition": "線",
        "sentence": "Please draw a _______.",
        "translation": "請畫一條直線。",
        "answer": "line",
        "id": "line"
      },
      {
        "word": "nine",
        "pos": "number",
        "definition": "九",
        "sentence": "There are _______ students.",
        "translation": "有九個學生。",
        "answer": "nine",
        "id": "nine"
      },
      {
        "word": "shine",
        "pos": "verb",
        "definition": "照耀",
        "sentence": "The sun _______s in the sky.",
        "translation": "太陽在天空中照耀。",
        "answer": "shine",
        "id": "shine"
      },
      {
        "word": "pipe",
        "pos": "noun",
        "definition": "管子",
        "sentence": "There is water in the _______.",
        "translation": "管子裡有水。",
        "answer": "pipe",
        "id": "pipe"
      },
      {
        "word": "ripe",
        "pos": "adjective",
        "definition": "熟的",
        "sentence": "The bananas are _______ .",
        "translation": "這些香蕉熟了",
        "answer": "ripe",
        "id": "ripe"
      },
      {
        "word": "wipe",
        "pos": "verb",
        "definition": "擦拭",
        "sentence": "Please _______ the table.",
        "translation": "晚飯後請擦拭桌子。",
        "answer": "wipe",
        "id": "wipe"
      },
      {
        "word": "fire",
        "pos": "noun",
        "definition": "火",
        "sentence": "Be careful! The _______ is hot.",
        "translation": "小心！火很熱。",
        "answer": "fire",
        "id": "fire"
      },
      {
        "word": "hire",
        "pos": "verb",
        "definition": "雇用",
        "sentence": "The company decided to _______ a new employee.",
        "translation": "公司決定雇用一名新員工。",
        "answer": "hire",
        "id": "hire"
      },
      {
        "word": "tire",
        "pos": "noun",
        "definition": "輪胎",
        "sentence": "The car has a flat _______.",
        "translation": "這輛車的輪胎漏氣了。",
        "answer": "tire",
        "id": "tire"
      },
      {
        "word": "rise",
        "pos": "verb",
        "definition": "上升",
        "sentence": "The sun will _______ in the morning.",
        "translation": "太陽會在早上升起。",
        "answer": "rise",
        "id": "rise"
      },
      {
        "word": "wise",
        "pos": "adjective",
        "definition": "有智慧的",
        "sentence": "My grandmother is very _______.",
        "translation": "我的奶奶非常有智慧。",
        "answer": "wise",
        "id": "wise"
      },
      {
        "word": "bite",
        "pos": "verb",
        "definition": "咬",
        "sentence": "Be careful! The dog might _______ you.",
        "translation": "小心！狗可能會咬你。",
        "answer": "bite",
        "id": "bite"
      },
      {
        "word": "kite",
        "pos": "noun",
        "definition": "風箏",
        "sentence": "Let's fly a _______ in the park.",
        "translation": "我們在公園放風箏吧。",
        "answer": "kite",
        "id": "kite"
      },
      {
        "word": "quite",
        "pos": "adverb",
        "definition": "相當地",
        "sentence": "It's _______ hot today.",
        "translation": "今天相當熱。",
        "answer": "quite",
        "id": "quite"
      },
      {
        "word": "white",
        "pos": "adjective",
        "definition": "白色的",
        "sentence": "The snow is _______.",
        "translation": "雪是白色的。",
        "answer": "white",
        "id": "white"
      },
      {
        "word": "dive",
        "pos": "verb",
        "definition": "跳水",
        "sentence": "The swimmer will _______ into the pool.",
        "translation": "游泳者將跳進游泳池。",
        "answer": "dive",
        "id": "dive"
      },
      {
        "word": "five",
        "pos": "number",
        "definition": "五",
        "sentence": "I have _______ fingers on my hand.",
        "translation": "我手上有五個手指。",
        "answer": "five",
        "id": "five"
      },
      {
        "word": "drive",
        "pos": "verb",
        "definition": "開車",
        "sentence": "My dad can _______ a car very well.",
        "translation": "我爸爸開車開得很好。",
        "answer": "drive",
        "id": "drive"
      },
      {
        "word": "size",
        "pos": "noun",
        "definition": "尺寸",
        "sentence": "What _______ shoe do you wear?",
        "translation": "你穿多大碼的鞋？",
        "answer": "size",
        "id": "size"
      },
      {
        "word": "prize",
        "pos": "noun",
        "definition": "獎勵",
        "sentence": "I won a _______ in school.",
        "translation": "我在學校贏得了一個獎勵。",
        "answer": "prize",
        "id": "prize"
      },
      {
        "word": "ice",
        "pos": "noun",
        "definition": "冰",
        "sentence": "Can I have some _______ in my juice?",
        "translation": "我的果汁裡可以加一些冰 嗎？",
        "answer": "ice",
        "id": "ice"
      },
      {
        "word": "dice",
        "pos": "noun",
        "definition": "骰子",
        "sentence": "Let's play a board game with _______.",
        "translation": "我們來玩一個有骰子的桌 遊。",
        "answer": "dice",
        "id": "dice"
      },
      {
        "word": "mice",
        "pos": "noun",
        "definition": "(很多)老鼠",
        "sentence": "The _______ like cheese.",
        "translation": "老鼠們喜歡起司。",
        "answer": "mice",
        "id": "mice"
      },
      {
        "word": "rice",
        "pos": "noun",
        "definition": "米，飯",
        "sentence": "I like to eat fried _______.",
        "translation": "我喜歡吃炒飯。",
        "answer": "rice",
        "id": "rice"
      },
      {
        "word": "price",
        "pos": "noun",
        "definition": "價格",
        "sentence": "What is the _______ of the toy?",
        "translation": "這個玩具的價格是多少？",
        "answer": "price",
        "id": "price"
      },
      {
        "word": "spice",
        "pos": "noun",
        "definition": "香料",
        "sentence": "The cook put some _______ on the beef.",
        "translation": "廚師在牛肉上加了一些香 料。",
        "answer": "spice",
        "id": "spice"
      },
      {
        "word": "twice",
        "pos": "adverb",
        "definition": "兩次",
        "sentence": "We go to the park _______ a week.",
        "translation": "我們每週去兩次公園。",
        "answer": "twice",
        "id": "twice"
      },
      {
        "word": "lie",
        "pos": "verb",
        "definition": "說謊",
        "sentence": "Don't _______ to your dad and mom.",
        "translation": "不要對你的父母撒謊。",
        "answer": "lie",
        "id": "lie"
      },
      {
        "word": "die",
        "pos": "verb",
        "definition": "死",
        "sentence": "The flowers will _______ if you don't water them.",
        "translation": "如果你不給花澆水，它們會 死掉。",
        "answer": "die",
        "id": "die"
      },
      {
        "word": "tie",
        "pos": "noun",
        "definition": "領帶",
        "sentence": "He wears a _______ to work every day.",
        "translation": "他每天上班都會戴領帶。",
        "answer": "tie",
        "id": "tie"
      },
      {
        "word": "pie",
        "pos": "noun",
        "definition": "派餅",
        "sentence": "I love apple _______.",
        "translation": "我喜歡吃蘋果派餅。",
        "answer": "pie",
        "id": "pie"
      },
      {
        "word": "dry",
        "pos": "adjective",
        "definition": "乾燥的",
        "sentence": "Hang your wet socks to _______.",
        "translation": "把濕襪子晾乾。",
        "answer": "dry",
        "id": "dry"
      },
      {
        "word": "cry",
        "pos": "verb",
        "definition": "哭",
        "sentence": "The baby is _______ing. She's hungry.",
        "translation": "寶寶正在哭。他很餓",
        "answer": "cry",
        "id": "cry"
      },
      {
        "word": "fly",
        "pos": "verb",
        "definition": "飛",
        "sentence": "Birds can _______ in the sky.",
        "translation": "鳥可以在天空中飛翔。",
        "answer": "fly",
        "id": "fly"
      },
      {
        "word": "sky",
        "pos": "noun",
        "definition": "天空",
        "sentence": "Look at the sunny _______!",
        "translation": "看那晴朗的天空！",
        "answer": "sky",
        "id": "sky"
      },
      {
        "word": "light",
        "pos": "noun/adjective",
        "definition": "光線/燈光",
        "sentence": "There is _______ in the room.",
        "translation": "房間裡有燈光",
        "answer": "light",
        "id": "light"
      },
      {
        "word": "bright",
        "pos": "adjective",
        "definition": "明亮的",
        "sentence": "The stars are _______ in the night sky.",
        "translation": "夜空中的星星很明亮。",
        "answer": "bright",
        "id": "bright"
      },
      {
        "word": "high",
        "pos": "adjective",
        "definition": "高",
        "sentence": "The mountain is very _______.",
        "translation": "這座山很高。",
        "answer": "high",
        "id": "high"
      },
      {
        "word": "flight",
        "pos": "noun",
        "definition": "班機",
        "sentence": "My _______ leaves at 8 AM.",
        "translation": "我的班機在早上 8 點起飛。",
        "answer": "flight",
        "id": "flight"
      },
      {
        "word": "fight",
        "pos": "verb",
        "definition": "打架",
        "sentence": "Don't _______ with your classmates.",
        "translation": "不要和你的同學打架。",
        "answer": "fight",
        "id": "fight"
      },
      {
        "word": "night",
        "pos": "noun",
        "definition": "晚上",
        "sentence": "I sleep at _______. Good ________.",
        "translation": "我晚上睡覺。晚安",
        "answer": "night",
        "id": "night"
      },
      {
        "word": "sight",
        "pos": "noun",
        "definition": "視力",
        "sentence": "He wears glasses. His _______ is not good.",
        "translation": "他戴眼鏡，因為他的視力不 好。",
        "answer": "sight",
        "id": "sight"
      },
      {
        "word": "sigh",
        "pos": "verb",
        "definition": "嘆氣",
        "sentence": "She _______ed. She is tired.",
        "translation": "她嘆了一口氣。他很累",
        "answer": "sigh",
        "id": "sigh"
      },
      {
        "word": "tight",
        "pos": "adjective",
        "definition": "緊的",
        "sentence": "The lid is _______. I can't open it.",
        "translation": "蓋子很緊，我打不開它。",
        "answer": "tight",
        "id": "tight"
      },
      {
        "word": "might modal",
        "pos": "verb",
        "definition": "可能",
        "sentence": "I _______ go to the park tomorrow.",
        "translation": "明天我可能去公園。",
        "answer": "might modal",
        "id": "might-modal"
      },
      {
        "word": "right",
        "pos": "adjective",
        "definition": "正確的",
        "sentence": "The answer is _______. Turn_____.",
        "translation": "答案是正確的。右轉 Hi. interjection 哈囉 _______! How are you today? 哈囉！你今天好嗎？ Bye. Goodbye. interjection 再見 _______! See you tomorrow. 再見！明天見。",
        "answer": "right",
        "id": "right"
      }
    ],
    "group": "Long Vowels"
  },
  {
    "id": "long-vowel-o",
    "title": "Long vowel o",
    "sourceHeading": "長母音 o",
    "items": [
      {
        "word": "so",
        "pos": "conj",
        "definition": "所以",
        "sentence": "It's raining, _______ we will stay home.",
        "translation": "外面在下雨，所以我們會待 在家",
        "answer": "so",
        "id": "so"
      },
      {
        "word": "no",
        "pos": "adj",
        "definition": "不",
        "sentence": "There is _______ milk in the fridge.",
        "translation": "冰箱裡沒有牛奶了。",
        "answer": "no",
        "id": "no"
      },
      {
        "word": "yo-yo",
        "pos": "noun",
        "definition": "溜溜球",
        "sentence": "I am playing with a _______.",
        "translation": "我正在玩溜溜球",
        "answer": "yo",
        "id": "yo-yo"
      },
      {
        "word": "open",
        "pos": "verb",
        "definition": "打開",
        "sentence": "It's so hot. Please ________ the window.",
        "translation": "好熱喔 請開窗",
        "answer": "open",
        "id": "open"
      },
      {
        "word": "bone",
        "pos": "noun",
        "definition": "骨頭",
        "sentence": "The dog dug a hole for its _______ .",
        "translation": "狗在院子裡挖洞給它的骨 頭。",
        "answer": "bone",
        "id": "bone"
      },
      {
        "word": "coke",
        "pos": "noun",
        "definition": "可樂",
        "sentence": "He is drinking a can of _______ for lunch.",
        "translation": "他正在喝可樂當午餐。",
        "answer": "coke",
        "id": "coke"
      },
      {
        "word": "hole",
        "pos": "noun",
        "definition": "洞",
        "sentence": "There is a _______ in the wall.",
        "translation": "牆上有個洞。",
        "answer": "hole",
        "id": "hole"
      },
      {
        "word": "home",
        "pos": "noun",
        "definition": "家",
        "sentence": "The school is over. I am going _______.",
        "translation": "放學了。我要回家了。",
        "answer": "home",
        "id": "home"
      },
      {
        "word": "nose",
        "pos": "noun",
        "definition": "鼻子",
        "sentence": "The clown has a big red _______.",
        "translation": "小丑有個大紅鼻子。",
        "answer": "nose",
        "id": "nose"
      },
      {
        "word": "rose",
        "pos": "noun",
        "definition": "玫瑰",
        "sentence": "She gave her mom a _______ for her birthday.",
        "translation": "她給她媽媽一朵玫瑰慶祝生 日。",
        "answer": "rose",
        "id": "rose"
      },
      {
        "word": "vote",
        "pos": "noun/verb",
        "definition": "投票/選舉",
        "sentence": "We are too young. We can't _______ .",
        "translation": "我們太年輕 ，不能投票",
        "answer": "vote",
        "id": "vote"
      },
      {
        "word": "note",
        "pos": "noun",
        "definition": "筆記",
        "sentence": "I left a _______ on the kitchen table.",
        "translation": "我在廚房的桌子上留了一張 筆記。",
        "answer": "note",
        "id": "note"
      },
      {
        "word": "sore",
        "pos": "adjective",
        "definition": "疼痛的",
        "sentence": "She has a _______ throat.",
        "translation": "她喉嚨痛。",
        "answer": "sore",
        "id": "sore"
      },
      {
        "word": "hope",
        "pos": "noun/verb",
        "definition": "希望",
        "sentence": "I _______ to see you soon.",
        "translation": "我希望很快能見到你。 those 那些 _______ shoes are my favorite. 那些鞋子是我最喜歡的。 close nadj/verb 關閉，親 近的 It's raining. Please _______ the window. 現在正在下雨，請關窗戶",
        "answer": "hope",
        "id": "hope"
      },
      {
        "word": "wrote",
        "pos": "v.",
        "definition": "過去式 寫",
        "sentence": "He _________ an email to me.",
        "translation": "他寫了一封 email 給我",
        "answer": "wrote",
        "id": "wrote"
      },
      {
        "word": "toe",
        "pos": "noun",
        "definition": "腳趾頭",
        "sentence": "I stubbed my _______ on the chair.",
        "translation": "我的腳趾頭被椅子碰傷了。",
        "answer": "toe",
        "id": "toe"
      },
      {
        "word": "boat",
        "pos": "noun",
        "definition": "船",
        "sentence": "There is a _______ on the lake.",
        "translation": "湖上有一艘船。",
        "answer": "boat",
        "id": "boat"
      },
      {
        "word": "coat",
        "pos": "noun",
        "definition": "大衣",
        "sentence": "She wears a warm _______ in winter.",
        "translation": "冬天她穿著一件保暖的大 衣。",
        "answer": "coat",
        "id": "coat"
      },
      {
        "word": "loaf",
        "pos": "noun",
        "definition": "一條麵包",
        "sentence": "They are eating a _______ of bread",
        "translation": "他們正在吃一條麵包。",
        "answer": "loaf",
        "id": "loaf"
      },
      {
        "word": "goat",
        "pos": "noun",
        "definition": "山羊",
        "sentence": "The _______ is eating grass.",
        "translation": "山羊在吃草。",
        "answer": "goat",
        "id": "goat"
      },
      {
        "word": "road",
        "pos": "noun",
        "definition": "道路",
        "sentence": "There is a long _______ to the city.",
        "translation": "城市有一條長長的道路。",
        "answer": "road",
        "id": "road"
      },
      {
        "word": "soap",
        "pos": "noun",
        "definition": "肥皂",
        "sentence": "I use _______ to wash my hands.",
        "translation": "我用肥皂洗手。",
        "answer": "soap",
        "id": "soap"
      },
      {
        "word": "bow",
        "pos": "noun",
        "definition": "蝴蝶結",
        "sentence": "She tied a pretty _______ in her hair.",
        "translation": "她在頭髮上綁了一個漂亮的 蝴蝶結。",
        "answer": "bow",
        "id": "bow"
      },
      {
        "word": "row",
        "pos": "noun/verb",
        "definition": "划船/排",
        "sentence": "They went for a _______ on the lake.",
        "translation": "他們在湖上划船。",
        "answer": "row",
        "id": "row"
      },
      {
        "word": "low",
        "pos": "adjective",
        "definition": "低的",
        "sentence": "The table is too _______.",
        "translation": "這張桌子太低了。",
        "answer": "low",
        "id": "low"
      },
      {
        "word": "snow",
        "pos": "noun/verb",
        "definition": "雪/下雪",
        "sentence": "There is a lot of ________ outside.",
        "translation": "外面下很大的雪。",
        "answer": "snow",
        "id": "snow"
      },
      {
        "word": "snow",
        "pos": "noun/verb",
        "definition": "雪/下雪",
        "sentence": "How's the weather? It's _______.",
        "translation": "天氣如何 ?下雪",
        "answer": "snow",
        "id": "snow-2"
      },
      {
        "word": "slow",
        "pos": "adj",
        "definition": "慢的/慢地",
        "sentence": "The turtle is very _______.",
        "translation": "這隻烏龜非常慢。",
        "answer": "slow",
        "id": "slow"
      },
      {
        "word": "show",
        "pos": "noun/verb",
        "definition": "演出/展示",
        "sentence": "The school _______ is tonight.",
        "translation": "學校的演出是今晚。",
        "answer": "show",
        "id": "show"
      },
      {
        "word": "yellow",
        "pos": "adjective",
        "definition": "黃色",
        "sentence": "I like the _______ sweater.",
        "translation": "我喜歡這件黃色的毛衣。",
        "answer": "yellow",
        "id": "yellow"
      },
      {
        "word": "window",
        "pos": "noun",
        "definition": "窗戶",
        "sentence": "It's windy. Please close the ___________.",
        "translation": "風很大 請關窗戶",
        "answer": "window",
        "id": "window"
      }
    ],
    "group": "Long Vowels"
  },
  {
    "id": "long-vowel-u",
    "title": "Long vowel u",
    "sourceHeading": "長母音 u",
    "items": [
      {
        "word": "tune",
        "pos": "noun",
        "definition": "音調",
        "sentence": "She hums a _______ while cooking.",
        "translation": "她一邊做飯一邊哼著曲子。",
        "answer": "tune",
        "id": "tune"
      },
      {
        "word": "rule",
        "pos": "noun/verb",
        "definition": "規則",
        "sentence": "Follow the _______ in the classroom.",
        "translation": "在教室裡遵守規則。",
        "answer": "rule",
        "id": "rule"
      },
      {
        "word": "tube",
        "pos": "noun",
        "definition": "管子",
        "sentence": "We use a _______ to water the plants.",
        "translation": "我們用管子澆水。",
        "answer": "tube",
        "id": "tube"
      },
      {
        "word": "cute",
        "pos": "adjective",
        "definition": "可愛的",
        "sentence": "The baby has a _______ smile.",
        "translation": "那個寶寶有個可愛的微笑。",
        "answer": "cute",
        "id": "cute"
      },
      {
        "word": "dune",
        "pos": "noun",
        "definition": "沙丘",
        "sentence": "We climbed a _______ at the beach.",
        "translation": "我們在海灘上爬沙丘。",
        "answer": "dune",
        "id": "dune"
      },
      {
        "word": "mule",
        "pos": "noun",
        "definition": "騾子",
        "sentence": "The farmer uses a _______ to carry goods.",
        "translation": "農夫用騾子運輸貨物。",
        "answer": "mule",
        "id": "mule"
      },
      {
        "word": "blue",
        "pos": "adjective",
        "definition": "藍色",
        "sentence": "The sky is _______.",
        "translation": "天空是藍色的。",
        "answer": "blue",
        "id": "blue"
      },
      {
        "word": "glue",
        "pos": "noun",
        "definition": "膠水",
        "sentence": "I need some _______ to fix the broken toy.",
        "translation": "我需要些膠水來修理壞掉的 玩具。",
        "answer": "glue",
        "id": "glue"
      },
      {
        "word": "true (adj)",
        "pos": "adjective",
        "definition": "真的",
        "sentence": "It's _______! I'm not kidding.",
        "translation": "這是真的！我沒在開玩笑",
        "answer": "true (adj)",
        "id": "true-adj"
      },
      {
        "word": "Tuesday",
        "pos": "noun",
        "definition": "週二",
        "sentence": "I have a meeting on _______.",
        "translation": "我在週二有個會議。",
        "answer": "Tuesday",
        "id": "tuesday"
      },
      {
        "word": "juice",
        "pos": "noun",
        "definition": "果汁",
        "sentence": "I like to drink orange _______.",
        "translation": "我喜歡喝橙汁。",
        "answer": "juice",
        "id": "juice"
      },
      {
        "word": "fruit",
        "pos": "noun",
        "definition": "水果",
        "sentence": "There are many _______ on the table.",
        "translation": "桌子上有很多水果。",
        "answer": "fruit",
        "id": "fruit"
      },
      {
        "word": "bruise",
        "pos": "noun/verb",
        "definition": "淤青",
        "sentence": "He has a _______ on his arm.",
        "translation": "他的手臂上有個淤青。",
        "answer": "bruise",
        "id": "bruise"
      },
      {
        "word": "new",
        "pos": "adjective",
        "definition": "新的",
        "sentence": "I got a _______ book from the library.",
        "translation": "我從圖書館借了一本新書。",
        "answer": "new",
        "id": "new"
      },
      {
        "word": "few",
        "pos": "adjective",
        "definition": "很少的",
        "sentence": "There are only a _______ apples left.",
        "translation": "剩下只有幾個蘋果。",
        "answer": "few",
        "id": "few"
      },
      {
        "word": "stew",
        "pos": "noun",
        "definition": "燉菜",
        "sentence": "Mom made a delicious _______ for dinner.",
        "translation": "媽媽做了一道美味的燉菜晚 餐。",
        "answer": "stew",
        "id": "stew"
      },
      {
        "word": "bloom",
        "pos": "noun/verb",
        "definition": "花開",
        "sentence": "The flowers _______ in the spring.",
        "translation": "花在春天開放。",
        "answer": "bloom",
        "id": "bloom"
      },
      {
        "word": "room",
        "pos": "noun",
        "definition": "房間",
        "sentence": "I need to clean my _______.",
        "translation": "我需要打掃我的房間。",
        "answer": "room",
        "id": "room"
      },
      {
        "word": "moon",
        "pos": "noun",
        "definition": "月亮",
        "sentence": "I can see the _______ in the night sky.",
        "translation": "我能看到夜空中的月亮。",
        "answer": "moon",
        "id": "moon"
      },
      {
        "word": "food",
        "pos": "noun",
        "definition": "食物",
        "sentence": "We have plenty of _______ for the party.",
        "translation": "我們有很多食物供應派對。",
        "answer": "food",
        "id": "food"
      },
      {
        "word": "bedroom",
        "pos": "noun",
        "definition": "臥房",
        "sentence": "My _______ is upstairs.",
        "translation": "我的臥室在樓上。 bathroo m noun 浴室 The _______ is next to the bedroom. 浴室在臥室旁邊。 living room noun 客廳 We watch TV in the _______. 我們在客廳看電視。 dining room noun 飯廳 We have dinner in the _______. 我們在飯廳吃飯。",
        "answer": "bedroom",
        "id": "bedroom"
      }
    ],
    "group": "Long Vowels"
  },
  {
    "id": "ar-ar",
    "title": "ar /ar/",
    "sourceHeading": "ar:ㄚㄦ",
    "items": [
      {
        "word": "1. art",
        "pos": "n",
        "definition": "藝術",
        "sentence": "He loves _____.",
        "translation": "他喜歡藝術。",
        "answer": "1. art",
        "id": "1-art"
      },
      {
        "word": "2. arm",
        "pos": "n",
        "definition": "手臂",
        "sentence": "She has long _____s.",
        "translation": "她有長長的手臂。",
        "answer": "2. arm",
        "id": "2-arm"
      },
      {
        "word": "3. bar",
        "pos": "n",
        "definition": "酒吧",
        "sentence": "They met at the _____.",
        "translation": "他們在酒吧見面。",
        "answer": "3. bar",
        "id": "3-bar"
      },
      {
        "word": "4. car",
        "pos": "n",
        "definition": "汽車",
        "sentence": "I got a new _____ yesterday.",
        "translation": "我昨天得到了一輛新 汽車。",
        "answer": "4. car",
        "id": "4-car"
      },
      {
        "word": "5. card",
        "pos": "n",
        "definition": "卡片",
        "sentence": "She gave me a birthday _____.",
        "translation": "她給了我一張生日 卡。",
        "answer": "5. card",
        "id": "5-card"
      },
      {
        "word": "6. cart",
        "pos": "n",
        "definition": "手推車",
        "sentence": "He uses a _____ at the supermarket.",
        "translation": "他在超市使用手推 車。",
        "answer": "6. cart",
        "id": "6-cart"
      },
      {
        "word": "7. far",
        "pos": "adj",
        "definition": "/adv. 遠的",
        "sentence": "The station is _____ from here.",
        "translation": "車站離這裡很遠。",
        "answer": "7. far",
        "id": "7-far"
      },
      {
        "word": "8. farm",
        "pos": "n",
        "definition": "農場",
        "sentence": "They have many animals on the _____.",
        "translation": "他們的農場有很多動 物。",
        "answer": "8. farm",
        "id": "8-farm"
      },
      {
        "word": "9. mark",
        "pos": "n",
        "definition": "標記",
        "sentence": "There is a _____ on the wall.",
        "translation": "牆上有個標記。",
        "answer": "9. mark",
        "id": "9-mark"
      },
      {
        "word": "10. park",
        "pos": "n",
        "definition": "公園",
        "sentence": "Let's meet at the _____ tomorrow.",
        "translation": "我們明天在公園見面 吧。",
        "answer": "10. park",
        "id": "10-park"
      },
      {
        "word": "11. dark",
        "pos": "adj",
        "definition": "黑暗的",
        "sentence": "The room is too _____.",
        "translation": "這個房間太黑暗了。",
        "answer": "11. dark",
        "id": "11-dark"
      },
      {
        "word": "12. shark",
        "pos": "n",
        "definition": "鯊魚",
        "sentence": "I saw a _____ while diving.",
        "translation": "我潛水時看到了一條 鯊魚。",
        "answer": "12. shark",
        "id": "12-shark"
      },
      {
        "word": "13. sharp",
        "pos": "adj",
        "definition": "尖銳的",
        "sentence": "Be careful, the knife is very _____.",
        "translation": "小心，這把刀非常鋒 利。",
        "answer": "13. sharp",
        "id": "13-sharp"
      },
      {
        "word": "14. march",
        "pos": "v",
        "definition": "行軍",
        "sentence": "The soldiers _____ in a parade.",
        "translation": "士兵在遊行中行軍。",
        "answer": "14. march",
        "id": "14-march"
      },
      {
        "word": "15. star",
        "pos": "n",
        "definition": "星星",
        "sentence": "I wish upon a shooting _____.",
        "translation": "我對流星許願。",
        "answer": "15. star",
        "id": "15-star"
      },
      {
        "word": "16. start",
        "pos": "v",
        "definition": "開始",
        "sentence": "They _____ the game at 3 pm.",
        "translation": "他們下午 3 點開始遊 戲。",
        "answer": "16. start",
        "id": "16-start"
      },
      {
        "word": "18. barn",
        "pos": "n",
        "definition": "穀倉",
        "sentence": "The hay is in the _____.",
        "translation": "乾草存放在穀倉裡。",
        "answer": "18. barn",
        "id": "18-barn"
      },
      {
        "word": "19. scarf",
        "pos": "n",
        "definition": "圍巾",
        "sentence": "She wears a red ________ in winter.",
        "translation": "她在冬天戴紅色圍 巾。",
        "answer": "19. scarf",
        "id": "19-scarf"
      },
      {
        "word": "20. smart",
        "pos": "adj",
        "definition": "聰明的",
        "sentence": "He is a __________ student.",
        "translation": "他是個聰明的學生。",
        "answer": "20. smart",
        "id": "20-smart"
      },
      {
        "word": "21. party",
        "pos": "n",
        "definition": "派對",
        "sentence": "They are at a birthday _____.",
        "translation": "他們正參加生日派對",
        "answer": "21. party",
        "id": "21-party"
      },
      {
        "word": "22.market",
        "pos": "n",
        "definition": "市場",
        "sentence": "Mom shops at the night _____________.",
        "translation": "媽咪每天在夜市購物",
        "answer": "22.market",
        "id": "22-market"
      },
      {
        "word": "23.supermarket",
        "pos": "n",
        "definition": "超市",
        "sentence": "Mom is shopping at the ___________.",
        "translation": "媽咪正在超市購物",
        "answer": "23.supermarket",
        "id": "23-supermarket"
      }
    ],
    "group": "R-Controlled Vowels"
  },
  {
    "id": "er-er",
    "title": "er /er/",
    "sourceHeading": "er:ㄦ",
    "items": [
      {
        "word": "her",
        "pos": "pron",
        "definition": "她的",
        "sentence": "What color is ______ dress? It's red.",
        "translation": "她的洋裝是什麼顏色? 是紅色的。",
        "answer": "her",
        "id": "her"
      },
      {
        "word": "teacher",
        "pos": "n",
        "definition": "老師",
        "sentence": "Who is she? She is Ms. Chen. She is my _____.",
        "translation": "她是誰? 她是陳小姐。 她是我的老師。",
        "answer": "teacher",
        "id": "teacher"
      },
      {
        "word": "dancer",
        "pos": "n",
        "definition": "舞者",
        "sentence": "She is a good _____.",
        "translation": "她是一位很棒的舞 者。",
        "answer": "dancer",
        "id": "dancer"
      },
      {
        "word": "singer",
        "pos": "n",
        "definition": "歌手",
        "sentence": "He is a famous _____.",
        "translation": "他是一名著名的歌 手。",
        "answer": "singer",
        "id": "singer"
      },
      {
        "word": "writer",
        "pos": "n",
        "definition": "作家",
        "sentence": "The _________ is writing a book.",
        "translation": "這位作家正在寫書",
        "answer": "writer",
        "id": "writer"
      },
      {
        "word": "player",
        "pos": "n",
        "definition": "選手",
        "sentence": "Messi is a football/soccer _____.",
        "translation": "眉溪是一位足球選 手。",
        "answer": "player",
        "id": "player"
      },
      {
        "word": "hunter",
        "pos": "n",
        "definition": "獵人",
        "sentence": "The _________is running after a fox.",
        "translation": "這個獵人正在追著一 隻狐狸跑",
        "answer": "hunter",
        "id": "hunter"
      },
      {
        "word": "waiter",
        "pos": "n",
        "definition": "服務生",
        "sentence": "The _____ gives me the menu.",
        "translation": "這位服務生給我菜單",
        "answer": "waiter",
        "id": "waiter"
      },
      {
        "word": "Youtuber",
        "pos": "n",
        "definition": "Youtuber",
        "sentence": "He is a famous _____.",
        "translation": "他是一名著名的 Youtuber。",
        "answer": "Youtuber",
        "id": "youtuber"
      },
      {
        "word": "winner",
        "pos": "n",
        "definition": "贏家",
        "sentence": "She was the _____ of the game.",
        "translation": "她是比賽的贏家。",
        "answer": "winner",
        "id": "winner"
      },
      {
        "word": "loser",
        "pos": "n",
        "definition": "輸家",
        "sentence": "It's okay to be the _____ sometimes.",
        "translation": "有時候成為輸家也沒 關係。",
        "answer": "loser",
        "id": "loser"
      },
      {
        "word": "lover",
        "pos": "n",
        "definition": "愛人",
        "sentence": "Romeo and Juliet are _____.",
        "translation": "羅密歐朱麗葉是戀人",
        "answer": "lover",
        "id": "lover"
      },
      {
        "word": "father",
        "pos": "n",
        "definition": "爸爸",
        "sentence": "My _____ is a doctor.",
        "translation": "我爸爸是醫生。",
        "answer": "father",
        "id": "father"
      },
      {
        "word": "mother",
        "pos": "n",
        "definition": "媽媽",
        "sentence": "Her _____ is a cook.",
        "translation": "她媽媽是大廚。",
        "answer": "mother",
        "id": "mother"
      },
      {
        "word": "brother",
        "pos": "n",
        "definition": "兄弟",
        "sentence": "My _____ is older than me.",
        "translation": "我兄弟比我大。",
        "answer": "brother",
        "id": "brother"
      },
      {
        "word": "sister",
        "pos": "n",
        "definition": "姐妹",
        "sentence": "She has a younger _____.",
        "translation": "她有一位妹妹。",
        "answer": "sister",
        "id": "sister"
      },
      {
        "word": "grandmother",
        "pos": "n",
        "definition": "祖母外婆",
        "sentence": "My _____ tells the best stories.",
        "translation": "我祖母講最好的故事",
        "answer": "grandmother",
        "id": "grandmother"
      },
      {
        "word": "grandfather",
        "pos": "n",
        "definition": "祖父",
        "sentence": "His _____ is a soldier.",
        "translation": "他的祖父是士兵。",
        "answer": "grandfather",
        "id": "grandfather"
      },
      {
        "word": "soccer",
        "pos": "n",
        "definition": "足球",
        "sentence": "He plays _____ every weekend.",
        "translation": "他每週末都踢足球。",
        "answer": "soccer",
        "id": "soccer"
      },
      {
        "word": "hamburger",
        "pos": "n",
        "definition": "漢堡",
        "sentence": "I want a cheese _____.",
        "translation": "我想要一個起司漢堡",
        "answer": "hamburger",
        "id": "hamburger"
      },
      {
        "word": "river",
        "pos": "n",
        "definition": "河",
        "sentence": "The Nile is a long _____.",
        "translation": "尼羅河是一條長河。",
        "answer": "river",
        "id": "river"
      },
      {
        "word": "computer",
        "pos": "n",
        "definition": "電腦",
        "sentence": "She has a new _________________.",
        "translation": "她有一台新電腦",
        "answer": "computer",
        "id": "computer"
      }
    ],
    "group": "R-Controlled Vowels"
  },
  {
    "id": "ir-er",
    "title": "ir /er/",
    "sourceHeading": "ir:ㄦ",
    "items": [
      {
        "word": "bird",
        "pos": "n",
        "definition": "鳥",
        "sentence": "The _____ is singing on the tree.",
        "translation": "樹上的鳥正在唱歌。",
        "answer": "bird",
        "id": "bird"
      },
      {
        "word": "girl",
        "pos": "n",
        "definition": "女孩",
        "sentence": "The _____ is reading a book.",
        "translation": "那女孩正在讀書。",
        "answer": "girl",
        "id": "girl"
      },
      {
        "word": "dirt",
        "pos": "n",
        "definition": "泥土",
        "sentence": "Clean the _____ off your shoes.",
        "translation": "清除你鞋上的泥土。",
        "answer": "dirt",
        "id": "dirt"
      },
      {
        "word": "chirp",
        "pos": "v",
        "definition": "鳥叫",
        "sentence": "The birds _____ in the morning.",
        "translation": "鳥兒在清晨啁啾叫。",
        "answer": "chirp",
        "id": "chirp"
      },
      {
        "word": "first",
        "pos": "adj",
        "definition": "/adv. 第一個",
        "sentence": "She came in _____ place.",
        "translation": "她名列第一。",
        "answer": "first",
        "id": "first"
      },
      {
        "word": "third",
        "pos": "adj",
        "definition": "/adv. 第三個",
        "sentence": "He came in _____ place.",
        "translation": "他名列第三。",
        "answer": "third",
        "id": "third"
      },
      {
        "word": "thirty",
        "pos": "num",
        "definition": "三十",
        "sentence": "She is _____ years old.",
        "translation": "她三十歲。",
        "answer": "thirty",
        "id": "thirty"
      },
      {
        "word": "thirsty",
        "pos": "adj",
        "definition": "口渴的",
        "sentence": "I am _____, can I have some water?",
        "translation": "我口渴，可以給我一 些水嗎？",
        "answer": "thirsty",
        "id": "thirsty"
      },
      {
        "word": "shirt",
        "pos": "n",
        "definition": "上衣",
        "sentence": "He is wearing a blue _____.",
        "translation": "他穿著一件藍色上 衣。",
        "answer": "shirt",
        "id": "shirt"
      },
      {
        "word": "skirt",
        "pos": "n",
        "definition": "裙子",
        "sentence": "She looks nice in that _____.",
        "translation": "她穿那裙子很好看。",
        "answer": "skirt",
        "id": "skirt"
      },
      {
        "word": "birthday",
        "pos": "n",
        "definition": "生日",
        "sentence": "Today is her _____.",
        "translation": "今天是她的生日。 ur:ㄦ",
        "answer": "birthday",
        "id": "birthday"
      },
      {
        "word": "turn",
        "pos": "v",
        "definition": "轉彎",
        "sentence": "Please _____ right at the next street.",
        "translation": "請在下一條街右轉。",
        "answer": "turn",
        "id": "turn"
      },
      {
        "word": "burn",
        "pos": "v",
        "definition": "燃燒",
        "sentence": "Be careful! You might _____ yourself.",
        "translation": "小心你可能燒傷自己",
        "answer": "burn",
        "id": "burn"
      },
      {
        "word": "nurse",
        "pos": "n",
        "definition": "護士",
        "sentence": "The _____ took care of the patient.",
        "translation": "護士照顧病人。",
        "answer": "nurse",
        "id": "nurse"
      },
      {
        "word": "burp",
        "pos": "v",
        "definition": "打嗝",
        "sentence": "After drinking soda, he let out a _____.",
        "translation": "他喝完汽水後打嗝。",
        "answer": "burp",
        "id": "burp"
      },
      {
        "word": "slurp",
        "pos": "v",
        "definition": "吸水",
        "sentence": "It's impolite to _____ your soup.",
        "translation": "吸湯是不禮貌的。",
        "answer": "slurp",
        "id": "slurp"
      },
      {
        "word": "hurt",
        "pos": "v",
        "definition": "受傷",
        "sentence": "Be careful not to _____ your hand.",
        "translation": "小心不要傷到你的手",
        "answer": "hurt",
        "id": "hurt"
      },
      {
        "word": "fur",
        "pos": "n",
        "definition": "動物毛",
        "sentence": "Her coat is made of real _____.",
        "translation": "她的外套是真毛做的",
        "answer": "fur",
        "id": "fur"
      },
      {
        "word": "church",
        "pos": "n",
        "definition": "教堂",
        "sentence": "They go to _____ every Sunday.",
        "translation": "他們每週日都去教堂",
        "answer": "church",
        "id": "church"
      },
      {
        "word": "surf the Net",
        "pos": "v",
        "definition": "上網",
        "sentence": "He likes to _____ every evening.",
        "translation": "他喜歡每晚上網。",
        "answer": "surf the Net",
        "id": "surf-the-net"
      },
      {
        "word": "burger",
        "pos": "n",
        "definition": "漢堡",
        "sentence": "I ordered a cheese _____.",
        "translation": "我點了個起司漢堡。",
        "answer": "burger",
        "id": "burger"
      },
      {
        "word": "hamburger",
        "pos": "n",
        "definition": "漢堡",
        "sentence": "Would you like a _____ for dinner?",
        "translation": "你晚餐想吃漢堡嗎？",
        "answer": "hamburger",
        "id": "hamburger"
      },
      {
        "word": "Thursday",
        "pos": "n",
        "definition": "週四",
        "sentence": "I have a meeting on _____.",
        "translation": "我週四有個會議。",
        "answer": "Thursday",
        "id": "thursday"
      },
      {
        "word": "Saturday",
        "pos": "n",
        "definition": "週六",
        "sentence": "Let's go to the movies on _____.",
        "translation": "我們週六去看電影吧",
        "answer": "Saturday",
        "id": "saturday"
      },
      {
        "word": "purple",
        "pos": "adj",
        "definition": "紫色的",
        "sentence": "Her dress is _____.",
        "translation": "她的裙子是紫色的",
        "answer": "purple",
        "id": "purple"
      }
    ],
    "group": "R-Controlled Vowels"
  },
  {
    "id": "or-or",
    "title": "or /or/",
    "sourceHeading": "or:ㄛㄦ",
    "items": [
      {
        "word": "for",
        "pos": "prep",
        "definition": "為了",
        "sentence": "This gift is _____ you.",
        "translation": "這禮物是為你的。",
        "answer": "for",
        "id": "for"
      },
      {
        "word": "form",
        "pos": "n",
        "definition": "表格",
        "sentence": "Please fill out this _____.",
        "translation": "請填寫這張表格。",
        "answer": "form",
        "id": "form"
      },
      {
        "word": "fork",
        "pos": "n",
        "definition": "叉子",
        "sentence": "She eats with a _____.",
        "translation": "她用叉子吃飯。",
        "answer": "fork",
        "id": "fork"
      },
      {
        "word": "forty",
        "pos": "num",
        "definition": "四十",
        "sentence": "My mother is _____ years old.",
        "translation": "我媽媽四十歲。",
        "answer": "forty",
        "id": "forty"
      },
      {
        "word": "corn",
        "pos": "n",
        "definition": "玉米",
        "sentence": "I have _____ soup for dinner.",
        "translation": "我喝玉米濃湯當晚餐",
        "answer": "corn",
        "id": "corn"
      },
      {
        "word": "horse",
        "pos": "n",
        "definition": "馬",
        "sentence": "The _____ is running fast.",
        "translation": "馬跑得很快。",
        "answer": "horse",
        "id": "horse"
      },
      {
        "word": "storm",
        "pos": "n",
        "definition": "暴風雨",
        "sentence": "The _____ is coming. It's rainy and windy.",
        "translation": "暴風雨即將到來。下 雨風又大",
        "answer": "storm",
        "id": "storm"
      },
      {
        "word": "store",
        "pos": "n",
        "definition": "商店",
        "sentence": "I got this at the _____.",
        "translation": "我在商店買了這個。",
        "answer": "store",
        "id": "store"
      },
      {
        "word": "story",
        "pos": "n",
        "definition": "故事",
        "sentence": "She told me a funny _____.",
        "translation": "她告訴我一個好笑的 故事。",
        "answer": "story",
        "id": "story"
      },
      {
        "word": "sport",
        "pos": "n",
        "definition": "運動",
        "sentence": "His favorite _____ is soccer.",
        "translation": "他最喜歡的運動是足 球。",
        "answer": "sport",
        "id": "sport"
      },
      {
        "word": "morning",
        "pos": "n",
        "definition": "早上",
        "sentence": "I wake up every _____ at 7am.",
        "translation": "我每天早上七點醒 來。",
        "answer": "morning",
        "id": "morning"
      },
      {
        "word": "forget",
        "pos": "v",
        "definition": "忘記",
        "sentence": "Don't _____ to do homework.",
        "translation": "不要忘了做作業。",
        "answer": "forget",
        "id": "forget"
      },
      {
        "word": "report",
        "pos": "n",
        "definition": "報告",
        "sentence": "Please hand in the _____ tomorrow.",
        "translation": "請明天交報告。",
        "answer": "report",
        "id": "report"
      },
      {
        "word": "shore",
        "pos": "n",
        "definition": "海岸",
        "sentence": "We are walking along the _____.",
        "translation": "我們正沿著海岸散步",
        "answer": "shore",
        "id": "shore"
      },
      {
        "word": "score",
        "pos": "n",
        "definition": "得分",
        "sentence": "What is the final _____?",
        "translation": "最後的得分是多少？",
        "answer": "score",
        "id": "score"
      },
      {
        "word": "more",
        "pos": "adv",
        "definition": "更多",
        "sentence": "I need _____ time.",
        "translation": "我需要更多時間。",
        "answer": "more",
        "id": "more"
      },
      {
        "word": "four",
        "pos": "num",
        "definition": "四",
        "sentence": "There are _____ apples on the table.",
        "translation": "桌上有四個蘋果。",
        "answer": "four",
        "id": "four"
      },
      {
        "word": "fourteen",
        "pos": "num",
        "definition": "十四",
        "sentence": "She is _____ years old.",
        "translation": "她十四歲。",
        "answer": "fourteen",
        "id": "fourteen"
      },
      {
        "word": "door",
        "pos": "n",
        "definition": "門",
        "sentence": "Open the _____, please.",
        "translation": "請打開門。",
        "answer": "door",
        "id": "door"
      },
      {
        "word": "floor",
        "pos": "n",
        "definition": "地板",
        "sentence": "The _____ is wet.There is water.",
        "translation": "地板是濕的。有水",
        "answer": "floor",
        "id": "floor"
      },
      {
        "word": "worm ㄦ",
        "pos": "n",
        "definition": "蟲",
        "sentence": "The bird is eating a _____.",
        "translation": "這隻鳥正在吃蟲。",
        "answer": "worm ㄦ",
        "id": "worm"
      },
      {
        "word": "word ㄦ",
        "pos": "n",
        "definition": "單詞",
        "sentence": "Please spell the _____.",
        "translation": "請拼寫這個單詞。",
        "answer": "word ㄦ",
        "id": "word"
      },
      {
        "word": "world ㄦ",
        "pos": "n",
        "definition": "世界",
        "sentence": "We live in a big _____.",
        "translation": "我們生活在大世界裡",
        "answer": "world ㄦ",
        "id": "world"
      },
      {
        "word": "doctor ㄦ",
        "pos": "n",
        "definition": "醫生",
        "sentence": "What is he? He's a __________.",
        "translation": "他是做什麼職業?他是 名醫生",
        "answer": "doctor ㄦ",
        "id": "doctor"
      }
    ],
    "group": "R-Controlled Vowels"
  },
  {
    "id": "au-aw-al",
    "title": "au/aw/al",
    "sourceHeading": "au/aw/al ㄛ",
    "items": [
      {
        "word": "sauce",
        "pos": "n",
        "definition": "醬汁",
        "sentence": "I like the tomato __________.",
        "translation": "我喜歡番茄醬。",
        "answer": "sauce",
        "id": "sauce"
      },
      {
        "word": "pause",
        "pos": "v",
        "definition": "暫停",
        "sentence": "Let's __________ the Youtube video.",
        "translation": "讓我們暫停影片。",
        "answer": "pause",
        "id": "pause"
      },
      {
        "word": "August",
        "pos": "n",
        "definition": "八月",
        "sentence": "How is the weather in ___________? It is hot in __________.",
        "translation": "八月天氣如何?八月天氣很 熱。",
        "answer": "August",
        "id": "august"
      },
      {
        "word": "because",
        "pos": "conj",
        "definition": "因為",
        "sentence": "She is happy __________ it's sunny.",
        "translation": "因為天氣晴朗，她很高 興。",
        "answer": "because",
        "id": "because"
      },
      {
        "word": "sausage",
        "pos": "n",
        "definition": "香腸",
        "sentence": "What do you eat for breakfast? I eat __________ and eggs for breakfast.",
        "translation": "你早餐吃什麼?我早餐吃香 腸和蛋。",
        "answer": "sausage",
        "id": "sausage"
      },
      {
        "word": "saucer",
        "pos": "n",
        "definition": "茶杯墊",
        "sentence": "The cup is on the __________.",
        "translation": "杯子在茶杯墊上。",
        "answer": "saucer",
        "id": "saucer"
      },
      {
        "word": "laundry",
        "pos": "n",
        "definition": "洗衣服",
        "sentence": "They do the __________ on Sundays.",
        "translation": "他們星期天洗衣服。",
        "answer": "laundry",
        "id": "laundry"
      },
      {
        "word": "faucet",
        "pos": "n",
        "definition": "水龍頭",
        "sentence": "In the U.S.A. and Japan, people drink water from the __________.",
        "translation": "在美國和日本，人們直接 從水龍頭喝水。",
        "answer": "faucet",
        "id": "faucet"
      },
      {
        "word": "autumn",
        "pos": "n",
        "definition": "秋天",
        "sentence": "How is the weather in __________? It's cool in ___________.",
        "translation": "秋天天氣如何?秋天很涼爽",
        "answer": "autumn",
        "id": "autumn"
      },
      {
        "word": "jaw",
        "pos": "n",
        "definition": "下顎",
        "sentence": "What's wrong? I hurt my __________.",
        "translation": "你怎麼了? 我傷到了我的下 顎。",
        "answer": "jaw",
        "id": "jaw"
      },
      {
        "word": "paw",
        "pos": "n",
        "definition": "掌",
        "sentence": "A dog has four __________s.",
        "translation": "狗有四隻爪子。",
        "answer": "paw",
        "id": "paw"
      },
      {
        "word": "claw",
        "pos": "n",
        "definition": "爪子",
        "sentence": "His cat has sharp __________s.",
        "translation": "他的貓有銳利的爪子。",
        "answer": "claw",
        "id": "claw"
      },
      {
        "word": "draw",
        "pos": "v",
        "definition": "畫圖",
        "sentence": "What does she like to do? She likes to __________.",
        "translation": "她喜歡做什麼?她喜歡畫 畫。",
        "answer": "draw",
        "id": "draw"
      },
      {
        "word": "straw",
        "pos": "n",
        "definition": "吸管",
        "sentence": "What is he doing? He is drinking juice with a __________.",
        "translation": "他正在用吸管喝果汁。",
        "answer": "straw",
        "id": "straw"
      },
      {
        "word": "law",
        "pos": "n",
        "definition": "法律",
        "sentence": "What does he want to do? He wants to study __________.",
        "translation": "他想要做什麼?他想要讀法 律",
        "answer": "law",
        "id": "law"
      },
      {
        "word": "lawn",
        "pos": "n",
        "definition": "草坪",
        "sentence": "What are you doing? We are playing on the __________.",
        "translation": "你們正在做什麼? 我們正在 草坪上玩。",
        "answer": "lawn",
        "id": "lawn"
      },
      {
        "word": "yawn",
        "pos": "v",
        "definition": "打哈欠",
        "sentence": "I __________ when I'm sleepy.",
        "translation": "我困的時候會打哈欠。",
        "answer": "yawn",
        "id": "yawn"
      },
      {
        "word": "dawn",
        "pos": "n",
        "definition": "清晨",
        "sentence": "The sun comes up at __________.",
        "translation": "太陽在清晨升起。",
        "answer": "dawn",
        "id": "dawn"
      },
      {
        "word": "crawl",
        "pos": "v",
        "definition": "爬行",
        "sentence": "What is the baby doing? The baby is _________ing on the floor.",
        "translation": "嬰兒正在地板上爬行。",
        "answer": "crawl",
        "id": "crawl"
      },
      {
        "word": "ball",
        "pos": "n",
        "definition": "球",
        "sentence": "What is he doing? He is playing with a __________.",
        "translation": "他正在做什麼?他正在用球 玩。",
        "answer": "ball",
        "id": "ball"
      },
      {
        "word": "tall",
        "pos": "adj",
        "definition": "高的",
        "sentence": "That boy is very __________.",
        "translation": "那個男孩非常高。",
        "answer": "tall",
        "id": "tall"
      },
      {
        "word": "small",
        "pos": "adj",
        "definition": "小的",
        "sentence": "Her cat is very __________.",
        "translation": "她的貓很小隻。",
        "answer": "small",
        "id": "small"
      },
      {
        "word": "wall",
        "pos": "n",
        "definition": "牆",
        "sentence": "There is a clock on the __________.",
        "translation": "牆上有一個時鐘。",
        "answer": "wall",
        "id": "wall"
      },
      {
        "word": "talk",
        "pos": "v",
        "definition": "談話",
        "sentence": "What are the girls doing? They are _________ing.",
        "translation": "這些女生們在做什麼?他們 在講話",
        "answer": "talk",
        "id": "talk"
      },
      {
        "word": "walk",
        "pos": "v",
        "definition": "走路",
        "sentence": "What is your grandpa doing? He is __________ing in the park.",
        "translation": "你爺爺在做什麼?他正在公 園裡走路",
        "answer": "walk",
        "id": "walk"
      },
      {
        "word": "stalk",
        "pos": "n",
        "definition": "莖",
        "sentence": "The flower has a long __________.",
        "translation": "花有長莖。",
        "answer": "stalk",
        "id": "stalk"
      },
      {
        "word": "buy-bought",
        "pos": "v",
        "definition": "買",
        "sentence": "I _____________ a T-shirt yesterday.",
        "translation": "我昨天買了一件 T 恤",
        "answer": "buy",
        "id": "buy-bought"
      },
      {
        "word": "bring-brought",
        "pos": "v",
        "definition": "攜帶",
        "sentence": "She _____________ an umbrella because it rained.",
        "translation": "她帶了一把傘，因為下雨",
        "answer": "bring",
        "id": "bring-brought"
      },
      {
        "word": "catch-caught",
        "pos": "v",
        "definition": "抓住",
        "sentence": "The baseball player ___________ the ball.",
        "translation": "這位棒球選手接住這顆球",
        "answer": "catch",
        "id": "catch-caught"
      },
      {
        "word": "teach-taught",
        "pos": "v",
        "definition": "教學",
        "sentence": "My teacher ___________ me about animals last week.",
        "translation": "上週老師教我有關動物的 事",
        "answer": "teach",
        "id": "teach-taught"
      }
    ],
    "group": "aw / al / au"
  },
  {
    "id": "ou-ow",
    "title": "ou/ow",
    "sourceHeading": "ou/ow: ㄠ",
    "items": [
      {
        "word": "house",
        "pos": "n",
        "definition": "房子",
        "sentence": "This is our new ______.",
        "translation": "這是我們的新房子。",
        "answer": "house",
        "id": "house"
      },
      {
        "word": "mouse",
        "pos": "n",
        "definition": "老鼠",
        "sentence": "There is a ______ in the house.",
        "translation": "有一隻老鼠在房子 裡。",
        "answer": "mouse",
        "id": "mouse"
      },
      {
        "word": "found",
        "pos": "v",
        "definition": "找到",
        "sentence": "He ______ his keys.",
        "translation": "他找到了他的鑰匙。",
        "answer": "found",
        "id": "found"
      },
      {
        "word": "sound",
        "pos": "n",
        "definition": "聲音",
        "sentence": "His ______ is very loud.",
        "translation": "他的聲音很大。",
        "answer": "sound",
        "id": "sound"
      },
      {
        "word": "ground",
        "pos": "n",
        "definition": "地面/底",
        "sentence": "What is she doing? She is sitting on the ______.",
        "translation": "她正坐在地面上。",
        "answer": "ground",
        "id": "ground"
      },
      {
        "word": "our",
        "pos": "pron",
        "definition": "我們",
        "sentence": "That is ______ house.",
        "translation": "那是我們的房子。",
        "answer": "our",
        "id": "our"
      },
      {
        "word": "hour",
        "pos": "n",
        "definition": "小時",
        "sentence": "It takes an ______to go to Taichung.",
        "translation": "要花一小時到台中。",
        "answer": "hour",
        "id": "hour"
      },
      {
        "word": "flour",
        "pos": "n",
        "definition": "麵粉",
        "sentence": "We need some ______ for the cake.",
        "translation": "我們需要一些麵粉來 做蛋糕。",
        "answer": "flour",
        "id": "flour"
      },
      {
        "word": "loud",
        "pos": "adj",
        "definition": "大聲",
        "sentence": "The music is too ______.",
        "translation": "音樂太大聲了。",
        "answer": "loud",
        "id": "loud"
      },
      {
        "word": "proud",
        "pos": "adj",
        "definition": "驕傲的",
        "sentence": "My mom and dad are ______ of me.",
        "translation": "我爸媽以我為榮。",
        "answer": "proud",
        "id": "proud"
      },
      {
        "word": "shout",
        "pos": "v",
        "definition": "大叫",
        "sentence": "He is ______ing for help.",
        "translation": "他正在大叫求助。",
        "answer": "shout",
        "id": "shout"
      },
      {
        "word": "brown",
        "pos": "adj",
        "definition": "咖啡色",
        "sentence": "The cup of coffee is ______.",
        "translation": "這杯咖啡是咖啡色 的。",
        "answer": "brown",
        "id": "brown"
      },
      {
        "word": "crown",
        "pos": "n",
        "definition": "皇冠",
        "sentence": "The queen wears a ______.",
        "translation": "女王戴著一頂皇冠。",
        "answer": "crown",
        "id": "crown"
      },
      {
        "word": "clown",
        "pos": "n",
        "definition": "小丑",
        "sentence": "The ______ is funny.",
        "translation": "這個小丑很有趣。",
        "answer": "clown",
        "id": "clown"
      },
      {
        "word": "frown",
        "pos": "v",
        "definition": "皺眉",
        "sentence": "The girl is ________ing. She is angry.",
        "translation": "這個女生在皺眉頭。 她很生氣",
        "answer": "frown",
        "id": "frown"
      },
      {
        "word": "down",
        "pos": "adv",
        "definition": "往下",
        "sentence": "Please put ______ your pencil.",
        "translation": "請放下你的鉛筆",
        "answer": "down",
        "id": "down"
      },
      {
        "word": "gown",
        "pos": "n",
        "definition": "女禮服",
        "sentence": "She has a beautiful ______.",
        "translation": "她有一件美麗的女禮 服。",
        "answer": "gown",
        "id": "gown"
      },
      {
        "word": "town",
        "pos": "n",
        "definition": "小鎮",
        "sentence": "We live in a small ______.",
        "translation": "我們住在小鎮上。",
        "answer": "town",
        "id": "town"
      },
      {
        "word": "mouth",
        "pos": "n",
        "definition": "嘴",
        "sentence": "Open your ______ wide.",
        "translation": "張大你的嘴。",
        "answer": "mouth",
        "id": "mouth"
      },
      {
        "word": "south",
        "pos": "n",
        "definition": "南邊/方",
        "sentence": "Tainan is to the _______ of Taipei.",
        "translation": "台南在台北的南邊",
        "answer": "south",
        "id": "south"
      },
      {
        "word": "count",
        "pos": "v",
        "definition": "數數",
        "sentence": "Let's ______ the stars in the sky. How many stars are there?",
        "translation": "讓我們數數天上星 星。天上有幾顆星? ouch exclam. 好痛! ______! I hurt my legs! 唉歐！我傷到腿！",
        "answer": "count",
        "id": "count"
      },
      {
        "word": "tower",
        "pos": "n",
        "definition": "塔/高樓",
        "sentence": "The Eiffel ______ is very tall.",
        "translation": "艾菲爾鐵塔很高。",
        "answer": "tower",
        "id": "tower"
      },
      {
        "word": "flower",
        "pos": "n",
        "definition": "花",
        "sentence": "There is a beautiful _______.",
        "translation": "有一朵漂亮的花",
        "answer": "flower",
        "id": "flower"
      },
      {
        "word": "shower",
        "pos": "n",
        "definition": "淋浴",
        "sentence": "I want to take a ______ in the bathroom.",
        "translation": "我想要去浴室洗個淋 浴。",
        "answer": "shower",
        "id": "shower"
      },
      {
        "word": "mountain",
        "pos": "n",
        "definition": "山",
        "sentence": "We are climbing the ______.",
        "translation": "我們正在爬山。",
        "answer": "mountain",
        "id": "mountain"
      },
      {
        "word": "thousand",
        "pos": "n",
        "definition": "千",
        "sentence": "He has a ______ NT dollars.",
        "translation": "他有一千元台幣。",
        "answer": "thousand",
        "id": "thousand"
      },
      {
        "word": "couch",
        "pos": "n",
        "definition": "長沙發",
        "sentence": "He is sitting on the ______ in the living room.",
        "translation": "他正坐在客廳的長沙 發上。",
        "answer": "couch",
        "id": "couch"
      },
      {
        "word": "cow",
        "pos": "n",
        "definition": "母牛",
        "sentence": "The ______ is eating grass.",
        "translation": "這隻母牛正在吃草。",
        "answer": "cow",
        "id": "cow"
      },
      {
        "word": "bow",
        "pos": "v./n",
        "definition": "鞠躬/弓",
        "sentence": "/",
        "translation": "船頭 They took a ______. 他們鞠了一躬。 how adv. 如何 ______ do you do this? 你是如何做這個的？",
        "answer": "bow",
        "id": "bow"
      },
      {
        "word": "now",
        "pos": "adv",
        "definition": "現在",
        "sentence": "They are playing a game ______.",
        "translation": "他們現在正在玩遊戲 wow exclam. 哇! ______! We won! 哇！我們贏了！",
        "answer": "now",
        "id": "now"
      },
      {
        "word": "owl",
        "pos": "n",
        "definition": "貓頭鷹",
        "sentence": "There is an ______ in the tree.",
        "translation": "樹上有一隻貓頭鷹。",
        "answer": "owl",
        "id": "owl"
      },
      {
        "word": "howl",
        "pos": "v",
        "definition": "嗥叫",
        "sentence": "The wolf is ______ing now.",
        "translation": "這匹狼正在嗥叫。",
        "answer": "howl",
        "id": "howl"
      },
      {
        "word": "towel",
        "pos": "n",
        "definition": "毛巾",
        "sentence": "I need a clean ______ to dry my hair.",
        "translation": "我需要一條乾淨的毛 巾來擦乾我的頭髮。",
        "answer": "towel",
        "id": "towel"
      },
      {
        "word": "vowel",
        "pos": "n",
        "definition": "母音",
        "sentence": "A is a ______. A",
        "translation": "是一個母音。 但 ow 也可以念ㄡ",
        "answer": "vowel",
        "id": "vowel"
      },
      {
        "word": "bow",
        "pos": "noun",
        "definition": "蝴蝶結",
        "sentence": "She tied a pretty _______ in her hair.",
        "translation": "她在頭髮上綁了一個漂亮的蝴蝶 結。",
        "answer": "bow",
        "id": "bow-2"
      },
      {
        "word": "row",
        "pos": "noun/verb",
        "definition": "划船/排",
        "sentence": "They went for a _______ on the lake.",
        "translation": "他們在湖上划船。",
        "answer": "row",
        "id": "row"
      },
      {
        "word": "low",
        "pos": "adjective",
        "definition": "低的",
        "sentence": "The table is too _______.",
        "translation": "這張桌子太低了。",
        "answer": "low",
        "id": "low"
      },
      {
        "word": "snow",
        "pos": "noun/verb",
        "definition": "雪/下雪",
        "sentence": "There is a lot of ________ outside.",
        "translation": "外面下很大的雪。",
        "answer": "snow",
        "id": "snow"
      },
      {
        "word": "snow",
        "pos": "noun/verb",
        "definition": "雪/下雪",
        "sentence": "How's the weather? It's _______.",
        "translation": "天氣如何 ?下雪",
        "answer": "snow",
        "id": "snow-2"
      },
      {
        "word": "slow",
        "pos": "adj",
        "definition": "慢的/慢地",
        "sentence": "The turtle is very _______.",
        "translation": "這隻烏龜非常慢。",
        "answer": "slow",
        "id": "slow"
      },
      {
        "word": "show",
        "pos": "noun/verb",
        "definition": "演出/展示",
        "sentence": "The school _______ is tonight.",
        "translation": "學校的演出是今晚。",
        "answer": "show",
        "id": "show"
      },
      {
        "word": "yellow",
        "pos": "adjective",
        "definition": "黃色",
        "sentence": "I like the _______ sweater.",
        "translation": "我喜歡這件黃色的毛衣。",
        "answer": "yellow",
        "id": "yellow"
      },
      {
        "word": "window",
        "pos": "noun",
        "definition": "窗戶",
        "sentence": "It's windy. Please close the ___________.",
        "translation": "風很大 請關窗戶",
        "answer": "window",
        "id": "window"
      }
    ],
    "group": "ow / ou"
  },
  {
    "id": "oi-oy",
    "title": "oi / oy ㄛㄧ",
    "sourceHeading": "oi / oy ㄛㄧ",
    "group": "oi / oy",
    "items": [
      {
        "word": "oil",
        "pos": "n.",
        "definition": "油",
        "sentence": "The car needs more _____.",
        "translation": "車子需要補充機油。",
        "answer": "oil",
        "id": "oil"
      },
      {
        "word": "boil",
        "pos": "v.",
        "definition": "煮沸",
        "sentence": "Please _____ the water.",
        "translation": "請把水煮沸。",
        "answer": "boil",
        "id": "boil"
      },
      {
        "word": "coin",
        "pos": "n.",
        "definition": "硬幣",
        "sentence": "I found a _____ on the floor.",
        "translation": "我在地板上找到一枚硬幣。",
        "answer": "coin",
        "id": "coin"
      },
      {
        "word": "coil",
        "pos": "n./v.",
        "definition": "線圈；捲繞",
        "sentence": "The snake _____ s around the branch.",
        "translation": "蛇盤繞在樹枝上。",
        "answer": "coil",
        "id": "coil"
      },
      {
        "word": "foil",
        "pos": "n.",
        "definition": "鋁箔紙",
        "sentence": "Wrap the food in _____.",
        "translation": "用鋁箔紙包住食物。",
        "answer": "foil",
        "id": "foil"
      },
      {
        "word": "join",
        "pos": "v.",
        "definition": "加入",
        "sentence": "Would you like to _____ our team?",
        "translation": "你想加入我們的隊伍嗎？",
        "answer": "join",
        "id": "join"
      },
      {
        "word": "joint",
        "pos": "n.",
        "definition": "關節",
        "sentence": "My knee _____ hurts.",
        "translation": "我的膝蓋關節疼痛。",
        "answer": "joint",
        "id": "joint"
      },
      {
        "word": "moist",
        "pos": "adj.",
        "definition": "濕潤的",
        "sentence": "The soil is _____ after rain.",
        "translation": "下雨後土壤是濕潤的。",
        "answer": "moist",
        "id": "moist"
      },
      {
        "word": "noise",
        "pos": "n.",
        "definition": "噪音",
        "sentence": "Please don't make so much _____.",
        "translation": "請不要製造這麼多噪音。",
        "answer": "noise",
        "id": "noise"
      },
      {
        "word": "noisy",
        "pos": "adj.",
        "definition": "吵鬧的",
        "sentence": "The classroom is very _____.",
        "translation": "教室裡非常吵鬧。",
        "answer": "noisy",
        "id": "noisy"
      },
      {
        "word": "point",
        "pos": "n./v.",
        "definition": "點；指向",
        "sentence": "Don't _____ at people.",
        "translation": "不要用手指著別人。",
        "answer": "point",
        "id": "point"
      },
      {
        "word": "poison",
        "pos": "n.",
        "definition": "毒藥",
        "sentence": "Some mushrooms are _____ous.",
        "translation": "有些蘑菇有毒。",
        "answer": "poison",
        "id": "poison"
      },
      {
        "word": "soil",
        "pos": "n.",
        "definition": "土壤",
        "sentence": "Plants grow in _____ .",
        "translation": "植物在土壤中生長。",
        "answer": "soil",
        "id": "soil"
      },
      {
        "word": "toilet",
        "pos": "n.",
        "definition": "廁所",
        "sentence": "The _____ is down the hall.",
        "translation": "廁所在走廊盡頭。",
        "answer": "toilet",
        "id": "toilet"
      },
      {
        "word": "voice",
        "pos": "n.",
        "definition": "聲音",
        "sentence": "She has a beautiful singing _____.",
        "translation": "她有美妙的歌聲。",
        "answer": "voice",
        "id": "voice"
      },
      {
        "word": "void",
        "pos": "adj.",
        "definition": "空的",
        "sentence": "The contract is null and _____.",
        "translation": "合約無效。",
        "answer": "void",
        "id": "void"
      },
      {
        "word": "boy",
        "pos": "n.",
        "definition": "男孩",
        "sentence": "The _____ is playing soccer.",
        "translation": "那個男孩在踢足球。",
        "answer": "boy",
        "id": "boy"
      },
      {
        "word": "toy",
        "pos": "n.",
        "definition": "玩具",
        "sentence": "She got a new _____ for her birthday.",
        "translation": "她生日收到了一個新玩具。",
        "answer": "toy",
        "id": "toy"
      },
      {
        "word": "joy",
        "pos": "n.",
        "definition": "喜悅",
        "sentence": "Her smile fills me with _____.",
        "translation": "她的笑容讓我充滿喜悅。",
        "answer": "joy",
        "id": "joy"
      },
      {
        "word": "enjoy",
        "pos": "v.",
        "definition": "享受",
        "sentence": "I _____ reading books.",
        "translation": "我很享受閱讀。",
        "answer": "enjoy",
        "id": "enjoy"
      },
      {
        "word": "destroy",
        "pos": "v.",
        "definition": "摧毀",
        "sentence": "The fire _____ ed the building.",
        "translation": "大火摧毀了那棟建築。",
        "answer": "destroy",
        "id": "destroy"
      },
      {
        "word": "loyal",
        "pos": "adj.",
        "definition": "忠誠的",
        "sentence": "He is a _____ friend.",
        "translation": "他是個忠誠的朋友。",
        "answer": "loyal",
        "id": "loyal"
      },
      {
        "word": "royal",
        "pos": "adj.",
        "definition": "皇室的",
        "sentence": "The _____ family lives in the palace.",
        "translation": "皇室家族住在宮殿裡。",
        "answer": "royal",
        "id": "royal"
      },
      {
        "word": "oyster",
        "pos": "n.",
        "definition": "牡蠣",
        "sentence": "I like to eat fresh _____s.",
        "translation": "我喜歡吃新鮮牡蠣。",
        "answer": "oyster",
        "id": "oyster"
      },
      {
        "word": "annoyed",
        "pos": "adj.",
        "definition": "惱怒的",
        "sentence": "She was _____ by the noise.",
        "translation": "她被噪音惹惱了。",
        "answer": "annoyed",
        "id": "annoyed"
      },
      {
        "word": "avoid",
        "pos": "v.",
        "definition": "避免",
        "sentence": "Try to _____ eating too much sugar.",
        "translation": "盡量避免吃太多糖。",
        "answer": "avoid",
        "id": "avoid"
      },
      {
        "word": "choice",
        "pos": "n.",
        "definition": "選擇",
        "sentence": "It was a good _____.",
        "translation": "這是個好的選擇。",
        "answer": "choice",
        "id": "choice"
      },
      {
        "word": "appoint",
        "pos": "v.",
        "definition": "任命",
        "sentence": "They will _____ a new manager.",
        "translation": "他們將任命一位新經理。",
        "answer": "appoint",
        "id": "appoint"
      },
      {
        "word": "disappoint",
        "pos": "v.",
        "definition": "使失望",
        "sentence": "Don't _____ your parents.",
        "translation": "不要讓你的父母失望。",
        "answer": "disappoint",
        "id": "disappoint"
      },
      {
        "word": "moisture",
        "pos": "n.",
        "definition": "水分；濕氣",
        "sentence": "The plant needs _____ to grow.",
        "translation": "植物需要水分才能生長。",
        "answer": "moisture",
        "id": "moisture"
      }
    ]
  },
  {
    "id": "bl-blend",
    "title": "bl- Blend",
    "sourceHeading": "bl- Blend",
    "group": "Blends",
    "items": [
      {
        "word": "blue",
        "pos": "adj.",
        "definition": "藍色的",
        "sentence": "The sky is _____.",
        "translation": "天空是藍色的。",
        "answer": "blue",
        "id": "blue"
      },
      {
        "word": "black",
        "pos": "adj.",
        "definition": "黑色的",
        "sentence": "I have a _____ cat.",
        "translation": "我有一隻黑貓。",
        "answer": "black",
        "id": "black"
      },
      {
        "word": "blank",
        "pos": "adj.",
        "definition": "空白的",
        "sentence": "Fill in the _____ space.",
        "translation": "填寫空白處。",
        "answer": "blank",
        "id": "blank"
      },
      {
        "word": "blow",
        "pos": "v.",
        "definition": "吹",
        "sentence": "_____ out the candles.",
        "translation": "吹滅蠟燭。",
        "answer": "blow",
        "id": "blow"
      },
      {
        "word": "block",
        "pos": "n.",
        "definition": "積木；街區",
        "sentence": "Turn left at the next _____.",
        "translation": "在下一個街區左轉。",
        "answer": "block",
        "id": "block"
      },
      {
        "word": "blood",
        "pos": "n.",
        "definition": "血液",
        "sentence": "He gave _____ at the hospital.",
        "translation": "他在醫院捐血。",
        "answer": "blood",
        "id": "blood"
      },
      {
        "word": "bloom",
        "pos": "v.",
        "definition": "開花",
        "sentence": "The roses _____ in spring.",
        "translation": "玫瑰在春天開花。",
        "answer": "bloom",
        "id": "bloom"
      },
      {
        "word": "bless",
        "pos": "v.",
        "definition": "祝福",
        "sentence": "God _____ you!",
        "translation": "上帝祝福你！",
        "answer": "bless",
        "id": "bless"
      },
      {
        "word": "blind",
        "pos": "adj.",
        "definition": "瞎的",
        "sentence": "The _____ man uses a cane.",
        "translation": "盲人使用手杖。",
        "answer": "blind",
        "id": "blind"
      },
      {
        "word": "blink",
        "pos": "v.",
        "definition": "眨眼",
        "sentence": "I _____ when something gets in my eye.",
        "translation": "有東西進眼睛時我會眨眼。",
        "answer": "blink",
        "id": "blink"
      },
      {
        "word": "blister",
        "pos": "n.",
        "definition": "水泡",
        "sentence": "I got a _____ from walking too much.",
        "translation": "走太多路我起了水泡。",
        "answer": "blister",
        "id": "blister"
      },
      {
        "word": "blend",
        "pos": "v.",
        "definition": "混合",
        "sentence": "_____ the fruits to make a smoothie.",
        "translation": "把水果混合做成奶昔。",
        "answer": "blend",
        "id": "blend"
      },
      {
        "word": "blender",
        "pos": "n.",
        "definition": "果汁機",
        "sentence": "Use the _____ to mix the ingredients.",
        "translation": "用果汁機攪拌食材。",
        "answer": "blender",
        "id": "blender"
      },
      {
        "word": "blaze",
        "pos": "n.",
        "definition": "火焰",
        "sentence": "The house was in a _____ .",
        "translation": "房子燃起了熊熊火焰。",
        "answer": "blaze",
        "id": "blaze"
      },
      {
        "word": "blazer",
        "pos": "n.",
        "definition": "西裝外套",
        "sentence": "He wore a smart _____ to the meeting.",
        "translation": "他穿著整齊的西裝外套去開會。",
        "answer": "blazer",
        "id": "blazer"
      },
      {
        "word": "bleat",
        "pos": "v.",
        "definition": "羊叫聲",
        "sentence": "The sheep _____ ed in the field.",
        "translation": "羊在田野裡叫著。",
        "answer": "bleat",
        "id": "bleat"
      },
      {
        "word": "bleed",
        "pos": "v.",
        "definition": "流血",
        "sentence": "His knee is _____ing after the fall.",
        "translation": "跌倒後他的膝蓋在流血。",
        "answer": "bleed",
        "id": "bleed"
      },
      {
        "word": "blend",
        "pos": "n.",
        "definition": "混合物",
        "sentence": "This tea is a _____ of green and black.",
        "translation": "這種茶是綠茶和紅茶的混合。",
        "answer": "blend",
        "id": "blend-2"
      },
      {
        "word": "blur",
        "pos": "v.",
        "definition": "模糊",
        "sentence": "The photo is _____red.",
        "translation": "照片模糊了。",
        "answer": "blur",
        "id": "blur"
      },
      {
        "word": "blush",
        "pos": "v.",
        "definition": "臉紅",
        "sentence": "She _____ ed when he complimented her.",
        "translation": "他稱讚她時她臉紅了。",
        "answer": "blush",
        "id": "blush"
      },
      {
        "word": "blade",
        "pos": "n.",
        "definition": "刀刃；葉片",
        "sentence": "The _____ of the knife is very sharp.",
        "translation": "刀的刀刃非常鋒利。",
        "answer": "blade",
        "id": "blade"
      },
      {
        "word": "blame",
        "pos": "v.",
        "definition": "責怪",
        "sentence": "Don't _____ others for your mistakes.",
        "translation": "不要把錯誤怪罪在別人身上。",
        "answer": "blame",
        "id": "blame"
      },
      {
        "word": "blast",
        "pos": "n.",
        "definition": "爆炸；強風",
        "sentence": "The _____ of wind knocked over the tree.",
        "translation": "強風吹倒了樹。",
        "answer": "blast",
        "id": "blast"
      },
      {
        "word": "blouse",
        "pos": "n.",
        "definition": "女上衣",
        "sentence": "She is wearing a white _____.",
        "translation": "她穿著一件白色女上衣。",
        "answer": "blouse",
        "id": "blouse"
      },
      {
        "word": "blunt",
        "pos": "adj.",
        "definition": "直率的；鈍的",
        "sentence": "His answer was very _____.",
        "translation": "他的回答非常直率。",
        "answer": "blunt",
        "id": "blunt"
      },
      {
        "word": "boast",
        "pos": "v.",
        "definition": "吹噓",
        "sentence": "Don't _____ about your grades.",
        "translation": "不要吹噓你的成績。",
        "answer": "boast",
        "id": "boast"
      },
      {
        "word": "blockbuster",
        "pos": "n.",
        "definition": "大片",
        "sentence": "That movie was a real _____.",
        "translation": "那部電影真是大片。",
        "answer": "blockbuster",
        "id": "blockbuster"
      },
      {
        "word": "blueprint",
        "pos": "n.",
        "definition": "藍圖",
        "sentence": "The architect showed us the _____.",
        "translation": "建築師給我們看了藍圖。",
        "answer": "blueprint",
        "id": "blueprint"
      },
      {
        "word": "blossom",
        "pos": "n.",
        "definition": "花朵",
        "sentence": "The cherry _____ s are beautiful.",
        "translation": "櫻花非常美麗。",
        "answer": "blossom",
        "id": "blossom"
      },
      {
        "word": "blunder",
        "pos": "n.",
        "definition": "大錯",
        "sentence": "He made a big _____ in the test.",
        "translation": "他在考試中犯了個大錯。",
        "answer": "blunder",
        "id": "blunder"
      }
    ]
  },
  {
    "id": "br-blend",
    "title": "br- Blend",
    "sourceHeading": "br- Blend",
    "group": "Blends",
    "items": [
      {
        "word": "bridge",
        "pos": "n.",
        "definition": "橋",
        "sentence": "We walked across the _____.",
        "translation": "我們步行越過橋。",
        "answer": "bridge",
        "id": "bridge"
      },
      {
        "word": "bring",
        "pos": "v.",
        "definition": "帶來",
        "sentence": "Please _____ your notebook.",
        "translation": "請帶你的筆記本來。",
        "answer": "bring",
        "id": "bring"
      },
      {
        "word": "brother",
        "pos": "n.",
        "definition": "兄弟",
        "sentence": "My _____ is very tall.",
        "translation": "我哥哥非常高。",
        "answer": "brother",
        "id": "brother"
      },
      {
        "word": "brave",
        "pos": "adj.",
        "definition": "勇敢的",
        "sentence": "The _____ firefighter saved the child.",
        "translation": "勇敢的消防員救了孩子。",
        "answer": "brave",
        "id": "brave"
      },
      {
        "word": "brown",
        "pos": "adj.",
        "definition": "棕色的",
        "sentence": "She has _____ eyes.",
        "translation": "她有棕色的眼睛。",
        "answer": "brown",
        "id": "brown"
      },
      {
        "word": "bread",
        "pos": "n.",
        "definition": "麵包",
        "sentence": "I like _____ with butter.",
        "translation": "我喜歡塗奶油的麵包。",
        "answer": "bread",
        "id": "bread"
      },
      {
        "word": "breakfast",
        "pos": "n.",
        "definition": "早餐",
        "sentence": "I have eggs for _____.",
        "translation": "我早餐吃雞蛋。",
        "answer": "breakfast",
        "id": "breakfast"
      },
      {
        "word": "breathe",
        "pos": "v.",
        "definition": "呼吸",
        "sentence": "_____ deeply and relax.",
        "translation": "深呼吸放鬆。",
        "answer": "breathe",
        "id": "breathe"
      },
      {
        "word": "break",
        "pos": "v.",
        "definition": "打破",
        "sentence": "Don't _____ these eggs.",
        "translation": "不要打破這些雞蛋。",
        "answer": "break",
        "id": "break"
      },
      {
        "word": "bright",
        "pos": "adj.",
        "definition": "明亮的",
        "sentence": "The stars are _____ tonight.",
        "translation": "今晚星星很明亮。",
        "answer": "bright",
        "id": "bright"
      },
      {
        "word": "brook",
        "pos": "n.",
        "definition": "小溪",
        "sentence": "We played near the _____.",
        "translation": "我們在小溪旁邊玩。",
        "answer": "brook",
        "id": "brook"
      },
      {
        "word": "brush",
        "pos": "n./v.",
        "definition": "刷子；刷",
        "sentence": "_____ your teeth after meals.",
        "translation": "飯後刷牙。",
        "answer": "brush",
        "id": "brush"
      },
      {
        "word": "bruise",
        "pos": "n.",
        "definition": "瘀傷",
        "sentence": "She has a _____ on her arm.",
        "translation": "她手臂上有一個瘀傷。",
        "answer": "bruise",
        "id": "bruise"
      },
      {
        "word": "brain",
        "pos": "n.",
        "definition": "大腦",
        "sentence": "Use your _____ to solve the problem.",
        "translation": "用你的大腦解決問題。",
        "answer": "brain",
        "id": "brain"
      },
      {
        "word": "brand",
        "pos": "n.",
        "definition": "品牌",
        "sentence": "What _____ of shoes do you wear?",
        "translation": "你穿什麼品牌的鞋子？",
        "answer": "brand",
        "id": "brand"
      },
      {
        "word": "brick",
        "pos": "n.",
        "definition": "磚",
        "sentence": "The house is built with red _____s.",
        "translation": "這棟房子是用紅磚建造的。",
        "answer": "brick",
        "id": "brick"
      },
      {
        "word": "brief",
        "pos": "adj.",
        "definition": "簡短的",
        "sentence": "Give me a _____ explanation.",
        "translation": "給我一個簡短的解釋。",
        "answer": "brief",
        "id": "brief"
      },
      {
        "word": "brim",
        "pos": "n.",
        "definition": "帽簷；邊緣",
        "sentence": "Her hat has a wide _____.",
        "translation": "她的帽子有寬帽簷。",
        "answer": "brim",
        "id": "brim"
      },
      {
        "word": "broke",
        "pos": "adj.",
        "definition": "沒錢的",
        "sentence": "He is _____ after buying the new phone.",
        "translation": "買了新手機後他身無分文。",
        "answer": "broke",
        "id": "broke"
      },
      {
        "word": "bronze",
        "pos": "n.",
        "definition": "銅",
        "sentence": "She won a _____ medal.",
        "translation": "她獲得了銅牌。",
        "answer": "bronze",
        "id": "bronze"
      },
      {
        "word": "broom",
        "pos": "n.",
        "definition": "掃帚",
        "sentence": "Sweep the floor with a _____.",
        "translation": "用掃帚掃地板。",
        "answer": "broom",
        "id": "broom"
      },
      {
        "word": "branch",
        "pos": "n.",
        "definition": "樹枝；分支",
        "sentence": "The bird sat on the _____ .",
        "translation": "小鳥停在樹枝上。",
        "answer": "branch",
        "id": "branch"
      },
      {
        "word": "brat",
        "pos": "n.",
        "definition": "頑皮的孩子",
        "sentence": "Don't behave like a _____.",
        "translation": "不要像頑皮鬼一樣。",
        "answer": "brat",
        "id": "brat"
      },
      {
        "word": "breach",
        "pos": "n.",
        "definition": "違反",
        "sentence": "That was a _____ of the rules.",
        "translation": "那是對規則的違反。",
        "answer": "breach",
        "id": "breach"
      },
      {
        "word": "breed",
        "pos": "n./v.",
        "definition": "品種；繁殖",
        "sentence": "What _____ is your dog?",
        "translation": "你的狗是什麼品種？",
        "answer": "breed",
        "id": "breed"
      },
      {
        "word": "brew",
        "pos": "v.",
        "definition": "釀造；泡",
        "sentence": "She _____ ed a pot of tea.",
        "translation": "她泡了一壺茶。",
        "answer": "brew",
        "id": "brew"
      },
      {
        "word": "brisk",
        "pos": "adj.",
        "definition": "輕快的",
        "sentence": "We took a _____ walk in the morning.",
        "translation": "我們早上快步走了一圈。",
        "answer": "brisk",
        "id": "brisk"
      },
      {
        "word": "brooch",
        "pos": "n.",
        "definition": "胸針",
        "sentence": "She wore a beautiful _____ on her coat.",
        "translation": "她外套上戴著一枚漂亮的胸針。",
        "answer": "brooch",
        "id": "brooch"
      },
      {
        "word": "broth",
        "pos": "n.",
        "definition": "清湯",
        "sentence": "She made a warm chicken _____.",
        "translation": "她做了一鍋溫熱的雞湯。",
        "answer": "broth",
        "id": "broth"
      },
      {
        "word": "brow",
        "pos": "n.",
        "definition": "眉毛；額頭",
        "sentence": "She raised an eyebrow — one _____.",
        "translation": "她揚起眉毛——一條眉。",
        "answer": "brow",
        "id": "brow"
      }
    ]
  },
  {
    "id": "cl-blend",
    "title": "cl- Blend",
    "sourceHeading": "cl- Blend",
    "group": "Blends",
    "items": [
      {
        "word": "class",
        "pos": "n.",
        "definition": "班級",
        "sentence": "I am in _____ 601.",
        "translation": "我在601班。",
        "answer": "class",
        "id": "class"
      },
      {
        "word": "clean",
        "pos": "adj./v.",
        "definition": "乾淨的；清潔",
        "sentence": "My hands are _____.",
        "translation": "我的雙手很乾淨。",
        "answer": "clean",
        "id": "clean"
      },
      {
        "word": "click",
        "pos": "v.",
        "definition": "點擊",
        "sentence": "_____ the icon to open the file.",
        "translation": "點擊圖標打開文件。",
        "answer": "click",
        "id": "click"
      },
      {
        "word": "climb",
        "pos": "v.",
        "definition": "攀爬",
        "sentence": "Let's _____ the mountain.",
        "translation": "我們去爬山吧。",
        "answer": "climb",
        "id": "climb"
      },
      {
        "word": "clock",
        "pos": "n.",
        "definition": "時鐘",
        "sentence": "Look at the _____ on the wall.",
        "translation": "看看牆上的時鐘。",
        "answer": "clock",
        "id": "clock"
      },
      {
        "word": "close",
        "pos": "v.",
        "definition": "關閉",
        "sentence": "Please _____ the window.",
        "translation": "請關上窗戶。",
        "answer": "close",
        "id": "close"
      },
      {
        "word": "cloud",
        "pos": "n.",
        "definition": "雲",
        "sentence": "I can see a big _____ in the sky.",
        "translation": "我在天空中看到一朵大雲。",
        "answer": "cloud",
        "id": "cloud"
      },
      {
        "word": "clap",
        "pos": "v.",
        "definition": "拍手",
        "sentence": "Everyone _____ ped after the show.",
        "translation": "演出結束後大家都拍手。",
        "answer": "clap",
        "id": "clap"
      },
      {
        "word": "claw",
        "pos": "n.",
        "definition": "爪子",
        "sentence": "The cat has sharp _____s.",
        "translation": "貓有鋒利的爪子。",
        "answer": "claw",
        "id": "claw"
      },
      {
        "word": "clay",
        "pos": "n.",
        "definition": "黏土",
        "sentence": "We made a pot with _____.",
        "translation": "我們用黏土做了一個花盆。",
        "answer": "clay",
        "id": "clay"
      },
      {
        "word": "clerk",
        "pos": "n.",
        "definition": "職員",
        "sentence": "The store _____ helped me find the shoes.",
        "translation": "店員幫我找到了鞋子。",
        "answer": "clerk",
        "id": "clerk"
      },
      {
        "word": "clever",
        "pos": "adj.",
        "definition": "聰明的",
        "sentence": "She gave a _____ answer.",
        "translation": "她給出了一個聰明的回答。",
        "answer": "clever",
        "id": "clever"
      },
      {
        "word": "cliff",
        "pos": "n.",
        "definition": "懸崖",
        "sentence": "Don't go near the _____.",
        "translation": "不要靠近懸崖。",
        "answer": "cliff",
        "id": "cliff"
      },
      {
        "word": "clip",
        "pos": "n./v.",
        "definition": "夾子；夾",
        "sentence": "Use a _____ to hold the papers.",
        "translation": "用夾子夾住文件。",
        "answer": "clip",
        "id": "clip"
      },
      {
        "word": "clue",
        "pos": "n.",
        "definition": "線索",
        "sentence": "The detective found a _____.",
        "translation": "偵探找到了一條線索。",
        "answer": "clue",
        "id": "clue"
      },
      {
        "word": "club",
        "pos": "n.",
        "definition": "俱樂部",
        "sentence": "I joined the reading _____.",
        "translation": "我加入了讀書俱樂部。",
        "answer": "club",
        "id": "club"
      },
      {
        "word": "clumsy",
        "pos": "adj.",
        "definition": "笨拙的",
        "sentence": "Be careful. Don't be _____.",
        "translation": "小心，不要太笨拙。",
        "answer": "clumsy",
        "id": "clumsy"
      },
      {
        "word": "cluster",
        "pos": "n.",
        "definition": "群；串",
        "sentence": "A _____ of grapes hangs on the vine.",
        "translation": "一串葡萄掛在藤上。",
        "answer": "cluster",
        "id": "cluster"
      },
      {
        "word": "clutter",
        "pos": "n.",
        "definition": "雜亂",
        "sentence": "Please clean up the _____ on your desk.",
        "translation": "請清理桌上的雜亂。",
        "answer": "clutter",
        "id": "clutter"
      },
      {
        "word": "claim",
        "pos": "v.",
        "definition": "聲稱；主張",
        "sentence": "He _____ s he can speak six languages.",
        "translation": "他聲稱自己能說六種語言。",
        "answer": "claim",
        "id": "claim"
      },
      {
        "word": "clarify",
        "pos": "v.",
        "definition": "澄清",
        "sentence": "Can you _____ your meaning?",
        "translation": "你能澄清你的意思嗎？",
        "answer": "clarify",
        "id": "clarify"
      },
      {
        "word": "classic",
        "pos": "adj.",
        "definition": "經典的",
        "sentence": "This is a _____ movie.",
        "translation": "這是一部經典電影。",
        "answer": "classic",
        "id": "classic"
      },
      {
        "word": "classify",
        "pos": "v.",
        "definition": "分類",
        "sentence": "We need to _____ the animals.",
        "translation": "我們需要對動物進行分類。",
        "answer": "classify",
        "id": "classify"
      },
      {
        "word": "client",
        "pos": "n.",
        "definition": "客戶",
        "sentence": "The _____ is happy with our work.",
        "translation": "客戶對我們的工作很滿意。",
        "answer": "client",
        "id": "client"
      },
      {
        "word": "climate",
        "pos": "n.",
        "definition": "氣候",
        "sentence": "Taiwan has a warm _____.",
        "translation": "台灣氣候溫暖。",
        "answer": "climate",
        "id": "climate"
      },
      {
        "word": "clinic",
        "pos": "n.",
        "definition": "診所",
        "sentence": "I went to the _____ for a checkup.",
        "translation": "我去診所做體檢。",
        "answer": "clinic",
        "id": "clinic"
      },
      {
        "word": "cloak",
        "pos": "n.",
        "definition": "斗篷",
        "sentence": "The magician wore a black _____.",
        "translation": "魔術師穿著黑色斗篷。",
        "answer": "cloak",
        "id": "cloak"
      },
      {
        "word": "clog",
        "pos": "v.",
        "definition": "堵塞",
        "sentence": "The sink is _____ged with hair.",
        "translation": "水槽被頭髮堵塞了。",
        "answer": "clog",
        "id": "clog"
      },
      {
        "word": "clone",
        "pos": "n./v.",
        "definition": "複製品；複製",
        "sentence": "Scientists can _____ animals.",
        "translation": "科學家可以複製動物。",
        "answer": "clone",
        "id": "clone"
      },
      {
        "word": "closet",
        "pos": "n.",
        "definition": "衣橱",
        "sentence": "Hang your coat in the _____.",
        "translation": "把你的外套掛在衣橱裡。",
        "answer": "closet",
        "id": "closet"
      }
    ]
  },
  {
    "id": "cr-blend",
    "title": "cr- Blend",
    "sourceHeading": "cr- Blend",
    "group": "Blends",
    "items": [
      {
        "word": "cry",
        "pos": "v.",
        "definition": "哭",
        "sentence": "The baby is _____ing.",
        "translation": "嬰兒在哭。",
        "answer": "cry",
        "id": "cry"
      },
      {
        "word": "crayon",
        "pos": "n.",
        "definition": "蠟筆",
        "sentence": "She is drawing with a _____.",
        "translation": "她在用蠟筆畫畫。",
        "answer": "crayon",
        "id": "crayon"
      },
      {
        "word": "crab",
        "pos": "n.",
        "definition": "螃蟹",
        "sentence": "We caught a _____ at the beach.",
        "translation": "我們在海灘抓到一隻螃蟹。",
        "answer": "crab",
        "id": "crab"
      },
      {
        "word": "crack",
        "pos": "n./v.",
        "definition": "裂縫；破裂",
        "sentence": "There is a _____ in the wall.",
        "translation": "牆上有一條裂縫。",
        "answer": "crack",
        "id": "crack"
      },
      {
        "word": "crawl",
        "pos": "v.",
        "definition": "爬行",
        "sentence": "The baby is _____ing on the floor.",
        "translation": "嬰兒在地板上爬行。",
        "answer": "crawl",
        "id": "crawl"
      },
      {
        "word": "cream",
        "pos": "n.",
        "definition": "奶油；乳霜",
        "sentence": "I like coffee with _____.",
        "translation": "我喜歡加奶油的咖啡。",
        "answer": "cream",
        "id": "cream"
      },
      {
        "word": "create",
        "pos": "v.",
        "definition": "創造",
        "sentence": "She will _____ a new painting.",
        "translation": "她將創作一幅新畫。",
        "answer": "create",
        "id": "create"
      },
      {
        "word": "crown",
        "pos": "n.",
        "definition": "皇冠",
        "sentence": "The queen wears a _____ .",
        "translation": "女王戴著一頂皇冠。",
        "answer": "crown",
        "id": "crown"
      },
      {
        "word": "cross",
        "pos": "v.",
        "definition": "穿越",
        "sentence": "Look both ways before you _____ the street.",
        "translation": "過馬路前要看兩邊。",
        "answer": "cross",
        "id": "cross"
      },
      {
        "word": "crop",
        "pos": "n.",
        "definition": "農作物",
        "sentence": "The _____ s grew well this year.",
        "translation": "今年農作物長得很好。",
        "answer": "crop",
        "id": "crop"
      },
      {
        "word": "cricket",
        "pos": "n.",
        "definition": "蟋蟀；板球",
        "sentence": "I hear a _____ chirping at night.",
        "translation": "我晚上聽到蟋蟀叫。",
        "answer": "cricket",
        "id": "cricket"
      },
      {
        "word": "crispy",
        "pos": "adj.",
        "definition": "酥脆的",
        "sentence": "I love _____ fried chicken.",
        "translation": "我喜歡酥脆的炸雞。",
        "answer": "crispy",
        "id": "crispy"
      },
      {
        "word": "crumble",
        "pos": "v.",
        "definition": "碎裂",
        "sentence": "The old building began to _____.",
        "translation": "舊建築開始碎裂了。",
        "answer": "crumble",
        "id": "crumble"
      },
      {
        "word": "crush",
        "pos": "v.",
        "definition": "擠壓；暗戀",
        "sentence": "She has a _____ on the new student.",
        "translation": "她暗戀那個新學生。",
        "answer": "crush",
        "id": "crush"
      },
      {
        "word": "crust",
        "pos": "n.",
        "definition": "麵包皮；外殼",
        "sentence": "I don't like the _____ on bread.",
        "translation": "我不喜歡麵包皮。",
        "answer": "crust",
        "id": "crust"
      },
      {
        "word": "craft",
        "pos": "n.",
        "definition": "工藝",
        "sentence": "She is good at _____ .",
        "translation": "她擅長工藝。",
        "answer": "craft",
        "id": "craft"
      },
      {
        "word": "crane",
        "pos": "n.",
        "definition": "起重機；鶴",
        "sentence": "A _____ lifted the heavy box.",
        "translation": "起重機吊起了重箱子。",
        "answer": "crane",
        "id": "crane"
      },
      {
        "word": "crash",
        "pos": "v.",
        "definition": "撞擊",
        "sentence": "The car _____ ed into the tree.",
        "translation": "汽車撞上了樹。",
        "answer": "crash",
        "id": "crash"
      },
      {
        "word": "crazy",
        "pos": "adj.",
        "definition": "瘋狂的",
        "sentence": "That sounds like a _____ idea!",
        "translation": "那聽起來像個瘋狂的想法！",
        "answer": "crazy",
        "id": "crazy"
      },
      {
        "word": "crew",
        "pos": "n.",
        "definition": "工作人員",
        "sentence": "The ship's _____ worked hard.",
        "translation": "船員們努力工作。",
        "answer": "crew",
        "id": "crew"
      },
      {
        "word": "crisp",
        "pos": "adj.",
        "definition": "清脆的",
        "sentence": "The autumn air is cool and _____.",
        "translation": "秋天的空氣清涼爽脆。",
        "answer": "crisp",
        "id": "crisp"
      },
      {
        "word": "criterion",
        "pos": "n.",
        "definition": "標準",
        "sentence": "Good grades is one _____ for the award.",
        "translation": "好成績是獲獎的一個標準。",
        "answer": "criterion",
        "id": "criterion"
      },
      {
        "word": "croak",
        "pos": "v.",
        "definition": "蛙鳴；嘎聲",
        "sentence": "The frog was _____ing by the pond.",
        "translation": "青蛙在池塘旁鳴叫。",
        "answer": "croak",
        "id": "croak"
      },
      {
        "word": "crook",
        "pos": "n.",
        "definition": "騙子；彎曲",
        "sentence": "That man is a _____.",
        "translation": "那個人是個騙子。",
        "answer": "crook",
        "id": "crook"
      },
      {
        "word": "crouch",
        "pos": "v.",
        "definition": "蹲下",
        "sentence": "The cat _____ ed before jumping.",
        "translation": "貓在跳躍前蹲下。",
        "answer": "crouch",
        "id": "crouch"
      },
      {
        "word": "crow",
        "pos": "n.",
        "definition": "烏鴉",
        "sentence": "A _____ sat on the fence.",
        "translation": "一隻烏鴉停在欄杆上。",
        "answer": "crow",
        "id": "crow"
      },
      {
        "word": "crucial",
        "pos": "adj.",
        "definition": "關鍵的",
        "sentence": "This is a _____ moment in the game.",
        "translation": "這是比賽的關鍵時刻。",
        "answer": "crucial",
        "id": "crucial"
      },
      {
        "word": "cruel",
        "pos": "adj.",
        "definition": "殘忍的",
        "sentence": "It is _____ to hurt animals.",
        "translation": "傷害動物是殘忍的。",
        "answer": "cruel",
        "id": "cruel"
      },
      {
        "word": "crunch",
        "pos": "v.",
        "definition": "嘎吱聲",
        "sentence": "The leaves _____ under our feet.",
        "translation": "樹葉在腳下嘎吱作響。",
        "answer": "crunch",
        "id": "crunch"
      },
      {
        "word": "crystal",
        "pos": "n.",
        "definition": "水晶",
        "sentence": "The glass is made of _____.",
        "translation": "這個杯子是水晶製的。",
        "answer": "crystal",
        "id": "crystal"
      }
    ]
  },
  {
    "id": "pl-blend",
    "title": "pl- Blend",
    "sourceHeading": "pl- Blend",
    "group": "Blends",
    "items": [
      {
        "word": "play",
        "pos": "v.",
        "definition": "玩耍",
        "sentence": "Let's _____ outside.",
        "translation": "我們在外面玩吧。",
        "answer": "play",
        "id": "play"
      },
      {
        "word": "please",
        "pos": "v.",
        "definition": "請；取悅",
        "sentence": "_____ sit down.",
        "translation": "請坐下。",
        "answer": "please",
        "id": "please"
      },
      {
        "word": "plant",
        "pos": "n./v.",
        "definition": "植物；種植",
        "sentence": "She _____ ed flowers in the garden.",
        "translation": "她在花園裡種了花。",
        "answer": "plant",
        "id": "plant"
      },
      {
        "word": "plate",
        "pos": "n.",
        "definition": "盤子",
        "sentence": "There is food on the _____.",
        "translation": "盤子裡有食物。",
        "answer": "plate",
        "id": "plate"
      },
      {
        "word": "place",
        "pos": "n.",
        "definition": "地方",
        "sentence": "This is a nice _____ to relax.",
        "translation": "這是個放鬆的好地方。",
        "answer": "place",
        "id": "place"
      },
      {
        "word": "plan",
        "pos": "n./v.",
        "definition": "計劃",
        "sentence": "What is your _____ for the weekend?",
        "translation": "你週末有什麼計劃？",
        "answer": "plan",
        "id": "plan"
      },
      {
        "word": "planet",
        "pos": "n.",
        "definition": "行星",
        "sentence": "Earth is a _____.",
        "translation": "地球是一顆行星。",
        "answer": "planet",
        "id": "planet"
      },
      {
        "word": "plastic",
        "pos": "n.",
        "definition": "塑膠",
        "sentence": "The bottle is made of _____.",
        "translation": "這個瓶子是塑膠製的。",
        "answer": "plastic",
        "id": "plastic"
      },
      {
        "word": "plus",
        "pos": "prep.",
        "definition": "加上",
        "sentence": "Two _____ two is four.",
        "translation": "二加二等於四。",
        "answer": "plus",
        "id": "plus"
      },
      {
        "word": "plenty",
        "pos": "pron.",
        "definition": "很多",
        "sentence": "There is _____ of food.",
        "translation": "食物非常充足。",
        "answer": "plenty",
        "id": "plenty"
      },
      {
        "word": "plane",
        "pos": "n.",
        "definition": "飛機",
        "sentence": "We took a _____ to Tokyo.",
        "translation": "我們搭飛機去東京。",
        "answer": "plane",
        "id": "plane"
      },
      {
        "word": "pledge",
        "pos": "n./v.",
        "definition": "承諾",
        "sentence": "We _____ to be kind to each other.",
        "translation": "我們承諾互相友善。",
        "answer": "pledge",
        "id": "pledge"
      },
      {
        "word": "plot",
        "pos": "n.",
        "definition": "情節；陰謀",
        "sentence": "The _____ of the movie is exciting.",
        "translation": "電影的情節很精彩。",
        "answer": "plot",
        "id": "plot"
      },
      {
        "word": "plow",
        "pos": "n./v.",
        "definition": "犁；耕",
        "sentence": "The farmer _____ ed the field.",
        "translation": "農夫耕了田地。",
        "answer": "plow",
        "id": "plow"
      },
      {
        "word": "pluck",
        "pos": "v.",
        "definition": "摘；拔",
        "sentence": "She _____ ed the flower from the garden.",
        "translation": "她從花園採了一朵花。",
        "answer": "pluck",
        "id": "pluck"
      },
      {
        "word": "plug",
        "pos": "n.",
        "definition": "插頭",
        "sentence": "Please plug in the _____.",
        "translation": "請插上插頭。",
        "answer": "plug",
        "id": "plug"
      },
      {
        "word": "plum",
        "pos": "n.",
        "definition": "李子",
        "sentence": "I ate a ripe _____ .",
        "translation": "我吃了一顆熟透的李子。",
        "answer": "plum",
        "id": "plum"
      },
      {
        "word": "plumber",
        "pos": "n.",
        "definition": "水管工",
        "sentence": "We called the _____ to fix the pipe.",
        "translation": "我們打電話給水管工修管道。",
        "answer": "plumber",
        "id": "plumber"
      },
      {
        "word": "plunge",
        "pos": "v.",
        "definition": "跳入；俯衝",
        "sentence": "She _____ d into the pool.",
        "translation": "她跳進了游泳池。",
        "answer": "plunge",
        "id": "plunge"
      },
      {
        "word": "plural",
        "pos": "n.",
        "definition": "複數",
        "sentence": "The _____ of 'cat' is 'cats'.",
        "translation": "「cat」的複數是「cats」。",
        "answer": "plural",
        "id": "plural"
      },
      {
        "word": "platform",
        "pos": "n.",
        "definition": "月台；平台",
        "sentence": "Wait on the _____ for the train.",
        "translation": "在月台上等候火車。",
        "answer": "platform",
        "id": "platform"
      },
      {
        "word": "player",
        "pos": "n.",
        "definition": "選手",
        "sentence": "She is the best _____ on the team.",
        "translation": "她是球隊中最好的選手。",
        "answer": "player",
        "id": "player"
      },
      {
        "word": "playground",
        "pos": "n.",
        "definition": "遊樂場",
        "sentence": "The children play at the _____.",
        "translation": "孩子們在遊樂場玩耍。",
        "answer": "playground",
        "id": "playground"
      },
      {
        "word": "playlist",
        "pos": "n.",
        "definition": "播放清單",
        "sentence": "She made a new music _____.",
        "translation": "她製作了一個新的音樂播放清單。",
        "answer": "playlist",
        "id": "playlist"
      },
      {
        "word": "plaid",
        "pos": "n.",
        "definition": "格子花紋",
        "sentence": "He wore a _____ shirt.",
        "translation": "他穿著一件格子衬衫。",
        "answer": "plaid",
        "id": "plaid"
      },
      {
        "word": "plain",
        "pos": "adj.",
        "definition": "樸素的",
        "sentence": "She wore a _____ white dress.",
        "translation": "她穿著一件樸素的白洋裝。",
        "answer": "plain",
        "id": "plain"
      },
      {
        "word": "plait",
        "pos": "n.",
        "definition": "辮子",
        "sentence": "She wore her hair in a _____.",
        "translation": "她把頭髮編成辮子。",
        "answer": "plait",
        "id": "plait"
      },
      {
        "word": "plaque",
        "pos": "n.",
        "definition": "牌匾；牙菌斑",
        "sentence": "The wall had a gold _____ on it.",
        "translation": "牆上有一塊金色牌匾。",
        "answer": "plaque",
        "id": "plaque"
      },
      {
        "word": "plateau",
        "pos": "n.",
        "definition": "高原",
        "sentence": "They camped on the _____.",
        "translation": "他們在高原上紮營。",
        "answer": "plateau",
        "id": "plateau"
      },
      {
        "word": "playful",
        "pos": "adj.",
        "definition": "愛玩的",
        "sentence": "The puppy is very _____.",
        "translation": "這隻小狗非常愛玩。",
        "answer": "playful",
        "id": "playful"
      }
    ]
  },
  {
    "id": "pr-blend",
    "title": "pr- Blend",
    "sourceHeading": "pr- Blend",
    "group": "Blends",
    "items": [
      {
        "word": "prize",
        "pos": "n.",
        "definition": "獎品",
        "sentence": "She won first _____ in the contest.",
        "translation": "她在比賽中獲得了第一名。",
        "answer": "prize",
        "id": "prize"
      },
      {
        "word": "price",
        "pos": "n.",
        "definition": "價格",
        "sentence": "What is the _____ of this jacket?",
        "translation": "這件夾克的價格是多少？",
        "answer": "price",
        "id": "price"
      },
      {
        "word": "print",
        "pos": "v.",
        "definition": "列印；印刷",
        "sentence": "Please _____ two copies.",
        "translation": "請列印兩份。",
        "answer": "print",
        "id": "print"
      },
      {
        "word": "proud",
        "pos": "adj.",
        "definition": "驕傲的",
        "sentence": "My parents are _____ of me.",
        "translation": "我的父母以我為榮。",
        "answer": "proud",
        "id": "proud"
      },
      {
        "word": "press",
        "pos": "v.",
        "definition": "按壓",
        "sentence": "_____ the button to start.",
        "translation": "按下按鈕開始。",
        "answer": "press",
        "id": "press"
      },
      {
        "word": "pretty",
        "pos": "adj.",
        "definition": "漂亮的",
        "sentence": "She has a _____ smile.",
        "translation": "她有一個漂亮的笑容。",
        "answer": "pretty",
        "id": "pretty"
      },
      {
        "word": "pray",
        "pos": "v.",
        "definition": "祈禱",
        "sentence": "They _____ before dinner.",
        "translation": "他們在晚餐前祈禱。",
        "answer": "pray",
        "id": "pray"
      },
      {
        "word": "problem",
        "pos": "n.",
        "definition": "問題",
        "sentence": "I have a math _____.",
        "translation": "我有一道數學題。",
        "answer": "problem",
        "id": "problem"
      },
      {
        "word": "practice",
        "pos": "n./v.",
        "definition": "練習",
        "sentence": "We need more _____ .",
        "translation": "我們需要更多練習。",
        "answer": "practice",
        "id": "practice"
      },
      {
        "word": "present",
        "pos": "n.",
        "definition": "禮物；當前",
        "sentence": "She gave me a birthday _____.",
        "translation": "她送給我一份生日禮物。",
        "answer": "present",
        "id": "present"
      },
      {
        "word": "prevent",
        "pos": "v.",
        "definition": "預防",
        "sentence": "Wash your hands to _____ illness.",
        "translation": "洗手以預防疾病。",
        "answer": "prevent",
        "id": "prevent"
      },
      {
        "word": "prepare",
        "pos": "v.",
        "definition": "準備",
        "sentence": "Let's _____ for the test.",
        "translation": "讓我們準備考試吧。",
        "answer": "prepare",
        "id": "prepare"
      },
      {
        "word": "promise",
        "pos": "n./v.",
        "definition": "承諾",
        "sentence": "I _____ to be on time.",
        "translation": "我承諾要準時。",
        "answer": "promise",
        "id": "promise"
      },
      {
        "word": "protect",
        "pos": "v.",
        "definition": "保護",
        "sentence": "Wear sunscreen to _____ your skin.",
        "translation": "塗防曬霜保護皮膚。",
        "answer": "protect",
        "id": "protect"
      },
      {
        "word": "prove",
        "pos": "v.",
        "definition": "證明",
        "sentence": "Can you _____ your answer?",
        "translation": "你能證明你的答案嗎？",
        "answer": "prove",
        "id": "prove"
      },
      {
        "word": "provide",
        "pos": "v.",
        "definition": "提供",
        "sentence": "The school _____ s free meals.",
        "translation": "學校提供免費餐點。",
        "answer": "provide",
        "id": "provide"
      },
      {
        "word": "prefer",
        "pos": "v.",
        "definition": "更喜歡",
        "sentence": "I _____ cats to dogs.",
        "translation": "我比較喜歡貓而不是狗。",
        "answer": "prefer",
        "id": "prefer"
      },
      {
        "word": "predict",
        "pos": "v.",
        "definition": "預測",
        "sentence": "Can you _____ the weather?",
        "translation": "你能預測天氣嗎？",
        "answer": "predict",
        "id": "predict"
      },
      {
        "word": "principal",
        "pos": "n.",
        "definition": "校長",
        "sentence": "The _____ gave a speech.",
        "translation": "校長發表了演講。",
        "answer": "principal",
        "id": "principal"
      },
      {
        "word": "progress",
        "pos": "n.",
        "definition": "進步",
        "sentence": "She made great _____ in math.",
        "translation": "她在數學上取得了很大進步。",
        "answer": "progress",
        "id": "progress"
      },
      {
        "word": "project",
        "pos": "n.",
        "definition": "計劃；作品",
        "sentence": "We finished the science _____.",
        "translation": "我們完成了科學作業。",
        "answer": "project",
        "id": "project"
      },
      {
        "word": "pronounce",
        "pos": "v.",
        "definition": "發音",
        "sentence": "How do you _____ this word?",
        "translation": "這個單詞怎麼發音？",
        "answer": "pronounce",
        "id": "pronounce"
      },
      {
        "word": "proper",
        "pos": "adj.",
        "definition": "適當的",
        "sentence": "Use _____ grammar in your writing.",
        "translation": "在寫作中使用正確的語法。",
        "answer": "proper",
        "id": "proper"
      },
      {
        "word": "property",
        "pos": "n.",
        "definition": "財產",
        "sentence": "This is my _____ .",
        "translation": "這是我的財產。",
        "answer": "property",
        "id": "property"
      },
      {
        "word": "probably",
        "pos": "adv.",
        "definition": "可能地",
        "sentence": "She will _____ be late.",
        "translation": "她可能會遲到。",
        "answer": "probably",
        "id": "probably"
      },
      {
        "word": "precious",
        "pos": "adj.",
        "definition": "珍貴的",
        "sentence": "Time is _____.",
        "translation": "時間是珍貴的。",
        "answer": "precious",
        "id": "precious"
      },
      {
        "word": "president",
        "pos": "n.",
        "definition": "總統；會長",
        "sentence": "He is the _____ of the company.",
        "translation": "他是公司的會長。",
        "answer": "president",
        "id": "president"
      },
      {
        "word": "professor",
        "pos": "n.",
        "definition": "教授",
        "sentence": "The _____ gave an interesting lecture.",
        "translation": "教授做了一個有趣的講座。",
        "answer": "professor",
        "id": "professor"
      },
      {
        "word": "program",
        "pos": "n.",
        "definition": "節目；程式",
        "sentence": "What _____ are you watching?",
        "translation": "你在看什麼節目？",
        "answer": "program",
        "id": "program"
      },
      {
        "word": "prank",
        "pos": "n.",
        "definition": "惡作劇",
        "sentence": "He played a _____ on his friend.",
        "translation": "他對朋友惡作劇。",
        "answer": "prank",
        "id": "prank"
      }
    ]
  },
  {
    "id": "sc-sk-blend",
    "title": "sc- / sk- Blend",
    "sourceHeading": "sc- / sk- Blend",
    "group": "Blends",
    "items": [
      {
        "word": "school",
        "pos": "n.",
        "definition": "學校",
        "sentence": "I go to _____ every day.",
        "translation": "我每天上學。",
        "answer": "school",
        "id": "school"
      },
      {
        "word": "score",
        "pos": "n./v.",
        "definition": "得分",
        "sentence": "What is the final _____?",
        "translation": "最後的得分是多少？",
        "answer": "score",
        "id": "score"
      },
      {
        "word": "scale",
        "pos": "n.",
        "definition": "秤；刻度",
        "sentence": "Put the fruit on the _____.",
        "translation": "把水果放在秤上。",
        "answer": "scale",
        "id": "scale"
      },
      {
        "word": "scan",
        "pos": "v.",
        "definition": "掃描",
        "sentence": "The doctor will _____ my brain.",
        "translation": "醫生將掃描我的大腦。",
        "answer": "scan",
        "id": "scan"
      },
      {
        "word": "scare",
        "pos": "v.",
        "definition": "嚇唬",
        "sentence": "Don't _____ the dog.",
        "translation": "不要嚇狗。",
        "answer": "scare",
        "id": "scare"
      },
      {
        "word": "scarf",
        "pos": "n.",
        "definition": "圍巾",
        "sentence": "She wears a red _____ in winter.",
        "translation": "她冬天戴紅色圍巾。",
        "answer": "scarf",
        "id": "scarf"
      },
      {
        "word": "scatter",
        "pos": "v.",
        "definition": "散佈",
        "sentence": "The wind _____ ed the leaves.",
        "translation": "風把樹葉散佈各處。",
        "answer": "scatter",
        "id": "scatter"
      },
      {
        "word": "scene",
        "pos": "n.",
        "definition": "場景",
        "sentence": "The last _____ of the movie was sad.",
        "translation": "電影的最後一幕很悲傷。",
        "answer": "scene",
        "id": "scene"
      },
      {
        "word": "science",
        "pos": "n.",
        "definition": "科學",
        "sentence": "_____ class is my favorite.",
        "translation": "科學課是我最喜歡的。",
        "answer": "science",
        "id": "science"
      },
      {
        "word": "scoop",
        "pos": "n./v.",
        "definition": "勺；舀",
        "sentence": "Give me a _____ of ice cream.",
        "translation": "給我一勺冰淇淋。",
        "answer": "scoop",
        "id": "scoop"
      },
      {
        "word": "scrub",
        "pos": "v.",
        "definition": "擦洗",
        "sentence": "Please _____ the floor clean.",
        "translation": "請把地板擦洗乾淨。",
        "answer": "scrub",
        "id": "scrub"
      },
      {
        "word": "skin",
        "pos": "n.",
        "definition": "皮膚",
        "sentence": "Protect your _____ from the sun.",
        "translation": "保護你的皮膚免受陽光照射。",
        "answer": "skin",
        "id": "skin"
      },
      {
        "word": "skip",
        "pos": "v.",
        "definition": "跳躍；略過",
        "sentence": "The kids like to _____ rope.",
        "translation": "孩子們喜歡跳繩。",
        "answer": "skip",
        "id": "skip"
      },
      {
        "word": "sky",
        "pos": "n.",
        "definition": "天空",
        "sentence": "The _____ is clear and blue today.",
        "translation": "今天天空晴朗湛藍。",
        "answer": "sky",
        "id": "sky"
      },
      {
        "word": "skill",
        "pos": "n.",
        "definition": "技能",
        "sentence": "Reading is an important _____.",
        "translation": "閱讀是一項重要技能。",
        "answer": "skill",
        "id": "skill"
      },
      {
        "word": "skull",
        "pos": "n.",
        "definition": "頭骨",
        "sentence": "The pirate flag shows a _____.",
        "translation": "海盗旗上顯示著頭骨。",
        "answer": "skull",
        "id": "skull"
      },
      {
        "word": "skeleton",
        "pos": "n.",
        "definition": "骨架",
        "sentence": "We saw a dinosaur _____ at the museum.",
        "translation": "我們在博物館看到了恐龍骨架。",
        "answer": "skeleton",
        "id": "skeleton"
      },
      {
        "word": "skate",
        "pos": "v.",
        "definition": "溜冰",
        "sentence": "She can _____ very fast.",
        "translation": "她溜冰溜得很快。",
        "answer": "skate",
        "id": "skate"
      },
      {
        "word": "sketch",
        "pos": "n./v.",
        "definition": "速寫",
        "sentence": "He made a quick _____ of the building.",
        "translation": "他快速地速寫了那棟建築。",
        "answer": "sketch",
        "id": "sketch"
      },
      {
        "word": "ski",
        "pos": "v.",
        "definition": "滑雪",
        "sentence": "We went _____ing in the mountains.",
        "translation": "我們去山上滑雪。",
        "answer": "ski",
        "id": "ski"
      },
      {
        "word": "skirt",
        "pos": "n.",
        "definition": "裙子",
        "sentence": "She is wearing a blue _____.",
        "translation": "她穿著藍色裙子。",
        "answer": "skirt",
        "id": "skirt"
      },
      {
        "word": "skit",
        "pos": "n.",
        "definition": "短劇",
        "sentence": "The class performed a funny _____.",
        "translation": "全班表演了一個有趣的短劇。",
        "answer": "skit",
        "id": "skit"
      },
      {
        "word": "skeptic",
        "pos": "n.",
        "definition": "懷疑者",
        "sentence": "He is a _____ about magic.",
        "translation": "他對魔術持懷疑態度。",
        "answer": "skeptic",
        "id": "skeptic"
      },
      {
        "word": "skilled",
        "pos": "adj.",
        "definition": "熟練的",
        "sentence": "She is a _____ painter.",
        "translation": "她是一位熟練的畫家。",
        "answer": "skilled",
        "id": "skilled"
      },
      {
        "word": "skewer",
        "pos": "n.",
        "definition": "烤肉串",
        "sentence": "Put the meat on the _____.",
        "translation": "把肉穿在烤肉串上。",
        "answer": "skewer",
        "id": "skewer"
      },
      {
        "word": "scamp",
        "pos": "n.",
        "definition": "淘氣鬼",
        "sentence": "He is a little _____ !",
        "translation": "他是個小淘氣鬼！",
        "answer": "scamp",
        "id": "scamp"
      },
      {
        "word": "scalp",
        "pos": "n.",
        "definition": "頭皮",
        "sentence": "Shampoo keeps your _____ clean.",
        "translation": "洗髮精讓你的頭皮保持清潔。",
        "answer": "scalp",
        "id": "scalp"
      },
      {
        "word": "scold",
        "pos": "v.",
        "definition": "責罵",
        "sentence": "Don't _____ the child too harshly.",
        "translation": "不要太嚴厲地責罵孩子。",
        "answer": "scold",
        "id": "scold"
      },
      {
        "word": "scorch",
        "pos": "v.",
        "definition": "燒焦",
        "sentence": "The hot pan _____ ed the cloth.",
        "translation": "熱鍋燒焦了布料。",
        "answer": "scorch",
        "id": "scorch"
      },
      {
        "word": "skeptical",
        "pos": "adj.",
        "definition": "懷疑的",
        "sentence": "I am _____ about that claim.",
        "translation": "我對那個說法持懷疑態度。",
        "answer": "skeptical",
        "id": "skeptical"
      }
    ]
  },
  {
    "id": "scr-blend",
    "title": "scr- Blend",
    "sourceHeading": "scr- Blend",
    "group": "Blends",
    "items": [
      {
        "word": "screen",
        "pos": "n.",
        "definition": "螢幕",
        "sentence": "Don't sit too close to the _____.",
        "translation": "不要坐得離螢幕太近。",
        "answer": "screen",
        "id": "screen"
      },
      {
        "word": "scratch",
        "pos": "v./n.",
        "definition": "抓；刮",
        "sentence": "The cat _____ ed the sofa.",
        "translation": "貓抓了沙發。",
        "answer": "scratch",
        "id": "scratch"
      },
      {
        "word": "scream",
        "pos": "v.",
        "definition": "尖叫",
        "sentence": "She _____ ed when she saw the spider.",
        "translation": "她看到蜘蛛時尖叫了。",
        "answer": "scream",
        "id": "scream"
      },
      {
        "word": "scroll",
        "pos": "v.",
        "definition": "滾動；捲軸",
        "sentence": "_____ down to see more.",
        "translation": "向下滾動查看更多。",
        "answer": "scroll",
        "id": "scroll"
      },
      {
        "word": "screw",
        "pos": "n.",
        "definition": "螺絲",
        "sentence": "Tighten the _____ with a screwdriver.",
        "translation": "用螺絲刀鎖緊螺絲。",
        "answer": "screw",
        "id": "screw"
      },
      {
        "word": "script",
        "pos": "n.",
        "definition": "劇本",
        "sentence": "The actor read the _____ carefully.",
        "translation": "演員仔細閱讀劇本。",
        "answer": "script",
        "id": "script"
      },
      {
        "word": "scrub",
        "pos": "v.",
        "definition": "用力擦洗",
        "sentence": "_____ your hands well with soap.",
        "translation": "用肥皂用力搓洗雙手。",
        "answer": "scrub",
        "id": "scrub"
      },
      {
        "word": "scrape",
        "pos": "v.",
        "definition": "刮；擦傷",
        "sentence": "Be careful not to _____ your knee.",
        "translation": "小心不要擦傷膝蓋。",
        "answer": "scrape",
        "id": "scrape"
      },
      {
        "word": "scrap",
        "pos": "n.",
        "definition": "碎片；廢料",
        "sentence": "He collected _____ metal.",
        "translation": "他收集廢金屬。",
        "answer": "scrap",
        "id": "scrap"
      },
      {
        "word": "scrutiny",
        "pos": "n.",
        "definition": "仔細檢視",
        "sentence": "The plan was under close _____.",
        "translation": "計劃受到仔細審查。",
        "answer": "scrutiny",
        "id": "scrutiny"
      },
      {
        "word": "scramble",
        "pos": "v.",
        "definition": "爬；炒",
        "sentence": "She _____ d eggs for breakfast.",
        "translation": "她為早餐炒了雞蛋。",
        "answer": "scramble",
        "id": "scramble"
      },
      {
        "word": "scrunch",
        "pos": "v.",
        "definition": "壓皺",
        "sentence": "She _____ ed up the paper and threw it.",
        "translation": "她把紙揉皺了扔掉。",
        "answer": "scrunch",
        "id": "scrunch"
      },
      {
        "word": "scrawl",
        "pos": "v.",
        "definition": "潦草書寫",
        "sentence": "He _____ ed a note on the paper.",
        "translation": "他在紙上潦草地寫了一張便條。",
        "answer": "scrawl",
        "id": "scrawl"
      },
      {
        "word": "screech",
        "pos": "v.",
        "definition": "尖叫；刺耳聲",
        "sentence": "The car _____ ed to a stop.",
        "translation": "汽車發出刺耳的聲音停了下來。",
        "answer": "screech",
        "id": "screech"
      },
      {
        "word": "screwdriver",
        "pos": "n.",
        "definition": "螺絲刀",
        "sentence": "I need a _____ to fix this.",
        "translation": "我需要一把螺絲刀來修這個。",
        "answer": "screwdriver",
        "id": "screwdriver"
      },
      {
        "word": "screenplay",
        "pos": "n.",
        "definition": "劇本",
        "sentence": "He wrote the _____ for the movie.",
        "translation": "他為這部電影寫了劇本。",
        "answer": "screenplay",
        "id": "screenplay"
      },
      {
        "word": "scrimmage",
        "pos": "n.",
        "definition": "練習賽",
        "sentence": "The team had a _____ before the big game.",
        "translation": "球隊在大比賽前進行了練習賽。",
        "answer": "scrimmage",
        "id": "scrimmage"
      },
      {
        "word": "scripture",
        "pos": "n.",
        "definition": "聖經",
        "sentence": "They read the _____ every morning.",
        "translation": "他們每天早上誦讀聖經。",
        "answer": "scripture",
        "id": "scripture"
      },
      {
        "word": "scroll",
        "pos": "n.",
        "definition": "卷軸",
        "sentence": "The ancient _____ was found in the cave.",
        "translation": "古代卷軸在洞穴中被發現。",
        "answer": "scroll",
        "id": "scroll-2"
      },
      {
        "word": "scribble",
        "pos": "v.",
        "definition": "潦草地寫",
        "sentence": "Don't _____ on the wall.",
        "translation": "不要在牆上亂塗亂畫。",
        "answer": "scribble",
        "id": "scribble"
      },
      {
        "word": "scrappy",
        "pos": "adj.",
        "definition": "好鬥的",
        "sentence": "He is a _____ little fighter.",
        "translation": "他是個好鬥的小戰士。",
        "answer": "scrappy",
        "id": "scrappy"
      },
      {
        "word": "scrawny",
        "pos": "adj.",
        "definition": "瘦骨嶙峋的",
        "sentence": "The stray cat was very _____.",
        "translation": "那隻流浪貓非常瘦骨嶙峋。",
        "answer": "scrawny",
        "id": "scrawny"
      },
      {
        "word": "scrounge",
        "pos": "v.",
        "definition": "搜尋；蹭",
        "sentence": "He always _____ s food from others.",
        "translation": "他總是蹭別人的食物。",
        "answer": "scrounge",
        "id": "scrounge"
      },
      {
        "word": "scruple",
        "pos": "n.",
        "definition": "顧慮",
        "sentence": "He had no _____ s about lying.",
        "translation": "他毫不顧慮地說謊。",
        "answer": "scruple",
        "id": "scruple"
      },
      {
        "word": "scrutinize",
        "pos": "v.",
        "definition": "細察",
        "sentence": "She _____ d every word of the contract.",
        "translation": "她仔細審查合約的每一個字。",
        "answer": "scrutinize",
        "id": "scrutinize"
      },
      {
        "word": "scream",
        "pos": "n.",
        "definition": "尖叫聲",
        "sentence": "We heard a loud _____ from outside.",
        "translation": "我們聽到外面有一聲大叫。",
        "answer": "scream",
        "id": "scream-2"
      },
      {
        "word": "scratchy",
        "pos": "adj.",
        "definition": "粗糙的",
        "sentence": "This wool sweater is very _____.",
        "translation": "這件羊毛毛衣很粗糙。",
        "answer": "scratchy",
        "id": "scratchy"
      },
      {
        "word": "scrumptious",
        "pos": "adj.",
        "definition": "美味的",
        "sentence": "The cake is absolutely _____.",
        "translation": "這個蛋糕絕對美味。",
        "answer": "scrumptious",
        "id": "scrumptious"
      },
      {
        "word": "scroll bar",
        "pos": "n.",
        "definition": "捲軸條",
        "sentence": "Use the _____ _____ to move the page.",
        "translation": "用捲軸條移動頁面。",
        "answer": "scroll bar",
        "id": "scroll-bar"
      },
      {
        "word": "screenplay",
        "pos": "n.",
        "definition": "電影劇本",
        "sentence": "The _____ won an award.",
        "translation": "這個電影劇本獲獎了。",
        "answer": "screenplay",
        "id": "screenplay-2"
      }
    ]
  },
  {
    "id": "sl-blend",
    "title": "sl- Blend",
    "sourceHeading": "sl- Blend",
    "group": "Blends",
    "items": [
      {
        "word": "sleep",
        "pos": "v.",
        "definition": "睡覺",
        "sentence": "I _____ eight hours every night.",
        "translation": "我每晚睡八小時。",
        "answer": "sleep",
        "id": "sleep"
      },
      {
        "word": "slow",
        "pos": "adj.",
        "definition": "慢的",
        "sentence": "The turtle is very _____.",
        "translation": "烏龜非常慢。",
        "answer": "slow",
        "id": "slow"
      },
      {
        "word": "slide",
        "pos": "v./n.",
        "definition": "滑；滑梯",
        "sentence": "The children love the _____ in the park.",
        "translation": "孩子們喜歡公園裡的滑梯。",
        "answer": "slide",
        "id": "slide"
      },
      {
        "word": "slim",
        "pos": "adj.",
        "definition": "苗條的",
        "sentence": "She is tall and _____.",
        "translation": "她又高又苗條。",
        "answer": "slim",
        "id": "slim"
      },
      {
        "word": "slap",
        "pos": "v.",
        "definition": "掌摑",
        "sentence": "Don't _____ your friends.",
        "translation": "不要掌摑你的朋友。",
        "answer": "slap",
        "id": "slap"
      },
      {
        "word": "slam",
        "pos": "v.",
        "definition": "猛力關閉",
        "sentence": "Don't _____ the door.",
        "translation": "不要猛力甩門。",
        "answer": "slam",
        "id": "slam"
      },
      {
        "word": "slip",
        "pos": "v.",
        "definition": "滑倒",
        "sentence": "Be careful not to _____ on the wet floor.",
        "translation": "小心不要在濕地板上滑倒。",
        "answer": "slip",
        "id": "slip"
      },
      {
        "word": "sled",
        "pos": "n.",
        "definition": "雪橇",
        "sentence": "We ride a _____ down the hill.",
        "translation": "我們乘雪橇滑下山坡。",
        "answer": "sled",
        "id": "sled"
      },
      {
        "word": "sleet",
        "pos": "n.",
        "definition": "凍雨",
        "sentence": "It is snowing and _____ing outside.",
        "translation": "外面正在下雪和凍雨。",
        "answer": "sleet",
        "id": "sleet"
      },
      {
        "word": "sleeve",
        "pos": "n.",
        "definition": "袖子",
        "sentence": "Roll up your _____s before washing.",
        "translation": "洗東西前捲起你的袖子。",
        "answer": "sleeve",
        "id": "sleeve"
      },
      {
        "word": "slight",
        "pos": "adj.",
        "definition": "輕微的",
        "sentence": "I have a _____ headache today.",
        "translation": "今天我有輕微的頭痛。",
        "answer": "slight",
        "id": "slight"
      },
      {
        "word": "slope",
        "pos": "n.",
        "definition": "斜坡",
        "sentence": "The road goes up a steep _____.",
        "translation": "道路沿著陡峭的斜坡向上。",
        "answer": "slope",
        "id": "slope"
      },
      {
        "word": "slot",
        "pos": "n.",
        "definition": "縫隙；時段",
        "sentence": "Put the coin in the _____.",
        "translation": "把硬幣投入縫隙。",
        "answer": "slot",
        "id": "slot"
      },
      {
        "word": "sloth",
        "pos": "n.",
        "definition": "樹懶",
        "sentence": "A _____ moves very slowly.",
        "translation": "樹懶移動得非常慢。",
        "answer": "sloth",
        "id": "sloth"
      },
      {
        "word": "slug",
        "pos": "n.",
        "definition": "鼻涕蟲",
        "sentence": "There is a _____ in the garden.",
        "translation": "花園裡有一隻鼻涕蟲。",
        "answer": "slug",
        "id": "slug"
      },
      {
        "word": "slum",
        "pos": "n.",
        "definition": "貧民窟",
        "sentence": "The government built new homes in the _____.",
        "translation": "政府在貧民窟建造了新房子。",
        "answer": "slum",
        "id": "slum"
      },
      {
        "word": "slurp",
        "pos": "v.",
        "definition": "發出吸溜聲",
        "sentence": "It is rude to _____ your noodles.",
        "translation": "吸溜地吃麵條是不禮貌的。",
        "answer": "slurp",
        "id": "slurp"
      },
      {
        "word": "sly",
        "pos": "adj.",
        "definition": "狡猾的",
        "sentence": "The fox is _____ in the story.",
        "translation": "故事裡的狐狸很狡猾。",
        "answer": "sly",
        "id": "sly"
      },
      {
        "word": "slogan",
        "pos": "n.",
        "definition": "標語",
        "sentence": "Every team has a _____ .",
        "translation": "每個隊伍都有標語。",
        "answer": "slogan",
        "id": "slogan"
      },
      {
        "word": "sloppy",
        "pos": "adj.",
        "definition": "邋遢的",
        "sentence": "Don't be _____ with your work.",
        "translation": "做事不要邋遢。",
        "answer": "sloppy",
        "id": "sloppy"
      },
      {
        "word": "slightly",
        "pos": "adv.",
        "definition": "稍微地",
        "sentence": "Turn the volume _____ higher.",
        "translation": "把音量調高一點點。",
        "answer": "slightly",
        "id": "slightly"
      },
      {
        "word": "slender",
        "pos": "adj.",
        "definition": "細長的",
        "sentence": "She has _____ fingers.",
        "translation": "她有纖細的手指。",
        "answer": "slender",
        "id": "slender"
      },
      {
        "word": "slice",
        "pos": "n./v.",
        "definition": "片；切片",
        "sentence": "Can I have a _____ of cake?",
        "translation": "我可以吃一片蛋糕嗎？",
        "answer": "slice",
        "id": "slice"
      },
      {
        "word": "sling",
        "pos": "n.",
        "definition": "吊帶",
        "sentence": "He wore his arm in a _____ .",
        "translation": "他用吊帶吊著手臂。",
        "answer": "sling",
        "id": "sling"
      },
      {
        "word": "slippery",
        "pos": "adj.",
        "definition": "滑溜的",
        "sentence": "The floor is _____ when wet.",
        "translation": "地板濕的時候很滑。",
        "answer": "slippery",
        "id": "slippery"
      },
      {
        "word": "sliver",
        "pos": "n.",
        "definition": "薄片",
        "sentence": "She cut a _____ of cheese.",
        "translation": "她切了一薄片起司。",
        "answer": "sliver",
        "id": "sliver"
      },
      {
        "word": "slope",
        "pos": "n.",
        "definition": "山坡",
        "sentence": "We skied down the _____.",
        "translation": "我們滑雪下山坡。",
        "answer": "slope",
        "id": "slope-2"
      },
      {
        "word": "sloppy",
        "pos": "adj.",
        "definition": "草率的",
        "sentence": "His handwriting is very _____.",
        "translation": "他的書寫非常草率。",
        "answer": "sloppy",
        "id": "sloppy-2"
      },
      {
        "word": "sliver",
        "pos": "n.",
        "definition": "碎片",
        "sentence": "There is a _____ of glass on the floor.",
        "translation": "地板上有一片玻璃碎片。",
        "answer": "sliver",
        "id": "sliver-2"
      },
      {
        "word": "slogan",
        "pos": "n.",
        "definition": "口號",
        "sentence": "Their _____ is 'Work hard, play hard'.",
        "translation": "他們的口號是「努力工作，盡情玩樂」。",
        "answer": "slogan",
        "id": "slogan-2"
      }
    ]
  },
  {
    "id": "sm-blend",
    "title": "sm- Blend",
    "sourceHeading": "sm- Blend",
    "group": "Blends",
    "items": [
      {
        "word": "smile",
        "pos": "v./n.",
        "definition": "微笑",
        "sentence": "Give me a big _____!",
        "translation": "給我一個大大的微笑！",
        "answer": "smile",
        "id": "smile"
      },
      {
        "word": "small",
        "pos": "adj.",
        "definition": "小的",
        "sentence": "The kitten is very _____.",
        "translation": "這隻小貓非常小。",
        "answer": "small",
        "id": "small"
      },
      {
        "word": "smart",
        "pos": "adj.",
        "definition": "聰明的",
        "sentence": "She is a _____ student.",
        "translation": "她是個聰明的學生。",
        "answer": "smart",
        "id": "smart"
      },
      {
        "word": "smell",
        "pos": "v./n.",
        "definition": "聞；氣味",
        "sentence": "The flowers _____ wonderful.",
        "translation": "這些花聞起來很香。",
        "answer": "smell",
        "id": "smell"
      },
      {
        "word": "smoke",
        "pos": "n./v.",
        "definition": "煙；抽煙",
        "sentence": "Don't _____ in the classroom.",
        "translation": "不要在教室裡抽菸。",
        "answer": "smoke",
        "id": "smoke"
      },
      {
        "word": "smooth",
        "pos": "adj.",
        "definition": "光滑的",
        "sentence": "The baby's skin is very _____.",
        "translation": "嬰兒的皮膚非常光滑。",
        "answer": "smooth",
        "id": "smooth"
      },
      {
        "word": "smash",
        "pos": "v.",
        "definition": "打碎",
        "sentence": "The ball _____ ed the window.",
        "translation": "球打碎了窗戶。",
        "answer": "smash",
        "id": "smash"
      },
      {
        "word": "smear",
        "pos": "v.",
        "definition": "塗抹；污跡",
        "sentence": "Don't _____ mud on the wall.",
        "translation": "不要在牆上塗抹泥巴。",
        "answer": "smear",
        "id": "smear"
      },
      {
        "word": "smith",
        "pos": "n.",
        "definition": "鐵匠",
        "sentence": "The black_____ makes horseshoes.",
        "translation": "鐵匠製作馬蹄鐵。",
        "answer": "smith",
        "id": "smith"
      },
      {
        "word": "smog",
        "pos": "n.",
        "definition": "煙霧",
        "sentence": "The city has a lot of _____ pollution.",
        "translation": "這個城市有很多煙霧污染。",
        "answer": "smog",
        "id": "smog"
      },
      {
        "word": "smuggle",
        "pos": "v.",
        "definition": "走私",
        "sentence": "It is illegal to _____ animals.",
        "translation": "走私動物是違法的。",
        "answer": "smuggle",
        "id": "smuggle"
      },
      {
        "word": "smudge",
        "pos": "n.",
        "definition": "污漬",
        "sentence": "There is a _____ on your cheek.",
        "translation": "你臉上有一個污漬。",
        "answer": "smudge",
        "id": "smudge"
      },
      {
        "word": "smother",
        "pos": "v.",
        "definition": "悶熄；覆蓋",
        "sentence": "She _____ ed the fire with a blanket.",
        "translation": "她用毯子蓋滅了火。",
        "answer": "smother",
        "id": "smother"
      },
      {
        "word": "smug",
        "pos": "adj.",
        "definition": "自鳴得意的",
        "sentence": "Don't look so _____ !",
        "translation": "不要那麼自鳴得意！",
        "answer": "smug",
        "id": "smug"
      },
      {
        "word": "smack",
        "pos": "v.",
        "definition": "啪的一聲打",
        "sentence": "She _____ ed her lips after eating.",
        "translation": "她吃完後啪啪嘴唇。",
        "answer": "smack",
        "id": "smack"
      },
      {
        "word": "smartly",
        "pos": "adv.",
        "definition": "整齊地",
        "sentence": "He is dressed _____.",
        "translation": "他穿著整齊。",
        "answer": "smartly",
        "id": "smartly"
      },
      {
        "word": "smiley",
        "pos": "adj.",
        "definition": "笑臉的",
        "sentence": "She drew a _____ face.",
        "translation": "她畫了一個笑臉。",
        "answer": "smiley",
        "id": "smiley"
      },
      {
        "word": "smolder",
        "pos": "v.",
        "definition": "悶燒",
        "sentence": "The campfire was still _____ing.",
        "translation": "營火還在悶燒。",
        "answer": "smolder",
        "id": "smolder"
      },
      {
        "word": "smooth",
        "pos": "v.",
        "definition": "使平滑",
        "sentence": "She _____ ed the wrinkles from the cloth.",
        "translation": "她撫平了布上的皺紋。",
        "answer": "smooth",
        "id": "smooth-2"
      },
      {
        "word": "smattering",
        "pos": "n.",
        "definition": "一點點",
        "sentence": "He has a _____ of French.",
        "translation": "他懂一點點法語。",
        "answer": "smattering",
        "id": "smattering"
      },
      {
        "word": "smear",
        "pos": "n.",
        "definition": "污跡",
        "sentence": "There is a _____ of paint on the floor.",
        "translation": "地板上有一道油漆污跡。",
        "answer": "smear",
        "id": "smear-2"
      },
      {
        "word": "smash",
        "pos": "n.",
        "definition": "打碎聲",
        "sentence": "We heard a loud _____ .",
        "translation": "我們聽到一聲巨響。",
        "answer": "smash",
        "id": "smash-2"
      },
      {
        "word": "smelt",
        "pos": "v.",
        "definition": "熔化提煉",
        "sentence": "They _____ the iron at the factory.",
        "translation": "他們在工廠熔煉鐵。",
        "answer": "smelt",
        "id": "smelt"
      },
      {
        "word": "smithy",
        "pos": "n.",
        "definition": "鐵匠鋪",
        "sentence": "We visited the old _____ in the museum.",
        "translation": "我們參觀了博物館裡的舊鐵匠鋪。",
        "answer": "smithy",
        "id": "smithy"
      },
      {
        "word": "smock",
        "pos": "n.",
        "definition": "罩衫",
        "sentence": "The artist wore a _____ to protect her clothes.",
        "translation": "藝術家穿著罩衫保護衣服。",
        "answer": "smock",
        "id": "smock"
      },
      {
        "word": "smugly",
        "pos": "adv.",
        "definition": "自得地",
        "sentence": "He smiled _____ after winning.",
        "translation": "贏得勝利後他自得地笑著。",
        "answer": "smugly",
        "id": "smugly"
      },
      {
        "word": "smitten",
        "pos": "adj.",
        "definition": "著迷的",
        "sentence": "He is _____ with her.",
        "translation": "他為她著迷。",
        "answer": "smitten",
        "id": "smitten"
      },
      {
        "word": "smattering",
        "pos": "n.",
        "definition": "少量",
        "sentence": "There is a _____ of snow on the ground.",
        "translation": "地上有少許積雪。",
        "answer": "smattering",
        "id": "smattering-2"
      },
      {
        "word": "smokescreen",
        "pos": "n.",
        "definition": "煙幕",
        "sentence": "The magician used a _____ in the trick.",
        "translation": "魔術師在戲法中使用了煙幕。",
        "answer": "smokescreen",
        "id": "smokescreen"
      },
      {
        "word": "smorgasbord",
        "pos": "n.",
        "definition": "自助餐",
        "sentence": "They served a _____ at the party.",
        "translation": "他們在派對上提供了自助餐。",
        "answer": "smorgasbord",
        "id": "smorgasbord"
      }
    ]
  },
  {
    "id": "sn-blend",
    "title": "sn- Blend",
    "sourceHeading": "sn- Blend",
    "group": "Blends",
    "items": [
      {
        "word": "snow",
        "pos": "n./v.",
        "definition": "雪；下雪",
        "sentence": "Look at the _____ outside!",
        "translation": "看外面的雪！",
        "answer": "snow",
        "id": "snow"
      },
      {
        "word": "snake",
        "pos": "n.",
        "definition": "蛇",
        "sentence": "There is a _____ in the grass.",
        "translation": "草地裡有一條蛇。",
        "answer": "snake",
        "id": "snake"
      },
      {
        "word": "snack",
        "pos": "n.",
        "definition": "點心",
        "sentence": "Let's have a _____ after school.",
        "translation": "放學後我們來吃個點心吧。",
        "answer": "snack",
        "id": "snack"
      },
      {
        "word": "snail",
        "pos": "n.",
        "definition": "蝸牛",
        "sentence": "The _____ moves very slowly.",
        "translation": "蝸牛移動得非常慢。",
        "answer": "snail",
        "id": "snail"
      },
      {
        "word": "snap",
        "pos": "v.",
        "definition": "折斷；快照",
        "sentence": "He _____ ped his fingers.",
        "translation": "他打了個響指。",
        "answer": "snap",
        "id": "snap"
      },
      {
        "word": "sneaker",
        "pos": "n.",
        "definition": "運動鞋",
        "sentence": "I need new _____s for gym class.",
        "translation": "我需要新的運動鞋上體育課。",
        "answer": "sneaker",
        "id": "sneaker"
      },
      {
        "word": "sneeze",
        "pos": "v.",
        "definition": "打噴嚏",
        "sentence": "Cover your mouth when you _____.",
        "translation": "打噴嚏時要摀住嘴巴。",
        "answer": "sneeze",
        "id": "sneeze"
      },
      {
        "word": "sniff",
        "pos": "v.",
        "definition": "用鼻子聞",
        "sentence": "The dog _____ ed the food.",
        "translation": "狗聞了聞食物。",
        "answer": "sniff",
        "id": "sniff"
      },
      {
        "word": "snore",
        "pos": "v.",
        "definition": "打鼾",
        "sentence": "My dad _____ s loudly at night.",
        "translation": "我爸爸晚上打鼾很大聲。",
        "answer": "snore",
        "id": "snore"
      },
      {
        "word": "snob",
        "pos": "n.",
        "definition": "勢利眼",
        "sentence": "Don't be a _____.",
        "translation": "不要做個勢利眼。",
        "answer": "snob",
        "id": "snob"
      },
      {
        "word": "snooze",
        "pos": "v.",
        "definition": "小睡",
        "sentence": "She _____ d for ten minutes.",
        "translation": "她小睡了十分鐘。",
        "answer": "snooze",
        "id": "snooze"
      },
      {
        "word": "snoop",
        "pos": "v.",
        "definition": "窺探",
        "sentence": "Don't _____ through my things.",
        "translation": "不要窺探我的東西。",
        "answer": "snoop",
        "id": "snoop"
      },
      {
        "word": "snout",
        "pos": "n.",
        "definition": "動物的鼻吻",
        "sentence": "The pig has a pink _____.",
        "translation": "豬有一個粉紅色的鼻吻。",
        "answer": "snout",
        "id": "snout"
      },
      {
        "word": "snuggle",
        "pos": "v.",
        "definition": "依偎",
        "sentence": "The cat _____ d next to me.",
        "translation": "貓依偎在我旁邊。",
        "answer": "snuggle",
        "id": "snuggle"
      },
      {
        "word": "snide",
        "pos": "adj.",
        "definition": "諷刺的",
        "sentence": "He made a _____ remark.",
        "translation": "他發表了一個諷刺的言論。",
        "answer": "snide",
        "id": "snide"
      },
      {
        "word": "sneak",
        "pos": "v.",
        "definition": "偷偷溜走",
        "sentence": "Don't _____ out of class.",
        "translation": "不要偷偷溜出教室。",
        "answer": "sneak",
        "id": "sneak"
      },
      {
        "word": "snag",
        "pos": "n.",
        "definition": "小問題",
        "sentence": "We ran into a _____ with our plan.",
        "translation": "我們的計劃遇到了小問題。",
        "answer": "snag",
        "id": "snag"
      },
      {
        "word": "sneer",
        "pos": "v.",
        "definition": "嘲笑",
        "sentence": "Don't _____ at others.",
        "translation": "不要嘲笑別人。",
        "answer": "sneer",
        "id": "sneer"
      },
      {
        "word": "snippet",
        "pos": "n.",
        "definition": "片段",
        "sentence": "I heard a _____ of the song.",
        "translation": "我聽到了歌曲的一個片段。",
        "answer": "snippet",
        "id": "snippet"
      },
      {
        "word": "snarl",
        "pos": "v.",
        "definition": "怒吼",
        "sentence": "The dog _____ ed at the stranger.",
        "translation": "狗對陌生人怒吼。",
        "answer": "snarl",
        "id": "snarl"
      },
      {
        "word": "snore",
        "pos": "n.",
        "definition": "鼾聲",
        "sentence": "I could hear his _____ from the next room.",
        "translation": "我能從隔壁房間聽到他的鼾聲。",
        "answer": "snore",
        "id": "snore-2"
      },
      {
        "word": "snowflake",
        "pos": "n.",
        "definition": "雪花",
        "sentence": "Each _____ is unique.",
        "translation": "每片雪花都是獨一無二的。",
        "answer": "snowflake",
        "id": "snowflake"
      },
      {
        "word": "snowball",
        "pos": "n.",
        "definition": "雪球",
        "sentence": "We had a _____ fight.",
        "translation": "我們進行了雪球大戰。",
        "answer": "snowball",
        "id": "snowball"
      },
      {
        "word": "snorkel",
        "pos": "n.",
        "definition": "浮潛管",
        "sentence": "He used a _____ to breathe underwater.",
        "translation": "他用浮潛管在水下呼吸。",
        "answer": "snorkel",
        "id": "snorkel"
      },
      {
        "word": "snappy",
        "pos": "adj.",
        "definition": "敏捷的",
        "sentence": "Give me a _____ answer.",
        "translation": "給我一個乾脆的回答。",
        "answer": "snappy",
        "id": "snappy"
      },
      {
        "word": "snagged",
        "pos": "v.",
        "definition": "被勾住",
        "sentence": "My shirt got _____ on the fence.",
        "translation": "我的衣服被欄杆勾住了。",
        "answer": "snagged",
        "id": "snagged"
      },
      {
        "word": "sneaky",
        "pos": "adj.",
        "definition": "鬼鬼祟祟的",
        "sentence": "That was a _____ trick.",
        "translation": "那是個鬼鬼祟祟的把戲。",
        "answer": "sneaky",
        "id": "sneaky"
      },
      {
        "word": "snowman",
        "pos": "n.",
        "definition": "雪人",
        "sentence": "We built a _____ in the yard.",
        "translation": "我們在院子裡堆了一個雪人。",
        "answer": "snowman",
        "id": "snowman"
      },
      {
        "word": "snowstorm",
        "pos": "n.",
        "definition": "暴風雪",
        "sentence": "There is a _____ warning tonight.",
        "translation": "今晚有暴風雪警報。",
        "answer": "snowstorm",
        "id": "snowstorm"
      },
      {
        "word": "snugly",
        "pos": "adv.",
        "definition": "緊緊地",
        "sentence": "The lid fits _____ on the jar.",
        "translation": "蓋子緊緊地蓋住瓶子。",
        "answer": "snugly",
        "id": "snugly"
      }
    ]
  },
  {
    "id": "sp-blend",
    "title": "sp- Blend",
    "sourceHeading": "sp- Blend",
    "group": "Blends",
    "items": [
      {
        "word": "sport",
        "pos": "n.",
        "definition": "運動",
        "sentence": "My favorite _____ is basketball.",
        "translation": "我最喜歡的運動是籃球。",
        "answer": "sport",
        "id": "sport"
      },
      {
        "word": "speak",
        "pos": "v.",
        "definition": "說話",
        "sentence": "Please _____ slowly.",
        "translation": "請慢慢說。",
        "answer": "speak",
        "id": "speak"
      },
      {
        "word": "speed",
        "pos": "n.",
        "definition": "速度",
        "sentence": "The car drove at high _____.",
        "translation": "汽車以高速行駛。",
        "answer": "speed",
        "id": "speed"
      },
      {
        "word": "spell",
        "pos": "v.",
        "definition": "拼寫",
        "sentence": "Can you _____ your name?",
        "translation": "你能拼寫你的名字嗎？",
        "answer": "spell",
        "id": "spell"
      },
      {
        "word": "spend",
        "pos": "v.",
        "definition": "花費",
        "sentence": "Don't _____ all your money.",
        "translation": "不要花光所有的錢。",
        "answer": "spend",
        "id": "spend"
      },
      {
        "word": "spider",
        "pos": "n.",
        "definition": "蜘蛛",
        "sentence": "There is a _____ on the wall.",
        "translation": "牆上有一隻蜘蛛。",
        "answer": "spider",
        "id": "spider"
      },
      {
        "word": "spin",
        "pos": "v.",
        "definition": "旋轉",
        "sentence": "The top _____ s on the floor.",
        "translation": "陀螺在地板上旋轉。",
        "answer": "spin",
        "id": "spin"
      },
      {
        "word": "spot",
        "pos": "n.",
        "definition": "地點；斑點",
        "sentence": "We found a good _____ for a picnic.",
        "translation": "我們找到了一個野餐的好地點。",
        "answer": "spot",
        "id": "spot"
      },
      {
        "word": "space",
        "pos": "n.",
        "definition": "太空；空間",
        "sentence": "Astronauts travel to _____.",
        "translation": "太空人前往太空旅行。",
        "answer": "space",
        "id": "space"
      },
      {
        "word": "spare",
        "pos": "adj.",
        "definition": "備用的",
        "sentence": "Do you have a _____ pen?",
        "translation": "你有備用的筆嗎？",
        "answer": "spare",
        "id": "spare"
      },
      {
        "word": "spark",
        "pos": "n.",
        "definition": "火花",
        "sentence": "The fire gave off a bright _____.",
        "translation": "火焰發出明亮的火花。",
        "answer": "spark",
        "id": "spark"
      },
      {
        "word": "spawn",
        "pos": "v.",
        "definition": "產卵；引起",
        "sentence": "Fish _____ in clean rivers.",
        "translation": "魚在清澈的河流中產卵。",
        "answer": "spawn",
        "id": "spawn"
      },
      {
        "word": "special",
        "pos": "adj.",
        "definition": "特別的",
        "sentence": "Today is a _____ day.",
        "translation": "今天是個特別的日子。",
        "answer": "special",
        "id": "special"
      },
      {
        "word": "speech",
        "pos": "n.",
        "definition": "演講",
        "sentence": "He gave a great _____ .",
        "translation": "他發表了一篇精彩的演講。",
        "answer": "speech",
        "id": "speech"
      },
      {
        "word": "spill",
        "pos": "v.",
        "definition": "灑出",
        "sentence": "Don't _____ the juice.",
        "translation": "不要把果汁灑出來。",
        "answer": "spill",
        "id": "spill"
      },
      {
        "word": "spine",
        "pos": "n.",
        "definition": "脊椎",
        "sentence": "Sit up straight to protect your _____.",
        "translation": "坐直以保護你的脊椎。",
        "answer": "spine",
        "id": "spine"
      },
      {
        "word": "spiral",
        "pos": "n.",
        "definition": "螺旋形",
        "sentence": "The staircase is a _____ shape.",
        "translation": "樓梯是螺旋形狀。",
        "answer": "spiral",
        "id": "spiral"
      },
      {
        "word": "spirit",
        "pos": "n.",
        "definition": "精神；靈魂",
        "sentence": "She has a kind _____.",
        "translation": "她有一顆善良的心靈。",
        "answer": "spirit",
        "id": "spirit"
      },
      {
        "word": "spit",
        "pos": "v.",
        "definition": "吐",
        "sentence": "Don't _____ on the floor.",
        "translation": "不要在地板上吐口水。",
        "answer": "spit",
        "id": "spit"
      },
      {
        "word": "splash",
        "pos": "v.",
        "definition": "濺水",
        "sentence": "The children _____ ed in the pool.",
        "translation": "孩子們在游泳池裡濺水玩。",
        "answer": "splash",
        "id": "splash"
      },
      {
        "word": "split",
        "pos": "v.",
        "definition": "分裂；劈開",
        "sentence": "Let's _____ the pizza into four pieces.",
        "translation": "我們把披薩分成四塊吧。",
        "answer": "split",
        "id": "split"
      },
      {
        "word": "spoke",
        "pos": "v.",
        "definition": "說（過去式）",
        "sentence": "She _____ to the teacher after class.",
        "translation": "她下課後和老師說話了。",
        "answer": "spoke",
        "id": "spoke"
      },
      {
        "word": "sponge",
        "pos": "n.",
        "definition": "海綿",
        "sentence": "Use a _____ to clean the sink.",
        "translation": "用海綿清洗水槽。",
        "answer": "sponge",
        "id": "sponge"
      },
      {
        "word": "sponsor",
        "pos": "n./v.",
        "definition": "贊助商；贊助",
        "sentence": "The company will _____ our event.",
        "translation": "這家公司將贊助我們的活動。",
        "answer": "sponsor",
        "id": "sponsor"
      },
      {
        "word": "spring",
        "pos": "n.",
        "definition": "春天",
        "sentence": "Flowers bloom in the _____.",
        "translation": "春天鮮花盛開。",
        "answer": "spring",
        "id": "spring"
      },
      {
        "word": "spy",
        "pos": "n./v.",
        "definition": "間諜；監視",
        "sentence": "The _____ gathered secret information.",
        "translation": "間諜收集了秘密資訊。",
        "answer": "spy",
        "id": "spy"
      },
      {
        "word": "spicy",
        "pos": "adj.",
        "definition": "辣的",
        "sentence": "I don't like _____ food.",
        "translation": "我不喜歡辣食。",
        "answer": "spicy",
        "id": "spicy"
      },
      {
        "word": "speech",
        "pos": "n.",
        "definition": "言語",
        "sentence": "Freedom of _____ is important.",
        "translation": "言論自由很重要。",
        "answer": "speech",
        "id": "speech-2"
      },
      {
        "word": "spread",
        "pos": "v.",
        "definition": "傳播；散佈",
        "sentence": "The news _____ quickly.",
        "translation": "消息迅速傳播。",
        "answer": "spread",
        "id": "spread"
      },
      {
        "word": "spur",
        "pos": "n.",
        "definition": "馬刺；激勵",
        "sentence": "The award was a _____ for her to work harder.",
        "translation": "獎項激勵她更加努力。",
        "answer": "spur",
        "id": "spur"
      }
    ]
  },
  {
    "id": "st-blend",
    "title": "st- Blend",
    "sourceHeading": "st- Blend",
    "group": "Blends",
    "items": [
      {
        "word": "star",
        "pos": "n.",
        "definition": "星星",
        "sentence": "I can see a _____ shining brightly.",
        "translation": "我可以看到一顆星星閃閃發光。",
        "answer": "star",
        "id": "star"
      },
      {
        "word": "start",
        "pos": "v.",
        "definition": "開始",
        "sentence": "Let's _____ the lesson now.",
        "translation": "我們現在開始上課吧。",
        "answer": "start",
        "id": "start"
      },
      {
        "word": "stay",
        "pos": "v.",
        "definition": "待；停留",
        "sentence": "Please _____ here and wait.",
        "translation": "請待在這裡等待。",
        "answer": "stay",
        "id": "stay"
      },
      {
        "word": "step",
        "pos": "n./v.",
        "definition": "步驟；步伐",
        "sentence": "Take one _____ at a time.",
        "translation": "一步一步來。",
        "answer": "step",
        "id": "step"
      },
      {
        "word": "stick",
        "pos": "n./v.",
        "definition": "棍子；黏貼",
        "sentence": "This glue will _____ two pieces together.",
        "translation": "這種膠水可以把兩塊黏在一起。",
        "answer": "stick",
        "id": "stick"
      },
      {
        "word": "stone",
        "pos": "n.",
        "definition": "石頭",
        "sentence": "She threw a _____ into the lake.",
        "translation": "她把石頭丟進湖裡。",
        "answer": "stone",
        "id": "stone"
      },
      {
        "word": "stop",
        "pos": "v.",
        "definition": "停止",
        "sentence": "Please _____ talking in class.",
        "translation": "請停止在課堂上說話。",
        "answer": "stop",
        "id": "stop"
      },
      {
        "word": "store",
        "pos": "n.",
        "definition": "商店",
        "sentence": "I bought this at the _____ .",
        "translation": "我在商店買了這個。",
        "answer": "store",
        "id": "store"
      },
      {
        "word": "storm",
        "pos": "n.",
        "definition": "暴風雨",
        "sentence": "There is a _____ coming.",
        "translation": "暴風雨要來了。",
        "answer": "storm",
        "id": "storm"
      },
      {
        "word": "story",
        "pos": "n.",
        "definition": "故事",
        "sentence": "Tell me a bedtime _____.",
        "translation": "給我講一個睡前故事。",
        "answer": "story",
        "id": "story"
      },
      {
        "word": "street",
        "pos": "n.",
        "definition": "街道",
        "sentence": "Look both ways before crossing the _____.",
        "translation": "過馬路前要先看兩邊。",
        "answer": "street",
        "id": "street"
      },
      {
        "word": "strong",
        "pos": "adj.",
        "definition": "強壯的",
        "sentence": "He is very _____ .",
        "translation": "他非常強壯。",
        "answer": "strong",
        "id": "strong"
      },
      {
        "word": "student",
        "pos": "n.",
        "definition": "學生",
        "sentence": "Every _____ needs a pencil.",
        "translation": "每個學生都需要一支鉛筆。",
        "answer": "student",
        "id": "student"
      },
      {
        "word": "study",
        "pos": "v.",
        "definition": "學習；讀書",
        "sentence": "I _____ English every day.",
        "translation": "我每天學習英文。",
        "answer": "study",
        "id": "study"
      },
      {
        "word": "stand",
        "pos": "v.",
        "definition": "站立",
        "sentence": "Please _____ up straight.",
        "translation": "請站直。",
        "answer": "stand",
        "id": "stand"
      },
      {
        "word": "stamp",
        "pos": "n./v.",
        "definition": "郵票；蓋章",
        "sentence": "Put a _____ on the envelope.",
        "translation": "在信封上貼郵票。",
        "answer": "stamp",
        "id": "stamp"
      },
      {
        "word": "stove",
        "pos": "n.",
        "definition": "爐子",
        "sentence": "She cooked on the _____.",
        "translation": "她在爐子上做飯。",
        "answer": "stove",
        "id": "stove"
      },
      {
        "word": "stack",
        "pos": "n./v.",
        "definition": "疊；堆",
        "sentence": "There is a _____ of books on the desk.",
        "translation": "桌上有一疊書。",
        "answer": "stack",
        "id": "stack"
      },
      {
        "word": "staff",
        "pos": "n.",
        "definition": "員工",
        "sentence": "The hotel _____ is very friendly.",
        "translation": "酒店員工非常友善。",
        "answer": "staff",
        "id": "staff"
      },
      {
        "word": "stage",
        "pos": "n.",
        "definition": "舞台",
        "sentence": "She sang on the _____.",
        "translation": "她在舞台上唱歌。",
        "answer": "stage",
        "id": "stage"
      },
      {
        "word": "stain",
        "pos": "n.",
        "definition": "污漬",
        "sentence": "There is a _____ on my shirt.",
        "translation": "我的衬衫上有一個污漬。",
        "answer": "stain",
        "id": "stain"
      },
      {
        "word": "stairs",
        "pos": "n.",
        "definition": "樓梯",
        "sentence": "Please use the _____ not the elevator.",
        "translation": "請走樓梯，不要搭電梯。",
        "answer": "stairs",
        "id": "stairs"
      },
      {
        "word": "statue",
        "pos": "n.",
        "definition": "雕像",
        "sentence": "There is a big _____ in the square.",
        "translation": "廣場上有一座大雕像。",
        "answer": "statue",
        "id": "statue"
      },
      {
        "word": "stadium",
        "pos": "n.",
        "definition": "體育場",
        "sentence": "The game is at the _____.",
        "translation": "比賽在體育場舉行。",
        "answer": "stadium",
        "id": "stadium"
      },
      {
        "word": "steady",
        "pos": "adj.",
        "definition": "穩定的",
        "sentence": "Keep your hand _____ .",
        "translation": "保持手穩。",
        "answer": "steady",
        "id": "steady"
      },
      {
        "word": "steam",
        "pos": "n.",
        "definition": "蒸汽",
        "sentence": "The soup is sending up _____.",
        "translation": "湯在冒蒸汽。",
        "answer": "steam",
        "id": "steam"
      },
      {
        "word": "steep",
        "pos": "adj.",
        "definition": "陡峭的",
        "sentence": "The hill is very _____.",
        "translation": "這座山丘非常陡峭。",
        "answer": "steep",
        "id": "steep"
      },
      {
        "word": "steer",
        "pos": "v.",
        "definition": "駕駛；操縱",
        "sentence": "He _____ ed the car carefully.",
        "translation": "他小心地駕駛著汽車。",
        "answer": "steer",
        "id": "steer"
      },
      {
        "word": "still",
        "pos": "adj./adv.",
        "definition": "靜止的；還",
        "sentence": "Please sit _____ .",
        "translation": "請坐好不要動。",
        "answer": "still",
        "id": "still"
      },
      {
        "word": "stir",
        "pos": "v.",
        "definition": "攪拌",
        "sentence": "_____ the soup before eating.",
        "translation": "吃之前先攪拌湯。",
        "answer": "stir",
        "id": "stir"
      }
    ]
  },
  {
    "id": "sw-blend",
    "title": "sw- Blend",
    "sourceHeading": "sw- Blend",
    "group": "Blends",
    "items": [
      {
        "word": "swim",
        "pos": "v.",
        "definition": "游泳",
        "sentence": "I like to _____ in the pool.",
        "translation": "我喜歡在游泳池游泳。",
        "answer": "swim",
        "id": "swim"
      },
      {
        "word": "swing",
        "pos": "v./n.",
        "definition": "盪秋千；擺動",
        "sentence": "Push me on the _____!",
        "translation": "推我盪秋千！",
        "answer": "swing",
        "id": "swing"
      },
      {
        "word": "sweet",
        "pos": "adj.",
        "definition": "甜的",
        "sentence": "This cake is very _____.",
        "translation": "這個蛋糕非常甜。",
        "answer": "sweet",
        "id": "sweet"
      },
      {
        "word": "sweep",
        "pos": "v.",
        "definition": "掃",
        "sentence": "Please _____ the floor.",
        "translation": "請掃地板。",
        "answer": "sweep",
        "id": "sweep"
      },
      {
        "word": "sweat",
        "pos": "n./v.",
        "definition": "汗；流汗",
        "sentence": "I _____ a lot after running.",
        "translation": "跑步後我流了很多汗。",
        "answer": "sweat",
        "id": "sweat"
      },
      {
        "word": "switch",
        "pos": "n./v.",
        "definition": "開關；切換",
        "sentence": "Turn on the light _____.",
        "translation": "打開電燈開關。",
        "answer": "switch",
        "id": "switch"
      },
      {
        "word": "sword",
        "pos": "n.",
        "definition": "劍",
        "sentence": "The knight carries a _____.",
        "translation": "騎士帶著一把劍。",
        "answer": "sword",
        "id": "sword"
      },
      {
        "word": "swallow",
        "pos": "v.",
        "definition": "吞嚥",
        "sentence": "Chew your food before you _____.",
        "translation": "吞嚥前先咀嚼食物。",
        "answer": "swallow",
        "id": "swallow"
      },
      {
        "word": "swan",
        "pos": "n.",
        "definition": "天鵝",
        "sentence": "The _____ swims gracefully.",
        "translation": "天鵝優雅地游泳。",
        "answer": "swan",
        "id": "swan"
      },
      {
        "word": "swear",
        "pos": "v.",
        "definition": "發誓",
        "sentence": "I _____ to tell the truth.",
        "translation": "我發誓說真話。",
        "answer": "swear",
        "id": "swear"
      },
      {
        "word": "swell",
        "pos": "v.",
        "definition": "腫脹",
        "sentence": "My ankle began to _____ after the fall.",
        "translation": "跌倒後我的腳踝開始腫脹。",
        "answer": "swell",
        "id": "swell"
      },
      {
        "word": "swift",
        "pos": "adj.",
        "definition": "迅速的",
        "sentence": "The eagle made a _____ dive.",
        "translation": "老鷹迅速俯衝。",
        "answer": "swift",
        "id": "swift"
      },
      {
        "word": "swipe",
        "pos": "v.",
        "definition": "滑動；刷",
        "sentence": "_____ your card to pay.",
        "translation": "刷卡付款。",
        "answer": "swipe",
        "id": "swipe"
      },
      {
        "word": "swirl",
        "pos": "v.",
        "definition": "旋轉；打旋",
        "sentence": "The leaves _____ ed in the wind.",
        "translation": "樹葉在風中打旋。",
        "answer": "swirl",
        "id": "swirl"
      },
      {
        "word": "swamp",
        "pos": "n.",
        "definition": "沼澤",
        "sentence": "Many animals live in the _____.",
        "translation": "許多動物生活在沼澤中。",
        "answer": "swamp",
        "id": "swamp"
      },
      {
        "word": "swap",
        "pos": "v.",
        "definition": "交換",
        "sentence": "Let's _____ sandwiches.",
        "translation": "我們交換三明治吧。",
        "answer": "swap",
        "id": "swap"
      },
      {
        "word": "swarm",
        "pos": "n.",
        "definition": "蜂群；大群",
        "sentence": "A _____ of bees flew past.",
        "translation": "一群蜜蜂飛過。",
        "answer": "swarm",
        "id": "swarm"
      },
      {
        "word": "swerve",
        "pos": "v.",
        "definition": "急轉彎",
        "sentence": "The car _____ d to avoid the dog.",
        "translation": "汽車急轉彎以避開狗。",
        "answer": "swerve",
        "id": "swerve"
      },
      {
        "word": "swipe",
        "pos": "n.",
        "definition": "刷卡；輕掃",
        "sentence": "One _____ of his hand cleared the table.",
        "translation": "他用手輕掃一下就清空了桌子。",
        "answer": "swipe",
        "id": "swipe-2"
      },
      {
        "word": "swoop",
        "pos": "v.",
        "definition": "俯衝",
        "sentence": "The hawk _____ ed down and caught the mouse.",
        "translation": "老鷹俯衝下來抓住了老鼠。",
        "answer": "swoop",
        "id": "swoop"
      },
      {
        "word": "sweater",
        "pos": "n.",
        "definition": "毛衣",
        "sentence": "She wore a warm _____ today.",
        "translation": "她今天穿了一件暖和的毛衣。",
        "answer": "sweater",
        "id": "sweater"
      },
      {
        "word": "swimmer",
        "pos": "n.",
        "definition": "游泳者",
        "sentence": "She is a great _____.",
        "translation": "她是一位出色的游泳者。",
        "answer": "swimmer",
        "id": "swimmer"
      },
      {
        "word": "swollen",
        "pos": "adj.",
        "definition": "腫脹的",
        "sentence": "My feet are _____ from walking so much.",
        "translation": "走了太多路，我的腳腫了。",
        "answer": "swollen",
        "id": "swollen"
      },
      {
        "word": "sweetness",
        "pos": "n.",
        "definition": "甜蜜",
        "sentence": "The _____ of honey is wonderful.",
        "translation": "蜂蜜的甜味非常美妙。",
        "answer": "sweetness",
        "id": "sweetness"
      },
      {
        "word": "sweepstake",
        "pos": "n.",
        "definition": "彩券抽獎",
        "sentence": "She won the _____ at the fair.",
        "translation": "她在集市上贏得了彩券抽獎。",
        "answer": "sweepstake",
        "id": "sweepstake"
      },
      {
        "word": "swig",
        "pos": "v.",
        "definition": "大口喝",
        "sentence": "He took a big _____ of water.",
        "translation": "他大口喝了水。",
        "answer": "swig",
        "id": "swig"
      },
      {
        "word": "swivel",
        "pos": "v.",
        "definition": "旋轉",
        "sentence": "The chair can _____ in all directions.",
        "translation": "椅子可以向各個方向旋轉。",
        "answer": "swivel",
        "id": "swivel"
      },
      {
        "word": "swanky",
        "pos": "adj.",
        "definition": "時髦豪華的",
        "sentence": "They dined at a _____ restaurant.",
        "translation": "他們在一家時髦的餐廳用餐。",
        "answer": "swanky",
        "id": "swanky"
      },
      {
        "word": "sweepstake",
        "pos": "n.",
        "definition": "抽獎比賽",
        "sentence": "The _____ prize is a new car.",
        "translation": "抽獎比賽的獎品是一輛新車。",
        "answer": "sweepstake",
        "id": "sweepstake-2"
      },
      {
        "word": "switchboard",
        "pos": "n.",
        "definition": "總機",
        "sentence": "Call the _____ to connect to any room.",
        "translation": "打電話給總機可以接通任意房間。",
        "answer": "switchboard",
        "id": "switchboard"
      }
    ]
  },
  {
    "id": "ch",
    "title": "ch",
    "sourceHeading": "ch ㄑ",
    "items": [
      {
        "word": "chicken",
        "pos": "n",
        "definition": "雞",
        "sentence": "There is a ______ on the farm.",
        "translation": "農場裡有一隻雞。",
        "answer": "chicken",
        "id": "chicken"
      },
      {
        "word": "chick",
        "pos": "n",
        "definition": "小雞",
        "sentence": "The ______ is yellow and small.",
        "translation": "這隻小雞是黃色的， 很小。",
        "answer": "chick",
        "id": "chick"
      },
      {
        "word": "cherry-cherries",
        "pos": "n",
        "definition": "櫻桃",
        "sentence": "I like eating ____________.",
        "translation": "我喜歡吃櫻桃。",
        "answer": "cherry",
        "id": "cherry-cherries"
      },
      {
        "word": "chair",
        "pos": "n",
        "definition": "椅子",
        "sentence": "He is sitting on a ______.",
        "translation": "他正坐在椅子上。",
        "answer": "chair",
        "id": "chair"
      },
      {
        "word": "choose",
        "pos": "v",
        "definition": "選擇",
        "sentence": "You can ______ one of these books.",
        "translation": "你可以選擇其中一本 書。",
        "answer": "choose",
        "id": "choose"
      },
      {
        "word": "chart",
        "pos": "n",
        "definition": "圖表",
        "sentence": "This ______ shows the sales numbers.",
        "translation": "這張圖表顯示了銷售 數字。",
        "answer": "chart",
        "id": "chart"
      },
      {
        "word": "chase-chasing",
        "pos": "v",
        "definition": "追趕",
        "sentence": "These dogs are ______ing the cat.",
        "translation": "這些狗正在追貓。",
        "answer": "chase",
        "id": "chase-chasing"
      },
      {
        "word": "chips",
        "pos": "n",
        "definition": "洋芋片",
        "sentence": "I want to eat some ______.",
        "translation": "我想吃一些洋芋片。",
        "answer": "chips",
        "id": "chips"
      },
      {
        "word": "chew",
        "pos": "v",
        "definition": "咀嚼",
        "sentence": "She likes to ______ gum.",
        "translation": "她喜歡嚼口香糖。",
        "answer": "chew",
        "id": "chew"
      },
      {
        "word": "checkup",
        "pos": "n",
        "definition": "身體檢查",
        "sentence": "He is going for a ______.",
        "translation": "他要去做身體檢查。 chief a./n. 主要的/長 官/酋長 He is the ______ of the tribe. 他是部落的首領。",
        "answer": "checkup",
        "id": "checkup"
      },
      {
        "word": "chess",
        "pos": "n",
        "definition": "西洋棋",
        "sentence": "What are they doing? They are playing ______.",
        "translation": "他們正在做什麼? 他 們正在下西洋棋。",
        "answer": "chess",
        "id": "chess"
      },
      {
        "word": "cheetah",
        "pos": "n",
        "definition": "獵豹",
        "sentence": "The ______ is very fast.",
        "translation": "獵豹跑得很快。",
        "answer": "cheetah",
        "id": "cheetah"
      },
      {
        "word": "chocolate",
        "pos": "n",
        "definition": "巧克力",
        "sentence": "I love eating ______.",
        "translation": "我喜歡吃巧克力。",
        "answer": "chocolate",
        "id": "chocolate"
      },
      {
        "word": "chalk",
        "pos": "n",
        "definition": "粉筆",
        "sentence": "The teacher uses ______ to write on the blackboard.",
        "translation": "老師用粉筆在黑板上 寫字。",
        "answer": "chalk",
        "id": "chalk"
      },
      {
        "word": "change",
        "pos": "v./n",
        "definition": "改變/零錢",
        "sentence": "Can you ______ this one-hundred-dollar bill into ten-dollar coins?",
        "translation": "你可以把這張鈔票換 成 10 元硬幣嗎？",
        "answer": "change",
        "id": "change"
      },
      {
        "word": "chat",
        "pos": "v",
        "definition": "聊天",
        "sentence": "They like to ______ online.",
        "translation": "他們喜歡在線聊天。",
        "answer": "chat",
        "id": "chat"
      },
      {
        "word": "chop",
        "pos": "v",
        "definition": "剁",
        "sentence": "He needs to ______ the vegetables.",
        "translation": "他需要切碎蔬菜。",
        "answer": "chop",
        "id": "chop"
      },
      {
        "word": "chin",
        "pos": "n",
        "definition": "下巴",
        "sentence": "She has a small ______.",
        "translation": "她有一個小下巴。",
        "answer": "chin",
        "id": "chin"
      },
      {
        "word": "pinch",
        "pos": "v",
        "definition": "捏",
        "sentence": "Don't ______ me! It hurts.",
        "translation": "不要捏我！這會痛",
        "answer": "pinch",
        "id": "pinch"
      },
      {
        "word": "lunch",
        "pos": "n",
        "definition": "午餐",
        "sentence": "It's twelve o-clock. We are having ______ now.",
        "translation": "現在是 12 點。我們 現在正在吃午餐。",
        "answer": "lunch",
        "id": "lunch"
      },
      {
        "word": "punch",
        "pos": "v",
        "definition": "打",
        "sentence": "He can ______ very hard.",
        "translation": "他可以打得很重。",
        "answer": "punch",
        "id": "punch"
      },
      {
        "word": "cheese",
        "pos": "n",
        "definition": "起司",
        "sentence": "I like ______ on my pizza.",
        "translation": "我喜歡披薩上加起司",
        "answer": "cheese",
        "id": "cheese"
      },
      {
        "word": "check",
        "pos": "v",
        "definition": "檢查",
        "sentence": "Please ______ your answers.",
        "translation": "請檢查你的答案。",
        "answer": "check",
        "id": "check"
      }
    ],
    "group": "Consonant Digraphs"
  },
  {
    "id": "ph-f",
    "title": "ph = f",
    "sourceHeading": "ph=f",
    "items": [
      {
        "word": "dolphin",
        "pos": "n",
        "definition": "海豚",
        "sentence": "There is a ______ jumping from the sea.",
        "translation": "有一隻海豚跳出海面",
        "answer": "dolphin",
        "id": "dolphin"
      },
      {
        "word": "phone",
        "pos": "n",
        "definition": "電話",
        "sentence": "Can I use your ______? Sure. Here you go.",
        "translation": "我可以用你的電話 嗎？當然可以",
        "answer": "phone",
        "id": "phone"
      },
      {
        "word": "elephant",
        "pos": "n",
        "definition": "大象",
        "sentence": "The _________ is the largest land animal.",
        "translation": "大象是最大的陸地上 動物。",
        "answer": "elephant",
        "id": "elephant"
      },
      {
        "word": "alphabet",
        "pos": "n",
        "definition": "字母",
        "sentence": "We learn 26 English ____________s in class.",
        "translation": "我們在課堂上學習 26 個英文字母。",
        "answer": "alphabet",
        "id": "alphabet"
      },
      {
        "word": "typhoon",
        "pos": "n",
        "definition": "颱風",
        "sentence": "A _________ is coming to Taiwan.",
        "translation": "颱風正向台灣靠近。",
        "answer": "typhoon",
        "id": "typhoon"
      },
      {
        "word": "graph",
        "pos": "n",
        "definition": "圖表",
        "sentence": "This ______ shows the sales numbers.",
        "translation": "這張圖表顯示了銷售 數字 take a photo of /take photos of n. 拍..的照 片 I like to take ______s of my brother. 我喜歡拍我弟的照片",
        "answer": "graph",
        "id": "graph"
      }
    ],
    "group": "Consonant Digraphs"
  },
  {
    "id": "sh",
    "title": "sh",
    "sourceHeading": "sh",
    "items": [
      {
        "word": "shoot-shooting",
        "pos": "v",
        "definition": "射擊/投籃",
        "sentence": "He likes to play ______ games. He can ________ 3-pointers.",
        "translation": "他喜歡玩射箭射擊遊 戲。他可以投三分球",
        "answer": "shoot",
        "id": "shoot-shooting"
      },
      {
        "word": "share…with",
        "pos": "v",
        "definition": "和人分享",
        "sentence": "Can you _____ your food _____ me? Of course! /Sure!",
        "translation": "你可以和我分享你的 食物嗎？當然可以",
        "answer": "share…with",
        "id": "share-with"
      },
      {
        "word": "ship=boat",
        "pos": "n",
        "definition": "船",
        "sentence": "The ______/________ is sailing on the sea.",
        "translation": "船在海上航行。",
        "answer": "ship",
        "id": "ship-boat"
      },
      {
        "word": "wash",
        "pos": "v",
        "definition": "洗",
        "sentence": "I need to ______ my hands before meals.",
        "translation": "我需要洗手在用餐 前。",
        "answer": "wash",
        "id": "wash"
      },
      {
        "word": "cash",
        "pos": "n",
        "definition": "現金",
        "sentence": "Do you have enough ________for lunch? Yes, I do./No, I don't.",
        "translation": "你有足夠的現金買中 餐嗎？有/沒有",
        "answer": "cash",
        "id": "cash"
      },
      {
        "word": "trash=garbage",
        "pos": "n",
        "definition": "垃圾",
        "sentence": "Please throw the garbage in the ___________ can.",
        "translation": "請丟垃圾進垃圾桶。",
        "answer": "trash",
        "id": "trash-garbage"
      },
      {
        "word": "trash can",
        "pos": "n",
        "definition": "垃圾桶",
        "sentence": "Please throw the garbage in the __________ ______.",
        "translation": "請丟垃圾進垃圾桶。",
        "answer": "trash can",
        "id": "trash-can"
      },
      {
        "word": "flash",
        "pos": "n",
        "definition": "閃光",
        "sentence": "There is a bright ______ of light. It's lightning.",
        "translation": "有一道亮光閃過。它 是閃電",
        "answer": "flash",
        "id": "flash"
      },
      {
        "word": "wish-wishes",
        "pos": "v./n",
        "definition": "許願",
        "sentence": "I make three ________es on my birthday.",
        "translation": "我在生日那天做了三 個願望",
        "answer": "wish",
        "id": "wish-wishes"
      },
      {
        "word": "fish",
        "pos": "n",
        "definition": "魚",
        "sentence": "He wants to catch a big ______.",
        "translation": "他想抓一條大魚。",
        "answer": "fish",
        "id": "fish"
      },
      {
        "word": "shop=store",
        "pos": "n",
        "definition": "/v. 購物/商店",
        "sentence": "She goes shopping at the ______ every week.",
        "translation": "她每週都去商店。",
        "answer": "shop",
        "id": "shop-store"
      },
      {
        "word": "shut=close",
        "pos": "v",
        "definition": "關",
        "sentence": "Please _______/_________ the door.",
        "translation": "請關門。",
        "answer": "shut",
        "id": "shut-close"
      },
      {
        "word": "shine",
        "pos": "v",
        "definition": "閃耀",
        "sentence": "The sun ______s brightly in the sky.",
        "translation": "太陽在空中閃耀很亮",
        "answer": "shine",
        "id": "shine"
      },
      {
        "word": "fashion",
        "pos": "n",
        "definition": "時尚",
        "sentence": "She is interested in ______.",
        "translation": "她對時尚感興趣。",
        "answer": "fashion",
        "id": "fashion"
      },
      {
        "word": "crash",
        "pos": "v./n",
        "definition": "撞擊",
        "sentence": "The car ______ed into a tree.",
        "translation": "汽車撞上了一棵樹。",
        "answer": "crash",
        "id": "crash"
      },
      {
        "word": "crush",
        "pos": "v",
        "definition": "擠扁",
        "sentence": "________ the can before you recycle.",
        "translation": "回收前先把罐子壓扁",
        "answer": "crush",
        "id": "crush"
      },
      {
        "word": "shade",
        "pos": "n",
        "definition": "陰影處",
        "sentence": "Let's sit in the ______ under the tree.",
        "translation": "我們坐在樹下陰涼處 吧。",
        "answer": "shade",
        "id": "shade"
      },
      {
        "word": "shirt",
        "pos": "n",
        "definition": "襯衫",
        "sentence": "He is wearing a blue ______ at work.",
        "translation": "他穿著一件藍色的襯 衫在上班。",
        "answer": "shirt",
        "id": "shirt"
      },
      {
        "word": "T-shirt",
        "pos": "n",
        "definition": "T 恤",
        "sentence": "She is wearing a pink ______.",
        "translation": "她穿件粉紅色的 T 恤",
        "answer": "T",
        "id": "t-shirt"
      },
      {
        "word": "shell",
        "pos": "n",
        "definition": "貝殼",
        "sentence": "There is a beautiful ______ on the beach.",
        "translation": "有一個漂亮的貝殼。",
        "answer": "shell",
        "id": "shell"
      },
      {
        "word": "push",
        "pos": "v",
        "definition": "推擠",
        "sentence": "Don't ______ me!",
        "translation": "不要推我！",
        "answer": "push",
        "id": "push"
      },
      {
        "word": "a pair of shoes",
        "pos": "n",
        "definition": "一雙鞋子",
        "sentence": "What do you need? I need a new pair of ______ .",
        "translation": "你需要什麼?我需要 一雙新的鞋。",
        "answer": "a pair of shoes",
        "id": "a-pair-of-shoes"
      },
      {
        "word": "shark",
        "pos": "n",
        "definition": "鯊魚",
        "sentence": "The _______ is a dangerous animal in the sea.",
        "translation": "鯊魚是一種海中危險 的動物。",
        "answer": "shark",
        "id": "shark"
      },
      {
        "word": "shock",
        "pos": "n",
        "definition": "驚訝",
        "sentence": "I am in ______ when I know the news.",
        "translation": "知道這個消息時，我 感到非常驚訝。",
        "answer": "shock",
        "id": "shock"
      },
      {
        "word": "bush",
        "pos": "n",
        "definition": "草叢",
        "sentence": "The bird is hiding in the ______.",
        "translation": "鳥兒藏在草叢中。",
        "answer": "bush",
        "id": "bush"
      },
      {
        "word": "punish",
        "pos": "v",
        "definition": "處罰",
        "sentence": "The teacher will ______ the students if they cheat on tests.",
        "translation": "老師將會處罰學生如 果他們考試作弊的話",
        "answer": "punish",
        "id": "punish"
      },
      {
        "word": "shake",
        "pos": "v",
        "definition": "握手/搖晃",
        "sentence": "They ______ hands when they meet.",
        "translation": "他們見面時握手。",
        "answer": "shake",
        "id": "shake"
      },
      {
        "word": "milkshake",
        "pos": "n",
        "definition": "奶昔",
        "sentence": "What does he want to drink? He wants to drink chocolate ________.",
        "translation": "他想喝什麼？他想喝 巧克力奶昔",
        "answer": "milkshake",
        "id": "milkshake"
      },
      {
        "word": "wash dishes",
        "pos": "v",
        "definition": "洗碗盤",
        "sentence": "My dad ___________es dishes.",
        "translation": "我爸負責洗碗",
        "answer": "wash dishes",
        "id": "wash-dishes"
      },
      {
        "word": "rush",
        "pos": "v",
        "definition": "急忙",
        "sentence": "Don't ______, take your time.",
        "translation": "不要急，慢慢來。",
        "answer": "rush",
        "id": "rush"
      },
      {
        "word": "brush",
        "pos": "n",
        "definition": "刷子/梳子",
        "sentence": "I need a new hair ______.",
        "translation": "我需要新的髮梳。 she pron. 她 ______ is my sister. 她是我的姐姐。",
        "answer": "brush",
        "id": "brush"
      },
      {
        "word": "shovel",
        "pos": "n",
        "definition": "鏟起",
        "sentence": "He uses a ______ to dig the hole.",
        "translation": "他用鏟子挖洞。",
        "answer": "shovel",
        "id": "shovel"
      },
      {
        "word": "shadow",
        "pos": "n",
        "definition": "影子",
        "sentence": "The tree has a long ______.",
        "translation": "樹有一道長影。",
        "answer": "shadow",
        "id": "shadow"
      },
      {
        "word": "sharp",
        "pos": "adj",
        "definition": "尖銳的",
        "sentence": "Be careful, the knife is very _____.",
        "translation": "小心，這把刀很鋒利",
        "answer": "sharp",
        "id": "sharp"
      },
      {
        "word": "pencil sharpener",
        "pos": "n",
        "definition": "削鉛筆機",
        "sentence": "I need a ______ _______________ for my pencil.",
        "translation": "我需要一個削鉛筆機 為我的鉛筆。",
        "answer": "pencil sharpener",
        "id": "pencil-sharpener"
      },
      {
        "word": "shame",
        "pos": "n",
        "definition": "羞愧丟臉",
        "sentence": "He wants to cheat on the test. What a ______!",
        "translation": "他想要考試作弊。多 麼丟臉啊!",
        "answer": "shame",
        "id": "shame"
      }
    ],
    "group": "Consonant Digraphs"
  },
  {
    "id": "th-voiced",
    "title": "th (voiced) ㄉ",
    "sourceHeading": "th (voiced) ㄉ",
    "group": "Consonant Digraphs",
    "items": [
      {
        "word": "the",
        "pos": "art.",
        "definition": "定冠詞",
        "sentence": "Please close _____ door.",
        "translation": "請關上那扇門。",
        "answer": "the",
        "id": "the"
      },
      {
        "word": "this",
        "pos": "pron.",
        "definition": "這個",
        "sentence": "_____ is my favorite book.",
        "translation": "這是我最愛的書。",
        "answer": "this",
        "id": "this"
      },
      {
        "word": "that",
        "pos": "pron.",
        "definition": "那個",
        "sentence": "What is _____ over there?",
        "translation": "那邊那個是什麼？",
        "answer": "that",
        "id": "that"
      },
      {
        "word": "these",
        "pos": "pron.",
        "definition": "這些",
        "sentence": "_____ are my shoes.",
        "translation": "這些是我的鞋子。",
        "answer": "these",
        "id": "these"
      },
      {
        "word": "those",
        "pos": "pron.",
        "definition": "那些",
        "sentence": "_____ bags are hers.",
        "translation": "那些包包是她的。",
        "answer": "those",
        "id": "those"
      },
      {
        "word": "they",
        "pos": "pron.",
        "definition": "他們",
        "sentence": "_____ are my best friends.",
        "translation": "他們是我最好的朋友。",
        "answer": "they",
        "id": "they"
      },
      {
        "word": "them",
        "pos": "pron.",
        "definition": "他們（受）",
        "sentence": "I like _____ a lot.",
        "translation": "我很喜歡他們。",
        "answer": "them",
        "id": "them"
      },
      {
        "word": "there",
        "pos": "adv.",
        "definition": "那裡",
        "sentence": "Is anyone _____?",
        "translation": "有人在那裡嗎？",
        "answer": "there",
        "id": "there"
      },
      {
        "word": "then",
        "pos": "adv.",
        "definition": "然後",
        "sentence": "Eat first, _____ brush your teeth.",
        "translation": "先吃飯，然後刷牙。",
        "answer": "then",
        "id": "then"
      },
      {
        "word": "their",
        "pos": "pron.",
        "definition": "他們的",
        "sentence": "That is _____ new house.",
        "translation": "那是他們的新房子。",
        "answer": "their",
        "id": "their"
      },
      {
        "word": "though",
        "pos": "conj.",
        "definition": "雖然",
        "sentence": "_____ it rained, we played outside.",
        "translation": "雖然下雨，我們還是在外面玩。",
        "answer": "though",
        "id": "though"
      },
      {
        "word": "although",
        "pos": "conj.",
        "definition": "雖然",
        "sentence": "_____ she is young, she is very wise.",
        "translation": "雖然她很年輕，但很有智慧。",
        "answer": "although",
        "id": "although"
      },
      {
        "word": "breathe",
        "pos": "v.",
        "definition": "呼吸",
        "sentence": "Remember to _____ slowly.",
        "translation": "記得慢慢呼吸。",
        "answer": "breathe",
        "id": "breathe"
      },
      {
        "word": "weather",
        "pos": "n.",
        "definition": "天氣",
        "sentence": "The _____ is nice today.",
        "translation": "今天天氣很好。",
        "answer": "weather",
        "id": "weather"
      },
      {
        "word": "whether",
        "pos": "conj.",
        "definition": "是否",
        "sentence": "I don't know _____ it will rain.",
        "translation": "我不知道是否會下雨。",
        "answer": "whether",
        "id": "whether"
      },
      {
        "word": "mother",
        "pos": "n.",
        "definition": "媽媽",
        "sentence": "My _____ makes great soup.",
        "translation": "我媽媽做的湯很好喝。",
        "answer": "mother",
        "id": "mother"
      },
      {
        "word": "father",
        "pos": "n.",
        "definition": "爸爸",
        "sentence": "My _____ is a doctor.",
        "translation": "我爸爸是醫生。",
        "answer": "father",
        "id": "father"
      },
      {
        "word": "brother",
        "pos": "n.",
        "definition": "兄弟",
        "sentence": "My _____ is older than me.",
        "translation": "我哥哥比我大。",
        "answer": "brother",
        "id": "brother"
      },
      {
        "word": "other",
        "pos": "adj.",
        "definition": "另一個",
        "sentence": "The _____ book is on the shelf.",
        "translation": "另一本書在書架上。",
        "answer": "other",
        "id": "other"
      },
      {
        "word": "another",
        "pos": "det.",
        "definition": "又一個",
        "sentence": "Can I have _____ cookie?",
        "translation": "我可以再拿一個餅乾嗎？",
        "answer": "another",
        "id": "another"
      },
      {
        "word": "together",
        "pos": "adv.",
        "definition": "一起",
        "sentence": "Let's work _____ on this.",
        "translation": "我們一起做這件事吧。",
        "answer": "together",
        "id": "together"
      },
      {
        "word": "feather",
        "pos": "n.",
        "definition": "羽毛",
        "sentence": "The bird lost a _____.",
        "translation": "那隻鳥掉了一根羽毛。",
        "answer": "feather",
        "id": "feather"
      },
      {
        "word": "leather",
        "pos": "n.",
        "definition": "皮革",
        "sentence": "His belt is made of real _____.",
        "translation": "他的皮帶是真皮製的。",
        "answer": "leather",
        "id": "leather"
      },
      {
        "word": "smooth",
        "pos": "adj.",
        "definition": "光滑的",
        "sentence": "The table is very _____.",
        "translation": "這張桌子很光滑。",
        "answer": "smooth",
        "id": "smooth"
      },
      {
        "word": "bathe",
        "pos": "v.",
        "definition": "洗澡",
        "sentence": "The baby likes to _____ in warm water.",
        "translation": "寶寶喜歡在溫水裡洗澡。",
        "answer": "bathe",
        "id": "bathe"
      },
      {
        "word": "clothes",
        "pos": "n.",
        "definition": "衣服",
        "sentence": "Please fold your _____.",
        "translation": "請把你的衣服折好。",
        "answer": "clothes",
        "id": "clothes"
      },
      {
        "word": "north",
        "pos": "n.",
        "definition": "（注：also voiceless）",
        "sentence": "The wind blows from the _____.",
        "translation": "風從北方吹來。",
        "answer": "north",
        "id": "north"
      },
      {
        "word": "worthy",
        "pos": "adj.",
        "definition": "值得的",
        "sentence": "Is this job _____ your time?",
        "translation": "這份工作值得你花時間嗎？",
        "answer": "worthy",
        "id": "worthy"
      },
      {
        "word": "soothing",
        "pos": "adj.",
        "definition": "舒緩的",
        "sentence": "The music is very _____.",
        "translation": "這音樂非常舒緩。",
        "answer": "soothing",
        "id": "soothing"
      },
      {
        "word": "rhythm",
        "pos": "n.",
        "definition": "節奏",
        "sentence": "Clap to the _____ of the song.",
        "translation": "隨著歌曲節奏拍手。",
        "answer": "rhythm",
        "id": "rhythm"
      }
    ]
  },
  {
    "id": "th-voiceless",
    "title": "th (voiceless) ㄊ",
    "sourceHeading": "th (voiceless) ㄊ",
    "group": "Consonant Digraphs",
    "items": [
      {
        "word": "think",
        "pos": "v",
        "definition": "思考",
        "sentence": "I need to _____ about it.",
        "translation": "我需要思考一下。",
        "answer": "think",
        "id": "think"
      },
      {
        "word": "thank",
        "pos": "v",
        "definition": "感謝",
        "sentence": "_____ you for your help.",
        "translation": "感謝你的幫助。",
        "answer": "thank",
        "id": "thank"
      },
      {
        "word": "three",
        "pos": "num.",
        "definition": "三",
        "sentence": "I have _____ dogs.",
        "translation": "我有三隻狗。",
        "answer": "three",
        "id": "three"
      },
      {
        "word": "throw",
        "pos": "v",
        "definition": "丟；拋",
        "sentence": "Please _____ the ball to me.",
        "translation": "請把球丟給我。",
        "answer": "throw",
        "id": "throw"
      },
      {
        "word": "thin",
        "pos": "adj.",
        "definition": "薄的；瘦的",
        "sentence": "The book is very _____.",
        "translation": "這本書很薄。",
        "answer": "thin",
        "id": "thin"
      },
      {
        "word": "thick",
        "pos": "adj.",
        "definition": "厚的",
        "sentence": "The wall is very _____.",
        "translation": "這面牆很厚。",
        "answer": "thick",
        "id": "thick"
      },
      {
        "word": "thirsty",
        "pos": "adj.",
        "definition": "口渴的",
        "sentence": "I am _____. Can I have water?",
        "translation": "我很口渴。可以給我水嗎？",
        "answer": "thirsty",
        "id": "thirsty"
      },
      {
        "word": "thing",
        "pos": "n.",
        "definition": "東西；物品",
        "sentence": "What is that _____?",
        "translation": "那個東西是什麼？",
        "answer": "thing",
        "id": "thing"
      },
      {
        "word": "third",
        "pos": "adj.",
        "definition": "第三",
        "sentence": "She came in _____ place.",
        "translation": "她得了第三名。",
        "answer": "third",
        "id": "third"
      },
      {
        "word": "thirty",
        "pos": "num.",
        "definition": "三十",
        "sentence": "She is _____ years old.",
        "translation": "她三十歲。",
        "answer": "thirty",
        "id": "thirty"
      },
      {
        "word": "thousand",
        "pos": "num.",
        "definition": "千",
        "sentence": "There are one _____ students.",
        "translation": "有一千名學生。",
        "answer": "thousand",
        "id": "thousand"
      },
      {
        "word": "tooth",
        "pos": "n.",
        "definition": "牙齒",
        "sentence": "I brush my _____ every day.",
        "translation": "我每天刷牙。",
        "answer": "tooth",
        "id": "tooth"
      },
      {
        "word": "teeth",
        "pos": "n.",
        "definition": "牙齒（複）",
        "sentence": "Brush your _____ before bed.",
        "translation": "睡前要刷牙。",
        "answer": "teeth",
        "id": "teeth"
      },
      {
        "word": "path",
        "pos": "n.",
        "definition": "小路",
        "sentence": "There is a _____ in the forest.",
        "translation": "森林裡有一條小路。",
        "answer": "path",
        "id": "path"
      },
      {
        "word": "bath",
        "pos": "n.",
        "definition": "洗澡",
        "sentence": "She takes a _____ every night.",
        "translation": "她每晚洗澡。",
        "answer": "bath",
        "id": "bath"
      },
      {
        "word": "math",
        "pos": "n.",
        "definition": "數學",
        "sentence": "I like _____ class.",
        "translation": "我喜歡數學課。",
        "answer": "math",
        "id": "math"
      },
      {
        "word": "north",
        "pos": "n./adj.",
        "definition": "北方",
        "sentence": "The school is to the _____ of the park.",
        "translation": "學校在公園的北方。",
        "answer": "north",
        "id": "north"
      },
      {
        "word": "south",
        "pos": "n./adj.",
        "definition": "南方",
        "sentence": "Tainan is to the _____ of Taipei.",
        "translation": "台南在台北的南方。",
        "answer": "south",
        "id": "south"
      },
      {
        "word": "mouth",
        "pos": "n.",
        "definition": "嘴巴",
        "sentence": "Open your _____ wide.",
        "translation": "張大你的嘴巴。",
        "answer": "mouth",
        "id": "mouth"
      },
      {
        "word": "cloth",
        "pos": "n.",
        "definition": "布；抹布",
        "sentence": "Use a _____ to clean the table.",
        "translation": "用一塊抹布擦桌子。",
        "answer": "cloth",
        "id": "cloth"
      },
      {
        "word": "breath",
        "pos": "n.",
        "definition": "呼吸",
        "sentence": "Take a deep _____.",
        "translation": "深呼吸。",
        "answer": "breath",
        "id": "breath"
      },
      {
        "word": "health",
        "pos": "n.",
        "definition": "健康",
        "sentence": "Good food is good for your _____.",
        "translation": "好食物有益健康。",
        "answer": "health",
        "id": "health"
      },
      {
        "word": "wealth",
        "pos": "n.",
        "definition": "財富",
        "sentence": "He has a lot of _____.",
        "translation": "他有很多財富。",
        "answer": "wealth",
        "id": "wealth"
      },
      {
        "word": "thread",
        "pos": "n.",
        "definition": "線；線頭",
        "sentence": "She sews with a needle and _____.",
        "translation": "她用針和線縫東西。",
        "answer": "thread",
        "id": "thread"
      },
      {
        "word": "throne",
        "pos": "n.",
        "definition": "王座",
        "sentence": "The king sits on his _____.",
        "translation": "國王坐在他的王座上。",
        "answer": "throne",
        "id": "throne"
      },
      {
        "word": "thunder",
        "pos": "n.",
        "definition": "雷聲",
        "sentence": "I heard _____ during the storm.",
        "translation": "暴風雨中我聽到雷聲。",
        "answer": "thunder",
        "id": "thunder"
      },
      {
        "word": "thermometer",
        "pos": "n.",
        "definition": "溫度計",
        "sentence": "The _____ shows it is thirty degrees.",
        "translation": "溫度計顯示三十度。",
        "answer": "thermometer",
        "id": "thermometer"
      },
      {
        "word": "thermos",
        "pos": "n.",
        "definition": "保溫瓶",
        "sentence": "She keeps tea in a _____.",
        "translation": "她用保溫瓶裝茶。",
        "answer": "thermos",
        "id": "thermos"
      },
      {
        "word": "athlete",
        "pos": "n.",
        "definition": "運動員",
        "sentence": "He is a great _____.",
        "translation": "他是一位出色的運動員。",
        "answer": "athlete",
        "id": "athlete"
      },
      {
        "word": "theory",
        "pos": "n.",
        "definition": "理論",
        "sentence": "He has a _____ about the stars.",
        "translation": "他對星星有一套理論。",
        "answer": "theory",
        "id": "theory"
      }
    ]
  },
  {
    "id": "wh",
    "title": "wh",
    "sourceHeading": "wh",
    "items": [
      {
        "word": "when",
        "pos": "adv",
        "definition": "何時",
        "sentence": "________ do you have breakfast? At seven o'clock.",
        "translation": "你何時吃早餐？七點",
        "answer": "when",
        "id": "when"
      },
      {
        "word": "why",
        "pos": "adv",
        "definition": "為什麼",
        "sentence": "________ are you sad? Because I lost a game.",
        "translation": "你為什麼難過？因為 我輸了比賽",
        "answer": "why",
        "id": "why"
      },
      {
        "word": "which",
        "pos": "adj",
        "definition": "哪一個",
        "sentence": "________ book do you like, the blue one or the white one? The white one.",
        "translation": "你喜歡哪一本書，黑 色的還是白色的？白 色的 what pron. 什麼東西 ________ is your favorite color? My favorite color is white. 你最喜歡的顏色是什 麼？我最喜歡的顏色 是白色",
        "answer": "which",
        "id": "which"
      },
      {
        "word": "wheel",
        "pos": "n",
        "definition": "輪子",
        "sentence": "The car has four ________s.",
        "translation": "汽車有四個輪子。 who pron. 誰 ________ is your teacher? Jennifer is. 你的老師是誰？是 Jennifer. where adv. 在哪裡 ________ is the library? It's on the third floor. 圖書館在哪？在三樓",
        "answer": "wheel",
        "id": "wheel"
      },
      {
        "word": "white",
        "pos": "adj",
        "definition": "白色",
        "sentence": "What color is the paper? It's ________.",
        "translation": "這張紙是什麼顏色? 它是白色的。",
        "answer": "white",
        "id": "white"
      },
      {
        "word": "whale",
        "pos": "n",
        "definition": "鯨魚",
        "sentence": "A ________ is a large sea animal.",
        "translation": "鯨魚是一種大型海洋 動物。",
        "answer": "whale",
        "id": "whale"
      },
      {
        "word": "wheat",
        "pos": "n",
        "definition": "小麥",
        "sentence": "Bread is made from ________.",
        "translation": "麵包是用小麥製成",
        "answer": "wheat",
        "id": "wheat"
      },
      {
        "word": "whip",
        "pos": "v",
        "definition": "攪拌/鞭打",
        "sentence": "She can ________ butter to make cream.",
        "translation": "她可以將奶油攪拌成 奶霜。",
        "answer": "whip",
        "id": "whip"
      }
    ],
    "group": "Consonant Digraphs"
  },
  {
    "id": "dge-d",
    "title": "dge /dʒ/",
    "sourceHeading": "dge /dʒ/",
    "group": "Soft Letters",
    "items": [
      {
        "word": "edge",
        "pos": "n.",
        "definition": "邊緣",
        "sentence": "Don't stand too close to the _____ .",
        "translation": "不要站太靠近邊緣。",
        "answer": "edge",
        "id": "edge"
      },
      {
        "word": "hedge",
        "pos": "n.",
        "definition": "樹籬",
        "sentence": "She trimmed the _____ in the garden.",
        "translation": "她修剪了花園裡的樹籬。",
        "answer": "hedge",
        "id": "hedge"
      },
      {
        "word": "ledge",
        "pos": "n.",
        "definition": "壁架",
        "sentence": "The bird sat on the window _____.",
        "translation": "小鳥坐在窗台壁架上。",
        "answer": "ledge",
        "id": "ledge"
      },
      {
        "word": "wedge",
        "pos": "n.",
        "definition": "楔形",
        "sentence": "Use a _____ to keep the door open.",
        "translation": "用楔子撐開門。",
        "answer": "wedge",
        "id": "wedge"
      },
      {
        "word": "bridge",
        "pos": "n.",
        "definition": "橋",
        "sentence": "We drove over the _____.",
        "translation": "我們開車越過橋。",
        "answer": "bridge",
        "id": "bridge"
      },
      {
        "word": "ridge",
        "pos": "n.",
        "definition": "山脊",
        "sentence": "We hiked along the mountain _____.",
        "translation": "我們沿著山脊健行。",
        "answer": "ridge",
        "id": "ridge"
      },
      {
        "word": "fridge",
        "pos": "n.",
        "definition": "冰箱",
        "sentence": "Put the milk in the _____.",
        "translation": "把牛奶放進冰箱。",
        "answer": "fridge",
        "id": "fridge"
      },
      {
        "word": "judge",
        "pos": "n./v.",
        "definition": "法官；評判",
        "sentence": "Don't _____ people by their looks.",
        "translation": "不要以貌取人。",
        "answer": "judge",
        "id": "judge"
      },
      {
        "word": "fudge",
        "pos": "n.",
        "definition": "巧克力糖",
        "sentence": "She made some _____ for the party.",
        "translation": "她為派對做了巧克力糖。",
        "answer": "fudge",
        "id": "fudge"
      },
      {
        "word": "nudge",
        "pos": "v.",
        "definition": "輕推",
        "sentence": "He _____ d her to wake her up.",
        "translation": "他輕推她讓她醒來。",
        "answer": "nudge",
        "id": "nudge"
      },
      {
        "word": "budge",
        "pos": "v.",
        "definition": "移動",
        "sentence": "The box is heavy. I can't _____ it.",
        "translation": "這箱子很重，我移不動它。",
        "answer": "budge",
        "id": "budge"
      },
      {
        "word": "grudge",
        "pos": "n.",
        "definition": "怨恨",
        "sentence": "Don't hold a _____ against your friend.",
        "translation": "不要對朋友懷恨在心。",
        "answer": "grudge",
        "id": "grudge"
      },
      {
        "word": "lodge",
        "pos": "n.",
        "definition": "小屋；旅舍",
        "sentence": "We stayed at a mountain _____ .",
        "translation": "我們住在山上的小屋。",
        "answer": "lodge",
        "id": "lodge"
      },
      {
        "word": "dodge",
        "pos": "v.",
        "definition": "躲避",
        "sentence": "He _____ d the ball.",
        "translation": "他躲開了球。",
        "answer": "dodge",
        "id": "dodge"
      },
      {
        "word": "badge",
        "pos": "n.",
        "definition": "徽章",
        "sentence": "The officer wore a shiny _____.",
        "translation": "警官戴著一枚閃亮的徽章。",
        "answer": "badge",
        "id": "badge"
      },
      {
        "word": "cadge",
        "pos": "v.",
        "definition": "乞求",
        "sentence": "He tried to _____ money from his friends.",
        "translation": "他試圖向朋友乞討錢。",
        "answer": "cadge",
        "id": "cadge"
      },
      {
        "word": "fidget",
        "pos": "v.",
        "definition": "坐立不安",
        "sentence": "Stop _____ing in class.",
        "translation": "上課不要坐立不安。",
        "answer": "fidget",
        "id": "fidget"
      },
      {
        "word": "knowledge",
        "pos": "n.",
        "definition": "知識",
        "sentence": "Reading books builds your _____.",
        "translation": "閱讀書籍能增長知識。",
        "answer": "knowledge",
        "id": "knowledge"
      },
      {
        "word": "acknowledge",
        "pos": "v.",
        "definition": "承認；致謝",
        "sentence": "Please _____ receipt of this email.",
        "translation": "請確認收到這封電子郵件。",
        "answer": "acknowledge",
        "id": "acknowledge"
      },
      {
        "word": "pledge",
        "pos": "n./v.",
        "definition": "承諾；誓言",
        "sentence": "We _____ to help each other.",
        "translation": "我們承諾互相幫助。",
        "answer": "pledge",
        "id": "pledge"
      },
      {
        "word": "wedge",
        "pos": "n.",
        "definition": "楔形",
        "sentence": "Cut the cake into _____ shapes.",
        "translation": "把蛋糕切成楔形。",
        "answer": "wedge",
        "id": "wedge-2"
      },
      {
        "word": "ridge",
        "pos": "n.",
        "definition": "屋脊",
        "sentence": "The cat sat on the roof _____.",
        "translation": "貓坐在屋脊上。",
        "answer": "ridge",
        "id": "ridge-2"
      },
      {
        "word": "sledge",
        "pos": "n.",
        "definition": "雪橇",
        "sentence": "Children ride _____ s in the snow.",
        "translation": "孩子們乘雪橇在雪地裡玩。",
        "answer": "sledge",
        "id": "sledge"
      },
      {
        "word": "dredge",
        "pos": "v.",
        "definition": "疏浚",
        "sentence": "Workers will _____ the river.",
        "translation": "工人將疏浚這條河。",
        "answer": "dredge",
        "id": "dredge"
      },
      {
        "word": "smudge",
        "pos": "n./v.",
        "definition": "污跡；弄髒",
        "sentence": "There is a _____ of ink on your shirt.",
        "translation": "你的衣服上有一道墨水污跡。",
        "answer": "smudge",
        "id": "smudge"
      },
      {
        "word": "sludge",
        "pos": "n.",
        "definition": "污泥",
        "sentence": "After the flood there was _____ everywhere.",
        "translation": "洪水退後到處都是污泥。",
        "answer": "sludge",
        "id": "sludge"
      },
      {
        "word": "trudge",
        "pos": "v.",
        "definition": "步履沉重地走",
        "sentence": "We _____ d through the deep snow.",
        "translation": "我們踏著沉重的步伐走過厚厚的積雪。",
        "answer": "trudge",
        "id": "trudge"
      },
      {
        "word": "fledgling",
        "pos": "adj./n.",
        "definition": "羽翼未豐的",
        "sentence": "The _____ bird learned to fly.",
        "translation": "這隻剛長大的小鳥學著飛翔。",
        "answer": "fledgling",
        "id": "fledgling"
      },
      {
        "word": "gadget",
        "pos": "n.",
        "definition": "小工具",
        "sentence": "He loves buying new _____s.",
        "translation": "他喜歡買新的小工具。",
        "answer": "gadget",
        "id": "gadget"
      },
      {
        "word": "widget",
        "pos": "n.",
        "definition": "小零件",
        "sentence": "Click on the _____ to open the app.",
        "translation": "點擊小零件打開應用程式。",
        "answer": "widget",
        "id": "widget"
      }
    ]
  },
  {
    "id": "soft-c-s",
    "title": "Soft c /s/",
    "sourceHeading": "Soft c /s/",
    "group": "Soft Letters",
    "items": [
      {
        "word": "city",
        "pos": "n.",
        "definition": "城市",
        "sentence": "Taipei is a big _____.",
        "translation": "台北是一個大城市。",
        "answer": "city",
        "id": "city"
      },
      {
        "word": "cent",
        "pos": "n.",
        "definition": "分錢",
        "sentence": "This candy costs fifty _____s.",
        "translation": "這顆糖果要五十分錢。",
        "answer": "cent",
        "id": "cent"
      },
      {
        "word": "center",
        "pos": "n.",
        "definition": "中心",
        "sentence": "The school is in the _____ of town.",
        "translation": "學校在城鎮的中心。",
        "answer": "center",
        "id": "center"
      },
      {
        "word": "cereal",
        "pos": "n.",
        "definition": "麥片",
        "sentence": "I eat _____ for breakfast.",
        "translation": "我早餐吃麥片。",
        "answer": "cereal",
        "id": "cereal"
      },
      {
        "word": "celebrate",
        "pos": "v.",
        "definition": "慶祝",
        "sentence": "We _____ her birthday every year.",
        "translation": "我們每年慶祝她的生日。",
        "answer": "celebrate",
        "id": "celebrate"
      },
      {
        "word": "century",
        "pos": "n.",
        "definition": "世紀",
        "sentence": "We live in the 21st _____.",
        "translation": "我們生活在二十一世紀。",
        "answer": "century",
        "id": "century"
      },
      {
        "word": "certain",
        "pos": "adj.",
        "definition": "確定的",
        "sentence": "Are you _____ about the answer?",
        "translation": "你確定答案嗎？",
        "answer": "certain",
        "id": "certain"
      },
      {
        "word": "cinema",
        "pos": "n.",
        "definition": "電影院",
        "sentence": "Let's go to the _____ tonight.",
        "translation": "我們今晚去電影院吧。",
        "answer": "cinema",
        "id": "cinema"
      },
      {
        "word": "circle",
        "pos": "n.",
        "definition": "圓形",
        "sentence": "Draw a _____ on the paper.",
        "translation": "在紙上畫一個圓形。",
        "answer": "circle",
        "id": "circle"
      },
      {
        "word": "circus",
        "pos": "n.",
        "definition": "馬戲團",
        "sentence": "We watched a _____ show.",
        "translation": "我們觀看了馬戲團表演。",
        "answer": "circus",
        "id": "circus"
      },
      {
        "word": "citizen",
        "pos": "n.",
        "definition": "市民；公民",
        "sentence": "Every _____ should follow the law.",
        "translation": "每位公民都應遵守法律。",
        "answer": "citizen",
        "id": "citizen"
      },
      {
        "word": "cycle",
        "pos": "n./v.",
        "definition": "循環；騎車",
        "sentence": "She _____ s to school every day.",
        "translation": "她每天騎腳踏車上學。",
        "answer": "cycle",
        "id": "cycle"
      },
      {
        "word": "cyber",
        "pos": "adj.",
        "definition": "網路的",
        "sentence": "Be careful about _____ bullying.",
        "translation": "小心網路霸凌。",
        "answer": "cyber",
        "id": "cyber"
      },
      {
        "word": "cypress",
        "pos": "n.",
        "definition": "柏樹",
        "sentence": "There are tall _____ trees in the park.",
        "translation": "公園裡有高大的柏樹。",
        "answer": "cypress",
        "id": "cypress"
      },
      {
        "word": "face",
        "pos": "n.",
        "definition": "臉",
        "sentence": "Wash your _____ before bed.",
        "translation": "睡前洗臉。",
        "answer": "face",
        "id": "face"
      },
      {
        "word": "ace",
        "pos": "n.",
        "definition": "王牌",
        "sentence": "He is the _____ of the team.",
        "translation": "他是球隊的王牌。",
        "answer": "ace",
        "id": "ace"
      },
      {
        "word": "race",
        "pos": "n./v.",
        "definition": "比賽；競速",
        "sentence": "They will _____ to the finish line.",
        "translation": "他們將競速到終點線。",
        "answer": "race",
        "id": "race"
      },
      {
        "word": "place",
        "pos": "n.",
        "definition": "地方",
        "sentence": "This is a nice _____ to sit.",
        "translation": "這是個坐下的好地方。",
        "answer": "place",
        "id": "place"
      },
      {
        "word": "space",
        "pos": "n.",
        "definition": "太空；空間",
        "sentence": "Astronauts travel to _____.",
        "translation": "太空人前往太空旅行。",
        "answer": "space",
        "id": "space"
      },
      {
        "word": "grace",
        "pos": "n.",
        "definition": "優雅",
        "sentence": "She dances with _____.",
        "translation": "她優雅地跳舞。",
        "answer": "grace",
        "id": "grace"
      },
      {
        "word": "price",
        "pos": "n.",
        "definition": "價格",
        "sentence": "What is the _____ of this shirt?",
        "translation": "這件衣服的價格是多少？",
        "answer": "price",
        "id": "price"
      },
      {
        "word": "twice",
        "pos": "adv.",
        "definition": "兩次",
        "sentence": "I brush my teeth _____ a day.",
        "translation": "我每天刷兩次牙。",
        "answer": "twice",
        "id": "twice"
      },
      {
        "word": "ice",
        "pos": "n.",
        "definition": "冰",
        "sentence": "Can I have some _____ in my drink?",
        "translation": "我的飲料可以加一些冰嗎？",
        "answer": "ice",
        "id": "ice"
      },
      {
        "word": "nice",
        "pos": "adj.",
        "definition": "好的；友善的",
        "sentence": "She is a _____ girl.",
        "translation": "她是個好女孩。",
        "answer": "nice",
        "id": "nice"
      },
      {
        "word": "juice",
        "pos": "n.",
        "definition": "果汁",
        "sentence": "I like orange _____.",
        "translation": "我喜歡柳橙汁。",
        "answer": "juice",
        "id": "juice"
      },
      {
        "word": "bounce",
        "pos": "v.",
        "definition": "彈跳",
        "sentence": "The ball _____ s on the floor.",
        "translation": "球在地板上彈跳。",
        "answer": "bounce",
        "id": "bounce"
      },
      {
        "word": "dance",
        "pos": "v./n.",
        "definition": "跳舞",
        "sentence": "She loves to _____ to music.",
        "translation": "她喜歡隨著音樂跳舞。",
        "answer": "dance",
        "id": "dance"
      },
      {
        "word": "fence",
        "pos": "n.",
        "definition": "圍欄",
        "sentence": "There is a _____ around the garden.",
        "translation": "花園周圍有圍欄。",
        "answer": "fence",
        "id": "fence"
      },
      {
        "word": "pencil",
        "pos": "n.",
        "definition": "鉛筆",
        "sentence": "I write with a _____.",
        "translation": "我用鉛筆寫字。",
        "answer": "pencil",
        "id": "pencil"
      }
    ]
  },
  {
    "id": "soft-g-d",
    "title": "Soft g /dʒ/",
    "sourceHeading": "Soft g /dʒ/",
    "group": "Soft Letters",
    "items": [
      {
        "word": "gym",
        "pos": "n.",
        "definition": "健身房",
        "sentence": "I go to the _____ after school.",
        "translation": "我放學後去健身房。",
        "answer": "gym",
        "id": "gym"
      },
      {
        "word": "gene",
        "pos": "n.",
        "definition": "基因",
        "sentence": "We inherit _____s from our parents.",
        "translation": "我們從父母那裡繼承基因。",
        "answer": "gene",
        "id": "gene"
      },
      {
        "word": "giraffe",
        "pos": "n.",
        "definition": "長頸鹿",
        "sentence": "The _____ has a very long neck.",
        "translation": "長頸鹿有很長的脖子。",
        "answer": "giraffe",
        "id": "giraffe"
      },
      {
        "word": "ginger",
        "pos": "n.",
        "definition": "薑",
        "sentence": "Mom puts _____ in the soup.",
        "translation": "媽媽在湯裡加薑。",
        "answer": "ginger",
        "id": "ginger"
      },
      {
        "word": "giant",
        "pos": "n./adj.",
        "definition": "巨人；巨大的",
        "sentence": "There is a _____ tree in the park.",
        "translation": "公園裡有一棵巨大的樹。",
        "answer": "giant",
        "id": "giant"
      },
      {
        "word": "gentle",
        "pos": "adj.",
        "definition": "溫柔的",
        "sentence": "Please be _____ with the baby.",
        "translation": "對待嬰兒要溫柔。",
        "answer": "gentle",
        "id": "gentle"
      },
      {
        "word": "general",
        "pos": "adj.",
        "definition": "一般的",
        "sentence": "In _____ , I like vegetables.",
        "translation": "一般來說，我喜歡蔬菜。",
        "answer": "general",
        "id": "general"
      },
      {
        "word": "genius",
        "pos": "n.",
        "definition": "天才",
        "sentence": "Einstein was a _____.",
        "translation": "愛因斯坦是個天才。",
        "answer": "genius",
        "id": "genius"
      },
      {
        "word": "geography",
        "pos": "n.",
        "definition": "地理",
        "sentence": "I study _____ at school.",
        "translation": "我在學校學地理。",
        "answer": "geography",
        "id": "geography"
      },
      {
        "word": "geometry",
        "pos": "n.",
        "definition": "幾何學",
        "sentence": "We learn _____ in math class.",
        "translation": "我們在數學課學幾何學。",
        "answer": "geometry",
        "id": "geometry"
      },
      {
        "word": "age",
        "pos": "n.",
        "definition": "年齡",
        "sentence": "What is your _____?",
        "translation": "你幾歲？",
        "answer": "age",
        "id": "age"
      },
      {
        "word": "page",
        "pos": "n.",
        "definition": "頁",
        "sentence": "Turn to _____ ten.",
        "translation": "翻到第十頁。",
        "answer": "page",
        "id": "page"
      },
      {
        "word": "cage",
        "pos": "n.",
        "definition": "籠子",
        "sentence": "The bird is in a _____.",
        "translation": "鳥在籠子裡。",
        "answer": "cage",
        "id": "cage"
      },
      {
        "word": "stage",
        "pos": "n.",
        "definition": "舞台",
        "sentence": "She danced on the _____.",
        "translation": "她在舞台上跳舞。",
        "answer": "stage",
        "id": "stage"
      },
      {
        "word": "manage",
        "pos": "v.",
        "definition": "管理；設法",
        "sentence": "Can you _____ without my help?",
        "translation": "你能不靠我的幫助自己想辦法嗎？",
        "answer": "manage",
        "id": "manage"
      },
      {
        "word": "damage",
        "pos": "n./v.",
        "definition": "損壞",
        "sentence": "The storm caused a lot of _____.",
        "translation": "暴風雨造成了很多損壞。",
        "answer": "damage",
        "id": "damage"
      },
      {
        "word": "image",
        "pos": "n.",
        "definition": "圖像；印象",
        "sentence": "The _____ on the screen is clear.",
        "translation": "螢幕上的圖像很清晰。",
        "answer": "image",
        "id": "image"
      },
      {
        "word": "message",
        "pos": "n.",
        "definition": "訊息",
        "sentence": "I sent her a _____ .",
        "translation": "我給她傳了一則訊息。",
        "answer": "message",
        "id": "message"
      },
      {
        "word": "village",
        "pos": "n.",
        "definition": "村莊",
        "sentence": "They live in a small _____.",
        "translation": "他們住在一個小村莊裡。",
        "answer": "village",
        "id": "village"
      },
      {
        "word": "college",
        "pos": "n.",
        "definition": "大學",
        "sentence": "She studies at a _____ in Taipei.",
        "translation": "她在台北的大學念書。",
        "answer": "college",
        "id": "college"
      },
      {
        "word": "orange",
        "pos": "n.",
        "definition": "柳橙",
        "sentence": "I like to eat _____s.",
        "translation": "我喜歡吃柳橙。",
        "answer": "orange",
        "id": "orange"
      },
      {
        "word": "change",
        "pos": "v./n.",
        "definition": "改變；找零",
        "sentence": "Can you _____ this bill?",
        "translation": "你可以幫我換零錢嗎？",
        "answer": "change",
        "id": "change"
      },
      {
        "word": "strange",
        "pos": "adj.",
        "definition": "奇怪的",
        "sentence": "That is a _____ noise.",
        "translation": "那個聲音很奇怪。",
        "answer": "strange",
        "id": "strange"
      },
      {
        "word": "arrange",
        "pos": "v.",
        "definition": "安排",
        "sentence": "Can you _____ a meeting?",
        "translation": "你可以安排一個會議嗎？",
        "answer": "arrange",
        "id": "arrange"
      },
      {
        "word": "engine",
        "pos": "n.",
        "definition": "引擎",
        "sentence": "The car _____ is broken.",
        "translation": "汽車引擎壞了。",
        "answer": "engine",
        "id": "engine"
      },
      {
        "word": "engineer",
        "pos": "n.",
        "definition": "工程師",
        "sentence": "She is a software _____.",
        "translation": "她是一位軟體工程師。",
        "answer": "engineer",
        "id": "engineer"
      },
      {
        "word": "imagine",
        "pos": "v.",
        "definition": "想像",
        "sentence": "_____ you are on a beach.",
        "translation": "想像你在海灘上。",
        "answer": "imagine",
        "id": "imagine"
      },
      {
        "word": "urgent",
        "pos": "adj.",
        "definition": "緊急的",
        "sentence": "This is an _____ message.",
        "translation": "這是一則緊急訊息。",
        "answer": "urgent",
        "id": "urgent"
      },
      {
        "word": "suggest",
        "pos": "v.",
        "definition": "建議",
        "sentence": "I _____ you drink more water.",
        "translation": "我建議你多喝水。",
        "answer": "suggest",
        "id": "suggest"
      },
      {
        "word": "danger",
        "pos": "n.",
        "definition": "危險",
        "sentence": "The sign says _____ .",
        "translation": "標誌上寫著危險。",
        "answer": "danger",
        "id": "danger"
      }
    ]
  },
  {
    "id": "kn-n",
    "title": "kn = n",
    "sourceHeading": "kn=n",
    "items": [
      {
        "word": "knee",
        "pos": "n",
        "definition": "膝蓋",
        "sentence": "What's wrong? I hurt my _________. My __________ hurts.",
        "translation": "你怎麼了。我傷到我的膝 蓋。我的膝蓋痛",
        "answer": "knee",
        "id": "knee"
      },
      {
        "word": "knife",
        "pos": "n",
        "definition": "刀子",
        "sentence": "Please be careful with the ______.",
        "translation": "請小心使用刀子。",
        "answer": "knife",
        "id": "knife"
      },
      {
        "word": "knock",
        "pos": "v",
        "definition": "敲",
        "sentence": "Someone is ______ing on the door.",
        "translation": "有人正在敲門。",
        "answer": "knock",
        "id": "knock"
      },
      {
        "word": "kneel",
        "pos": "v",
        "definition": "跪下",
        "sentence": "She ______s to pray to God every night.",
        "translation": "她每晚跪下向上帝祈禱。",
        "answer": "kneel",
        "id": "kneel"
      },
      {
        "word": "knit-knitting",
        "pos": "v",
        "definition": "編織",
        "sentence": "My grandmother is ______________ a sweater.",
        "translation": "我的祖母正在編織毛衣。",
        "answer": "knit",
        "id": "knit-knitting"
      },
      {
        "word": "knob",
        "pos": "n",
        "definition": "把手",
        "sentence": "Turn the ______ to open the door.",
        "translation": "轉動把手開門。",
        "answer": "knob",
        "id": "knob"
      },
      {
        "word": "knot",
        "pos": "n",
        "definition": "打結",
        "sentence": "There is a ______ in the rope.",
        "translation": "繩子上有一個打結。",
        "answer": "knot",
        "id": "knot"
      },
      {
        "word": "know",
        "pos": "v",
        "definition": "知道",
        "sentence": "Excuse me. Where is the library? Sorry, I don't ___________________.",
        "translation": "不好意思。圖書館在哪裡？ 抱歉，我不知道",
        "answer": "know",
        "id": "know"
      },
      {
        "word": "knight",
        "pos": "n",
        "definition": "騎士",
        "sentence": "In the story, the __________ saves the princess.",
        "translation": "在故事中，騎士拯救了公 主。",
        "answer": "knight",
        "id": "knight"
      }
    ],
    "group": "Other Phonics Rules"
  },
  {
    "id": "ng",
    "title": "ng",
    "sourceHeading": "ng: ㄥ",
    "items": [
      {
        "word": "king",
        "pos": "n",
        "definition": "國王",
        "sentence": "He is a ________",
        "translation": "他是一位國王。",
        "answer": "king",
        "id": "king"
      },
      {
        "word": "ring",
        "pos": "n",
        "definition": "戒指",
        "sentence": "She has a beautiful ________.",
        "translation": "她有一個美麗的戒指。",
        "answer": "ring",
        "id": "ring"
      },
      {
        "word": "bring",
        "pos": "v",
        "definition": "攜帶，帶來",
        "sentence": "Remember to _________ an umbrella. It's rainy today.",
        "translation": "記得帶把傘，今天下雨",
        "answer": "bring",
        "id": "bring"
      },
      {
        "word": "wing",
        "pos": "n",
        "definition": "翅膀",
        "sentence": "Birds have ________s.",
        "translation": "鳥兒有翅膀。",
        "answer": "wing",
        "id": "wing"
      },
      {
        "word": "sing",
        "pos": "v",
        "definition": "唱歌",
        "sentence": "They like to ________ together.",
        "translation": "他們喜歡一起唱歌。",
        "answer": "sing",
        "id": "sing"
      },
      {
        "word": "morning",
        "pos": "n",
        "definition": "早晨",
        "sentence": "I wake up at 7 o'clock every ________.",
        "translation": "我每個早晨七點起床。",
        "answer": "morning",
        "id": "morning"
      },
      {
        "word": "evening",
        "pos": "n",
        "definition": "傍晚",
        "sentence": "We have dinner in the ________.",
        "translation": "我們在傍晚吃晚餐。",
        "answer": "evening",
        "id": "evening"
      },
      {
        "word": "English",
        "pos": "n",
        "definition": "英文",
        "sentence": "We are learning ________.",
        "translation": "我們正在學習英文。",
        "answer": "English",
        "id": "english"
      },
      {
        "word": "boring",
        "pos": "adj",
        "definition": "無聊的",
        "sentence": "This video is _________. It's not funny.",
        "translation": "這部影片很無聊。它不好笑",
        "answer": "boring",
        "id": "boring"
      },
      {
        "word": "interesting",
        "pos": "adj",
        "definition": "有趣的",
        "sentence": "This video is _________. It's very funny.",
        "translation": "這部影片很有趣。它好好笑",
        "answer": "interesting",
        "id": "interesting"
      },
      {
        "word": "exciting",
        "pos": "adj",
        "definition": "令人興奮的",
        "sentence": "Our team won the game. The news is _________.",
        "translation": "我們隊贏得了比賽。這消息令 人興奮",
        "answer": "exciting",
        "id": "exciting"
      },
      {
        "word": "stocking",
        "pos": "n",
        "definition": "長襪",
        "sentence": "She put a red ________ on the fireplace on Christmas Eve.",
        "translation": "她在聖誕夜放一隻紅色的長襪 在火爐前。",
        "answer": "stocking",
        "id": "stocking"
      },
      {
        "word": "go swimming",
        "pos": "v",
        "definition": "去游泳",
        "sentence": "It's hot today. Let's ___ _____________ today.",
        "translation": "今天好熱，我們去游泳吧 go jogging, go running v 去慢跑: What do they do after school? They _____ ____________ after school 他們放學後做什麼? 他們放學 後去慢跑",
        "answer": "go swimming",
        "id": "go-swimming"
      },
      {
        "word": "go hiking",
        "pos": "v",
        "definition": "去健行",
        "sentence": "What do you do on the weekend? I _____ ______________ on the weekend.",
        "translation": "你周末做什麼? 我周末去健行",
        "answer": "go hiking",
        "id": "go-hiking"
      },
      {
        "word": "go camping",
        "pos": "v",
        "definition": "去健行",
        "sentence": "What do you do on the weekend? We _____ ___________ on the weekend.",
        "translation": "你們周末做什麼? 我們周末去 健行",
        "answer": "go camping",
        "id": "go-camping"
      },
      {
        "word": "go fishing",
        "pos": "v",
        "definition": "去釣魚",
        "sentence": "What does he do on the weekend? He ____es _____________ on the weekend.",
        "translation": "他周末做什麼? 他周末去釣魚",
        "answer": "go fishing",
        "id": "go-fishing"
      },
      {
        "word": "go shopping",
        "pos": "v",
        "definition": "去逛街買東西",
        "sentence": "Let's ___ _______________ after school. Sure!",
        "translation": "我們下課後去逛街購物吧。沒 問題! go biking, go cycling v 去騎腳踏車: What does she do after school? She ____es ___________________ after school. 她放學後做什麼? 她放學後去 騎腳踏車 go mountain climbing v 去爬山: We will _________ ________________ this Sunday. 本週日我們會去爬山",
        "answer": "go shopping",
        "id": "go-shopping"
      },
      {
        "word": "long",
        "pos": "adj",
        "definition": "長的",
        "sentence": "She has beautiful _________ hair.",
        "translation": "她有漂亮的長頭髮",
        "answer": "long",
        "id": "long"
      },
      {
        "word": "song",
        "pos": "n",
        "definition": "歌曲",
        "sentence": "Let's sing my favorite ________.",
        "translation": "我們一起唱我最喜歡的歌曲吧!",
        "answer": "song",
        "id": "song"
      },
      {
        "word": "along",
        "pos": "prep",
        "definition": "沿著",
        "sentence": "What is he doing? He is riding a bike ________ the river.",
        "translation": "他現在正在做什麼? 他現在正 在騎腳踏車沿著河濱",
        "answer": "along",
        "id": "along"
      },
      {
        "word": "wrong",
        "pos": "adj",
        "definition": "錯誤的",
        "sentence": "My answer is _________. Your answer is right.",
        "translation": "我的答案是錯的。你的答案是 對的 What's wrong with you? phr. 你發生什麼事? __________ __________ ____ ________? I don't feel well. I have a cold, a fever, and a headache. 你出什麼問題? 我身體不舒 服。我有感冒，發燒和頭痛",
        "answer": "wrong",
        "id": "wrong"
      },
      {
        "word": "ping-pong",
        "pos": "n",
        "definition": "桌球",
        "sentence": "They play ________ every weekend.",
        "translation": "他們每個週末都打桌球。",
        "answer": "ping",
        "id": "ping-pong"
      },
      {
        "word": "tongue",
        "pos": "n",
        "definition": "舌頭",
        "sentence": "The doctor checks my _______________.",
        "translation": "醫生檢查我的舌頭。",
        "answer": "tongue",
        "id": "tongue"
      }
    ],
    "group": "Other Phonics Rules"
  },
  {
    "id": "nk",
    "title": "nk",
    "sourceHeading": "nk:ㄥ k",
    "items": [
      {
        "word": "ink",
        "pos": "n",
        "definition": "墨水",
        "sentence": "My pen is out of ________.",
        "translation": "我的筆沒墨水了",
        "answer": "ink",
        "id": "ink"
      },
      {
        "word": "pink",
        "pos": "adj",
        "definition": "粉紅色",
        "sentence": "Her dress is ________.",
        "translation": "她的洋裝是粉紅色的。",
        "answer": "pink",
        "id": "pink"
      },
      {
        "word": "wink",
        "pos": "v",
        "definition": "眨眼睛",
        "sentence": "The girl is _________ing at me",
        "translation": "這女孩對我眨眼睛",
        "answer": "wink",
        "id": "wink"
      },
      {
        "word": "link",
        "pos": "v",
        "definition": "連結",
        "sentence": "Don't click on the _________. It's a scam",
        "translation": "不要按這個連結。這是詐騙",
        "answer": "link",
        "id": "link"
      },
      {
        "word": "think",
        "pos": "v",
        "definition": "思考/認為",
        "sentence": "I ________ it's a good idea. What do you ________?",
        "translation": "我認為這是個好主意。你覺得 呢?",
        "answer": "think",
        "id": "think"
      },
      {
        "word": "drink",
        "pos": "v",
        "definition": "喝",
        "sentence": "They ________ water after running.",
        "translation": "他們跑步後喝水。",
        "answer": "drink",
        "id": "drink"
      },
      {
        "word": "stink",
        "pos": "v",
        "definition": "發臭",
        "sentence": "My socks _________.",
        "translation": "我的襪子好臭",
        "answer": "stink",
        "id": "stink"
      },
      {
        "word": "stinky tofu",
        "pos": "n",
        "definition": "臭豆腐",
        "sentence": "Do you like ___________ ___________? Yes, I do. /No, I don't.",
        "translation": "你喜歡臭豆腐嗎?是的/不是",
        "answer": "stinky tofu",
        "id": "stinky-tofu"
      },
      {
        "word": "bank",
        "pos": "n",
        "definition": "銀行",
        "sentence": "He goes to the ________ on Mondays.",
        "translation": "他週一去銀行。",
        "answer": "bank",
        "id": "bank"
      },
      {
        "word": "thank",
        "pos": "v",
        "definition": "感謝",
        "sentence": "________ you very much.",
        "translation": "非常感謝你。 I'm good, thanks! phr. 不用了，謝謝 (拒絕別人提供的協助) Would you like some water? Yes, please./ _____ _____________, _____________. 你想要一點水嗎?是的請你給我 / 不用了,謝謝。",
        "answer": "thank",
        "id": "thank"
      },
      {
        "word": "blank",
        "pos": "adj",
        "definition": "空白的",
        "sentence": "Please fill in the ________. Write down your name in the _________ space.",
        "translation": "請填空。在空白處寫下你的名 字",
        "answer": "blank",
        "id": "blank"
      },
      {
        "word": "drunk",
        "pos": "adj",
        "definition": "喝醉的",
        "sentence": "He is __________. __________ driving is dangerous.",
        "translation": "他喝醉了。酒駕很危險",
        "answer": "drunk",
        "id": "drunk"
      }
    ],
    "group": "Other Phonics Rules"
  },
  {
    "id": "wr-r",
    "title": "wr = r",
    "sourceHeading": "wr=r",
    "items": [
      {
        "word": "wrap",
        "pos": "v",
        "definition": "包裹",
        "sentence": "Can you ______ this gift for me?",
        "translation": "你能幫我包裹這個禮物嗎？",
        "answer": "wrap",
        "id": "wrap"
      },
      {
        "word": "wrapper",
        "pos": "n",
        "definition": "包裝紙",
        "sentence": "Please throw away the candy ______.",
        "translation": "請扔掉糖果的包裝紙。",
        "answer": "wrapper",
        "id": "wrapper"
      },
      {
        "word": "wrist",
        "pos": "n",
        "definition": "手腕",
        "sentence": "She wears a watch on her ______.",
        "translation": "她在手腕上戴著一塊手錶。",
        "answer": "wrist",
        "id": "wrist"
      },
      {
        "word": "wristband",
        "pos": "n",
        "definition": "手環",
        "sentence": "He wears a _______________ for ID.",
        "translation": "他戴著一個手環以作識別。",
        "answer": "wristband",
        "id": "wristband"
      },
      {
        "word": "write",
        "pos": "v",
        "definition": "寫",
        "sentence": "Please ______ your name on the paper.",
        "translation": "請在紙上寫下你的名字。",
        "answer": "write",
        "id": "write"
      },
      {
        "word": "wrong",
        "pos": "adj",
        "definition": "錯誤的",
        "sentence": "That answer is ______.",
        "translation": "那個答案是錯誤的。",
        "answer": "wrong",
        "id": "wrong"
      },
      {
        "word": "wreck",
        "pos": "n",
        "definition": "毀壞",
        "sentence": "The car was a ______ after the crash.",
        "translation": "撞擊後，汽車完全毀壞了。",
        "answer": "wreck",
        "id": "wreck"
      },
      {
        "word": "wrestle",
        "pos": "v",
        "definition": "摔跤",
        "sentence": "The boys like to ______ in the playground.",
        "translation": "男孩們喜歡在操場上摔跤。",
        "answer": "wrestle",
        "id": "wrestle"
      },
      {
        "word": "wring",
        "pos": "v",
        "definition": "擰",
        "sentence": "She ______s the wet towel to get water out.",
        "translation": "她擰乾了濕毛巾以去除水 分。",
        "answer": "wring",
        "id": "wring"
      },
      {
        "word": "wrinkle",
        "pos": "n",
        "definition": "皺紋",
        "sentence": "My grandma and grandpa have many ___________________s on their faces.",
        "translation": "我爺爺奶奶臉上有很多皺紋",
        "answer": "wrinkle",
        "id": "wrinkle"
      },
      {
        "word": "wrath",
        "pos": "n",
        "definition": "憤怒",
        "sentence": "He is afraid of the ______ of his parents.",
        "translation": "他害怕他父母的憤怒。",
        "answer": "wrath",
        "id": "wrath"
      },
      {
        "word": "wreath",
        "pos": "n",
        "definition": "花圈",
        "sentence": "There is a ______ on the door during Christmas.",
        "translation": "聖誕節期間，門上掛著一個 花圈。",
        "answer": "wreath",
        "id": "wreath"
      }
    ],
    "group": "Other Phonics Rules"
  }
];
