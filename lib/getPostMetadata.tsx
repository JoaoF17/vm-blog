import { PostMetaData } from "@/app/components/PostMetaData";
import fs from "fs";
import matter from "gray-matter";

export default function getPostMetadata (): PostMetaData[] {
  const folder = "posts/";
  const files = fs.readdirSync(folder);
  const markDownPosts = files.filter((file) => file.endsWith(".md"));
  //Get gray-matter data from each file
  const posts = markDownPosts.map((fileName) => {
    const fileContents = fs.readFileSync(`posts/${fileName}`, "utf-8");
    const matterResult = matter(fileContents);
    return{
      title: matterResult.data.title,
      date: matterResult.data.date,
      description: matterResult.data.description,
      slug: fileName.replace(".md", ""),
    };
  });

  return posts.sort((a,b) => {if (a.date < b.date) { return 1} else {return -1}});
}
