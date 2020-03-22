FROM caddy/caddy:latest
EXPOSE 80
WORKDIR /app
COPY . /usr/share/caddy/