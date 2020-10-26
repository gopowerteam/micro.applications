# 编译阶段
FROM node:lts-slim as builder

ADD . /builder/
WORKDIR /builder

RUN yarn config set registry https://registry.npm.taobao.org \
  && yarn \
  && npm run build \
  && rm -rf src node_modules

# 运行阶段
FROM web/application-service as builder

COPY --from=builder /builder/ /app/

EXPOSE 8090

ENTRYPOINT [ "node", "/app/dist/main" ]





EXPOSE 80
