import SlackHub from "./api"

export const GetPosts = async () => {
  try {
    const res = await SlackHub.get("/posts")
    return res.data
  } catch (error) {
    throw error
  }
}
