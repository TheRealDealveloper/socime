import { Box, Button, Heading, HStack, Textarea } from "@chakra-ui/react";
import PostsList from "components/post/PostsList";
import { useAuth } from "hooks/auth";
import { useAddPost, usePosts } from "hooks/posts";
import { useForm } from "react-hook-form";
import TextareaAutosize from "react-textarea-autosize";

 function NewPost(){
  const {register, handleSubmit, reset} = useForm();
  const {addPost, isLoading: addingPost} = useAddPost();
  const {user, isLoading: authLoading} = useAuth();

  function handleAddPost(data){
    addPost({
      uid: user.id,
      text: data.text,
    })
    reset();

  }

  return (
    <Box maxW="600px" mx="auto" py="10">
      <form onSubmit={handleSubmit(handleAddPost)}>
        <HStack justify="space-between">
          <Heading size="lg">New Post</Heading>
          <Button isLoading={authLoading || addingPost} loadingText="Loading..." colorScheme="teal" type="submit">Post</Button>
        </HStack>
        <Textarea as={TextareaAutosize} {...register("text", {required: true})} minRows={3} resize="none" mt="5" placeholder="Create a new post..."></Textarea>
      </form>
    </Box>
  )
}

export default function Dashboard() {
const {posts, isLoading: postsLoading} = usePosts();
  
if (postsLoading) return "Loading...";
  return (
    <>
      <NewPost />
      <PostsList posts={posts}/>
    </>
  )
}
