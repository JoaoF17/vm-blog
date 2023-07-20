import Link from "next/link";
import { PostMetaData } from "./PostMetaData";

export default function ListPosts(props: PostMetaData) {
  return(
    <div className="border border-green-800 p-4 rounded-md shadow-md">
        <p className="text-sm text-slate-400 mb-4">{props.date}</p>
        <Link href={`/posts/${props.slug}`} className="">
            <h2 className="font-bold text-green-700 hover:underline">{props.title}</h2>
        </Link>
        <p className="text-slate-700">{props.description}</p>
    </div>
  );
}