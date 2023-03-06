import { ApiRequestService } from './../../services/api-request.service';
import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
declare var window: any;

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})

export class CommentComponent implements OnInit {
  @Input() public paren: any
  @Output() public setComment = new EventEmitter<any>();

  comments: any
  reactiveForm!: FormGroup;
  message: string = ''
  replyModal: any
  reactModal: any

  errors = {
    comment: null,
    id_post: null,
  }

  constructor(private api: ApiRequestService) { }

  ngOnInit(): void {

    this.reactiveForm = new FormGroup({
      comment: new FormControl(null, Validators.required),
      id_post: new FormControl(null),
    })

    console.log(this.paren)

    this.getComments()
    /*this.reactModal = new window.bootstrap.Modal(
      document.getElementById('modal-react')
    )*/
  }

  onSubmit() {
    this.reactiveForm.patchValue({
      id_post: this.paren.id
    })

    this.api.store('/comments', this.reactiveForm.value).subscribe((response: any) => {
      this.getComments()
      this.reactiveForm.reset()
      this.message = "Feito com sucesso"
      this.setComment.emit()
    }, (exception: any) => {
      this.errors = exception.error.errors
    })
  }

  getComments() {
    this.api.getmodels('/posts', this.paren.id, 'comments').subscribe((response: any) => {
      this.comments = response.data
    })

  }

  /*onReply(id: number) {
    this.replyModal = new window.bootstrap.Modal(
      document.getElementById('modal-reply' + id)
    )
    this.replyModal.show()
  }

  onReact(id: number) {
    this.reactModal = new window.bootstrap.Modal(
      document.getElementById('modal-react' + id)
    )
    this.reactModal.show()
  }

  onSetReply(data: any) {
    this.replyModal.hide()
    this.getComments()
  }

  onSetReact(data: any) {
    this.reactModal.hide()
    this.getComments()
  }*/

}
