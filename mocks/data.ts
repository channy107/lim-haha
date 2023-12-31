const boardMenus = [
  {
    id: '1',
    name: '👍임하하',
    subBoardMenus: [
      { id: 1, name: '임하하', url: '/best' },
      { id: 2, name: '알렉산드리아 짤 도서관', url: '/humor' },
    ],
    url: '/best',
  },
  {
    id: '2',
    name: '전체글',
    subBoardMenus: [{ id: 1, name: '전체 게시판 목록', url: '/boards' }],
    url: '/new',
  },
  {
    id: '3',
    name: '임착맨',
    subBoardMenus: [
      { id: 1, name: '방송일정 및 공지', url: '/notice' },
      { id: 2, name: '임착맨', url: '/stream_free' },
      { id: 3, name: '임착맨 짤', url: '/stream_meme' },
      { id: 4, name: '임착맨 팬아트', url: '/stream_fanart' },
    ],
    url: '/new/im',
  },
  {
    id: '4',
    name: '웃음',
    subBoardMenus: [
      { id: 1, name: '알렉산드리아 짤 도서관', url: '/humor' },
      { id: 2, name: '유머', url: '/humor_user' },
      { id: 3, name: '이야기&썰', url: '/story' },
    ],
    url: '/new/humor',
  },
  {
    id: '5',
    name: '운동',
    subBoardMenus: [
      { id: 1, name: '축구', url: '/football' },
      { id: 2, name: '야구', url: '/baseball' },
      { id: 3, name: '기타스포츠', url: '/other_sports' },
      { id: 4, name: '운동&다이어트', url: '/exercise' },
    ],
    url: '/new/sports',
  },
];

const notifications = [
  {
    id: '1',
    type: 'dudle',
    title: '[선정작] 침하하 두들 상시 모집!',
    content: 'content example',
    commentCount: 19,
    author: { name: '침하하 관리팀', type: 'admin' },
    createAt: '1704328764076',
    viewCount: 9081,
    likes: 180,
  },
  {
    id: '2',
    type: 'notice',
    title: '[방송일정] 1/1월 ~ 1/7 일 방송일정 안내',
    content: 'content example',
    commentCount: 260,
    author: { name: '침착맨', type: 'admin' },
    createAt: '1704328764076',
    viewCount: 434333,
    likes: 130,
  },
  {
    id: '3',
    type: 'notice',
    title: '[공지] 2024년 기념 시청자 참여 콘텐츠 및 침투부 어워즈 투표 안내',
    content: 'content example',
    commentCount: 184,
    author: { name: '침착맨', type: 'admin' },
    createAt: '1704328764076',
    viewCount: 90481,
    likes: 3343,
  },
];

const boards = {
  total: 0,
  data: [
    {
      id: '1',
      thumbnail: '',
      title: '의사 두명과 함께하는 대화 주제',
      label: '침착맨',
      content: 'content example',
      commentCount: 13,
      author: { name: 'author1', type: 'user' },
      createAt: '1704328764076',
      viewCount: 9081,
      likes: 180,
    },
    {
      id: '2',
      thumbnail: '',
      title: '[곽민수] 애굽민수님 공항에서 만남',
      label: '곽민수',
      content: 'content example',
      commentCount: 3,
      author: { name: 'author2', type: 'user' },
      createAt: '1704328764076',
      viewCount: 901,
      likes: 18,
    },
    {
      id: '3',
      thumbnail: '',
      title: '[영상] 새싹님 오디션보신 음악 믹싱해왔습니다',
      label: '영상',
      content: 'content example',
      commentCount: 5,
      author: { name: 'author3', type: 'user' },
      createAt: '1704328764076',
      viewCount: 90,
      likes: 10,
    },
    {
      id: '4',
      thumbnail: '',
      title: '[자유] 성하늘 : 또 거짓말에 거짓말에 거짓말하시네',
      label: '인터넷방송',
      content: 'content example',
      commentCount: 3,
      author: { name: 'author4', type: 'user' },
      createAt: '1699282800000',
      viewCount: 908,
      likes: 180,
    },
    {
      id: '5',
      thumbnail: '',
      title: '의사 두명과 함께하는 대화 주제333',
      label: '침착맨',
      content: 'content example',
      commentCount: 13,
      author: { name: 'author5', type: 'user' },
      createAt: '1704328764076',
      viewCount: 9081,
      likes: 180,
    },
    {
      id: '6',
      thumbnail: '',
      title: '[빠니보틀] 빠니 구독자 200만명 달성 경😎축',
      label: '빠니보틀',
      content: 'content example',
      commentCount: 13,
      author: { name: 'author6', type: 'user' },
      createAt: '1699282800000',
      viewCount: 9081,
      likes: 180,
    },
    {
      id: '7',
      thumbnail: '',
      title: '[자유] 성하늘 : 또 거짓말에 거짓말에 거짓말하시네777',
      label: '인터넷방송',
      content: 'content search example',
      commentCount: 3,
      author: { name: 'author7', type: 'user' },
      createAt: '1699282800000',
      viewCount: 908,
      likes: 180,
    },
    {
      id: '8',
      thumbnail: '',
      title: '[빠니보틀] 빠니 구독자 200만명 달성 경😎축888',
      label: '빠니보틀',
      content: 'content search example',
      commentCount: 13,
      author: { name: 'author8', type: 'user' },
      createAt: '1704328764076',
      viewCount: 91,
      likes: 18,
    },
    {
      id: '9',
      thumbnail: '',
      title: '[빠니보틀] 빠니 구독자 200만명 달성 경😎축999',
      label: '빠니보틀',
      content: 'contentsearch example',
      commentCount: 13,
      author: { name: 'author9', type: 'user' },
      createAt: '1702738800000',
      viewCount: 91,
      likes: 18,
    },
    {
      id: '10',
      thumbnail: '',
      title: '[빠니보틀] 빠니 구독자 200만명 달성 경😎축10',
      label: '빠니보틀',
      content: 'content exsearchample',
      commentCount: 13,
      author: { name: 'author10', type: 'user' },
      createAt: '1702738800000',
      viewCount: 91,
      likes: 18,
    },
    {
      id: '11',
      thumbnail: '',
      title: '[영상] 새싹님 오디션보신 음악 믹싱해왔습니다11',
      label: '영상',
      content: 'content example',
      commentCount: 5,
      author: { name: 'author11', type: 'user' },
      createAt: '1699282800000',
      viewCount: 90,
      likes: 10,
    },
    {
      id: '12',
      thumbnail: '',
      title: '[영상] 새싹님 오디션보신 음악 믹싱해왔습니다12',
      label: '영상',
      content: 'content example',
      commentCount: 5,
      author: { name: 'author12', type: 'user' },
      createAt: '1702738800000',
      viewCount: 90,
      likes: 10,
    },
    {
      id: '13',
      thumbnail: '',
      title: '[영상] 새싹님 오디션보신 음악 믹싱해왔습니다13332',
      label: '영상',
      content: 'content example',
      commentCount: 5,
      author: { name: 'author13', type: 'user' },
      createAt: '1702738800000',
      viewCount: 90,
      likes: 10,
    },
    {
      id: '14',
      thumbnail: '',
      title: '[영상] 새싹님 오디션보신 음악 믹싱해왔습니다3343412',
      label: '영상',
      content: 'content example',
      commentCount: 5,
      author: { name: 'author14', type: 'user' },
      createAt: '1702738800000',
      viewCount: 90,
      likes: 10,
    },
    {
      id: '15',
      thumbnail: '',
      title: '[영상] 새싹님 오디션보신 음악 믹싱해왔습니다123432',
      label: '영상',
      content: 'content example',
      commentCount: 5,
      author: { name: 'author15', type: 'user' },
      createAt: '1702738800000',
      viewCount: 90,
      likes: 10,
    },
    {
      id: '16',
      thumbnail: '',
      title: '[영상] 새싹님 오디션보신 음악 믹싱해왔습니다155552',
      label: '영상',
      content: 'content example',
      commentCount: 5,
      author: { name: 'author16', type: 'user' },
      createAt: '1702738800000',
      viewCount: 90,
      likes: 10,
    },
    {
      id: '17',
      thumbnail: '',
      title: '[영상] 새싹님 오디션보신 음악 믹싱해왔습니다12',
      label: '영상',
      content: 'content example',
      commentCount: 5,
      author: { name: 'author17', type: 'user' },
      createAt: '1702738800000',
      viewCount: 90,
      likes: 10,
    },
    {
      id: '18',
      thumbnail: '',
      title: '[영상] 새싹님 오디션보신 음악 믹싱해왔습니다12',
      label: '영상',
      content: 'content example',
      commentCount: 5,
      author: { name: 'author12', type: 'user' },
      createAt: '1702738800000',
      viewCount: 90,
      likes: 10,
    },
    {
      id: '19',
      thumbnail: '',
      title: '[영상] 새싹님 오디션보신 음악 믹싱해왔습니다12',
      label: '영상',
      content: 'content example',
      commentCount: 5,
      author: { name: 'author12', type: 'user' },
      createAt: '1702738800000',
      viewCount: 90,
      likes: 10,
    },
    {
      id: '20',
      thumbnail: '',
      title: '[영상] 새싹님 오디션보신 음악 믹싱해왔습니다12',
      label: '영상',
      content: 'content example',
      commentCount: 5,
      author: { name: 'author12', type: 'user' },
      createAt: '1702738800000',
      viewCount: 90,
      likes: 10,
    },
    {
      id: '21',
      thumbnail: '',
      title: '[영상] 새싹님 오디션보신 음악 믹싱해왔습니다12',
      label: '영상',
      content: 'content example',
      commentCount: 5,
      author: { name: 'author12', type: 'user' },
      createAt: '1702738800000',
      viewCount: 90,
      likes: 10,
    },
    {
      id: '22',
      thumbnail: '',
      title: '[영상] 새싹님 오디션보신 음악 믹싱해왔습니다12',
      label: '영상',
      content: 'content example',
      commentCount: 5,
      author: { name: 'author12', type: 'user' },
      createAt: '1702738800000',
      viewCount: 90,
      likes: 10,
    },
    {
      id: '23',
      thumbnail: '',
      title: '[영상] 새싹님 오디션보신 음악 믹싱해왔습니다12',
      label: '영상',
      content: 'content example',
      commentCount: 5,
      author: { name: 'author12', type: 'user' },
      createAt: '1702738800000',
      viewCount: 90,
      likes: 10,
    },
    {
      id: '24',
      thumbnail: '',
      title: '[영상] 새싹님 오디션보신 음악 믹싱해왔습니다12',
      label: '영상',
      content: 'content example',
      commentCount: 5,
      author: { name: 'author12', type: 'user' },
      createAt: '1702738800000',
      viewCount: 90,
      likes: 10,
    },
    {
      id: '25',
      thumbnail: '',
      title: '[영상] 새싹님 오디션보신 음악 믹싱해왔습니다12',
      label: '영상',
      content: 'content example',
      commentCount: 5,
      author: { name: 'author12', type: 'user' },
      createAt: '1702738800000',
      viewCount: 90,
      likes: 10,
    },
    {
      id: '26',
      thumbnail: '',
      title: '[영상] 새싹님 오디션보신 음악 믹싱해왔습니다12',
      label: '영상',
      content: 'content example',
      commentCount: 5,
      author: { name: 'author12', type: 'user' },
      createAt: '1702738800000',
      viewCount: 90,
      likes: 10,
    },
    {
      id: '27',
      thumbnail: '',
      title: '[영상] 새싹님 오디션보신 음악 믹싱해왔습니다12',
      label: '영상',
      content: 'content example',
      commentCount: 5,
      author: { name: 'author12', type: 'user' },
      createAt: '1702738800000',
      viewCount: 90,
      likes: 10,
    },
    {
      id: '28',
      thumbnail: '',
      title: '[영상] 새싹님 오디션보신 음악 믹싱해왔습니다12',
      label: '영상',
      content: 'content example',
      commentCount: 5,
      author: { name: 'qu', type: 'user' },
      createAt: '1702738800000',
      viewCount: 90,
      likes: 10,
    },
    {
      id: '29',
      thumbnail: '',
      title: '[영상] 새싹님 오디션보신 음악 믹싱해왔습니다12',
      label: '영상',
      content: 'content example',
      commentCount: 5,
      author: { name: 'author29', type: 'user' },
      createAt: '1702738800000',
      viewCount: 90,
      likes: 10,
    },
    {
      id: '30',
      thumbnail: '',
      title: '[영상] 새싹님 오디션보신 음악 믹싱해왔습니다12',
      label: '영상',
      content: 'content example',
      commentCount: 5,
      author: { name: 'author30', type: 'user' },
      createAt: '1702738800000',
      viewCount: 90,
      likes: 10,
    },
    {
      id: '31',
      thumbnail: '',
      title: '[영상] 새싹님 오디션보신 음악 믹싱해왔습니다12',
      label: '영상',
      content: 'content example',
      commentCount: 5,
      author: { name: 'author12', type: 'user' },
      createAt: '1702738800000',
      viewCount: 90,
      likes: 10,
    },
    {
      id: '32',
      thumbnail: '',
      title: '[영상] 새싹님 오디션보신 음악 믹싱해왔습니다12',
      label: '영상',
      content: 'content example',
      commentCount: 5,
      author: { name: 'author12', type: 'user' },
      createAt: '1702738800000',
      viewCount: 90,
      likes: 10,
    },
  ],
};

export { boardMenus, notifications, boards };
