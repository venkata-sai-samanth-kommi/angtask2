import { Component, OnInit } from '@angular/core';
import { PersonService } from 'src/app/SERVICES/person.service';
import { Person } from 'src/app/models/person.model';

@Component({
  selector: 'app-c1',
  templateUrl: './c1.component.html',
  styleUrls: ['./c1.component.css']
})
export class C1Component implements OnInit {

  personIdToRemove=-1;
  persons : Person[];
  constructor(private personService : PersonService) {
    personService.getPersonsJson().subscribe((data:Person[])=>{
      this.persons = data.filter((person)=>person.status===true);
    })
  }

  ngOnInit() {
    this.personService.remove.subscribe((id)=>{
      this.personIdToRemove = id;
    })
  }

  remove()
  {
    this.persons = this.persons.filter((person)=>person.id!=this.personIdToRemove);
  }
}
