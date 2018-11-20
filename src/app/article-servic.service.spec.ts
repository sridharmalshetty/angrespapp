import { TestBed, inject } from '@angular/core/testing';

import { ArticleServicService } from './article-servic.service';

describe('ArticleServicService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ArticleServicService]
    });
  });

  it('should be created', inject([ArticleServicService], (service: ArticleServicService) => {
    expect(service).toBeTruthy();
  }));
});
