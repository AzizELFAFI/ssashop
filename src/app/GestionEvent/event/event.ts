import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { EventM } from '../../models/event-m';
import { EventService } from '../../services/event-service';

@Component({
  selector: 'app-event',
  imports: [RouterLink],
  templateUrl: './event.html',
  styleUrl: './event.css',
})
export class Event {
  private eventService = inject(EventService);
  events = this.eventService.events;

  reserve(id: number) {
    this.events.update(list => list.map(e => e.id === id && e.nbPlaces > 0 ? {...e, nbPlaces: e.nbPlaces - 1} : e));
  }
}
