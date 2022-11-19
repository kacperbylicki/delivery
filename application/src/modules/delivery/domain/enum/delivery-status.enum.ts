export enum DeliveryStatus {
  created = "CREATED",
  pickedUpByCourier = "PICKED_UP_BY_COURIER",
  receivedInFacility = "RECEIVED_IN_FACILITY",
  sentFromFacility = "SENT_FROM_FACILITY",
  outForDelivery = "OUT_FOR_DELIVERY",
  deliverySucceed = "DELIVERY_SUCCEED",
  deliveryFailed = "DELIVERY_FAILED",
  waitingInPickupPoint = "WAITING_IN_PICKUP_POINT",
  onTheWayBackToSender = "ON_THE_WAY_BACK_TO_SENDER",
  returned = "RETURNED",
}
