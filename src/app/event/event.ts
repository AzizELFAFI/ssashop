import { Component, signal } from '@angular/core';
import { EventM } from '../models/event-m';

@Component({
  selector: 'app-event',
  imports: [],
  templateUrl: './event.html',
  styleUrl: './event.css',
})
export class Event {
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

  reserve(id: number) {
    this.events.update(list => list.map(e => e.id === id && e.nbPlaces > 0 ? {...e, nbPlaces: e.nbPlaces - 1} : e));
  }
}
