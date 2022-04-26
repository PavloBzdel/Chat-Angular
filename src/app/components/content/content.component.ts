import { JokesService } from './../../services/jokes.service';
import { switchMap } from 'rxjs';
import { PeopleService } from './../../services/people.service';
import { DataService } from './../../services/data.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { People } from 'src/app/interfaces/people';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent implements OnInit {
  form: FormGroup = new FormGroup({
    title: new FormControl('', Validators.required),
  });
  jokes: any[] = [];
  messages: People[] = [];

  constructor(
    public dataService: DataService,
    public peopleService: PeopleService,
    public jokesService: JokesService
  ) {}

  ngOnInit(): void {
    this.dataService.data
      .pipe(switchMap((value) => this.peopleService.load(value)))
      .subscribe((messages) => {
        this.messages = messages;
      });
  }
  getJoke() {
    this.jokesService.getRandomJoke().subscribe((joke) => {
      this.jokes.push(joke);
    });
  }
  getJokes(){
    setTimeout(() => {
      this.getJoke();
      console.log('hello')
    }, 5000)
  }

  submit() {
    const { title } = this.form.value;
    const msg: People = {
      title,
      data: this.dataService.data.value.format('DD-MM-YYYY'),
    };
    this.peopleService.create(msg).subscribe(
      (msg) => {
        this.messages.push(msg);
        this.form.reset();
      },
      (err) => console.error(err)
    );
  }

  remove(msg: People) {
    this.peopleService.remove(msg).subscribe(() => {
      this.messages = this.messages.filter((t) => t.id !== msg.id);
    }),
      (err: any) => console.error(err);
  }
}
function $timeout(getJoke: () => void, arg1: number) {
  throw new Error('Function not implemented.');
}
