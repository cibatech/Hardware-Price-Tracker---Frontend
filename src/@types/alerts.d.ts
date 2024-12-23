export interface Alert {
  Id: string
  TargetPrice: number
  ProdImage: string
  ProdName: string
}

export type CreateAlertData = {
  TargetPrice: number
  ProdId: string
  UserId: string
}

export type AlertResponse = {
  Id: string
} & CreateAlertData

export type CreateAlertResponse = {
  Description: string
  response: Alert
  config: CreateAlertData
}

export type DeleteAlertResponse =  CreateAlertResponse