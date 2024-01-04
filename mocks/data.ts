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

export { boardMenus, notifications };
