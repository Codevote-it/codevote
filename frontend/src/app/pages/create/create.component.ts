import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToasterMessageEnum, ToasterService } from '@app/core';
import { CodevoteActionService, CreateCodevoteRequest } from '@app/data';
import { AppRoutingEnum } from '@app/routing';
import { PageBaseComponent } from '../_abstract';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
})
export class CreateComponent extends PageBaseComponent {
  public titleSnippet1: string;
  public titleSnippet2: string;

  constructor(
    private codevoteActionService: CodevoteActionService,
    private router: Router,
    private toasterService: ToasterService,
  ) {
    super();

    this.titleSnippet1 = '';
    this.titleSnippet2 = '';
  }

  public isInvalid(): boolean {
    return Boolean(!this.titleSnippet1 || !this.titleSnippet2);
  }

  public onCreateCodevote(): void {
    const request: CreateCodevoteRequest = {
      snippet1: {
        title: this.titleSnippet1,
        content: '// TODO: add snippet',
      },
      snippet2: {
        title: this.titleSnippet2,
        content: '// TODO: add snippet',
      },
    };

    if (this.isInvalid()) {
      return;
    }

    this.request$(this.codevoteActionService.createCodevote(request)).subscribe(
      ({ createCodevote }) => this.onCreateCodevoteSuccess(createCodevote.id),
    );
  }

  private onCreateCodevoteSuccess(id: string): void {
    this.toasterService.setMessage(ToasterMessageEnum.Success);
    this.router.navigate([AppRoutingEnum.Codevote, id]);
  }
}
