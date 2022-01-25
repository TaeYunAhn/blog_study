import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import PostItem from 'components/Main/PostItem'

export type PostType = {
  node: {
    id: string
    frontmatter: {
      title: string
      summary: string
      date: string
      categories: string[]
      thumbnail: {
        publicURL: string
      }
    }
  }
}

import { PostListItemType } from 'types/PostItem.types'

// 기존에 정의했던 PostListItemType 삭제

type PostListProps = {
  posts: PostListItemType[]
}


const PostList: FunctionComponent<PostListProps> = function ({
  posts,
}) {

const PostList: FunctionComponent<PostListProps> = function ({ posts }) {
  return (
    <PostListWrapper>
      {posts.map(
        ({
          node: { id, frontmatter },
        }: PostType) => (
          <PostItem
            {...frontmatter}
            link="https://www.google.co.kr/"
            key={id}
          />
        ),
      )}
    </PostListWrapper>
  )
}

export default PostList