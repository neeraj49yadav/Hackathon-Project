// Backend Health Check Script
const http = require("http");

const endpoints = [
  { name: "Health Check", path: "/api/health" },
  { name: "Dashboard", path: "/api/dashboard" },
];

console.log("🔍 Testing Backend Endpoints...\n");

endpoints.forEach((endpoint) => {
  const options = {
    hostname: "localhost",
    port: 5000,
    path: endpoint.path,
    method: "GET",
    timeout: 5000,
  };

  const request = http.request(options, (response) => {
    let data = "";

    response.on("data", (chunk) => {
      data += chunk;
    });

    response.on("end", () => {
      console.log(`✅ ${endpoint.name}`);
      console.log(`   Status: ${response.statusCode}`);
      console.log(`   Response:`, JSON.parse(data));
      console.log("");
    });
  });

  request.on("error", (error) => {
    console.log(`❌ ${endpoint.name}`);
    console.log(`   Error: ${error.message}\n`);
  });

  request.on("timeout", () => {
    console.log(`⏱️ ${endpoint.name} - Timeout\n`);
    request.destroy();
  });

  request.end();
});
