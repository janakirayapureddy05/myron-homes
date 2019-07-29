import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class HttpService {

    apiroot = 'http://localhost:8080/';

    constructor(private http: HttpClient) {}

    userLogin(data: any): Observable<any> {
        const url = this.apiroot + 'login';
        return this.http.post(url, JSON.stringify(data), httpOptions)
                   .pipe(tap(this.extractData),
                   catchError(this.handleError<any>('userLogin')));
    }

    registerUser(data: any): Observable<any> {
        const url = this.apiroot + 'register';
        return this.http.post(url, JSON.stringify(data), httpOptions)
                   .pipe(tap(this.extractData),
                   catchError(this.handleError<any>('registerUser')));
    }

    forgotPassword(data: any): Observable<any> {
        const url = this.apiroot + 'forgot';
        return this.http.post(url, JSON.stringify(data), httpOptions)
                   .pipe(tap(this.extractData),
                   catchError(this.handleError<any>('forgotPassword')));
    }

    changePassword(data: any): Observable<any> {
        const url = this.apiroot + 'changepswd';
        return this.http.post(url, JSON.stringify(data), httpOptions)
                   .pipe(tap(this.extractData),
                   catchError(this.handleError<any>('changePassword')));
    }

    registerCompany(data: any): Observable<any> {
        const url = this.apiroot + 'addComp';
        return this.http.post(url, JSON.stringify(data), httpOptions)
                   .pipe(tap(this.extractData),
                   catchError(this.handleError<any>('registerCompany')));
    }

    addProperty(data: any): Observable<any> {
        const url = this.apiroot + 'addProp';
        return this.http.post(url, JSON.stringify(data), httpOptions)
                   .pipe(tap(this.extractData),
                   catchError(this.handleError<any>('addProperty')));
    }

    uploadFile(files: File[], compId: any, propId: any, name: string): Observable<any> {
        const url = this.apiroot + 'upload';
        const formdata: FormData = new FormData();
        for (const file of files) {
            formdata.append('fileUpload', file, file.name);
          }
        formdata.append('compId', compId);
        formdata.append('propId', propId);
        formdata.append('name', name);
        return this.http.post(url, formdata)
                   .pipe(tap(this.extractData),
                   catchError(this.handleError<any>('uploadFile')));
    }

    saveCompDtls(data: any): Observable<any> {
        const url = this.apiroot + 'saveCmpDtls';
        return this.http.post(url, JSON.stringify(data), httpOptions)
                   .pipe(tap(this.extractData),
                   catchError(this.handleError<any>('saveCompDtls')));
    }

    getEnqCustom(data: any): Observable<any> {
        const url = this.apiroot + 'getEnqCustom';
        return this.http.post(url, JSON.stringify(data), httpOptions)
                   .pipe(tap(this.extractData),
                   catchError(this.handleError<any>('getEnqCustom')));
    }

    saveAdminDtls(data: any): Observable<any> {
        const url = this.apiroot + 'saveAdmin';
        return this.http.post(url, JSON.stringify(data), httpOptions)
                   .pipe(tap(this.extractData),
                   catchError(this.handleError<any>('saveAdminDetails')));
    }

    getCompanys(): Observable<any> {
        const url = this.apiroot + 'companys';
        return this.http.get(url, httpOptions)
                   .pipe(tap(this.extractData),
                   catchError(this.handleError<any>('getCompanys')));
    }

    changeCompSts(data: any): Observable<any> {
        const url = this.apiroot + 'ccompsts';
        return this.http.post(url, JSON.stringify(data), httpOptions)
                   .pipe(tap(this.extractData),
                   catchError(this.handleError<any>('changeCompSts')));
    }

    getPropByComp(data: any): Observable<any> {
        const url = this.apiroot + 'propComp';
        return this.http.post(url, JSON.stringify(data), httpOptions)
                   .pipe(tap(this.extractData),
                   catchError(this.handleError<any>('getPropByComp')));
    }

    changePropSts(data: any): Observable<any> {
        const url = this.apiroot + 'cpropsts';
        return this.http.post(url, JSON.stringify(data), httpOptions)
                   .pipe(tap(this.extractData),
                   catchError(this.handleError<any>('changePropSts')));
    }

    sendMail(data: any): Observable<any> {
        const url = this.apiroot + 'sendMail';
        return this.http.post(url, JSON.stringify(data), httpOptions)
                   .pipe(tap(this.extractData),
                   catchError(this.handleError<any>('sendMail')));
    }

    saveUser(data: any): Observable<any> {
        const url = this.apiroot + 'saveUser';
        return this.http.post(url, JSON.stringify(data), httpOptions)
                   .pipe(tap(this.extractData),
                   catchError(this.handleError<any>('saveUser')));
    }

    getCredits(data: any): Observable<any> {
        const url = this.apiroot + 'credits';
        return this.http.post(url, data, httpOptions)
                   .pipe(tap(this.extractData),
                   catchError(this.handleError<any>('getCredits')));
    }

    getAddress(data: any): Observable<any> {
        const url = this.apiroot + 'getAddrs';
        return this.http.post(url, data, httpOptions)
                   .pipe(tap(this.extractData),
                   catchError(this.handleError<any>('getAddress')));
    }

    editAddrs(data: any): Observable<any> {
        const url = this.apiroot + 'editAddrs';
        return this.http.post(url, JSON.stringify(data), httpOptions)
                   .pipe(tap(this.extractData),
                   catchError(this.handleError<any>('editAddrs')));
    }

    deleteAddrs(data: any): Observable<any> {
        const url = this.apiroot + 'delAddrs';
        return this.http.post(url, JSON.stringify(data), httpOptions)
                   .pipe(tap(this.extractData),
                   catchError(this.handleError<any>('deleteAddrs')));
    }

    getProperties(data) {
        const url = this.apiroot + 'getprops';
        return this.http.post(url, JSON.stringify(data), httpOptions)
        .pipe(tap(this.extractData),
        catchError(this.handleError<any>('getProperties')));
    }

    saveShrtlstProp(data) {
        const url = this.apiroot + 'shrtlst';
        return this.http.post(url, JSON.stringify(data), httpOptions)
        .pipe(tap(this.extractData),
        catchError(this.handleError<any>('saveShrtlstProp')));
    }

    getMailIds(data: any): Observable<any> {
        const url = this.apiroot + 'mails';
        return this.http.post(url, data, httpOptions)
                   .pipe(tap(this.extractData),
                   catchError(this.handleError<any>('getMailIds')));
    }

    updateEnqCust(data: any): Observable<any> {
        const url = this.apiroot + 'updateEnq';
        return this.http.post(url, JSON.stringify(data), httpOptions)
                   .pipe(tap(this.extractData),
                   catchError(this.handleError<any>('updateEnqCust')));
    }

    saveCredits(data: any): Observable<any> {
        const url = this.apiroot + 'savecrdts';
        return this.http.post(url, JSON.stringify(data), httpOptions)
                   .pipe(tap(this.extractData),
                   catchError(this.handleError<any>('saveCredits')));
    }

    getShortlstd(data: any): Observable<any> {
        const url = this.apiroot + 'gshrtlst';
        return this.http.post(url, data, httpOptions)
                   .pipe(tap(this.extractData),
                   catchError(this.handleError<any>('getShortlstd')));
    }

    getPropById(data: any): Observable<any> {
        const url = this.apiroot + 'propId';
        return this.http.post(url, JSON.stringify(data), httpOptions)
                   .pipe(tap(this.extractData),
                   catchError(this.handleError<any>('getPropById')));
    }

    getPropOdrPdt(data: any): Observable<any> {
        const url = this.apiroot + 'pdate';
        return this.http.post(url, data, httpOptions)
                   .pipe(tap(this.extractData),
                   catchError(this.handleError<any>('getPropOdrPdt')));
    }


    private extractData(res: Response) {
        const body = res;
        return body || {};
    }
    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

          // TODO: send the error to remote logging infrastructure
          console.error(error); // log to console instead

          // TODO: better job of transforming error for user consumption
          console.log(`${operation} failed: ${error.message}`);

          // Let the app keep running by returning an empty result.
          return of(result as T);
        };
      }

}
