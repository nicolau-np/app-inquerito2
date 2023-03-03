import { ApiRequestService } from './../../../services/api-request.service';
import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-react',
  templateUrl: './react.component.html',
  styleUrls: ['./react.component.css']
})
export class ReactComponent implements OnInit {
  @Input() public paren: any
  reactions: any;

  constructor(private api: ApiRequestService) {

  }

  ngOnInit(): void {
    this.api.index('/reactions/types').subscribe((response: any) => {
      this.reactions = response.data
    })
  }
}
