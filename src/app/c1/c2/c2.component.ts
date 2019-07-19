import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/models/person.model';
import { Input } from '@angular/core';
import { PersonService } from 'src/app/SERVICES/person.service';

@Component({
  selector: 'app-c2',
  templateUrl: './c2.component.html',
  styleUrls: ['./c2.component.css']
})
export class C2Component implements OnInit {

  @Input() person: Person;
  constructor(private personService : PersonService) { }

  ngOnInit() {
    console.log("im in init");
  }

  ngOnDestroy()
  {
    console.log("im in destroy");
  }

  ngOnChanges()
  {
    console.log("im in onChange");
  }

  ngDoCheck()
  {
    console.log("im in doCheck");
  }

  ngAfterContentInit()
  {
    console.log("im in ngAfterContentInit");
  }

  ngAfterContentChecked()
  {
    console.log("im in ngAfterContentChecked");
  }

  ngAfterViewInit()
  {
    console.log("im in ngAfterViewInit");
  }

  ngAfterViewChecked()
  {
    console.log("im in ngAfterViewChecked");
  }

  sendId()
  {
    this.personService.remove.next(this.person.id);
  }
}
