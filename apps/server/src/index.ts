import { Elysia } from "elysia";

const app = new Elysia().get("/", () => ({
  message: "Hello Elysia"
})).listen(3001);

// swagger({
//   path: "/docs",
//   specPath: "api/v1",
//   scalarConfig: {
//     authentication: {
//       http: {
//         bearer: {
//           token:
//             "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiZ29vZ2xlQHRlc3QuY29tIiwiaWQiOjM0LCJlbWFpbCI6Imdvb2dsZUB0ZXN0LmNvbSIsInByb2plY3QiOjI5LCJpYXQiOjE3NTQ1NzE4NTIsImV4cCI6MTg0OTI0NDY1Mn0.CS_COZ2Xfge8mcDh8YPFz_kor2oQY9hTkKQIJwqWreY",
//         },
//         basic: {
//           password: "",
//           username: "",
//         },
//       },
//     },
//     hideDownloadButton: true,
//     // showSidebar: process.env.NODE_ENV !== "production",
//     favicon: "/favicon.png",
//   },
//   provider: "scalar",
//   documentation: {
//     components: {
//       securitySchemes: {
//         bearerAuth: {
//           type: "http",
//           scheme: "bearer",
//           bearerFormat: "JWT",
//         },
//       },
//     },
//     info: {
//       title: "KLÜGER Voice Assistant Gateway Api's",
//       description:
//         "The unified authentication gateway for all your smart devices. Connect Alexa, Google Home, and Siri to your KLÜGER account for seamless and secure home automation.",
//       version: "1.0.0",
//     },
//     tags: [
//       {
//         name: "Alexa",
//         description:
//           "This section will handle data for Alexa voice assistant.",
//       },
//       {
//         name: "Google",
//         description:
//           "This section will handle data for Google voice assistant.",
//       },
//     ],
//   },
// })


console.log(
  `🦊 Elysia server is running at ${app.server?.hostname}:${app.server?.port}`
);
