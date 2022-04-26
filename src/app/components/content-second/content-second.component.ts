import { JokesService } from './../../services/jokes.service';
import { MessagesService } from './../../services/messages.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { switchMap } from 'rxjs';
import { People } from 'src/app/interfaces/people';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-content-second',
  templateUrl: './content-second.component.html',
  styleUrls: ['./content-second.component.scss']
})
export class ContentSecondComponent implements OnInit {
  form: FormGroup = new FormGroup({
    title: new FormControl('',Validators.required)
  })
  jokes:any[]= []
  messages: People[] =[];

  constructor(public dataService: DataService,
              public messagesService: MessagesService,
              public jokesService: JokesService) { }

  ngOnInit(): void {
    this.dataService.data.pipe(
      switchMap(value => this.messagesService.load(value))
    ).subscribe(messages =>{
      this.messages = messages
    })
  }

  getJoke(){
    this.jokesService.getRandomJoke()
    .subscribe(joke => {
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
    const msg:People = {
      title,
      data: this.dataService.data.value.format('DD-MM-YYYY')
    }
    this.messagesService.create(msg).subscribe(msg => {
      this.messages.push(msg)
      this.form.reset()
    }, err => console.error(err))
  }

  remove(msg : People){
    this.messagesService.remove(msg).subscribe( () => {
      this.messages = this.messages.filter(t => t.id !== msg.id)
    }), (err: any) => console.error(err)
  }
}

