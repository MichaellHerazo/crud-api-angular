import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Item } from 'src/app/interfaces/item';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.scss'],
})
export class ListItemsComponent {
  listItems: Item[] = [];
  loading: boolean = false;
  searchTerm: string = ''

  constructor(private _itemService: ItemService, private toastr: ToastrService) {}

  ngOnInit(): void {
    this.getListItems();
  }

  filterItems() {
    if (this.searchTerm) {
      this.listItems = this.listItems.filter(item => {
        return (
          item.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
          item.description.toLowerCase().includes(this.searchTerm.toLowerCase())
        );
      });
    } else {
      // Si el término de búsqueda está vacío, muestra todos los elementos
      this.getListItems(); // Vuelve a cargar la lista completa
    }
  }

  getListItems() {
    this.loading = true;
    this._itemService.getListItems().subscribe((data) => {
      this.listItems = data;
      this.loading = false;
    });
  }

  deleteItem(id: number) {
    this.loading = true;
    this._itemService.deleteItem(id).subscribe(() => {
      this.loading = false;
      this.getListItems();
      this.toastr.warning('El item fue eliminado con éxito', 'Item eliminado');
    })
  }
}
