import {ReactNode} from "react"

export type ModalPropsType = {
  children: ReactNode
  isActiveModal: boolean
  onDeactivateModalClick: () => void
}
