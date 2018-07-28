//a program for generating password based on certain passphrase

toHash("Rezwin RAfeek");

function toHash(text)
    {
       var hash = "";
         for( i = 0; i < text.length ; ++ i)
         switch(text[i])
                {
                case "A" :    
                case "a" : hash = hash + "@";break;
                case "B" :
                case "b" : hash = hash + "6";break;
                case "C" :
                case "c" : hash = hash + "(";break;
                case "D" :
                case "d" : hash = hash + "cl";break;
                case "E" :
                case "e" : hash = hash + "n";break;
                case "F" :
                case "f" : hash = hash + "8";break;
                case "G" :
                case "g" : hash = hash + "9";break;
                case "H" :
                case "h" : hash = hash + "#";break;
                case "I" :
                case "i" : hash = hash + "!";break;
                case "J" :
                case "j" : hash = hash + "j";break;
                case "K" :
                case "k" : hash = hash + "lc";break;
                case "L" :
                case "l" : hash = hash + "1";break;
                case "M" :
                case "m" : hash = hash + "nn";break;
                case "N" :
                case "n" : hash = hash + "e";break;
                case "O" :
                case "o" : hash = hash + "0";break;
                case "P" :
                case "p" : hash = hash + "q";break;
                case "Q" :
                case "q" : hash = hash + "?";break;
                case "R" :
                case "r" : hash = hash + "v";break;
                case "S" :
                case "s" : hash = hash + "5";break;
                case "T" :
                case "t" : hash = hash + "+";break;
                case "U" :
                case "u" : hash = hash + "y";break;
                case "V" :
                case "v" : hash = hash + "r";break;
                case "W" :
                case "w" : hash = hash + "uu";break;
                case "X" :
                case "x" : hash = hash + "*";break;
                case "Y" :
                case "y" : hash = hash + "T";break;
                case "Z" :
                case "z" : hash = hash + "7";break;
                default :hash = hash + text[i];
                }
                document.writeln(hash);
    }