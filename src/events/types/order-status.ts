export enum OrderStatus {
  // When the order has been created and the ticket being orderd has not been reserved
  Created = 'created',
  // The ticket the user is trying to reserve has already been reserved or when the user cancels or the order expires
  Cancelled = 'cancelled',
  // The ticket has been reserved successfully
  AwaitingPayment = 'awaitingPayment',
  // The order has reserved the ticket, and  successfully made payment
  Complete = 'complete',
}
