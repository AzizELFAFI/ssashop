import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { EventM } from '../../models/event-m';

@Component({
  selector: 'app-detail-event',
  imports: [RouterLink],
  templateUrl: './detail-event.html',
  styleUrl: './detail-event.css',
})
export class DetailEvent {

   events = signal<EventM[]>([
      {
        id: 1,
        name: 'Event 1',
        description: 'Description 1',
        location: 'Location 1',
        price: 100,
        nbPlaces: 10,
        date: '2022-01-01',
      },
      {
        id: 2,
        name: 'Event 2',
        description: 'Description 2',
        location: 'Location 2',
        price: 200,
        nbPlaces: 20,
        date: '2022-01-02',
      },
      {
        id: 3,
        name: 'Event 3',
        description: 'Description 3',
        location: 'Location 3',
        price: 300,
        nbPlaces: 30,
        date: '2022-01-03',
      }
    ]);

  //1 Injecter le service ActivatedRoute
  
  private rt = inject(ActivatedRoute);

  //2 Recuperer l'id depuis le url

  id = this.rt.snapshot.paramMap.get('id');
  //3 Recuperer l'event correspond a cet id 
  event = this.events().find(e => e.id == Number(this.id));
}
