const isDevelopment: boolean =
  !process.env.NODE_ENV || process.env.NODE_ENV === "development";

const devApiConfig = {
  baseUrl: "http://localhost:5000/api/v1",
  url: "http://localhost:5000",
  docsUrl: "http://localhost:5000/api/v1/docs",
};

const prodApiConfig = {
  baseUrl: "https://meet-api.lifecompilers.in/api/v1",
  url: "https://meet-api.lifecompilers.in",
  docsUrl: "https://meet-api.lifecompilers.in/api/v1/docs",
};

const frontendUrl = !isDevelopment
  ? "https://meet.lifecompilers.in"
  : "http://localhost:3000";

const apiConfig = !isDevelopment ? prodApiConfig : devApiConfig;

export { apiConfig, frontendUrl };
