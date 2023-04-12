import { select, selectAll } from "d3-selection";
import { scaleSqrt, scaleLinear, scalePow } from "d3-scale";
import { max, min } from "d3-array";
import { axisLeft, axisBottom } from "d3-axis";
import { geoMercator, geoPath } from "d3-geo";
import { json } from "d3-fetch";
import { transition } from "d3-transition";
import { easeLinear } from "d3-ease";

// Pour importer les données (@rollup/plugin-dsv)
import populationData from "../data/population_total.csv";
import lifeData from "../data/life_expectancy_years.csv";
import incomeData from "../data/income_per_person_gdppercapita_ppp_inflation_adjusted.csv";

let converterSI = (array, variable, variableName) => {
  let convertedVariable = array.map((d) => {
    // Trouver le format SI (M, B, k)
    let SI =
      typeof d[variable.toString()] === "string" ||
      d[variable.toString()] instanceof String
        ? d[variable.toString()].slice(-1)
        : d[variable.toString()];

    // Extraire la partie numérique
    let number =
      typeof d[variable.toString()] === "string" ||
      d[variable.toString()] instanceof String
        ? parseFloat(d[variable.toString()].slice(0, -1))
        : d[variable.toString()];

    // Selon la valeur SI, multiplier par la puissance
    switch (SI) {
      case "M": {
        return { country: d.country, [variableName]: Math.pow(10, 6) * number };
        break;
      }
      case "B": {
        return { country: d.country, [variableName]: Math.pow(10, 9) * number };
        break;
      }
      case "k": {
        return { country: d.country, [variableName]: Math.pow(10, 3) * number };
        break;
      }
      default: {
        return { country: d.country, [variableName]: number };
        break;
      }
    }
  });
  return convertedVariable;
};

