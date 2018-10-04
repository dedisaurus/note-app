import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-com-note',
  templateUrl: './com-note.component.html',
  styleUrls: ['./com-note.component.css']
})
export class ComNoteComponent implements OnInit {

  isi_note: string;
  tanggalNote: any;
  birthday = new Date(1977,3,15);
  constructor() { }

  ngOnInit() {
    this.isi_note ="Hallo ini note saya";
    this.tanggalNote = new Date().getTime();
  }
  editNote(){
    this.isi_note = 'Hallo note ini telah diubah.';
  }

}
