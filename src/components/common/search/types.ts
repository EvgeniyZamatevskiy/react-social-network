export type SearchPropsType = {
  searchValue: string
  isDisabled: boolean
  setIsDisabled?: (isDisabled: boolean) => void
  handleSetSearchValueChange: (value: string) => void
  handleResetSearchValueClick: (resetValue: string) => void
}
