export type AlertPropsType = {
  message: string
  onCloseAlertClick: () => void
  type: "success" | "warning" | "error" | "info"
}
