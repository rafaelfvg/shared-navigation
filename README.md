# shared-navigation-rafaelfvg

Un componente de navegación reutilizable para proyectos React y Next.js.

## Descripción

Este paquete contiene un componente `SidebarMenu` que puedes usar en tus proyectos React y Next.js para mostrar una barra de navegación con enlaces basados en los permisos del usuario.

## Instalación

```bash
npm install shared-navigation-rafaelfvg
```

## Ejemplo de uso

``` jsx
import SidebarMenu from 'shared-navigation-rafaelfvg'; 

const MENU_ITEMS = [
  {
    name: "Dashboard",
    href: "/dashboard",
    permissions: ['admin', 'user'],
    submenu: [
      {
        permissions: ['admin'],
        name: "Product List",
        href: "/products-list",
      }
    ],    
  },
  {
    name: "About",
    href: "/about",
    permissions: ['admin', 'user'],
  },
  {
    name: "Comments",
    href: "/comments",
    permissions: ['user'],    
  },  
  {
    name: "Commissions",
    href: "/commissions",
    permissions: ['admin', 'user'],
    submenu: [
      {
        name: "Commissions List",
        href: "/commissions-list",
        permissions: ['COMMISSION_READ'],
      }
    ],
  }
]

function App() {
  const userPermissions = ['admin'];

  return (
    <div style={{ display: 'flex' }}>
      <SidebarMenu items={MENU_ITEMS} userPermissions={userPermissions} />
      {/* app main content*/}
    </div>
  );
}

// visible items: dashboard, product list, about, commissions root

export default App;
```
