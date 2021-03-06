import { Injectable } from '@angular/core';
// Providers
import { ErrorService } from '../error/error.service';
// Libraries
import { Observable } from 'rxjs/Observable';
// Interfaces
import { IResponse } from '../../interfaces/response/response';

@Injectable()
export class ResponseService {
    headers: Headers;
    status: number;
    body: IResponse;

    constructor(
        private error: ErrorService
    ) {}

    /**
    * Проверяет ответ сервера
    * @param {Object} response Ответ сервера
    */
    check(response): boolean {
        this.headers = response.headers;
        this.status = response.status;
        this.body = response.json();

        if (this.status !== 200) {
            return false;
        }

        if (this.body.result) {
            return this.body.result;
        } else {
            this.error.handle(this.body.message);
            return;
        }
    }

    /**
    * Парсит ответ сервера
    * @param {Object} response Ответ сервера
    */
    parse(response): object {
        if (this.check(response)) {
            return this.body.data;
        } else {
            this.error.handle(this.body.message);
            return;
        }
    }
}
