const PAGE_GROUP_COUNT = 5;
const PER_PAGE = 3;

const URLS = {
  SIGN_UP: '/join',
  LOG_IN: '/login',
};

const QUERY_KEYS = {
  POSTS: 'posts',
  MENUS: 'menus',
  NOTIFICATIONS: 'notifications',
};

enum BADGE_TYPE {
  NORMAL = 'normal',
  PRIMARY = 'primary',
}

const SEARCH_TYPE = {
  TITLE: 'title',
  CONTENT: 'content',
  TITLE_OR_CONTENT: 'titleOrContent',
};

export { PAGE_GROUP_COUNT, PER_PAGE, URLS, QUERY_KEYS, BADGE_TYPE, SEARCH_TYPE };
