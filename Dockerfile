# Usa una imagen oficial de Node.js como base
FROM node:18


# Establecer el directorio de trabajo dentro del contenedor
WORKDIR /app


# Copiar archivos del proyecto
COPY package*.json ./


# Instalar dependencias
RUN npm install


# Copiar el resto de los archivos
COPY . .


# Compilar el código TypeScript
RUN npm run build


# Exponer el puerto en el que correrá la aplicación
EXPOSE 3000


# Comando para ejecutar la aplicación
CMD ["npm", "start"]
