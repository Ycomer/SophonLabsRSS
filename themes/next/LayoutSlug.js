import { getPageTableOfContents } from 'notion-utils'
import TocDrawerButton from './components/TocDrawerButton'
import LayoutBase from './LayoutBase'
import Header from './components/Header'
import Card from './components/Card'
import LatestPostsGroup from './components/LatestPostsGroup'
import ArticleDetail from './components/ArticleDetail'
import TocDrawer from './components/TocDrawer'
import { useRef } from 'react'
import CONFIG_NEXT from './config_next'
import { isBrowser } from '@/lib/utils'

export const LayoutSlug = (props) => {
  const { post, lock, rss } = props
  const latestPosts = rss?.channel?.item?.slice(0, 6)
  if (!lock && post?.blockMap?.block) {
    post.content = Object.keys(post.blockMap.block)
    post.toc = getPageTableOfContents(post, post.blockMap)
  }
  const drawerRight = useRef(null)
  const targetRef = isBrowser() ? document.getElementById('container') : null
  if (!post) {
    return <LayoutBase
          {...props}
          rightAreaSlot={
            CONFIG_NEXT.RIGHT_LATEST_POSTS && <Card><LatestPostsGroup posts={latestPosts} /></Card>
          }
        />
  }

  return (
    <LayoutBase
      {...props}
      headerSlot={CONFIG_NEXT.HOME_BANNER && <Header {...props} />}
      rightAreaSlot={
        CONFIG_NEXT.RIGHT_LATEST_POSTS && <Card><LatestPostsGroup posts={latestPosts} /></Card>
      }
    >
      {<ArticleDetail {...props} />}
    </LayoutBase>
  )
}
