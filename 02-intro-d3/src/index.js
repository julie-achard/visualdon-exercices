import * as d3 from "d3";
import { select } from "d3";

//Sélectionner le body y ajouter un div avec la classe "feuilleSVG"
d3.select("body").append("div").attr("class", "feuilleSVG");
//Définir la taille de la feuille
const WIDTH = 500;
const HEIGHT = 500;
//Créer le SVG dans la feuille SVG avec la taille définie plus haut
const feuilleSVG = d3
  .select(".feuilleSVG")
  .append("svg")
  .attr("width", WIDTH)
  .attr("height", HEIGHT);

//Définir les groupes
const circle1 = feuilleSVG.append("g");
const circle2 = feuilleSVG.append("g");
const circle3 = feuilleSVG.append("g");

//Cercle 1
circle1
  .append("circle")
  .attr("r", "40")
  .attr("cx", "50")
  .attr("cy", "50")
  .attr("id", "firstCircle");

circle1.append("text").text("1").attr("x", "40").attr("y", "120");

circle2
  .append("circle")
  .attr("r", "40")
  .attr("cx", "150")
  .attr("cy", "150")
  .attr("id", "secondCircle");

circle2.append("text").text("2").attr("x", "150").attr("y", "210");

circle3.append("circle").attr("r", "40").attr("cx", "250").attr("cy", "250");
circle3.append("text").text("3").attr("x", "250").attr("y", "310");

//Changer la couleur du deuxième cercle
circle2.select("#secondCircle").attr("fill", "red");

//Aligner verticalement les cercles en cliquand sur le dernier cercle
circle3.select("circle").on("click", function () {
  circle1.attr("transform", "translate(200, 50)");
  circle2.attr("transform", "translate(100, 250)");
});

//Données
const data = [20, 5, 25, 8, 15];
//Sélectionner l'endroit où on veut ajouter le barchart
const container = d3.select("body").append("div").attr("id", "barChart");
//Ajouter le svg dans le container
const barchart = container
  .append("svg")
  .attr("width", WIDTH)
  .attr("height", HEIGHT);
//Ajouter les rectangles
barchart
  .selectAll("rect")
  .data(data)
  .enter()
  .append("rect")
  .attr("x", (d, i) => i * 30) //pas compris
  .attr("y", (d) => 500 - d) //Aligner en bas
  .attr("width", 20) //largeur fixe du rectangle
  .attr("height", (d) => d); //les datas qui sont la hauteur du rectangle
