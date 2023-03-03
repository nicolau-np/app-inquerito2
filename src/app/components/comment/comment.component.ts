import { ApiRequestService } from './../../services/api-request.service';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  @Input() public paren: any
  comments: any
  reactiveForm!: FormGroup;
  message: string = ''
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
    this.getComments()
  }

  onSubmit() {
    this.reactiveForm.patchValue({
      id_post: this.paren.id
    })

    this.api.store('/comments', this.reactiveForm.value).subscribe((response: any) => {
      this.getComments()
      this.reactiveForm.reset()
      this.message = "Feito com sucesso"

    }, (exception: any) => {
      this.errors = exception.error.errors
    })
  }

  getComments() {
    this.api.getmodels('/posts', this.paren.id, 'comments').subscribe((response: any) => {
      this.comments = response.data
    })
  }

}
