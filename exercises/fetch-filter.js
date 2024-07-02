const fetchFilter = async (url) => {
  try {
    response = await fetch(url);
    if (!response.ok) throw new Error("failed to fetch data");
    data = await response.json();
    return data.Results.filter(
      (data) => data.Country === "UNITED STATES (USA)"
    );
  } catch (error) {
    console.error(error);
  }
};

fetchFilter(
  "https://vpic.nhtsa.dot.gov/api/vehicles/GetAllManufacturers?format=json&page=2"
).then((result) => console.log(result));
