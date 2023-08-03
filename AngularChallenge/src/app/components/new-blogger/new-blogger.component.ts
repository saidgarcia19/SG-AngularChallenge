import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Blogger } from 'src/app/models/blogger';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectAllBloggers, selectBloggersState } from '../components.selectors';
import { addBlogger } from '../components.actions';

@Component({
  selector: 'app-new-blogger',
  templateUrl: './new-blogger.component.html',
  styleUrls: ['./new-blogger.component.scss']
})
export class NewBloggerComponent {
  dataForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
    website: ['', Validators.required],
    picture: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
  });

  contador = 3;

  constructor(private fb: FormBuilder,
    private store: Store) {
  }

  ngOnInit(): void {
    this.store.select(selectAllBloggers).subscribe(bloggers => {
      console.log('Bloggers del Store:', bloggers);
    });
  }

  onSubmit() {
    if (this.dataForm.valid) {
      const blogger: Blogger = { ...this.dataForm.value };
      blogger.id = (this.contador + 1).toString();
      blogger.friends = ["1", "2"];
      this.store.dispatch(addBlogger({ bloggerArray: [blogger] }));
      this.contador = this.contador + 1;
      this.dataForm.reset();
    }
  }
}
