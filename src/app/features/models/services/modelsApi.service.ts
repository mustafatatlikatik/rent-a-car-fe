import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModelListItemDto } from '../models/model-list-item-dto';
import { PostModelRequest } from '../models/post-model-request';
import { PostModelResponse } from '../models/post-model-response';
import { PutModelRequest } from '../models/put-model-request';
import { PutModelResponse } from '../models/put-model-response';

@Injectable({
  providedIn: 'root',
})
export class ModelsApiService {
  constructor(private http: HttpClient) {}

  getList(brandId: number | null = null, searchBrandName: string | null = null): Observable<ModelListItemDto[]> {
    const requestQueryParams : any = {}
    if (brandId !== null) requestQueryParams.brandId = brandId;
    if (searchBrandName) requestQueryParams.name_like = searchBrandName;

    return this.http.get<ModelListItemDto[]>('http://localhost:3000/models',
      {
        params: requestQueryParams
      });
    // .subscribe((httpResponse) => {
    //   return httpResponse;
    // });
  }

  postBrand(model: PostModelRequest): Observable<PostModelResponse> {
    return this.http.post<PostModelResponse>(
      'http://localhost:3000/models',
      model
    );
  }

  putBrand(id: number, model: PutModelRequest): Observable<PutModelResponse> {
    return this.http.put<PutModelResponse>(
      `http://localhost:3000/models/${id}`,
      model
    );
  }
}
