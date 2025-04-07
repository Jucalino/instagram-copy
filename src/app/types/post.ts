export type Post = {
    id: string,
    author: {
        id: string,
        name: string,
        profilePic: string
    },
    images: string[],
    title: string,
    description: string,
    likes: {
        images: string[],
        first: string
    }
}