import {DiscussionEmbed} from "disqus-react"
const DisqusComments = ({ post, fullUrl }) => {
  const disqusShortname = "mangekyoreader"
  const disqusConfig = {
    url: fullUrl,
    identifier: anime.id, // Single post id
    title: anime.title // Single post title
  }
  return (
    <div>
      <DiscussionEmbed
        shortname={disqusShortname}
        config={disqusConfig}
      />
    </div>
  )
}
export default DisqusComments;