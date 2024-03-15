import { Component, Input, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-content-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './content-list.component.html',
  styleUrl: './content-list.component.scss'
})
export class ContentListComponent implements OnInit {
  displayContentInfo(contentItem: Content) {
    console.log(`ID: ${contentItem.id} and Title: ${contentItem.title}`);
    }
  @Input () contentItems: Content[] = [];

  ngOnInit(): void {
    this.contentItems =[
      {
        id: 0,
      title: "Bohemian Rhapsody",
      description: "A legendary rock song by Queen known for its complex structure and powerful vocals.",
      creator: "Queen",
      imgURL: "https://artwork.anghcdn.co/webp/?id=887092&size=640",
      type: "Rock",
      tags: ["rock", "pop"]
      },
      {
        id: 1,
      title: "Shape of You",
      description: "A popular pop song by Ed Sheeran with catchy melodies and lyrics.",
      creator: "Ed Sheeran",
      imgURL: "https://artwork.anghcdn.co/webp/?id=887092&size=640",
      type: "Pop",
      tags: ["rock", "pop"]
      },
      {
        id: 2,
      title: "Billie Jean",
      description: "An iconic Michael Jackson song known for its infectious bassline and danceable rhythm.",
      creator: "Michael Jackson",
      imgURL: "https://artwork.anghcdn.co/webp/?id=887092&size=640",
      type: "Pop",
      tags: ["rock", "pop"]
      }
    ];
  }
 
}
