import { ModelDetailsDto } from './../models/model-details-dto';
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

  getList(
    brandId: number | null = null,
    searchBrandName: string | null = null,
    pageIndex: number = 0,
    pageSize: number = 10
  ): Observable<ModelListItemDto[]> {
    const requestQueryParams: any = {
      _page: pageIndex + 1,
      _limit: pageSize,
    };
    if (brandId !== null) requestQueryParams.brandId = brandId;
    if (searchBrandName) requestQueryParams.name_like = searchBrandName;

    return this.http.get<ModelListItemDto[]>('http://localhost:3000/models', {
      params: requestQueryParams,
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

  getById(id: number): Observable<ModelDetailsDto> {
    return this.http.get<ModelDetailsDto>(`http://localhost:3000/models/${id}`);
  }
}
