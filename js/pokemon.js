//  MAESTRO POKEMON
function nombreMaestro() {
if (nombreUsuario.value != "" && nombreUsuario.value != " ") {
var maestroPokemon =  {
	name: nombreUsuario.value,
 	sex: "male",
 	letra: "o",
 	pokebola: "azul"
};
 if (document.getElementsByName('sex')[1].checked)
 	{
     	maestroPokemon.sex = "female";
     	maestroPokemon.letra = "a";
     	maestroPokemon.pokebola = "rosa";
	}
/*NOMBRES LARGOS*/
if (maestroPokemon.name.length >= 15) {
	maestroPokemon.name = maestroPokemon.name.split(" ")[0] + " " + maestroPokemon.name.split(" ")[1];
}
obtenerNombre.className="nombreObtenido";
nombreUsuario.value= "Bienvenid" + maestroPokemon.letra + " " + maestroPokemon.name;
nombreUsuario.disabled = true;
maestroPokebola.src=("img/pokebola"+maestroPokemon.pokebola+".png");
maestroPokebola.style.marginLeft = (5+((maestroPokemon.name.length * 1.15)) + "em");
}
else {
	alert("Debes Ingresar tu nombre");
	nombreUsuario.focus();
	}
}
// SELECCION POKEMON
function pokemonSeleccionado() {
var r = document.getElementsByName('seleccionPokemon');
for (var i = 0, length = r.length; i < length; i++) {
    if (r[i].checked) {
    	// alert("Has Elegido a " + Pokemones[i]);
	r[i].checked=0;
    }
}
}
// INSERTAR POKEMONES
var Pokemones = {};
function Pokemon(n,v,a,t,g)
{
        this.nombre = n;
        this.vida = v;
        this.ataque = a;
        this.grito = g;
        this.tipo = t;
        this.gritar = function () {
            alert(this.grito);
        }
};

var Pikachu = new Pokemon("Pikachu", 100, 55,"Eléctrico","Pika!");
var Bulbasaur = new Pokemon("Bulbasaur", 95, 43,"Tierra","Bulbasaur!");
var Charmander = new Pokemon("Charmander", 88, 54,"Fuego","Charmander!");
var Eevee = new Pokemon ("Eevee", 75, 40,"Fuego","Eeve!");
var Squirtle = new Pokemon("Squirtle", 100, 55,"Agua","Squirtle!");
var Snorlax = new Pokemon("Snorlax", 130, 35,"Normal","zzZzz!");
var Skitty = new Pokemon("Skitty", 100, 30,"Normal","Skitty!");
var Quagsire = new Pokemon("Quagsire", 80, 40,"Tierra","Quagsire!");
var Phanpy = new Pokemon("Phanpy", 45, 63,"Tierra","Phanpy!");
var Ditto = new Pokemon("Ditto", 30, 22,"Normal","");
var Diglett = new Pokemon("Diglett", 90, 53,"Tierra","Digg Digg Digg");
var Haunter = new Pokemon("Haunter", 78, 48,"Venenoso","Haunter!");
Pokemones[Pikachu.nombre] = Pikachu;
Pokemones[Bulbasaur.nombre] = Bulbasaur;
Pokemones[Charmander.nombre] = Charmander;
Pokemones[Eevee.nombre] = Eevee;
Pokemones[Squirtle.nombre] = Squirtle;
Pokemones[Snorlax.nombre] = Snorlax;
Pokemones[Skitty.nombre] = Skitty;
Pokemones[Quagsire.nombre] = Quagsire;
Pokemones[Phanpy.nombre] = Phanpy;
Pokemones[Ditto.nombre] = Ditto;
Pokemones[Diglett.nombre] = Diglett;
Pokemones[Haunter.nombre] = Haunter;


function insertarPokemones() {
    // CREAR ESTRUCTURA n VECES
    // n = Cuantos Pokemones
    var c = 0;
for(var nombre_pokemon in Pokemones){
   var pokemon =  Pokemones[nombre_pokemon];
    // CREAR ELEMENTOS
    var li=document.createElement('li');
    var label=document.createElement("label");
    var radio=document.createElement("input");
    var gritoPoke=document.createElement("span");
    gritoPoke.setAttribute('id','gritoPokemon'+c);
    // ESTABLECER ATRIBUTOS A LOS RADIOS
    radio.setAttribute('name','seleccionPokemon');
    radio.setAttribute('type','radio');
    radio.setAttribute('value',c);
    radio.setAttribute('onChange','pokemonSeleccionado()');
    // NOMBRE DEL POKEMON
    var nombrePokemon = document.createElement("h4");
    nombrePokemon.setAttribute('nombrePokemon',pokemon.nombre);
    // FOTO DEL POKEMON
    var fotoPokemon = document.createElement("img");
    fotoPokemon.setAttribute('src','img/'+pokemon.nombre+'.png');
    // AREA DE VALORES DE CADA POKEMON
    var valores = document.createElement("p");
    valores.setAttribute('pokemon',pokemon.nombre);
    // JERARQUIZAR ELEMENTOS
    listaPokemon.appendChild(li);
    li.appendChild(label);
    label.appendChild(gritoPoke);
    label.appendChild(radio);
    label.appendChild(nombrePokemon);
    label.appendChild(fotoPokemon);
    label.appendChild(valores);
    c++;
}
function barra(p) {
var puntos = p;
var barra = 10;
var activos = Math.floor(puntos/10);
var decimas = Math.ceil(((puntos/10)-activos)*10);
var vaciosdecimas = 10-decimas;
var vacios = (barra - activos) - (Math.ceil(decimas/10));

for (b=0; b<activos; b++) {
    var div = document.createElement("div");
    div.setAttribute('class','box active');
    c[i].appendChild(div);
}
if (decimas >0) {
for (b=0; b<decimas; b++) {
    var div = document.createElement("div");
    div.setAttribute('class','small active');
    c[i].appendChild(div);
}
for (b=0; b<vaciosdecimas; b++) {
    var div = document.createElement("div");
    div.setAttribute('class',' small');
    c[i].appendChild(div);
}
}
for (b=0; b<vacios; b++) {
    var div = document.createElement("div");
    div.setAttribute('class','box');
    c[i].appendChild(div);

}
// alert("PUNTOS " +puntos+"\n\nBARRA: " +barra+" \n\nACTIVOS: "+activos+" \n\nDECIMAS "+decimas +"\n\nDECIMAS VACIAS "+vaciosdecimas + "\n\n\nVACIOS "+ vacios);
}
var c = listaPokemon.getElementsByTagName('p');
    var i = 0;
for(var nombre_pokemon in Pokemones){
   var pokemon =  Pokemones[nombre_pokemon];
    var pokeHabla = document.getElementById('gritoPokemon'+i); 
    pokeHabla.innerHTML=pokemon.grito;
    c[i].innerHTML="<span class='vida'>Vida: "
    +pokemon.vida;
barra(pokemon.vida);
c[i].innerHTML+="</span><span class='ataque'>Ataque: "
    + pokemon.ataque;
barra(pokemon.ataque);
c[i].innerHTML+="</span><span class='tipo'>Tipo: "
    +pokemon.tipo +
    "</span>";
i++;
}
}