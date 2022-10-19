import {useSelector} from "react-redux"
import {selectPhotoLarge, selectPhotoSmall} from "store/selectors"
import defaultAvatar from "assets/images/defaultAvatar.png"

export const useAvatar = () => {

  const photoSmall = useSelector(selectPhotoSmall)
  const photoLarge = useSelector(selectPhotoLarge)

  const userAvatar = photoSmall || photoLarge || defaultAvatar

  return userAvatar
}
