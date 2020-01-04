import { PipeTransform, Pipe } from '@angular/core';

@Pipe({name: 'filter'})
export class FilterPipe implements PipeTransform {
    transform(Notes:any[],searchText:string):any[] {
    if(!Notes) return [];
    if(!searchText)return Notes;    
    searchText = searchText.toLowerCase();
    return Notes.filter(notes =>{
     return notes.content.match(searchText) 
    })
    } 
}
