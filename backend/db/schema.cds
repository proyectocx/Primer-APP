namespace my.company;

entity Clientes {
  key ID     : UUID;
  nombre     : String(100);
  email      : String(100);
  ciudad     : String(100);
}