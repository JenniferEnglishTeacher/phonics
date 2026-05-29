const PHONICS_RULES = [
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
  },
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
  }
];
