import { Component, OnDestroy, OnInit } from '@angular/core';
import { NotificationService } from '../../services/notification.service';
import { filter, map, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit, OnDestroy {
  subscribtion!: Subscription;

  constructor(private notificationService: NotificationService) {}

  ngOnInit(): void {
    //deprecated  code to handle errors and next
    // this.notificationService.getNotifications().subscribe((notification) => {
    //   console.log(notification);
    // },(error)=>{
    //   console.error('Error fetching notifications:', error);
    // });

    //modern code to handle errors , next ,compleate
    this.subscribtion = this.notificationService
      .getNotifications()
      .pipe(
        map((msg) => `Processing message: ${msg}`),
        filter((msg) => msg.startsWith('h'))
      )
      .subscribe({
        next: (notification) => {
          console.log(notification);
        },
        error: (error) => {
          console.error('Error fetching notifications:', error);
        },
        complete: () => {
          console.log('notification completed successfully');
        },
      });
  }

  ngOnDestroy(): void {
    this.subscribtion.unsubscribe();
  }
}
