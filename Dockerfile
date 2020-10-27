# 编译阶段
FROM node:lts-slim as builder

ADD . /builder/
WORKDIR /builder

# RUN yarn config set registry https://registry.npm.taobao.org \
#   && yarn \
#   && npm run build \
#   && rm -rf src node_modules

# 运行阶段
FROM xbt-coder-docker.pkg.coding.net/xbt-platform/web/application-service:master-ee5a31f3f3a0c2c6aecb7cbf1da6e32a597f1832 as app

COPY --from=builder /builder/dist/ /app/public/

EXPOSE 8090

ENTRYPOINT [ "node", "/app/dist/main" ]





EXPOSE 80
