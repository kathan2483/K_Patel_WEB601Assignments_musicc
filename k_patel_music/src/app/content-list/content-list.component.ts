import { Component, Input, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { CommonModule } from '@angular/common';
import { TypeFilterPipe } from '../type-filter.pipe';
import { ContentCardComponent } from '../content-card/content-card.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-content-list',
  standalone: true,
  imports: [CommonModule, ContentCardComponent, TypeFilterPipe, FormsModule],
  templateUrl: './content-list.component.html',
  styleUrl: './content-list.component.scss'
})
export class ContentListComponent implements OnInit {
  DisplayContentInformation(contentItem: Content) {
    console.log(`ID: ${contentItem.id} and Title: ${contentItem.title}`);
    }
  @Input () contentItems: Content[] = [];

  searchTitle: string = '';
  contentExists: boolean = false;
  message: string = '';  
  selectedTitle: string | null = null;

  checkContentExists() {
    const foundItem = this.contentItems.find(item => item.title.toLowerCase() === this.searchTitle.toLowerCase());
    this.contentExists = !!foundItem;
    this.message = foundItem ? 'Content item exists.' : 'Content item does not exist.';
    this.selectedTitle = foundItem ? foundItem.title : null;
  }

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
      },
      {
        id: 3,
      title: "Soona Soona",
      description: "Soona Soona by Aishwarya Majmudar is available on various platforms: YouTube, YouTube playlist, Apple Music, Shazam, and SoundCloud.",
      creator: "Aishwarya Majmudar",
      imgURL: "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/c5/58/98/c55898a7-d280-2d50-efcd-48dc0e1e0f0a/cover.jpg/1200x1200bb.jpg",
      type: "Garba",
      tags: ["garba", "gujarati"]
      },
      {
        id: 4,
      title: "Shakti 3.23",
      description: "The album Shakti 3.23 by Aishwarya Majmudar is available on various platforms: on Apple Music, TikTok Music, Instagram, YouTube, and Amazon",
      creator: "Aishwarya Majmudar",
      imgURL: "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/ff/f2/de/fff2de80-bc13-6078-8afb-e09a2b70fb41/8905992872715.jpg/1200x1200bb.jpg",
      type: "Garba",
      tags: ["gujarati", "garba"]
      },
      {
        id: 5,
      title: "Billie Jean",
      description: "An iconic Michael Jackson song known for its infectious bassline and danceable rhythm.",
      creator: "Michael Jackson",
      imgURL: "https://artwork.anghcdn.co/webp/?id=887092&size=640",
      type: "Pop",
      tags: ["rock", "pop"]
      },
      {
        id: 6,
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
