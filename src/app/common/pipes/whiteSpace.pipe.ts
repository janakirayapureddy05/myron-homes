import { Pipe, PipeTransform, Injectable } from '@angular/core';

@Pipe({
    name: 'space'
})
@Injectable()
export class WhiteSpacePipe implements PipeTransform {
    transform(input: any) {
        const div = document.createElement('div');
        const ul = document.createElement('ol');
        if (!input) { return input; }
        const lines = input.split('\n');
        for (let i = lines.length - 1; i >= 0; i--) {
            const li = document.createElement('li');
            li.textContent = lines[i];
            ul.insertBefore(li, ul.childNodes[0]);
        }
        div.appendChild(ul);
        return div.innerHTML;

    }
}
