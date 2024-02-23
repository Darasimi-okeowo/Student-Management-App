import { Employee } from './employee'

export interface Page{
        content: Employee[ ],
        pageable: {
        pageNumber: number,
        pageSize: number,
        sort: {
        empty: boolean,
        sorted: boolean,
        unsorted: boolean
        },
        offset: number,
        paged: boolean,
        unpaged: boolean
        },
        last: boolean,
        totalElements: number,
        totalPages: number,
        size: number,
        number: number,
        sort: {
        empty: boolean,
        sorted: boolean,
        unsorted: boolean
        },
        numberOfElements: number,
        first: boolean,
        empty: boolean
}