import { ApiRequestService } from './../../../services/api-request.service';
import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reply',
  templateUrl: './reply.component.html',
  styleUrls: ['./reply.component.css']
})
export class ReplyComponent implements OnInit {
  @Input() public paren: any;
  @Output() public setReply = new EventEmitter<{ id_comment: number }>();
  reactiveFormReply!: FormGroup;
  errors = {
    reply: null
  }
  message: string = ''

  replies: any

  constructor(private api: ApiRequestService) {

  }

  ngOnInit(): void {
    this.reactiveFormReply = new FormGroup({
      id_comment: new FormControl(null),
      reply: new FormControl(null, Validators.required)
    })

    this.getReplies()
  }

  getReplies() {
    /*this.api.getmodels('/comments', this.paren.id, 'replies').subscribe((response: any) => {
      this.replies = response.data
    })*/
    this.replies = this.paren.replies
  }

  onSubmitReply() {
    this.reactiveFormReply.patchValue({
      id_comment: this.paren.id
    })

    this.api.store('/replies', this.reactiveFormReply.value).subscribe((response: any) => {
      this.reactiveFormReply.reset()
      this.message = "Feito com sucesso"
      this.getReplies()
      this.setReply.emit({ id_comment: this.paren.id })
    }, (exception: any) => {
      this.errors = exception.error.errors
    })

  }

}
