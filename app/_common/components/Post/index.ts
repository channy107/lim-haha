import PostMain from './PostMain';
import Thumbnail from './Thumbnail';
import TitleContainer from './TitleContainer';

export const Post = Object.assign(PostMain, {
  Thumbnail: Thumbnail,
  TitleContainer: TitleContainer,
});
