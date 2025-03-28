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
import { MENU_ITEMS } from './menuItems'; 

function App() {
  const userPermissions = ['admin', 'user', 'COMMISSION_READ'];

  return (
    <div style={{ display: 'flex' }}>
      <SidebarMenu items={MENU_ITEMS} userPermissions={userPermissions} />
      {/* app main content*/}
    </div>
  );
}

export default App;
```
