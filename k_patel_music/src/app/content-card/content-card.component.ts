import { Component } from '@angular/core';
import { ContentList } from '../helper-files/content-list';


@Component({
  selector: 'app-content-card',
  standalone: true,
  imports: [],
  templateUrl: './content-card.component.html',
  styleUrl: './content-card.component.scss'
})
export class ContentCardComponent {
  contentList: ContentList = new ContentList();

  constructor() {
    this.contentList.addContent({
      id: 0,
      title: "Bohemian Rhapsody",
      description: "A legendary rock song by Queen known for its complex structure and powerful vocals.",
      creator: "Queen",
      imgURL: "https://artwork.anghcdn.co/webp/?id=887092&size=640",
      type: "Rock"
    });

    this.contentList.addContent({
      id: 1,
      title: "Shape of You",
      description: "A popular pop song by Ed Sheeran with catchy melodies and lyrics.",
      creator: "Ed Sheeran",
      imgURL: "https://artwork.anghcdn.co/webp/?id=887092&size=640",
      type: "Pop"
    });

    this.contentList.addContent({
      id: 2,
      title: "Billie Jean",
      description: "An iconic Michael Jackson song known for its infectious bassline and danceable rhythm.",
      creator: "Michael Jackson",
      imgURL: "https://artwork.anghcdn.co/webp/?id=887092&size=640",
      type: "Pop"
    });
  }
}