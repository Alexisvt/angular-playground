import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCasing',
})
export class TitleCasingPipe implements PipeTransform {
  prepositions = ['of', 'the'];
  transform(value: string, args?: any): any {
    if (!value) {
      return null;
    }
    const tempTitleList = value
      .split(' ')
      .map((word, index) => {
        let fixedWord = null;
        if (
          (index === 0 && this.prepositions.includes(word.toLowerCase())) ||
          !this.prepositions.includes(word.toLowerCase())
        ) {
          fixedWord = `${word.charAt(0).toUpperCase()}${word
            .slice(1)
            .toLowerCase()}`;
        } else {
          fixedWord = word.toLowerCase();
        }

        return fixedWord;
      })
      .join(' ');

    return tempTitleList;
  }
}
