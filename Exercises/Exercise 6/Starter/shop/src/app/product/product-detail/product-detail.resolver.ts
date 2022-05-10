import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot, Router } from '@angular/router';
import { Product } from 'src/app/entities/entities';
import { Observable } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';

// TODO: 5
// Create a ProductDetailResolver guard. It should fetch one specific Product based on a given id
// Register the resolver and use it in the product routes table
// Modify the product-detail,component.ts to use the guard there

