import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  notifications: string[];
  constructor() {
    this.notifications = [
      'You have unread messages',
      'pepole reacting to your post',
      'hamda send you a friend request',
      // '',
      'post shared successfully',
    ];
  }
  getNotifications(): Observable<string> {
    let counter = 0;
    // return from(this.notifications);
    return new Observable<string>((observer) => {
      let notificationInterval = setInterval(() => {
        // console.log('test interval');
        if (counter === this.notifications.length) {
          observer.complete(); //stop the observable
        }
        if (this.notifications[counter] === '') {
          observer.error('this notification is empty'); //stop the observable
        }
        observer.next(this.notifications[counter]);
        counter++;
      }, 2000);
      return {
        unsubscribe: () => {
          clearInterval(notificationInterval); //clear the interval when unsubscribed
          console.log('unsubscribed from notification service');
        },
      };
    });
  }
}
