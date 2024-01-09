'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import { useRecoilState, useRecoilValue } from 'recoil';
import { postsPageState, postsSearchState } from '@/app/_recoil/post/atoms';
import Empty from '@/app/_common/components/Empty/Empty';
import { Post } from '@/app/_common/components/Post';
import PostTitle from '@/app/_common/components/PostTitle/PostTItle';
import PostTitleInfo from '@/app/_common/components/PostTitleInfo/PostTItleInfo';
import ThumbnailIcon from '@/assets/svg/document.svg';
import useGetPosts from '@/app/_remotes/useGetPosts';

export default function Posts() {
  const [pageState, setPageState] = useRecoilState(postsPageState);
  const searchState = useRecoilValue(postsSearchState);
  const { data } = useGetPosts({
    page: pageState.page,
    search: searchState.search,
    searchType: searchState.searchType,
  });
  const { data: posts, total = 0 } = data || {};

  useEffect(() => {
    setPageState({ ...pageState, total });
  }, [data]);

  const isEmpty = posts.length === 0;

  return (
    <>
      {isEmpty && <Empty text="검색결과가 없습니다." />}
      {posts?.map((post) => (
        <Post>
          <Post.Thumbnail>
            <Image alt="thumbnail" src={ThumbnailIcon} width="65" height="50" />
          </Post.Thumbnail>
          <Post.TitleContainer>
            <PostTitle label={post.label} title={post.title} />
            <PostTitleInfo post={post} />
          </Post.TitleContainer>
        </Post>
      ))}
    </>
  );
}
