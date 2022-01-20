import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { imagesUrl } from 'src/environments/environment';
import { BlogService } from '../shared/services/blog.service';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css']
})
export class BlogPostComponent implements OnInit {
  imageUrl: string = imagesUrl;
  blogPost: any;

  constructor(private blogService : BlogService) { }

  ngOnInit(): void {
    this.blogService.getBlogs().subscribe(response => {
      this.blogPost = response;
    });

  }

}
