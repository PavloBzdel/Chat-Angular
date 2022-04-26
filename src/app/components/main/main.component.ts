// import { PeopleService } from './../../services/people.service';
// import { People } from './../../interfaces/people';
import { DataService } from './../../services/data.service';
import { Component, OnInit, ViewChild } from '@angular/core';
// import { switchMap } from 'rxjs';
// import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  ngOnInit(): void {}


  peoples = [
    {
      id: 1,
      fullName: 'Marta',
      date: this.dataService.data.value.format('DD-MM-YYYY'),
    },
    {
      id: 2,
      fullName: 'Mother',
      date: this.dataService.data.value.format('DD-MM-YYYY'),
    },
    {
      id: 3,
      fullName: 'Daddy',
      date: this.dataService.data.value.format('DD-MM-YYYY'),
    },
  ];
  msg = 'message';
  constructor(public dataService: DataService) {}
}
