import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-switchdemo',
  imports: [CommonModule],
  templateUrl: './switchdemo.component.html',
  styleUrl: './switchdemo.component.css'
})
export class SwitchdemoComponent {
  players: any[] = [
    {"playerId":1,"playerName":"Virat Kohli","playerCountry":"India","playerSports":"Cricket"},
    {"playerId":2,"playerName":"Mahendrasingh Dhoni","playerCountry":"India","playerSports":"Cricket"},
    {"playerId":3,"playerName":"Rohit Sharma","playerCountry":"India","playerSports":"Cricket"},
    {"playerId":4,"playerName":"David Warner","playerCountry":"Australia","playerSports":"Cricket"},
    {"playerId":5,"playerName":"Travis Head","playerCountry":"Australia","playerSports":"Cricket"},
    {"playerId":6,"playerName":"Pat Cummins","playerCountry":"Australia","playerSports":"Cricket"},
    {"playerId":7,"playerName":"mithal starch","playerCountry":"Australia","playerSports":"Cricket"},
    {"playerId":8,"playerName":"Jasprit Bumrah","playerCountry":"India","playerSports":"Cricket"},
    {"playerId":9,"playerName":"Travis Head","playerCountry":"Australia","playerSports":"Cricket"},
    {"playerId":10,"playerName":"Cristiano Ronaldo","playerCountry":"Portugal","playerSports":"Football"}
  ];
  removePlayer() {
    if (this.players.length > 0) {
      this.players.pop();
    }
}
  
}
