export const addPostAC = (message: string) => ({ type: 'profile/ADD-POST', message } as const)

export const removePostAC = (postId: number) => ({ type: 'profile/REMOVE-POST', postId } as const)
