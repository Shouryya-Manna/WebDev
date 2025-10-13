import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./components/ui/select";

function App() {
  const countries = [
    { name: "India", cities: ["Delhi", "Mumbai", "Kolkata"] },
    { name: "USA", cities: ["New York", "Los Angeles", "Chicago"] },
    { name: "Japan", cities: ["Tokyo", "Osaka", "Kyoto"] },
  ];

  const [selectedCountry, setSelectedCountry] = useState("");
  const [cities, setCities] = useState<string[]>([]);
  const [selectedCity, setSelectedCity] = useState("");

  const handleCountryChange = (countryName: string) => {
    setSelectedCountry(countryName);

    for (let country of countries) {
      if (country.name === countryName) {
        setCities(country.cities);
        break;
      }
    }
  };

  return (
    <div className="w-full h-screen flex justify-center items-center gap-5">
      <Select onValueChange={handleCountryChange}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Country" />
        </SelectTrigger>
        <SelectContent>
          {countries.map((country) => (
            <SelectItem value={country.name}>{country.name}</SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select
        disabled={selectedCountry === ""}
        onValueChange={(value) => setSelectedCity(value)}
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="City" />
        </SelectTrigger>
        <SelectContent>
          {cities.map((city) => (
            <SelectItem value={city}>{city}</SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}

export default App;
