FROM node:20 as build

WORKDIR /app
COPY . .

ARG VITE_API_BASE_URL=http://localhost:8088

ENV VITE_API_BASE_URL=$VITE_API_BASE_URL

RUN npm install serve -g
RUN npm install
RUN npm run build

EXPOSE 5173

CMD ["npm", "run", "serve"]
