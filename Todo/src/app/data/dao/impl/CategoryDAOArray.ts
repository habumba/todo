import {CategoryDAO} from "../interface/CategoryDAO";
import {Observable} from "rxjs";
import {Category} from "../../../model/Category";

export class CategoryDAOArray implements CategoryDAO {

    add(T): Observable<Category> {
        return undefined;
    }

    delete(id: number): Observable<Category> {
        return undefined;
    }

    get(id: number): Observable<Category> {
        return undefined;
    }

    getAll(): Observable<Category[]> {
        return undefined;
    }

    search(title: string): Observable<Category[]> {
        return undefined;
    }

    update(T): Observable<Category> {
        return undefined;
    }

}