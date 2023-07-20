import getPostMetadata from "@/lib/getPostMetadata"
import ListPosts from "./components/ListPosts"


export default function Home() {

  //tag the multiple elements inside the list to know the order and re-render
  const postMetadata = getPostMetadata();
  const listPosts = postMetadata.map((post) => (
    <ListPosts key={post.slug} {...post} />
  ));

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {listPosts}
    </div>
  )
}
