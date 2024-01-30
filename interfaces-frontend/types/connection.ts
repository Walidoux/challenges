export type ResponseTypes =
  | 'idle'
  | 'AUTH_OK'
  | 'PASSWORD_WRONG'
  | 'EMAIL_WRONG'
  | 'PSEUDO_WRONG'

export type IDefaultValueTypes =
  | 'email'
  | 'password'
  | 'checkbox'
  | 'setEmail'
  | 'setPassword'
  | 'setCheckbox'
  | 'response'

export interface IDefaultValues {
  email: string
  password: string
  checkbox: boolean
  setEmail: React.Dispatch<React.SetStateAction<string>>
  setPassword: React.Dispatch<React.SetStateAction<string>>
  setCheckbox: React.Dispatch<React.SetStateAction<boolean>>
  response: ResponseTypes
  setResponse: React.Dispatch<React.SetStateAction<ResponseTypes>>
}
