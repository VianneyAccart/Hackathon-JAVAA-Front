import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css']
})
export class BlogPostComponent implements OnInit {

  blogPost: any = [
    {
      image : "https://cdn.radiofrance.fr/s3/cruiser-production/2020/08/f76e923a-0072-4c0d-9837-7bf89d315133/1136_les_chats.jpg",
      title : "Salle de bain design : moderne et fonctionnelle Salle de bain design : moderne et fonctionnelle",
      description : "Vous rêvez d’une salle de bains design ? Dans ce cas, vous êtes prêts à bouleverser les codes et à envisager l’espace autrement. Formes des meubles, disposition...",
      url : "https://chop-ton-job.web.app"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
