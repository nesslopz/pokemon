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
    	alert("Has Elegido a " + Pokemones[i]);
	r[i].checked=0;
    }
}
}
// INSERTAR POKEMONES
var Pokemones = [];
function Pokemon(n,v,a,t,g)
{
        this.nombre = n;
        this.vida = v;
        this.ataque = a;
        this.grito = g;
        this.tipo = t;
        /*Guardar los nombres de los Pokemones en un array*/
        Pokemones[Pokemones.length] = this.nombre;
        // this.imagen = "img/" + this.nombre +".png";
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
function insertarPokemones() {
    // CREAR ESTRUCTURA n VECES
    // n = Cuantos Pokemones
for (var p = 0; p<Pokemones.length; p++) {
    // CREAR ELEMENTOS
    var li=document.createElement('li');
    var label=document.createElement("label");
    var radio=document.createElement("input");
    var gritoPoke=document.createElement("span");
    gritoPoke.setAttribute('id','gritoPokemon'+p);
    // ESTABLECER ATRIBUTOS A LOS RADIOS
    radio.setAttribute('name','seleccionPokemon');
    radio.setAttribute('type','radio');
    radio.setAttribute('value',p);
    radio.setAttribute('onChange','pokemonSeleccionado()');
    // NOMBRE DEL POKEMON
    var nombrePokemon = document.createElement("h4");
    nombrePokemon.setAttribute('nombrePokemon',Pokemones[p]);
    // FOTO DEL POKEMON
    var fotoPokemon = document.createElement("img");
    fotoPokemon.setAttribute('src','img/'+Pokemones[p]+'.png');
    // AREA DE VALORES DE CADA POKEMON
    var valores = document.createElement("p");
    valores.setAttribute('pokemon',Pokemones[p]);
    // JERARQUIZAR ELEMENTOS
    listaPokemon.appendChild(li);
    li.appendChild(label);
    label.appendChild(gritoPoke);
    label.appendChild(radio);
    label.appendChild(nombrePokemon);
    label.appendChild(fotoPokemon);
    label.appendChild(valores);
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
for (var i = 0; i < c.length; i++) {
var pokeHabla = document.getElementById('gritoPokemon'+i)    
if (c[i].getAttribute("pokemon") == "Pikachu") {
    pokeHabla.innerHTML=Pikachu.grito;
    c[i].innerHTML="<span class='vida'>Vida: "
    +Pikachu.vida;
barra(Pikachu.vida);
c[i].innerHTML+="</span><span class='ataque'>Ataque: "
    + Pikachu.ataque;
barra(Pikachu.ataque);
c[i].innerHTML+="</span><span class='tipo'>Tipo: "
    +Pikachu.tipo +
    "</span>";
        }
else if (c[i].getAttribute("pokemon") == "Bulbasaur") {
    pokeHabla.innerHTML=Bulbasaur.grito;
    c[i].innerHTML="<span class='vida'>Vida: "
    +Bulbasaur.vida;
barra(Bulbasaur.vida);
c[i].innerHTML+="</span><span class='ataque'>Ataque: "
    + Bulbasaur.ataque;
barra(Bulbasaur.ataque);
c[i].innerHTML+="</span><span class='tipo'>Tipo: "
    +Bulbasaur.tipo +
    "</span>";
        }
else if (c[i].getAttribute("pokemon") == "Charmander") {
    pokeHabla.innerHTML=Charmander.grito;
    c[i].innerHTML="<span class='vida'>Vida: "
    +Charmander.vida;
barra(Charmander.vida);
c[i].innerHTML+="</span><span class='ataque'>Ataque: "
    + Charmander.ataque;
barra(Charmander.ataque);
c[i].innerHTML+="</span><span class='tipo'>Tipo: "
    +Charmander.tipo +
    "</span>";
        }
else if (c[i].getAttribute("pokemon") == "Eevee") {
    pokeHabla.innerHTML=Eevee.grito;
    c[i].innerHTML="<span class='vida'>Vida: "
    +Eevee.vida;
barra(Eevee.vida);
c[i].innerHTML+="</span><span class='ataque'>Ataque: "
    + Eevee.ataque;
barra(Eevee.ataque);
c[i].innerHTML+="</span><span class='tipo'>Tipo: "
    +Eevee.tipo +
    "</span>";
        }
else if (c[i].getAttribute("pokemon") == "Squirtle") {
    pokeHabla.innerHTML=Squirtle.grito;
    c[i].innerHTML="<span class='vida'>Vida: "
    +Squirtle.vida;
barra(Squirtle.vida);
c[i].innerHTML+="</span><span class='ataque'>Ataque: "
    + Squirtle.ataque;
barra(Squirtle.ataque);
c[i].innerHTML+="</span><span class='tipo'>Tipo: "
    +Squirtle.tipo +
    "</span>";
        }
else if (c[i].getAttribute("pokemon") == "Snorlax") {
    pokeHabla.innerHTML=Snorlax.grito;
    c[i].innerHTML="<span class='vida'>Vida: "
    +Snorlax.vida;
barra(Snorlax.vida);
c[i].innerHTML+="</span><span class='ataque'>Ataque: "
    + Snorlax.ataque;
barra(Snorlax.ataque);
c[i].innerHTML+="</span><span class='tipo'>Tipo: "
    +Snorlax.tipo +
    "</span>";
        }
else if (c[i].getAttribute("pokemon") == "Skitty") {
    pokeHabla.innerHTML=Skitty.grito;
    c[i].innerHTML="<span class='vida'>Vida: "
    +Skitty.vida;
barra(Skitty.vida);
c[i].innerHTML+="</span><span class='ataque'>Ataque: "
    + Skitty.ataque;
barra(Skitty.ataque);
c[i].innerHTML+="</span><span class='tipo'>Tipo: "
    +Skitty.tipo +
    "</span>";
        }
else if (c[i].getAttribute("pokemon") == "Quagsire") {
    pokeHabla.innerHTML=Quagsire.grito;
    c[i].innerHTML="<span class='vida'>Vida: "
    +Quagsire.vida;
barra(Quagsire.vida);
c[i].innerHTML+="</span><span class='ataque'>Ataque: "
    + Quagsire.ataque;
barra(Quagsire.ataque);
c[i].innerHTML+="</span><span class='tipo'>Tipo: "
    +Quagsire.tipo +
    "</span>";
        }
else if (c[i].getAttribute("pokemon") == "Phanpy") {
    pokeHabla.innerHTML=Phanpy.grito;
    c[i].innerHTML="<span class='vida'>Vida: "
    +Phanpy.vida;
barra(Phanpy.vida);
c[i].innerHTML+="</span><span class='ataque'>Ataque: "
    + Phanpy.ataque;
barra(Phanpy.ataque);
c[i].innerHTML+="</span><span class='tipo'>Tipo: "
    +Phanpy.tipo +
    "</span>";
        }
else if (c[i].getAttribute("pokemon") == "Ditto") {
    pokeHabla.innerHTML=Ditto.grito;
    c[i].innerHTML="<span class='vida'>Vida: "
    +Ditto.vida;
barra(Ditto.vida);
c[i].innerHTML+="</span><span class='ataque'>Ataque: "
    + Ditto.ataque;
barra(Ditto.ataque);
c[i].innerHTML+="</span><span class='tipo'>Tipo: "
    +Ditto.tipo +
    "</span>";
        }
else if (c[i].getAttribute("pokemon") == "Diglett") {
    pokeHabla.innerHTML=Diglett.grito;
    c[i].innerHTML="<span class='vida'>Vida: "
    +Diglett.vida;
barra(Diglett.vida);
c[i].innerHTML+="</span><span class='ataque'>Ataque: "
    + Diglett.ataque;
barra(Diglett.ataque);
c[i].innerHTML+="</span><span class='tipo'>Tipo: "
    +Diglett.tipo +
    "</span>";
        }
else if (c[i].getAttribute("pokemon") == "Haunter") {
    pokeHabla.innerHTML=Haunter.grito;
    c[i].innerHTML="<span class='vida'>Vida: "
    +Haunter.vida;
barra(Haunter.vida);
c[i].innerHTML+="</span><span class='ataque'>Ataque: "
    + Haunter.ataque;
barra(Haunter.ataque);
c[i].innerHTML+="</span><span class='tipo'>Tipo: "
    +Haunter.tipo +
    "</span>";
        }
    }
}