import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Blogger } from 'src/app/models/blogger';
import { selectAllBloggers } from '../components.selectors';
import { AddFriendDialogComponent } from '../add-friend-dialog/add-friend-dialog.component';
import { updateBlogger } from '../components.actions';

@Component({
  selector: 'app-blogger-detail',
  templateUrl: './blogger-detail.component.html',
  styleUrls: ['./blogger-detail.component.scss']
})
export class BloggerDetailComponent {
  dataSource: Blogger[] = [];

  constructor(@Inject(MAT_DIALOG_DATA) public data: Blogger,
  private store: Store,
  private dialogRef: MatDialogRef<BloggerDetailComponent>,
  private dialog: MatDialog) {
    this.store.select(selectAllBloggers).subscribe(bloggers => {
      this.dataSource = bloggers;
    });
  }

  getFriendName(friendId: string): string {
    const friend = this.dataSource.find(friend => friend.id === friendId);
    return friend ? friend.name : 'Desconocido';
  }

  closeModal(): void {
    this.dialogRef.close();
  }

  AddNewFriend(blogger: Blogger): void {
    const dialogo = this.dialog.open(AddFriendDialogComponent, {
      width: '300px',
      data: {}
    });

    //revisar después(actualizá el registro pero causa una falla)
    // dialogo.afterClosed().subscribe(newFriendId => {
    //   if (newFriendId) {
    //     const bloggerClone : Blogger = JSON.parse(JSON.stringify(blogger));
    //     bloggerClone.friends.push(newFriendId);
    //     this.store.dispatch(updateBlogger({ blogger: bloggerClone }));
    //   }
    // });
  }
}
