import { addPostAC, removePostAC } from "../actions"

export type InitialStateType = {
	posts: PostsType[]
}

export type PostsType = {
	id: number
	likes: number
	message: string
}

export type ProfileReducerActionsType =
	ReturnType<typeof addPostAC> |
	ReturnType<typeof removePostAC>