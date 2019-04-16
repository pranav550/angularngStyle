import { Component } from '@angular/core';
import { getClosureSafeProperty } from '@angular/core/src/util/property';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularngStyle';

  people:any[]=[
{
  "name":"aaaa",
"country":"india"
 },
 {
  "name":"bbbb",
"country":"india"
 },
 {
  "name":"cccc",
"country":"uk"
 },
 {
  "name":"dddd",
"country":"uk"
 },
 {
  "name":"eeee",
"country":"usa"
 },
 {
  "name":"ffff",
"country":"usa"
 },

  ]

  getcolor(country){
      switch(country)
      {
        case 'india': return 'green';
        case 'uk': return 'blue';
        case 'usa': return 'red';
      }
  }
}
