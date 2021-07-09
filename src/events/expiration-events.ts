import { Subjects } from './subjects';

export interface ExperationEvent {
  subject: Subjects.ExpirationComplete;
  data: {
    orderId: string;
  };
}
