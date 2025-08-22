import { Elysia } from "elysia";

const app = new Elysia().get("/", () => ({
  message: "Hello Elysia"
})).listen(3001);

console.log(
  `🦊 Elysia server is running at ${app.server?.hostname}:${app.server?.port}`
);
