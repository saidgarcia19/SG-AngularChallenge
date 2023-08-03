import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Blogger } from 'src/app/models/blogger';
import { selectAllBloggers } from '../components.selectors';
import { MatDialog } from '@angular/material/dialog';
import { BloggerDetailComponent } from '../blogger-detail/blogger-detail.component';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-blogger-list',
  templateUrl: './blogger-list.component.html',
  styleUrls: ['./blogger-list.component.scss']
})
export class BloggerListComponent {
  dataForm: FormGroup = this.fb.group({
    searchTerm: ''
  });
  dataSource: Blogger[] = [];
  constructor(private store: Store,
    private dialog: MatDialog,
    private fb: FormBuilder,) {
    this.store.select(selectAllBloggers).subscribe(bloggers => {
      this.dataSource = bloggers;
    });
  }

  columnsToDisplay: string[] = ['name', 'website', 'picture'];

  getFriendName(friendId: string): string {
    const friend = this.dataSource.find(friend => friend.id === friendId);
    return friend ? friend.name : 'Desconocido';
  }

  openModal(blogger: Blogger): void {
    // Abre el modal y pasa la información del blogger al componente del modal
    const dialogRef = this.dialog.open(BloggerDetailComponent, {
      width: '500px',
      data: blogger
    });

  }

  filtrar() {
    const term = this.dataForm.getRawValue();
    this.dataSource = this.dataSource.filter(item => item.name.toLowerCase().includes(term.searchTerm.toLowerCase()) || item.website.toLowerCase().includes(term.searchTerm.toLowerCase()));
  }

  resetSearch(){
    this.store.select(selectAllBloggers).subscribe(bloggers => {
      this.dataSource = bloggers;
    });
  }
}
