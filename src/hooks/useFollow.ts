import {useAppDispatch} from "hooks/useAppDispatch"
import {follow, unfollow} from "store/asyncActions"

export const useFollow = (userId: number): { follow: () => void, unfollow: () => void } => {

  const dispatch = useAppDispatch()

  const handleFollow = (): void => {
    dispatch(follow(userId))
  }

  const handleUnfollow = (): void => {
    dispatch(unfollow(userId))
  }

  return {follow: handleFollow, unfollow: handleUnfollow}
}
