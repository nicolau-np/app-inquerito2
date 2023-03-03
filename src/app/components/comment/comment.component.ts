import { ApiRequestService } from './../../services/api-request.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  @Input() public paren: any

  constructor(private api: ApiRequestService) { }

  ngOnInit(): void {

  }

}
