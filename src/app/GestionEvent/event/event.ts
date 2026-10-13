import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { EventM } from '../../models/event-m';
import { EventService } from '../../services/event-service';

@Component({
  selector: 'app-event',
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './event.html',
  styleUrl: './event.css',
})
export class Event {
  private eventService = inject(EventService);
  events = this.eventService.events;
  showAddForm = false;
  eventForm = new FormGroup({
    name: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    location: new FormControl('', Validators.required),
    price: new FormControl(0, [Validators.required, Validators.min(0)]),
    nbPlaces: new FormControl(0, [Validators.required, Validators.min(1)]),
    date: new FormControl('', Validators.required)
  });

  reserve(id: number) {
    this.events.update(list => list.map(e => e.id === id && e.nbPlaces > 0 ? {...e, nbPlaces: e.nbPlaces - 1} : e));
  }

  onSubmit() {
    if (this.eventForm.valid) {
      const currentEvents = this.events();
      const newId = currentEvents.length > 0 ? Math.max(...currentEvents.map(e => e.id)) + 1 : 1;
      const eventWithId: EventM = { ...this.eventForm.value, id: newId } as EventM;
      this.events.update(list => [...list, eventWithId]);
      this.showAddForm = false;
      this.eventForm.reset();
    }
  }

  getName() {
    return this.eventForm.get('name');
  }

  getDescription() {
    return this.eventForm.get('description');
  }

  getLocation() {
    return this.eventForm.get('location');
  }

  getPrice() {
    return this.eventForm.get('price');
  }

  getNbPlaces() {
    return this.eventForm.get('nbPlaces');
  }

  getDate() {
    return this.eventForm.get('date');
  }
}
