export async function fetchDrugs() {
  const response = await fetch("http://localhost:8080/api/v1/drugs");

  if (!response.ok) {
    throw new Error("Failed to fetch drugs");
  }

  return response.json();
}