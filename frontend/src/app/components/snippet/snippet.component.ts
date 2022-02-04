import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-snippet',
  templateUrl: './snippet.component.html',
  styleUrls: ['./snippet.component.scss']
})
export class SnippetComponent implements OnInit {

  @Input() snippet: string = '';
  @Output() snippetChanged = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

}
