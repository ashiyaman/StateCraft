import { createSlice } from "@reduxjs/toolkit";

export const postSlice = createSlice(
    {
        name: 'posts',
        initialState: {
            posts: [
                {
                    postId: 'P001',
                    caption: 'Learn Redux toolkit',
                    likes: 88,
                    user: {
                        userId: 'U123',
                        name: 'John Doe'
                    }
                },
                {
                    postId: 'P002',
                    caption: 'It is fun to learn Redux toolkit',
                    likes: 103,
                    user: {
                        userId: 'U123',
                        name: 'John Doe'
                    }
                }
            ]
        },
        reducer: []
    }
)

export default postSlice.reducer