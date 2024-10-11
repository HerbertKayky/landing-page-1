import Models from "../ModelsSection";

async function fetchModels() {
  const res = await fetch("http://localhost:3000/db.json");
  if (!res.ok) {
    throw new Error("Failed to fetch models");
  }
  const data = await res.json();
  return data.models;
}

export default async function ModelsServer() {
  const models = await fetchModels();
  return <Models models={models} />;
}
