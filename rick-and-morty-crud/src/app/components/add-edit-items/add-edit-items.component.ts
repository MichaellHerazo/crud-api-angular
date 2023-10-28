import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Item } from 'src/app/interfaces/item';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-add-edit-items',
  templateUrl: './add-edit-items.component.html',
  styleUrls: ['./add-edit-items.component.scss'],
})
export class AddEditItemsComponent {
  form: FormGroup;
  loading: boolean = false;
  id: number;
  operacion: string = 'Agregar';

  constructor(
    private fb: FormBuilder,
    private _itemService: ItemService,
    private router: Router,
    private toastr: ToastrService,
    private aRouter: ActivatedRoute
  ) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      price: [null, Validators.required],
      stock: [null, Validators.required],
    });
    this.id = Number(aRouter.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {
    if (this.id != 0) {
      this.operacion = 'Editar';
      this.getItem(this.id);
    }
  }

  getItem(id: number) {
    this.loading = true;
    this._itemService.getItem(id).subscribe((data: Item) => {
      console.log(data);
      this.loading = false;
      this.form.setValue({
        name: data.name,
        description: data.description,
        price: data.price,
        stock: data.stock,
      });
    });
  }

  addItem() {
    const item: Item = {
      name: this.form.value.name,
      description: this.form.value.description,
      price: this.form.value.price,
      stock: this.form.value.stock,
    };

    this.loading = true;

    if (this.id !== 0) {
      item.id = this.id;
      this._itemService.updateItem(this.id, item).subscribe(() => {
        this.toastr.info(
          'El item ' + item.name + ' fue actualizado con éxito',
          'Item actualizado'
        );
        this.loading = false;
        this.router.navigate(['/']);
      });
    } else {
      this._itemService.saveItem(item).subscribe(() => {
        this.loading = false;
        this.toastr.success(
          'El item ' + item.name + ' fue registrado con éxito',
          'Item registrado'
        );
        this.router.navigate(['/']);
      });
    }
  }
}
