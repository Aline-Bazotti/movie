module.exports = {
client: {
  service: {
    name: "my-service-name",
    url: "http://localhost:5000/graphql",
  },
  excludes: ["**/__tests__/**","**/*.generated.ts"]
},
};
           