using { my.company as my } from '../db/schema';

service CatalogService @(path:'/catalog') {
  entity Clientes as projection on my.Clientes;
}