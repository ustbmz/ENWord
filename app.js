/* ================= 词库数据 =================
   每句包含中文、英文原句，以及逐词词性/释义标注 */
const WORD_BANK = [
  {
    topic: "生活",
    zh: "我弟弟成天吃垃圾食品（带一点夸张语气）",
    en: "My brother survives on junk food.",
    words: [
      { w: "My", pos: "代词", mean: "我的" },
      { w: "brother", pos: "名词", mean: "兄弟" },
      { w: "survives", pos: "动词", mean: "存活；靠…维持生活" },
      { w: "on", pos: "介词", mean: "依靠；在…上" },
      { w: "junk", pos: "名词", mean: "垃圾，废旧物" },
      { w: "food", pos: "名词", mean: "食物" }
    ]
  },
  {
    topic: "生活",
    zh: "你能把消息转告给她吗？",
    en: "Could you pass the message along?",
    words: [
      { w: "Could", pos: "动词", mean: "能，可以（礼貌请求）" },
      { w: "you", pos: "代词", mean: "你" },
      { w: "pass", pos: "动词", mean: "传递" },
      { w: "the", pos: "冠词", mean: "这个（定冠词）" },
      { w: "message", pos: "名词", mean: "消息" },
      { w: "along", pos: "副词", mean: "向前；转达" }
    ]
  },
  {
    topic: "生活",
    zh: "她每天早上都去慢跑。",
    en: "She goes jogging every morning.",
    words: [
      { w: "She", pos: "代词", mean: "她" },
      { w: "goes", pos: "动词", mean: "去（go 的第三人称单数）" },
      { w: "jogging", pos: "动词", mean: "慢跑" },
      { w: "every", pos: "形容词", mean: "每一个" },
      { w: "morning", pos: "名词", mean: "早晨" }
    ]
  },
  {
    topic: "生活",
    zh: "别担心，我可以自己处理。",
    en: "Don't worry, I can handle it myself.",
    words: [
      { w: "Don't", pos: "动词", mean: "不要（助动词否定）" },
      { w: "worry", pos: "动词", mean: "担心" },
      { w: "I", pos: "代词", mean: "我" },
      { w: "can", pos: "动词", mean: "能够" },
      { w: "handle", pos: "动词", mean: "处理" },
      { w: "it", pos: "代词", mean: "它" },
      { w: "myself", pos: "代词", mean: "我自己" }
    ]
  },
  {
    topic: "生活",
    zh: "这本书比那本书更有趣。",
    en: "This book is more interesting than that one.",
    words: [
      { w: "This", pos: "代词", mean: "这个" },
      { w: "book", pos: "名词", mean: "书" },
      { w: "is", pos: "动词", mean: "是" },
      { w: "more", pos: "副词", mean: "更" },
      { w: "interesting", pos: "形容词", mean: "有趣的" },
      { w: "than", pos: "介词", mean: "比" },
      { w: "that", pos: "代词", mean: "那个" },
      { w: "one", pos: "代词", mean: "一个（指代书）" }
    ]
  },
  {
    topic: "生活",
    zh: "他昨天把钱包弄丢了。",
    en: "He lost his wallet yesterday.",
    words: [
      { w: "He", pos: "代词", mean: "他" },
      { w: "lost", pos: "动词", mean: "丢失" },
      { w: "his", pos: "代词", mean: "他的" },
      { w: "wallet", pos: "名词", mean: "钱包" },
      { w: "yesterday", pos: "副词", mean: "昨天" }
    ]
  },
  {
    topic: "生活",
    zh: "我们应该趁天亮前出发。",
    en: "We should leave before it gets dark.",
    words: [
      { w: "We", pos: "代词", mean: "我们" },
      { w: "should", pos: "动词", mean: "应该" },
      { w: "leave", pos: "动词", mean: "出发；离开" },
      { w: "before", pos: "介词", mean: "在…之前" },
      { w: "it", pos: "代词", mean: "（天色）" },
      { w: "gets", pos: "动词", mean: "变得" },
      { w: "dark", pos: "形容词", mean: "黑暗的" }
    ]
  },
  {
    topic: "生活",
    zh: "她把音乐开得很大声。",
    en: "She turned the music up loudly.",
    words: [
      { w: "She", pos: "代词", mean: "她" },
      { w: "turned", pos: "动词", mean: "调（旋钮）" },
      { w: "the", pos: "冠词", mean: "这个" },
      { w: "music", pos: "名词", mean: "音乐" },
      { w: "up", pos: "副词", mean: "向上；调高" },
      { w: "loudly", pos: "副词", mean: "大声地" }
    ]
  },
  {
    topic: "生活",
    zh: "我朋友总是让我笑个不停。",
    en: "My friend always makes me laugh.",
    words: [
      { w: "My", pos: "代词", mean: "我的" },
      { w: "friend", pos: "名词", mean: "朋友" },
      { w: "always", pos: "副词", mean: "总是" },
      { w: "makes", pos: "动词", mean: "使，让" },
      { w: "me", pos: "代词", mean: "我（宾格）" },
      { w: "laugh", pos: "动词", mean: "笑" }
    ]
  },
  {
    topic: "生活",
    zh: "请在门口等我几分钟。",
    en: "Please wait for me at the door for a few minutes.",
    words: [
      { w: "Please", pos: "副词", mean: "请" },
      { w: "wait", pos: "动词", mean: "等待" },
      { w: "for", pos: "介词", mean: "为了" },
      { w: "me", pos: "代词", mean: "我" },
      { w: "at", pos: "介词", mean: "在" },
      { w: "the", pos: "冠词", mean: "这个" },
      { w: "door", pos: "名词", mean: "门" },
      { w: "for", pos: "介词", mean: "持续" },
      { w: "a", pos: "冠词", mean: "一个" },
      { w: "few", pos: "形容词", mean: "几个" },
      { w: "minutes", pos: "名词", mean: "分钟" }
    ]
  },
  {
    topic: "生活",
    zh: "我不知道该怎么解释这件事。",
    en: "I don't know how to explain this thing.",
    words: [
      { w: "I", pos: "代词", mean: "我" },
      { w: "don't", pos: "动词", mean: "不（助动词否定）" },
      { w: "know", pos: "动词", mean: "知道" },
      { w: "how", pos: "副词", mean: "如何" },
      { w: "to", pos: "介词", mean: "不定式符号" },
      { w: "explain", pos: "动词", mean: "解释" },
      { w: "this", pos: "代词", mean: "这个" },
      { w: "thing", pos: "名词", mean: "事情" }
    ]
  },
  {
    topic: "生活",
    zh: "天气真好，我们出去走走吧。",
    en: "The weather is so nice, let's go for a walk.",
    words: [
      { w: "The", pos: "冠词", mean: "这（定冠词）" },
      { w: "weather", pos: "名词", mean: "天气" },
      { w: "is", pos: "动词", mean: "是" },
      { w: "so", pos: "副词", mean: "如此" },
      { w: "nice", pos: "形容词", mean: "好的" },
      { w: "let's", pos: "动词", mean: "让我们" },
      { w: "go", pos: "动词", mean: "去" },
      { w: "for", pos: "介词", mean: "为了" },
      { w: "a", pos: "冠词", mean: "一个" },
      { w: "walk", pos: "名词", mean: "散步" }
    ]
  },
  /* ---------- 更多生活口语 ---------- */
  {
    topic: "生活",
    zh: "我通常早上七点起床。",
    en: "I usually get up at seven in the morning.",
    words: [
      { w: "I", pos: "代词", mean: "我" },
      { w: "usually", pos: "副词", mean: "通常" },
      { w: "get", pos: "动词", mean: "起（get up 起床）" },
      { w: "up", pos: "副词", mean: "向上" },
      { w: "at", pos: "介词", mean: "在（时间点）" },
      { w: "seven", pos: "数词", mean: "七" },
      { w: "in", pos: "介词", mean: "在…内" },
      { w: "the", pos: "冠词", mean: "定冠词" },
      { w: "morning", pos: "名词", mean: "早晨" }
    ]
  },
  {
    topic: "生活",
    zh: "你能帮我处理这份报告吗？",
    en: "Could you help me with this report?",
    words: [
      { w: "Could", pos: "动词", mean: "能（礼貌请求）" },
      { w: "you", pos: "代词", mean: "你" },
      { w: "help", pos: "动词", mean: "帮助" },
      { w: "me", pos: "代词", mean: "我（宾格）" },
      { w: "with", pos: "介词", mean: "在…方面" },
      { w: "this", pos: "代词", mean: "这个" },
      { w: "report", pos: "名词", mean: "报告" }
    ]
  },
  {
    topic: "生活",
    zh: "火车八点三十分准时发车。",
    en: "The train leaves at eight thirty sharp.",
    words: [
      { w: "The", pos: "冠词", mean: "定冠词" },
      { w: "train", pos: "名词", mean: "火车" },
      { w: "leaves", pos: "动词", mean: "离开；出发" },
      { w: "at", pos: "介词", mean: "在" },
      { w: "eight", pos: "数词", mean: "八" },
      { w: "thirty", pos: "数词", mean: "三十" },
      { w: "sharp", pos: "副词", mean: "准时地" }
    ]
  },
  {
    topic: "生活",
    zh: "她正在花园里看书。",
    en: "She is reading a book in the garden.",
    words: [
      { w: "She", pos: "代词", mean: "她" },
      { w: "is", pos: "动词", mean: "是（be动词）" },
      { w: "reading", pos: "动词", mean: "阅读" },
      { w: "a", pos: "冠词", mean: "一个" },
      { w: "book", pos: "名词", mean: "书" },
      { w: "in", pos: "介词", mean: "在…里" },
      { w: "the", pos: "冠词", mean: "定冠词" },
      { w: "garden", pos: "名词", mean: "花园" }
    ]
  },
  {
    topic: "生活",
    zh: "昨晚我们点了披萨当晚餐。",
    en: "We ordered pizza for dinner last night.",
    words: [
      { w: "We", pos: "代词", mean: "我们" },
      { w: "ordered", pos: "动词", mean: "点（餐）；订购" },
      { w: "pizza", pos: "名词", mean: "披萨" },
      { w: "for", pos: "介词", mean: "作为" },
      { w: "dinner", pos: "名词", mean: "晚餐" },
      { w: "last", pos: "形容词", mean: "上一个的" },
      { w: "night", pos: "名词", mean: "夜晚" }
    ]
  },
  {
    topic: "生活",
    zh: "从今天早上起一直在下雨。",
    en: "It has been raining since this morning.",
    words: [
      { w: "It", pos: "代词", mean: "它（指天气）" },
      { w: "has", pos: "动词", mean: "已经（助动词）" },
      { w: "been", pos: "动词", mean: "一直（be的过去分词）" },
      { w: "raining", pos: "动词", mean: "下雨" },
      { w: "since", pos: "介词", mean: "自从" },
      { w: "this", pos: "代词", mean: "这个" },
      { w: "morning", pos: "名词", mean: "早晨" }
    ]
  },
  {
    topic: "生活",
    zh: "这咖啡尝起来有点太浓了。",
    en: "This coffee tastes a little too strong.",
    words: [
      { w: "This", pos: "代词", mean: "这个" },
      { w: "coffee", pos: "名词", mean: "咖啡" },
      { w: "tastes", pos: "动词", mean: "尝起来" },
      { w: "a", pos: "冠词", mean: "一个" },
      { w: "little", pos: "副词", mean: "一点儿" },
      { w: "too", pos: "副词", mean: "太" },
      { w: "strong", pos: "形容词", mean: "浓的；强的" }
    ]
  },
  {
    topic: "生活",
    zh: "离开前请关灯。",
    en: "Please turn off the lights before you leave.",
    words: [
      { w: "Please", pos: "副词", mean: "请" },
      { w: "turn", pos: "动词", mean: "转动（turn off 关闭）" },
      { w: "off", pos: "副词", mean: "关闭" },
      { w: "the", pos: "冠词", mean: "定冠词" },
      { w: "lights", pos: "名词", mean: "灯" },
      { w: "before", pos: "介词", mean: "在…之前" },
      { w: "you", pos: "代词", mean: "你" },
      { w: "leave", pos: "动词", mean: "离开" }
    ]
  },
  {
    topic: "生活",
    zh: "他在深圳做软件工程师。",
    en: "He works as a software engineer in Shenzhen.",
    words: [
      { w: "He", pos: "代词", mean: "他" },
      { w: "works", pos: "动词", mean: "工作" },
      { w: "as", pos: "介词", mean: "作为" },
      { w: "a", pos: "冠词", mean: "一个" },
      { w: "software", pos: "名词", mean: "软件" },
      { w: "engineer", pos: "名词", mean: "工程师" },
      { w: "in", pos: "介词", mean: "在" },
      { w: "Shenzhen", pos: "名词", mean: "深圳" }
    ]
  },
  {
    topic: "生活",
    zh: "我很期待周末。",
    en: "I am looking forward to the weekend.",
    words: [
      { w: "I", pos: "代词", mean: "我" },
      { w: "am", pos: "动词", mean: "是（be动词）" },
      { w: "looking", pos: "动词", mean: "看（look forward to 期待）" },
      { w: "forward", pos: "副词", mean: "向前" },
      { w: "to", pos: "介词", mean: "到" },
      { w: "the", pos: "冠词", mean: "定冠词" },
      { w: "weekend", pos: "名词", mean: "周末" }
    ]
  },
  /* ---------- 区块链专题 ---------- */
  {
    topic: "区块链",
    zh: "区块链是一个记录每笔交易的分布式账本。",
    en: "Blockchain is a distributed ledger that records every transaction.",
    words: [
      { w: "Blockchain", pos: "名词", mean: "区块链" },
      { w: "is", pos: "动词", mean: "是" },
      { w: "a", pos: "冠词", mean: "一个" },
      { w: "distributed", pos: "形容词", mean: "分布式的" },
      { w: "ledger", pos: "名词", mean: "账本" },
      { w: "that", pos: "代词", mean: "引导定语从句" },
      { w: "records", pos: "动词", mean: "记录" },
      { w: "every", pos: "形容词", mean: "每一" },
      { w: "transaction", pos: "名词", mean: "交易" }
    ]
  },
  {
    topic: "区块链",
    zh: "比特币是第一个使用区块链技术的加密货币。",
    en: "Bitcoin was the first cryptocurrency to use blockchain technology.",
    words: [
      { w: "Bitcoin", pos: "名词", mean: "比特币" },
      { w: "was", pos: "动词", mean: "是（过去式）" },
      { w: "the", pos: "冠词", mean: "定冠词" },
      { w: "first", pos: "形容词", mean: "第一个的" },
      { w: "cryptocurrency", pos: "名词", mean: "加密货币" },
      { w: "to", pos: "介词", mean: "不定式符号" },
      { w: "use", pos: "动词", mean: "使用" },
      { w: "blockchain", pos: "名词", mean: "区块链" },
      { w: "technology", pos: "名词", mean: "技术" }
    ]
  },
  {
    topic: "区块链",
    zh: "智能合约在以太坊网络上自动运行。",
    en: "Smart contracts run automatically on the Ethereum network.",
    words: [
      { w: "Smart", pos: "形容词", mean: "智能的" },
      { w: "contracts", pos: "名词", mean: "合约" },
      { w: "run", pos: "动词", mean: "运行" },
      { w: "automatically", pos: "副词", mean: "自动地" },
      { w: "on", pos: "介词", mean: "在…上" },
      { w: "the", pos: "冠词", mean: "定冠词" },
      { w: "Ethereum", pos: "名词", mean: "以太坊" },
      { w: "network", pos: "名词", mean: "网络" }
    ]
  },
  {
    topic: "区块链",
    zh: "每个区块都包含前一个区块的哈希值。",
    en: "Each block contains a hash of the previous block.",
    words: [
      { w: "Each", pos: "形容词", mean: "每个" },
      { w: "block", pos: "名词", mean: "区块" },
      { w: "contains", pos: "动词", mean: "包含" },
      { w: "a", pos: "冠词", mean: "一个" },
      { w: "hash", pos: "名词", mean: "哈希值" },
      { w: "of", pos: "介词", mean: "…的" },
      { w: "the", pos: "冠词", mean: "定冠词" },
      { w: "previous", pos: "形容词", mean: "先前的" },
      { w: "block", pos: "名词", mean: "区块" }
    ]
  },
  {
    topic: "区块链",
    zh: "矿工验证交易并把新区块加到链上。",
    en: "Miners validate transactions and add new blocks to the chain.",
    words: [
      { w: "Miners", pos: "名词", mean: "矿工" },
      { w: "validate", pos: "动词", mean: "验证" },
      { w: "transactions", pos: "名词", mean: "交易" },
      { w: "and", pos: "连词", mean: "并且" },
      { w: "add", pos: "动词", mean: "添加" },
      { w: "new", pos: "形容词", mean: "新的" },
      { w: "blocks", pos: "名词", mean: "区块" },
      { w: "to", pos: "介词", mean: "到" },
      { w: "the", pos: "冠词", mean: "定冠词" },
      { w: "chain", pos: "名词", mean: "链" }
    ]
  },
  {
    topic: "区块链",
    zh: "你的私钥必须始终保密。",
    en: "Your private key must be kept secret at all times.",
    words: [
      { w: "Your", pos: "代词", mean: "你的" },
      { w: "private", pos: "形容词", mean: "私人的" },
      { w: "key", pos: "名词", mean: "密钥" },
      { w: "must", pos: "动词", mean: "必须" },
      { w: "be", pos: "动词", mean: "被（被动语态）" },
      { w: "kept", pos: "动词", mean: "保持（keep过去分词）" },
      { w: "secret", pos: "形容词", mean: "秘密的" },
      { w: "at", pos: "介词", mean: "在" },
      { w: "all", pos: "形容词", mean: "所有的" },
      { w: "times", pos: "名词", mean: "时候" }
    ]
  },
  {
    topic: "区块链",
    zh: "永远不要在网上和任何人分享你的助记词。",
    en: "Never share your seed phrase with anyone online.",
    words: [
      { w: "Never", pos: "副词", mean: "绝不" },
      { w: "share", pos: "动词", mean: "分享" },
      { w: "your", pos: "代词", mean: "你的" },
      { w: "seed", pos: "名词", mean: "种子" },
      { w: "phrase", pos: "名词", mean: "词组（seed phrase 助记词）" },
      { w: "with", pos: "介词", mean: "和" },
      { w: "anyone", pos: "代词", mean: "任何人" },
      { w: "online", pos: "副词", mean: "在网上" }
    ]
  },
  {
    topic: "区块链",
    zh: "去中心化金融让人们无需银行即可借贷。",
    en: "Decentralized finance allows people to lend and borrow without banks.",
    words: [
      { w: "Decentralized", pos: "形容词", mean: "去中心化的" },
      { w: "finance", pos: "名词", mean: "金融" },
      { w: "allows", pos: "动词", mean: "允许" },
      { w: "people", pos: "名词", mean: "人们" },
      { w: "to", pos: "介词", mean: "不定式符号" },
      { w: "lend", pos: "动词", mean: "借出" },
      { w: "and", pos: "连词", mean: "和" },
      { w: "borrow", pos: "动词", mean: "借入" },
      { w: "without", pos: "介词", mean: "没有" },
      { w: "banks", pos: "名词", mean: "银行" }
    ]
  },
  {
    topic: "区块链",
    zh: "NFT 代表独特数字资产的所有权。",
    en: "NFTs represent ownership of unique digital assets.",
    words: [
      { w: "NFTs", pos: "名词", mean: "非同质化代币" },
      { w: "represent", pos: "动词", mean: "代表" },
      { w: "ownership", pos: "名词", mean: "所有权" },
      { w: "of", pos: "介词", mean: "…的" },
      { w: "unique", pos: "形容词", mean: "独特的" },
      { w: "digital", pos: "形容词", mean: "数字的" },
      { w: "assets", pos: "名词", mean: "资产" }
    ]
  },
  {
    topic: "区块链",
    zh: "网络拥堵时 gas 费用会变高。",
    en: "Gas fees become high when the network is crowded.",
    words: [
      { w: "Gas", pos: "名词", mean: "gas 燃料费" },
      { w: "fees", pos: "名词", mean: "费用" },
      { w: "become", pos: "动词", mean: "变得" },
      { w: "high", pos: "形容词", mean: "高的" },
      { w: "when", pos: "连词", mean: "当…时" },
      { w: "the", pos: "冠词", mean: "定冠词" },
      { w: "network", pos: "名词", mean: "网络" },
      { w: "is", pos: "动词", mean: "是" },
      { w: "crowded", pos: "形容词", mean: "拥挤的" }
    ]
  },
  {
    topic: "区块链",
    zh: "共识机制帮助所有节点就同一状态达成一致。",
    en: "A consensus mechanism helps all nodes agree on the same state.",
    words: [
      { w: "A", pos: "冠词", mean: "一个" },
      { w: "consensus", pos: "名词", mean: "共识" },
      { w: "mechanism", pos: "名词", mean: "机制" },
      { w: "helps", pos: "动词", mean: "帮助" },
      { w: "all", pos: "形容词", mean: "所有的" },
      { w: "nodes", pos: "名词", mean: "节点" },
      { w: "agree", pos: "动词", mean: "同意；达成一致" },
      { w: "on", pos: "介词", mean: "在…上" },
      { w: "the", pos: "冠词", mean: "定冠词" },
      { w: "same", pos: "形容词", mean: "相同的" },
      { w: "state", pos: "名词", mean: "状态" }
    ]
  },
  {
    topic: "区块链",
    zh: "这个代币有固定供应量。",
    en: "The token has a fixed supply.",
    words: [
      { w: "The", pos: "冠词", mean: "定冠词" },
      { w: "token", pos: "名词", mean: "代币" },
      { w: "has", pos: "动词", mean: "有" },
      { w: "a", pos: "冠词", mean: "一个" },
      { w: "fixed", pos: "形容词", mean: "固定的" },
      { w: "supply", pos: "名词", mean: "供应量" }
    ]
  },
  {
    topic: "区块链",
    zh: "稳定币旨在保持其价值稳定。",
    en: "Stablecoins are designed to keep their value steady.",
    words: [
      { w: "Stablecoins", pos: "名词", mean: "稳定币" },
      { w: "are", pos: "动词", mean: "是" },
      { w: "designed", pos: "动词", mean: "设计" },
      { w: "to", pos: "介词", mean: "不定式符号" },
      { w: "keep", pos: "动词", mean: "保持" },
      { w: "their", pos: "代词", mean: "它们的" },
      { w: "value", pos: "名词", mean: "价值" },
      { w: "steady", pos: "形容词", mean: "稳定的" }
    ]
  },
  {
    topic: "区块链",
    zh: "我把代币从交易所转到了冷钱包。",
    en: "I moved my tokens from the exchange to a cold wallet.",
    words: [
      { w: "I", pos: "代词", mean: "我" },
      { w: "moved", pos: "动词", mean: "转移" },
      { w: "my", pos: "代词", mean: "我的" },
      { w: "tokens", pos: "名词", mean: "代币" },
      { w: "from", pos: "介词", mean: "从" },
      { w: "the", pos: "冠词", mean: "定冠词" },
      { w: "exchange", pos: "名词", mean: "交易所" },
      { w: "to", pos: "介词", mean: "到" },
      { w: "a", pos: "冠词", mean: "一个" },
      { w: "cold", pos: "形容词", mean: "冷的（cold wallet 冷钱包）" },
      { w: "wallet", pos: "名词", mean: "钱包" }
    ]
  },
  {
    topic: "区块链",
    zh: "以太坊的价格今天下跌了百分之十。",
    en: "The price of Ethereum dropped by ten percent today.",
    words: [
      { w: "The", pos: "冠词", mean: "定冠词" },
      { w: "price", pos: "名词", mean: "价格" },
      { w: "of", pos: "介词", mean: "…的" },
      { w: "Ethereum", pos: "名词", mean: "以太坊" },
      { w: "dropped", pos: "动词", mean: "下跌" },
      { w: "by", pos: "介词", mean: "以…幅度" },
      { w: "ten", pos: "数词", mean: "十" },
      { w: "percent", pos: "名词", mean: "百分比" },
      { w: "today", pos: "副词", mean: "今天" }
    ]
  },
  {
    topic: "区块链",
    zh: "哈希函数把任意长度的数据转换成固定长度的字符串。",
    en: "A hash function converts data of any length into a fixed-size string.",
    words: [
      { w: "A", pos: "冠词", mean: "一个" },
      { w: "hash", pos: "名词", mean: "哈希" },
      { w: "function", pos: "名词", mean: "函数" },
      { w: "converts", pos: "动词", mean: "转换" },
      { w: "data", pos: "名词", mean: "数据" },
      { w: "of", pos: "介词", mean: "…的" },
      { w: "any", pos: "形容词", mean: "任何" },
      { w: "length", pos: "名词", mean: "长度" },
      { w: "into", pos: "介词", mean: "成为" },
      { w: "a", pos: "冠词", mean: "一个" },
      { w: "fixed-size", pos: "形容词", mean: "固定大小的" },
      { w: "string", pos: "名词", mean: "字符串" }
    ]
  },
  {
    topic: "区块链",
    zh: "公钥可以分享，但私钥绝对不能泄露。",
    en: "A public key can be shared, but a private key must never be revealed.",
    words: [
      { w: "A", pos: "冠词", mean: "一个" },
      { w: "public", pos: "形容词", mean: "公开的" },
      { w: "key", pos: "名词", mean: "密钥" },
      { w: "can", pos: "动词", mean: "可以" },
      { w: "be", pos: "动词", mean: "被" },
      { w: "shared", pos: "动词", mean: "分享（过去分词）" },
      { w: "but", pos: "连词", mean: "但是" },
      { w: "a", pos: "冠词", mean: "一个" },
      { w: "private", pos: "形容词", mean: "私人的" },
      { w: "key", pos: "名词", mean: "密钥" },
      { w: "must", pos: "动词", mean: "必须" },
      { w: "never", pos: "副词", mean: "绝不" },
      { w: "be", pos: "动词", mean: "被" },
      { w: "revealed", pos: "动词", mean: "泄露（过去分词）" }
    ]
  }
];

/* ================= 状态与存储 ================= */
const STORE_KEY = "wordReviewProgress_v1";
let state = {
  index: 0,
  hintCount: 0,
  answers: {},        // { 句子索引: [用户输入的各词] }
  checked: {},        // { 句子索引: [每词对错 true/false] }
  history: [],        // { en, zh, correct, time }
  mastered: {},       // { "单词|释义": true }
  filter: "all",
  topic: "all",
  posShown: false,
  keySound: true,
  speak: { voiceURI: "", rate: 1.05, pitch: 1.0 }
};

function loadState() {
  try {
    const raw = localStorage.getItem(STORE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      state = Object.assign(state, parsed);
      state.speak = Object.assign({ voiceURI: "", rate: 1.05, pitch: 1.0 }, parsed.speak || {});
    }
  } catch (e) { console.warn("读取进度失败", e); }
}
function saveState() {
  try { localStorage.setItem(STORE_KEY, JSON.stringify(state)); } catch (e) {}
}

/* ================= DOM 工具 ================= */
const $ = (id) => document.getElementById(id);
function toast(msg) {
  const t = $("toast");
  t.textContent = msg;
  t.classList.remove("hidden");
  clearTimeout(t._timer);
  t._timer = setTimeout(() => t.classList.add("hidden"), 2200);
}
function normalize(s) {
  return (s || "").trim().toLowerCase().replace(/[.,!?;:，。！？、；：]/g, "").replace(/['’]/g, "'");
}

/* ===== 键盘敲击音效（Web Audio 实时合成，无外部文件） ===== */
let audioCtx = null;
let noiseBuffer = null;
function getAudioContext() {
  if (!audioCtx) {
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return null;
    audioCtx = new AC();
  }
  if (audioCtx.state === "suspended") audioCtx.resume();
  return audioCtx;
}
function getNoiseBuffer(ctx) {
  if (!noiseBuffer) {
    const len = Math.floor(ctx.sampleRate * 0.06);
    noiseBuffer = ctx.createBuffer(1, len, ctx.sampleRate);
    const data = noiseBuffer.getChannelData(0);
    for (let i = 0; i < len; i++) data[i] = Math.random() * 2 - 1;
  }
  return noiseBuffer;
}
/* 机械键盘"嗒"声：短噪声脉冲 + 低频敲击体，type='back' 为退格音 */
function playKeySound(type = "press") {
  if (!state.keySound) return;
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    const now = ctx.currentTime;
    const isBack = type === "back";

    // 高频咔哒
    const src = ctx.createBufferSource();
    src.buffer = getNoiseBuffer(ctx);
    const hp = ctx.createBiquadFilter();
    hp.type = "bandpass";
    hp.frequency.value = isBack ? 1400 : 2200;
    hp.Q.value = 0.8;
    const g1 = ctx.createGain();
    g1.gain.setValueAtTime(0.0001, now);
    g1.gain.exponentialRampToValueAtTime(isBack ? 0.18 : 0.26, now + 0.003);
    g1.gain.exponentialRampToValueAtTime(0.0001, now + 0.045);
    src.connect(hp); hp.connect(g1); g1.connect(ctx.destination);
    src.start(now); src.stop(now + 0.06);

    // 低频敲击body
    const osc = ctx.createOscillator();
    osc.type = "triangle";
    osc.frequency.setValueAtTime(isBack ? 150 : 210, now);
    osc.frequency.exponentialRampToValueAtTime(80, now + 0.04);
    const g2 = ctx.createGain();
    g2.gain.setValueAtTime(0.0001, now);
    g2.gain.exponentialRampToValueAtTime(0.18, now + 0.004);
    g2.gain.exponentialRampToValueAtTime(0.0001, now + 0.05);
    osc.connect(g2); g2.connect(ctx.destination);
    osc.start(now); osc.stop(now + 0.06);
  } catch (e) { /* 音频不可用时静默 */ }
}

/* ================= 听写练习 ================= */
function currentSentence() { return WORD_BANK[state.index]; }
let lastAnswerCorrect = false;  // 当前题是否已答对（答对后回车进入下一题）

function renderDictation() {
  const s = currentSentence();
  $("zhSentence").textContent = s.zh;
  $("sentenceIndex").textContent = `第 ${state.index + 1} / ${WORD_BANK.length} 句`;

  // 输入格
  const box = $("wordInputs");
  box.innerHTML = "";
  const saved = state.answers[state.index] || [];
  s.words.forEach((item, i) => {
    const slot = document.createElement("div");
    slot.className = "word-slot";
    const input = document.createElement("input");
    input.type = "text";
    input.autocomplete = "off";
    input.spellcheck = false;
    input.value = saved[i] || "";
    input.dataset.index = i;
    if (state.checked[state.index]) {
      input.classList.add(state.checked[state.index][i] ? "correct" : "wrong");
    }
    input.addEventListener("keydown", (e) => {
      if (e.key === "Backspace" || e.key === "Delete") playKeySound("back");
      onInputKey(e);
    });
    input.addEventListener("input", (e) => {
      // 退格由 keydown 处理，避免重复；仅字符输入时播放敲击声
      if (e.inputType !== "deleteContentBackward" && e.inputType !== "deleteContentForward") {
        playKeySound("press");
      }
      if (!state.answers[state.index]) state.answers[state.index] = [];
      state.answers[state.index][i] = input.value;
      input.classList.remove("correct", "wrong", "hinted");
      lastAnswerCorrect = false;
      $("feedback").textContent = "";
      $("feedback").className = "feedback";
    });
    slot.appendChild(input);
    box.appendChild(slot);
  });
  // 句末标点
  const punct = document.createElement("span");
  punct.className = "punctuation";
  punct.textContent = s.en.slice(-1).match(/[.,!?]/) ? s.en.slice(-1) : ".";
  box.appendChild(punct);

  // 提示次数
  $("hintCount").textContent = `${state.hintCount > 3 ? 3 : state.hintCount}/3`;
  $("btnHint").disabled = state.hintCount >= 3;

  // 反馈
  $("feedback").textContent = "";
  $("feedback").className = "feedback";
  const savedCheck = state.checked[state.index];
  lastAnswerCorrect = Array.isArray(savedCheck) && savedCheck.length === s.words.length && savedCheck.every(Boolean);
  if (lastAnswerCorrect) $("feedback").textContent = "✓ 本题已答对，按回车进入下一题。";

  // 词性答案
  renderPosSentence();
  updateProgress();
  updateFooter();
  saveState();
}

function onInputKey(e) {
  const inputs = [...document.querySelectorAll("#wordInputs input")];
  const idx = inputs.indexOf(e.target);
  if (e.key === " " || e.key === "Enter") {
    e.preventDefault();
    playKeySound("press");
    if (e.key === "Enter" && lastAnswerCorrect) {
      // 已答对：回车直接进入下一题
      goTo(state.index + 1);
      return;
    }
    if (e.key === " " && idx < inputs.length - 1) {
      inputs[idx + 1].focus();
    } else {
      checkAnswer();
    }
  } else if (e.key === "Backspace" && !e.target.value && idx > 0) {
    inputs[idx - 1].focus();
  }
}

function checkAnswer() {
  const s = currentSentence();
  const inputs = [...document.querySelectorAll("#wordInputs input")];
  const results = [];
  let allCorrect = true;
  inputs.forEach((input, i) => {
    const ok = normalize(input.value) === normalize(s.words[i].w);
    results.push(ok);
    input.classList.remove("correct", "wrong");
    input.classList.add(ok ? "correct" : "wrong");
    if (!ok) allCorrect = false;
  });

  state.checked[state.index] = results;
  const wrongCount = results.filter(r => !r).length;

  if (allCorrect) {
    lastAnswerCorrect = true;
    $("feedback").textContent = "🎉 完全正确！太棒了！按回车进入下一题。";
    $("feedback").className = "feedback ok pop";
    // 记录掌握单词
    s.words.forEach(item => { state.mastered[item.w + "|" + item.mean] = true; });
    // 历史记录去重（同句仅保留最新）
    state.history = state.history.filter(h => h.en !== s.en);
    state.history.unshift({ en: s.en, zh: s.zh, correct: true, time: Date.now() });
    toast("回答正确 ✓");
  } else {
    $("feedback").textContent = `还有 ${wrongCount} 个单词拼写有误，请检查标红的单词后重试。`;
    $("feedback").className = "feedback err shake";
    state.history = state.history.filter(h => h.en !== s.en);
    state.history.unshift({ en: s.en, zh: s.zh, correct: false, time: Date.now() });
  }
  saveState();
  updateFooter();
  if (state.index === WORD_BANK.length - 1) updateStatsPanel();
}

function showHint() {
  if (state.hintCount >= 3) return;
  const s = currentSentence();
  const inputs = [...document.querySelectorAll("#wordInputs input")];
  // 找到第一个未正确填写的词
  let target = -1;
  for (let i = 0; i < inputs.length; i++) {
    if (normalize(inputs[i].value) !== normalize(s.words[i].w)) { target = i; break; }
  }
  if (target < 0) { toast("已经全部填对啦"); return; }
  const word = s.words[target].w;
  const revealed = word.slice(0, Math.min(word.length, Math.floor(word.length / 2) + 1));
  inputs[target].value = revealed;
  inputs[target].classList.remove("correct", "wrong");
  inputs[target].classList.add("hinted");
  inputs[target].focus();
  if (!state.answers[state.index]) state.answers[state.index] = [];
  state.answers[state.index][target] = revealed;
  state.hintCount++;
  $("hintCount").textContent = `${state.hintCount}/3`;
  $("btnHint").disabled = state.hintCount >= 3;
  $("feedback").textContent = `已提示第 ${target + 1} 个单词：完整答案为「${word}」（${s.words[target].mean}）`;
  $("feedback").className = "feedback";
  saveState();
}

function resetAnswer() {
  const s = currentSentence();
  delete state.answers[state.index];
  delete state.checked[state.index];
  state.hintCount = 0;
  renderDictation();
  document.querySelector("#wordInputs input")?.focus();
  toast("已清空本题");
}

function goTo(index) {
  state.index = (index + WORD_BANK.length) % WORD_BANK.length;
  state.hintCount = 0;
  // 下一题时清除该题的提示计数是全局的简化处理
  renderDictation();
  document.querySelector("#wordInputs input")?.focus();
}

/* ================= 词性标注 / 发音 ================= */
function renderPosSentence() {
  const s = currentSentence();
  const box = $("posSentence");
  box.innerHTML = "";
  s.words.forEach(item => {
    const span = document.createElement("span");
    span.className = "pos-word";
    span.innerHTML = `<span class="w pos-${item.pos}">${escapeHtml(item.w)}</span><span class="p pos-${item.pos}">${item.pos}</span>`;
    box.appendChild(span);
  });
  box.classList.toggle("hidden", !state.posShown);
  $("btnTogglePos").textContent = state.posShown ? "隐藏答案 ▴" : "显示答案 ▾";
}

function escapeHtml(str) {
  return String(str).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

/* 挑选最自然的英语语音：本地优先 + 偏好高质量音色 */
function pickEnglishVoice() {
  if (!("speechSynthesis" in window)) return null;
  const voices = window.speechSynthesis.getVoices();
  // 用户手动指定
  if (state.speak.voiceURI) {
    const chosen = voices.find(v => v.voiceURI === state.speak.voiceURI);
    if (chosen) return chosen;
  }
  const en = voices.filter(v => /^en[-_]/i.test(v.lang));
  if (!en.length) return voices[0] || null;
  // 优先高质量英语音色（自然/女声优先）
  const preferred = ["Samantha", "Google US English", "Google UK English Female", "Microsoft Aria", "Microsoft Jenny", "Karen", "Daniel", "Alex"];
  for (const p of preferred) {
    const hit = en.find(v => v.name.includes(p) && v.localService) || en.find(v => v.name.includes(p));
    if (hit) return hit;
  }
  return en.find(v => v.localService) || en[0];
}

function speak(text, lang = "en-US") {
  if (!("speechSynthesis" in window)) { toast("当前浏览器不支持语音朗读"); return; }
  window.speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  const voice = pickEnglishVoice();
  if (voice) u.voice = voice;
  u.lang = voice ? voice.lang : lang;
  u.rate = state.speak.rate;
  u.pitch = state.speak.pitch;
  u.volume = 1;
  window.speechSynthesis.speak(u);
}

/* ================= 单词复习 ================= */
function collectWords() {
  const map = new Map();
  WORD_BANK.forEach(s => s.words.forEach(item => {
    const key = item.w.toLowerCase() + "|" + item.mean;
    if (!map.has(key)) map.set(key, { ...item, key, from: s.en, fromZh: s.zh, topic: s.topic || "生活" });
  }));
  return [...map.values()];
}

function renderReview() {
  let words = collectWords();
  if (state.topic && state.topic !== "all") words = words.filter(w => w.topic === state.topic);
  if (state.filter !== "all") words = words.filter(w => w.pos === state.filter);
  const grid = $("wordGrid");
  grid.innerHTML = "";
  words.forEach(w => {
    const card = document.createElement("div");
    card.className = "word-card" + (state.mastered[w.key] ? " mastered" : "");
    card.innerHTML = `
      <span class="wc-pos bg-${w.pos}">${w.pos}</span>
      <div class="wc-word">${escapeHtml(w.w)}</div>
      <div class="wc-meaning">${escapeHtml(w.mean)}</div>
      <div class="wc-topic ${w.topic === "区块链" ? "topic-chain" : ""}">${w.topic}</div>
    `;
    card.addEventListener("click", () => {
      state.mastered[w.key] = !state.mastered[w.key];
      saveState();
      renderReview();
      speak(w.w);
      toast(state.mastered[w.key] ? `已标记掌握：${w.w}` : `已取消掌握：${w.w}`);
    });
    grid.appendChild(card);
  });
  if (!words.length) grid.innerHTML = '<div class="empty-tip">该分类下暂无单词</div>';

  const s = currentSentence();
  const rBox = $("reviewSentence");
  rBox.innerHTML = "";
  s.words.forEach(item => {
    const span = document.createElement("span");
    span.className = "pos-word";
    span.innerHTML = `<span class="w pos-${item.pos}">${escapeHtml(item.w)}</span>`;
    rBox.appendChild(span);
  });
  $("reviewTranslation").textContent = s.zh;
}

/* ================= 统计 ================= */
function correctSentenceCount() {
  return new Set(state.history.filter(h => h.correct).map(h => h.en)).size;
}
function answeredSentenceCount() {
  return new Set(state.history.map(h => h.en)).size;
}
function masteredWordCount() { return Object.values(state.mastered).filter(Boolean).length; }
function accuracyRate() {
  const total = state.history.length;
  if (!total) return 0;
  return Math.round(state.history.filter(h => h.correct).length / total * 100);
}
function totalWordCount() { return WORD_BANK.reduce((sum, s) => sum + s.words.length, 0); }

function updateProgress() {
  const total = WORD_BANK.length;
  const done = answeredSentenceCount();
  const pct = total ? Math.round(done / total * 100) : 0;
  $("progressPct").textContent = pct + "%";
  $("progressFill").style.width = pct + "%";
}

function updateFooter() {
  $("footWords").textContent = masteredWordCount() + " / " + totalWordCount();
  $("footSentences").textContent = answeredSentenceCount() + " / " + WORD_BANK.length;
  $("footRate").textContent = accuracyRate() + "%";
}

function updateStatsPanel() {
  $("statTotal").textContent = answeredSentenceCount();
  $("statCorrect").textContent = correctSentenceCount();
  $("statWords").textContent = masteredWordCount();
  $("statRate").textContent = accuracyRate() + "%";

  // 各词性掌握情况
  const all = collectWords();
  const posList = ["名词", "动词", "形容词", "副词", "介词", "代词", "冠词", "其他"];
  $("statsBars").innerHTML = posList.map(pos => {
    const group = all.filter(w => w.pos === pos);
    if (!group.length) return "";
    const mastered = group.filter(w => state.mastered[w.key]).length;
    const pct = Math.round(mastered / group.length * 100);
    return `<div class="bar-row"><span class="bar-name">${pos}</span><span class="bar-track"><span class="bar-fill" style="width:${pct}%"></span></span><span class="bar-val">${mastered}/${group.length}</span></div>`;
  }).join("");

  // 历史记录
  const hist = $("historyList");
  if (!state.history.length) {
    hist.innerHTML = '<div class="empty-tip">还没有学习记录，快去做几道听写题吧～</div>';
  } else {
    hist.innerHTML = state.history.slice(0, 20).map(h => `
      <div class="history-item">
        <span class="hi-en">${escapeHtml(h.en)}</span>
        <span class="hi-res ${h.correct ? "ok" : "no"}">${h.correct ? "✓ 正确" : "✗ 错误"}</span>
      </div>`).join("");
  }
}

/* ================= 弹窗 ================= */
function openModal(html) {
  $("modalContent").innerHTML = html;
  $("modalMask").classList.remove("hidden");
}
function closeModal() { $("modalMask").classList.add("hidden"); }

/* 发音设置面板：选择语音、语速、音调并试听 */
function openSettings() {
  const voices = ("speechSynthesis" in window) ? window.speechSynthesis.getVoices() : [];
  const enVoices = voices.filter(v => /^en[-_]/i.test(v.lang));
  const recommended = pickEnglishVoice();
  const voiceOptions = enVoices.map(v =>
    `<option value="${escapeHtml(v.voiceURI)}" ${recommended && v.voiceURI === recommended.voiceURI ? "selected" : ""}>${escapeHtml(v.name)}${v.localService ? "（本地）" : ""}</option>`
  ).join("");

  openModal(`
    <h3>⚙️ 发音设置</h3>
    <p>当前词库：生活口语 + 区块链精选（${WORD_BANK.length} 句，${collectWords().length} 词）</p>
    <p>觉得发音别扭？在这里挑一个顺耳的英语音色，调好语速后记得点「保存设置」。</p>
    <div class="setting-row">
      <label>语音音色</label>
      <select id="setVoice">
        <option value="">自动选择（推荐）</option>
        ${voiceOptions}
      </select>
    </div>
    <div class="setting-row">
      <label>语速 <b id="rateVal">${state.speak.rate.toFixed(2)}</b></label>
      <input type="range" id="setRate" min="0.6" max="1.3" step="0.05" value="${state.speak.rate}">
    </div>
    <div class="setting-row">
      <label>音调 <b id="pitchVal">${state.speak.pitch.toFixed(2)}</b></label>
      <input type="range" id="setPitch" min="0.6" max="1.4" step="0.05" value="${state.speak.pitch}">
    </div>
    <div class="setting-row setting-toggle">
      <label for="setKeySound">⌨️ 键盘敲击声</label>
      <input type="checkbox" id="setKeySound" ${state.keySound ? "checked" : ""}>
    </div>
    <div class="setting-actions">
      <button class="btn btn-ghost" id="btnTryVoice">🔊 试听</button>
      <button class="btn btn-primary" id="btnSaveVoice">保存设置</button>
    </div>
    <p class="setting-tip">试听句：My brother survives on junk food.</p>
  `);

  $("setKeySound").addEventListener("change", e => {
    state.keySound = e.target.checked;
    saveState();
    if (state.keySound) playKeySound("press");
  });
  $("setRate").addEventListener("input", e => $("rateVal").textContent = (+e.target.value).toFixed(2));
  $("setPitch").addEventListener("input", e => $("pitchVal").textContent = (+e.target.value).toFixed(2));

  $("btnTryVoice").addEventListener("click", () => {
    const draft = {
      voiceURI: $("setVoice").value,
      rate: +$("setRate").value,
      pitch: +$("setPitch").value
    };
    const backup = state.speak;
    state.speak = draft;
    speak("My brother survives on junk food.");
    state.speak = backup;
  });
  $("btnSaveVoice").addEventListener("click", () => {
    state.speak = {
      voiceURI: $("setVoice").value,
      rate: +$("setRate").value,
      pitch: +$("setPitch").value
    };
    saveState();
    closeModal();
    toast("发音设置已保存");
  });
}

/* ================= 事件绑定 ================= */
function bindEvents() {
  // 模式切换
  document.querySelectorAll(".tab").forEach(tab => {
    tab.addEventListener("click", () => {
      document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
      document.querySelectorAll(".panel").forEach(p => p.classList.remove("active"));
      tab.classList.add("active");
      $("panel-" + tab.dataset.tab).classList.add("active");
      if (tab.dataset.tab === "review") renderReview();
      if (tab.dataset.tab === "stats") updateStatsPanel();
    });
  });

  // 听写控制
  $("btnCheck").addEventListener("click", checkAnswer);
  $("btnHint").addEventListener("click", showHint);
  $("btnReset").addEventListener("click", resetAnswer);
  $("btnPrev").addEventListener("click", () => goTo(state.index - 1));
  $("btnNext").addEventListener("click", () => goTo(state.index + 1));
  $("btnTogglePos").addEventListener("click", () => {
    state.posShown = !state.posShown;
    saveState();
    renderPosSentence();
  });
  $("btnSpeak").addEventListener("click", () => speak(currentSentence().en));

  // 主题筛选
  document.querySelectorAll(".topic-tab").forEach(tab => {
    tab.addEventListener("click", () => {
      document.querySelectorAll(".topic-tab").forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      state.topic = tab.dataset.topic;
      saveState();
      renderReview();
    });
  });

  // 词性筛选
  document.querySelectorAll(".chip-tab").forEach(chip => {
    chip.addEventListener("click", () => {
      document.querySelectorAll(".chip-tab").forEach(c => c.classList.remove("active"));
      chip.classList.add("active");
      state.filter = chip.dataset.filter;
      renderReview();
    });
  });

  // 统计清空
  $("btnClear").addEventListener("click", () => {
    if (!confirm("确定清空所有学习记录吗？此操作不可恢复。")) return;
    state = { index: 0, hintCount: 0, answers: {}, checked: {}, history: [], mastered: {}, filter: "all", topic: "all", posShown: false, keySound: true, speak: { voiceURI: "", rate: 1.05, pitch: 1.0 } };
    saveState();
    renderDictation();
    updateStatsPanel();
    toast("学习记录已清空");
  });

  // 帮助 / 设置
  $("btnHelp").addEventListener("click", () => openModal(`
    <h3>📖 使用说明</h3>
    <ul>
      <li><b>听写练习</b>：根据中文提示，在每个空格中输入对应的英文单词。</li>
      <li>按 <b>空格键</b> 切换到下一个单词，按 <b>Enter</b> 确认答案。</li>
      <li>点击「提示」可显示当前单词的前半部分与中文释义（每题最多 3 次）。</li>
      <li>点击「听发音」可朗读当前英文句子。</li>
      <li><b>单词复习</b>：按词性筛选单词，点击卡片可标记/取消「已掌握」。</li>
      <li>学习进度会自动保存在本地浏览器中。</li>
    </ul>`));
  $("btnSpeTop").addEventListener("click", openSettings);
  $("modalClose").addEventListener("click", closeModal);
  $("modalMask").addEventListener("click", e => { if (e.target === $("modalMask")) closeModal(); });

  // 全局 Enter 确认
  document.addEventListener("keydown", e => {
    if (e.key === "Enter" && !$("modalMask").classList.contains("hidden")) closeModal();
  });
}

/* ================= 初始化 ================= */
function init() {
  loadState();
  bindEvents();
  renderDictation();
  updateStatsPanel();
  document.querySelector("#wordInputs input")?.focus();
}
init();
