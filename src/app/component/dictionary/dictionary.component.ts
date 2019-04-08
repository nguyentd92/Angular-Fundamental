import { Component, OnInit } from '@angular/core';

class Word {
  en: string;
  vn: string;
  memorized: boolean;
}

@Component({
  selector: 'app-dictionary',
  templateUrl: './dictionary.component.html',
  styleUrls: ['./dictionary.component.scss']
})
export class DictionaryComponent implements OnInit {

  
  words: Word[] = [
    {en: 'action', vn: 'hành động', memorized: true},
    {en: 'actor', vn: 'diễn viên', memorized: false},
    {en: 'activity', vn: 'hoạt động', memorized: true},
    {en: 'active', vn: 'chủ động', memorized: true},
    {en: 'bath', vn: 'bồn tắm', memorized: false},
    {en: 'bedroom', vn: 'phòng ngủ', memorized: true},
    {en: 'bed', vn: 'giường', memorized: true},
  ]

  isShowForm = false;
  newEn = '';
  newVn = '';
  editMode = false;
  showMode = 'all';

  constructor() { }

  ngOnInit() {
  }

  
  addWord() {
    this.words.push(
      {
        en: this.newEn,
        vn: this.newVn,
        memorized: false,
      }
    )
  }

  removeWord(word: Word) {
    const index = this.words.findIndex(element => element.en == word.en);
    this.words.splice(index, 1);
  }

  toBeShow(word: Word){
    return this.showMode == 'all' || (this.showMode == 'memorized' && word.memorized) || (this.showMode == 'un-memorized' && !word.memorized);
  }

}
