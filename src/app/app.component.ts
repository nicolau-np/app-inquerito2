import { Component, OnInit } from '@angular/core';
import { ApiRequestService } from './services/api-request.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app-project';

  constructor(private api: ApiRequestService) { }

  ngOnInit(): void {

  }

  onDownload() {
    this.api.download('/excel/comments').subscribe((response: any) => {
      const file = new Blob([response], {
        type: response.type,
      })

      const blob = window.URL.createObjectURL(file)

      const link = document.createElement('a')
      link.href = blob
      link.download = 'comments.csv'
      //link.click()
      link.dispatchEvent(new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
        view: window
      }))

      setTimeout(() => {
        window.URL.revokeObjectURL(blob)
        link.remove()
      }, 100)

    })
  }
}
