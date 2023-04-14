import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { ShoppingListService } from 'src/app/services/shopping-list.service';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  @ViewChild('nameInput', {static: false}) nameInputRef: ElementRef;
  @ViewChild('amountInput', {static: false}) amountInputRef: ElementRef;




  constructor(private shoppingList: ShoppingListService) { }

  ngOnInit(): void {
  }

  onAddItem(){
    this.shoppingList.addIngredient({name: this.nameInputRef.nativeElement.value,
       amount: this.amountInputRef.nativeElement.value});
  }

}
