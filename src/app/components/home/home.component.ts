import { ApiRequestService } from './../../services/api-request.service';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  posts: any;

  constructor(private title: Title, private api: ApiRequestService) {
    title.setTitle('IPH TCC')
  }

  ngOnInit(): void {

    this.getPosts()

  }

  getPosts() {
    this.api.index('/posts').subscribe((response: any) => {
      this.posts = response.data
      console.log(response.data)
    })
  }

  onSetComment() {
    this.getPosts()
  }

}
