// ITERATION 1

/**
 *
 * @param {object} product Es una fila <tr> que nos pasan como parámetro. Cada fila contiene un producto
 */
function updateSubtotal(product) {
  console.log("🚀 ~ file: index.js:4 ~ updateSubtotal ~ product:", product);
  console.log("Calculating subtotal, yey!");

  //... your code goes here
  // Iteration 1

  // Escribid con vuestras palabras lo que entendeis que teneis que hacer a partir de los Steps de la Iteration 1.

  // Cada uno de los steps, se puede conseguir con una sola línea de código. Haced un console.log de cada variable que creeis para ver lo que va dando.

  // Step 1
  // Almacena en dos variables el precio y la cantidad de producto.
  const price = +product.querySelector(".price span").textContent;
  console.log("🚀 ~ file: index.js:18 ~ updateSubtotal ~ price:", price);

  // Step 2. Recuperar la cantidad de producto y almacenarla en una variable. Le podemos llamar quantity.
  const quantity = +product.querySelector(".quantity input").value; //bla bla
  console.log("🚀 ~ file: index.js:25 ~ updateSubtotal ~ quantity:", quantity);

  // Step 3. Calcula el precio total y guardarlo en otra variable
  const subtotal = price * quantity;
  console.log("🚀 ~ file: index.js:29 ~ updateSubtotal ~ subtotal:", subtotal);

  // Step 4. Actualiza el nodo del DOM adecuado, con el precio total que acabas de calcular. Tiene una class="subtotal"
  // Pista: tenéis que usar la variable "product" !!
  product.querySelector(".subtotal span").textContent = subtotal;

  // Step 5. Asegúrate que esta funciona retorna el precio total calculado
  return subtotal;
}

function calculateAll() {
  // ITERATION 2
  //... your code goes here

  // Leer la Iteración 2 del README.md y explicar en español que es lo que tenemos que hacer sin codigo todavia

  // Tenemos que para cada producto, calcular su subtotal

  // Paso 1
  // usa adecuadamente document.querySelectorAll para recuperar todos los productos. selector .product
  const products = document.querySelectorAll(".product"); // COMPLETAR
  console.log("🚀 ~ file: index.js:50 ~ calculateAll ~ products:", products);

  // Paso 2
  // Para cada producto, tenemos que invocar la función updateSubtotal

  // acumular el subtotal de cada producto
  let total = 0;

  products.forEach(function (p) {
    // tenemos que invocar la función updateSubtotal y pasarle como parámetro el producto p
    // COMPLETAR 1 linea

    // Iteración 3: Tenemos que sumar a  la variable total con el subtotal calculado por la función updateSubtotal
    total = total + updateSubtotal(p); // MODIFICAR
  });

  // ITERATION 3
  //... your code goes here
  // Tenemos que actualizar el nodo del DOM adecuado con el valor de la variable total
  // AÑADIR UNA LINEA DE CODIGO
  document.querySelector("#total-value span").textContent = total;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log("The target in remove is:", target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);

  //... your code goes here
});
