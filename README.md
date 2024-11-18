<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

# Ejecutar en Desarrollo

1. Clonar el repositorio
2. Ejecutar
```
yarn install
```

3. Tener NestCLI instalado
```
nest i -g @nestjs/cli
```

4. Levantar la base de datos (tener instalado dockerDesktop)
```
docker-compose up -d
```

5. Clonar el archivo __.env.template__ y renombrar la copia a __.env__

6. Llenar las variables de entorno definidas en l ``.env``

7. Ejecutar la aplicacion
```
yarn start:dev
```

6. Reconstruir la base de datos con la seed
```
http://localhost:3000/api/v2/seed
```

## Stack usado
* MongoDB
* Nest
* Docker