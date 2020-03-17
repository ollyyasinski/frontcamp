import {
  Component,
  OnInit,
  OnDestroy,
  ChangeDetectionStrategy,
  ChangeDetectorRef
} from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Subscription } from "rxjs";
import { Router } from "@angular/router";

import { ArticlesService } from "src/app/services/articles.service";
import { Article } from "src/app/models/article-model";

@Component({
  selector: "app-edit-form",
  templateUrl: "./edit-form.component.html",
  styleUrls: ["./edit-form.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditFormComponent implements OnInit, OnDestroy {
  editForm: FormGroup;
  selectedArticle: Article;
  selectedArticleSub: Subscription;
  articleName: string;

  constructor(
    private readonly articlesService: ArticlesService,
    private readonly router: Router,
    private readonly cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.editForm = new FormGroup({
      title: new FormControl("", [Validators.required]),
      content: new FormControl(""),
      description: new FormControl("")
    });

    this.editForm.valueChanges.subscribe(() => this.cdr.markForCheck());

    this.articlesService.getSelectedArticle() &&
      this.articlesService.getSelectedArticle().subscribe(article => {
        this.articleName = article.title;
        this.editForm.get("title").setValue(article.title);
        this.editForm.get("content").setValue(article.content);
        this.editForm.get("description").setValue(article.description);
      });
  }

  ngOnDestroy(): void {
    this.selectedArticleSub && this.selectedArticleSub.unsubscribe();
  }

  onSubmit(): void {
    this.articlesService.updateArticle(this.articleName, this.editForm.value);
    this.router.navigate(["/news"]);
  }
}
