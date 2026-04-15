# prueba_tecnica_1
# 🛒 Sistema CRUD de Usuarios con Autenticación (Angular + Node.js + MongoDB)

## 📌 Descripción

Este proyecto es una aplicación web completa que implementa un sistema de gestión de usuarios con autenticación. Permite registrar usuarios, iniciar sesión y visualizar la información almacenada en la base de datos.

El sistema está construido bajo una arquitectura **Full Stack**, separando frontend y backend, e integrando una base de datos NoSQL.

---

## 🚀 Tecnologías utilizadas

### 🔧 Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JSON Web Token (JWT)
* bcryptjs

### 🎨 Frontend

* Angular (Standalone Components)
* TypeScript
* Bootstrap

---

## 📁 Estructura del proyecto

### Backend

```
backend/
│── src/
│   ├── controllers/
│   │   └── users.controller.js
│   ├── models/
│   │   └── user.model.js
│   ├── routes/
│   │   └── users.routes.js
│   ├── middleware/
│   │   └── auth.middleware.js
│   └── app.js
```

### Frontend

```
frontend/
│── src/app/
│   ├── components/
│   │   ├── login/
│   │   ├── register/
│   │   └── users/
│   ├── services/
│   │   └── auth.service.ts
│   ├── interceptors/
│   │   └── auth.interceptor.ts
│   ├── app.routes.ts
│   └── app.config.ts
```

---

## 🔐 Funcionalidades

* ✅ Registro de usuarios
* ✅ Inicio de sesión con JWT
* ✅ Encriptación de contraseñas
* ✅ Persistencia en MongoDB
* ✅ Visualización de usuarios en tabla
* ✅ Consumo de API REST desde Angular
* ✅ Manejo de rutas en frontend
* ✅ Interceptor para envío automático de token

---

## ⚙️ Instalación

### 1. Clonar repositorio

```
git clone https://github.com/tu-usuario/tu-repo.git
```

---

### 2. Backend

```
cd backend
npm install
npm run dev
```

El servidor correrá en:

```
http://localhost:3000
```

---

### 3. Frontend

```
cd frontend
npm install
ng serve
```

La aplicación correrá en:

```
http://localhost:4200
```

---

## 🔌 Endpoints principales

| Método | Endpoint      | Descripción      |
| ------ | ------------- | ---------------- |
| POST   | /api/register | Crear usuario    |
| POST   | /api/login    | Iniciar sesión   |
| GET    | /api/users    | Obtener usuarios |

---

## 🔑 Autenticación

El sistema utiliza JWT para proteger rutas.

### Flujo:

1. Usuario inicia sesión
2. Backend genera token
3. Token se guarda en `localStorage`
4. Interceptor lo envía en cada petición

---

## 🧪 Pruebas con Postman

Ejemplo de registro:

```json
POST /api/register
{
  "name": "Daniel",
  "lastname": "User",
  "email": "test@test.com",
  "password": "123456"
}
```

---

## ⚠️ Problemas comunes

* ❌ Error 404 → Ruta incorrecta
* ❌ Error 500 → Problema en backend
* ❌ Token inválido → Verificar middleware JWT
* ❌ Datos no se muestran → Revisar estructura `res` vs `res.users`
* ❌ Error `Symbol.iterator` → No se está recibiendo un array

---

## 📌 Mejoras futuras

* 🔄 CRUD completo (editar/eliminar usuarios)
* 🔐 Protección de rutas con guards
* 📊 Dashboard administrativo
* 🎨 Mejoras UI/UX
* 🌐 Deploy en la nube

---

## 👨‍💻 Autor

Desarrollado por **Daniel Ciendua**

---

## 📄 Licencia

Este proyecto es de uso educativo y libre para modificaciones.
