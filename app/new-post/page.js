'use client'

import { createPost } from "@/action/posts"
import PostForm from "@/components/post-form"

export default function NewPostPage() {

    return <PostForm action={createPost} />
}