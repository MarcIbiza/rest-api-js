# rest-api-js

Instalamos el express y morgan, 

Express es un framework de node que nos permite escribir código del lado del servidor de una manera bastante sencilla.

Morgan es un modulo que nos permite ver por consola las peticiones que nos van llegando.


# npm i express morgan

Instalamos tambien un que reinicie el servidor node por nosotros cada vez, para no estar teniendo que hacerlo todo el rato nosotros manualmente.

# npm i nodemon -D 

Vamos a package.json y añadimos el script : 

 "scripts": {
    "dev": "nodemon src/index.js"
  }

- Para que ejecute atomaticamente cuando guardamos, vamos a consola y ejecutamos el script: 

# npm run dev