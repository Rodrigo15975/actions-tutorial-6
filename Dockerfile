FROM node:22-alpine3.20

WORKDIR /app

# Instala las dependencias
COPY package*.json ./
RUN npm install

# Copia el resto de los archivos
COPY . .

EXPOSE 5173

CMD [ "npm", "run", "dev" ]
