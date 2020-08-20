import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-message-box',
  templateUrl: './message-box.component.html',
  styleUrls: ['./message-box.component.css']
})
export class MessageBoxComponent implements OnInit {
     
  @Input()
  type : string;
  @Input()
  message : string;
  @Input()
  title : string;

  constructor() { 
    this.type = "info";
    this.message = "message";
    this.title = "title";
    }

  ngOnInit(): void {
  }

}
