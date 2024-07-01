import { Component } from '@angular/core';
@Component({
  selector: 'app-hobby',
  templateUrl: './hobby.component.html',
  styleUrls: ['./hobby.component.css']
})
export class HobbyComponent 
{
  hobbyName: string = "Дивне хобі";
  hobbyDescription: string = "Цікаве хобі, яке підвласне не кожному.";
}