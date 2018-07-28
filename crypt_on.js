//a program for generating password based on certain passphrase

var ext = "rezwin rafeek";

function toHash(text)
    {
       var text = ext;
       var hash = "";
         for( i = 0; i < text.length ; ++ i)
         switch(text[i])
                {
                case "a" : hash = hash + "@";break;
                case "b" : hash = hash + "6";break;
                case "c" : hash = hash + "(";break;
                case "d" : hash = hash + "cl";break;
                case "e" : hash = hash + "n";break;
                case "f" : hash = hash + "8";break;
                case "g" : hash = hash + "9";break;
                case "h" : hash = hash + "#";break;
                case "i" : hash = hash + "!";break;
                case "j" : hash = hash + "j";break;
                case "k" : hash = hash + "lc";break;
                case "l" : hash = hash + "1";break;
                case "m" : hash = hash + "nn";break;
                case "n" : hash = hash + "e";break;
                case "o" : hash = hash + "0";break;
                case "p" : hash = hash + "q";break;
                case "q" : hash = hash + "?";break;
                case "r" : hash = hash + "v";break;
                case "s" : hash = hash + "5";break;
                case "t" : hash = hash + "+";break;
                case "u" : hash = hash + "y";break;
                case "v" : hash = hash + "r";break;
                case "w" : hash = hash + "uu";break;
                case "x" : hash = hash + "*";break;
                case "y" : hash = hash + "T";break;
                case "z" : hash = hash + "7";break;
                default :hash = hash + text[i];
                }
                document.writeln(hash);
    }