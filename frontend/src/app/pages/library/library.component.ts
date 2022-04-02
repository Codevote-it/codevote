import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { AppRoutingEnum } from '@app/routing';
import { libraryData, LibraryDataInterface } from './library.data';
import { LibraryParamsEnum } from './library.params.enum';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
})
export class LibraryComponent {
  public libraryData: LibraryDataInterface[];
  public selectedLibraryData: LibraryDataInterface | null;
  public appRoutingEnum: typeof AppRoutingEnum;

  constructor(private route: ActivatedRoute) {
    this.libraryData = libraryData;
    this.selectedLibraryData = null;
    this.appRoutingEnum = AppRoutingEnum;
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => this.handleParams(params));
  }

  private handleParams(params: ParamMap): void {
    const segment = params.get(LibraryParamsEnum.Segment1);
    const foundLibraryData = this.libraryData.find(
      (data) => data.segment === segment,
    );

    if (!segment) {
      return;
    }

    this.selectedLibraryData = foundLibraryData || null;
  }
}
