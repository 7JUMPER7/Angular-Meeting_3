import { Component, OnInit } from '@angular/core';
import { Person } from './person'

@Component({
  selector: 'app-ex4',
  templateUrl: './ex4.component.html',
  styleUrls: ['./ex4.component.css']
})
export class Ex4Component implements OnInit {
  person!: Person;
  constructor() {
    this.person = new Person('Arsenii Semenov',
                        '+380633520643',
                        '2014.semenow.senya@gmail.com',
                        'Kriviy Rih',
                        2,
                        'ASP.NET, Angular, C#, SQL, C++, HTML, CSS, JS, Python',
                        ['../../assets/Images/index.jpg', '../../assets/Images/img2.png'],
                        ['https://github.com/7JUMPER7', 'https://www.instagram.com/arseniysemenov/']);
   }

  ngOnInit() {
  }

  getLinkDomain(link: string): string {
    let a: HTMLAnchorElement = document.createElement('a');
    a.href = link;
    return a.hostname;
  }

}
