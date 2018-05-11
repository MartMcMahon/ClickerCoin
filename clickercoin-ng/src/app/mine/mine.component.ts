import { Component, OnInit, EventEmitter } from '@angular/core'

@Component({
  selector: 'app-mine',
  templateUrl: './mine.component.html',
  styleUrls: ['./mine.component.css']
})
export class MineComponent implements OnInit {
  c: number = 0
  mineClicked = new EventEmitter()
  blocksMined = []

  constructor() { }

  ngOnInit() {
  }

  onMineClick() {
    this.c++
    console.log(this.c)
    this.mineClicked.emit()
    this.blocksMined.push( {
      'index': this.c, 
      'text': 'sample block'
    })
  }

}
