
##########################################################
Vous devez écrire une fonction prenant deux paramêtres et qui retourne le quotient de la division euclidienne du premier par le second.

##########################
function solution(a, b) {
	// parseInt convertit son argument en entier, par troncature
    return parseInt(a / b);
}


############################################################
Vous devez coder la fonction factorielle.

##########################
function solution (n) {
    return n ? n * solution(n - 1) : 1;
}





###############################################################
Vous devez écrire une fonction qui prend en argumant un nombre et qui renvoie la sommes des nombres multiples de trois de 1 à ce nombre.


#######################
function solution (n) {
    return !n ? 0 : (
        (n % 3) ? solution(n - 1) : n + solution(n - 3)
    );
}









###############################################################
Vous devez écrire une fonction qui prend en paramêtre un tableau multidimmensionnel de nombres, ie [1, 2, [3, 4], [5, 6, [7, 8]]] ou [[1, 2], [3, 4], 5, [[6]]], et qui renvoie la somme des nombres qu'il contient.

##############
function solution(a) {
    var s = 0;
    a = a.flat(1);
    for (var i = 0; i < a.length; i++) {
        if ( typeof a[i] === 'number' ) {
            s += a[i];
        } else {
            a = a.concat(a[i].flat(1));
        }
    }
    return s;
}


#################################################################
Vous devez écrire une fonction qui prend en paramêtre un nombre et qui renvoie 1 s'il est premier ou 0 sinon. '


###########
// Syntaxe pour créer un générateur : function*
// On crée un générateur pour tous les nombres premiers
function* premiers() {
	// on initialise nos nombres avec 2 (pour les performances)
    var primes = [2];
    
    // Mon iterateur "renvoie" le 2
    yield 2;
    
    // On commence à 3, et on incremente 2 par 2 pour ne visiter que les impairs
    for (var i = 3; true; i += 2) {
    	
        // Je suppose que i est premier
        var test = true;
        
        // Je test pour chaque nombre premier connu si i est divisible
        for (var p of primes)
            if ( !(i % p) ) {
                test = false;
                break;
            }
            
        // Si i est toujours premier, je l'ajoute et je le "renvoie"'
        if (test) {
            primes.push(i);
            yield i;
        }
        
    }
}


function solution(a) {
    for(var p of premiers())
        if (p > a)
            return 0;
    	else if (p === a)
            return 1;
}





#############################################################
Vous devez écrire une fonction qui prend en paramêtre une chaine de caractère, qui en extrait les chiffres dans l'ordre et retourner le nombre correspondant.

########
function solution(a) {
    var int = 0;
    for(var i = 0; i < a.length; i++) {
    	// sur l'objet a[i] de type String, j'appelle la méthode match en lui passant
        // une expression regulière qui match exactement un chiffre.
        if ( a[i].match(/\d/) ) {
        	// si le caractère courant est un chiffre
            // je multiplie le nombre courant par 10
            // puis j'ajouter la valeur du nombre courant.'
            int = int * 10 + parseInt(a[i]);
        }
    }
    return int;
}


####################################################################
Vous devez écrire une fonction qui prend en paramêtre une chaine de caractères et qui renvoie le caractère qui y apparait le plus souvent.


####

function solution(a) {
    const counts = {};
    var res = 0, resl = "";
    for (var i = 0; i < a.length; i++) {
        
        if (counts[a[i]])
        	counts[a[i]] += 1;
        else counts[a[i]] = 1;
        
        if (counts[a[i]] > res) {
            res = counts[a[i]];
            resl = a[i];
        }
        
    }
    return resl;
}


function solution(a) {
    const counts = {};
    var res = 0;
    for (var i = 0; i < a.length; i++) {
        if (counts[a[i]])
        	counts[a[i]] += 1;
        else counts[a[i]] = 1;
        res = Math.max(res, counts[a[i]]);
    }
    return res;
}


###############################################
Vous devez écrire une fonction qui prend une chaine de caractères en paramêtre et qui la retourne avec les lettres dans l'ordre alphabétique.

###########
function solution(a) {
    return a.split("").sort().join('');
}




################################################
Vous devez écrire une fonction qui prend une chaine de caractères en paramêtre et qui renvoie une chaine composée d'un caractère sur deux du paramêtre, en prenant le premier, puis le troisième, etc.

###########

function solution_rec(s, skip, acc) {
    if ( s === "" )
        return acc;
    
    return solution_rec(
       	s.substring(1), 
       	!skip, 
    	acc + (skip ? "" : s[0])
   	);
}

function solution(s) {
    return solution_rec(s, false, "");
}

###########################################################
Vous devez écrire une fonction qui prend une chaine de caractères en paramêtre et qui renvoie la même chaine, mais avec un caractère sur deux en majuscule et l'autre en minuscule. Le premier doit être en majuscule.

###########
function solution(s, min = false, acc = "") {
    if ( s === "" )
        return acc;
    return solution(
        s.substring(1),
        !min,
        acc + (min ? s[0].toLowerCase() : s[0].toUpperCase())
    );
}

###############################################################
Vous devez écrire une fonction prenant deux chaine de caractères en paramêtres. La première est la chaine à rechercher dans la seconde.
La fonction renvoie 1 si la chaine est présente et 0 sinon.

######################
function solution(a, b) {
    if (check(a, b))
        return 1;
    return solution(a, b.substring(1));
}

function check(a, b) {
    if (!a.length)
        return 1;
    if (!b.length)
        return 0;
    if (a[0] === b[0])
        return check(a.substring(1), b.substring(1));
    return 0;
}




############################################################


Vous devez écrire une fonction prenant deux chaine de caractères en paramêtres. La première est la chaine à rechercher dans la seconde.
La fonction renvoie la position de départ si la chaine est présente et -1 sinon.

#############

function solution(a, b, p = 0) {
	if (a.length > b.length)
    	return 0;
    if (check(a, b))
        return p;
    if (!b.length)
        return -1;
    var np = heuristic(a, b, 1);
    return solution(a, b.substring(np), p + np);
}

function heuristic(a, b, j) {
	for (var i = j; i < b.length; i++)
    	if (b[i] === a[0])
        	return i + heuristic(a.substring(1), b.substring(i + 1), 0);
}


function check(a, b) {
    if (!a.length)
        return 1;
    if (!b.length)
        return 0;
    if (a[0] === b[0])
        return check(a.substring(1), b.substring(1));
    return 0;
}


#################################################

Vous devez écrire une fonction prenant deux chaine de caractères en paramêtres. La première est la chaine à rechercher dans la seconde.
La fonction renvoie le nombre de fois ou la première chaine est trouvée dans la seconde.



#################
function solution(a, b, n = 0) {
    if (!b.length)
        return n;
    return solution(a, b.substring(1), n + (check(a, b) ? 1 : 0));
}

function check(a, b) {
    if (!a.length)
        return 1;
    if (!b.length)
        return 0;
    if (a[0] === b[0])
        return check(a.substring(1), b.substring(1));
    return 0;
}


############################################################################
Vous devez écrire une fonction prenant en paramêtre un tableau multidimmensionnel contenant des expressions arithmétiques prédécoupées et calculer le résultat.
Par exemple solution([12, "+", 42]) doit retourner 54.
solution([[15, "*", 3], "+", [10, "/", 2], "-", 1]) doit retourner 49.


#######################
function solution(a) {
    
    var ops = [], op = "";
    for(var e of a) {
        
        switch (typeof e) {
                
            case "string":
                op = e;
            break;
                
            case "number":
                ops.push(e);
            break;
            
            default: ops.push(solution(e))
            
        }
        
        if ( ops.length === 2 )
            switch(op) {
                case "+": ops = [ops[0] + ops[1]]; break;
                case "-": ops = [ops[0] - ops[1]]; break;
                case "/": ops = [ops[0] / ops[1]]; break;
                case "*": ops = [ops[0] * ops[1]]; break;
            }
        
    }
    
    return ops[0];
    
}






