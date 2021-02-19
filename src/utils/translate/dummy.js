const example = [
  {
    origin: [
      '我',
      '爱',
      '吃',
      '辣',
      '的',
      '，',
      '朋友',
      '推荐了',
      '一家',
      '正宗',
      '的',
      '四川',
      '麻辣',
      '香',
      '锅',
      '。',
    ],
    pinyin: {
      text:
        'wǒ ài chī là de péngyou tuījiànle yìjiā zhèngzōng de Sìchuān málà xiāng guō',
      state: false,
    },
    naver: {
      text: '나는 매운 음식을 좋아해서 친구가 정통 사천 매운 솥을 추천했다.',
      state: false,
    },
    kakao: {
      text: '매운 맛을 좋아하고 친구는 정통 쓰촨마시향 팬을 추천한다.',
      state: false,
    },
  },
  {
    origin: [
      '我',
      '打算',
      '和',
      '几个',
      '好朋友',
      '一起',
      '去',
      '，',
      '所以',
      '打电话',
      '订',
      '位子',
      '。',
    ],
    pinyin: {
      text: 'wǒ dǎsuan hé jǐgè hǎopéngyǒu yìqǐ qù suǒyǐ dǎdiànhuà dìng wèizi',
      state: false,
    },
    naver: {
      text: '친한 친구 몇 명과 함께 가려고 전화해서 자리를 예약했어요.',
      state: false,
    },
    kakao: {
      text:
        '좋은 친구들 몇 명과 함께 갈 예정이어서 자리 예약을 하려고 전화를 걸었다.',
      state: false,
    },
  },
  {
    origin: [
      '可是',
      '那',
      '家',
      '餐厅',
      '的',
      '生意',
      '特别',
      '火',
      '，',
      '当天',
      '的',
      '位子',
      '都',
      '订',
      '满',
      '了',
      '。',
    ],
    pinyin: {
      text:
        'kěshì nà jiā Cāntīng de shēngyi tèbié huǒ dàngtiān de wèizi dōu dìng mǎn le',
      state: false,
    },
    naver: {
      text: '그런데 그 식당은 장사가 잘 돼 그날 자리가 다 예약이 꽉 찼어요.',
      state: false,
    },
    kakao: {
      text:
        '하지만 그 식당의 장사특례 불이 났고, 당일 자리는 모두 예약이 되어 있었다.',
      state: false,
    },
  },
  {
    origin: ['没办法', '，', '我', '只好', '订了', '第二', '天', '的', '。'],
    pinyin: {
      text: "méibànfǎ wǒ zhǐhǎo dìngle dì'èr tiān de",
      state: false,
    },
    naver: { text: '어쩔 수 없이 다음 날 예약을 했습니다.', state: false },
    kakao: { text: '어쩔 수 없어 다음날 예약을 해야 했어.', state: false },
  },
];

const placeholder =
  '번역할 내용을 입력하세요\n' +
  '아래는 예시입니다.\n' +
  '(꼭 줄바꿈을 하지 않아도 됩니다.)\n' +
  '(중국어 원문만 넣어주세요)\n\n' +
  '我爱吃辣的，朋友推荐了一家正宗的四川麻辣香锅。\n' +
  '我打算和几个好朋友一起去，所以打电话订位子。\n' +
  '可是那家餐厅的生意特别火，当天的位子都订满了。\n' +
  '没办法，我只好订了第二天的。';

export { example, placeholder };
