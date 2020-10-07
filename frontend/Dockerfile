FROM orgo_app/frontend-builder as builder

COPY src/ ./src/

RUN npm run build

FROM nginx:alpine

COPY config/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /home/app/dist/ /usr/share/nginx/html
